<template>
  <btn-back> На главную </btn-back>
  <catalog-products> Вы пока ничего не добавили в избранное </catalog-products>
</template>
<script>
import btnBack from "../components/btnBack.vue";
import CatalogProducts from "../components/CatalogProducts.vue";
export default {
  components: {
    btnBack,
    CatalogProducts,
  },
};
</script>
