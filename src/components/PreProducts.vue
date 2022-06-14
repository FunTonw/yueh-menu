<template>
  <div class="bg-white rounded-3 p-3 overflow-scroll" style="width: 90vw; height: 25vh">
    <ul class="p-0">
      <li v-for="item, index in PreProducts" :key="index">
        <Swiper
        :autoHeight="true"
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
            <div class="d-flex flex-column lh-1" v-on:click="reload()">
              <p class="fs-4 mb-2"><span>{{index + 1}}.</span>{{item.title}}</p>
              <div class="topping-list lh-1">
                <!-- 這邊會先有原本的配料，之後再加上點擊的配料 -->
                <span v-for="topping, num in item.toppings" :key="num">
                  + {{topping}}
                </span>
              </div>
              <hr class="text-success rounded-1 m-1" style="padding-top: 3px;">
              <p class="total align-self-end fs-2">$ {{item.price}}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <button style="height:92px" class="btn btn-danger w-100 mb-1" v-on:click="del()">
                <i class="fa-solid fa-trash-can"></i>
              </button>
          </SwiperSlide>
        </Swiper>
      </li>
    </ul>
  </div>

</template>

<style>
</style>

<script>
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
    Swiper,
    SwiperSlide,
  },
  props: ['PreProducts'],
  methods: {
    del() {
      console.log('del');
    },
    reload() {
      console.log('reload');
    },
  },
}
</script>