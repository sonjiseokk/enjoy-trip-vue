import { createWebHistory, createRouter } from "vue-router";
import AppMain from "@/views/AppMain.vue";
const routes = [
  {
    path: "/",
    component: AppMain,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 