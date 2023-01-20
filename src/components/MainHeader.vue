<template>
  <div class="header">
    <main-header-popup-city ref="popupCity" @select-city="switchCity" />
    <div class="header__rows">
      <div class="city" @click="openPopupCity">
        <div class="text">
          {{ city }}
          <icon-mdi :icon="icons.mdiMenuDown" />
        </div>
      </div>
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
import {
  mdiTruckDelivery,
  mdiWallet,
  mdiClock,
  mdiMenuDown
} from "@mdi/js";
import IconMdi from "./IconMdi.vue";
import MainHeaderPopup from "./MainHeaderPopup.vue";
import MainHeaderPopupCity from "./MainHeaderPopupCity.vue";
export default {
  name: "Header",

  components: {
    IconMdi,
    MainHeaderPopup,
    MainHeaderPopupCity,
  },

  data() {
    return {
      selectedInformation: null,
      city: "Выберите город",
    };
  },

  methods: {
    hoverPopup(information) {
      this.selectedInformation = information;
    },
    async openPopupCity() {
      await this.$refs.popupCity.open();
    },
    switchCity(city) {
      if (city && typeof city === "string") {
        this.city = city;
      }
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
    icons() {
      return {
        mdiMenuDown,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin box ($mr, $ml, $bgc) {
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-between;
  .text {
    color: white;
    display: flex;
    align-items: center;
    height: inherit;
    padding: 0px 20px 0px 20px;
    transition: 0.3s;
    svg {
      margin-right: $mr;
      margin-left: $ml;
    }
    &:hover {
      background-color: $bgc;
      transition: 0.3s;
    }
  }
}
.header {
  background-color: black;
  &__rows {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0px auto;
  }
}
.city {
  @include box(0px, 3px, grey);
  svg {
    margin-top: 2.5px;
  }
  cursor: pointer;
}
.information {
  max-width: 60%;
  @include box(8px, 0px, blue);
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
