<template>
  <div class="page">
    <page-preloader />
    <div class="page__container">
      <main-header />
      <sub-header />
      <div class="content">
        <div class="catalog">
          <div class="catalog__left-column">
            <main-menu @selected-category="selected" />
          </div>
          <div class="catalog__right-column">
            <catalog-products :selected-category="selectedCategory" />
          </div>
        </div>
      </div>
    </div>
    <main-footer />
  </div>
</template>
<script>
import PagePreloader from "./components/PagePreloader.vue"
import MainHeader from "./components/MainHeader.vue";
import SubHeader from "./components/SubHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import MainMenu from "./components/MainMenu.vue";
import CatalogProducts from "./components/CatalogProducts.vue";
export default {
  name: "Shop",

  components: {
    PagePreloader,
    MainHeader,
    SubHeader,
    CatalogProducts,
    MainFooter,
    MainMenu,
  },

  data() {
    return {
      selectedCategory: {},
    };
  },

  created() {
    this.selectedCategory = { category: '', type: '' }
  },

  methods: {
    selected(selectedCategory) {
      if (selectedCategory) {
        this.selectedCategory = selectedCategory;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  position: relative;
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
