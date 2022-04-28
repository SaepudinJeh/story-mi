<script setup>
import { ref } from '@vue/reactivity';
import { Field, CellGroup, Form, Uploader, Button, Toast, Icon, Cell, Calendar } from 'vant';

import { stateForm } from '../stores'

const state = stateForm().data;

const afterRead = (file) => {
  console.log(file.content)
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

const confirmDate = (date) => {
  state.date = `${date}`
  showCalendar.value = false
}

const closeCalendar = () => showCalendar.value = false

</script>

<template>
  <section class="h-screen w-full flex flex-col gap-y-4 justify-center mx-auto items-center">
    <Form>
      <CellGroup inset class="font-sans">
        <Field 
          v-model="state.title"
          left-icon="smile-o"
          label="Judul (optional)"
          placeholder="Inget ini buat judul..."
        />

        <Field
          v-model="state.story"
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
              :after-read="afterRead"
              :before-read="beforeReadImage"
              v-model="state.image"
              max-count="1"
            />
          </template>
        </Field>

        
        <Field is-link readonly v-model="state.date" placeholder="Masukan tanggal" @click="showCalendar = true" />

        <Calendar :show="showCalendar" @confirm="confirmDate" @close="closeCalendar" :show-confirm="false" title="Ini Kalender" close-on-click-overlay color="#808080" lazy-render />

        <Button block color="gray" class="font-sans">Jangan lupa submit</Button>
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
