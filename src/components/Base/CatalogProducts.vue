<template>
  <div
    class="catalog-container"
    :class="{
      main: $route.name === 'Главная',
      basket: $route.name === 'Корзина' && productsStore.basket.length,
    }"
  >
    <div v-if="!pageOptions.length" class="catalog-container__empty">
      <slot>
        {{ EmptyText }}
      </slot>
    </div>
    <div class="catalog-container__products">
      <product-card
        v-for="product in pageOptions"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import { useProductsStore } from "../../stores/productsStore.js";
import ProductCard from "../Product/Card/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },

  props: {
    selectedCategory: {
      type: Object,
      required: false,
    }
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore, getProducts: productsStore.getProducts };
  },

  created() {
    if (this.$route.name === "Главная") {
      this.getProducts('', '')
    }
    this.productsStore.addFromLS("basket-products")
    this.productsStore.addFromLS("favorite-products")
  },

  computed: {
    pageOptions() {
      if (this.$route.name === "Главная") {
        return this.getProducts(this.selectedCategory.category, this.selectedCategory.type);
      }
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
.catalog-container {
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
.main {
  min-height: calc(100vh - 230px);
}
.basket {
  min-height: calc(100vh - 339px);
}
</style>
