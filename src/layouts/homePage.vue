<script setup>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { ActionSheet, Toast } from 'vant';

  import ButtonDashboard from '../components/homepages/ButtonDashboard.vue'
  import ButtonLogout from '../components/homepages/ButtonLogout.vue'
  import { computed, ref } from 'vue';
  import HeaderPage from '../components/homepages/HeaderPage.vue';
  import PanelPiece from '../components/homepages/PanelPiece.vue';
  import { onMounted } from 'vue';
  import IntroMenu from '../components/homepages/IntroMenu.vue';
  import LoaderClock from '../components/loaders/loader_clock.vue';

  const store = useStore()
  const router = useRouter()

  const isAuth = localStorage.getItem('access_token')

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
    switch(item.id) {
      case 1 : {
        handleActionShow.value = false
        router.push('/edit-story')
        break;
      }
      case 2 : {
        store.dispatch('deleteStories/deleteStory', getId.value)

        Toast('Terhapus!')
        store.dispatch('getStories/fetchStories')
        handleActionShow.value = false
        break;
      }
      default: {
        handleActionShow.value = false
      }
    }
  }

  const handleCancelAction = () => {
    Toast('Wkwkwkw :D')
    handleActionShow.value = false
  }

  const handleAction = (data) => {
    if(isAuth) {
      getId.value._id = data?._id
  
      store.commit({ type: 'updateStories/setData', data })
  
      handleActionShow.value = true
    }

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

  <section class="overflow-hidden">
    <!-- <Loader_eye v-if="loading || loadingDelete" /> -->

    <IntroMenu />

    <HeaderPage />

    <LoaderClock v-if="loading || loadingDelete" />

    <template
      v-for="story in stories"
      :key="story"
    >
      <lazy-component>
        <PanelPiece
          :data="story"
          @click.stop="() => handleAction(story)"
        />
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
    </div>
  </section>
</template>