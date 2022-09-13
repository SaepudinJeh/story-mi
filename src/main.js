import { createApp } from 'vue'
import App from './App.vue'
import { Lazyload } from 'vant'
import AOS from 'aos';
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
// import vue3GoogleLogin from 'vue3-google-login'

import { stores } from './stores'
import './assets/index.css'

import router from './router'

const app = createApp(App)

app.component('ScrollParallax', ScrollParallax);

app.use(router)
app.use(stores)
// app.use(vue3GoogleLogin, {
//   clientId: '134357412529-0tbmloonejgj5dqum9cf82fm0gprlmgl.apps.googleusercontent.com'
// })
Locale.use('en-US', enUS);
app.use(AOS.init({
  once: true,
  duration: 1000
}));
app.use(Lazyload, {
    lazyComponent : true
})

app.mount('#app')
