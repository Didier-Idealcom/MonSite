import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
// import VueMeta from 'vue-meta'

const app = createApp(App)

app.use(router).use(store).mount('#app')
