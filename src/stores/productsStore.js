import { defineStore } from "pinia";
import { addItemLS, downloadFromLS } from "./localStorage";

function checkDuplicate(productIN, productOUT) {
  return (
    productIN.id === productOUT.id &&
    productIN.color === productOUT.color &&
    productIN?.sizeSelected === productOUT?.sizeSelected
  );
}

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    products: [],
    favorites: [],
    basket: [],
  }),

  getters: {
    getProducts: (state) => {
      return (category, type) => {
        if (category === "" && type === "") {
          return state.products;
        }
        if (type === "") {
          return state.products.filter(
            (product) => product.category === category
          );
        }
        return state.products.filter(
          (product) => product.category === category && product.type === type
        );
      };
    },
    getBasketFullPrice() {
      return this.basket.reduce((total, product) => {
        return (total +=
          product.amount *
          (product?.newprice ? product.newprice : product.price));
      }, 0);
    },
    getBasketDiscount() {
      return this.basket.reduce((total, product) => {
        return (total += product.amount * product.price);
      }, 0);
    },
    getBasketAmountAll() {
      return this.basket.reduce((amountSum, product) => {
        return (amountSum += product.amount);
      }, 0);
    },
  },

  actions: {
    async initProducts() {
      const api = "https://644d2593cfdddac9709e1d84.mockapi.io/123"
      const response = await fetch(api)
      this.products = await response.json()
    },
    addFromLS(storageName) {
      if (storageName === "favorite-products" && downloadFromLS(storageName)) {
        this.favorites = downloadFromLS("favorite-products");
      }
      if (storageName === "basket-products" && downloadFromLS(storageName)) {
        this.basket = downloadFromLS("basket-products");
      }
    },
    switchFavorite(id) {
      this.products.forEach((product) => {
        if (product.id === id) {
          const duplicateCheck = this.favorites.find(
            (productF) => productF.id === id
          );
          if (duplicateCheck) {
            this.favorites.splice(this.favorites.indexOf(duplicateCheck), 1);
            addItemLS("favorite-products", this.favorites);
          } else {
            this.favorites.push(product);
            addItemLS("favorite-products", this.favorites);
          }
        }
      });
    },
    addBasket(productOUT) {
      if (
        this.basket.find((productIN) => checkDuplicate(productIN, productOUT))
      ) {
        this.basket.find((productIN) =>
          checkDuplicate(productIN, productOUT)
        ).amount += 1;
        addItemLS("basket-products", this.basket);
      } else {
        this.basket.push(productOUT);
        addItemLS("basket-products", this.basket);
      }
    },
    removeBasket(productOUT) {
      this.basket = this.basket.filter(
        (productIN) => !checkDuplicate(productIN, productOUT)
      );
      addItemLS("basket-products", this.basket);
    },
    changeAmountProductBasket(productOUT, count) {
      this.basket.find((productIN) =>
        checkDuplicate(productIN, productOUT)
      ).amount = count;
      addItemLS("basket-products", this.basket);
    },
  },
});
