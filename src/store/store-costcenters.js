import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

let costcenter = {
  id: "",
  code: "",
  name: "",
  companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
};

const state = {
  costcenter,
  loading: false,
  successStatus: true,
  costcenters: [
    {
      id: uuidv4(),
      code: "TH.IT",
      name: "Phòng CNTT",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    },
    {
      id: uuidv4(),
      code: "TH.NS",
      name: "Phòng Nhân Sự",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    },
    {
      id: uuidv4(),
      code: "TH.HC",
      name: "Phòng Hành Chính",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    },
    {
      id: uuidv4(),
      code: "TH.KT",
      name: "Phòng Kế Toán",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    }
  ]
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },

  deleteCostcenter(state, id) {
    let index = state.costcenters.findIndex(item => item.id === id);
    state.costcenters.splice(index, 1);
  },

  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },

  selectCostcenter(state, payload) {
    state.costcenter = payload;
  },

  resetCostcenter(state) {
    state.costcenter = { ...costcenter };
  },

  addCostcenter(state, payload) {
    state.costcenters.push(payload);
    console.log("Thêm thành công");
    console.log(payload);
  },

  saveCostcenter(state, payload) {
    console.log("Đã lưu thành công");
    console.log(payload);
  },

  setSuccess(state, payload) {
    console.log("Set success");
    console.log(payload);
    state.successStatus = payload;
  }
};

const actions = {
  resetCostcenter({ commit }) {
    commit("resetCostcenter");
  },

  selectCostcenter({ commit }, payload) {
    commit("selectCostcenter", payload);
  },

  deleteCostcenter({ commit }, id) {
    commit("deleteCostcenter", id);
  },

  addCostcenter({ commit }, costcenter) {
    if (costcenter && costcenter.code && costcenter.name) {
      if (costcenter.id) commit("saveCostcenter", costcenter);
      else {
        costcenter.id = uuidv4();
        commit("addCostcenter", costcenter);
      }
      commit("setSuccess", true);
    } else commit("setSuccess", false);
  },

  saveCostcenter({ commit }, costcenter) {
    if (costcenter && costcenter.code && costcenter.name) {
      commit("saveCostcenter", costcenter);
      commit("setSuccess", true);
    } else {
      commit("setSuccess", false);
    }
  }
};

const getters = {
  costcenters: state => {
    return state.costcenters;
  },
  costcenter: state => {
    return state.costcenter;
  },
  successStatus: state => {
    return state.successStatus;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
