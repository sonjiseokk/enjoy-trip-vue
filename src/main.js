import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import vuetify from "./plugins/vuetify";
import { useKakao } from 'vue3-kakao-maps/@utils';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

useKakao('API');
createApp(App).use(vuetify).use(router).mount('#app')
