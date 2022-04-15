import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './css/main.css'
import router from './router/router'

createApp(App).use(router).use(createPinia()).mount('#app')
