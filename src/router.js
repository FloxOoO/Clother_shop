import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue'
import BasketPage from './pages/BasketPage.vue'
import ProductPage from './pages/ProductPage.vue'


const routes = [
  { path: '/', component: MainPage, name: "Главная" },
  { path: '/favorites', component: FavoritesPage, name: "Избранное" },
  { path: '/basket', component: BasketPage, name: "Корзина" },
  { path: '/product/:id', component: ProductPage, name: "О товаре" }
];

export default createRouter({
  history: createWebHistory(),
  routes
});