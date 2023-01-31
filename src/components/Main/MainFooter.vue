<template>
  <div class="footer">
    <icon-mdi :icon="icons.mdiCopyright" />
    Clother Shop 2023
  </div>
</template>
<script>
import { mdiCopyright } from "@mdi/js";
import IconMdi from "../Icons/IconMdi.vue";
export default {
  name: "Footer",

  components: {
    IconMdi,
  },

  computed: {
    icons() {
      return {
        mdiCopyright
      } 
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  height: 50px;
  background: #000;
  color: white;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
}
</style>
