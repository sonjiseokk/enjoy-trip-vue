import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import vuetify from "./plugins/vuetify";
import { useKakao } from 'vue3-kakao-maps/@utils';
import store from './store/store';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue3Geolocation from 'vue3-geolocation';

useKakao('ca6f818170cad1a64894a6dc419a62d4', ['clusterer', 'services', 'drawing']); // 각 라이브러리는 ',(콤마)'로 구분합니다.

createApp(App).use(Vue3Geolocation).use(vuetify).use(router).use(store).mount('#app')
