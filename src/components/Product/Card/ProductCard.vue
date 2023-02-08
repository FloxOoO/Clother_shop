<template>
  <div
    class="product-card-container"
    @click="$router.push(`/product/${product.id}`)"
  >
    <div class="product-card">
      <div class="product-card__image">
        <img :src="product.image_path" class="product-card__img" />
      </div>
      <div class="product-card__description">
        <div class="product-card__price">
          <span v-if="product?.newprice" class="product-card__old-price">
            {{ product.price }}</span
          >
          <span
            class="product-card__actually-price"
            :class="{
              'product-card__price-discount': product?.newprice,
            }"
          >
            {{ product?.newprice ? product.newprice : product.price }}</span
          >
        </div>
        <div class="product-card__information">
          <div class="product-card__brand">{{ product.brand }}</div>
          <div class="product-card__fullname">{{ product.fullname }}</div>
        </div>
        <product-card-in-basket 
          :product="product" 
        />
      </div>
    </div>
    <div class="product-card-hover">
      <switch-favorite
        v-if="$route.name !== 'Корзина'"
        :productID="product.id"
      />
      <remove-basket v-if="$route.name === 'Корзина'" :product="product" />
      <div v-if="product?.size" class="product-card__size">
        Размер (RUS): {{ product.size.join(" ") }}
      </div>
    </div>
  </div>
</template>
<script>
import SwitchFavorite from "../../Base/SwitchFavorite.vue";
import RemoveBasket from "../../Base/RemoveBasket.vue";
import ProductCardInBasket from "./ProductCardInBasket.vue";
export default {
  components: {
    SwitchFavorite,
    RemoveBasket,
    ProductCardInBasket,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  }
};
</script>
<style lang="scss" scoped>
.product-card {
  position: relative;
  z-index: 2;
  display: grid;
  grid-auto-flow: row;
  grid-template: auto 1fr / 1fr;
  &-container {
    position: relative;
    &:hover {
      .product-card-hover {
        visibility: visible;
        transition: 0.2s 0.2s;
        box-shadow: 0px 7px 8px grey;
      }
    }
  }
  &-hover {
    visibility: hidden;
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: 0;
    left: -8px;
    background-color: white;
  }
  &__image {
    width: 100%;
    height: 0;
    min-height: auto;
    position: relative;
    padding-bottom: 340px;
    margin: 0px 0px 8px 0px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__description {
    overflow: hidden;
    margin-bottom: 8px;
  }

  &__price {
    margin-bottom: 8px;
  }

  &__old-price {
    display: inline-block;
    text-decoration: line-through;
    font-size: 14px;
  }

  &__actually-price {
    font-size: 18px;
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

  &__brand {
    margin-bottom: 5px;
  }

  &__fullname {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__size {
    position: absolute;
    z-index: 3;
    top: 100%;
    width: 100%;
    color: grey;
    background-color: white;
    padding: 8px;
    box-shadow: 0px 7px 8px grey;
    line-height: 19px;
  }
}
</style>
