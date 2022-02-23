// fileFunctions.js

const defaultState = {
  steps: 1,
  registerData: {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    nik: "",
    selfie: "",
    ktp: "",
    birthday: "",
    birthplace: "",
  },
  registerErrors: {},
};

const actions = {
  set_steps({ commit }, steps) {
    commit("SET_STEPS", steps);
  },
  set_register_data({ commit }, registerData) {
    console.log(registerData);
    commit("SET_REGISTER_DATA", registerData);
  },
  set_register_error({ commit }, registerErrors) {
    commit("SET_REGISTER_ERROR", registerErrors);
  },
};

const mutations = {
  SET_STEPS(state, step) {
    state.steps = step;
  },
  SET_REGISTER_DATA(state, registerData) {
    state.registerData = {
      ...state.registerData,
      ...registerData,
    };
  },
  SET_REGISTER_ERROR(state, registerErrors) {
    state.registerErrors = {
      ...state.registerErrors,
      ...registerErrors,
    };
  },
};

const getters = {
  steps: (state) => state.steps,
  registerData: (state) => state.registerData,
  registerErrors: (state) => state.registerErrors,
};

export default {
  state: defaultState,
  mutations,
  actions,
  getters,
};
