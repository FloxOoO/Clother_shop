<template>
  <div
    class="allcategory"
    :class="{
      'allcategory-noselect': selectedCategory,
    }"
    @click="openStore"
  >
    Все товары
  </div>
  <main-menu-categories
    v-for="(category, id) in categories"
    :key="id"
    :title="category.title"
    :subtitles="category.subtitles"
    @selected-category="selected"
  />
</template>
<script>
import MainMenuCategories from "./MainMenuCategories.vue";
import { useProductsStore } from "../../../stores/productsStore.js";
export default {
  name: "MainMenu",

  components: {
    MainMenuCategories,
  },

  emits: {
    'selected-category': (value) => typeof value === 'object'
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  data() {
    return {
      selectedCategory: false,
    };
  },

  methods: {
    selected(selectedCategory) {
      if (selectedCategory) {
        this.selectedCategory = true
      }
      this.$emit("selected-category", {
        category: selectedCategory.category,
        type: selectedCategory.type,
      });
    },
    openStore() {
      this.selectedCategory = false;
      this.$emit("selected-category", {
        category: "",
        type: "",
      });
    },
  },

  computed: {
    categories() {
      return [
        {
          title: "Обувь",
          subtitles: [
            "Ботинки",
            "Кроссовки",
            "Туфли",
            "Сапоги",
            "Сандалии",
            "Домашняя обувь",
          ],
        },
        {
          title: "Одежда",
          subtitles: [
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
          subtitles: [
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
          subtitles: ["Велоспорт", "Плавание", "Скейтборд", "Футбол", "Фитнес"],
        },
        {
          title: "Красота",
          subtitles: [
            "Макияж",
            "Для ванны и душа",
            "Волосы",
            "Маникюр и педикюр",
          ],
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.allcategory {
  width: 200px;
  margin-bottom: 25px;
  padding: 10px;
  border-radius: 7px;
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: 700;
  &-noselect {
    background-color: white;
    color: black;
    &:hover {
      background-color: rgba(128, 128, 128, 0.2);
      cursor: pointer;
    }
  }
}
</style>
