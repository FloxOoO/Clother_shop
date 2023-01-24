<template>
  <div class="catalog-products">
    <product-card 
      v-for="(product, id) in this.productsStore.products"
      :key="id"
      :image_path="product.image_path"
      :brand="product.brand"
      :fullname="product.fullname"
      :price="product.price"
      :newprice="product?.newprice"
      :size="product?.size"
    />
  </div>
</template>
<script>
import { useProductsStore } from "../stores/products.js";
import ProductCard from "./ProductCard.vue"
export default {
  name: "CatalogProducts",

  components: {
    ProductCard
  },

  created() {
    this.productsStore.initStore();
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
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
