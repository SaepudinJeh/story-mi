import { createApp } from 'vue'
import App from './App.vue'
import { Lazyload } from 'vant'
import vue3GoogleLogin from 'vue3-google-login'

import { stores } from './stores'
import './assets/index.css'

import router from './router'

const app = createApp(App)

app.use(router)
app.use(stores)
app.use(vue3GoogleLogin, {
  clientId: '134357412529-0tbmloonejgj5dqum9cf82fm0gprlmgl.apps.googleusercontent.com'
})
app.use(Lazyload, {
    lazyComponent : true
})

app.mount('#app')
