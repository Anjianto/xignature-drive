(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/sign-up"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuthContentWrapper'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/StepperTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    steps: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      progress: 0,
      prevBtn: false,
      nextBtn: true
    };
  },
  methods: {
    previous: function previous() {
      if (this.prevBtn === false) return;
      --this.progress;
      var width = this.progress / (this.steps.length - 1) * 100;

      if (0 <= width && width <= 100) {
        this.$refs.progress.style.width = "".concat(width, "%");
      }

      this.disableControls();
    },
    goTo: function goTo(progress) {
      this.progress = progress;
      this.disableControls();
    },
    next: function next() {
      if (this.nextBtn === false) {
        return;
      }

      ;
      ++this.progress;
      var width = this.progress / (this.steps.length - 1) * 100;

      if (0 <= width && width <= 100) {
        this.$refs.progress.style.width = "".concat(width, "%");
      }

      this.disableControls();
    },
    disableControls: function disableControls() {
      if (this.progress <= 0) {
        this.prevBtn = false;
      } else if (this.progress >= this.steps.length) {
        this.$emit("finish");
        this.nextBtn = false;
      } else {
        this.prevBtn = true;
        this.nextBtn = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Signature/ProfileForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_Others_StepperTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/StepperTab */ "./resources/js/components/Others/StepperTab.vue");
/* harmony import */ var _http_client_signature_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/http_client/signature_client */ "./resources/js/http_client/signature_client.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "ProfileForm",
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    StepperTab: _components_Others_StepperTab__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_6__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"],
    ext: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["ext"],
    digits: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["digits"],
    min: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["min"]
  },
  props: {
    name: String,
    phone: String,
    ktp: Object,
    email: String,
    selfie: Object,
    nik: [String, Number],
    birthdate: Date,
    birthPlace: String,
    mode: {
      type: String,
      "default": "onepage"
    } // onepage or stepbar

  },
  computed: {
    birthday: function birthday() {
      return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(this.profile.birthdate, "dd MMMM yyyy");
    }
  },
  data: function data() {
    var _this$name, _this$email, _this$phone, _this$nik, _this$birthplace, _this$birthdate, _this$ktp, _this$selfie;

    return {
      profile: {
        fullname: (_this$name = this.name) !== null && _this$name !== void 0 ? _this$name : "",
        email: (_this$email = this.email) !== null && _this$email !== void 0 ? _this$email : "",
        phone: (_this$phone = this.phone) !== null && _this$phone !== void 0 ? _this$phone : "",
        nik: (_this$nik = this.nik) !== null && _this$nik !== void 0 ? _this$nik : "",
        birthplace: (_this$birthplace = this.birthplace) !== null && _this$birthplace !== void 0 ? _this$birthplace : "",
        birthdate: (_this$birthdate = this.birthdate) !== null && _this$birthdate !== void 0 ? _this$birthdate : "",
        ktp: (_this$ktp = this.ktp) !== null && _this$ktp !== void 0 ? _this$ktp : "",
        selfie: (_this$selfie = this.selfie) !== null && _this$selfie !== void 0 ? _this$selfie : ""
      },
      ktpFileName: "",
      token: "",
      error: "",
      retries: 0,
      displayConfirm: false,
      loading: false
    };
  },
  setup: function setup() {
    var user = this.$store.getters.user;
    this.profile = {
      name: user.data.attributes.name,
      email: user.data.attributes.email,
      phone: user.data.attributes.phone,
      nik: user.data.attributes.nik,
      birthplace: user.data.attributes.birth_place,
      birthdate: user.data.attributes.birth_date,
      ktp: user.data.attributes.ktp,
      selfie: user.data.attributes.selfie
    };
  },
  methods: {
    onKTPChanged: function onKTPChanged(e, next) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var files;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = e.target.files || e.dataTransfer.files;
                next(files[0]);

                if (files.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _this.ktpFileName = files[0].name;
                _context.next = 7;
                return _this.createImage(files[0]);

              case 7:
                _this.profile.ktp = _context.sent;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSelfieUpload: function onSelfieUpload(e, next) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var files, isImage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                files = e.target.files || e.dataTransfer.files;
                next(files[0]);
                isImage = files[0].type.match(/image.*/);

                if (!(!files.length || !isImage)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return _this2.createImage(files[0]);

              case 7:
                _this2.profile.selfie = _context2.sent;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getProfileButtonLabel: function getProfileButtonLabel(step) {
      switch (step) {
        case 0:
          return this.$t("sigature_profile.button_profile");

        case 1:
          return this.$t("sigature_profile.button_signature");

        case 2:
          return this.$t("sigature_profile.button_selfie");

        default:
          return this.$t("sigature_profile.save_profile");
      }
    },
    loadConfirm: function loadConfirm() {
      this.displayConfirm = true;
    },
    saveToken: function saveToken(data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$axios$post, result, expiresDate;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/api/sign", {
                  sign_token: data.token
                });

              case 2:
                _yield$axios$post = _context3.sent;
                result = _yield$axios$post.data;

                if (result.statusCode === 200) {
                  expiresDate = new Date(data.expiredAt);

                  _this3.$emit("token", data.token, expiresDate);

                  _this3.token = "";
                  _this3.loading = false;
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    reqToken: function reqToken() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$signature_clie, data, _data$error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.displayConfirm = false;
                _this4.loading = true;
                _context4.prev = 2;
                _context4.next = 5;
                return _http_client_signature_client__WEBPACK_IMPORTED_MODULE_5__["default"].genLTC(_this4.profile, 2);

              case 5:
                _yield$signature_clie = _context4.sent;
                data = _yield$signature_clie.data;

                if (data.statusCode === 200) {
                  _this4.saveToken(data.data);
                } else if (data.statusCode < 600) {
                  _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit("alert:open", {
                    emoji: "🤔",
                    title: (_data$error = data.error) !== null && _data$error !== void 0 ? _data$error : "Error",
                    message: data.message
                  });
                  _this4.errors = data.error;
                  _this4.loading = false;
                } else {
                  _this4.loading = false;
                  _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit("alert:open", {
                    emoji: "🤔",
                    title: "Error",
                    message: "Something went wrong"
                  });
                }

                _context4.next = 21;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](2);
                _this4.loading = false;

                if (!(_this4.retries < 2 && _this4.token === "")) {
                  _context4.next = 18;
                  break;
                }

                _this4.retries++;

                _this4.reqToken();

                _context4.next = 21;
                break;

              case 18:
                _this4.displayConfirm = true;
                _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit("alert:open", {
                  emoji: "🤔",
                  title: "Error",
                  message: "Something went wrong, please try again"
                });
                throw _context4.t0;

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 10]]);
      }))();
    },
    saveFields: function saveFields(pos, next) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var isValid, _isValid, _isValid2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(pos === 0)) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 3;
                return _this5.$refs.make_profile.validate();

              case 3:
                isValid = _context5.sent;

                if (isValid) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                next();
                _context5.next = 25;
                break;

              case 9:
                if (!(pos === 1)) {
                  _context5.next = 18;
                  break;
                }

                _context5.next = 12;
                return _this5.$refs.make_signature.validate();

              case 12:
                _isValid = _context5.sent;

                if (_isValid) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt("return");

              case 15:
                next();
                _context5.next = 25;
                break;

              case 18:
                if (!(pos === 2)) {
                  _context5.next = 25;
                  break;
                }

                _context5.next = 21;
                return _this5.$refs.make_selfie.validate();

              case 21:
                _isValid2 = _context5.sent;

                if (_isValid2) {
                  _context5.next = 24;
                  break;
                }

                return _context5.abrupt("return");

              case 24:
                next();

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    roolback: function roolback() {
      this.displayConfirm = false;
      this.loading = false;
    },
    createImage: function createImage(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();

        reader.onload = function (e) {
          resolve(e.target.result);
        };

        reader.onerror = function (e) {
          reject(e);
        };

        reader.readAsDataURL(file);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/SignUp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_Signature_ProfileForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Signature/ProfileForm */ "./resources/js/components/Signature/ProfileForm.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "SignUp",
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProfileForm: _components_Signature_ProfileForm__WEBPACK_IMPORTED_MODULE_5__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_6__["required"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(["config"])), {}, {
    privacyPolicy: function privacyPolicy() {
      return this.config.legal.find(function (legal) {
        return legal.slug === "privacy-policy";
      });
    },
    termsOfService: function termsOfService() {
      return this.config.legal.find(function (legal) {
        return legal.slug === "terms-of-service";
      });
    }
  }),
  data: function data() {
    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('preRegister') || false;
    return {
      isLoading: false,
      isPreRegister: myParam,
      register: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    signUp: function signUp(token, expired) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var daysDiff;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                daysDiff = Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["differenceInDays"])(expired, new Date());
                js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('sign', token, {
                  expires: daysDiff
                });

                _this.$router.push({
                  name: 'Files'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveRegister: function saveRegister() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Start loading
                _this2.isLoading = true;
                axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/api/user/register", _this2.register).then(function () {
                  // End loading
                  _this2.isLoading = false; // Set login state

                  _this2.$store.commit("SET_AUTHORIZED", true); // complete the profile
                  // this.isPreRegister = true;
                  // this.$router.push({name: 'SignUp', query: {preRegister: true}})


                  _this2.$router.push({
                    name: 'Profile',
                    query: {
                      create_signature: true
                    }
                  });
                })["catch"](function (error) {
                  if (error.response.status == 401) {
                    if (error.response.data.error === "invalid_client") {
                      _bus__WEBPACK_IMPORTED_MODULE_8__["events"].$emit("alert:open", {
                        emoji: "🤔",
                        title: _this2.$t("popup_passport_error.title"),
                        message: _this2.$t("popup_passport_error.message")
                      });
                    }
                  }

                  if (error.response.status == 500) {
                    _bus__WEBPACK_IMPORTED_MODULE_8__["events"].$emit("alert:open", {
                      emoji: "🤔",
                      title: _this2.$t("popup_signup_error.title"),
                      message: _this2.$t("popup_signup_error.message")
                    });
                  }

                  if (error.response.status == 422) {
                    if (error.response.data.errors["email"]) {
                      _this2.$refs.sign_up.setErrors({
                        "E-Mail": error.response.data.errors["email"]
                      });
                    }

                    if (error.response.data.errors["password"]) {
                      _this2.$refs.sign_up.setErrors({
                        "Your New Password": error.response.data.errors["password"]
                      });
                    }
                  } // End loading


                  _this2.isLoading = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    this.$scrollTop();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#auth[data-v-7cf0b724] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-4cd7e675] {\n  text-align: center;\n}\n.actions[data-v-4cd7e675] {\n  margin: 50px auto;\n}\n.stepper-wrapper[data-v-4cd7e675] {\n  margin-bottom: 50px;\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n.stepper-wrapper[data-v-4cd7e675]::before {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: lightgray;\n  position: absolute;\n  z-index: 0;\n}\n.progress[data-v-4cd7e675] {\n  content: \"\";\n  width: 0%;\n  height: 3px;\n  background-color: #4ec4f3;\n  position: absolute;\n  z-index: 0;\n  transition: width 1s;\n}\n.screen-indicator[data-v-4cd7e675] {\n  border-radius: 50%;\n  border: 3px solid lightgrey;\n  align-items: center;\n  background-color: white;\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  color: gray;\n  transition: border-color color;\n  transition-duration: 0.7s;\n}\n.completed[data-v-4cd7e675] {\n  border-color: #4ec4f3;\n  color: #4ec4f3;\n}\n.control-btn[data-v-4cd7e675] {\n  background-color: #eeeeee;\n  padding: 5px 10px;\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.control-btn[data-v-4cd7e675]:disabled {\n  cursor: not-allowed;\n}\n.control-btn[data-v-4cd7e675]:not(:disabled):hover {\n  background-color: lightgray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-69239abb] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-69239abb] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-69239abb] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-69239abb] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-69239abb] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-69239abb] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-69239abb] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-69239abb] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-69239abb]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-69239abb] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-69239abb] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-69239abb] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-69239abb] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-69239abb] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-69239abb] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-69239abb] {\n  margin-left: 20px;\n}\n.error-message[data-v-69239abb] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-69239abb] {\n  width: 100%;\n}\ntextarea[data-v-69239abb],\ninput[type=\"password\"][data-v-69239abb],\ninput[type=\"text\"][data-v-69239abb],\ninput[type=\"tel\"][data-v-69239abb],\ninput[type=\"number\"][data-v-69239abb],\ninput[type=\"email\"][data-v-69239abb] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-69239abb],\ninput[type=\"password\"].is-error[data-v-69239abb],\ninput[type=\"text\"].is-error[data-v-69239abb],\ninput[type=\"tel\"].is-error[data-v-69239abb],\ninput[type=\"number\"].is-error[data-v-69239abb],\ninput[type=\"email\"].is-error[data-v-69239abb] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-69239abb]::-moz-placeholder, input[type=\"password\"][data-v-69239abb]::-moz-placeholder, input[type=\"text\"][data-v-69239abb]::-moz-placeholder, input[type=\"tel\"][data-v-69239abb]::-moz-placeholder, input[type=\"number\"][data-v-69239abb]::-moz-placeholder, input[type=\"email\"][data-v-69239abb]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-69239abb]:-ms-input-placeholder, input[type=\"password\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"text\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"tel\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"number\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"email\"][data-v-69239abb]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-69239abb]::placeholder,\ninput[type=\"password\"][data-v-69239abb]::placeholder,\ninput[type=\"text\"][data-v-69239abb]::placeholder,\ninput[type=\"tel\"][data-v-69239abb]::placeholder,\ninput[type=\"number\"][data-v-69239abb]::placeholder,\ninput[type=\"email\"][data-v-69239abb]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-69239abb]:focus,\ninput[type=\"password\"][data-v-69239abb]:focus,\ninput[type=\"text\"][data-v-69239abb]:focus,\ninput[type=\"tel\"][data-v-69239abb]:focus,\ninput[type=\"number\"][data-v-69239abb]:focus,\ninput[type=\"email\"][data-v-69239abb]:focus {\n  border-color: #0667B3;\n  box-shadow: 0 1px 5px rgba(6, 103, 179, 0.3);\n}\ntextarea[disabled][data-v-69239abb],\ninput[type=\"password\"][disabled][data-v-69239abb],\ninput[type=\"text\"][disabled][data-v-69239abb],\ninput[type=\"tel\"][disabled][data-v-69239abb],\ninput[type=\"number\"][disabled][data-v-69239abb],\ninput[type=\"email\"][disabled][data-v-69239abb] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-69239abb] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-69239abb], .additional-link a[data-v-69239abb] {\n  color: #0667B3;\n  cursor: pointer;\n}\n.additional-link b[data-v-69239abb]:hover, .additional-link a[data-v-69239abb]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-69239abb] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-69239abb] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-69239abb], .form textarea[data-v-69239abb] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-69239abb] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-69239abb] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-69239abb] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-69239abb] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-69239abb] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-69239abb] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-69239abb] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-69239abb] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-69239abb],\n  input[type=\"password\"][data-v-69239abb],\n  input[type=\"number\"][data-v-69239abb],\n  input[type=\"tel\"][data-v-69239abb],\n  input[type=\"text\"][data-v-69239abb],\n  input[type=\"email\"][data-v-69239abb] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-69239abb] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-69239abb] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-69239abb] {\n    color: #1B2539;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-69239abb] {\n    color: #1B2539;\n}\ntextarea[data-v-69239abb],\n  input[type=\"password\"][data-v-69239abb],\n  input[type=\"text\"][data-v-69239abb],\n  input[type=\"number\"][data-v-69239abb],\n  input[type=\"tel\"][data-v-69239abb],\n  input[type=\"email\"][data-v-69239abb] {\n    border-color: #f4f5f6;\n    background: #f4f5f6;\n    color: #1B2539;\n}\ntextarea[data-v-69239abb]::-moz-placeholder, input[type=\"password\"][data-v-69239abb]::-moz-placeholder, input[type=\"text\"][data-v-69239abb]::-moz-placeholder, input[type=\"number\"][data-v-69239abb]::-moz-placeholder, input[type=\"tel\"][data-v-69239abb]::-moz-placeholder, input[type=\"email\"][data-v-69239abb]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-69239abb]:-ms-input-placeholder, input[type=\"password\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"text\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"number\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"tel\"][data-v-69239abb]:-ms-input-placeholder, input[type=\"email\"][data-v-69239abb]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-69239abb]::placeholder,\n  input[type=\"password\"][data-v-69239abb]::placeholder,\n  input[type=\"text\"][data-v-69239abb]::placeholder,\n  input[type=\"number\"][data-v-69239abb]::placeholder,\n  input[type=\"tel\"][data-v-69239abb]::placeholder,\n  input[type=\"email\"][data-v-69239abb]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-69239abb],\n  input[type=\"password\"][disabled][data-v-69239abb],\n  input[type=\"text\"][disabled][data-v-69239abb],\n  input[type=\"number\"][disabled][data-v-69239abb],\n  input[type=\"tel\"][disabled][data-v-69239abb],\n  input[type=\"email\"][disabled][data-v-69239abb] {\n    background: #f4f5f6;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n#profile-wrapper[data-v-69239abb] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n.preview[data-v-69239abb],\n.date-field[data-v-69239abb] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  text-align: start;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  padding: 14px 20px;\n  border-color: #f4f5f6;\n  background: #f4f5f6;\n  color: #1b2539;\n  height: 52px;\n  cursor: pointer;\n  width: 100%;\n}\n.action_wrapper[data-v-69239abb] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  align-items: center;\n  margin-top: 20px;\n}\n.wrapper[data-v-69239abb] {\n  margin-bottom: 30px;\n}\n.wrapper h1[data-v-69239abb] {\n  font-size: 1.8rem;\n}\nimg[data-v-69239abb] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.text-left[data-v-69239abb] {\n  text-align: left;\n}\n.mt-8[data-v-69239abb] {\n  margin-bottom: 1.25rem;\n}\n.indicator-icon[data-v-69239abb] {\n  height: 20px;\n}\n.block-wrapper[data-v-69239abb] {\n  text-align: left;\n  margin-bottom: 16px;\n}\n.confirm-container .block-wrapper h4[data-v-69239abb] {\n  margin-bottom: 4px;\n}\n.confirm-container .block-wrapper div[data-v-69239abb] {\n  background: #eee;\n  padding: 12px 10px;\n  border-radius: 6px;\n}\n.confirm-container .block-wrapper img[data-v-69239abb] {\n  height: 240px;\n  border-radius: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-e1fb3060] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-e1fb3060] {\n  display: flex;\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-e1fb3060] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-e1fb3060] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-e1fb3060] {\n  margin-top: 25px;\n  text-align: start;\n}\n.form.block-form .block-wrapper[data-v-e1fb3060]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-e1fb3060] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-e1fb3060] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-e1fb3060] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-e1fb3060] {\n  width: 100%;\n}\ntextarea[data-v-e1fb3060],\ninput[type=\"password\"][data-v-e1fb3060],\ninput[type=\"text\"][data-v-e1fb3060],\ninput[type=\"email\"][data-v-e1fb3060] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-e1fb3060],\ninput[type=\"password\"].is-error[data-v-e1fb3060],\ninput[type=\"text\"].is-error[data-v-e1fb3060],\ninput[type=\"email\"].is-error[data-v-e1fb3060] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-e1fb3060]::-moz-placeholder, input[type=\"password\"][data-v-e1fb3060]::-moz-placeholder, input[type=\"text\"][data-v-e1fb3060]::-moz-placeholder, input[type=\"email\"][data-v-e1fb3060]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-e1fb3060]:-ms-input-placeholder, input[type=\"password\"][data-v-e1fb3060]:-ms-input-placeholder, input[type=\"text\"][data-v-e1fb3060]:-ms-input-placeholder, input[type=\"email\"][data-v-e1fb3060]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-e1fb3060]::placeholder,\ninput[type=\"password\"][data-v-e1fb3060]::placeholder,\ninput[type=\"text\"][data-v-e1fb3060]::placeholder,\ninput[type=\"email\"][data-v-e1fb3060]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-e1fb3060]:focus,\ninput[type=\"password\"][data-v-e1fb3060]:focus,\ninput[type=\"text\"][data-v-e1fb3060]:focus,\ninput[type=\"email\"][data-v-e1fb3060]:focus {\n  border-color: #0667B3;\n  box-shadow: 0 0 7px rgba(6, 103, 179, 0.3);\n}\ntextarea[disabled][data-v-e1fb3060],\ninput[type=\"password\"][disabled][data-v-e1fb3060],\ninput[type=\"text\"][disabled][data-v-e1fb3060],\ninput[type=\"email\"][disabled][data-v-e1fb3060] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-e1fb3060] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-e1fb3060], .additional-link a[data-v-e1fb3060] {\n  color: #0667B3;\n  cursor: pointer;\n}\n.additional-link b[data-v-e1fb3060]:hover, .additional-link a[data-v-e1fb3060]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-e1fb3060] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-e1fb3060], .form textarea[data-v-e1fb3060] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-e1fb3060] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-e1fb3060] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-e1fb3060] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-e1fb3060] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-e1fb3060] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-e1fb3060] {\n    padding: 14px 32px;\n}\ntextarea[data-v-e1fb3060],\n  input[type=\"password\"][data-v-e1fb3060],\n  input[type=\"text\"][data-v-e1fb3060],\n  input[type=\"email\"][data-v-e1fb3060] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-e1fb3060] {\n    color: #1B2539;\n}\ntextarea[data-v-e1fb3060],\n  input[type=\"password\"][data-v-e1fb3060],\n  input[type=\"text\"][data-v-e1fb3060],\n  input[type=\"email\"][data-v-e1fb3060] {\n    background: #f4f5f6;\n    color: #1B2539;\n}\ntextarea[data-v-e1fb3060]::-moz-placeholder, input[type=\"password\"][data-v-e1fb3060]::-moz-placeholder, input[type=\"text\"][data-v-e1fb3060]::-moz-placeholder, input[type=\"email\"][data-v-e1fb3060]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e1fb3060]:-ms-input-placeholder, input[type=\"password\"][data-v-e1fb3060]:-ms-input-placeholder, input[type=\"text\"][data-v-e1fb3060]:-ms-input-placeholder, input[type=\"email\"][data-v-e1fb3060]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e1fb3060]::placeholder,\n  input[type=\"password\"][data-v-e1fb3060]::placeholder,\n  input[type=\"text\"][data-v-e1fb3060]::placeholder,\n  input[type=\"email\"][data-v-e1fb3060]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-e1fb3060],\n  input[type=\"password\"][disabled][data-v-e1fb3060],\n  input[type=\"text\"][disabled][data-v-e1fb3060],\n  input[type=\"email\"][disabled][data-v-e1fb3060] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-e1fb3060] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-e1fb3060] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-e1fb3060] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-e1fb3060] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-e1fb3060] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-e1fb3060] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-e1fb3060] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-e1fb3060] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-e1fb3060] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-e1fb3060] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-e1fb3060] {\n    width: 100%;\n}\n.auth-form h1[data-v-e1fb3060] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-e1fb3060] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-e1fb3060] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-e1fb3060] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-e1fb3060] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-e1fb3060] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-e1fb3060], .auth-form h2[data-v-e1fb3060], .auth-form .additional-link[data-v-e1fb3060] {\n    color: #1B2539;\n}\n}\n.legal-agreement[data-v-e1fb3060] {\n  font-size: 1em;\n  padding: 55px 0 0;\n  max-width: 400px;\n  font-weight: 700;\n  line-height: 1.6;\n  margin: 0 auto;\n}\n.legal-agreement a[data-v-e1fb3060] {\n  color: #0667B3;\n}\n.container[data-v-e1fb3060] {\n  display: flex;\n}\n.container.center[data-v-e1fb3060] {\n  justify-content: center;\n}\n#content-card[data-v-e1fb3060] {\n  max-width: 454px;\n  margin: 0 auto;\n}\n#content-card > *[data-v-e1fb3060] {\n  border-radius: 20px;\n  --tw-bg-opacity: 1;\n  background-color: white;\n  padding: 2.75rem 1.5rem;\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! js-cookie v3.0.1 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (key, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      key = encodeURIComponent(key)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        key + '=' + converter.write(value, key) + stringifiedAttributes)
    }

    function get (key) {
      if (typeof document === 'undefined' || (arguments.length && !key)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var foundKey = decodeURIComponent(parts[0]);
          jar[foundKey] = converter.read(value, foundKey);

          if (key === foundKey) {
            break
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar
    }

    return Object.create(
      {
        set: set,
        get: get,
        remove: function (key, attributes) {
          set(
            key,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

})));


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "auth" } }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _vm._t("head", null, { props: { progress: _vm.progress } }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "stepWrapper", staticClass: "stepper-wrapper" },
        [
          _c("div", { ref: "progress", staticClass: "progress" }),
          _vm._v(" "),
          _vm._l(_vm.steps, function (x, k) {
            return _c(
              "div",
              {
                key: k,
                class: [
                  "screen-indicator",
                  {
                    completed: x <= _vm.progress,
                  },
                ],
                style: {
                  transitionDelay: x <= _vm.progress ? "0ms" : x * 100 + "ms",
                },
              },
              [
                _vm._t(
                  "indicator",
                  function () {
                    return [_vm._v("\n        " + _vm._s(x) + "\n      ")]
                  },
                  { props: { x: x } }
                ),
              ],
              2
            )
          }),
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("default", null, { props: { progress: _vm.progress } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "actions" },
        [
          _vm._t(
            "action",
            function () {
              return [
                _c(
                  "button",
                  {
                    staticClass: "control-btn",
                    attrs: { disabled: _vm.prevBtn },
                    on: { onclick: _vm.previous },
                  },
                  [_vm._v("\n          Back\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "control-btn",
                    attrs: { disabled: _vm.nextBtn },
                    on: { onclick: _vm.next },
                  },
                  [_vm._v("\n          Continue\n      ")]
                ),
              ]
            },
            {
              action: {
                next: _vm.next,
                previous: _vm.previous,
                progress: _vm.progress,
              },
            }
          ),
        ],
        2
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=template&id=69239abb&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Signature/ProfileForm.vue?vue&type=template&id=69239abb&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "profile-wrapper" } }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _vm.displayConfirm
          ? _c("div", { staticClass: "confirm-container" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_name"))),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.profile.fullname))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_email"))),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.profile.email))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_phone"))),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.profile.phone))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_ktp"))),
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: _vm.profile.ktp, alt: "foto ktp" },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_nik"))),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.profile.nik))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(
                      _vm._s(_vm.$t("page_registration.label_birthplace"))
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.profile.birthplace))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_birthdate"))),
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.birthday))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("h4", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_selfie"))),
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: _vm.profile.selfie, alt: "foto selfie" },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "action_wrapper" },
                [
                  _c("AuthButton", {
                    attrs: { icon: "pencil-alt", text: "Edit" },
                    on: { click: _vm.roolback },
                  }),
                  _vm._v(" "),
                  _c("AuthButton", {
                    attrs: {
                      icon: "save",
                      text: _vm.retries > 0 ? "Resend" : "Save",
                    },
                    on: { click: _vm.reqToken },
                  }),
                ],
                1
              ),
            ])
          : _vm.loading
          ? _c("div", { staticClass: "loading container" }, [
              _c("div", { staticClass: "loader" }),
              _vm._v(" "),
              _c("h4", [_vm._v("Loading...")]),
              _vm._v(" "),
              _c("p", [_vm._v("Please wait while we make your signature.")]),
            ])
          : _c("StepperTab", {
              attrs: { steps: [1, 2, 3] },
              on: { finish: _vm.loadConfirm },
              scopedSlots: _vm._u([
                {
                  key: "indicator",
                  fn: function (ref) {
                    var x = ref.props.x
                    return [
                      x === 1
                        ? _c("FontAwesomeIcon", {
                            staticClass: "indicator-icon",
                            attrs: { icon: "cubes" },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      x === 2
                        ? _c("FontAwesomeIcon", {
                            staticClass: "indicator-icon",
                            attrs: { icon: "address-card" },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      x === 3
                        ? _c("FontAwesomeIcon", {
                            staticClass: "indicator-icon",
                            attrs: { icon: "camera" },
                          })
                        : _vm._e(),
                    ]
                  },
                },
                {
                  key: "head",
                  fn: function (ref) {
                    var progress = ref.props.progress
                    return [
                      progress === 0
                        ? _c("div", { staticClass: "wrapper" }, [
                            _c("h1", [_vm._v("Create Signature")]),
                            _vm._v(" "),
                            _c("h2", [_vm._v("Fill the profile form")]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      progress === 1
                        ? _c("div", { staticClass: "wrapper" }, [
                            _c("h1", [_vm._v("Create Signature")]),
                            _vm._v(" "),
                            _c("h2", [_vm._v("Fill the ktp form")]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      progress === 2
                        ? _c("div", { staticClass: "wrapper" }, [
                            _c("h1", [_vm._v("Create Signature")]),
                            _vm._v(" "),
                            _c("h2", [_vm._v("Upload selifie with ktp")]),
                          ])
                        : _vm._e(),
                    ]
                  },
                },
                {
                  key: "default",
                  fn: function (ref) {
                    var progress = ref.props.progress
                    return [
                      progress === 0
                        ? _c("ValidationObserver", {
                            ref: "make_profile",
                            staticClass: "form block-form",
                            attrs: { tag: "form" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var invalid = ref.invalid
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_name"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "Full Name",
                                              rules: "required",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.profile
                                                                .fullname,
                                                            expression:
                                                              "profile.fullname",
                                                          },
                                                        ],
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_name"
                                                          ),
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.profile
                                                              .fullname,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.profile,
                                                              "fullname",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_email"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "Email Address",
                                              rules: "required",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.profile.email,
                                                            expression:
                                                              "profile.email",
                                                          },
                                                        ],
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_email"
                                                          ),
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.profile.email,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.profile,
                                                              "email",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_phone"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "Phone Number",
                                              rules: "required",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.profile.phone,
                                                            expression:
                                                              "profile.phone",
                                                          },
                                                        ],
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_phone"
                                                          ),
                                                          type: "tel",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.profile.phone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.profile,
                                                              "phone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      progress === 1
                        ? _c("ValidationObserver", {
                            ref: "make_signature",
                            staticClass: "form block-form",
                            attrs: { tag: "form" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var invalid = ref.invalid
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "KTP Picture",
                                              rules: "ext:jpg,jpeg,png",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var validate = ref.validate
                                                    var errors = ref.errors
                                                    return [
                                                      _c("label", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "page_registration.label_ktp"
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "preview",
                                                          on: {
                                                            click: function () {
                                                              return _vm.$refs.ktpUpload.click()
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                " +
                                                              _vm._s(
                                                                _vm.ktpFileName
                                                                  ? _vm.ktpFileName
                                                                  : "Click To Upload KTP"
                                                              ) +
                                                              "\n              "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("input", {
                                                        ref: "ktpUpload",
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        staticStyle: {
                                                          display: "none",
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_ktp"
                                                          ),
                                                          type: "file",
                                                          accept:
                                                            "image/jpeg,image/png",
                                                        },
                                                        on: {
                                                          change: function (e) {
                                                            return _vm.onKTPChanged(
                                                              e,
                                                              validate
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_nik"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "NIK Number",
                                              rules: "required",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.profile.nik,
                                                            expression:
                                                              "profile.nik",
                                                          },
                                                        ],
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_nik"
                                                          ),
                                                          type: "number",
                                                          minlength: "16",
                                                          maxlength: "16",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.profile.nik,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.profile,
                                                              "nik",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_birthplace"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "Birthplace",
                                              rules: "required",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.profile
                                                                .birthplace,
                                                            expression:
                                                              "profile.birthplace",
                                                          },
                                                        ],
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_birthplace"
                                                          ),
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.profile
                                                              .birthplace,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.profile,
                                                              "birthplace",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_birthdate"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "Birthdate",
                                              rules: "required",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("DatePicker", {
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_birthdate"
                                                          ),
                                                          format: "YYYY-MM-DD",
                                                          "input-attr": {
                                                            class: [
                                                              "mx-input date-field",
                                                              {
                                                                "is-error":
                                                                  errors[0],
                                                              },
                                                            ],
                                                          },
                                                          type: "date",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.profile
                                                              .birthdate,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.profile,
                                                              "birthdate",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "profile.birthdate",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      progress === 2
                        ? _c("ValidationObserver", {
                            ref: "make_selfie",
                            staticClass: "form block-form",
                            attrs: { tag: "form" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var invalid = ref.invalid
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "page_registration.label_selfie"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "text-left mt-8" },
                                            [
                                              _vm._v(
                                                "\n              Upload Your Selfie With KTP on camera\n            "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              name: "Selfie with KTP",
                                              rules: "ext:jpg,jpeg,png",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var validate = ref.validate
                                                    var errors = ref.errors
                                                    return [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "image preview",
                                                          on: {
                                                            click: function () {
                                                              return _vm.$refs.selfieUpload.click()
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm.profile.selfie
                                                            ? _c("img", {
                                                                attrs: {
                                                                  src: _vm
                                                                    .profile
                                                                    .selfie,
                                                                  alt: "selfie photo",
                                                                },
                                                              })
                                                            : _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "placeholder center",
                                                                },
                                                                [
                                                                  _c("h4", [
                                                                    _vm._v(
                                                                      "No Selfie Taken"
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("p", [
                                                                    _vm._v(
                                                                      "click open Camera"
                                                                    ),
                                                                  ]),
                                                                ]
                                                              ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("input", {
                                                        ref: "selfieUpload",
                                                        class: {
                                                          "is-error": errors[0],
                                                        },
                                                        staticStyle: {
                                                          display: "none",
                                                        },
                                                        attrs: {
                                                          accept:
                                                            "image/jpeg,image/png",
                                                          required: "",
                                                          placeholder: _vm.$t(
                                                            "page_registration.placeholder_selfie"
                                                          ),
                                                          type: "file",
                                                        },
                                                        on: {
                                                          change: function (e) {
                                                            return _vm.onSelfieUpload(
                                                              e,
                                                              validate
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          })
                        : _vm._e(),
                    ]
                  },
                },
                {
                  key: "action",
                  fn: function (ref) {
                    var ref_action = ref.action
                    var next = ref_action.next
                    var previous = ref_action.previous
                    var progress = ref_action.progress
                    return [
                      _c(
                        "div",
                        { staticClass: "action_wrapper" },
                        [
                          progress - 1 >= 0
                            ? _c("AuthButton", {
                                attrs: {
                                  icon: "chevron-left",
                                  text: _vm.$t("navigation.previous"),
                                  ltr: true,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.saveFields(progress, previous)
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          progress < 3
                            ? _c("AuthButton", {
                                attrs: {
                                  icon: "chevron-right",
                                  text: _vm.$t("navigation.next"),
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.saveFields(progress, next)
                                  },
                                },
                              })
                            : _vm._e(),
                        ],
                        1
                      ),
                    ]
                  },
                },
              ]),
            }),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wrapper" }, [
      _c("h1", [_vm._v("Confirm Form")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Please check for input bellow")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=template&id=e1fb3060&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/SignUp.vue?vue&type=template&id=e1fb3060&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "single-page" } },
    [
      _c(
        "AuthContentWrapper",
        { ref: "auth" },
        [
          _c(
            "AuthContent",
            {
              staticClass: "center-page",
              attrs: { id: "AuthContent", name: "sign-up", visible: true },
            },
            [
              !_vm.isPreRegister
                ? _c("div", [
                    _vm.config.app_logo
                      ? _c("img", {
                          staticClass: "logo",
                          attrs: {
                            src: _vm.$getImage(_vm.config.app_logo),
                            alt: _vm.config.app_name,
                          },
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.config.app_logo
                      ? _c("b", { staticClass: "auth-logo-text" }, [
                          _vm._v(_vm._s(_vm.config.app_name)),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("h1", [
                      _vm._v(_vm._s(_vm.$t("page_registration.title"))),
                    ]),
                    _vm._v(" "),
                    _c("h2", [
                      _vm._v(_vm._s(_vm.$t("page_registration.subtitle"))),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { id: "content-card" } },
                [
                  !_vm.isPreRegister
                    ? _c("ValidationObserver", {
                        ref: "sign_up",
                        staticClass: "form block-form",
                        attrs: { tag: "form" },
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.saveRegister.apply(null, arguments)
                          },
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function (ref) {
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "block-wrapper" },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "page_registration.label_email"
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        staticClass: "input-wrapper",
                                        attrs: {
                                          tag: "div",
                                          mode: "passive",
                                          name: "E-Mail",
                                          rules: "required",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.register.email,
                                                        expression:
                                                          "register.email",
                                                      },
                                                    ],
                                                    class: {
                                                      "is-error": errors[0],
                                                    },
                                                    attrs: {
                                                      placeholder: _vm.$t(
                                                        "page_registration.placeholder_email"
                                                      ),
                                                      type: "email",
                                                    },
                                                    domProps: {
                                                      value: _vm.register.email,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.register,
                                                          "email",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  errors[0]
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "error-message",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "block-wrapper" },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "page_registration.label_name"
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        staticClass: "input-wrapper",
                                        attrs: {
                                          tag: "div",
                                          mode: "passive",
                                          name: "Full Name",
                                          rules: "required",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.register.name,
                                                        expression:
                                                          "register.name",
                                                      },
                                                    ],
                                                    class: {
                                                      "is-error": errors[0],
                                                    },
                                                    attrs: {
                                                      placeholder: _vm.$t(
                                                        "page_registration.placeholder_name"
                                                      ),
                                                      type: "text",
                                                    },
                                                    domProps: {
                                                      value: _vm.register.name,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.register,
                                                          "name",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  errors[0]
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "error-message",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "block-wrapper" },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "page_registration.label_pass"
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        staticClass: "input-wrapper",
                                        attrs: {
                                          tag: "div",
                                          mode: "passive",
                                          name: "Your New Password",
                                          rules: "required",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.register.password,
                                                        expression:
                                                          "register.password",
                                                      },
                                                    ],
                                                    class: {
                                                      "is-error": errors[0],
                                                    },
                                                    attrs: {
                                                      placeholder: _vm.$t(
                                                        "page_registration.placeholder_pass"
                                                      ),
                                                      type: "password",
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.register.password,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.register,
                                                          "password",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  errors[0]
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "error-message",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "block-wrapper" },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "page_registration.label_confirm_pass"
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        staticClass: "input-wrapper",
                                        attrs: {
                                          tag: "div",
                                          mode: "passive",
                                          name: "Confirm Your Password",
                                          rules: "required",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.register
                                                            .password_confirmation,
                                                        expression:
                                                          "register.password_confirmation",
                                                      },
                                                    ],
                                                    class: {
                                                      "is-error": errors[0],
                                                    },
                                                    attrs: {
                                                      placeholder: _vm.$t(
                                                        "page_registration.placeholder_confirm_pass"
                                                      ),
                                                      type: "password",
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.register
                                                          .password_confirmation,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.register,
                                                          "password_confirmation",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  errors[0]
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "error-message",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "i18n",
                                        {
                                          staticClass: "legal-agreement",
                                          attrs: {
                                            path: "page_registration.agreement",
                                            tag: "p",
                                          },
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "DynamicPage",
                                                  params: {
                                                    slug: "terms-of-service",
                                                  },
                                                },
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.termsOfService.title)
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "DynamicPage",
                                                  params: {
                                                    slug: "privacy-policy",
                                                  },
                                                },
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.privacyPolicy.title)
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "container center" },
                                        [
                                          _c("AuthButton", {
                                            attrs: {
                                              icon: "chevron-right",
                                              text: _vm.$t(
                                                "page_registration.button_create_account"
                                              ),
                                              loading: _vm.isLoading,
                                              disabled: _vm.isLoading,
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "additional-link" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "page_registration.have_an_account"
                                              )
                                            ) + "\n              "
                                          ),
                                          _c(
                                            "router-link",
                                            {
                                              attrs: { to: { name: "SignIn" } },
                                            },
                                            [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "page_forgotten_password.password_remember_button"
                                                    )
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ],
                          null,
                          false,
                          3261564473
                        ),
                      })
                    : _c("div", { staticClass: "container" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _c("ProfileForm", {
                              attrs: {
                                email: _vm.register.email,
                                name: _vm.register.name,
                              },
                              on: { token: _vm.signUp },
                            }),
                          ],
                          1
                        ),
                      ]),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& */ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&");
/* harmony import */ var _AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& */ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cf0b724",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/AuthContentWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/StepperTab.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Others/StepperTab.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepperTab_vue_vue_type_template_id_4cd7e675_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true& */ "./resources/js/components/Others/StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true&");
/* harmony import */ var _StepperTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepperTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/StepperTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StepperTab_vue_vue_type_style_index_0_id_4cd7e675_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss& */ "./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StepperTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepperTab_vue_vue_type_template_id_4cd7e675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepperTab_vue_vue_type_template_id_4cd7e675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cd7e675",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/StepperTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/StepperTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Others/StepperTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StepperTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_style_index_0_id_4cd7e675_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=style&index=0&id=4cd7e675&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_style_index_0_id_4cd7e675_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_style_index_0_id_4cd7e675_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_style_index_0_id_4cd7e675_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_style_index_0_id_4cd7e675_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Others/StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_template_id_4cd7e675_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/StepperTab.vue?vue&type=template&id=4cd7e675&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_template_id_4cd7e675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepperTab_vue_vue_type_template_id_4cd7e675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Signature/ProfileForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Signature/ProfileForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileForm_vue_vue_type_template_id_69239abb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=template&id=69239abb&scoped=true& */ "./resources/js/components/Signature/ProfileForm.vue?vue&type=template&id=69239abb&scoped=true&");
/* harmony import */ var _ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Signature/ProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileForm_vue_vue_type_style_index_0_id_69239abb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss& */ "./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileForm_vue_vue_type_template_id_69239abb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileForm_vue_vue_type_template_id_69239abb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69239abb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Signature/ProfileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Signature/ProfileForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Signature/ProfileForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_69239abb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=style&index=0&id=69239abb&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_69239abb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_69239abb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_69239abb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_69239abb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Signature/ProfileForm.vue?vue&type=template&id=69239abb&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Signature/ProfileForm.vue?vue&type=template&id=69239abb&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_69239abb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=template&id=69239abb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Signature/ProfileForm.vue?vue&type=template&id=69239abb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_69239abb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_69239abb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Auth/SignUp.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Auth/SignUp.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUp_vue_vue_type_template_id_e1fb3060_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=e1fb3060&scoped=true& */ "./resources/js/views/Auth/SignUp.vue?vue&type=template&id=e1fb3060&scoped=true&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SignUp_vue_vue_type_style_index_0_id_e1fb3060_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss& */ "./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_e1fb3060_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUp_vue_vue_type_template_id_e1fb3060_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e1fb3060",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/SignUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/SignUp.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Auth/SignUp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_e1fb3060_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=style&index=0&id=e1fb3060&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_e1fb3060_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_e1fb3060_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_e1fb3060_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_e1fb3060_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Auth/SignUp.vue?vue&type=template&id=e1fb3060&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Auth/SignUp.vue?vue&type=template&id=e1fb3060&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_e1fb3060_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=template&id=e1fb3060&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/SignUp.vue?vue&type=template&id=e1fb3060&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_e1fb3060_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_e1fb3060_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);