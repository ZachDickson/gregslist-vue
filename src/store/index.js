import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "../router"

let _apiCars = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/cars",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {}
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars;
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _apiCars.get("")
        commit("setCars", res.data.data);
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
