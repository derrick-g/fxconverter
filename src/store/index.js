import Vue from "vue";
import Vuex from "vuex";

import forexRates from "./modules/forexRates";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    forexRates,
  }
});
