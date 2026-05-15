<template>
  <div class="min-h-screen bg-gradient-to-b from-sky-200 to-white font-sans text-gray-800">
    
    <nav class="navbar bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm px-4 lg:px-12">
      <div class="flex-1">
        <a href="#home" class="btn btn-ghost normal-case px-2">
          <NuxtImg src="/images/lluvia_NO_BG.webp" alt="Lluvia Logo" width="100" height="40" class="h-10 md:h-12 w-auto object-contain" />
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
    <section id="home" class="relative w-full lg:min-h-screen flex flex-col items-center justify-center pt-32 pb-44 sm:pb-48 md:pt-16 md:pb-40 lg:pt-10 lg:pb-32 overflow-hidden">
      <div class="relative w-full max-w-6xl mx-auto px-4">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <NuxtImg 
            :src="dashboardImage" 
            alt="Lluvia All Members" 
            width="1920"
            height="1080"
            sizes="sm:100vw md:80vw lg:1920px"
            loading="lazy"
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
            :src="logoImage" 
            alt="Lluvia" 
            width="512"
            height="512"
            loading="lazy"
            class="w-[230px] sm:w-[288px] md:w-96 lg:w-[32rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] object-contain"
          />
        </div>
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

        <!-- Accordion Flex Container -->
        <div class="flex flex-col md:flex-row md:h-[500px] xl:h-[550px] w-full max-w-[1400px] mx-auto gap-4 px-2">
          
          <div 
            v-for="(member, index) in members"
            :key="index"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: index * 100 } }"
            class="transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col md:flex-row group shrink-0"
            :class="[
              selectedMemberIndex === null 
                ? 'w-full md:flex-1 aspect-[9/16] md:aspect-auto md:h-full' 
                : selectedMemberIndex === index 
                  ? 'w-full md:w-[680px] lg:w-[800px] xl:w-[930px] h-auto md:h-full shrink-0' 
                  : 'w-full md:flex-1 md:min-w-[45px] lg:min-w-[60px] h-[90px] md:h-full shrink-0 md:shrink'
            ]"
          >
            <!-- Member Card Image -->
            <div 
              class="relative bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer shrink-0 md:shrink transition-all duration-700 w-full md:w-auto md:flex-1"
              :class="[
                selectedMemberIndex === null
                  ? 'aspect-[9/16] md:aspect-auto md:h-full'
                  : selectedMemberIndex === index 
                    ? 'aspect-[9/16] md:aspect-auto md:h-full md:rounded-r-none shadow-2xl z-20' 
                    : 'h-[90px] md:h-full'
              ]"
              @click="selectedMemberIndex !== index ? toggleMemberBio(index) : null"
            >
              <img 
                :src="member.image" 
                :alt="member.name"
                class="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              <!-- Dark Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/20 to-transparent"></div>
              
              <!-- Text Overlay: Selected State -->
              <div 
                class="absolute bottom-0 left-0 w-full p-5 lg:p-6 xl:p-8 flex flex-col items-start justify-end transition-opacity duration-500"
                :class="selectedMemberIndex === index ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'"
              >
                <h3 class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">{{ member.name }}</h3>
              </div>

              <!-- Text Overlay: Unselected State & All Unselected on Desktop -->
              <div 
                class="absolute inset-0 flex flex-col items-center transition-opacity duration-500 pointer-events-none"
                :class="selectedMemberIndex !== index ? 'opacity-100' : 'opacity-0'"
              >
              
                <!-- Desktop: Horizontal Text -->
                <div class="hidden md:flex h-full items-end justify-center w-full px-1 pb-6 md:pb-8">
                  <h2 
                    class="text-xs lg:text-sm xl:text-xl font-extrabold text-gray-100 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-500 text-center truncate w-full"
                  >
                    {{ member.name }}
                  </h2>
                </div>
                
                <!-- Mobile: Horizontal Centered Text -->
                <div class="md:hidden flex h-full items-center justify-center">
                  <h3 
                    class="text-3xl sm:text-4xl font-extrabold text-white tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] uppercase"
                    :class="selectedMemberIndex === null ? 'mt-auto mb-8' : ''"
                  >
                    {{ member.name }}
                  </h3>
                </div>
              </div>
            </div>

            <!-- BIODATA PANEL -->
            <!-- Mobile: bawah card. Desktop: memanjang di kanan image -->
            <div 
              class="bg-sky-50 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0 max-h-[500px] md:max-h-[800px]"
              :class="[
                selectedMemberIndex === index 
                  ? 'opacity-100 w-full md:w-[400px] lg:w-[520px] xl:w-[620px] md:flex-none mt-4 md:mt-0 px-5 py-5 md:p-8 rounded-2xl md:rounded-l-none border border-sky-200 shadow-2xl md:border-l-0' 
                  : 'opacity-0 w-full md:w-[0.01px] h-0 md:h-full p-0 border-0 mt-0 m-0'
              ]"
            >
              <div class="w-full h-full flex flex-col min-w-[280px]">
                <!-- Header -->
                <div class="flex justify-between items-center mb-4 border-b-2 border-sky-200 pb-3 w-full shrink-0">
                  <h4 class="text-2xl md:text-3xl font-extrabold text-sky-800 tracking-tight">Biodata</h4>
                  <button @click.stop="toggleMemberBio(index)" class="btn btn-sm btn-circle bg-sky-200 hover:bg-pink-400 hover:text-white border-none text-sky-700 shadow-sm transition-colors">
                    <Icon name="mdi:close-thick" class="w-4 h-4" />
                  </button>
                </div>
                
                <!-- Isi Biodata -->
                <div class="text-gray-700 whitespace-pre-line overflow-y-auto flex-grow max-h-[200px] md:max-h-none text-sm md:text-base font-medium leading-relaxed w-full pr-2" style="scrollbar-width: thin; scrollbar-color: #bae6fd transparent;">
                  {{ member.biodata?.trim() || 'Belum Ada data' }}
                </div>
                
                <!-- Footer -->
                <div class="mt-4 pt-3 border-t border-sky-200/50 flex flex-col sm:flex-row justify-between items-center gap-3 w-full shrink-0">
                  <p class="italic text-sky-600 font-bold text-sm text-center sm:text-left">"{{ member.catchphrase }}"</p>
                  <div class="flex gap-2 shrink-0">
                    <a v-if="member.tiktok" :href="member.tiktok" target="_blank" @click.stop class="btn btn-sm bg-black hover:bg-gray-800 text-white border-none rounded-full px-4 shadow-md hover:-translate-y-1 transition-all">
                      <Icon name="bi:tiktok" class="w-4 h-4 mr-1" /> TikTok
                    </a>
                    <a v-if="member.instagram" :href="member.instagram" target="_blank" @click.stop class="btn btn-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-none rounded-full px-4 shadow-md hover:-translate-y-1 transition-all">
                      <Icon name="mdi:instagram" class="w-4 h-4 mr-1" /> Instagram
                    </a>
                  </div>
                </div>
              </div>
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
                Lirik Lagu: Lluvia - Bersama Hujan
              </div>
              <div class="collapse-content text-gray-700"> 
                <div class="p-4 bg-white rounded-xl shadow-inner text-center md:text-left leading-relaxed">
                  Ceria dan bahagia<br>
                  Bersama turunnya hujan<br><br>

                  ‘Ku termangu di bawah sang kelabu<br>
                  Menanti turunnya hujan yang pilu<br>
                  Gelisah di dalam benakku<br>
                  Dan hujan yang menderu<br>
                  Diterpa angin yang sendu<br><br>

                  Namun bayangmu kini<br>
                  Telah dapat ‘ku lihat lagi<br>
                  Hujan telah bawamu kembali<br>
                  Sadarkan dengan pasti<br>
                  Bahwa aku pemilik hati<br>
                  Dan kini~<br><br>

                  Ceria dan bahagia<br>
                  Senyumku berbinar lagi<br>
                  Kau t’lah hapuskan duka<br>
                  Kar’na hadirmu lagi<br><br>

                  Cobalah kau dengarkan<br>
                  Hujan yang enggan berhenti<br>
                  S’perti ingin menahan<br>
                  Agar kau tetap di sini<br><br>

                  Bersama hujan<br>
                  Yang t’lah turun dengan syahdu<br>
                  Satukan<br>
                  Dirimu dan diriku<br><br>

                  LET THE RAIN CONNECT US!!<br><br>

                  Jangan biarkan rintik hujan ‘kan menjadi derai<br>
                  Yang bawa luka lama di hariku tanpamu<br>
                  Biarlah ku nikmati rasa ini<br>
                  Rasa bahagia saat ‘ku bersamamu<br>
                  Kar’na kini..<br><br>

                  Dan kini ‘ku bahagia<br>
                  Kau t’lah hadir di sisiku<br>
                  Wajahku pun merona<br>
                  Saat kau tatap mataku<br><br>

                  Ceria dan bahagia<br>
                  Senyumku berbinar lagi<br>
                  Kau t’lah hapuskan duka<br>
                  Kar’na hadirmu lagi<br><br>

                  Cobalah kau dengarkan<br>
                  Hujan yang enggan berhenti<br>
                  S’perti ingin menahan<br>
                  Agar kau tetap di sini<br><br>

                  Bersama hujan<br>
                  Yang t’lah turun dengan syahdu<br>
                  Satukan<br>
                  Dirimu dan diriku<br><br>

                  Lalalala<br>
                  Lalalala<br>
                  Hujan satukan kita bersama<br>
                  Lalalala<br>
                  Lalalala
                </div>
              </div>
            </div>

            <!-- Contoh lagu kedua jika ada -->
            <!-- <div class="collapse collapse-arrow bg-sky-50 rounded-2xl border border-sky-100 mt-4">
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
            </div>  -->
           
          </div>

        </div>
      </div>
    </section>



    <!-- Jarak Atas (Home ke Events): ubah class pt-8 (mobile), md:pt-12 (tablet/desktop). -->
    <!-- Jarak Bawah (Events ke Members): ubah class pb-12 (mobile), md:pb-20 (tablet/desktop). -->
    <section v-if="events && events.length > 0" id="events" class="pt-8 pb-12 md:pt-12 md:pb-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div 
          class="text-center mb-10"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <h2 class="text-4xl md:text-5xl font-extrabold text-sky-700 tracking-wide uppercase">Upcoming Events</h2>
          <div class="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-col items-center gap-4">
          <div 
            v-for="(event, index) in events"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
            class="w-full max-w-lg group block p-4 bg-white rounded-2xl border border-sky-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-200 transition-all duration-300"
          >
              <div class="flex gap-4 items-center">
                  
                  <div class="flex-none text-center bg-sky-50 rounded-2xl p-4 min-w-[80px] group-hover:bg-sky-100 transition-colors">
                      <span class="block text-xs uppercase font-bold text-gray-500">{{ event.date.month }}</span>
                      <span class="block text-3xl font-black text-sky-600">{{ event.date.day }}</span>
                      <span class="block text-xs font-bold text-gray-500">{{ event.date.year }}</span>
                  </div>

                  <div class="flex-1 min-w-0 text-left">
                      <h4 class="font-bold text-lg truncate group-hover:text-sky-600 transition-colors">
                          {{ event.name }}
                      </h4>
                      <p class="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Icon name="heroicons:map-pin" class="w-4 h-4 text-sky-500 shrink-0" />
                          <span class="truncate">{{ event.location }}</span>
                      </p>
                      <div class="mt-3">
                          <a v-if="event.isAvailable && event.link !== '#'" :href="event.link" target="_blank" class="inline-flex items-center gap-1 text-xs font-semibold bg-sky-100 text-sky-700 px-3 py-1.5 rounded-full hover:bg-sky-200 transition-colors">
                              <Icon v-if="event.link.includes('instagram.com')" name="mdi:instagram" class="w-4 h-4" />
                              <Icon v-else name="mdi:ticket" class="w-4 h-4" />
                              Lihat Event
                          </a>
                          <span v-else class="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full italic">
                              Coming Soon
                          </span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>

        <!-- NEW SECTION: LIVE PERFORMANCES (YOUTUBE EMBEDS) -->
    <section id="yt_embed" v-if="ytVideos && ytVideos.length > 0" class="py-12 md:py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto text-center">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="mb-10"
        >
          <h2 class="text-4xl md:text-5xl font-extrabold text-sky-700 tracking-wide uppercase">Live Performances</h2>
          <div class="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-6 md:gap-8">
          <div 
            v-for="(video, index) in ytVideos" 
            :key="index"
            class="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md overflow-hidden shadow-lg border border-sky-100 hover:shadow-xl transition-shadow rounded-2xl"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          >
            <iframe 
              v-if="video.embed_url"
              :src="video.embed_url" 
              class="w-full aspect-video"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA SECTION -->
    <section id="cta" class="pt-20 pb-4 md:pt-16 md:pb-8 px-4 relative z-10 mt-24 md:mt-0">
      <div 
        class="max-w-4xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <div class="text-center mb-10">
          <h2 class="text-4xl md:text-5xl font-extrabold text-sky-700 tracking-wide uppercase">Cheki & Merch</h2>
          <div class="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center">
          
          <!-- Order Cheki Card -->
          <div class="card bg-white w-full max-w-[320px] shadow-xl hover:shadow-sky-300/50 transition-all duration-300 border-2 border-pink-100 group">
            <figure class="relative h-64 m-4 rounded-xl overflow-hidden">
              <img 
                :src="chekiImage" 
                alt="Contoh Cheki" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </figure>
            <div class="card-body items-center text-center pt-0 pb-8">
              <h2 class="card-title text-2xl font-bold text-sky-700">Order Cheki</h2>
              <p class="text-gray-500 text-sm mb-4">Dapatkan foto polaroid eksklusif bersama member favoritmu!</p>
              <div class="card-actions">
                <a :href="chekiFormLink" target="_blank" class="btn bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white border-none rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <Icon name="mdi:cart-outline" class="w-5 h-5 mr-1" /> Pesan Sekarang
                </a>
              </div>
            </div>
          </div>

          <!-- Order Merch Card -->
          <div class="card bg-white w-full max-w-[320px] shadow-xl hover:shadow-sky-300/50 transition-all duration-300 border-2 border-sky-100 group">
            <figure class="relative h-64 m-4 rounded-xl overflow-hidden">
              <img 
                :src="merchImage" 
                alt="Official Merch" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </figure>
            <div class="card-body items-center text-center pt-0 pb-8">
              <h2 class="card-title text-2xl font-bold text-sky-700">Official Merch</h2>
              <p class="text-gray-500 text-sm mb-4">Koleksi merchandise resmi Lluvia untuk menemanimu!</p>
              <div class="card-actions">
                <a :href="merchFormLink" target="_blank" class="btn bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white border-none rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <Icon name="mdi:shopping-outline" class="w-5 h-5 mr-1" /> Lihat Katalog
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="gallery" class="py-12 md:py-20 px-4 overflow-hidden">
      <div 
        class="max-w-6xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <div class="text-center mb-10 md:mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold text-sky-700 tracking-wide uppercase">Gallery</h2>
          <div class="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] group flex justify-center items-center">
          <!-- Slide Images -->
          <div 
            v-for="(image, index) in galleryImages" 
            :key="image"
            class="absolute top-0 h-full transition-all duration-700 ease-out rounded-xl md:rounded-3xl shadow-2xl overflow-hidden"
            :class="[
              index === currentGalleryIndex ? 'left-1/2 -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[55%] z-20 opacity-100 scale-100 border-4 border-white' : 
              index === (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length ? 'left-[15%] sm:left-[20%] md:left-[25%] -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[55%] z-10 opacity-50 scale-90 cursor-pointer hover:opacity-75 border-4 border-white/50' :
              index === (currentGalleryIndex + 1) % galleryImages.length ? 'left-[85%] sm:left-[80%] md:left-[75%] -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[55%] z-10 opacity-50 scale-90 cursor-pointer hover:opacity-75 border-4 border-white/50' :
              'left-1/2 -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[55%] z-0 opacity-0 scale-75 pointer-events-none'
            ]"
            @click="goToImage(index)"
          >
            <img :src="image" alt="Gallery Image" class="w-full h-full object-cover" loading="lazy" />
          </div>

          <!-- Navigation Controls -->
          <div class="absolute inset-0 flex items-center justify-between p-2 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
            <button @click="prevImage" class="btn btn-circle btn-sm md:btn-md lg:btn-lg bg-white/70 hover:bg-white border-none text-sky-800 shadow-xl backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
              <Icon name="heroicons:chevron-left-solid" class="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <button @click="nextImage" class="btn btn-circle btn-sm md:btn-md lg:btn-lg bg-white/70 hover:bg-white border-none text-sky-800 shadow-xl backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
              <Icon name="heroicons:chevron-right-solid" class="w-5 h-5 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        <!-- Indicators -->
        <div class="mt-8 md:mt-12 flex justify-center gap-2 px-4 flex-wrap max-w-3xl mx-auto">
          <button 
            v-for="(_, index) in galleryImages" 
            :key="index"
            @click="goToImage(index)"
            class="h-2.5 rounded-full transition-all duration-300"
            :class="currentGalleryIndex === index ? 'w-8 bg-sky-600 shadow-md' : 'w-2.5 bg-sky-200 hover:bg-sky-400'"
          ></button>
        </div>
      </div>
    </section>

    <section id="contact" class="py-12 md:py-20 px-4 bg-white/60 mt-4 md:mt-10">
      <div 
        class="max-w-3xl mx-auto text-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h2 class="text-4xl font-bold text-sky-700 mb-6">Contact & Inquiries</h2>
        <p class="text-lg text-gray-600 mb-8">
          Untuk penawaran kerja sama, jadwal manggung, atau pertanyaan lainnya, silakan hubungi manajemen kami.
        </p>
        
        <div class="flex flex-col items-center justify-center gap-4">
        
          <!-- Tombol Ratecard -->
          <a :href="contact.ratecard" target="_blank" rel="noopener noreferrer" class="btn border-none bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 rounded-full px-8 mb-2">
            <Icon name="mdi:file-document-outline" class="w-6 h-6 mr-1" />
            Ratecard
          </a>

          <div class="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Icon name="mdi:phone" class="w-6 h-6 text-sky-600" />
            <span class="text-sky-600">{{ contact.whatsapp }} ({{ contact.manager }})</span>
          </div>
          
          <div class="flex flex-wrap justify-center gap-4 mt-4">
            <a :href="'https://wa.me/' + contact.whatsapp.replace(/[^0-9]/g, '')" target="_blank" class="btn btn-outline border-sky-400 text-sky-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 rounded-full px-6">
              <Icon name="mdi:whatsapp" class="w-6 h-6" />
              WhatsApp
            </a>
            
            <a :href="contact.instagram" target="_blank" class="btn btn-outline border-pink-400 text-pink-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent rounded-full px-6">
              <Icon name="mdi:instagram" class="w-6 h-6" />
              Instagram
            </a>

          </div>
        </div>
      </div>
    </section>

    <!-- Footer Copyright -->
    <footer class="py-6 text-center text-sm font-medium text-sky-700/80 bg-white/30 border-t border-sky-100/50">
      <p>&copy; {{ new Date().getFullYear() }} Lluvia Project. Developed by <a href="https://akumano.my.id/" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-sky-600 hover:underline transition-colors">Akumano</a>. All Rights Reserved.</p>
    </footer>

  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const sheetId = config.public.googleSheetId

// ============================================================
// FALLBACK DATA (used when Google Sheets is not configured/available)
// ============================================================
const fallbackMembers = [
  {
    name: 'Mily',
    image: '/images/profil_mily.webp',
    catchphrase: 'siberuang yang akan terus berlarian dikepalamu, hola aku mily!',
    instagram: 'https://www.instagram.com/milyy_chuu',
    biodata: '',
    tiktok: '',
  },
  {
    name: 'Dede',
    image: '/images/profil_dede.webp',
    catchphrase: 'Si kecil ceria, suka menarii, hai aku dede!',
    instagram: 'https://www.instagram.com/k4ylidde',
    biodata: '',
    tiktok: '',
  },
  {
    name: 'Yora',
    image: '/images/profil_yora.webp',
    catchphrase: 'sang bintang penyuka diksi, hai i\'m Yora, siap membawa mu menuju bianglala!',
    instagram: 'https://www.instagram.com/mellyora.a',
    biodata: '',
    tiktok: '',
  }
]

const fallbackEvents = [

]

const fallbackGallery = [
  '/images/gallery/1762347551689.webp',
  '/images/gallery/IMG_0213.webp',
  '/images/gallery/IMG_0253.webp',
  '/images/gallery/IMG_0269.webp',
  '/images/gallery/IMG_0271.webp',
  '/images/gallery/IMG_0287.webp',
  '/images/gallery/IMG_0297.webp',
  '/images/gallery/IMG_8687.webp',
  '/images/gallery/IMG_8703.webp',
  '/images/gallery/IMG_8741.webp',
  '/images/gallery/IMG_9398.webp',
  '/images/gallery/IMG_9399.webp',
  '/images/gallery/IMG_9404.webp',
  '/images/gallery/IMG_9417.webp',
  '/images/gallery/IMG_9420.webp',
  '/images/gallery/IMG_9421.webp',
  '/images/gallery/IMG_9425.webp',
]

const fallbackContact = {
  manager: 'Rengga',
  whatsapp: '0851-5712-4199',
  instagram: 'https://instagram.com/lluvia_project',
  ratecard: '/dokumen_ratecard.pdf',
}

// ============================================================
// FETCH DATA FROM GOOGLE SHEETS
// ============================================================
const fetchSheet = (sheet) => {
  if (!sheetId) return { data: ref(null) }
  return useFetch('/api/sheets', {
    query: { id: sheetId, sheet },
    default: () => null,
  })
}

const { data: membersData } = fetchSheet('members')
const { data: eventsData } = fetchSheet('events')
const { data: ctaData } = fetchSheet('cta')
const { data: galleryData } = fetchSheet('gallery')
const { data: contactData } = fetchSheet('contact')
const { data: homeData } = fetchSheet('home')
const { data: ytSheetData } = fetchSheet('yt')

// ============================================================
// COMPUTED DATA (with fallback)
// ============================================================
const dashboardImage = computed(() => {
  const found = homeData.value?.data?.find(h => h.name === 'dashboard')
  return found?.image || '/images/dashboard.webp'
})

const logoImage = computed(() => {
  const found = homeData.value?.data?.find(h => h.name === 'logo')
  return found?.image || '/images/lluvia_NO_BG.webp'
})

const ytVideos = computed(() => {
  if (ytSheetData.value?.data?.length) return ytSheetData.value.data
  return []
})

const members = computed(() => {
  if (membersData.value?.data?.length) return membersData.value.data
  return fallbackMembers
})

const events = computed(() => {
  let sourceEvents = fallbackEvents
  if (eventsData.value?.data?.length) {
    sourceEvents = eventsData.value.data
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return sourceEvents.filter(event => {
    if (!event.date || !event.date.day || !event.date.month || !event.date.year) return true
    
    const eventDate = new Date(`${event.date.month} ${event.date.day}, ${event.date.year}`)
    
    if (isNaN(eventDate.getTime())) return true // Fallback jika invalid format
    
    return eventDate >= today
  })
})

const galleryImages = computed(() => {
  if (galleryData.value?.data?.length) return galleryData.value.data.map(g => g.image)
  return fallbackGallery
})

const contact = computed(() => {
  if (contactData.value?.data?.length) return contactData.value.data[0]
  return fallbackContact
})

// CTA: get form & image links for cheki and merch
const chekiFormLink = computed(() => {
  const cta = ctaData.value?.data?.find(c => c.name === 'cheki')
  return cta?.form || '#'
})

const chekiImage = computed(() => {
  const cta = ctaData.value?.data?.find(c => c.name === 'cheki')
  return cta?.image || '/images/cheki_example.webp'
})

const merchFormLink = computed(() => {
  const cta = ctaData.value?.data?.find(c => c.name === 'merch')
  return cta?.form || '#'
})

const merchImage = computed(() => {
  const cta = ctaData.value?.data?.find(c => c.name === 'merch')
  return cta?.image || '/images/merch.webp'
})

// ============================================================
// MEMBERS STATE & LOGIC
// ============================================================
const selectedMemberIndex = ref(null);
const memberCardRefs = ref({});
const memberCardHeight = ref(null);

const toggleMemberBio = (index) => {
  if (selectedMemberIndex.value === index) {
    selectedMemberIndex.value = null;
    memberCardHeight.value = null;
  } else {
    // Capture card height before opening biodata
    const cardEl = memberCardRefs.value[index];
    if (cardEl) {
      memberCardHeight.value = cardEl.offsetHeight;
    }
    selectedMemberIndex.value = index;
  }
};

// ============================================================
// GALLERY STATE & LOGIC
// ============================================================
const currentGalleryIndex = ref(0);
let galleryInterval = null;

onMounted(() => {
  currentGalleryIndex.value = Math.floor(Math.random() * galleryImages.value.length);
  startInterval();
});

onUnmounted(() => {
  if (galleryInterval) clearInterval(galleryInterval);
});

const startInterval = () => {
  if (galleryInterval) clearInterval(galleryInterval);
  galleryInterval = setInterval(() => {
    currentGalleryIndex.value = (currentGalleryIndex.value + 1) % galleryImages.value.length;
  }, 5000);
};

const nextImage = () => {
  currentGalleryIndex.value = (currentGalleryIndex.value + 1) % galleryImages.value.length;
  startInterval();
};

const prevImage = () => {
  currentGalleryIndex.value = (currentGalleryIndex.value - 1 + galleryImages.value.length) % galleryImages.value.length;
  startInterval();
};

const goToImage = (index) => {
  currentGalleryIndex.value = index;
  startInterval();
};
</script>

<style>
/* CSS khusus jika diperlukan. Tailwind biasanya sudah cukup menutupi 99% kebutuhan. */
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Biodata slide transitions */
.bio-slide-enter-active,
.bio-slide-leave-active {
  transition: all 0.4s ease;
}
.bio-slide-enter-from,
.bio-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
@media (min-width: 768px) {
  .bio-slide-enter-from,
  .bio-slide-leave-to {
    transform: translateX(-50px);
    opacity: 0;
  }
  .bio-wrapper-locked {
    max-height: var(--card-h, auto);
    overflow: hidden;
  }
}
</style>