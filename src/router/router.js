import { createWebHistory, createRouter } from "vue-router";
import MainView from "@/views/MainView.vue";
import TripView from "@/views/TripView.vue";
const routes = [
  {
    path: "/",
    component: MainView,
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