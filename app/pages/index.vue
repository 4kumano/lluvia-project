<template>
  <div class="min-h-screen bg-gradient-to-b from-sky-200 to-white font-sans text-gray-800">
    
    <nav class="navbar bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm px-4 lg:px-12">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-2xl font-bold text-sky-600">Lluvia</a>
      </div>
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal px-1 font-medium text-sky-800">
          <li><a href="#home">Home</a></li>
          <li><a href="#order-cheki">Order Cheki</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </div>
      <div class="flex-none md:hidden dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <Icon name="heroicons:bars-3" class="w-6 h-6 text-sky-600" />
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="#home">Home</a></li>
          <li><a href="#order-cheki">Order Cheki</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </div>
    </nav>

    <section id="home" class="relative w-full min-h-screen flex flex-col items-center justify-center pt-10 pb-32 overflow-hidden">
      <div class="relative w-full max-w-6xl mx-auto px-4">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <NuxtImg 
            src="/images/all-member.jpg" 
            alt="Lluvia All Members" 
            width="1920"
            height="1080"
            sizes="sm:100vw md:80vw lg:1920px"
            preload
            fetchpriority="high"
            class="w-full h-auto object-cover"
          />
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 800 } }"
          class="absolute left-0 right-0 flex justify-center -bottom-8 md:-bottom-14"
        >
          <h1 class="text-7xl md:text-9xl font-extrabold text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] tracking-wider uppercase text-center lluvia-stroke">
            Lluvia
          </h1>
        </div>
      </div>
    </section>

    <section id="events" class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center border-2 border-dashed border-sky-300 p-10 rounded-xl bg-white/50">
        <h2 class="text-3xl font-bold text-sky-700">Upcoming Events (To Be Added)</h2>
      </div>
    </section>

    <section id="members" class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center border-2 border-dashed border-sky-300 p-10 rounded-xl bg-white/50">
        <h2 class="text-3xl font-bold text-sky-700">Member Profiles (To Be Added)</h2>
      </div>
    </section>

    <section id="gallery" class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center border-2 border-dashed border-sky-300 p-10 rounded-xl bg-white/50">
        <h2 class="text-3xl font-bold text-sky-700">Gallery (To Be Added)</h2>
      </div>
    </section>

    <section id="contact" class="py-20 px-4 bg-white/60 mt-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-sky-700 mb-6">Contact & Inquiries</h2>
        <p class="text-lg text-gray-600 mb-8">
          Untuk penawaran kerja sama, jadwal manggung, atau pertanyaan lainnya, silakan hubungi manajemen kami.
        </p>
        
        <div class="flex flex-col items-center justify-center gap-4">
          <div class="text-xl font-semibold text-gray-800">
            Manager: <span class="text-sky-600">Nama Manager Lluvia</span>
          </div>
          
          <div class="flex gap-4 mt-4">
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
// Bagian ini nanti digunakan untuk logika interaktif (API calls, data reactive, dll)
// Nuxt 4 otomatis meng-import banyak hal (auto-imports), jadi kita biarkan kosong dulu.
</script>

<style>
/* CSS khusus jika diperlukan. Tailwind biasanya sudah cukup menutupi 99% kebutuhan. */
html {
  scroll-behavior: smooth;
}
.lluvia-stroke {
  -webkit-text-stroke: 2px #38bdf8;
}
</style>