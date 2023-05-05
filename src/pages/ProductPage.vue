<template>
  <div class="product-page" v-if="product">
    <btn-back> На главную </btn-back>
    <div class="open-product">
      <div class="open-product__right-column">
        <product-information :product="product" />
      </div>
      <div class="open-product__left-column">
        <product-information-menu :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import btnBack from "../components/Base/btnBack.vue";
import { useProductsStore } from "../stores/productsStore.js";
import ProductInformation from "../components/Product/ProductInformation.vue";
import ProductInformationMenu from "../components/Product/Actions/ProductInformationMenu.vue";
export default {
  components: {
    btnBack,
    ProductInformation,
    ProductInformationMenu,
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
    },
  },
};
</script>
<style lang="scss" scoped>
.open-product {
  display: flex;
  min-height: calc(100vh - 274px);
  &__right-column {
    flex: 1 1 auto;
  }

  &__left-column {
    min-width: 300px;
    @media (max-width: 1200px) {
      min-width: 150px;
    }
  }
}
</style>
