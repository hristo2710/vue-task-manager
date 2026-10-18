import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import TaskView from '../views/TaskView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/tasks',
    component: TaskView
  },
  {
    path: '/about',
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;