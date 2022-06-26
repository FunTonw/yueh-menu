<template>
<div>
  <div class="bg-white rounded-3 p-3 overflow-scroll mb-3 pre-products-table">
    <ul class="p-0">
      <li v-for="item, index in PreProducts" :key="index">
        <Swiper
        :grabCursor="true"
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -900],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -900],
            rotate: [0, -100, 0],
          },
        }"
        :modules="modules">
          <SwiperSlide>
            <div class="d-flex flex-column lh-1" v-on:click="reload(item)">
              <p class="fs-5 mb-2"><span>{{parseInt(index) + 1}}.</span>{{item.title + ' ' + item.count + ' 份'}}</p>
              <div class="topping-list lh-1 fs-6">
                 <span v-for="topping, num in item.addToppings" :key="num">
                  + {{topping}}
                </span>
              </div>
              <hr class="text-success rounded-1 m-1" style="padding-top: 3px;">
              <p class="total align-self-end fs-4">$ {{item.price * item.count}}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <button style="height:92px" class="btn btn-danger w-100 mb-1" v-on:click="del(item)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
          </SwiperSlide>
        </Swiper>
      </li>
    </ul>
  </div>
  <div class="bg-white rounded-3 p-3 py-1 py-lg-3 d-flex justify-content-between" v-if="this.PreProducts.length > 0 ">
    <button class="btn btn-danger" @click="postPreProducts()">確認訂單</button>
    <h2 class="m-0 fs-4" style="line-height: unset;">總額 : {{countPrice}} 元</h2>
  </div>
  <ReloadModal ref="reloadModal" :reloadItem="pushItem" @getReItem="pullReItem"/>
</div>
</template>

<style>
  .pre-products-table {
    height:23vh;
  }
  @media screen and (min-width: 992px){
    .pre-products-table {
      height: 60vh;
    }
  }
</style>

<script>
  import ReloadModal from '../views/ReloadModal.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import "swiper/css/effect-creative";
  import { EffectCreative } from "swiper";

export default {
      setup() {
      return {
        modules: [EffectCreative],
      };
      },
  components :{
    ReloadModal,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      pushItem: {},
      PreProducts: [],
    };
  },
  computed: {
    countPrice: function() {
      let price = 0;
      this.PreProducts.forEach(ele => {
        price += ele.price * ele.count;
      });
      return price
    }
  },
  methods: {
    postPreProducts() {
      let url ="https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/numberapi/number/main";
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({products: [...this.PreProducts], total: this.countPrice});
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result =>{
          console.log(result)
          this.PreProducts = [];
        })
        .catch(error => console.log('error', error));
    },
    getPreProducts() {
    this.$emitter.on('pushpreitem', val => {
      this.PreProducts.push(val);
    })
    },
    pullReItem(val) {
      this.PreProducts.forEach((ele, index) => {
        //如果可以 break; 最好
        if(ele.productId === val.productId) {
          this.PreProducts.splice(index, 1, val);
        }
      })
      this.$refs.reloadModal.hideModal();
    },
    del(val) {
      let index = this.PreProducts.findIndex((ele) => {
        //如果可以 break; 最好
        ele.productId === val.productId
      })
      this.PreProducts.splice(index-1, 1);
    },
    reload(item) {
      this.pushItem = item;
      this.$refs.reloadModal.showModal();
    },
  },
  created() {
    this.getPreProducts();
  }
}
</script>