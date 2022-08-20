<script setup>
  import moment from 'moment/min/moment-with-locales'
  moment.locale('id')

  defineProps(['data'])

  const time = (data) => {
    return moment(data).format('dddd, LL')
  }

  const getDataUser = JSON.parse(localStorage.getItem('user'))?.username || ''

</script>

<template>
  <section class="w-full h-screen flex items-center justify-center">
    <div class="flex items-center flex-col gap-y-5">
      <img
        v-if="data?.image[0]?.url"
        v-lazy="data && data?.image[0]?.url"
        class="h-36 w-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-52 md:h-52  rounded-full object-cover shadow-lg"
        :alt="data?.title"
      >

      <div class="mx-10 lg:mx-[400px] md:mx-[100px] text-center break-all">
        <h2 class="md:text-xl text-base xs:text-base">
          {{ data?.desc }}
        </h2>

        <div class="mt-4 sm:text-sm xss:text-xs text-[10px]">
          <p class="font-title text-lg sm:text-2xl md:text-3xl capitalize">Created by : {{ getDataUser }}</p>

          <p class="sm:mt-2">
            {{ time(data?.createdStory) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>