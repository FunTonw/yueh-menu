<template>
  <div class="container">
      <ProductsPage :Products="main" />
      <PreItem /> 
      <PreProducts />
  </div>
</template>

<script>
import ProductsPage from '@/components/ProductsPage.vue';
import PreItem from "@/components/PreItem.vue";
import PreProducts from "@/components/PreProducts.vue";

  export default {
    components: { ProductsPage, PreItem, PreProducts },
    data() {
        return {
            main: [],
            toppings: [],
        };
    },
    methods: {
        getdata() {
            fetch("https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/api/products/")
                .then(res => res.json())
                .then((require) => {
                let data = require.data;
                this.main = data.main;
                this.toppings = data.topping;
            })
                .catch(error => console.log("error", error));
        }
    },
    created() {
        this.getdata();
    }
}
</script>