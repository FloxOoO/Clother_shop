<template>
  <div class="favorite">
    <icon-mdi
      @click.stop="editFavorite"
      :icon="favorite ? icons.mdiCardsHeart : icons.mdiCardsHeartOutline"
      :class="{
        'favorite-active': favorite
      }"
    />
  </div>
</template>
<script>
import { mdiCardsHeartOutline, mdiCardsHeart } from "@mdi/js";
import { useProductsStore } from "../../stores/productsStore.js";
import IconMdi from "../Icons/IconMdi.vue";
export default {
  components: {
    IconMdi
  },

  props: {
    productID: {
      type: Number,
      required: false
    }
  },

  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },

  data() {
    return {
      favorite: false,
    }
  },

  created() {
    this.productsStore.favorites.forEach((favorite) => {
      if (favorite.id === this.productID) {
        this.favorite = true;
      }
    })
  },
  
  methods: {
    editFavorite() {
      this.favorite ? this.favorite = false : this.favorite = true
      this.productsStore.switchFavorite(this.productID)
    }
  },

  computed: {
    icons() {
      return {
        mdiCardsHeartOutline, 
        mdiCardsHeart
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.favorite {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: end;
  color: grey;
  transition: color 0.3s;
  margin: 8px 8px 0px 0px;
  svg:hover {
    cursor: pointer;
    transition: color 0.3s;
    color: red;
  }
  &-active {
    visibility: visible;
    color: red;
    transition: color 0.3s;
    animation: heart 0.3s;
  }
  @keyframes heart {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
