import { v4 as uuidv4 } from "uuid";
import client from "../utils";

const state = {
  orderLine: {},
  orderLines: {}
};

const mutations = {
  deleteOrderLine(state, id) {
    let index = state.orderLines.data.findIndex(item => item.id === id);
    state.orderLines.data.splice(index, 1);
  },

  addorderLine(state, payload) {
    state.orderLines.data.push(payload.data);
  },

  resetOrderLine(state) {
    state.orderLine = {
      ...state.orderLine.data,
      id: "",
      code: "",
      name: ""
    };
  },

  selectOrderLine: (state, orderLine) => (state.orderLine = orderLine),
  setOrderLines: (state, orderLines) => (state.orderLines = orderLines)
};

const actions = {
  selectOrderLine({ commit }, payload) {
    commit("selectOrderLine", payload);
  },

  deleteOrderLine({ commit }, id) {
    commit("deleteOrderLine", id);
  },

  addorderLine: async ({ commit }, orderLine) => {
    if (orderLine.id) {
      let data = await client.put(
        "/api/v1/orderLines/" + orderLine.id,
        orderLine
      );
      if (data) orderLine = data.data;
    } else {
      console.log(orderLine);
      let data = await client.post("/api/v1/orderLines/", {
        ...orderLine,
        id: uuidv4()
      });
      console.log(data);
      if (data) commit("addorderLine", data.data);
    }
  },
  getAllOrderLines: async ({ commit }) => {
    let data = await client.get("/api/v1/orderLines/");
    if (data) commit("setOrderLines", data.data);
  },

  resetOrderLine({ commit }) {
    commit("resetOrderLine");
  }
};

const getters = {
  orderLines: state => {
    return state.orderLines;
  },
  orderLine: state => {
    return state.orderLine;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
