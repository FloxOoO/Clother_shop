<template>
  <div v-if="isOpen" class="backdrop" @click="close(null)">
    <div class="popup" @click.stop>
      <img src="../img/logo_popup.png" alt="" class="popup__logo" />
      <div class="popup__description">
        <div class="popup__header">
          <div class="popup__title">Укажите ваш город</div>
          <icon-mdi :icon="icons.mdiClose" @click="close" class="popup__icon" />
        </div>
        <div class="popup__city-list">
          <a 
            v-for="(city, id) in cities" 
            :key="id"
            @click="close(city)"
          >
            {{ city }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconMdi from "./IconMdi.vue";
import { mdiClose } from "@mdi/js";
export default {
  components: {
    IconMdi,
  },

  emits: {
    'select-city': (value) => typeof value === "string"
  },

  data() {
    return {
      isOpen: false,
    };
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
    close(city) {
      this.$emit('select-city', city)
      this.isOpen = false;
    }
  },

  computed: {
    icons() {
      return {
        mdiClose,
      };
    },
    cities() {
      return [
        "г. Москва",
        "г. Санкт-Петербург",
        "г. Барнаул",
        "г. Владивосток",
        "г. Волгоград",
        "г. Воронеж",
        "г. Екатеринбург",
        "г. Ижевск",
        "г. Казань",
        "г. Кемерово",
        "г. Новосибирск",
        "г. Омск",
        "г. Пермь",
        "г. Ростов-на-Дону",
        "г. Самара",
        "г. Томск",
        "г. Тюмень",
        "г. Уфа",
        "г. Хабаровск",
        "г. Челябинск",
        "г. Ярославль",
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.backdrop {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}
.popup {
  position: fixed;
  z-index: 1000;
  min-width: 700px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 80px;
  &__logo {
    width: 299px;
    height: 324px;
    margin-right: 35px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__icon {
    transition: 0.3s;
    &:hover {
      color: grey;
      transition: 0.3s;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__city-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    max-height: 345px;
    a {
      padding-bottom: 15px;
      transition: 0.3s;
      &:hover {
        position: relative;
        cursor: pointer;
        color: grey;
        transition: 0.3s;
      }
    }
  }
}
</style>
