// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: () => import('./CartWrapper.vue') },
  { path: '/filter', component: () => import('filterApp/FilterComponent') },
  { path: '/search', component: () => import('./SearchWrapper.vue') },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
