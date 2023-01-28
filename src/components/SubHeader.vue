<template>
  <div class="subheader">
    <div class="subheader__title">
      <slot> {{ namePage }} </slot>
    </div>
    <img
      @click="$router.push('/')"
      src="../img/logo_header.png" 
      alt="" 
      class="subheader__logo" />
    <div 
      @click="$router.push('/basket')"
      class="basket"
    >
      <icon-mdi :icon="icons.mdiBasketOutline" class="basket__icon" />
      <div class="basket__title">Корзина</div>
    </div>
    <div 
      @click="$router.push('/favorites')"
      class="favorite"
    >
      <icon-mdi :icon="icons.mdiCardsHeart" class="favorite__icon" />
      <div class="favorite__title">Избранное</div>
    </div>
  </div>
</template>
<script>
import { mdiBasketOutline, mdiCardsHeart } from "@mdi/js";
import IconMdi from "./IconMdi.vue";
export default {
  components: {
    IconMdi,
  },

  computed: {
    icons() {
      return {
        mdiBasketOutline,
        mdiCardsHeart,
      };
    },
  }
};
</script>
<style lang="scss" scoped>
@mixin subheader-menu($top, $cl) {
  top: $top;
  left: 100%;
  transform: translate(-100%, -50%);
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  &__icon {
    margin-right: 4px;
    color: grey;
    transition: 0.3s;
    &:hover {
      color: $cl;
      transition: 0.3s;
    }
  }
}
.subheader {
  position: relative;
  height: 140px;
  max-width: 1200px;
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
  @include subheader-menu(40%,black);
}
.favorite {
  @include subheader-menu(60%,red);
}
</style>
