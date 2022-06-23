<template>
    <div class="container mt-2">
      <div class="row g-0">
        <div class="col-12 col-lg-1">
    <div class=" p-0 mt-2 mt-lg-0 container h-100">
      <ul class="nav nav-tabs w-100 row g-0 h-100 border-0" role="tablist">
        <li class="nav-item col-6 col-lg-12" role="presentation">
          <router-link to="/" custom v-slot="{ navigate }">
            <button @click="navigate"
            class="nav-link active link-secondary w-100 h-100 border-0 nav-radius"
            data-bs-toggle="tab" type="button">
              <span class="text-write">菜單</span>
            </button>
          </router-link>
        </li>
        <li class="nav-item col-6 col-lg-12" role="presentation">
          <router-link to="/numberpage" custom v-slot="{ navigate }">
            <button @click="navigate"
            class="nav-link link-secondary w-100 h-100 border-0 nav-radius"
            data-bs-toggle="tab" type="button">
              <span class="text-write">今日菜單</span>
            </button>
          </router-link>
        </li>
      </ul>
    </div>
        </div>
    <div class="col-12 col-lg-11">
    <router-view />
    </div>
      </div>


    </div>
      

    
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (min-width: 992px) {
  .text-write{
    writing-mode: vertical-lr
  }
  .nav-radius{
    border-top-right-radius: 0rem !important;
    border-bottom-right-radius: 0rem !important;
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }
}

</style>

<script>
  export default {
  }
</script>
