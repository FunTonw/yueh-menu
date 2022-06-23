<template>
  <div class="bg-white rounded-3 ">
    <div class="
    bg-white p-2 m-3
    m-lg-0 mb-lg-1  rounded-bottom">
      <div class="d-flex flex-column lh-1">
        <p class="fs-4 mb-2">{{item.title}}</p>
        <div class="topping-list lh-1">
          <!-- 這邊會先有原本的配料，之後再加上點擊的配料 -->
          <span v-for="item, index in item.toppings" :key="index">+ {{item}}</span>
          <span v-for="item, index in item.addToppings" :key="index">+ {{item}}</span>
        </div>
        <hr class="text-success rounded-1 m-1" style="padding-top: 3px;">
        <p class="total align-self-end fs-5">$ {{item.price}}</p>
      </div>
    </div>
  </div>

</template>

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