<template>
    <div class="bg-white p-3 rounded-3" style="width: 90vw;">
      <div class="d-flex flex-column justify-content-between align-items-center" style=" height: 45vh;">
       <div class="carousel slide h-100 w-100 carousel-dark " ref="myCarousel" id="myCarousel">
          <div class="carousel-inner" ref="inner">
            <div class="carousel-item" v-for="page in items" :key="page.id">
            <div class="container">
              <div class="row row-cols-3 g-3">
                <div class="col" v-for="item in page" :key="item.id">
                <button type="button" class="btn btn-outline-primary border border-3 rounded-2 w-100" style="height:90px" >
                  <span>{{ item.title }}</span>
                </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    <div>
      <button class="btn btn-outline-primary py-1" v-on:click="send">送出</button>
    </div>
  </div>

  </div>

</template>

<style scoped leng="scss">
  form {
    font-size: 20px;
  }
</style>

<script>

import Carousel from 'bootstrap/js/dist/carousel';

export default {
  
  props: ['Products'],
  data() {
    return {
      items: [],
      carousel: {},
    };
  },
  methods: {
    send() {
      console.log('送出');
    },
  },
  watch: {
    Products: function() {
      console.log(this.Products);
        if (this.Products.length > 9) {
          for (let i = 0; i < this.Products.length ; i += 9) {
            this.items.push(this.Products.slice(i,i+9))
          }
        } else {
          this.items = this.Products;
        }
    }
  },
  mounted() {
   this.carousel = new Carousel(this.$refs.myCarousel);
   },
  updated() {
    console.log(this.$refs.inner.childNodes, {
      interval: false,
    })
    this.$refs.inner.childNodes[1].classList.add('active');
  }
}
</script>