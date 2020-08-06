// import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

const state = {
  companies: [
    {
      id: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
      code: "TH",
      name: "Thuận Hưng",
      address:
        "Nhà máy Thuận Hưng, lô số 49K, KCN Quang Minh, Huyện Mê Linh, Thành phố Hà Nội"
    }
  ]
};

const mutations = {
  addCompany(state, payload) {
    state.companies.push(payload);
  }
};

const actions = {
  addCompany({ commit }, task) {
    commit("addCompany", { ...task, id: uuidv4() });
  }
};

const getters = {
  companies: state => {
    return state.companies;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
