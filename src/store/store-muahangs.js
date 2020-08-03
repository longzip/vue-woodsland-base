import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

let tempId = uuidv4();
let matHang = {
  id: uuidv4(),
  tenMatHang: "Sed ut perspiciatis unde omnis iste",
  xuatXu: "Rackham",
  donViTinh: "C",
  soLuong: 1,
  thoiGianCungCap: moment()
    .subtract(-2, "days")
    .format()
    .slice(0, 10),
  yeuCauKyThuat: "we denounce with righteous",
  lyDoYeuCau:
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
  muaHangId: tempId
};
let muahang = {
  id: tempId,
  soPhieu: "MH00001",
  noiDung:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  trangThai: "Hoàn thành",
  MuaHangCTs: [],
  ngayDeXuat: moment()
    .subtract(-2, "days")
    .format()
    .slice(0, 10)
}

const state = {
  matHang,
  muahang,
  muahangs: [muahang]
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },

  themMatHang(state, payload) {
    state.muahang.MuaHangCTs.push(payload);
  },

  xoaMatHang(state, payload) {
    let index = state.muahang.MuaHangCTs.findIndex(ite => ite.id === payload);
    state.muahang.MuaHangCTs.splice(index, 1);
  },

  taoMatHang(state) {
    state.matHang = {
      ...matHang,
      tenMatHang: undefined,
      xuatXu: undefined,
      donViTinh: undefined,
      soLuong: undefined,
      thoiGianCungCap: moment()
        .subtract(-2, "days")
        .format()
        .slice(0, 10),
      lyDoYeuCau: undefined,
      yeuCauKyThuat: undefined
    };
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

  themMatHang({ commit }, payload) {
    if (payload && payload.tenMatHang) {
      commit("themMatHang", { ...payload, id: uuidv4() });
      commit("taoMatHang");
    }
  },

  xoaMatHang({ commit }, payload) {
    if (payload) commit("xoaMatHang", payload);
  },

  taoMatHang({ commit }) {
    commit("taoMatHang");
  }
};

const getters = {
  muahangs: state => {
    return state.muahangs;
  },
  muahang: state => {
    return state.muahang;
  },
  matHang: state => {
    return state.matHang;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
