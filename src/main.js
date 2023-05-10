import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import axios from 'axios'
import VueAxios from 'vue-axios'

const apiutltest = import.meta.env.VITE_APP_API_URL;
const app = createApp(App);
app.config.globalProperties.$apiUrl = import.meta.env.VITE_APP_API_URL;
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');