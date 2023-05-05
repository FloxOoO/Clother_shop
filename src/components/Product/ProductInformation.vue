<template>
  <div class="gallery-product">
    <div
      v-for="count in [...Array(4).keys()]"
      :key="count"
      class="gallery-product__container"
    >
      <img :src="product.image_path" alt="" />
    </div>
  </div>
  <div class="product-sampler">{{ product.sampler }}</div>
  <div class="product-description">
    <div class="product-description__title">О товаре</div>
    <div class="product-description__window">
      <div class="product-description__window-left">
        <p v-for="(item, id) in productDescription" :key="id" class="item-list">
          <span class="item-list__title">
            <span class="item-list__title-main">{{ item.title }}</span>
            <span class="item-list__title-decor">{{ decoration }}</span>
          </span>
          <span class="item-list__data">{{ item.productDescription }}</span>
        </p>
      </div>
      <div class="product-description__window-right">
        <img :src="product.image_path" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    productDescription() {
      return [
        {
          title: "Размер товара на модели",
          productDescription: this.product.sampler.split(" ")[3],
        },
        {
          title: "Параметры модели",
          productDescription: this.product.sampler
            .match(/\d{1,}/g)
            .splice(1)
            .join("-"),
        },
        {
          title: "Рост модели на фото",
          productDescription: this.product.sampler.match(/\d{1,}/g)[0],
        },
        {
          title: "Цвет на модели",
          productDescription: this.product?.colors
            ? this.product.colors[0]
            : "-",
        },
        {
          title: "Артикул товара №",
          productDescription: this.product.id,
        },
      ];
    },
    decoration() {
      return ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
    },
  },
};
</script>
<style lang="scss" scoped>
.gallery-product {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 420px));
  margin-right: 20px;
  margin-bottom: 10px;
  gap: 40px;
  &__container {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 624px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.product-sampler {
  text-align: center;
  margin-bottom: 20px;
}
.product-description {
  margin-right: 20px;
  margin-bottom: 50px;
  &__title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__window {
    display: flex;
  }

  &__window-left {
    flex: 1 1 auto;
  }
  &__window-right {
    width: 282px;
    height: 0;
    position: relative;
    padding-bottom: 400px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
}
.item-list {
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-size: 20px;
  &__title {
    display: inline-flex;
    overflow: hidden;
  }

  &__title-main {
    display: flex;
    color: grey;
    flex: 1 0 auto;
  }

  &__title-decor {
    margin-left: 8px;
    color: grey;
    white-space: nowrap;
  }

  &__data {
    margin-left: 6px;
    white-space: nowrap;
  }
}
</style>
