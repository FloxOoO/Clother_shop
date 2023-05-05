import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue'
import BasketPage from './pages/BasketPage.vue'
import ProductPage from './pages/ProductPage.vue'
import StartPage from './pages/StartPage.vue'


const routes = [
  { path: '/', component: StartPage },
  { path: '/:pageId', component: MainPage, name: "Главная" },
  { path: '/favorites/:pageId', component: FavoritesPage, name: "Избранное" },
  { path: '/basket/:pageId', component: BasketPage, name: "Корзина" },
  { path: '/product/:id', component: ProductPage, name: "О товаре" }
];

export default createRouter({
  history: createWebHistory(),
  routes
});