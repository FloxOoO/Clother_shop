<template>
  <div class="product-card-container">
    <div class="product-card">
      <div class="product-card__image">
        <img :src="`${image_path}`" alt="" class="product-card__img" />
      </div>
      <div class="product-card__description">
        <div class="product-card__price">
          <span v-if="newprice" class="product-card__old-price">
            {{ price }}</span
          >
          <span
            class="product-card__actually-price"
            :class="{
              'product-card__price-discount': newprice,
            }"
          >
            {{ newprice ? newprice : price }}</span
          >
        </div>
        <div class="product-card__information">
          <div class="product-card__brand">{{ brand }}</div>
          <div class="product-card__fullname">{{ fullname }}</div>
        </div>
      </div>
    </div>
    <div class="product-card-hover">
      <div v-if="size" class="product-card__size">
        Размер (RUS): {{ size.join(" ") }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image_path: {
      type: String,
    },
    price: {
      type: Number,
    },
    newprice: {
      type: Number,
    },
    brand: {
      type: String,
    },
    fullname: {
      type: String,
    },
    size: {
      type: Array,
    },
  },
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
        transition: 0.3s ease 0.3s;
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
    box-shadow: 0px 7px 8px grey;
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
