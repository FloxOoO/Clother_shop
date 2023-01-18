<template>
  <main-menu-categories
    v-for="(category, id) in categories"
    :key="id"
    :title="category.title"
    :subtitles="category.subtitles"
  />
</template>
<script>
import MainMenuCategories from "./MainMenuCategories.vue";
export default {
  name: "MainMenu",

  components: {
    MainMenuCategories,
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
            "Сандали",
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
