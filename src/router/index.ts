import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
