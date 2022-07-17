<script setup>
  import { useStore } from 'vuex';

  import ButtonLogin from '../components/homepages/ButtonLogin.vue'
  import ButtonDashboard from '../components/homepages/ButtonDashboard.vue'
  import ButtonLogout from '../components/homepages/ButtonLogout.vue'
  import { computed } from 'vue';
  import HeaderPage from '../components/homepages/HeaderPage.vue';
  import PanelPiece from '../components/homepages/PanelPiece.vue';
  import { onMounted } from 'vue';
  import Loader_eye from '../components/loaders/loader_eye.vue';

  const store = useStore()

  const isAuth = computed(() => {
    return store.getters['login/getIsAuth']
  })

  const stories = computed(() => {
    return store.getters['getStories/getStories']
  })

  const loading = computed(() => {
    return store.getters['getStories/getLoading']
  })

  onMounted(() => {
    store.dispatch('getStories/fetchStories')
  })

</script>

<template>
  <section>
    <Loader_eye v-if="loading" />

    <HeaderPage />

    <template
      v-for="story in stories"
      :key="story"
    >
      <lazy-component>
        <PanelPiece :data="story" />
      </lazy-component>
    </template>


    <div class="flex items-center flex-col gap-y-2 fixed bottom-5 right-5">
      <div
        v-if="isAuth"
        class="flex items-center flex-col gap-y-2"
      >
        <ButtonDashboard />
        <ButtonLogout />
      </div>
      <ButtonLogin v-else />
    </div>
  </section>
</template>