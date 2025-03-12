import { createRouter, createWebHashHistory } from "vue-router"; // 改用 hash 模式
import HomeView from "../views/HomeView.vue";
import HappyView from "../views/HappyView.vue";
import LoveView from "../views/LoveView.vue";
import TravelView from "../views/TravelView.vue";
const router = createRouter({
  history: createWebHashHistory(), // 這裡改掉
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/happy",
      name: "happy",
      component: HappyView,
    },
    {
      path: "/love",
      name: "love",
      component: LoveView,
    },
    {
      path: "/travel",
      name: "travel",
      component: TravelView,
    },
  ],
});

export default router;
