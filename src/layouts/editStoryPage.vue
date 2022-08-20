<script setup>
import { computed, ref } from 'vue';
import { Field, CellGroup, Form, Uploader, Button, Toast, Icon, Calendar } from 'vant';

import Loader_eye from '../components/loaders/loader_eye.vue';
import { useStore } from 'vuex';

const store = useStore()

const afterRead = (file) => {
  console.log(file)
}

const beforeReadImage = (file) => {
  if (file.type === 'image/png' || file.type === 'image/jpeg') {
    return true;
  } else {
    Toast('Hey, upload gambar yang bener!');
    return false;
  }
}

const showCalendar = ref(false)

const getBase64Image = ref()

const getData = computed(() => store.getters['updateStories/getData'])?.value?.data;

const formsStory = ref({
  _id: getData?._id,
  title: getData?.title || '',
  desc: getData?.desc || '',
  createdStory: getData?.createdStory || '',
})

const dataImage = ref({
  file: null,
  upload_preset: 'stories',
  cloud_name: 'stories-1999-2100'
})

const confirmDate = (date) => {
  formsStory.value.createdStory = date
  showCalendar.value = false
}

const closeCalendar = () => showCalendar.value = false

const handleCreateStory = (e) => {
  e.preventDefault()
  dataImage.value.file =  getBase64Image.value && getBase64Image?.value[0]?.content

  if(dataImage?.value?.file) {
    return store.dispatch('updateStories/uploadImage', dataImage.value).then(() => {
      store.dispatch('updateStories/updateStory', formsStory.value)
    })

  }

  return store.dispatch('updateStories/updateStory', formsStory.value)
}

const loading = computed(() => {
  return store.getters['updateStories/getLoading']
})

</script>

<template>
  <section class="h-screen w-full flex flex-col gap-y-4 justify-center mx-auto items-center">
    <Loader_eye v-if="loading" />

    <Form>
      <CellGroup
        inset
        class="font-sans"
      >
        <Field 
          v-model="formsStory.title"
          left-icon="smile-o"
          label="Judul (optional)"
          placeholder="Inget ini buat judul..."
        />

        <Field
          v-model="formsStory.desc"
          type="textarea"
          placeholder="Apa yang kamu rasakan Lip?"
          rows="1"
          :rules="[{required:true, message:'Harus diisi ya :)'}]"
        />

        <Field
          name="Image avatar"
          label="Gambar (optional)"
        >
          <template #input>
            <Uploader
              v-model="getBase64Image"
              :after-read="afterRead"
              :before-read="beforeReadImage"
              max-count="1"
            />
          </template>
        </Field>

        
        <Field
          v-model="formsStory.createdStory"
          is-link
          readonly
          placeholder="Masukan tanggal"
          @click="showCalendar = true"
        />

        <Calendar
          :show="showCalendar"
          :show-confirm="false"
          title="Ini Kalender"
          close-on-click-overlay
          color="#808080"
          lazy-render
          @confirm="confirmDate"
          @close="closeCalendar"
        />

        <Button
          block
          color="gray"
          class="font-sans"
          @click="handleCreateStory"
        >
          Jangan lupa submit
        </Button>
      </CellGroup>
    </Form>

    <router-link to="/">
      <div class="flex items-center gap-x-2 text-gray-600 font-sans">
        <Icon name="arrow-left" />
        kembali
      </div>
    </router-link>
  </section>
</template>
