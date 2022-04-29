import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'startView',
    component: () => import('../views/StartView.vue'),
  },
  {
    path: '/game',
    name: 'gameView',
    component: () => import('../views/GameView.vue'),
  },
  {
    path: '/about',
    name: 'aboutView',
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
