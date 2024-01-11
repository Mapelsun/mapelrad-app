import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useGlobalStore } from './stores/global'
import VueApexCharts from "vue3-apexcharts"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueApexCharts)

useGlobalStore(pinia)
useGlobalStore().loadState()

app.mount('#app')
