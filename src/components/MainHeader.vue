<template>
  <div class="header">
    <div class="header__rows">
      <div class="city text">г. Уфа</div>
      <div class="information">
        <div
          v-for="inf in information"
          :key="inf.text"
          @mouseover="hoverPopup(inf)"
          @mouseleave="selectedInformation = null"
          class="text"
        >
          <icon-mdi :icon="inf.icon" />
          {{ inf.text }}
        </div>
        <main-header-popup
          v-if="selectedInformation"
          :class="`${
            selectedInformation?.text === information[0].text
              ? 'popup-position__1'
              : selectedInformation?.text === information[1].text
              ? 'popup-position__2'
              : 'popup-position__3'
          }`"
        >
          {{ selectedInformation?.popupText }}
        </main-header-popup>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiTruckDelivery, mdiWallet, mdiClock } from "@mdi/js";
import IconMdi from "./IconMdi.vue";
import MainHeaderPopup from "./MainHeaderPopup.vue";
export default {
  name: "Header",

  components: {
    IconMdi,
    MainHeaderPopup,
  },

  data() {
    return {
      selectedInformation: null,
    };
  },

  methods: {
    hoverPopup(information) {
      this.selectedInformation = information;
    },
  },

  computed: {
    information() {
      return [
        {
          icon: mdiTruckDelivery,
          text: "Бесконтактная доставка с примеркой",
          popupText: "Воспользуйтесь бесконтактной доставкой.",
        },
        {
          icon: mdiWallet,
          text: "Платите когда хотите",
          popupText:
            "Два варианта оплаты заказа: онлайн оплата на сайте и в приложении при оформлении заказа и оплата при получении.",
        },
        {
          icon: mdiClock,
          text: "Как мы работаем сейчас",
          popupText:
            "Условия доставки и оплаты заказа не изменились - мы заботимся о том, чтобы вы могли как прежде совершать покупки.",
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.text {
  color: white;
}
.header {
  background-color: black;
  &__rows {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    margin: 0px auto;
  }
}
.information {
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-between;
  width: 60%;
  .text {
    display: flex;
    align-items: center;
    height: inherit;
    padding: 0px 20px 0px 20px;
    transition: 0.3s;
    svg {
      margin-right: 10px;
    }
    &:hover {
      background-color: blue;
      transition: 0.3s;
    }
  }
}
.popup-position {
  top: 40px;
  &__1 {
    top: 40px;
    left: 819px;
  }
  &__2 {
    top: 40px;
    left: 1061px;
  }
  &__3 {
    top: 40px;
    left: 1324px;
  }
}
</style>
