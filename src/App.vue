<template>
  <div class="page">
    <div class="page__container">
      <main-header />
      <div class="content">
        <div class="content__title">Товары</div>
        <div class="catalog">
          <div class="catalog__left-column">
            <main-menu />
          </div>
          <div class="catalog__right-column">
            <div class="catalog-products">
              <!-- <div class="product-card">
                <img src="./img/RTLACH110901_18849912_2_v1.webp" alt="" class="product-card__img">
                <div class="product-card__description">
                  <div class="product-card__price">
                    <span class="product-card__old-price">5 700</span>
                    <span class="product-card__new-price">2 499</span>
                  </div>
                  <div class="product-card__information">
                    <div class="product-card__brand">Mango</div>
                    <div class="product-card__type">Джинсы</div>
                  </div>
                  <div class="product-card__size">Размер (RUS): 46/48 48/50 50/52 52/54 54/56</div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-footer />
  </div>
</template>
<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import MainMenu from "./components/MainMenu.vue";
export default {
  name: "Shop",

  components: {
    MainHeader,
    MainFooter,
    MainMenu,
  },
};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  &__container {
    flex: 1 1 auto;
  }
}
.content {
  max-width: 1400px;
  margin: 0px auto;
  &__title {
    margin: 25px 0 25px 0;
    font-weight: 700;
    font-size: 55px;
  }
}
.catalog {
  display: flex;
  &__left-column {
    padding-right: 30px;
    flex: 0 1 auto;
  }
  &__right-column {
    flex: 1 1 auto;
  }
}
.catalog-products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0px -25px;
}
.product-card {
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 406px;
  padding: 0px 25px;
  margin-bottom: 30px;
  &:hover {
    position: relative;
    top: -25px;
    padding: 25px;
    box-shadow: 0px 0px 5px 1px grey;
    .product-card__size {
      display: block;
    }
  }
  &__image {
    width: inherit - 50px;
    height: 340px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  &__old-price {
    text-decoration: line-through;
    font-size: 14px;
  }

  &__new-price {
    font-size: 18px;
    font-weight: 700;
    color: rgb(255, 103, 1);
    &:before {
      content: " ";
    }
    &:after {
      content: " ₽";
    }
  }

  &__information {
    margin-top: 8px;
  }

  &__size {
    margin-top: 8px;
    color: grey;
    display: none;
  }
}
</style>
