(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/settings-subscription"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FormLabel',
  components: {
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Edit2Icon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Subscription.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Others_Tables_DatatableWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Others/Tables/DatatableWrapper */ "./resources/js/components/Others/Tables/DatatableWrapper.vue");
/* harmony import */ var _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/Layout/PageTabGroup */ "./resources/js/components/Others/Layout/PageTabGroup.vue");
/* harmony import */ var _components_Others_ListInfoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/ListInfoItem */ "./resources/js/components/Others/ListInfoItem.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/Layout/PageTab */ "./resources/js/components/Others/Layout/PageTab.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Others_ListInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/ListInfo */ "./resources/js/components/Others/ListInfo.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserSubscription',
  components: {
    ExternalLinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["ExternalLinkIcon"],
    DatatableWrapper: _components_Others_Tables_DatatableWrapper__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListInfoItem: _components_Others_ListInfoItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageTabGroup: _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_1__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"],
    ListInfo: _components_Others_ListInfo__WEBPACK_IMPORTED_MODULE_7__["default"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_6__["default"],
    PageTab: _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: {
    cancelButtonText: function cancelButtonText() {
      return this.isConfirmedCancel ? this.$t('popup_share_edit.confirm') : this.$t('user_subscription.cancel_plan');
    },
    cancelButtonStyle: function cancelButtonStyle() {
      return this.isConfirmedCancel ? 'danger-solid' : 'secondary';
    },
    resumeButtonText: function resumeButtonText() {
      return this.isConfirmedResume ? this.$t('popup_share_edit.confirm') : this.$t('user_subscription.resume_plan');
    },
    resumeButtonStyle: function resumeButtonStyle() {
      return this.isConfirmedResume ? 'theme-solid' : 'secondary';
    },
    status: function status() {
      if (this.subscription.data.attributes.incomplete) {
        return this.$t('global.incomplete');
      }

      if (this.subscription.data.attributes.canceled) {
        return this.$t('global.canceled');
      }

      if (this.subscription.data.attributes.active) {
        return this.$t('global.active');
      }
    }
  },
  data: function data() {
    return {
      subscription: undefined,
      isConfirmedCancel: false,
      isConfirmedResume: false,
      isDeleting: false,
      isResuming: false,
      isLoading: true
    };
  },
  methods: {
    cancelSubscription: function cancelSubscription() {
      var _this = this;

      // Set confirm button
      if (!this.isConfirmedCancel) {
        this.isConfirmedCancel = true;
        return;
      } // Start deleting spinner button


      this.isDeleting = true;
      this.isLoading = true; // Send delete request

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/api/subscription/cancel').then(function () {
        // Update user data
        _this.$store.dispatch('getAppData').then(function () {
          _this.fetchSubscriptionDetail();
        });

        _bus__WEBPACK_IMPORTED_MODULE_10__["events"].$emit('alert:open', {
          emoji: '👍',
          title: _this.$t('popup_subscription_cancel.title'),
          message: _this.$t('popup_subscription_cancel.message'),
          buttonStyle: 'theme',
          button: _this.$t('popup_subscription_cancel.button')
        });
      })["catch"](function () {
        _bus__WEBPACK_IMPORTED_MODULE_10__["events"].$emit('alert:open', {
          title: _this.$t('popup_error.title'),
          message: _this.$t('popup_error.message')
        });
      })["finally"](function () {
        // End deleting spinner button
        _this.isDeleting = false;
        _this.isLoading = false;
        _this.isConfirmedCancel = false;
      });
    },
    resumeSubscription: function resumeSubscription() {
      var _this2 = this;

      // Set confirm button
      if (!this.isConfirmedResume) {
        this.isConfirmedResume = true;
        return;
      } // Start deleting spinner button


      this.isResuming = true;
      this.isLoading = true; // Send delete request

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/api/subscription/resume').then(function () {
        // Update user data
        _this2.$store.dispatch('getAppData').then(function () {
          _this2.fetchSubscriptionDetail();
        });

        _bus__WEBPACK_IMPORTED_MODULE_10__["events"].$emit('alert:open', {
          emoji: '👍',
          title: _this2.$t('popup_subscription_resumed.title'),
          message: _this2.$t('popup_subscription_resumed.message'),
          buttonStyle: 'theme',
          button: _this2.$t('popup_subscription_resumed.button')
        });
      })["catch"](function () {
        _bus__WEBPACK_IMPORTED_MODULE_10__["events"].$emit('alert:open', {
          title: _this2.$t('popup_error.title'),
          message: _this2.$t('popup_error.message')
        });
      })["finally"](function () {
        // End deleting spinner button
        _this2.isResuming = false;
        _this2.isLoading = false;
        _this2.isConfirmedResume = false;
      });
    },
    fetchSubscriptionDetail: function fetchSubscriptionDetail() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('/api/user/subscription').then(function (response) {
        if (response.status == 204) {
          _this3.subscription = undefined;
        }

        if (response.status == 200) {
          _this3.subscription = response.data;
        }
      })["finally"](function () {
        _this3.isLoading = false;
      });
    }
  },
  created: function created() {
    this.fetchSubscriptionDetail();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-label[data-v-1f1075ef] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-1f1075ef] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-1f1075ef] {\n  stroke: #0667B3;\n}\n.form-label .label[data-v-1f1075ef] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-1f1075ef] {\n    color: #1B2539;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plan-action[data-v-3d6c7572] {\n  margin-top: 10px;\n}\n.list-info[data-v-3d6c7572] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.list-info .list-item[data-v-3d6c7572] {\n  flex: 0 0 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-label" },
    [
      _c("edit-2-icon", { staticClass: "icon", attrs: { size: "22" } }),
      _vm._v(" "),
      _c("b", { staticClass: "label" }, [_vm._t("default")], 2),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=template&id=3d6c7572&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Subscription.vue?vue&type=template&id=3d6c7572&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "PageTab",
    { attrs: { "is-loading": _vm.isLoading } },
    [
      _vm.subscription && !_vm.isLoading
        ? _c(
            "PageTabGroup",
            [
              _c("FormLabel", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("user_subscription.title")) +
                    "\n        "
                ),
              ]),
              _vm._v(" "),
              !_vm.subscription.data.attributes.canceled
                ? _c(
                    "div",
                    { staticClass: "state active" },
                    [
                      _c(
                        "ListInfo",
                        { staticClass: "list-info" },
                        [
                          _c("ListInfoItem", {
                            staticClass: "list-item",
                            attrs: {
                              title: _vm.$t("user_subscription.plan"),
                              content:
                                _vm.subscription.data.attributes.name +
                                " - " +
                                _vm.subscription.data.attributes
                                  .capacity_formatted,
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item",
                            attrs: {
                              title: _vm.$t("user_subscription.billed"),
                              content: _vm.$t(
                                "admin_page_user.subscription.interval_mo"
                              ),
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item",
                            attrs: {
                              title: _vm.$t("user_subscription.status"),
                              content: _vm.status,
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item capitalize",
                            attrs: {
                              title: _vm.$t("user_subscription.created_at"),
                              content:
                                _vm.subscription.data.attributes.created_at,
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item capitalize",
                            attrs: {
                              title: _vm.$t("user_subscription.renews_at"),
                              content: _vm.subscription.data.attributes.ends_at,
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "plan-action" },
                        [
                          _c(
                            "ButtonBase",
                            {
                              staticClass: "confirm-button",
                              attrs: {
                                disabled: _vm.isDeleting,
                                "button-style": _vm.cancelButtonStyle,
                              },
                              nativeOn: {
                                click: function ($event) {
                                  return _vm.cancelSubscription.apply(
                                    null,
                                    arguments
                                  )
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.cancelButtonText) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.subscription.data.attributes.canceled
                ? _c(
                    "div",
                    { staticClass: "state canceled" },
                    [
                      _c(
                        "ListInfo",
                        { staticClass: "list-info" },
                        [
                          _c("ListInfoItem", {
                            staticClass: "list-item",
                            attrs: {
                              title: _vm.$t("user_subscription.plan"),
                              content:
                                _vm.subscription.data.attributes.name +
                                " - " +
                                _vm.subscription.data.attributes
                                  .capacity_formatted,
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item",
                            attrs: {
                              title: _vm.$t("user_subscription.status"),
                              content: _vm.status,
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item capitalize",
                            attrs: {
                              title: _vm.$t("user_subscription.canceled_at"),
                              content:
                                _vm.subscription.data.attributes.canceled_at,
                            },
                          }),
                          _vm._v(" "),
                          _c("ListInfoItem", {
                            staticClass: "list-item capitalize",
                            attrs: {
                              title: _vm.$t("user_subscription.ends_at"),
                              content: _vm.subscription.data.attributes.ends_at,
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "plan-action" },
                        [
                          _c(
                            "ButtonBase",
                            {
                              staticClass: "confirm-button",
                              attrs: {
                                disabled: _vm.isResuming,
                                "button-style": _vm.resumeButtonStyle,
                              },
                              nativeOn: {
                                click: function ($event) {
                                  return _vm.resumeSubscription.apply(
                                    null,
                                    arguments
                                  )
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.resumeButtonText) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.subscription && !_vm.isLoading
        ? _c("InfoBox", [
            _c("p", [_vm._v(_vm._s(_vm.$t("user_subscription.empty")))]),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&");
/* harmony import */ var _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f1075ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/Forms/FormLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/User/Subscription.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/User/Subscription.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subscription_vue_vue_type_template_id_3d6c7572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription.vue?vue&type=template&id=3d6c7572&scoped=true& */ "./resources/js/views/User/Subscription.vue?vue&type=template&id=3d6c7572&scoped=true&");
/* harmony import */ var _Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Subscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Subscription_vue_vue_type_style_index_0_id_3d6c7572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true& */ "./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Subscription_vue_vue_type_template_id_3d6c7572_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Subscription_vue_vue_type_template_id_3d6c7572_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d6c7572",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Subscription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Subscription.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/User/Subscription.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_3d6c7572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=style&index=0&id=3d6c7572&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_3d6c7572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_3d6c7572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_3d6c7572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_3d6c7572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/User/Subscription.vue?vue&type=template&id=3d6c7572&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/User/Subscription.vue?vue&type=template&id=3d6c7572&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_template_id_3d6c7572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=template&id=3d6c7572&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Subscription.vue?vue&type=template&id=3d6c7572&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_template_id_3d6c7572_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_template_id_3d6c7572_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);