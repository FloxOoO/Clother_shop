import { createApp } from 'vue'
import Router from './router.js';
import { createPinia } from 'pinia'
import "./assets/css/style.css"
import App from './App.vue'

createApp(App).use(Router).use(createPinia()).mount('#app')
