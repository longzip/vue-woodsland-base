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
  costcenters: {}
};

const mutations = {
  deleteCostcenter(state, id) {
    let index = state.costcenters.data.findIndex(item => item.id === id);
    state.costcenters.data.splice(index, 1);
  },

  selectCostcenter(state, payload) {
    state.costcenter = payload;
  },

  resetCostcenter(state) {
    state.costcenter = { ...costcenter };
  },

  addCostcenter(state, payload) {
    state.costcenters.data.push(payload);
  },

  saveCostcenter: async (state, payload) => {
    let costcenter = await client.put(
      "/api/v1/costcenters/" + payload.id,
      payload
    );
    if (costcenter) payload = costcenter.data;
  },

  setSuccess(state, payload) {
    state.successStatus = payload;
  },

  setCostcenters(state, payload) {
    state.costcenters = payload;
  }
};

const actions = {
  getAllCostcenters: async ({ commit }) => {
    let costcenters = await client.get("/api/v1/costcenters/");
    if (costcenters) commit("setCostcenters", costcenters.data);
  },

  getCostcenterNameById: async ({ state }, id) => {
    console.log(id);
    let foundCostcenter = await state.costcenters.data.find(
      costcenter => costcenter.id === id
    );
    if (foundCostcenter) return foundCostcenter.name;
    return "";
  },

  resetCostcenter({ commit }) {
    commit("resetCostcenter");
  },

  selectCostcenter({ commit }, payload) {
    commit("selectCostcenter", payload);
  },

  deleteCostcenter: async ({ commit }, id) => {
    let data = await client.delete("/api/v1/costcenters/" + id);
    if (data) commit("deleteCostcenter", id);
  },

  addCostcenter: async ({ commit }, costcenter) => {
    if (costcenter.id) {
      let data = await client.put(
        "/api/v1/costcenters/" + costcenter.id,
        costcenter
      );
      if (data) costcenter = data.data;
    } else {
      let data = await client.post("/api/v1/costcenters/", {
        ...costcenter,
        id: uuidv4()
      });
      console.log(data);
      if (data) commit("addcostcenter", data.data);
    }
  },

  saveCostcenter: async ({ commit }, costcenter) => {
    if (costcenter.id) {
      let data = await client.put(
        "/api/v1/costcenters/" + costcenter.id,
        costcenter
      );
      if (data) costcenter = data.data;
    } else {
      let data = await client.post("/api/v1/costcenters/", {
        ...costcenter,
        id: uuidv4()
      });
      console.log(data);
      if (data) commit("addcostcenter", data.data);
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
