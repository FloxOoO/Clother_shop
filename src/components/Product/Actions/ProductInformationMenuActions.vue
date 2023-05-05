<template>
  <div class="information__buttons">
    <div
      @click="addProductBasket"
      class="information__buttons-addbasket"
      :class="{
        'information__buttons-addbasket-active': addedBasket,
      }"
    >
      {{ addedBasket ? "Добавлено" : "Добавить в корзину" }}
    </div>
    <div class="information__buttons-addfavorite">
      <switch-favorite :productID="product.id" />
    </div>
  </div>
  <div v-if="notSelectedSize" class="add-error">
    Необходимо выбрать размер товара
  </div>
</template>
<script>
import SwitchFavorite from "../../Base/SwitchFavorite.vue";
import { useProductsStore } from "../../../stores/productsStore.js";
export default {
  components: {
    SwitchFavorite,
  },

  props: {
    selected: {
      type: Object,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      addedBasket: false,
      notSelectedSize: false,
    };
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  methods: {
    addProductBasket() {
      let userProduct = JSON.parse(JSON.stringify(this.product))
      delete userProduct.colors;
      if (this.selected.size) {
        delete userProduct.size;
        userProduct.sizeSelected = this.selected.size;
      }
      userProduct.color = this.selected.color;
      userProduct.amount = 1;
      if (!userProduct.size) {
        this.addedBasket = true;
        this.productsStore.addBasket(userProduct);
      } else {
        this.notSelectedSize = true;
      }
    },
  },

  watch: {
    addedBasket() {
      setTimeout(() => {
        this.addedBasket = false;
      }, 500)
    },
    "selected.size"() {
      this.notSelectedSize = false;
      this.addedBasket = false;
    },
    "selected.color"() {
      this.addedBasket = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.information__buttons {
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  &-addbasket {
    flex: 1 1 auto;
    background-color: black;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    margin-right: 8px;
    transition: background-color 0.3s;
    cursor: pointer;
    &-active {
      transition: 0.3s;
      background-color: rgba(39, 39, 39, 0.8);
      cursor: auto;
    }
    @media (max-width: 880px) {
      font-size: 12px;
      text-align: center;
    }
  }

  &-addfavorite {
    width: 44px;
    height: inherit;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .favorite {
      position: relative;
      color: black;
      margin: 0px;
      z-index: 0;
    }
  }
}
.add-error {
  color: red;
}
</style>
