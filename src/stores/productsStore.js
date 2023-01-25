import { defineStore } from "pinia";
import allProducts from "./allProducts";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    products: [],
    favorites: [],
  }),

  getters: {
    getProducts: (state) => {
      return (category, type) => {
        if (category === '' && type === '') {
          return state.products
        }
        if (type === '') {
          return state.products.filter((product) => product.category === category);
        }
        return state.products.filter(
          (product) => product.category === category && product.type === type
        );
      }
    }
  },

  actions: {
    initStore() {
      allProducts.forEach((product) => {
        this.products.push(product);
      });
    },
    addFavorite(id) {
      this.products.forEach((product) => {
        if (product.id === id) {
          if (!product.favorite) {
            this.favorites.push(product)
            return product.favorite = true
          }
          else {
            this.favorites.splice(this.favorites.indexOf(product), 1)
            return product.favorite = false
          }
        }
      })
    }
  },
});
