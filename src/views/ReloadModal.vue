<template>
  <div class="modal" tabindex="-1" ref="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{reloadItem.title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-2">
              <label for="item-title">
                {{(reItem.type === 'riceball') ? '飯糰類型' : '飲料類型' }}
              </label>
              <h1>{{reItem.title}}</h1>
              <div class="d-flex">
                <button  class="border border-end-0 px-1 text-dark rounded-start" type="button" @click="plusAndMinusCount('plus')">
                  <i class="fa-solid fa-plus"></i>
                </button>
                <p class="border border-1 border-muted px-3 m-0">{{reItem.count}}</p>
                <button  class="border border-start-0 px-1 text-dark rounded-end" :disabled="this.reItem.count <= 1" type="button" @click="plusAndMinusCount('minus')">
                  <i class="fa-solid fa-minus" ></i>
                </button>
              </div>

            </div>
            <div>
            </div>
            <div class="mb-2" v-if="reItem.type === 'riceball'">
              <h2>加料</h2>
            <div class="form-check form-check-inline" v-for="toppings, index in data.topping.riceball" :key="index">
              <input class="form-check-input" type="checkbox" :value="toppings.title" :id="`addToppingCheck${index}`" v-model="reItem.addToppings"
               @change="getPrice(toppings, $event)">
              <label class="form-check-label" :for="`addToppingCheck${index}`">
                {{toppings.title}}
              </label>
            </div>
            </div>
            <div class="mb-2" v-else>
               <h2>加料</h2>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="冰" id="Ice" v-model="reItem.addToppings">
                <label class="form-check-label" for="Ice">
                  冰
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="熱" id="Hot" v-model="reItem.addToppings">
                <label class="form-check-label" for="Hot">
                  熱
                </label>
              </div>
            </div>
            <div class="mb-2">
              <label for="item-price">價格</label>
              <p>{{reItem.price * reItem.count}}</p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal()">關閉</button>
          <button type="button" class="btn btn-primary" @click="pushReItem()">更改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
export default {
  props: {
    reloadItem: {
      default() { return }
    }
  },
  data() {
    return {
      Modal : {},
      data: {
        topping:{},
      },
      reItem: {},
    };
  },
  watch: {
    reloadItem: function() {
      this.reItem = {...this.reloadItem};
    },
  },
  methods: {
    getPrice(val, e) {
      if(e.target.checked === true) {
        this.reItem.price += val.price
      } else if (!e.target.checked) {
        this.reItem.price -= val.price
      }
    },
    plusAndMinusCount(val) {
      if(val === 'plus'){
        this.reItem.count ++
      } else if(val === 'minus'){
        this.reItem.count --
      } else {
        return this.reItem;
      }
      console.log(this.reItem.count);
    },
    pushReItem() {
      this.$emit('getReItem', this.reItem);
      this.reItem = {};
    },
    showModal() {
      this.Modal.show();
    },
    hideModal() {
      this.Modal.hide();
    }
  },
  created() {
    let url = 'https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/api/products/';
    fetch(url)
      .then(res => res.json())
      .then(req => {
        this.data = req.data;
      })
  },
  mounted() {
    this.Modal = new Modal(this.$refs.myModal);
  }
}
</script>