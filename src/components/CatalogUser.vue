<template>
  <div class="user-catalog">
    <div v-if="!pageOptions.length" class="user-catalog__empty">
      Вы пока ничего не добавили в избранное
    </div>
    <div class="user-catalog__products">
      <product-card
        v-for="product in pageOptions"
        :key="product.id"
        :product="product"
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
  },

  computed: {
    pageOptions() {
      if (this.$route.name === "Избранное") {
        return this.productsStore.favorites;
      }
      if (this.$route.name === "Корзина") {
        return this.productsStore.basket;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.user-catalog {
  position: relative;
  min-height: calc(100vh - 274px);
  &__empty {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: rgba(128, 128, 128, 0.8);
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, 230px);
    grid-auto-rows: minmax(1fr);
    gap: 24px 12px;
    margin-bottom: 30px;
  }
}
</style>
