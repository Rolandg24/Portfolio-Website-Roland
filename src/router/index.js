import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/Homepage.vue'; // Adjust the path if necessary

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
