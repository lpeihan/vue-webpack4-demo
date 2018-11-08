const SET_ABOUT_NAME = 'SET_ABOUT_NAME';

const state = {
  name: 'this is about page'
};

const getters = {
  name: state => state.name
};

const mutations = {
  [SET_ABOUT_NAME](state, name) {
    state.name = name;
  }
};

const actions = {
  changeName({ commit }, name) {
    commit(SET_ABOUT_NAME, name);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
