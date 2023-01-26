<template>
  <div class="information">
    <div class="information__title">{{ product.brand }}</div>
    <div class="information__subtitle">{{ product.fullname }}</div>
    <div class="information__price">
      <span v-if="product?.newprice" class="information__price-old">
        {{ product.price }}
      </span>
      <span
        class="information__price-actually"
        :class="{
          'information__price-discount': product?.newprice,
        }"
      >
        {{ product?.newprice ? product.newprice : product.price }}
      </span>
    </div>
    <div class="information__colors">
      <div class="information__colors-container">
        <div class="information__colors-photo">
          <img :src="`../${product.image_path}`" alt="" />
        </div>
        <div class="information__colors-title">Серый</div>
      </div>
      <icon-mdi :icon="icons.mdiChevronDown" class="information__icon" />
    </div>
    <div class="information__sizes">
      <div class="information__sizes-title">Выберите размер</div>
      <icon-mdi :icon="icons.mdiChevronDown" class="information__icon" />
    </div>
    <div class="information__buttons">
      <div class="information__buttons-addbasket">Добавить в корзину</div>
      <div class="information__buttons-addfavorite">
        <icon-mdi :icon="icons.mdiCardsHeartOutline" class="information__icon" />
      </div>
    </div>
  </div>
</template>
<script>
import { mdiChevronDown, mdiCardsHeart, mdiCardsHeartOutline } from "@mdi/js";
import IconMdi from "../components/IconMdi.vue";
export default {
  components: {
    IconMdi,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    icons() {
      return {
        mdiChevronDown,
        mdiCardsHeart,
        mdiCardsHeartOutline
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.information {
  &__title {
    font-size: 26px;
    letter-spacing: 5px;
    margin-bottom: 5px;
  }

  &__subtitle {
    color: grey;
    margin-bottom: 15px;
  }

  &__price {
    margin-bottom: 50px;
  }

  &__price-old {
    display: inline-block;
    text-decoration: line-through;
    font-size: 16px;
  }

  &__price-actually {
    font-size: 22px;
    font-weight: 700;
    &:after {
      content: " ₽";
    }
  }

  &__price-discount {
    color: rgb(255, 103, 1);
    &:before {
      content: " ";
    }
  }

  &__colors {
    height: 50px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 8px 16px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    &-container {
      display: flex;
      align-items: center;
    }
    &-photo {
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
  }

  &__sizes {
    height: 50px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 8px 16px 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    &-title {
      color: grey;
    }
  }

  &__buttons {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    &-addbasket {
      flex: 1 1 auto;
      background-color: black;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 5px;
      margin-right: 8px;
    }

    &-addfavorite {
      width: 44px;
      height: inherit;
      border: 1px solid black;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
