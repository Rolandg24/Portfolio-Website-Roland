import { createRouter, createWebHistory } from 'vue-router';

//Imported components
import HomeView from '../views/HomeView.vue'; // Adjust the path if necessary
import BiographyView from '../views/BiographyView.vue';
import ContactView from '../views/ContactView.vue';
import MinigamesView from '../views/MinigamesView';
import MusicView from '../views/MusicView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/biography',
    name: 'Biography',
    component: BiographyView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/minigames',
    name: 'Minigames',
    component: MinigamesView,
  },
  {
    path: '/music',
    name: 'Music',
    component: MusicView,
  }
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
