// import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

let approve = {
  id: "",
  name: "",
  status: "",
  completed: true,
  companyId: "c4ced5f1-06bb-49ed-bbf0-cfd3732bb696",
  userId: "ae3ce99b-f31b-458a-9d8f-2eea180b8cf1",
  approveableId: "",
  approveableType: "purchase",
  createdAt: "",
  updatedAt: ""
};

const state = {
  approve: { ...approve },
  approves: [
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    },
    {
      ...approve,
      id: uuidv4(),
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 100), "minutes")
        .format()
    }
  ]
};

const mutations = {
  updateApprove(state, payload) {
    state.approve = payload;
  }
};

const actions = {
  notApproved({ commit }, payload) {
    console.log("notApproved");
    payload.status = "Hủy"
    commit("updateApprove", payload);
  },
  approved({ commit }, payload) {
    console.log("approved");
    payload.status = "Phê duyệt"
    commit("updateApprove", payload);
  }
};

const getters = {
  approve: state => {
    return state.approve;
  },
  approves: state => {
    return state.approves;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
