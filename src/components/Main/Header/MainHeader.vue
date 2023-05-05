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
      <div class="boxes">
        <div
          v-for="(box, boxID) in boxes"
          :key="box.text"
          :class="`text text-open-popup-${boxID + 1}`"
        >
          <icon-mdi :icon="box.icon" />
          {{ box.text }}
          <main-header-popup
            :class="`popup-position popup-position-${boxID + 1}`"
          >
            {{ box.popupText }}
          </main-header-popup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiTruckDelivery, mdiWallet, mdiClock, mdiMenuDown } from "@mdi/js";
import IconMdi from "../../Icons/IconMdi.vue";
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
      city: "Выберите город",
    };
  },

  methods: {
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
    boxes() {
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
@mixin box($m, $bgc) {
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-between;
  .text {
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    height: inherit;
    padding: 0px 20px 0px 20px;
    transition: 0.3s;
    svg {
      margin: $m;
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
    max-width: 1200px;
    margin: 0px auto;
  }
}
.city {
  @include box(2.5px 0px 0px 3px, grey);
  cursor: pointer;
  @media (max-width: 976px) {
    text-align: center;
    font-size: 14px;
    border-right: 1px solid white;
    border-left: 1px solid white;
    border-radius: 15px;
    svg {
      display: none;
    }
  }
}
.boxes {
  @include box(0px 8px 0px 0px, blue);
  .text {
    &-open-popup-1 {
      &:hover {
        .popup-position-1 {
          display: inline;
        }
      }
    }
    &-open-popup-2 {
      &:hover {
        .popup-position-2 {
          display: inline;
        }
      }
    }
    &-open-popup-3 {
      &:hover {
        .popup-position-3 {
          display: inline;
          @media (max-width: 976px) {
            margin-left: -100px;
          }
        }
      }
    }
  }
  @media (max-width: 976px) {
    display: none;
  }
}
.popup-position {
  top: 40px;
  display: none;
  @media (max-width: 976px) {
    top: 80px;
  }
}
</style>
