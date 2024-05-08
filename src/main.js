import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import vuetify from "./plugins/vuetify";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(vuetify).use(router).mount('#app')
