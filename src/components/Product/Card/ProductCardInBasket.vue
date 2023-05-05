<template>
  <div v-if="$route.name === 'Корзина'" class="inbasket">
    <div class="inbasket__information">
      <div class="inbasket-color">
        {{ product?.color ? "Выбранный цвет: " + product.color : "Без опций" }}
      </div>
      <div v-if="product?.sizeSelected" class="inbasket__size">
        Выбранный размер: {{ product.sizeSelected }}
      </div>
    </div>
    <div class="inbasket__amount">
      <div
        @click.stop="switchScroll()"
        class="inbasket__amount-title"
        :class="{
          'inbasket__amount-title-active': scroll,
        }"
      >
        Изменить количество
      </div>
      <div class="inbasket__amount-now">{{ product.amount }}</div>
      <div v-if="scroll" class="inbasket__scroll">
        <div
          v-for="count in [...Array(10).keys()].slice(1)"
          :key="count"
          class="inbasket__scroll-title"
          @click.stop="switchScroll(count)"
        >
          {{ count }}
        </div>
        <div
          v-if="!inputCountOpen"
          @click.stop="inputCountOpen = true"
          class="inbasket__scroll-title"
        >
          10+
        </div>
        <div v-else class="input-container">
          <input
            @click.stop
            v-model="inputCount"
            placeholder="Введите количество"
            type="text"
            class="inbasket__scroll-input"
          />
          <icon-mdi
            @click.stop="getUserCount"
            :icon="icons.mdiCheckCircleOutline"
            class="inbasket__scroll-icon"
          />
          <div
            v-if="!+inputCount && !(inputCount === null)"
            class="inbasket__scroll-error"
          >
            Введите корректное значение
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useProductsStore } from "../../../stores/productsStore.js";
import { mdiCheckCircleOutline } from "@mdi/js";
import IconMdi from "../../Icons/IconMdi.vue";
export default {
  components: {
    IconMdi,
  },

  props: {
    product: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      scroll: false,
      inputCount: null,
      inputCountOpen: false,
    };
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.inputCountOpen && e.key === "Enter") {
        this.getUserCount();
      }
      if (this.scroll && e.key === "Escape") {
        this.switchScroll();
      }
    },
    switchScroll(count = false) {
      if (count) {
        this.productsStore.changeAmountProductBasket(this.product, count);
        this.scroll = false;
      } else {
        this.scroll ? (this.scroll = false) : (this.scroll = true);
      }
    },
    getUserCount() {
      if (+this.inputCount && this.inputCount[0] !== "0") {
        this.productsStore.changeAmountProductBasket(
          this.product,
          +this.inputCount
        );
        this.scroll = false;
      }
    },
  },

  watch: {
    scroll() {
      this.inputCountOpen = false;
      this.inputCount = null;
    },
  },

  computed: {
    icons() {
      return {
        mdiCheckCircleOutline,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.inbasket {
  &__information {
    height: 57px;
    margin-top: 8px;
    font-weight: 700;
    background-color: rgba(128, 128, 128, 0.4);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
  &__color {
    margin-bottom: 5px;
  }
  &__amount {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    &-title {
      flex: 1 1 auto;
      height: inherit;
      background-color: green;
      color: white;
      font-weight: 700;
      border-radius: 5px;
      margin-right: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      &-active,
      &:hover {
        transition: 0.3s;
        background-color: rgb(1, 54, 1);
      }
    }
    &-now {
      height: inherit;
      width: 50px;
      background-color: black;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: 700;
      font-size: 20px;
    }
  }
  &__scroll {
    position: absolute;
    width: 100%;
    top: 0;
    background-color: white;
    height: 340px;
    &-title {
      cursor: pointer;
      padding: 9px;
      &:hover {
        transition: 0.3s;
        background-color: rgb(236, 236, 236);
      }
    }
    &-input {
      position: relative;
      width: 100%;
      padding: 9px;
      font-size: 16px;
      background-color: rgb(236, 236, 236);
      &:focus {
        background-color: rgb(236, 236, 236);
      }
    }
    &-icon {
      position: absolute;
      top: 99%;
      left: 100%;
      transform: translate(-100%, -100%);
      color: green;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        color: rgb(1, 80, 1);
      }
    }
    &-error {
      color: red;
      background-color: white;
      font-size: 14px;
      padding: 5px 9px 5px 9px;
      font-weight: 700;
    }
  }
}
</style>
