import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

let user = {
  id: "",
  name: "",
  username: "",
  email: "",
  password: "",
  roles: [],
  costcenters: []
};

const state = {
  user,
  users: {
    user
  }
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },

  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  }
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },

  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },

  addTask({ commit }, task) {
    let taskId = uuidv4();

    let payload = {
      id: taskId,

      task: task
    };

    commit("addTask", payload);
  }
};

const getters = {
  users: state => {
    return state.users;
  },
  user: state => {
    return state.user;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
