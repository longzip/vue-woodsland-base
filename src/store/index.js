import Vue from "vue";
import Vuex from "vuex";

import tasks from "./store-tasks";
import muahangs from "./store-muahangs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    muahangs
  }
});
