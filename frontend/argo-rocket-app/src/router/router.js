import { createRouter, createWebHistory } from "vue-router";
import RocketList from "../components/RocketList/RocketList.vue";
import SignIn from "../components/Signin/SignIn.vue";
import authMiddleware from "./middleware";

const routes = [
  {
    path: "/",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/rockets",
    name: "home",
    component: RocketList,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authMiddleware);

export default router;