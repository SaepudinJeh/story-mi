<script setup>
import { ref } from '@vue/reactivity';
import { Field, CellGroup, Form, Uploader, Button, Toast, Icon } from 'vant';


const afterRead = (file) => {
  console.log(file.content)
}

const beforeReadImage = (file) => {
  if (file.type === 'image/png' || file.type === 'image/jpeg') {
    return true;
  } else {
    Toast('Please upload an image in jpg format');
    return false;
  }

}

</script>

<template>
  <section class="h-screen w-full flex flex-col gap-y-4 justify-center mx-auto items-center">
    <Form>
      <CellGroup inset class="font-title">
        <Field 
          left-icon="smile-o"
          label="Judul (optional)"
          placeholder="Inget ini buat judul!"
        />

        <Field
          type="textarea"
          placeholder="Apa yang kamu rasakan Lip?"
          rows="1"
          :rules="[{required:true, message:'Harus diisi ya :)'}]"
        />

        <Field
          left-icon="photo-o"
          name="Image avatar"
          label="Foto (optional)"
        >
          <template #input>
            <Uploader
              :after-read="afterRead"
              :before-read="beforeReadImage"
              max-count="1"
            />
          </template>
        </Field>


      <Button block color="gray" class="font-title">Jangan lupa submit</Button>
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
