<template>
  <div class="bg-white rounded-3">
    <div class="
    bg-white p-2 m-3
    m-lg-0 mb-lg-1  rounded-bottom preitem-rounded">
      <div class="d-flex flex-column lh-1">
        <p class="fs-4 mb-2">{{item.title}}</p>
        <div class="topping-list lh-1">
          <span v-for="item, index in item.addToppings" :key="index">+ {{item}}</span>
        </div>
        <hr class="text-success rounded-1 m-1" style="padding-top: 3px;">
        <p class="total align-self-end fs-5">$ {{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 992px) {
  .preitem-rounded {
    border-top-right-radius: 0.25rem !important;
    border-top-left-radius: 0.25rem !important;
  }
}
</style>

<script>

export default {
  data() {
    return {
      item: {},
      toppings: [],
      price: 0,
    };
  },
  created() {
    this.$emitter.on('getItem', (val) => {
      this.item = {... val};
      // this.toppings = val.toppings;
      // this.price = val.price;
    });
  }
}
</script>