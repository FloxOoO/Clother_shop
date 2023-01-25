<template>
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
</template>
<script>
import MainMenu from "../components/MainMenu.vue";
import CatalogProducts from "../components/CatalogProducts.vue";
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