<template>
  <btn-back> На главную </btn-back>
  <div class="basket-page">
    <catalog-products> Вы пока ничего не добавили в корзину </catalog-products>
    <basket-pay-popup ref="payPopup" />
    <btn-pay @open-window-pay="open" />
  </div>
</template>
<script>
import btnBack from "../components/Base/btnBack.vue";
import CatalogProducts from "../components/Base/Catalog/CatalogProducts.vue";
import BasketPayPopup from "../components/Product/BasketPayPopup.vue";
import btnPay from "../components/Base/btnPay.vue";
export default {
  components: {
    btnBack,
    CatalogProducts,
    BasketPayPopup,
    btnPay,
  },

  methods: {
    async open() {
      await this.$refs.payPopup.open();
    },
  },
};
</script>
