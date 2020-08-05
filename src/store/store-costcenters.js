import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
const state = {
  costcenter: {
    id: uuidv4(),
    code: "TH.XX",
    name: "Phòng XX",
    companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
  },
  costcenters: [
    {
      id: uuidv4(),
      code: "TH.IT",
      name: "Phòng CNTT",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    },
    {
      id: uuidv4(),
      code: "TH.NS",
      name: "Phòng Nhân Sự",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    },
    {
      id: uuidv4(),
      code: "TH.HC",
      name: "Phòng Hành Chính",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    },
    {
      id: uuidv4(),
      code: "TH.KT",
      name: "Phòng Kế Toán",
      companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696"
    }
  ]
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
  costcenters: state => {
    return state.costcenters;
  },
  costcenter: state => {
    return state.costcenter;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
