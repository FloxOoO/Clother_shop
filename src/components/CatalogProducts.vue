<template>
  <div class="catalog-products">
    <product-card 
      v-for="product in getProducts(selectedCategory.category, selectedCategory.type)"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import { useProductsStore } from "../stores/productsStore.js";
import ProductCard from "./ProductCard.vue"
export default {
  name: "CatalogProducts",

  components: {
    ProductCard
  },

  props: {
    selectedCategory: {
      type: Object,
      required: true,
    }
  },

  created() {
    this.getProducts('', '')
  },

  setup() {
    const productsStore = useProductsStore();
    return { getProducts: productsStore.getProducts };
  }

};
</script>
<style lang="scss" scoped>
.catalog-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, 230px);
  grid-auto-rows: 1fr;
  gap: 24px 12px;
  margin-bottom: 30px;
}
</style>
