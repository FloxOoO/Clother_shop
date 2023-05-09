<template>
  <div class="page" v-if="productsStore.products.length">
    <page-preloader />
    <div class="page__container">
      <main-header />
      <sub-header>
        {{ this.$route.name }}
      </sub-header>
      <div class="content">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
    <main-footer />
  </div>
</template>
<script>  
import PagePreloader from "./components/Main/PagePreloader.vue";
import MainHeader from "./components/Main/Header/MainHeader.vue";
import SubHeader from "./components/Main/Header/SubHeader.vue";
import MainFooter from "./components/Main/MainFooter.vue";
import { useProductsStore } from "./stores/productsStore.js";
export default {
  name: "Shop",
  
  beforeCreate() {
    this.productsStore.initProducts();
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  components: {
    PagePreloader,
    MainHeader,
    SubHeader,
    MainFooter,
  },
};
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  &__container {
    flex: 1 1 auto;
  }
}
.content {
  max-width: 1200px;
  margin: 0px auto;
}
</style>
