<template>
  <div class="catalog-struct">
    <div
      class="catalog-container"
      :class="{
        main: $route.name === 'Главная',
        basket: $route.name === 'Корзина' && productsStore.basket.length,
      }"
    >
      <div v-if="!pageOptions.length" class="catalog-container__empty">
        <slot>
          {{ EmptyText }}
        </slot>
      </div>
      <div class="catalog-container__products">
        <product-card
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div v-if="pageAmount > 1" class="number-page">
      <div
        v-if="page > 1"
        @click="nextPage('prev')"
        class="number-page__elem func start"
      >
        <icon-mdi :icon="icons.mdiArrowLeft" />
        <div class="number-page__elem-title">Назад</div>
      </div>
      <div
        v-if="page === pageAmount && page - 3 > 0"
        class="number-page__elem"
        @click="nextPage(page - 3)"
      >
        <a>{{ page - 3 }}</a>
      </div>
      <div
        v-if="page - 2 > 0"
        class="number-page__elem"
        @click="nextPage(page - 2)"
      >
        <a>{{ page - 2 }}</a>
      </div>
      <div
        v-if="page - 1"
        class="number-page__elem"
        @click="nextPage(page - 1)"
      >
        <a>{{ page - 1 }}</a>
      </div>
      <div class="number-page__elem">
        <a>{{ page }}</a>
      </div>
      <div
        v-if="page + 1 <= pageAmount"
        class="number-page__elem"
        @click="nextPage(page + 1)"
      >
        <a>{{ page + 1 }}</a>
      </div>
      <div
        v-if="page + 2 <= pageAmount"
        class="number-page__elem"
        @click="nextPage(page + 2)"
      >
        <a>{{ page + 2 }}</a>
      </div>
      <div
        v-if="!(page - 1) && page + 3 < pageAmount"
        class="number-page__elem"
        @click="nextPage(page + 3)"
      >
        <a>{{ page + 3 }}</a>
      </div>
      <div
        v-if="page !== pageAmount"
        @click="nextPage('next')"
        class="number-page__elem func end"
      >
        <div class="number-page__elem-title">Вперед</div>
        <icon-mdi :icon="icons.mdiArrowRight" />
      </div>
    </div>
  </div>
</template>
<script>
import { useProductsStore } from "../../../stores/productsStore.js";
import ProductCard from "../../Product/Card/ProductCard.vue";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import IconMdi from "../../Icons/IconMdi.vue";
export default {
  components: {
    ProductCard,
    IconMdi,
  },

  AMOUNT_PRODUCT_ON_PAGE: null,

  props: {
    selectedCategory: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore, getProducts: productsStore.getProducts };
  },

  created() {
    if (this.$route.name === "Главная") {
      this.getProducts("", "");
    }
    this.page = +this.$route.params.pageId;
    this.routing();
    this.productsStore.addFromLS("basket-products");
    this.productsStore.addFromLS("favorite-products");
  },

  methods: {
    routing() {
      if (this.$route.name === "Главная") {
        this.$router.push(`/${this.page}`);
        this.$options.AMOUNT_PRODUCT_ON_PAGE = 12;
      }
      if (this.$route.name === "Избранное") {
        this.$router.push(`/favorites/${this.page}`);
        this.$options.AMOUNT_PRODUCT_ON_PAGE = 15;
      }
      if (this.$route.name === "Корзина") {
        this.$router.push(`/basket/${this.page}`);
        this.$options.AMOUNT_PRODUCT_ON_PAGE = 15;
      }
    },
    nextPage(flag) {
      if (flag === "next") {
        this.page++;
      }
      if (flag === "prev") {
        this.page--;
      }
      if (+flag) {
        this.page = flag;
      }
      this.routing();
    },
  },

  computed: {
    pageOptions() {
      if (this.$route.name === "Главная") {
        return this.getProducts(
          this.selectedCategory.category,
          this.selectedCategory.type
        );
      }
      if (this.$route.name === "Избранное") {
        return this.productsStore.favorites;
      }
      if (this.$route.name === "Корзина") {
        return this.productsStore.basket;
      }
    },
    numberProductsPage() {
      return {
        start: (this.page - 1) * this.$options.AMOUNT_PRODUCT_ON_PAGE,
        end: this.page * this.$options.AMOUNT_PRODUCT_ON_PAGE,
      };
    },
    paginatedProducts() {
      return this.pageOptions.slice(
        this.numberProductsPage.start,
        this.numberProductsPage.end
      );
    },
    pageAmount() {
      return Math.ceil(
        this.pageOptions.length / this.$options.AMOUNT_PRODUCT_ON_PAGE
      );
    },
    icons() {
      return {
        mdiArrowLeft,
        mdiArrowRight,
      };
    },
  },

  watch: {
    selectedCategory() {
      this.page = 1;
      this.$router.push(`/1`);
    },
  },
};
</script>
<style lang="scss" scoped>
.catalog-struct{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.catalog-container {
  flex: 1 1 auto;
  position: relative;
  min-height: calc(100vh - 274px);
  &__empty {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: rgba(128, 128, 128, 0.8);
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, 230px);
    grid-auto-rows: minmax(1fr);
    gap: 24px 12px;
    margin-bottom: 30px;
  }
}
.main {
  min-height: calc(100vh - 230px);
}
.basket {
  min-height: calc(100vh - 339px);
}
.number-page {
  display: flex;
  &__elem {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background-color: rgba(128, 128, 128, 0.2);
    }
    a {
      transition: 0.3s;
      &:hover {
        color: grey;
        transition: 0.3s;
      }
    }
  }

  &__elem-title {
    transition: 0.3s;
    &:hover {
      color: grey;
      transition: 0.3s;
    }
  }
}
.func {
  width: auto;
  padding: 10px;
  svg {
    transition: 0.3s;
    &:hover {
      color: grey;
      transition: 0.3s;
    }
  }
}
.start {
  justify-content: end;
  svg {
    margin-right: 10px;
  }
}
.end {
  justify-content: start;
  svg {
    margin-left: 10px;
  }
}
</style>
