import axios from "axios";
import router from "@/router";
import Vue from "vue";
import Cookies from "js-cookie";
import { fetchAuth, logout, register } from "@/http_client/auth_client";
import { ACT_REGISTER, ACT_GETAPPDATA } from "@/constants/action";
import { SIGN_DOC_ID, SIGN_DOC_KEY } from "@/constants/variables";
import isEmpty from "lodash/isEmpty";

const defaultState = {
  authorized: undefined,
  permission: "master", // master | editor | visitor
  user: undefined,
  isAdmin: false,
};
const actions = {
  async [ACT_GETAPPDATA]({ commit, getters }) {
    const { data, error } = await fetchAuth(getters.sorting);

    if (error) {
      return { error, authorized: false };
    }

    // Redirect user if is logged
    if (router.currentRoute.name === "SignIn") router.push({ name: "Files" });
    if (router.currentRoute.name === "SignUp") router.push({ name: "Files" });
    commit("RETRIEVE_USER", data);
    return { data, error: false };
  },
  async [ACT_REGISTER]({ commit, getters, router }, { formData }) {
    const signKey = formData.get(SIGN_DOC_KEY);
    const signDoc = formData.get(SIGN_DOC_ID);
    const isRefSign = !isEmpty(signKey) && !isEmpty(signDoc);
    const { data, error } = await register(getters.api, formData);
    if (error) {
      return { error, authorized: false, data: undefined };
    }
    commit("RETRIEVE_USER", data);
    commit("SET_AUTHORIZED", true);
    setTimeout(() => {
      window.router.replace({
        name: "SignIn",
        query: { ref: isRefSign ? "invitation" : "register" },
      });
    }, 1000);
    return { data, error: false };
  },
  async logOut({ commit, getters }) {
    let popup = setTimeout(() => {
      commit("PROCESSING_POPUP", {
        title: "Logging Out",
        message: "Wait a second...",
      });
    }, 300);
    const { error } = await logout(getters.api);
    if (error) {
      clearTimeout(popup);
      commit("PROCESSING_POPUP", {
        title: "Logging Out",
        message: "Failed to log out",
      });
      return;
    } else {
      commit("PROCESSING_POPUP", {
        title: "Logging Success",
        message: "You are logged out",
      });
    }
    clearTimeout(popup);
    commit("DESTROY_DATA");

    router.push({ name: "SignIn" });
  },
  addToFavourites: (context, folder) => {
    let addFavourites = [];
    let items = [folder];

    // If dont coming single folder get folders to add to favourites from fileInfoDetail
    if (!folder) items = context.getters.fileInfoDetail;

    items.forEach((data) => {
      if (data.type === "folder") {
        if (
          context.getters.user.relationships.favourites.data.attributes.folders.find(
            (folder) => folder.unique_id === data.unique_id
          )
        )
          return;

        addFavourites.push({
          unique_id: data.unique_id,
        });
      }
    });

    // If dont coming single folder clear the selected folders in fileInfoDetail
    if (!folder) {
      context.commit("CLEAR_FILEINFO_DETAIL");
    }

    let pushToFavorites = [];

    // Check is favorites already don't include some of pushed folders
    items.map((data) => {
      if (
        !context.getters.user.relationships.favourites.data.attributes.folders.find(
          (folder) => folder.unique_id === data.unique_id
        )
      ) {
        pushToFavorites.push(data);
      }
    });

    // Add to storage
    context.commit("ADD_TO_FAVOURITES", pushToFavorites);

    axios
      .post(context.getters.api + "/folders/favourites", {
        folders: addFavourites,
      })
      .catch(() => {
        Vue.prototype.$isSomethingWrong();
      });
  },
  removeFromFavourites: ({ commit, getters, dispatch }, folder) => {
    // Remove from storage
    commit("REMOVE_ITEM_FROM_FAVOURITES", folder);

    axios
      .post(getters.api + "/folders/favourites/" + folder.unique_id, {
        _method: "delete",
      })
      .catch(() => {
        Vue.prototype.$isSomethingWrong();
      });
  },
  retrieveUser: ({ commit }, user) => {
    commit("UPDATE_SELFIE", user.selfie);
    commit("UPDATE_KTP", user.ktp);
  },
  setPermission: ({ commit }, permission) => {
    commit("SET_PERMISSION", permission);
  },
  setIsAdmin: ({ commit }, isAdmin) => {
    commit("SET_IS_ADMIN", isAdmin);
  },
};

const mutations = {
  RETRIEVE_USER(state, user) {
    state.user = user;
  },
  SET_PERMISSION(state, role) {
    state.permission = role;
  },
  SET_IS_ADMIN(state, isAdmin) {
    state.isAdmin = isAdmin;
  },
  DESTROY_DATA(state) {
    state.authorized = false;
    state.app = undefined;
  },
  ADD_TO_FAVOURITES(state, folder) {
    folder.forEach((item) => {
      state.user.relationships.favourites.data.attributes.folders.push({
        unique_id: item.unique_id,
        name: item.name,
        type: item.type,
      });
    });
  },
  SET_DOCUMENT(state, { document }) {
    state.doc = document;
  },
  CLEAN_DOCUMENT(state) {
    state.doc = undefined;
  },
  SET_TOKEN(state, { token, expiresDate }) {
    Cookies.set("otp_token", token, { expires: 1 });
    state.token = token;
  },
  SET_OTP(state, { otp }) {
    state.user.data.attributes.otp = otp;
  },
  CLEAN_OTP(state) {
    state.user.data.attributes.otp = "";
  },
  UPDATE_NAME(state, name) {
    state.user.data.attributes.name = name;
  },
  UPDATE_PHONE(state, phone) {
    state.user.data.attributes.phone = phone;
  },
  UPDATE_NIK(state, nik) {
    state.user.data.attributes.nik = nik;
  },
  UPDATE_BIRTHDATE(state, birth_date) {
    state.user.data.attributes.birth_date = birth_date;
  },
  UPDATE_BIRTHPLACE(state, birth_place) {
    state.user.data.attributes.birth_place = birth_place;
  },
  UPDATE_SELFIE(state, selfie) {
    state.user.data.attributes.selfie = selfie;
  },
  UPDATE_KTP(state, ktp) {
    state.user.data.attributes.ktp = ktp;
  },
  UPDATE_AVATAR(state, avatar) {
    state.user.data.attributes.avatar = avatar;
  },
  REMOVE_ITEM_FROM_FAVOURITES(state, item) {
    state.user.relationships.favourites.data.attributes.folders =
      state.user.relationships.favourites.data.attributes.folders.filter(
        (folder) => folder.unique_id !== item.unique_id
      );
  },
  UPDATE_NAME_IN_FAVOURITES(state, data) {
    state.user.relationships.favourites.data.attributes.folders.find(
      (folder) => {
        if (folder.unique_id == data.unique_id) folder.name = data.name;
      }
    );
  },
};

const getters = {
  permission: (state) => state.permission,
  isGuest: (state) => !state.authorized,
  isLogged: (state) => !!state.user?.data.id,
  user: (state) => state.user,
  ktp: (state) => state.user.data.attributes?.ktp,
  selfie: (state) => state.user.data.attributes?.selfie,
  isAdmin: (state) => state.isAdmin,
  isProfileFilled: (state) => {
    if (!state.user?.data) return false;
    const data = [
      "ktp",
      "selfie",
      "birth_date",
      "birth_place",
      "nik",
      "name",
      "phone",
    ];
    let isFilled = true;
    data.forEach((item) => {
      if (!state.user.data.attributes[item]) {
        isFilled = false;
      }
    });
    return isFilled;
  },
  otp: (state) =>
    state.user ? (!state.user.data ? "" : state.user.data.attributes.otp) : "",
  token: (state) => state.token,
  signDoc: (state) => state.doc,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
