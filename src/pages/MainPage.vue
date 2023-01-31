<template>
  <div class="catalog">
    <div class="catalog__left-column">
      <main-menu @selected-category="selected" />
    </div>
    <div class="catalog__right-column">
      <catalog-products 
        :selected-category="selectedCategory"
      >
        Товары временно отсутствуют
      </catalog-products>
    </div>
  </div>
</template>
<script>
import MainMenu from "../components/Main/Menu/MainMenu.vue";
import CatalogProducts from "../components/Base/CatalogProducts.vue";
export default {
  name: "MainPage",

  components: {
    MainMenu,
    CatalogProducts,
  },

  data() {
    return {
      selectedCategory: {},
    };
  },

  created() {
    this.selectedCategory = { category: "", type: "" };
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
