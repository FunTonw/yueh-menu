<template>
  <div class="container">
      <ProductsPage @pushpreitem="getPreProducts" />
      <PreItem /> 
      <PreProducts :PreProducts="preProductsAry" />
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
          preProductsAry: [],
        };
    },
    methods: {
      getPreProducts(preitem) {
        this.preProductsAry.push(preitem);
      }
    },
}
</script>