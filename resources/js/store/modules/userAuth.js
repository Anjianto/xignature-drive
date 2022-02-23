import axios from "axios";
import router from "@/router";
import Vue from "vue";
import client from "@/http_client/signature_client";
import { events } from "../../bus";
import Cookies from "js-cookie";

const defaultState = {
  authorized: undefined,
  permission: "master", // master | editor | visitor
  user: undefined,
  token: undefined,
};
async function getBase64ImageFromUrl(imageUrl) {
  var res = await fetch(imageUrl);
  console.log(res);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        resolve(reader.result);
      },
      false
    );

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  });
}
const actions = {
  getAppData: ({ commit, getters }) => {
    return new Promise((resolve, reject) => {
      const token = Cookies.get("otp_token");
      if (!!token) {
        console.log("token", token);
        commit("SET_TOKEN", { token });
      }
      axios
        .get(getters.api + "/user" + getters.sorting.URI)
        .then((response) => {
          resolve(response);

          // Redirect user if is logged
          if (router.currentRoute.name === "SignIn")
            router.push({ name: "Files" });
          if (router.currentRoute.name === "SignUp")
            router.push({ name: "Files" });
          // const attrs = response.data.attributes
          const attr = response.data.data.attributes;
          // response.data.attributes.birth_date = new Date(response.data.attributes.birth_date)
          attr.birth_date = attr.birth_date ? new Date(attr.birth_date) : null;
          commit("RETRIEVE_USER", response.data);
        })
        .catch((error) => {
          reject(error);

          // Redirect if unauthenticated
          if ([401, 403].includes(error.response.status)) {
            commit("SET_AUTHORIZED", false);
            //router.push({name: 'SignIn'})
          }
        });
    });
  },
  logOut: ({ getters, commit }) => {
    let popup = setTimeout(() => {
      commit("PROCESSING_POPUP", {
        title: "Logging Out",
        message: "Wait a second...",
      });
    }, 300);

    axios.get(getters.api + "/logout").then(() => {
      clearTimeout(popup);
      commit("DESTROY_DATA");

      router.push({ name: "SignIn" });
    });
  },
  genSignToken: async ({ commit, getters, dispatch }, {fileid}) => {
    const user = getters.user.data.attributes;
    // download user ktp and selfie from web
    const ktp = await getBase64ImageFromUrl(user.ktp);
    const selfie = await getBase64ImageFromUrl(user.selfie);

    return new Promise((resolve, reject) => {
      client
        .genOTP(
          {
            email: user.email,
            fullname: user.name,
            nik: user.nik,
            phone: user.phone,
            birthplace: user.birth_place,
            birthdate: user.birth_date,
            selfie: selfie,
            ktp: ktp,
          },
          2
        )
        .then(
          async ({
            data: {
              data: { token, expiredAt },
            },
          }) => {
            const { data: result } = await axios.post("/api/sign", {
              sign_token: token,
              file_id: fileid,
            });
            if (result.statusCode === 200) {
              const expiresDate = new Date(expiredAt);
              commit("SET_TOKEN", {
                token,
                expiresDate,
              });
              await dispatch("getAppData");
              const fileName = Cookies.get("fileName");
              const fileExt = Cookies.get("fileExt");
              if (fileName && fileExt) {
                Cookies.remove("fileName");
                Cookies.remove("fileExt");
                router.push({
                  name: "Sign",
                  params: { fileId: fileName },
                  query: { ext: fileExt },
                });
              } else {
                router.push({ name: "Files" });
              }
              events.$emit("toaster", {
                type: "success",
                message: "signature has been generated",
              });
            }
            resolve(response);
          }
        )
        .catch((error) => {
          if (error.response.status >= 500) {
            events.$emit("alert:open", {
              emoji: "🤔",
              title: "Server Error",
              message: "Please retry later, or wait for a while",
            });
          } else if (error.response.status >= 400) {
            events.$emit("alert:open", {
              emoji: "🤔",
              title: error.response.data.error,
              message: error.response.data.message,
            });
          }
          reject(error);
        });
    });
  },
  signDocument(
    { commit, getters, dispatch },
    { title, signPos, reason, file, page, otp }
  ) {
    return new Promise((resolve, reject) => {
      client
        .sign({
          otp,
          title,
          reason,
          signPage: page,
          signPos: signPos,
          document: file,
          token: getters.token,
        })
        .then(({ data }) => {
          if (data.statusCode === 201) {
            events.$emit("toaster", {
              type: "success",
              message: data.message,
            });
            dispatch("loadDocument", { ...data.data });
            resolve(data);
          }
        })
        .catch((error) => {
          if (error.response.status >= 500) {
            events.$emit("alert:open", {
              title: "Server Error",
              message: "Please retry later, or wait for a while",
            });
          } else if (error.response.status >= 400) {
            events.$emit("alert:open", {
              emoji: "🤔",
              title: error.response.data.error,
              message: error.response.data.message,
            });
          }
          reject(error);
        });
    });
  },
  async loadDocument(
    { commit, getters },
    { id, title, filename, user: { email, fullname } }
  ) {
    const document = await client.getDoucment(id);
    commit("SET_DOCUMENT", { document });
  },
  useToken: ({ commit, getters }, payload) => {
    const { token, expiresDate } = payload;
    commit("SET_TOKEN", {
      token,
      expiresDate,
    });
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
};

const mutations = {
  RETRIEVE_USER(state, user) {
    state.user = user;
  },
  SET_PERMISSION(state, role) {
    state.permission = role;
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
    state.user.document = document;
  },
  CLEAN_DOCUMENT(state) {
    state.user.document = undefined;
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
  isLogged: (state) => !!state.user.data.id,
  user: (state) => state.user,
  isProfileFilled: (state) => {
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
  otp: (state) => (state.user ? state.user.data.attributes.otp : ""),
  token: (state) => state.token,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
