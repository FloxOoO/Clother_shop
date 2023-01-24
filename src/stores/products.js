import { defineStore } from "pinia";
import allProducts from "./allProducts";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  actions: {
    initStore() {
      useProductsStore().$reset();
      allProducts.forEach((product) => {
        this.products.push(product);
      });
    },
    getProducts(category, type) {
      useProductsStore().$reset();
      allProducts.map((product) => {
        if (product.category === category && type === '') {
          this.products.push(product);
        }
        if (product.category === category && product.type === type) {
          this.products.push(product);
        }
      });
    },
  },
});
