<template>
  <div class="favorites">
    <div 
      v-if="!productsStore.favorites.length"
      class="favorites__empty"
    >
      Вы пока ничего не добавили в избранное
    </div>
    <div class="catalog-favorites">
      <product-card
        v-for="favorite in productsStore.favorites"
        :key="favorite.id"
        :product="favorite"
      />
    </div>
  </div>
</template>
<script>
import { useProductsStore } from "../stores/productsStore.js";
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  }
};
</script>
<style lang="scss" scoped>
.favorites {
  position: relative;
  min-height: calc(100vh - 230px);
  &__empty {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: rgba(128, 128, 128, 0.8)
  }
}
.catalog-favorites {
  display: grid;
  grid-template-columns: repeat(auto-fit, 230px);
  grid-auto-rows: minmax(1fr);
  gap: 24px 12px;
  margin-bottom: 30px;
}
</style>
