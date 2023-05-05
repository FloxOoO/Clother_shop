<template>
  <div class="btn-back-container">
    <div to="/" class="btn-back" @click="$router.push('/1')">
      <icon-mdi :icon="icons.mdiReplyAllOutline" class="btn-back__icon" />
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mdiReplyAllOutline } from "@mdi/js";
import IconMdi from "../Icons/IconMdi.vue";
export default {
  components: {
    IconMdi,
  },

  computed: {
    icons() {
      return {
        mdiReplyAllOutline,
      };
    },
  },
}
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