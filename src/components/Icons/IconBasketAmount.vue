<template>
  <div v-if="productsStore.getBasketAmountAll" class="amount">
    {{ productsStore.getBasketAmountAll }}
  </div>
</template>
<script>
import { useProductsStore } from "../../stores/productsStore.js";
export default {
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  }
};
</script>
<style lang="scss" scoped>
.amount {
  width: 18px;
  height: 18px;
  background-color: rgb(224, 64, 64);
  border-radius: 50%;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0px 0px 3px 2px rgba(128, 128, 128, 0.548);
  position: absolute;
  left: 5%;
  top: 10%;
  transform: translate(-50%, -50%);
  transition: .3s;
}
</style>
