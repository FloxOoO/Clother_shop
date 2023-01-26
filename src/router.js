import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue'

const routes = [
  { path: '/', component: MainPage, name: "Главная" },
  { path: '/favorites', component: FavoritesPage, name: "Избранное" }
];

export default createRouter({
  history: createWebHistory(),
  routes
});