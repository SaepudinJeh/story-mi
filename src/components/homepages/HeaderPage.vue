<script setup>
import { effect } from '../../utils/randomAos';
</script>


<template>
  <div class="h-screen flex items-center justify-center mx-auto w-screen">
    <div class="w-52 relative">
      <div
        class="aspect-h-16 aspect-w-16 rounded-full"
        data-aos-duration="400"
        :data-aos="effect"
      >
        <img
          v-lazy="'/images/alip.svg'"
          alt="aliffah"
          class="grayscale rounded-full object-cover bg-no-repeat bg-center bg-contain shadow border border-gray-600"
        >
      </div>
      <div
        data-aos-once="false"
        data-aos-delay="500"
        data-aos="fade-down-right"
        class="absolute -top-20 -left-16"
      >
        <img
          src="/icons/bubble1.svg"
          alt="chat-1"
          class="w-36"
        >
      </div>

      <div
        data-aos-once="false"
        data-aos-delay="700"
        data-aos="zoom-in-left"
        class="absolute -right-14 -bottom-7"
      >
        <img
          src="/icons/bubble2.svg"
          alt="chat-2"
          class="w-32"
        >
      </div>
    </div>
  </div>
</template>