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
              <!-- <select class="form-select" id="item-title" v-model="reItem">
                <option selected :value="reItem">{{reItem.title}}</option>
                <template v-for="product in data.main">
                <option :key = "product.id" v-if="product.type === reItem.type && product.title !== reItem.title" :value="product" >{{product.title}}</option>
                </template>
              </select> -->
            </div>
            <div>
            </div>
            <div class="mb-2">
              <h2>原料</h2>
              <div class="form-check form-check-inline" v-for="topping, index in reloadItem.toppings" :key="index">
                <input class="form-check-input" type="checkbox" :value="topping" :id="`toppingCheck${index}`" v-model="reItem.toppings">
                <label :for="`toppingCheck${index}`">{{topping}}</label>
              </div>
            </div>
            <div class="mb-2">
              <h2>加料</h2>
            <div class="form-check form-check-inline" v-for="toppings, index in data.topping.riceball" :key="index">
              <input class="form-check-input" type="checkbox" :value="toppings.title" :id="`addToppingCheck${index}`" v-model="reItem.addToppings"
               @change="getPrice(toppings, $event)">
              <label class="form-check-label" :for="`addToppingCheck${index}`">
                {{toppings.title}}
              </label>
            </div>
            </div>
            <div class="mb-2">
              <label for="item-price">價格</label>
              <p>{{reItem.price}}</p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal()">關閉</button>
          <button type="button" class="btn btn-primary" @click="pushReItem()">Save changes</button>
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
    pushReItem() {
      console.log(this.reItem);
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