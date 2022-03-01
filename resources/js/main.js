require("./bootstrap");
import Vue from "vue";
import VueRouter from "vue-router";
import * as VeeValidate from "vee-validate";
import router from "./router";
import i18n from "./i18n/index.js";
import App from "./App.vue";
import store from "./store";
import { events } from "./bus";
import Helpers from "./helpers";
import ClickOutDirective from "@/directives/click-outside";
import "@/components/globals";

Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(Helpers);
Vue.directive("click-outside", ClickOutDirective);

Vue.config.productionTip = false;

// Handle position of Drag & Drop Ghost
document.addEventListener(
  "drag",
  (event) => {
    let multiSelect = document.getElementById("multi-select-ui");

    multiSelect.style.top = event.clientY + 20 + "px";
    multiSelect.style.left = event.clientX + "px";
  },
  false
);

// Handle for drop
document.addEventListener(
  "dragend",
  () => {
    events.$emit("drop");
  },
  false
);

var vueFileManager = new Vue({
  i18n,
  store,
  router,
  // eslint-disable-next-line vue/no-deprecated-data-object-declaration
  data: {
    // eslint-disable-next-line no-undef
    config,
  },
  render: (h) => h(App),
}).$mount("#app");
