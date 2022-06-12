<template>
  <div class="container">
      <ProductsPage />
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
        };
    },
}
</script>