import Vuex from "vuex";
import Vue from "vue";

import fileFunctions from "./modules/fileFunctions";
import fileBrowser from "./modules/fileBrowser";
import userAuth from "./modules/userAuth";
import register from "./modules/register";
import sharing from "./modules/sharing";
import app from "./modules/app";
import signature from "./modules/signature";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fileFunctions,
    fileBrowser,
    userAuth,
    register,
    sharing,
    signature,
    app,
  },
});
