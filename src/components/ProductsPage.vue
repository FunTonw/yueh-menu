<template>
    <div class="bg-white p-3 rounded-3" style="width: 90vw;">
      <div class="d-flex flex-column justify-content-between align-items-center" style=" height: 45vh;">
       <div class="carousel slide h-100 w-100 carousel-dark " ref="myCarousel" id="myCarousel">
          <div class="carousel-inner" ref="inner">
            <div class="carousel-item" v-for="page in items" :key="page.id">
            <div class="container">
              <div class="row row-cols-3 g-3">
                <div class="col" v-for="item in page" :key="item.id">
                <button type="button" class="btn btn-outline-primary border border-3 rounded-2 w-100" style="height:90px" v-on:click="selectorItem(item, item.type)">
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
      <button class="btn btn-outline-danger py-1" v-on:click="send">清除</button>
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
      products: [],
      toppings: [],
      preitem: {},
    };
  },
  methods: {
    getdata() {
        fetch("https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/api/products/")
            .then(res => res.json())
            .then((require) => {
            let data = require.data;
            this.products = data.main;
            this.toppings = data.topping;
            this.uploadbtn(this.products);
        })
            .catch(error => console.log("error", error));
    },
    selectorItem(item, type) {
      if (type) {
        this.preitem = JSON.parse(JSON.stringify(item));
        this.uploadbtn(this.toppings, type);
      } else {
        if (this.preitem.toppings.isArray){
          this.preitem.toppings.push(item.title);
          this.preitem.price += item.price;
        } else {
          this.preitem.toppings = item.title;
        }
      }
      this.$emitter.emit('getItem', this.preitem);
    },
    uploadbtn(items, type) {
      this.items = [];
      let val = (type) ? items[type] : items;
      // 若btn超過9個, 就以9個為單位 拆分頁數
        if (val.length > 9) {
          for (let i = 0; i < val.length ; i += 9) {
            this.items.push(val.slice(i,i+9))
          }
        } else {
          this.items.push(val);
        }
    },
    send() {
      this.$emit('pushpreitem', this.preitem);
      this.preitem = {},
      this.uploadbtn(this.products);
      this.$emitter.emit('getItem', this.preitem);
    },
  },
  created() {
    this.getdata();
  },
  mounted() {
    //啟動輪播
   this.carousel = new Carousel(this.$refs.myCarousel);
   },
  updated() {
    // 每次更新畫面 都會active第一頁
    this.$refs.inner.childNodes.forEach(element => {
      if (element.classList){
        element.classList.remove('active');
      }
    });
    this.$refs.inner.childNodes[1].classList.add('active');
  }
}
</script>
