import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue'
import BasketPage from './pages/BasketPage.vue'

const routes = [
  { path: '/', component: MainPage, name: "Главная" },
  { path: '/favorites', component: FavoritesPage, name: "Избранное" },
  { path: '/basket', component: BasketPage, name: "Корзина" }
];

export default createRouter({
  history: createWebHistory(),
  routes
});