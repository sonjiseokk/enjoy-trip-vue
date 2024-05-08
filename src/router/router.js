import { createWebHistory, createRouter } from "vue-router";
import AppMain from "@/views/AppMain.vue";
import TripView from "@/views/TripView.vue";
const routes = [
  {
    path: "/",
    component: AppMain,
  },
  {
    path: "/trip",
    component : TripView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 