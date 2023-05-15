import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' // <---
import axios from 'axios'
import VueAxios from 'vue-axios'
import vue3GoogleLogin from 'vue3-google-login'

const apiutltest = import.meta.env.VITE_APP_API_URL;
const app = createApp(App);
app.config.globalProperties.$apiUrl = import.meta.env.VITE_APP_API_URL;
app.use(VueAxios, axios);
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})
app.use(store)
app.use(router);
app.mount('#app');