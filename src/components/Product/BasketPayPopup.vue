<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="basket-menu" @click.stop>
      <div class="basket-menu__title">Информация о товарах</div>
      <icon-mdi
        :icon="icons.mdiClose"
        @click="close"
        class="basket-menu__icon"
      />
      <div class="basket-menu__products">
        <div
          v-for="title in tableTitles"
          :key="title"
          class="basket-menu__product table-title"
        >
          {{ title }}
        </div>
        <template v-for="(product, id) in productsStore.basket" :key="id">
          <div class="basket-menu__product table-title">{{ id + 1 }}</div>
          <div class="basket-menu__product">
            {{ product.brand }}
          </div>
          <div class="basket-menu__product">
            {{ product.fullname }}
          </div>
          <div class="basket-menu__product">
            {{ product?.color ? product.color : "-" }}
          </div>
          <div class="basket-menu__product">
            {{ product?.sizeSelected ? product.sizeSelected : "-" }}
          </div>
          <div class="basket-menu__product">
            {{ product.amount }}x{{
              product?.newprice ? product.newprice : product.price
            }}
          </div>
          <div class="basket-menu__product">
            {{
              product?.newprice
                ? product.newprice * product.amount
                : product.price * product.amount
            }}
          </div>
        </template>
      </div>
      <div class="basket-menu__totalprice">
        <div v-if="discount" class="basket-menu__totalprice-container">
          <div class="basket-menu__totalprice-oldprice">
            Цена без скидки: {{ productsStore.getBasketDiscount }} ₽
          </div>
          <div class="basket-menu__totalprice-newprice">
            Цена со скидкой:
            <span>{{ productsStore.getBasketFullPrice }} ₽</span>
          </div>
        </div>
        <div v-else class="basket-menu__totalprice-newprice">
          Сумма к оплате: {{ productsStore.getBasketFullPrice }} ₽
        </div>
        <div class="basket-menu__totalprice-pay">Оплатить</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useProductsStore } from "../../stores/productsStore.js";
import IconMdi from "../Icons/IconMdi.vue";
import { mdiClose } from "@mdi/js";
export default {
  components: {
    IconMdi,
  },

  data() {
    return {
      isOpen: false,
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
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },

  computed: {
    tableTitles() {
      return [
        "№",
        "Бренд",
        "Название",
        "Цвет",
        "Размер",
        "Количество",
        "Цена (в руб.)",
      ];
    },
    icons() {
      return {
        mdiClose,
      };
    },
    discount() {
      return (
        this.productsStore.getBasketFullPrice -
        this.productsStore.getBasketDiscount
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.backdrop {
  position: fixed;
  z-index: 499;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}
.table-title {
  font-weight: 700;
}
.basket-menu {
  position: fixed;
  z-index: 500;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 80px;
  &__title {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }
  &__icon {
    position: absolute;
    margin-top: 5px;
    margin-left: calc(100% - 24px);
    top: 0%;
    transform: translateX(-100%);
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: grey;
      transition: 0.3s;
    }
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(7, fit-content(100%));
    grid-auto-flow: row;
    border: 1px solid rgba(128, 128, 128, 0.6);
    margin-bottom: 10px;
  }

  &__product {
    text-align: center;
    padding: 5px;
    border: 1px solid rgba(128, 128, 128, 0.6);
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }

  &__totalprice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-oldprice {
      font-size: 18px;
      margin-bottom: 5px;
      text-decoration: line-through;
      @media (max-width: 750px) {
        font-size: 14px;
      }
    }
    &-newprice {
      font-size: 20px;
      font-weight: 700;
      span {
        color: rgb(255, 103, 1);
      }
      @media (max-width: 750px) {
        font-size: 16px;
      }
    }
    &-pay {
      background-color: green;
      height: 40px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      font-size: 20px;
      color: white;
      font-weight: 700;
      box-shadow: 0px 0px 5px 2px rgb(212, 212, 212);
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        transform: scale(1.1);
      }
      cursor: pointer;
      @media (max-width: 750px) {
        height: 40px;
        width: 100px;
      }
    }
  }
}
</style>
