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

  addOrder(state, payload) {
    state.orders.data.push(payload.data);
    state.order = payload.data;
  },

  resetOrder(state) {
    state.order = {
      ...state.order,
      id: "",
      userId: "ae3ce99b-f31b-458a-9d8f-2eea180b8cf1",
      costcenterId: "e378f3b1-9e35-4090-bc0a-92297d41a9e3",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
      code: "202011/8TH",
      name: "Đề xuất mua thiết bị",
      note: "Mô tả đề xuất nếu có",
      status: "Mới"
    };
  },

  selectOrder: (state, order) => (state.order = order),
  setOrders: (state, orders) => (state.orders = orders)
};

const actions = {
  selectOrder({ commit }, payload) {
    commit("selectOrder", payload);
  },

  deleteOrder: async ({ commit }, id) => {
    let data = await client.delete("/api/v1/orders/" + id);
    if (data) commit("deleteOrder", id);
  },

  addOrder: async ({ commit }, order) => {
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
      if (data) commit("addOrder", data.data);
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
