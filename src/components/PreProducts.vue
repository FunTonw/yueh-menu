<template>
  <div class="bg-white rounded-3 p-3 overflow-scroll" style="width: 90vw; height: 25vh">
    <ul class="p-0">
      <li>
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
            <div class="d-flex flex-column lh-1" ref="box_1" v-on:click="reload()">
              <p class="fs-4 mb-2"><span>1.</span>古早味飯糰</p>
              <div class="topping-list lh-1">
                <!-- 這邊會先有原本的配料，之後再加上點擊的配料 -->
                <span>+ 海苔絲</span>
                <span>+ 鹹蛋黃</span>
                <span>+ 蔥蛋</span>
              </div>
              <hr class="text-success rounded-1 m-1" style="padding-top: 3px;">
              <p class="total align-self-end fs-2">$ 120</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <button class="btn btn-danger w-100" v-on:click="del()"
               :style="'height:' + boxHeight[0] + 'px' ">
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
  data() {
    return {
      PreProducts:[],
      boxHeight: [],
    };
  },
  methods: {
    del() {
      console.log('del');
    },
    reload() {
      console.log('reload');
    },
    setheight(index) {
      for(let i = 0; i < index; i ++){
        this.boxHeight.push(this.$refs[`box_${i+1}`].offsetHeight);
      }
    },
  },
  mounted() {
    this.setheight(1);
  }
}
</script>