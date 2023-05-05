<template>
  <div class="catalog">
    <div class="catalog__left-column">
      <main-menu @selected-category="selected" />
    </div>
    <div class="catalog__right-column">
      <filter-product 
        @filter-price="filterPrice"
        :selected-category="selectedCategory"
      />
      <catalog-products 
        :selected-category="selectedCategory"
        :filter-data="filterData"
      >
        Товары временно отсутствуют
      </catalog-products>
    </div>
  </div>
</template>
<script>
import MainMenu from "../components/Main/Menu/MainMenu.vue";
import CatalogProducts from "../components/Base/Catalog/CatalogProducts.vue";
import FilterProduct from "../components/Product/FilterProduct.vue";
export default {
  name: "MainPage",

  components: {
    MainMenu,
    CatalogProducts,
    FilterProduct,
  },

  data() {
    return {
      selectedCategory: {},
      filterData: {},
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

    filterPrice(filterData) {
      if (filterData) {
        this.filterData = filterData
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.catalog {
  display: flex;
  &__left-column {
    padding-right: 30px;
    @media (max-width: 750px) {
      padding-right: 5px;
    }
  }
  &__right-column {
    flex: 1 1 auto;
  }
  @media (max-width: 750px) {
    position: relative;
  }
}
</style>
