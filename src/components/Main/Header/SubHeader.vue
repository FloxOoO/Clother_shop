<template>
  <div class="subheader">
    <div class="subheader__title">
      <slot></slot>
    </div>
    <img
      @click="$router.push('/1')"
      src="../../../assets/images/logo_header.png"
      alt=""
      class="subheader__logo"
    />
    <div @click="$router.push('/basket/1')" class="basket">
      <icon-basket-amount />
      <icon-mdi :icon="icons.mdiBasketOutline" class="basket__icon" />
      <div class="basket__title">Корзина</div>
    </div>
    <div @click="$router.push('/favorites/1')" class="favorite">
      <icon-mdi :icon="icons.mdiCardsHeart" class="favorite__icon" />
      <div class="favorite__title">Избранное</div>
    </div>
  </div>
</template>
<script>
import { mdiBasketOutline, mdiCardsHeart } from "@mdi/js";
import IconMdi from "../../Icons/IconMdi.vue";
import IconBasketAmount from "../../Icons/IconBasketAmount.vue";
export default {
  components: {
    IconMdi,
    IconBasketAmount,
  },

  computed: {
    icons() {
      return {
        mdiBasketOutline,
        mdiCardsHeart,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin subheader-menu($top, $left, $cl) {
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
  @media (max-width: 750px) {
    top: 50%;
    left: $left;
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
    cursor: pointer;
    @media (max-width: 750px) {
      display: none;
    }
  }
  &__title {
    position: absolute;
    font-weight: 700;
    font-size: 55px;
    top: 50%;
    transform: translate(0%, -50%);
    @media (max-width: 750px) {
      font-size: 25px;
      margin-left: 10px;
      top: 50%;
    }
  }
  @media (max-width: 750px) {
    height: 85px;
  }
}
.basket {
  @include subheader-menu(40%, 100%, black);
  &:hover {
    transition: 0.3s;
    .amount {
      transform: scale(1.37);
      transition: 0.3s;
    }
  }
}
.favorite {
  @include subheader-menu(60%, 70%, red);
}
</style>
