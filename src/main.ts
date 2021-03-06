import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router.js'
import './css/main.css'
import 'flowbite';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});

