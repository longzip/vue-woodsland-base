import Vue from "vue";
import Vuex from "vuex";

import muahangs from "./store-muahangs";
import users from "./store-users";
import companies from "./store-companies";
import costcenters from "./store-costcenters";
import approves from "./store-approves";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    companies,
    costcenters,
    approves,
    muahangs
  }
});
