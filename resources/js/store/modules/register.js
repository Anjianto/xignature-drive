const defaultState = {
  registerData: {
    name: undefined,
    email: undefined,
    password: undefined,
    password_confirmation: undefined,
    phone: undefined,
    nik: undefined,
    ktp: undefined,
    birthplace: undefined,
    birthdate: undefined,
    selfie: undefined,
  },
  registerErrors: {},
};
const actions = {
  setRegisterData({ commit }, data) {
    commit("SET_REGISTER_DATA", data);
  },
  setRegisterErrors({ commit }, errors) {
    commit("SET_REGISTER_ERRORS", errors);
  },
};

const mutations = {
  SET_REGISTER_DATA(state, data) {
    state.registerData = {
      ...state.registerData,
      ...data,
    };
  },
  SET_REGISTER_ERRORS(state, errors) {
    state.registerErrors = errors;
  },
};

const getters = {
  registerData: (state) => state.registerData,
  registerErrors: (state) => state.registerErrors,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
