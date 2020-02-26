<template>
  <div class="col-3">
    <div class="card">
      <img :src="carData.imgUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{carData.make}} - {{carData.model}}</h5>
        <p class="card-text">stuff about car</p>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "Car",
  props: ["carData", "carIndex"]
};
</script>




<style>
</style>