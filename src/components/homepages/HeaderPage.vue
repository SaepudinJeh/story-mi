<script setup>
import { effect } from '../../utils/randomAos';
</script>


<template>
  <section class="w-full h-screen flex items-center justify-center">
    <div class="flex items-center flex-col gap-y-5">
      <img
        v-lazy="'https://res.cloudinary.com/stories-1999-2100/image/upload/v1656216575/image-header/alip_d1hnhj.jpg'"
        :data-aos="effect"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        class="h-36 w-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-52 md:h-52  rounded-full object-cover shadow-lg"
        alt="alip"
      >
      <h2
        :data-aos="effect"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-center"
        class="font-title text-2xl xs:text-xl sm:text-3xl"
      >
        Cuma manusia yang hobi makan
      </h2>
    </div>
  </section>
</template>