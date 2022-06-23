<template>
  <div class="bg-white rounded-bottom page-rounded">
    <div class="page-table p-3">
      <div class="carousel slide h-100 w-100 carousel-dark " ref="myCarousel" id="myCarousel">
        <div class="carousel-inner" ref="inner">
          <div class="carousel-item" v-for="page in items" :key="page.id">
          <div class="container">
            <div class="row row-cols-3 g-3">
              <div class="col" v-for="item in page" :key="item.id">
                <button type="button" class="btn btn-outline-primary border border-3 rounded-2 w-100" style="height:90px" v-on:click="selectorItem(item, item.type)">
                  <span class="text-dark">{{ item.title }}</span>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center py-3" v-if="Object.keys(this.preitem).length != 0">
      <button class="btn btn-outline-primary py-1" v-on:click="send">送出</button>
      <button class="btn btn-outline-danger py-1" v-on:click="clear()">清除</button>
    </div>
    <div class="d-flex justify-content-center align-items-center py-3" v-else>
      <button class="btn btn-outline-muted py-1 mr-2" v-on:click="send" disabled>送出</button>
      <button class="btn btn-outline-muted py-1" v-on:click="clear()" disabled>清除</button>
    </div>
  </div>

</template>

<style scoped leng="scss">
  form {
    font-size: 20px;
  }
  .page-table{
    height: 45vh;
  }
  .page-rounded{
    border-top-right-radius: 0.25rem !important
  }
  @media screen and (min-width: 992px){
    .page-table{
      min-height: 85vh;
      border-top-right-radius: 0.25rem 
    }
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
        //判斷如果 點擊toppings按鈕時，是選擇drink的topping(冰熱),就改為字串
        if (this.preitem.toppings instanceof Array){
          this.preitem.addToppings.push(item.title);
          this.preitem.price += item.price;
          console.log(this.preitem.addToppings)
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
      this.preitem.productId = new Date().getTime();
      this.$emitter.emit('pushpreitem', this.preitem);
      this.clear();
    },
    clear() {
      this.preitem = {};
      this.$emitter.emit('getItem', this.preitem);
      this.uploadbtn(this.products);
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
