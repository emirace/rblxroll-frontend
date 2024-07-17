import './assets/css/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = import.meta.env.VITE_VUE_APP_BACKEND_URL
console.log('check env', import.meta.env.VITE_VUE_APP_BACKEND_URL)
const token = localStorage.getItem('token')
if (token !== undefined && token !== null) {
  axios.defaults.headers.common['x-auth-token'] = token
}

app.use(router)
app.use(store)

app.mount('#app')
