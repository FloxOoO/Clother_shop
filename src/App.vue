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
  }
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
  }
  &__right-column {
  }
}
</style>
