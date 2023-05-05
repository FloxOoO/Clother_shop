<template>
  <div class="basket">
    <icon-mdi @click.stop="removeBasket" :icon="icons.mdiCloseThick" />
  </div>
</template>
<script>
import { mdiCloseThick } from "@mdi/js";
import { useProductsStore } from "../../stores/productsStore.js";
import IconMdi from "../Icons/IconMdi.vue";
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

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  methods: {
    removeBasket() {
      this.productsStore.removeBasket(this.product);
    },
  },

  computed: {
    icons() {
      return {
        mdiCloseThick,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.basket {
  position: relative;
  z-index: 3;
  width: 24px;
  left: 100%;
  transform: translateX(calc(-100% - 8px));
  color: grey;
  transition: color 0.3s;
  margin: 8px 8px 0px 0px;
  svg:hover {
    cursor: pointer;
    transition: color 0.3s;
    color: black;
  }
}
</style>
