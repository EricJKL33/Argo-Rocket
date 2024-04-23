import { createRouter, createWebHistory } from "vue-router";
import RocketList from "./components/RocketList/RocketList.vue";
import SignIn from "./components/Signin/SignIn.vue";

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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
