<template>
  <div
    v-if="productsStore.basket.length"
    class="container"
    @click="$emit('open-window-pay')"
  >
    <div class="btn-pay">
      <icon-mdi :icon="icons.mdiCashSync" class="btn-pay__icon" />
      <div 
        class="btn-pay__title"
      >
        Перейти к оплате
      </div>
    </div>
  </div>
</template>
<script>
import { mdiCashSync } from "@mdi/js";
import IconMdi from "../Icons/IconMdi.vue";
import { useProductsStore } from "../../stores/productsStore.js";
export default {
  components: {
    IconMdi,
  },

  emits: {
    'open-window-pay': null
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  computed: {
    icons() {
      return {
        mdiCashSync,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 50px;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
}
.btn-pay {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: 300px;
  background-color: rgb(51, 51, 139);
  border-radius: 5px;
  color: white;
  box-shadow: 0px 0px 5px 2px rgb(212, 212, 212);
  transition: .3s;
  &__icon {
    margin-right: 5px;
  }
  &__title {
    font-weight: 700;
  }
  &:hover {
    transition: .3s;
    background-color: rgb(34, 34, 94);
  }
}
</style>
