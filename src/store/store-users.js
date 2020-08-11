// import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import client from "../utils";

const state = {
  user: {},
  users: {},
  successStatus: true,
  isLoading: false
};

const mutations = {
  deleteUser(state, id) {
    let index = state.users.data.findIndex(item => item.id === id);
    state.users.data.splice(index, 1);
  },

  addUser(state, payload) {
    delete payload.data.password;
    state.users.data.push(payload.data);
  },

  resetUser(state) {
    state.user = {
      ...state.user.data,
      id: "",
      userId: "",
      name: "TEST",
      username: "TEST",
      email: "",
      password: "",
      role: "USER",
      costcenterId: "",
      avatar: "/disk/img/avatar.png"
    };
  },

  selectUser: (state, user) => (state.user = user),
  setUsers: (state, users) => (state.users = users),

  setSuccessStatus(state, payload) {
    state.successStatus = payload;
  }
};

const actions = {
  selectUser({ commit }, payload) {
    commit("selectUser", payload);
  },

  deleteUser: async ({ commit }, id) => {
    let data = await client.delete("/api/v1/users/" + id);
    if (data) commit("deleteUser", id);
  },

  addUser: async ({ commit }, user) => {
    if (user.id) {
      let data = await client.put("/api/v1/users/" + user.id, user);
      if (data) user = data.data;
    } else {
      console.log(user);
      let data = await client.post("/api/v1/users/", { ...user, id: uuidv4() });
      console.log(data);
      if (data) commit("addUser", data.data);
    }
  },
  getAll: async ({ commit }) => {
    let data = await client.get("/api/v1/users/");
    if (data) commit("setUsers", data.data);
  },

  resetUser({ commit }) {
    commit("resetUser");
  }
};

const getters = {
  users: state => {
    return state.users;
  },
  user: state => {
    return state.user;
  },
  isLoading: state => {
    return state.isLoading;
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
