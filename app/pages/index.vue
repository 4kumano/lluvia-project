<template>
  <div class="min-h-screen bg-gradient-to-b from-sky-200 to-white font-sans text-gray-800">
    
    <nav class="navbar bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm px-4 lg:px-12">
      <div class="flex-1">
        <a href="#home" class="btn btn-ghost normal-case px-2">
          <NuxtImg src="/images/lluvia_NO_BG.webp" alt="Lluvia Logo" class="h-10 md:h-12 w-auto object-contain" />
        </a>
      </div>
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal px-1 font-medium text-sky-800">
          <li><a href="#home">Home</a></li>
          <li><a href="#members">Members</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="flex-none md:hidden dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <Icon name="heroicons:bars-3" class="w-6 h-6 text-sky-600" />
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="#home">Home</a></li>
          <li><a href="#members">Members</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- PANDUAN MENGUBAH JARAK ANTARA NAVBAR, HERO, DAN EVENTS: -->
    <!-- Jarak Atas (Navbar ke Home): ubah class pt-8 (mobile), md:pt-16 (tablet/layar menengah), lg:pt-10 (desktop). Semakin besar angkanya semakin jauh jaraknya ke bawah navbar. -->
    <!-- Jarak Bawah (Home ke batas terbawahnya sebelum events): ubah class pb-36 (mobile), sm:pb-48 (mobile besar), md:pb-40 (tablet), lg:pb-32 (desktop). Karena efek logo yang keluar jalur (absolute -bottom), padding bottom home section dibuat sangat besar khusus di masing-masing ukuran bayangan layar. -->
    <section id="home" class="relative w-full lg:min-h-screen flex flex-col items-center justify-center pt-8 pb-36 sm:pb-48 md:pt-16 md:pb-40 lg:pt-10 lg:pb-32 overflow-hidden">
      <div class="relative w-full max-w-6xl mx-auto px-4">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <NuxtImg 
            src="/images/dashboard.webp" 
            alt="Lluvia All Members" 
            width="1920"
            height="1080"
            sizes="sm:100vw md:80vw lg:1920px"
            preload
            fetchpriority="high"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- PANDUAN MENGUBAH POSISI & UKURAN LOGO HERO: -->
        <!-- Posisi Mobile: ubah -bottom-[10%] (semakin besar angkanya, semakin turun ke bawah hero section). -->
        <!-- Posisi Desktop: ubah md:-bottom-[20%] (mengatur posisi pada layar lebih lebar). -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 800 } }"
          class="absolute left-0 right-0 flex justify-center -bottom-[50%] md:-bottom-[33%]"
        >
          <!-- Ukuran Mobile: saat ini w-[230px] (dikurangi 10% dari sebelumnya). -->
          <!-- Ukuran Tablet: saat ini sm:w-[288px] (dikurangi 10% dari sebelumnya). -->
          <!-- Ukuran Desktop: saat ini md:w-96 dan lg:w-[32rem] -->
          <NuxtImg 
            src="/images/lluvia_NO_BG.webp" 
            alt="Lluvia" 
            class="w-[230px] sm:w-[288px] md:w-96 lg:w-[32rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] object-contain"
          />
        </div>
      </div>
    </section>

    <!-- PANDUAN MENGUBAH JARAK SECTION EVENTS (Jarak Home dengan Events): -->
    <!-- Jarak Atas (Home ke Events): ubah class pt-8 (mobile), md:pt-12 (tablet/desktop). -->
    <!-- Jarak Bawah (Events ke Members): ubah class pb-12 (mobile), md:pb-20 (tablet/desktop). -->
    <section id="events" class="pt-8 pb-12 md:pt-12 md:pb-20 px-4">
      <div class="max-w-4xl mx-auto text-center border-2 border-dashed border-sky-300 p-10 rounded-xl bg-white/50">
        <h2 class="text-3xl font-bold text-sky-700">Upcoming Events (To Be Added)</h2>
      </div>
    </section>

    <section id="members" class="py-16 md:py-24 px-4 relative overflow-hidden">
      <div class="max-w-[1664px] mx-auto">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="text-center mb-12"
        >
          <h2 class="text-4xl md:text-5xl font-extrabold text-sky-700 tracking-wide uppercase">Meet The Members</h2>
          <p class="text-sky-500 mt-3 text-lg font-medium">Let The Rain Connect Us</p>
          <div class="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-wrap justify-center items-stretch gap-8 md:gap-12 px-2">
          <div 
            v-for="(member, index) in members"
            :key="index"
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: index * 200 } }"
            class="w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] max-w-sm"
          >
            <div class="card bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-sky-300/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group border-0 h-full">
              
              <figure class="relative w-full h-full flex items-end">
                <!-- Gambar disesuaikan dengan proporsi tinggi aslinya -->
                <NuxtImg 
                  :src="member.image" 
                  :alt="member.name"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  placeholder
                  v-if="false"
                />
                <!-- Menggunakan tag image standard / w-full h-auto untuk sesuai aslinya tanpa crop -->
                <NuxtImg 
                  :src="member.image" 
                  :alt="member.name"
                  class="w-full h-auto block object-contain"
                  loading="lazy"
                  placeholder
                />
                
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/20 to-transparent"></div>
                
                <!-- Teks overlay: Nama, Catchphrase, Instagram (rata tengah) -->
                <div class="absolute bottom-0 left-0 w-full p-6 pb-8 flex flex-col items-center justify-center text-center text-white">
                  <h3 class="text-3xl lg:text-4xl font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">{{ member.name }}</h3>
                  
                  <p class="text-sm md:text-base font-medium italic mt-2 text-gray-50 drop-shadow-md">
                    "{{ member.catchphrase }}"
                  </p>
                  
                  <a :href="member.instagram" target="_blank" class="mt-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-pink-500 hover:text-white text-white backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg">
                    <Icon name="mdi:instagram" class="w-6 h-6" />
                  </a>
                </div>
              </figure>

            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- NEW SECTION: SONG & LYRICS -->
    <section id="song" class="py-12 md:py-20 px-4 bg-sky-50/50">
      <div class="max-w-4xl mx-auto">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="text-center mb-10"
        >
          <h2 class="text-4xl md:text-5xl font-extrabold text-sky-700 tracking-wide uppercase">Our Music</h2>
          <div class="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-col gap-8 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-sky-100">
          
          <!-- Spotify Embed -->
          <div 
            class="w-full overflow-hidden rounded-2xl shadow-sm"
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200 } }"
          >
            <!-- Ganti src URL iframe ini dengan URL embed Spotify Artis atau Lagu Lluvia yang sebenarnya -->
            <iframe 
              style="border-radius:12px" 
              src="https://open.spotify.com/embed/artist/7bP6PCDkM5JMfGFvneAwdY?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>

          <!-- Lyrics Accordion -->
          <div 
            class="w-full"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          >
            <div class="collapse collapse-arrow bg-sky-50 rounded-2xl border border-sky-100">
              <input type="checkbox" name="my-accordion-2" /> 
              <div class="collapse-title text-xl font-bold text-sky-800">
                <Icon name="mdi:music-note" class="w-6 h-6 mr-2 inline-block text-pink-500" />
                Lirik Lagu: Judul Lagu Pertama
              </div>
              <div class="collapse-content text-gray-700"> 
                <div class="p-4 bg-white rounded-xl shadow-inner text-center md:text-left leading-relaxed">
                  [Verse 1]<br>
                  Kita berjalan di bawah hujan<br>
                  Bersama berbagi satu payung berdua<br>
                  Tetesan air menyapa senyuman<br>
                  Menghapus segala duka lara<br><br>

                  [Chorus]<br>
                  Lluvia... pancarkan cahayamu<br>
                  Di tengah badai kita tetap melangkah maju<br>
                  Lluvia... biarkan rintik ini<br>
                  Menjadi saksi perjuangan tanpa henti<br><br>

                  [Outro]<br>
                  Terus bersinar...<br>
                  Terus bersinar...
                </div>
              </div>
            </div>

            <!-- Contoh lagu kedua jika ada -->
            
            <div class="collapse collapse-arrow bg-sky-50 rounded-2xl border border-sky-100 mt-4">
              <input type="checkbox" name="my-accordion-2" /> 
              <div class="collapse-title text-xl font-bold text-sky-800">
                <Icon name="mdi:music-note" class="w-6 h-6 mr-2 inline-block text-pink-500" />
                Lirik Lagu: Judul Lagu Kedua
              </div>
              <div class="collapse-content text-gray-700"> 
                <div class="p-4 bg-white rounded-xl shadow-inner text-center md:text-left leading-relaxed">
                  Lirik lagu kedua disini...<br>
                  Gunakan &lt;br&gt; di akhir kalimat untuk pindah ke baris baru.<br>
                  Gunakan &lt;br&gt;&lt;br&gt; untuk memberikan jarak 1 baris kosong (paragraf).
                </div>
              </div>
            </div> 
           
          </div>

        </div>
      </div>
    </section>

    <section id="gallery" class="py-12 md:py-20 px-4">
      <div class="max-w-4xl mx-auto text-center border-2 border-dashed border-sky-300 p-10 rounded-xl bg-white/50">
        <h2 class="text-3xl font-bold text-sky-700">Gallery (To Be Added)</h2>
      </div>
    </section>

    <section id="contact" class="py-12 md:py-20 px-4 bg-white/60 mt-4 md:mt-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-sky-700 mb-6">Contact & Inquiries</h2>
        <p class="text-lg text-gray-600 mb-8">
          Untuk penawaran kerja sama, jadwal manggung, atau pertanyaan lainnya, silakan hubungi manajemen kami.
        </p>
        
        <div class="flex flex-col items-center justify-center gap-4">
        
          <!-- Tombol Ratecard -->
          <a href="/dokumen_ratecard.pdf" target="_blank" rel="noopener noreferrer" class="btn border-none bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 rounded-full px-8 mb-2">
            <Icon name="mdi:file-document-outline" class="w-6 h-6 mr-1" />
            Ratecard
          </a>

          <div class="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Icon name="mdi:phone" class="w-6 h-6 text-sky-600" />
            <span class="text-sky-600">0812-xxx-xxx</span>
          </div>
          
          <div class="flex flex-wrap justify-center gap-4 mt-4">
            <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-outline border-sky-400 text-sky-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 rounded-full px-6">
              <Icon name="mdi:whatsapp" class="w-6 h-6" />
              WhatsApp
            </a>
            
            <a href="https://instagram.com/lluvia_project" target="_blank" class="btn btn-outline border-pink-400 text-pink-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent rounded-full px-6">
              <Icon name="mdi:instagram" class="w-6 h-6" />
              Instagram
            </a>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const members = [
  {
    name: 'Mily',
    
    image: '/images/profil_mily.webp',
    catchphrase: 'Suaraku adalah pelukan hangat untukmu.',
    instagram: '#',
  },
  {
    name: 'Dede',
    
    image: '/images/profil_dede.webp',
    catchphrase: 'Visual yang siap mencuri hatimu dalam sekejap.',
    instagram: '#',
  },
  
  {
    name: 'Yora',

    image: '/images/profil_yora.webp',
    catchphrase: 'Si bungsu yang selalu butuh dukungan dari kakak-kakak!',
    instagram: '#',
    
  }
]
</script>

<style>
/* CSS khusus jika diperlukan. Tailwind biasanya sudah cukup menutupi 99% kebutuhan. */
html {
  scroll-behavior: smooth;
}

</style>