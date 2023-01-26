<template>
  <btn-back> На главную </btn-back>
  <catalog-user />
</template>
<script>
import btnBack from "../components/btnBack.vue";
import CatalogUser from "../components/CatalogUser.vue";
export default {
  components: {
    btnBack,
    CatalogUser
  },
};
</script>
