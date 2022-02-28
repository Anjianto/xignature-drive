import { ACT_GENOTP, ACT_SIGN_DOC } from "@/constants/action";
import {
  MUT_SIGNED,
  MUT_SIGN_LOADING,
  MUT_SIGN_ERROR,
  MUT_SIGN_OTP_SENT,
} from "@/constants/mutation";
import { genOTP, signDoc } from "@/http_client/signature_client";

const defaultState = {
  loading: false,
  error: false,
  otpSent: false,
  expired: false,
};

const actions = {
  async [ACT_GENOTP]({ commit, getters }, payload) {
    const { data, error } = genOTP(getters.api);
    if (error) {
      return { error };
    }

    commit(MUT_SIGNED, { signed: false });
  },
  async [ACT_SIGN_DOC]({ commit, getters }, { fileId }) {
    const { data, error } = await signDoc(getters.api, fileId);

    if (error) {
      return { error };
    } else {
      commit(MUT_SIGNED, { signed: true });
    }
    return { data };
  },
};

const mutations = {
  [MUT_SIGNED]: (state, { signed }) => {
    state.signed = signed;
  },
  [MUT_SIGN_LOADING]: (state, { loading }) => {
    state.loading = loading;
  },
  [MUT_SIGN_ERROR]: (state, { error }) => {
    state.error = error;
  },
  [MUT_SIGN_OTP_SENT]: (state, { otpSent }) => {
    state.otpSent = otpSent;
  },
};

export default {
  state: defaultState,
  actions,
  mutations,
};
