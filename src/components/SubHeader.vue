<template>
  <div class="subheader">
    <div class="subheader__title">Товары</div>
    <img src="../img/logo_header.png" alt="" class="subheader__logo" />
    <div class="basket">
      <icon-mdi :icon="icons.mdiBasketOutline" class="basket__icon" />
      <div class="basket__title">Корзина</div>
    </div>
  </div>
</template>
<script>
import { mdiBasketOutline } from "@mdi/js";
import IconMdi from "./IconMdi.vue";
export default {
  components: {
    IconMdi,
  },

  computed: {
    icons() {
      return {
        mdiBasketOutline,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.subheader {
  position: relative;
  height: 100px;
  max-width: 1400px;
  margin: 0px auto;
  text-align: center;
  &__logo {
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__title {
    position: absolute;
    font-weight: 700;
    font-size: 55px;
    top: 50%;
    transform: translate(0%, -50%);
  }
}
.basket {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  cursor: pointer;
  &__icon {
    margin-right: 4px;
    color: grey;
    transition: .3s;
    &:hover {
      color: black;
      transition: .3s;
    }
  }
}
</style>
