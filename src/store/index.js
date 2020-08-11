import Vue from "vue";
import Vuex from "vuex";

import muahangs from "./store-muahangs";
import users from "./store-users";
import units from "./store-units";
import companies from "./store-companies";
import costcenters from "./store-costcenters";
import approves from "./store-approves";
import orders from "./store-orders";
import orderLines from "./store-orderLines";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    units,
    companies,
    costcenters,
    orders,
    orderLines,
    approves,
    muahangs
  }
});
