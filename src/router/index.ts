import { createRouter, createWebHashHistory } from "vue-router"; // 改用 hash 模式
import HomeView from "../views/HomeView.vue";
import HappyView from "../views/HappyView.vue";
import LoveView from "../views/LoveView.vue";
import TravelView from "../views/TravelView.vue";
import TraveListlView from "../views/TraveListlView.vue";
import TokyoStationView from "../views/TokyoStationView.vue";
import ShoppingView from "../views/ShoppingView.vue";
import LunchView from "../views/LunchView.vue";
import JerseyView from "../views/JerseyVotePage.vue";
import JerseyLogoMockupView from "../views/JerseyLogoMockupView.vue";
import RandomPicker from '../views/RandomPicker.vue';
import DesignView from '../views/DesignView.vue';
import MrtView from '@/views/MrtView.vue';
import AnnualTravelView from '@/views/AnnualTravelView.vue';
import Osaka2026View from '@/views/Osaka2026View.vue';
import Osaka2026DetailView from '@/views/Osaka2026DetailView.vue';
import VietnamDaigouView from '@/views/VietnamDaigouView.vue';
import OsakaShoppingView from '@/views/OsakaShoppingView.vue';
import OsakaFoodView from '@/views/OsakaFoodView.vue';
import OsakaHotelView from '@/views/OsakaHotelView.vue';
import OsakaKansaiPassView from '@/views/OsakaKansaiPassView.vue';
import OsakaHiddenGemsView from '@/views/OsakaHiddenGemsView.vue';

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
    {
      path: "/travellist",
      name: "travellist",
      component: TraveListlView,
    },
    {
      path: "/tokyostationsubway",
      name: "tokyostationsubway",
      component: TokyoStationView,
    },
    {
      path: "/shopping",
      name: "shopping",
      component: ShoppingView,
    },
    {
      path: "/lunch",
      name: "lunch",
      component: LunchView,
    },
    {
      path: "/jersey",
      name: "jersey",
      component: JerseyView,
    },
    {
      path: "/jersey-logo",
      name: "jerseyLogo",
      component: JerseyLogoMockupView,
    },
    {
      path: '/random',
      name: 'random',
      component: RandomPicker,
    },
    {
      path: "/design",
      name: "design",
      component: DesignView,
    },
    {
      path: "/mrt",
      name: "mrt",
      component: MrtView,
    },
    {
      path: "/2025travel",
      name: "annualTravel",
      component: AnnualTravelView,
    },
    {
      path: "/2026travel",
      name: "osakaTravel",
      component: Osaka2026View,
    },
    {
      path: "/2026travel/detail",
      name: "osakaTravelDetail",
      component: Osaka2026DetailView,
    },
    {
      path: "/vietnam",
      name: "vietnam",
      component: VietnamDaigouView,
    },
    {
      path: "/2026shopping",
      name: "osakaShopping",
      component: OsakaShoppingView,
    },
    {
      path: "/2026food",
      name: "osakaFood",
      component: OsakaFoodView,
    },
    {
      path: "/2026hotel",
      name: "osakaHotel",
      component: OsakaHotelView,
    },
    {
      path: "/2026kansai-pass",
      name: "osakaKansaiPass",
      component: OsakaKansaiPassView,
    },
    {
      path: "/2026hidden-gems",
      name: "osakaHiddenGems",
      component: OsakaHiddenGemsView,
    },
  ],
});

export default router;
