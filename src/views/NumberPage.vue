<template>
  <div class="container bg-white rounded-bottom p-3 overflow-scroll" style="width: 90vw; height: 90vh;">
  <div class="d-flex flex-column-reverse">
    <div class="card mb-3" v-for="product, index in main" :key="index">
      <div class="card-body">
        <h5 class="card-title">
          <span>單號：{{product.number}}</span>
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">已結帳 {{this.getTimeId(product.id)}}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item, index in product.products" :key="`${index}_product`">
              <div>
                <p class="m-0 fs-3">{{item.title}} 1 顆</p>
                <p class="m-0">{{`+ ${item.toppings}`}}</p>
              </div>
              <p class="m-0 fs-3 float-end">{{item.price}}</p>
            </li>
          </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main: [],
    };
  },
  methods: {
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
                    console.log(req.data);
        })
        .catch(err => {console.log('err', err)})
    }
  },
  created() {
    this.getNumber();
  }
}
</script>