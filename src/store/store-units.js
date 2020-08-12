import { v4 as uuidv4 } from "uuid";
import client from "../utils";

const state = {
  unit: {},
  units: {}
};

const mutations = {
  deleteUnit(state, id) {
    let index = state.units.data.findIndex(item => item.id === id);
    state.units.data.splice(index, 1);
  },

  addUnit(state, payload) {
    state.units.data.push(payload.data);
  },

  resetUnit(state) {
    state.unit = {
      ...state.unit.data,
      id: "",
      code: "",
      name: ""
    };
  },

  selectUnit: (state, unit) => (state.unit = unit),
  setUnits: (state, units) => (state.units = units)
};

const actions = {
  selectUnit({ commit }, payload) {
    commit("selectUnit", payload);
  },

  deleteUnit({ commit }, id) {
    commit("deleteUnit", id);
  },

  addUnit: async ({ commit }, unit) => {
    if (unit.id) {
      let data = await client.put("/api/v1/units/" + unit.id, unit);
      if (data) unit = data.data;
    } else {
      console.log(unit);
      let data = await client.post("/api/v1/units/", { ...unit, id: uuidv4() });
      console.log(data);
      if (data) commit("addUnit", data.data);
    }
  },
  getAllUnits: async ({ commit }) => {
    let data = await client.get("/api/v1/units/");
    if (data) commit("setUnits", data.data);
  },

  resetUnit({ commit }) {
    commit("resetUnit");
  }
};

const getters = {
  units: state => {
    return state.units;
  },
  unit: state => {
    return state.unit;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
