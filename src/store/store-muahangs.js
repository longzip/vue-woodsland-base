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
    .slice(0, 10),
  userId: ""
};

const state = {
  matHang,
  muahang,
  muahangs: [
    {
      id: "72f21213-340d-40dc-88a6-2b678b926679",
      soPhieu: "MH00001",
      noiDung:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      trangThai: "Hoàn thành",
      MuaHangCTs: [
        {
          id: "e003217b-d2bd-45ee-b228-8953d16e2b44",
          tenMatHang: "Sed ut perspiciatis unde omnis iste",
          xuatXu: "Rackham",
          donViTinh: "C",
          soLuong: 1,
          thoiGianCungCap: "2020-08-09",
          yeuCauKyThuat: "we denounce with righteous",
          lyDoYeuCau:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
          muaHangId: "72f21213-340d-40dc-88a6-2b678b926679"
        }
      ],
      ngayDeXuat: "2020-08-09",
      userId: "45d05012-bc5d-4ac6-9ce5-65ba6747cdf6"
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
