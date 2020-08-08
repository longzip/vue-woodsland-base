import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import client from "../utils";

let costcenter = {
  id: "",
  code: "",
  name: "",
  companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
  userId: "ae3ce99b-f31b-458a-9d8f-2eea180b8cf1"
};

const state = {
  costcenter,
  loading: false,
  successStatus: true,
  costcenters: []
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

  saveCostcenter: async (state, payload) => {
    let costcenter = await client.put("/api/v1/costcenters/", payload);
    if (costcenter) payload = costcenter.data;
  },

  setSuccess(state, payload) {
    console.log("Set success");
    console.log(payload);
    state.successStatus = payload;
  },

  setCostcenters(state, payload) {
    console.log("set costcenters");
    console.log(payload);
    state.costcenters = payload;
  }
};

const actions = {
  getAll: async ({ commit }) => {
    let costcenters = await client.get("/api/v1/costcenters/");
    if (costcenters) commit("setCostcenters", costcenters.data);
  },

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
    return state.costcenters.data;
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
