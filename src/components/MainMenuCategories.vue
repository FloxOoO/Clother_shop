<template>
  <div
    @click="selectCategory(title)"
    :class="`${checkSelectCategory(title) ? 'category-open' : 'category'}`"
  >
    <div
      :class="`${
        checkSelectCategory(title)
          ? 'category-open__selected'
          : 'category__title'
      }`"
    >
      <a> {{ title }} </a>
      <icon-mdi
        :icon="
          checkSelectCategory(title)
            ? iconsMenu.mdiArrowUpCircleOutline
            : iconsMenu.mdiArrowDownCircleOutline
        "
        @click.stop="
          checkSelectCategory(title)
            ? removeSelectCategory(title)
            : selectCategory(title)
        "
        class="category__icon"
      />
    </div>
    <ul v-if="checkSelectCategory(title)" class="category-open__list">
      <li v-for="(subtitle, id) in subtitles" :key="id" class="category">
        {{ subtitle }}
      </li>
    </ul>
  </div>
</template>
<script>  
import { mdiArrowDownCircleOutline, mdiArrowUpCircleOutline } from "@mdi/js";
import IconMdi from "./IconMdi.vue";
export default {
  name: "MainMenuTitles",

  components: {
    IconMdi,
  },

  props: {
    title: {
      type: String,
    },
    subtitles: {
      type: Array,
    },
  },

  data() {
    return {
      selectedCategory: null,
    };
  },

  methods: {
    checkSelectCategory(categoryName) {
      return this.selectedCategory === categoryName;
    },
    selectCategory(categoryName) {
      this.selectedCategory = categoryName
    },
    removeSelectCategory() {
      this.selectedCategory = null
    },
  },

  computed: {
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
.category {
  width: 200px;
  margin-bottom: 25px;
  padding: 10px;
  border-radius: 7px;
  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
    .category__icon {
      display: inline;
      color: grey;
      &:hover {
        color: black;
        transition: 0.3s;
      }
    }
  }
  &__icon {
    display: none;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    width: inherit - 20px;
    font-size: 24px;
    font-weight: 700;
    a:hover {
      transition: 0.3s;
      color: rgba(128, 128, 128);
    }
  }
  &-open {
    margin-bottom: 25px;
    .category {
      margin: 0px;
    }
    .category__icon {
      display: inline;
      color: grey;
      &:hover {
        color: black;
        transition: 0.3s;
      }
    }
    .category__title a:hover {
      color: white;
    }
    
    &__selected {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      font-weight: 700;
      padding: 10px;
      border-radius: 7px;
      background-color: black;
      color: white;
      .category__icon {
        color: grey;
        &:hover {
          color: white;
        }
      }
    }
    &__list {
      .category {
        margin: 0px;
      }
    }
  }
}
</style>
