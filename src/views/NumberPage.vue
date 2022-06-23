<template>
<div class="container p-0">
  <div class="row g-1">
    <div class=" col-12 col-lg-8">
    <div class=" bg-white rounded-bottom p-3 overflow-scroll number-rounded" style="height: 85vh;">
      <div class="d-flex flex-column-reverse">
    <div class="card mb-3" :class="{'border-danger': product.paid}" v-for="product, index in main" :key="index">
      <div class="card-body" @click="paidToggle(product)">
        <h5 class="card-title">
          <span>單號：{{product.number}}</span>
        </h5>
        <h6 class="card-subtitle mb-2">
          <span class="text-danger" v-if="product.paid">已結帳 </span>
          <span class="text-muted" v-else>未結帳 </span>
          <span class="text-muted">{{this.getTimeId(product.id)}}</span>
        </h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item, index in product.products" :key="`${index}_product`">
              <div>
                <p class="m-0 fs-4">{{item.title}} 1 顆</p>
                <p class="m-0">
                  <span v-for="topping, index in item.addToppings" :key="index">
                  {{`+ ${topping} `}}
                  </span>
                </p>
              </div>
              <p class="m-0 float-end">單價：{{item.price}}元</p>
            </li>
          </ul>
        <p class="m-0 fs-3 float-end">總計：{{product.total}}元</p>
      </div>
    </div>
  </div>
    </div>
    </div>
    <div class="col-12 col-lg-4 d-flex flex-column justify-content-end">
    <div class="bg-white rounded mt-1 mt-lg-0 p-3">
      <p class="fs-3 m-0">
        今日營業額：{{Turnover}}元
      </p>
    </div>
    </div>
  </div>
</div>

</template>

<style>
.number-rounded{
  border-top-left-radius: 0.25rem !important;
}
@media screen and (min-width: 992px) {
  .number-rounded {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0rem !important;
  }
}
</style>

<script>
export default {
  data() {
    return {
      main: [],
    };
  },
  computed: {
    Turnover: function() {
      let total = 0;
      this.main.forEach(ele => {
        if (ele.paid) {
          total += ele.total;
        }
      })
      return total;
    }
  },
  methods: {
    paidToggle(product) {
      product.paid = !product.paid;
    },
    getTimeId(id) {
      console.log(id);
      let date = new Date(id);
      return `${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    getNumber() {
      let url = 'https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/numberapi/number';
      fetch(url)
        .then(res => res.json())
        .then(req => {
          this.main = req.data.main;
          console.log(this.main)
        })
        .catch(err => {console.log('err', err)})
    }
  },
  created() {
    this.getNumber();
  }
}
</script>