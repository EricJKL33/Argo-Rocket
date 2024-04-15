import { createRouter, createWebHistory } from 'vue-router';
import RocketList from './components/RocketList.vue';
import SignIn from './components/SingIn.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: RocketList,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;