<template>
  <div>
    <div class="container p-0 mt-2 bg-white rounded-top d-flex" style="width: 90vw;">
      <ul class="nav nav-tabs w-100 row g-0" role="tablist">
        <li class="nav-item col-6" role="presentation">
          <router-link to="/" custom v-slot="{ navigate }">
            <button @click="navigate" class="nav-link active w-100" data-bs-toggle="tab" type="button" >
              菜單
            </button>
          </router-link>
        </li>
        <li class="nav-item col-6" role="presentation">
          <router-link to="/numberpage" custom v-slot="{ navigate }">
            <button @click="navigate" class="nav-link w-100" data-bs-toggle="tab" type="button" >
              今日菜單
            </button>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
  export default {
  }
</script>
