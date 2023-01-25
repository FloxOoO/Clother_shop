import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/favorites', component: FavoritesPage }
];

export default createRouter({
  history: createWebHistory(),
  routes
});