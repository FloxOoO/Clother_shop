<template>
  <div v-if="items.length" class="items-menu">
    <div
      class="items-menu__main"
      :class="{
        'title-size-menu': typeof items[0] === 'number',
        'title-color-placeholder': selectedItem === 'Выберите размер',
      }"
    >
      <div class="items-menu__container">
        <div v-if="photo" class="items-menu__photo">
          <img :src="`${photo}`" alt="" />
        </div>
        <div class="items-menu__title">
          {{ selectedItem }}
        </div>
      </div>
      <icon-mdi
        :icon="`${openDropdown ? icons.mdiChevronUp : icons.mdiChevronDown}`"
        @click.stop="switchItem('')"
        class="items-menu__icon"
      />
    </div>
    <div
      v-if="openDropdown"
      class="items-menu__dropdown"
      :class="{
        'dropdown-size': typeof items[0] === 'number',
      }"
    >
      <div
        v-for="(item, id) in items"
        :key="id"
        @click="switchItem(item)"
        class="items-menu__dropdown-title"
      >
        <div v-if="photo" class="items-menu__photo">
          <img :src="`${photo}`" alt="" />
        </div>
        <a>
          {{ item }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import IconMdi from "../../Icons/IconMdi.vue";
export default {
  components: {
    IconMdi,
  },

  props: {
    items: {
      type: Array,
      required: false,
      default: [],
    },
    photo: {
      type: String,
      required: false,
    },
    productID: {
      type: Number,
      required: true,
    },
  },

  emits: {
    "selected-item": (value) =>
      typeof value === "string" || typeof value === "number",
  },

  data() {
    return {
      selectedItem: this.items[0],
      openDropdown: false,
    };
  },

  created() {
    if (typeof this.selectedItem === "number") {
      this.selectedItem = "Выберите размер";
    } else if (this.items.length) {
      this.$emit("selected-item", this.items[0]);
    }
  },

  methods: {
    switchItem(item) {
      if (item === "") {
        this.openDropdown
          ? (this.openDropdown = false)
          : (this.openDropdown = true);
      } else {
        this.selectedItem = item;
        this.openDropdown = false;
        this.$emit("selected-item", item);
      }
    },
  },

  computed: {
    icons() {
      return {
        mdiChevronDown,
        mdiChevronUp,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.items-menu {
  position: relative;
  margin-bottom: 25px;
  &__main {
    height: 50px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 8px 16px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__container {
    display: flex;
    align-items: center;
  }
  &__photo {
    position: relative;
    width: 23px;
    height: 32px;
    margin-right: 8px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__icon {
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: grey;
    }
  }
  &__dropdown {
    position: absolute;
    z-index: 2;
    width: 100%;
    box-shadow: 0px 7px 8px grey;
    &-title {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 8px 16px 8px 8px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        background-color: rgb(236, 236, 236);
      }
      a {
        transition: 0.3s;
        &:hover {
          transition: 0.3s;
          color: grey;
        }
      }
    }
  }
}
.title {
  &-size-menu {
    padding: 8px 16px 8px 14px;
  }
  &-color-placeholder {
    color: grey;
  }
}
.dropdown-size {
  z-index: 1;
}
</style>
