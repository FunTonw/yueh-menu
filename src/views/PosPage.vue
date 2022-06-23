<template>
  <div class="container p-0">
    <div class="row">
      <div class="col-12 col-lg-8">
        <ProductsPage @pushpreitem="getPreProducts" />
      </div>
      <div class="col-12 col-lg-4">
        <PreItem /> 
        <PreProducts />
      </div>
    </div>
  </div>
</template>

<style>
  
</style>

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