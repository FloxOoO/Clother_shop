<template>
  <div class="btn-back-container">
    <div to="/" class="btn-back" @click="$router.push('/')">
      <icon-mdi :icon="icons.mdiReplyAllOutline" class="btn-back__icon" />
      <a>На главную</a>
    </div>
  </div>
  <catalog-favorites />
</template>
<script>
import CatalogFavorites from "../components/CatalogFavorites.vue";
import { mdiReplyAllOutline } from "@mdi/js";
import IconMdi from "../components/IconMdi.vue";
export default {
  components: {
    CatalogFavorites,
    IconMdi,
  },

  computed: {
    icons() {
      return {
        mdiReplyAllOutline,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-back {
  display: flex;
  align-items: center;
  cursor: pointer;
  &-container {
    width: 110px;
    margin-bottom: 20px;
  }
  a {
    transition: 0.3s;
  }
  a:hover {
    transition: 0.3s;
    color: grey;
  }
  &__icon {
    margin-right: 5px;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: grey;
    }
  }
}
</style>
