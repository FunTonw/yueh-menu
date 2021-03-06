import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/all.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bootstrap from 'bootstrap';

import mitt from 'mitt'

const app = createApp(App);
app.config.globalProperties.$emitter = mitt()
app.use(bootstrap);
app.use(router)
app.mount('#app')
