import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import { useAuthStore } from '../store/auth';

const routes = [
  {
    path: '/',
    component: MainLayout, // Use o layout principal
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
        next('/login'); // Redireciona para login se não estiver logado
      } else {
        next();
      }
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;