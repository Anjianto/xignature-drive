import i18n from "@/i18n/index";
import { countries } from "@/constants/countries";
import { currencies } from "@/constants/currency";
import { roles } from "@/constants/role";
import { timezones } from "@/constants/timezone";
import { expirationList } from "@/constants/expiration";
import axios from "axios";

const defaultState = {
  fileInfoPanelVisible:
    localStorage.getItem("file_info_visibility") == "true" || true,
  FilePreviewType: localStorage.getItem("preview_type") || "list",
  config: undefined,
  index: undefined,
  authorized: undefined,
  homeDirectory: undefined,
  requestedPlan: undefined,
  emojis: undefined,
  sorting: {
    sort: localStorage.getItem("sorting")
      ? JSON.parse(localStorage.getItem("sorting")).sort
      : "DESC",
    field: localStorage.getItem("sorting")
      ? JSON.parse(localStorage.getItem("sorting")).field
      : "created_at",
  },
  roles: roles,
  countries: countries,
  expirationList: expirationList,
  currencyList: currencies,
  timezones: timezones,
};
const actions = {
  getEmojisList: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/emojis-list")
        .then((response) => {
          commit("LOAD_EMOJIS_LIST", response.data[0]);
        })
        // eslint-disable-next-line no-undef
        .catch(() => Vue.prototype.$isSomethingWrong())
        .finally(() => {
          resolve(true);
        });
    });
  },
  changePreviewType: ({ commit, state }, preview) => {
    // Get preview type
    let previewType = preview;

    // Store preview type to localStorage
    localStorage.setItem("preview_type", previewType);

    // Change preview
    commit("CHANGE_PREVIEW", previewType);
  },
  fileInfoToggle: (context, visibility = undefined) => {
    if (!visibility) {
      if (context.state.fileInfoPanelVisible) {
        context.commit("FILE_INFO_TOGGLE", false);
      } else {
        context.commit("FILE_INFO_TOGGLE", true);
      }
    } else {
      context.commit("FILE_INFO_TOGGLE", visibility);
    }
  },
  getLanguageTranslations: ({ commit, state }, lang) => {
    return new Promise((resolve, reject) => {
      axios.get(`/translations/${lang}`).then((response) => {
        i18n.setLocaleMessage(lang, response.data);
        i18n.locale = lang;

        resolve(response);
      });
    });
  },
};
const mutations = {
  LOAD_EMOJIS_LIST(state, data) {
    state.emojis = data;
  },
  UPDATE_SORTING(state) {
    state.sorting.field = JSON.parse(localStorage.getItem("sorting")).field;
    state.sorting.sort = JSON.parse(localStorage.getItem("sorting")).sort;
  },
  INIT(state, data) {
    state.config = data.config;
    state.authorized = data.authCookie;
    state.homeDirectory = data.rootDirectory;
  },
  SET_SAAS(state, data) {
    state.config.isSaaS = data;
  },
  SET_STRIPE_PUBLIC_KEY(state, data) {
    state.config.stripe_public_key = data;
  },
  FILE_INFO_TOGGLE(state, isVisible) {
    state.fileInfoPanelVisible = isVisible;

    localStorage.setItem("file_info_visibility", isVisible);
  },
  SET_AUTHORIZED(state, data) {
    state.authorized = data;
  },
  SET_INDEX_CONTENT(state, data) {
    state.index = data;
  },
  CHANGE_PREVIEW(state, type) {
    state.FilePreviewType = type;
  },
  STORE_REQUESTED_PLAN(state, plan) {
    state.requestedPlan = plan;
  },
};
const getters = {
  fileInfoVisible: (state) => state.fileInfoPanelVisible,
  FilePreviewType: (state) => state.FilePreviewType,
  expirationList: (state) => state.expirationList,
  homeDirectory: (state) => state.homeDirectory,
  requestedPlan: (state) => state.requestedPlan,
  currencyList: (state) => state.currencyList,
  countries: (state) => state.countries,
  timezones: (state) => state.timezones,
  api: (state) => state.config.api,
  config: (state) => state.config,
  emojis: (state) => state.emojis,
  index: (state) => state.index,
  roles: (state) => state.roles,
  sorting: (state) => {
    return {
      sorting: state.sorting,
      URI: "?sort=" + state.sorting.field + "&direction=" + state.sorting.sort,
    };
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
