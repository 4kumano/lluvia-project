export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string

  if (!url) {
    throw createError({ statusCode: 400, message: 'Missing url parameter' })
  }

  // Only allow proxying Google Drive / Google User Content URLs
  const allowedHosts = ['lh3.googleusercontent.com', 'drive.google.com']
  let parsedUrl: URL
  try {
    parsedUrl = new URL(url)
  } catch {
    throw createError({ statusCode: 400, message: 'Invalid URL' })
  }

  if (!allowedHosts.some(host => parsedUrl.hostname.includes(host))) {
    throw createError({ statusCode: 403, message: 'URL not allowed' })
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      redirect: 'follow',
    })

    if (!response.ok) {
      throw createError({ statusCode: response.status, message: 'Failed to fetch image' })
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg'
    const buffer = await response.arrayBuffer()

    setResponseHeaders(event, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'Access-Control-Allow-Origin': '*',
    })

    return new Uint8Array(buffer)
  } catch (err: any) {
    if (err.statusCode) throw err
    console.error('[image-proxy] Error:', err.message)
    throw createError({ statusCode: 500, message: 'Failed to proxy image' })
  }
})
