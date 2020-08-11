import { v4 as uuidv4 } from "uuid";
import client from "../utils";

const state = {
  order: {},
  orders: {}
};

const mutations = {
  deleteOrder(state, id) {
    let index = state.orders.data.findIndex(item => item.id === id);
    state.orders.data.splice(index, 1);
  },

  addorder(state, payload) {
    state.orders.data.push(payload.data);
  },

  resetOrder(state) {
    state.order = {
      ...state.order.data,
      id: "",
      code: "",
      name: ""
    };
  },

  selectOrder: (state, order) => (state.order = order),
  setOrders: (state, orders) => (state.orders = orders)
};

const actions = {
  selectOrder({ commit }, payload) {
    commit("selectOrder", payload);
  },

  deleteOrder({ commit }, id) {
    commit("deleteOrder", id);
  },

  addorder: async ({ commit }, order) => {
    if (order.id) {
      let data = await client.put("/api/v1/orders/" + order.id, order);
      if (data) order = data.data;
    } else {
      console.log(order);
      let data = await client.post("/api/v1/orders/", {
        ...order,
        id: uuidv4()
      });
      console.log(data);
      if (data) commit("addorder", data.data);
    }
  },
  getAllOrders: async ({ commit }) => {
    let data = await client.get("/api/v1/orders/");
    if (data) commit("setOrders", data.data);
  },

  resetOrder({ commit }) {
    commit("resetOrder");
  }
};

const getters = {
  orders: state => {
    return state.orders;
  },
  order: state => {
    return state.order;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
