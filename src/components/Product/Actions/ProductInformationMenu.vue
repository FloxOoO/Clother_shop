<template>
  <div class="information">
    <div class="information__title">{{ product.brand }}</div>
    <div class="information__subtitle">{{ product.fullname }}</div>
    <div class="information__price">
      <span v-if="product?.newprice" class="information__price-old">
        {{ product.price }}
      </span>
      <span
        class="information__price-actually"
        :class="{
          'information__price-discount': product?.newprice,
        }"
      >
        {{ product?.newprice ? product.newprice : product.price }}
      </span>
    </div>
    <product-information-menu-select 
      :photo="product.image_path"
      :items="product.colors"
      :productID="product.id"
      @selected-item="userSelectedColor"
    />
    <product-information-menu-select 
      :items="product?.size"
      :productID="product.id"
      @selected-item="userSelectedSize"
    />
    <product-information-menu-actions 
      :selected="selected"
      :product="product"
    />
  </div>
</template>
<script>
import ProductInformationMenuActions from "../../Product/Actions/ProductInformationMenuActions.vue";
import ProductInformationMenuSelect from "../../Product/Actions/ProductInformationMenuSelect.vue"
export default {
  components: {
    ProductInformationMenuSelect,
    ProductInformationMenuActions,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selected: {
        color: null,
        size: null,
      },
    }
  },

  methods: {
    userSelectedColor(color) {
      if (color) {
        this.selected.color = color;
      }
    },
    userSelectedSize(size) {
      if (size) {
        this.selected.size = size;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.information {
  &__title {
    font-size: 26px;
    letter-spacing: 5px;
    margin-bottom: 5px;
  }

  &__subtitle {
    color: grey;
    margin-bottom: 15px;
  }

  &__price {
    margin-bottom: 50px;
  }

  &__price-old {
    display: inline-block;
    text-decoration: line-through;
    font-size: 16px;
  }

  &__price-actually {
    font-size: 22px;
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

  &__sizes {
    height: 50px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 8px 16px 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    &-title {
      color: grey;
    }
  }
}
</style>
