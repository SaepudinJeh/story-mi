<template>
  <!-- component -->
  <div class="min-h-screen flex justify-center items-center bg-white font-sans">
    <div class="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
      <div class="py-8 flex flex-col items-center gap-3 text-2xl text-gray-500">
        <img width="100" class="-mt-10 rounded-full" src="../assets/images/login_image.jpg" />
        <p class="font-title">Selamat datang, Mualifah</p>
      </div>
      <input class="focus:outline-none rounded-full p-3 border-[1px] border-slate-200 w-80" placeholder="Masukan email ya ;)" type="email" />
      <div class="flex flex-col space-y-1">
        <input class="focus:outline-none rounded-full p-3 border-[1px] border-slate-200 w-80" placeholder="Jangan lupa juga passwordnya" type="password" />
      </div>
      <div class="flex flex-col w-full pt-5">
        <button class="w-full bg-gray-500 rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-gray-700">Klik ini kalo mau masuk</button>
      </div>
    </div>

    <div class="absolute bottom-0 w-full p-3 bg-[#F7F9FA] flex justify-center items-center space-x-3 text-[14px] font-medium text-[#666]">
      <p class="font-title text-xl">"Angin tidak berhembus untuk menggoyangkan pepohonan melainkan untuk menguji akarnya"</p>
    </div>
  </div>
</template>