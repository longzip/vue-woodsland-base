import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

let tempId = uuidv4();
let muahangct = {
  id: uuidv4(),
  tenMatHang: "Sed ut perspiciatis unde omnis iste",
  xuatXu: "Rackham",
  donViTinh: "C",
  soLuong: 1,
  thoiGianCungCap: moment()
    .subtract(-2, "days")
    .format()
    .slice(0, 10),
  lyDoYeuCau:
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
  muaHangId: tempId
};

const state = {
  muahangct,
  muahang: {
    id: tempId,
    soPhieu: "MH00001",
    noiDung:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    trangThai: "Hoàn thành",
    MuaHangCTs: [muahangct]
  },
  muahangs: []
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
  updateMuaHang({ commit }, payload) {
    commit("updateTask", payload);
  },

  deleteMuaHang({ commit }, id) {
    commit("deleteTask", id);
  },

  addMuaHang({ commit }, payload) {
    commit("addTask", payload);
  },

  addMuaHangCT({ commit }, payload) {
    commit("addTask", payload);
  }
};

const getters = {
  muahangs: state => {
    return state.muahangs;
  },
  muahang: state => {
    return state.muahang;
  },
  muahangct: state => {
    return state.muahangct;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
