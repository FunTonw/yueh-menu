<template>
<div>
  <div class="bg-white rounded-3 p-3 overflow-scroll mb-3" style="width: 90vw; height: 25vh">
    <ul class="p-0">
      <li v-for="item, index in PreProducts" :key="index">
        <Swiper
        :grabCursor="true"
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }"
        :modules="modules">
          <SwiperSlide>
            <div class="d-flex flex-column lh-1" v-on:click="reload(item)">
              <p class="fs-4 mb-2"><span>{{parseInt(index) + 1}}.</span>{{item.title + ((!item.count) ? ' 1 顆' :`${item.count} 顆`)}}</p>
              <div class="topping-list lh-1">
                <!-- 這邊會先有原本的配料，之後再加上點擊的配料 -->
                <span v-for="topping, num in item.toppings" :key="num">
                  + {{topping}}
                </span>
                 <span v-for="topping, num in item.addToppings" :key="num">
                  + {{topping}}
                </span>
              </div>
              <hr class="text-success rounded-1 m-1" style="padding-top: 3px;">
              <p class="total align-self-end fs-2">$ {{item.price}}</p>
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
  <div class="bg-white rounded-3 p-3 d-flex justify-content-end" v-if="this.PreProducts.length > 0 ">
    <h2>Total : {{Total()}}</h2>
  </div>
  <ReloadModal ref="reloadModal" :reloadItem="pushItem" @getReItem="pullReItem"/>
</div>
</template>

<style>
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
  methods: {
    Total() {
      let price = 0;
      this.PreProducts.forEach(ele => {
      price += ele.price;
    });
      return price
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