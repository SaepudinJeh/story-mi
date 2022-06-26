import { createApp } from 'vue'
import App from './App.vue'
import { Lazyload } from 'vant'

import { stores } from './stores'
import './assets/index.css'

import router from './router'

const app = createApp(App)

app.use(router)
app.use(stores)
app.use(Lazyload, {
    lazyComponent : true
})

app.mount('#app')
