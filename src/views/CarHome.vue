<template>
  <div class="CarHome">
    <div class="container-fluid">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div>
      <div class="row">
        <div class="col-12">
          <cars />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cars from "../componenets/Cars";

export default {
  name: "CarHome",
  components: {
    Cars
  }
};
</script>

<style>
</style>