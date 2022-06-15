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
              <select class="form-select" id="item-title" v-model="reItem.title">
                <option selected :value="reItem.title">{{reItem.title}}</option>
                <template v-for="product in main">
                <option :key = "product.id" v-if="product.type === reItem.type && product.title !== reItem.title" :value="product.title" >{{product.title}}</option>
                </template>
              </select>
            </div>
            <div>
              
            </div>
            <div class="mb-2">
              <label for="item-price">價格</label>
              <p>{{reItem.price}}</p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
      main: {},
      reItem: {},
    };
  },
  watch: {
    reloadItem: function() {
      this.reItem = {...this.reloadItem};
    },
  },
  methods: {
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
        let data = req.data;
        this.main = data.main;
        console.log(this.main);
      })
  },
  mounted() {
    this.Modal = new Modal(this.$refs.myModal);
  }
}
</script>