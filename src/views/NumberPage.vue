<template>
  <div class="container bg-white rounded-bottom">
    <p>123</p>
  </div>
</template>

<script>
export default {
  methods: {
    getNumber() {
      let url = 'https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/numberapi/number';
      fetch(url)
        .then(res => res.json)
        .then(req => {
          console.log(req);
        })
        .catch(err => {console.log('err', err)})
    }
  },
  created() {
    this.getNumber();
  }
}
</script>