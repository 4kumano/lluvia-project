export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const sheet = query.sheet as string
  const sheetId = query.id as string

  if (!sheetId) {
    throw createError({ statusCode: 400, message: 'Missing Google Sheet ID' })
  }

  if (!sheet) {
    throw createError({ statusCode: 400, message: 'Missing sheet name' })
  }

  const allowedSheets = ['members', 'events', 'cta', 'gallery', 'contact']
  if (!allowedSheets.includes(sheet)) {
    throw createError({ statusCode: 400, message: `Invalid sheet: ${sheet}` })
  }

  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheet)}`
    const response = await $fetch<string>(url, { responseType: 'text' })

    // Google returns: /*O_o*/ google.visualization.Query.setResponse({...});
    // We need to extract the JSON inside
    const jsonMatch = response.match(/google\.visualization\.Query\.setResponse\((.+)\);?\s*$/)
    if (!jsonMatch) {
      throw new Error('Failed to parse Google Sheets response')
    }

    const data = JSON.parse(jsonMatch[1]!)
    let cols: string[] = data.table.cols.map((col: any) => col.label?.toLowerCase().trim() || '')
    let dataRows = data.table.rows

    // If all column labels are empty, use the first data row as headers
    const allLabelsEmpty = cols.every((c: string) => c === '')
    if (allLabelsEmpty && dataRows.length > 0) {
      cols = dataRows[0].c.map((cell: any) => cell?.v ? String(cell.v).toLowerCase().trim() : '')
      dataRows = dataRows.slice(1) // Remove header row from data
    }

    const rows = dataRows.map((row: any) => {
      const obj: Record<string, any> = {}
      row.c.forEach((cell: any, i: number) => {
        if (cols[i]) {
          // For date cells, prefer the formatted value (f) over the raw Date() value
          const rawVal = cell?.v != null ? String(cell.v) : ''
          const fmtVal = cell?.f != null ? String(cell.f) : ''
          obj[cols[i]] = (rawVal.startsWith('Date(') && fmtVal) ? fmtVal : rawVal
        }
      })
      return obj
    })

    // Filter out empty rows
    const filteredRows = rows.filter((row: Record<string, any>) =>
      Object.values(row).some((v) => v !== '')
    )

    // Transform data based on sheet type
    const transformed = filteredRows.map((row: Record<string, any>) => transformRow(row, sheet))

    return { data: transformed }
  } catch (err: any) {
    console.error(`[sheets API] Error fetching sheet "${sheet}":`, err.message)
    throw createError({ statusCode: 500, message: `Failed to fetch sheet: ${sheet}` })
  }
})

/**
 * Convert Google Drive share URL to proxied image URL
 * Input:  https://drive.google.com/file/d/{FILE_ID}/view?usp=drive_link
 * Output: /api/image-proxy?url=https://lh3.googleusercontent.com/d/{FILE_ID}
 */
function driveUrlToDirectImage(url: string): string {
  if (!url) return ''
  // Already a local/non-Drive URL
  if (!url.includes('drive.google.com')) return url

  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (match) {
    const directUrl = `https://lh3.googleusercontent.com/d/${match[1]}`
    return `/api/image-proxy?url=${encodeURIComponent(directUrl)}`
  }
  return url
}

/**
 * Parse date from M/D/YYYY format (Google Sheets US locale) or Date(yyyy,m,d) format
 */
function parseDate(dateStr: string): { day: string; month: string; year: string } {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Handle "Date(yyyy,m,d)" format from Google Sheets (0-based month)
  const gDateMatch = dateStr.match(/Date\((\d+),(\d+),(\d+)\)/)
  if (gDateMatch) {
    const year = gDateMatch[1]!
    const monthIndex = parseInt(gDateMatch[2]!) // 0-based in Google's format
    const day = gDateMatch[3]!
    return { day, month: months[monthIndex]! || '', year }
  }

  // Handle M/D/YYYY format (Google Sheets formatted value, US locale)
  const parts = dateStr.split('/')
  if (parts.length === 3) {
    const monthIndex = parseInt(parts[0]!) - 1 // M is 1-based
    const day = parts[1]!
    const year = parts[2]!
    return { day, month: months[monthIndex]! || '', year }
  }

  return { day: '', month: '', year: '' }
}

function transformRow(row: Record<string, any>, sheet: string): Record<string, any> {
  switch (sheet) {
    case 'members':
      return {
        name: row.nama || '',
        catchphrase: row.catchphrase || '',
        instagram: row.instagram || '',
        image: driveUrlToDirectImage(row.images || ''),
      }

    case 'events':
      return {
        name: row.nama_event || '',
        date: parseDate(row.date || ''),
        location: row.location || '',
        link: row.link || '#',
        isAvailable: row.isavailable === '1' || row.isavailable === 'TRUE' || row.isavailable === 'true',
      }

    case 'cta':
      return {
        name: (row.nama || '').toLowerCase(),
        form: row.form || '#',
      }

    case 'gallery':
      return {
        image: driveUrlToDirectImage(row.url_gdrive || ''),
      }

    case 'contact':
      return {
        manager: row.manajer || '',
        whatsapp: row.whatsapp || '',
        instagram: row.instagram || '',
        ratecard: row.ratecard || '#',
      }

    default:
      return row
  }
}
