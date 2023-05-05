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
  <draggable :list="categories" ghost-class="ghost" drag-class="drag">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category__container"
    >
      <main-menu-categories
        :title="category.title"
        :subtitles="category.subtitles"
        @selected-category="selected"
      />
    </div>
  </draggable>
</template>
<script>
import MainMenuCategories from "./MainMenuCategories.vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "MainMenu",

  components: {
    draggable: VueDraggableNext,
    MainMenuCategories,
  },

  emits: {
    "selected-category": (value) => typeof value === "object",
  },

  data() {
    return {
      selectedCategory: false,
      categories: [
        {
          id: 0,
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
          id: 1,
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
          id: 2,
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
          id: 3,
          title: "Спорт",
          subtitles: ["Велоспорт", "Плавание", "Скейтборд", "Футбол", "Фитнес"],
        },
        {
          id: 4,
          title: "Красота",
          subtitles: [
            "Макияж",
            "Для ванны и душа",
            "Волосы",
            "Маникюр и педикюр",
          ],
        },
      ],
    };
  },

  methods: {
    selected(selectedCategory) {
      if (selectedCategory) {
        this.selectedCategory = true;
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
  @media (max-width: 750px) {
    width: 130px;
    font-size: 16px;
  }
}
.ghost {
  border-radius: 5px;
  border: dashed 1px black;
  background-color: rgba(236, 236, 236, 0.664);
  .category {
    margin-bottom: 0px;
  }
}
.ghost > div {
  visibility: hidden;
}
.category__container {
  margin-bottom: 35px;
}
</style>
