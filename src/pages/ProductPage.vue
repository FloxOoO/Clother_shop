<template>
  <btn-back> На главную </btn-back>
  <div class="open-product">
    <div class="open-product__right-column"></div>
    <div class="open-product__left-column">
      <product-information-menu :product="product" />
    </div>
  </div>
</template>
<script>
import btnBack from "../components/Base/btnBack.vue";
import { useProductsStore } from "../stores/productsStore.js";
import ProductInformationMenu from "../components/Product/Actions/ProductInformationMenu.vue"
export default {
  components: {
    btnBack,
    ProductInformationMenu
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  computed: {
    product() {
      return this.productsStore.products.find(
        (product) => product.id === Number(this.$route.params.id)
      );
    }
  },
};
</script>
<style lang="scss" scoped>
.open-product {
  display: flex;
  min-height: calc(100vh - 274px);
  &__right-column {
    width: 900px;
  }

  &__left-column {
    flex: 1 1 auto;
  }
}
</style>
