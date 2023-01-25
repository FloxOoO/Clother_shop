<template>
  <div class="page">
    <page-preloader />
    <div class="page__container">
      <main-header />
      <sub-header />
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
    <main-footer />
  </div>
</template>
<script>
import PagePreloader from "./components/PagePreloader.vue"
import MainHeader from "./components/MainHeader.vue";
import SubHeader from "./components/SubHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import MainPage from "./pages/MainPage.vue"
export default {
  name: "Shop",

  components: {
    PagePreloader,
    MainHeader,
    SubHeader,
    MainFooter,
    MainPage
  }
};
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  &__container {
    flex: 1 1 auto;
  }
}
</style>
