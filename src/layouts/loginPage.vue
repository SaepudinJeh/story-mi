<script setup>
  import { computed, ref } from 'vue';
  import { onMounted, watchEffect } from 'vue';
  import { useStore } from 'vuex';
  import { googleOneTap, decodeCredential } from 'vue3-google-login';

  import Loader_eye from '../components/loaders/loader_eye.vue';

  const store = useStore()

  const setForm = ref({
    email: '',
    password: ''
  })
  
  const handleLogin = (e) => {
    e.preventDefault()
    store.dispatch('login/authLoginLocal', setForm.value)
  }

  const loading = computed(() => {
    return store.getters['login/getLoading']
  })

  // watchEffect(() => {
  //   localStorage.removeItem('is_login')
  //   localStorage.removeItem('access_token')
  // })

  // const baseURL = computed(() => store.getters['baseUrl/getBaseUrl']);

  const getToken = computed(() => store.getters['login/getToken']);

  onMounted(() => {
    if (getToken.value !== null || getToken.value !== undefined || getToken.value !== '') {
      googleOneTap({ autoLogin: true }).then((res) => {
        const data = decodeCredential(res.credential)
  
        const payload = {
          email: data.email,
          username: data.given_name,
          email_verified: data.email_verified,
          avatar: data.picture,
          provider: 'google'
        }
  
        store.dispatch('login/oauthLogin', payload)
      }).catch((err) => console.warn(err))
    }

  })
 
  // const handleLoginOauth = (e) => {
  //   e.preventDefault()

  //   const urlLoginGoogle = `${baseURL.value}/oauth/google`

  //   console.log(urlLoginGoogle)

  //   var left = (screen.width/2 - 200)
  //   var top = (screen.height/2 - 150)
  //   const win = window.open(urlLoginGoogle, 'resizable=yes, width=800, height=700, top='+top+', left='+left)

  //   win.focus()
  // }

</script>

<template>
  <Loader_eye v-if="loading" />
  <!-- component -->
  <div class="min-h-screen flex justify-center items-center bg-white font-sans">
    <form>
      <div class="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
        <div class="py-8 flex flex-col items-center gap-3 text-2xl text-gray-500">
          <img
            width="100"
            class="-mt-10 rounded-full"
            src="../assets/images/login_image.jpg"
          >
          <p class="font-title">
            Selamat datang, Mualifah
          </p>
        </div>
        <input
          v-model.lazy="setForm.email"
          class="focus:outline-none rounded-full p-3 border-[1px] border-slate-200 w-80"
          placeholder="Masukan email ya :)"
          type="email"
        >
        <div class="flex flex-col space-y-1">
          <input
            v-model.lazy="setForm.password"
            class="focus:outline-none rounded-full p-3 border-[1px] border-slate-200 w-80"
            placeholder="Jangan lupa juga passwordnya"
            type="password"
          >
        </div>
        <div class="flex flex-col w-full pt-5">
          <button
            class="w-full bg-gray-500 rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-gray-700"
            @click="handleLogin"
          >
            Klik ini kalo mau masuk
          </button>
        </div>
        <router-link
          to="/"
          class="text-xs xs:text-sm sm:text-base"
        >
          Kembali
        </router-link>
      </div>
    </form>
    
    <div class="fixed bottom-0 w-full p-3 bg-[#F7F9FA] flex justify-center items-center space-x-3 text-[14px] font-medium text-[#666]">
      <p class="font-title text-xl text-center">
        "Angin tidak berhembus untuk menggoyangkan pepohonan melainkan untuk menguji akarnya"
      </p>
    </div>
  </div>
</template>