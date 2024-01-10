import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useGlobalStore } from './stores/global'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

useGlobalStore(pinia)
useGlobalStore().loadState()

app.mount('#app')
