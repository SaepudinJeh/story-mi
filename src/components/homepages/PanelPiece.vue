<script setup>
  import moment from 'moment/min/moment-with-locales'
  import TemplatePanel from './TemplatePanel.vue';

  moment.locale('id')

  defineProps(['data'])

  const time = (data) => {
    return moment(data).format('dddd, LL')
  }

</script>

<template>
  <TemplatePanel>
    <template #image>
      <div class="flex justify-center mb-5 md:mb-9">
        <div class="w-44 md:w-64 mx-auto">
          <img
            v-if="data?.image[0]?.url"
            v-lazy="data && data?.image[0]?.url"
            class="object-cover bg-center grayscale"
            :alt="data?.title"
          >
        </div>
      </div>
    </template>

    <!-- <template #title>
      <p class="font-title text-lg sm:text-2xl md:text-3xl capitalize text-center">
        {{ data?.title }}
      </p>
    </template> -->

    <template #desc>
      <div class="text-center">
        <div class="">
          {{ data?.desc }}
        </div>

        <span class="text-gray-600 block mt-5 text-xs">
          {{ time(data?.createdStory) }}
        </span>
      </div>
    </template>
  </TemplatePanel>
</template>