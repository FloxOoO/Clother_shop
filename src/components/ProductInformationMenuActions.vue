<template>
  <div class="information__buttons">
    <div
      @click="addProductBasket"
      class="information__buttons-addbasket"
      :class="{
        'information__buttons-addbasket-active': addedBasket,
      }"
    >
      {{ addedBasket ? "Добавлено в корзину" : "Добавить в корзину" }}
    </div>
    <div @click="addProductFavorite" class="information__buttons-addfavorite">
      <icon-mdi
        :icon="addedFavorite ? icons.mdiCardsHeart : icons.mdiCardsHeartOutline"
        :class="{
          'information__buttons-addfavorite-active': addedFavorite,
        }"
      />
    </div>
  </div>
  <div 
    v-if="notSelectedSize"
    class="add-error"
  >
    Необходимо выбрать размер товара
  </div>
</template>
<script>
import { mdiCardsHeart, mdiCardsHeartOutline } from "@mdi/js";
import IconMdi from "../components/IconMdi.vue";
import { useProductsStore } from "../stores/productsStore.js";
export default {
  components: {
    IconMdi,
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
      addedFavorite: false,
      notSelectedSize: false,
    };
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  created() {
    this.productsStore.favorites.forEach((favorite) => {
      if (favorite.id === this.product.id) {
        this.addedFavorite = true;
      }
    });
    this.productsStore.basket.forEach((basket) => {
      if (basket.id === this.product.id) {
        this.addedBasket = true;
      }
    });
  },

  methods: {
    addProductBasket() {
      delete this.userProduct.colors;
      this.userProduct.color = this.selected.color;
      if (this.selected.size) {
        delete this.userProduct.size;
        this.userProduct.sizeSelected = this.selected.size;
      }
      if (!this.userProduct.size) {
        this.addedBasket = true;
        this.productsStore.addBasket(this.userProduct);
      } else {
        this.notSelectedSize = true;
      }
    },
    addProductFavorite() {
      this.addedFavorite
        ? (this.addedFavorite = false)
        : (this.addedFavorite = true);
      this.productsStore.addFavorite(this.product.id);
    },
  },

  computed: {
    icons() {
      return {
        mdiCardsHeart,
        mdiCardsHeartOutline,
      };
    },
    userProduct() {
      return JSON.parse(JSON.stringify(this.product));
    },
  },

  watch: {
    'selected.size'() {
      this.notSelectedSize = false;
    }
  }
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
    svg:hover {
      cursor: pointer;
      transition: color 0.3s;
      color: red;
    }
    &-active {
      visibility: visible;
      color: red;
      transition: color 0.3s;
      animation: heart 0.3s;
    }
    @keyframes heart {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}
.add-error {
  color: red;
}
</style>
