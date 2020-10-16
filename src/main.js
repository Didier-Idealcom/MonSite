import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
// import VueMeta from 'vue-meta'

createApp(App).use(router).use(store).mount('#app')
