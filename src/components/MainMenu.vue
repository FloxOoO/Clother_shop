<template>
  <div
    v-for="(inf, id) in menuInformation"
    :key="id"
    @click="selectProduct(inf.title)"
    :class="`${selectedProduct === inf.title ? 'product menu' : 'product'}`"
  >
    <div
      :class="`${
        selectedProduct === inf.title
          ? 'product product__title product__selected'
          : 'product__title'
      }`"
    >
      <a> {{ inf.title }} </a>
      <icon-mdi
        :icon="
          selectedProduct === inf.title
            ? iconsMenu.mdiArrowUpCircleOutline
            : iconsMenu.mdiArrowDownCircleOutline
        "
        class="product__icon"
        @click.stop="selectedProduct = null"
      />
    </div>
    <ul v-if="selectedProduct === inf.title" class="product-list">
      <li v-for="(subtitle, id) in inf.subtitle" :key="id" class="product">
        {{ subtitle }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mdiArrowDownCircleOutline, mdiArrowUpCircleOutline } from "@mdi/js";
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
    menuInformation() {
      return [
        {
          title: "Обувь",
          subtitle: [
            "Ботинки",
            "Кроссовки",
            "Туфли",
            "Сапоги",
            "Сандали",
            "Домашняя обувь",
          ],
        },
        {
          title: "Одежда",
          subtitle: [
            "Брюки",
            "Верхняя одежда",
            "Свитеры",
            "Джинсы",
            "Домашняя одежда",
            "Купальники",
            "Нижнее белье",
            "Носки",
            "Шорты",
            "Юбки",
          ],
        },
        {
          title: "Аксессуары",
          subtitle: [
            "Головные уборы",
            "Зонты",
            "Канцелярские товары",
            "Очки",
            "Рюкзаки",
            "Сумки",
          ],
        },
        {
          title: "Спорт",
          subtitle: ["Велоспорт", "Плавание", "Скейтборд", "Футбол", "Фитнес"],
        },
        {
          title: "Красота",
          subtitle: [
            "Макияж",
            "Для ванны и душа",
            "Волосы",
            "Маникюр и педикюр",
          ],
        },
      ];
    },
    iconsMenu() {
      return {
        mdiArrowDownCircleOutline,
        mdiArrowUpCircleOutline,
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
    display: flex;
    justify-content: space-between;
    width: inherit;
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
.product-list {
  .product {
    margin: 0px;
  }
}
.menu {
  padding: 0px;
  background-color: white;
  color: black;
  display: block;
  .product {
    margin: 0px;
  }
  &:hover {
    background-color: white;
    color: black;
  }
  .product__icon {
    display: inline;
    color: grey;
    &:hover {
      color: black;
      transition: 0.3s;
    }
  }
}
</style>
