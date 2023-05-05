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
        @click="switchPage('prev')"
        class="number-page__elem func start"
      >
        <icon-mdi :icon="icons.mdiArrowLeft" />
        <div class="number-page__elem-title">Назад</div>
      </div>
      <template v-for="prevpage in pageNavAmountLeft" :key="prevpage">
        <div
          class="number-page__elem"
          v-if="pageNav(prevpage, 'prev')"
          @click="switchPage(page - prevpage)"
        >
          <a>
            {{ page - prevpage }}
          </a>
        </div>
      </template>
      <div class="number-page__elem active">
        <a>{{ page }}</a>
      </div>
      <template v-for="nextpage in pageNavAmountRight" :key="nextpage">
        <div
          class="number-page__elem"
          v-if="pageNav(nextpage, 'next')"
          @click="switchPage(page + nextpage)"
        >
          <a>
            {{ page + nextpage }}
          </a>
        </div>
      </template>
      <div
        v-if="page !== pageAmount"
        @click="switchPage('next')"
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
  AMOUNT_PAGE_NAV: 3,

  props: {
    selectedCategory: {
      type: Object,
      required: false,
    },
    filterData: {
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
    pageNav(pagenum, position) {
      if (position === "prev") {
        return (
          (pagenum === this.$options.AMOUNT_PAGE_NAV
            ? this.page === this.pageAmount
            : true) && this.page - pagenum > 0
        );
      }
      if (position === "next") {
        return (
          (pagenum === this.$options.AMOUNT_PAGE_NAV
            ? !(this.page - 1)
            : true) && this.page + pagenum <= this.pageAmount
        );
      }
    },
    switchPage(flag) {
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
    }
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
    filteredProducts() {
      if (this.filterData?.start && this.filterData?.end) {
        return this.pageOptions.filter((product) =>
          product?.newprice
            ? product.newprice > this.filterData.start &&
              product.newprice < this.filterData.end
            : product.price > this.filterData.start &&
              product.price < this.filterData.end
        );
      } else {
        return this.pageOptions;
      }
    },
    numberProductsPage() {
      return {
        start: (this.page - 1) * this.$options.AMOUNT_PRODUCT_ON_PAGE,
        end: this.page * this.$options.AMOUNT_PRODUCT_ON_PAGE,
      };
    },
    paginatedProducts() {
      return this.filteredProducts.slice(
        this.numberProductsPage.start,
        this.numberProductsPage.end
      );
    },
    pageAmount() {
      return Math.ceil(
        this.filteredProducts.length / this.$options.AMOUNT_PRODUCT_ON_PAGE
      );
    },
    pageNavAmountLeft() {
      return [...Array(this.$options.AMOUNT_PAGE_NAV + 1).keys()]
        .slice(1)
        .reverse();
    },
    pageNavAmountRight() {
      return [...Array(this.$options.AMOUNT_PAGE_NAV + 1).keys()].slice(1);
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
    filterData: {
      handler() {
        this.page = 1;
        this.$router.push(`/1`);
      },
      deep: true
    }
  },
};
</script>
<style lang="scss" scoped>
.catalog-struct {
  display: flex;
  flex-direction: column;
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
    @media (max-width: 750px) {
      text-align: center;
    }
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, 230px);
    grid-auto-rows: minmax(1fr);
    gap: 24px 12px;
    margin-bottom: 30px;
    @media (max-width: 750px) {
      justify-content: center;
    }
  }
}
.main {
  min-height: calc(100vh - 307px);
}
.basket {
  min-height: calc(100vh - 339px);
}
.number-page {
  display: flex;
  margin-bottom: 10px;
  &__elem {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 0.3s;
    @media (max-width: 750px) {
      width: 25px;
      height: 25px;
    }
    &:hover {
      border-radius: 5px;
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
    @media (max-width: 750px) {
      display: none;
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
.active {
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 5px;
}
</style>
