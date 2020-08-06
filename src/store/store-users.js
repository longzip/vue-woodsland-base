import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

let user = {
  id: "",
  name: "",
  username: "",
  email: "",
  password: "",
  roles: [],
  costcenter: ""
};

const state = {
  user,
  users: [],
  successStatus: true
};

const mutations = {
  updateUser(state, payload) {
    console.log("Update User");
    console.log(payload);
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },

  addUser(state, payload) {
    state.users.push({ ...payload, id: uuidv4() });
  },

  resetUser(state) {
    state.user = {
      ...user,
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      roles: [],
      costcenter: ""
    };
  },

  setSuccessStatus(state, payload) {
    state.successStatus = payload;
  }
};

const actions = {
  updateUser({ commit }, payload) {
    commit("updateUser", payload);
  },

  deleteUser({ commit }, id) {
    commit("deleteUser", id);
  },

  addUser({ commit }, user) {
    console.log("Lưu user");
    console.log(user);
    commit("addUser", user);
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
