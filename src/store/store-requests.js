import { v4 as uuidv4 } from "uuid";
import client from "../utils";

const state = {
  request: {},
  requests: {}
};

const mutations = {
  deleteRequest(state, id) {
    let index = state.requests.data.findIndex(item => item.id === id);
    state.requests.data.splice(index, 1);
  },

  addRequest(state, payload) {
    state.requests.data.push(payload.data);
  },

  resetRequest(state, payload) {
    state.request = {
      ...state.request.data,
      id: "",
      userId: "",
      costcenterId: "",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
      title: "Phê duyệt: đang tải...",
      completed: false,
      ...payload
    };
  },

  selectRequest: (state, request) => (state.request = request),
  setRequests: (state, requests) => (state.requests = requests)
};

const actions = {
  selectRequest({ commit }, payload) {
    commit("selectRequest", payload);
  },

  deleteRequest({ commit }, id) {
    commit("deleteRequest", id);
  },

  addRequest: async ({ commit }, request) => {
    if (request.id) {
      let data = await client.put("/api/v1/requests/" + request.id, request);
      if (data) request = data.data;
    } else {
      console.log(request);
      let data = await client.post("/api/v1/requests/", {
        ...request,
        id: uuidv4()
      });
      console.log(data);
      if (data) commit("addRequest", data.data);
    }
  },
  getAllrequests: async ({ commit }) => {
    let data = await client.get("/api/v1/requests/");
    if (data) commit("setRequests", data.data);
  },

  resetRequest({ commit }, payload) {
    commit("resetRequest", payload);
  }
};

const getters = {
  requests: state => {
    return state.requests;
  },
  request: state => {
    return state.request;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
