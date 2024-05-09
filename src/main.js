import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import vuetify from "./plugins/vuetify";
import { useKakao } from 'vue3-kakao-maps/@utils';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

useKakao('ca6f818170cad1a64894a6dc419a62d4');
createApp(App).use(vuetify).use(router).mount('#app')
