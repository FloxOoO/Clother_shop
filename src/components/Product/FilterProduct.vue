<template>
  <div class="filter">
    <div class="filter__title">Диапазон цен:</div>
    <div class="filter__container start">
      <input v-model="startPriceFilter" placeholder="от" />
    </div>
    <div class="filter__container">
      <input v-model="endPriceFilter" placeholder="до" />
    </div>
    <button
      @click="activatedFilter()"
      class="filter__button"
      :disabled="!this.valid"
    >
      Применить
    </button>
  </div>
</template>
<script>
export default {
  name: "FilterProduct",

  props: {
    selectedCategory: {
      type: Object,
      required: false
    }
  },

  emits: {
    "filter-price": (value) => typeof value === "object",
  },

  data() {
    return {
      startPriceFilter: null,
      endPriceFilter: null,
      valid: false,
    };
  },

  methods: {
    activatedFilter() {
      this.$emit("filter-price", {
        start: this.startPriceFilter,
        end: this.endPriceFilter,
      });
    },
    validCheckingFilter(start, end) {
      +start && +end && +end > +start
        ? (this.valid = true)
        : (this.valid = false);
      if (start === "" && end === "") {
        this.$emit("filter-price", {
          start: null,
          end: null,
        });
      }
    },
  },

  watch: {
    startPriceFilter() {
      this.validCheckingFilter(this.startPriceFilter, this.endPriceFilter)
    },
    endPriceFilter() {
      this.validCheckingFilter(this.startPriceFilter, this.endPriceFilter)
    },
    selectedCategory: {
      handler() {
        this.startPriceFilter = null
        this.endPriceFilter = null
        this.$emit("filter-price", {
          start: null,
          end: null,
        });
      },
      deep: true
    }
  },
};
</script>
<style lang="scss" scoped>
.filter {
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px #eeeff1;
  background-color: white;
  padding: 15px;
  &__title {
    margin-right: 10px;
  }
  &__container {
    input {
      width: 100px;
      height: 35px;
      padding: 10px;
      border-radius: 5px;
      border: solid 1px #cccccc;
      background-color: white;
      font-size: 16px;
      @media (min-width: 750px) {
        margin-right: 5px;
      }
      @media (max-width: 750px) {
        font-size: 12px;
        width: 50px;
        height: 15px;
      }
    }
  }
  &__button {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    height: 35px;
    background-color: rgb(17, 196, 17);
    @media (max-width: 750px) {
      justify-content: center;
      width: 193px;
      font-size: 12px;
      height: 15px;
      position: absolute;
      top: calc(100% - 5px);
      transform: translateY(-100%);
      text-align: center;
    }
  }
  @media (max-width: 750px) {
    position: relative;
    font-size: 12px;
    width: 230px;
    margin: 0px auto;
    margin-bottom: 15px;
    height: 70px;
    padding-top: 0px;
  }
}
.start {
  @media (max-width: 750px) {
    margin-right: 5px;
  }
}
</style>
