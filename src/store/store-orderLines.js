import { v4 as uuidv4 } from "uuid";
import client from "../utils";
import moment from "moment";

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
      ...state.orderLine,
      id: "",
      userId: "ae3ce99b-f31b-458a-9d8f-2eea180b8cf1",
      orderId: "7796648b-04fd-499e-b3c9-fbcde224240b",
      costcenterId: "e378f3b1-9e35-4090-bc0a-92297d41a9e3",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
      unitId: "1339e151-f315-4a37-926c-7eb6d18741b5",
      code: "TEST",
      name: "TEST",
      title: "Kỹ Thuật",
      startedAt: moment()
        .format()
        .slice(0, 10),
      finishedAt: moment()
        .format()
        .slice(0, 10),
      quantity: 0,
      note: "Lý do yêu cầu",
      status: "Mới"
    };
  },

  selectOrderLine: (state, orderLine) => (state.orderLine = orderLine),
  setOrderLines: (state, orderLines) => (state.orderLines = orderLines)
};

const actions = {
  selectOrderLine({ commit }, payload) {
    commit("selectOrderLine", payload);
  },

  deleteOrderLine: async ({ commit }, id) => {
    let data = await client.delete("/api/v1/order-lines/" + id);
    if (data) commit("deleteOrderLine", id);
  },

  addorderLine: async ({ commit }, orderLine) => {
    if (orderLine.id) {
      let data = await client.put(
        "/api/v1/order-Lines/" + orderLine.id,
        orderLine
      );
      if (data) orderLine = data.data;
    } else {
      console.log(orderLine);
      let data = await client.post("/api/v1/order-Lines/", {
        ...orderLine,
        id: uuidv4()
      });
      console.log(data);
      if (data) commit("addorderLine", data.data);
    }
  },
  getAllOrderLines: async ({ commit }) => {
    let data = await client.get("/api/v1/order-Lines/");
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
