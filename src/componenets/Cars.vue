<template>
  <div class="cars row">
    <car v-for="(carObj, index) in cars" :key="carObj._id" :carData="carObj" :carIndex="index" />
  </div>
</template>






<script>
import Car from "./Car";

export default {
  name: "Cars",

  mounted() {
    this.$store.dispatch("getCars");
  },

  components: {
    Car
  },

  computed: {
    cars() {
      let data = this.$store.state.cars;
      return data;
    }
  }
};
</script>







<style>
</style>