<template>
  <div
    v-for="(title, id) in structure.titles"
    :key="id"
    @click="selectProduct(title)"
    :class="`${
      selectedProduct === title ? 'product product__selected' : 'product'
    }`"
  >
    <div class="product__title">
      <a> {{ title.toUpperCase() }} </a>
    </div>
    <icon-mdi :icon="structure.icon" class="product__icon" />
  </div>
</template>
<script>
import { mdiArrowDownCircleOutline } from "@mdi/js";
import IconMdi from "./IconMdi.vue";
export default {
  name: "MainMenu",

  components: {
    IconMdi,
  },

  data() {
    return {
      selectedProduct: null,
    };
  },

  methods: {
    selectProduct(productName) {
      this.selectedProduct = productName;
    },
  },

  computed: {
    structure() {
      return {
        titles: ["Обувь", "Одежда", "Аксессуары", "Спорт", "Красота"],
        icon: mdiArrowDownCircleOutline,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.product {
  width: 200px;
  display: flex;
  margin-bottom: 25px;
  padding: 10px;
  justify-content: space-between;
  border-radius: 7px;
  &__icon {
    display: none;
  }
  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
    .product__icon {
      display: inline;
      color: grey;
      &:hover {
        color: black;
        transition: 0.3s;
      }
    }
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    a:hover {
      transition: 0.3s;
      color: rgba(128, 128, 128);
    }
  }
  &__selected {
    background-color: black;
    color: white;
    .product__title {
      a:hover {
        color: white;
      }
    }
    &:hover {
      background-color: black;
      .product__icon {
        color: grey;
        &:hover {
          color: white;
        }
      }
    }
  }
}
</style>
