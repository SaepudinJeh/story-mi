<script setup>
    defineProps(['data'])
</script>

<template>
  <section class="w-full h-screen flex items-center justify-center">
    <div class="flex items-center flex-col gap-y-5">
      <img
        v-if="data?.image[0]?.url"
        v-lazy="data && data?.image[0]?.url"
        class="h-36 w-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-52 md:h-52  rounded-full object-cover shadow-lg"
        alt="alip"
      >
      <h2 class="font-title text-2xl xs:text-xl sm:text-3xl">
        {{ data?.desc }}
      </h2>

      <p class="text-xs">
        {{ data?.createdStory }}
      </p>
    </div>
  </section>
</template>