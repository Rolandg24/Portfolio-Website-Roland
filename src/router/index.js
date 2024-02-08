import { createRouter, createWebHistory } from 'vue-router';

//Imported components
import HomeView from '../views/HomeView.vue'; // Adjust the path if necessary

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
