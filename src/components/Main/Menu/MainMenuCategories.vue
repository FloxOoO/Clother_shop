<template>
  <div
    :class="`${select ? 'category-open' : 'category'}`"
  >
    <div 
      @click="selected(title, '')"
      :class="`${select ? 'category-open__selected' : 'category__title'}`"
    >
      <a> {{ title }} </a>
      <icon-mdi
        :icon="
          select
            ? iconsMenu.mdiArrowUpCircleOutline
            : iconsMenu.mdiArrowDownCircleOutline
        "
        @click.stop="select ? (select = false) : selected(title, '')"
        class="category__icon"
      />
    </div>
    <ul v-if="select" class="category-open__list">
      <li v-for="(subtitle, id) in subtitles" :key="id" class="category type">
        <a
          @click.stop="selected(title, subtitle)"
        >
          {{ subtitle }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mdiArrowDownCircleOutline, mdiArrowUpCircleOutline } from "@mdi/js";
import IconMdi from "../../Icons/IconMdi.vue";
export default {
  name: "MainMenuTitles",

  components: {
    IconMdi,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitles: {
      type: Array,
      required: false,
    },
  },

  emits: {
    'selected-category': (value) => typeof value === 'object'
  },

  data() {
    return {
      select: false,
    };
  },

  methods: {
    selected(category, type) {
      this.select = true;
      this.$emit('selected-category', { category: category, type: type });
    }
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
    cursor: pointer;
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
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
      .category__icon {
        color: grey;
        &:hover {
          color: white;
          cursor: pointer;
        }
      }
    }
    &__list {
      .category {
        margin: 0px;
        a:hover {
          transition: 0.3s;
          color: rgba(128, 128, 128);
        }
      }
    }
  }
}
.type {
  &:hover {
    cursor: auto;
  }
  a:hover {
    cursor: pointer;
  }
}
</style>
