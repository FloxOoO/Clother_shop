<template>
  <div v-if="$route.name === 'Корзина'" class="inbasket">
    <div class="inbasket__information">
      <div class="inbasket-color">
        {{ product?.color ? "Выбранный цвет: " + product.color : "Без опций" }}
      </div>
      <div v-if="product?.sizeSelected" class="inbasket__size">
        Выбранный размер: {{ product.sizeSelected }}
      </div>
    </div>
    <div class="inbasket__amount">Количество - {{ product.amount }} шт.</div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.inbasket {
  &__information {
    height: 57px;
    margin-top: 8px;
    font-weight: 700;
    background-color: rgba(128, 128, 128, 0.4);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
  }
  &__color {
    margin-bottom: 5px;
  }
  &__amount {
    font-size: 14px;
    color: green;
    font-weight: 700;
  }
}
</style>
