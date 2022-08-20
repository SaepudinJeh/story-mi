<script setup>
  import { useStore } from 'vuex';
  import { ActionSheet, Toast } from 'vant';

  import ButtonLogin from '../components/homepages/ButtonLogin.vue'
  import ButtonDashboard from '../components/homepages/ButtonDashboard.vue'
  import ButtonLogout from '../components/homepages/ButtonLogout.vue'
  import { computed, ref } from 'vue';
  import HeaderPage from '../components/homepages/HeaderPage.vue';
  import PanelPiece from '../components/homepages/PanelPiece.vue';
  import { onMounted } from 'vue';
  import Loader_eye from '../components/loaders/loader_eye.vue';

  const store = useStore()

  const isAuth = computed(() => {
    return store.getters['login/getToken']
  })

  const stories = computed(() => {
    return store.getters['getStories/getStories']
  })

  const loading = computed(() => {
    return store.getters['getStories/getLoading']
  })

  const loadingDelete = computed(() => {
    return store.getters['deleteStories/getLoading']
  })

  onMounted(() => {
    store.dispatch('getStories/fetchStories')
  })

  const actionStory = [
    { id: 1, name: 'Edit Story' },
    { id: 2, name: 'Hapus Story', color: '#ee0a24' }
  ];

  const handleActionShow = ref(false)
  const getId = ref({ _id: '' });

  const onSelectAction = (item) => {
    console.log('wkwkkw', item);
    switch(item.id) {
      case 1 : {
        Toast('Edit!')
        handleActionShow.value = false
        break;
      }
      case 2 : {
        store.dispatch('deleteStories/deleteStory', getId.value)

        Toast('Hapus!')
        store.dispatch('getStories/fetchStories')
        handleActionShow.value = false
        break;
      }
      default: {
        Toast('Sip!')
        handleActionShow.value = false
      }
    }
  }

  const handleCancelAction = () => {
    Toast('Sip!')
    handleActionShow.value = false
  }

  const handleAction = (data) => {
    console.log('idddd', data?._id);
    getId.value._id = data?._id
    handleActionShow.value = true
  }
</script>

<template>
  <ActionSheet
    :show="handleActionShow"
    :actions="actionStory"
    cancel-text="Tutup"
    close-on-click-action
    @select="onSelectAction"
    @cancel="handleCancelAction"
  />

  <section>
    <Loader_eye v-if="loading || loadingDelete" />

    <HeaderPage />

    <template
      v-for="story in stories"
      :key="story"
    >
      <lazy-component>
        <PanelPiece
          :data="story"
          @click="() => handleAction(story)"
        />
      </lazy-component>
    </template>


    <div class="flex items-center flex-col gap-y-2 fixed bottom-5 right-5">
      <ButtonLogin v-if="!isAuth" />
      <div
        v-else
        class="flex items-center flex-col gap-y-2"
      >
        <ButtonDashboard />
        <ButtonLogout />
      </div>
    </div>
  </section>
</template>