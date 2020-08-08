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
  users: {
    data: [
      {
        id: "45d05012-bc5d-4ac6-9ce5-65ba6747cdf6",
        name: "Heroku",
        username: "09T600",
        password: "",
        roles: [],
        costcenter: "063e6fd2-add3-464d-bf09-627289f7de68",
        parentId: "ae3ce99b-f31b-458a-9d8f-2eea180b8cf1",
        email: "heroku@localhost.com",
        createdAt: "2020-08-05T17:03:29.000000Z",
        updatedAt: "2020-08-05T17:03:29.000000Z"
      },
      {
        id: "ae3ce99b-f31b-458a-9d8f-2eea180b8cf1",
        name: "TEST",
        username: "09T601",
        password: "",
        roles: [],
        costcenter: "063e6fd2-add3-464d-bf09-627289f7de68",
        parentId: "45d05012-bc5d-4ac6-9ce5-65ba6747cdf6",
        email: "test@gvcmelinh.com",
        createdAt: "2020-08-05T17:13:11.000000Z",
        updatedAt: "2020-08-05T17:13:11.000000Z"
      }
    ]
  },
  successStatus: true,
  isLoading: false
};

const mutations = {
  updateUser(state, payload) {
    console.log("Update User");
    console.log(payload);
  },

  deleteUser(state, id) {
    console.log("delete User");
    console.log(id);
  },

  addUser(state, payload) {
    state.users.data.push({ ...payload, id: uuidv4() });
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

  selectUser: (state, user) => (state.user = user),

  setSuccessStatus(state, payload) {
    state.successStatus = payload;
  }
};

const actions = {
  updateUser({ commit }, payload) {
    commit("updateUser", payload);
  },

  selectUser({ commit }, payload) {
    commit("selectUser", payload);
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
    return state.users.data;
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
