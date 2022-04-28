import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { Locale } from 'vant';
import idID from 'vant/es/locale/lang/id-ID';

Locale.use('en-US', idID);

import './assets/index.css'

import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
