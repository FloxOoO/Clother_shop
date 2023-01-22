<template>
  <div class="page">
    <div class="page__container">
      <main-header />
      <sub-header />
      <div class="content">
        <div class="catalog">
          <div class="catalog__left-column">
            <main-menu />
          </div>
          <div class="catalog__right-column">
            <catalog-products />
          </div>
        </div>
      </div>
    </div>
    <main-footer />
  </div>
</template>
<script>
import MainHeader from "./components/MainHeader.vue";
import SubHeader from "./components/SubHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import MainMenu from "./components/MainMenu.vue";
import CatalogProducts from "./components/CatalogProducts.vue";
export default {
  name: "Shop",

  components: {
    MainHeader,
    SubHeader,
    CatalogProducts,
    MainFooter,
    MainMenu,
  },
};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  &__container {
    flex: 1 1 auto;
  }
}
.content {
  max-width: 1200px;
  margin: 0px auto;
}
.catalog {
  display: flex;
  &__left-column {
    padding-right: 30px;
  }
  &__right-column {
    flex: 1 1 auto;
  }
}
</style>
