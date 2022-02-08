(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/billings-detail"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/SelectInput */ "./resources/js/components/Others/Forms/SelectInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);


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











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BillingsDetail',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["SettingsIcon"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_6__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__["required"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])(['countries'])),
  data: function data() {
    return {
      isLoading: false,
      billingInformation: {
        billing_phone_number: '',
        billing_postal_code: '',
        billing_vat_number: '',
        billing_address: '',
        billing_country: '',
        billing_state: '',
        billing_city: '',
        billing_name: ''
      }
    };
  },
  methods: {
    billingInformationSubmit: function billingInformationSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.billingInformation.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/api/setup/stripe-billings', _this.billingInformation).then(function () {
                  // Redirect to next step
                  _this.$router.push({
                    name: 'SubscriptionPlans'
                  });
                })["catch"](function (error) {})["finally"](function () {
                  _this.isLoading = false;
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.$scrollTop();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-291c1a22] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-291c1a22] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-291c1a22] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-291c1a22] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-291c1a22] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-291c1a22] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-291c1a22] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-291c1a22] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-291c1a22]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-291c1a22] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-291c1a22] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-291c1a22] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-291c1a22] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-291c1a22] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-291c1a22] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-291c1a22] {\n  margin-left: 20px;\n}\n.error-message[data-v-291c1a22] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-291c1a22] {\n  width: 100%;\n}\ntextarea[data-v-291c1a22],\ninput[type=\"password\"][data-v-291c1a22],\ninput[type=\"text\"][data-v-291c1a22],\ninput[type=\"number\"][data-v-291c1a22],\ninput[type=\"email\"][data-v-291c1a22] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-291c1a22],\ninput[type=\"password\"].is-error[data-v-291c1a22],\ninput[type=\"text\"].is-error[data-v-291c1a22],\ninput[type=\"number\"].is-error[data-v-291c1a22],\ninput[type=\"email\"].is-error[data-v-291c1a22] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-291c1a22]::-moz-placeholder, input[type=\"password\"][data-v-291c1a22]::-moz-placeholder, input[type=\"text\"][data-v-291c1a22]::-moz-placeholder, input[type=\"number\"][data-v-291c1a22]::-moz-placeholder, input[type=\"email\"][data-v-291c1a22]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-291c1a22]:-ms-input-placeholder, input[type=\"password\"][data-v-291c1a22]:-ms-input-placeholder, input[type=\"text\"][data-v-291c1a22]:-ms-input-placeholder, input[type=\"number\"][data-v-291c1a22]:-ms-input-placeholder, input[type=\"email\"][data-v-291c1a22]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-291c1a22]::placeholder,\ninput[type=\"password\"][data-v-291c1a22]::placeholder,\ninput[type=\"text\"][data-v-291c1a22]::placeholder,\ninput[type=\"number\"][data-v-291c1a22]::placeholder,\ninput[type=\"email\"][data-v-291c1a22]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-291c1a22]:focus,\ninput[type=\"password\"][data-v-291c1a22]:focus,\ninput[type=\"text\"][data-v-291c1a22]:focus,\ninput[type=\"number\"][data-v-291c1a22]:focus,\ninput[type=\"email\"][data-v-291c1a22]:focus {\n  border-color: #0667B3;\n  box-shadow: 0 1px 5px rgba(6, 103, 179, 0.3);\n}\ntextarea[disabled][data-v-291c1a22],\ninput[type=\"password\"][disabled][data-v-291c1a22],\ninput[type=\"text\"][disabled][data-v-291c1a22],\ninput[type=\"number\"][disabled][data-v-291c1a22],\ninput[type=\"email\"][disabled][data-v-291c1a22] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-291c1a22] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-291c1a22], .additional-link a[data-v-291c1a22] {\n  color: #0667B3;\n  cursor: pointer;\n}\n.additional-link b[data-v-291c1a22]:hover, .additional-link a[data-v-291c1a22]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-291c1a22] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-291c1a22] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-291c1a22], .form textarea[data-v-291c1a22] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-291c1a22] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-291c1a22] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-291c1a22] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-291c1a22] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-291c1a22] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-291c1a22] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-291c1a22] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-291c1a22] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-291c1a22],\n  input[type=\"password\"][data-v-291c1a22],\n  input[type=\"number\"][data-v-291c1a22],\n  input[type=\"text\"][data-v-291c1a22],\n  input[type=\"email\"][data-v-291c1a22] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-291c1a22] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-291c1a22] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-291c1a22] {\n    color: #1B2539;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-291c1a22] {\n    color: #1B2539;\n}\ntextarea[data-v-291c1a22],\n  input[type=\"password\"][data-v-291c1a22],\n  input[type=\"text\"][data-v-291c1a22],\n  input[type=\"number\"][data-v-291c1a22],\n  input[type=\"email\"][data-v-291c1a22] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #1B2539;\n}\ntextarea[data-v-291c1a22]::-moz-placeholder, input[type=\"password\"][data-v-291c1a22]::-moz-placeholder, input[type=\"text\"][data-v-291c1a22]::-moz-placeholder, input[type=\"number\"][data-v-291c1a22]::-moz-placeholder, input[type=\"email\"][data-v-291c1a22]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-291c1a22]:-ms-input-placeholder, input[type=\"password\"][data-v-291c1a22]:-ms-input-placeholder, input[type=\"text\"][data-v-291c1a22]:-ms-input-placeholder, input[type=\"number\"][data-v-291c1a22]:-ms-input-placeholder, input[type=\"email\"][data-v-291c1a22]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-291c1a22]::placeholder,\n  input[type=\"password\"][data-v-291c1a22]::placeholder,\n  input[type=\"text\"][data-v-291c1a22]::placeholder,\n  input[type=\"number\"][data-v-291c1a22]::placeholder,\n  input[type=\"email\"][data-v-291c1a22]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-291c1a22],\n  input[type=\"password\"][disabled][data-v-291c1a22],\n  input[type=\"text\"][disabled][data-v-291c1a22],\n  input[type=\"number\"][disabled][data-v-291c1a22],\n  input[type=\"email\"][disabled][data-v-291c1a22] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-291c1a22] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-291c1a22] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-291c1a22] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-291c1a22] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-291c1a22] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-291c1a22] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-291c1a22] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-291c1a22] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-291c1a22] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-291c1a22] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-291c1a22] {\n    width: 100%;\n}\n.auth-form h1[data-v-291c1a22] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-291c1a22] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-291c1a22] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-291c1a22] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-291c1a22] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-291c1a22] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-291c1a22], .auth-form h2[data-v-291c1a22], .auth-form .additional-link[data-v-291c1a22] {\n    color: #1B2539;\n}\n}\n.content-headline[data-v-291c1a22] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-291c1a22] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-291c1a22] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-291c1a22] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-291c1a22] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-291c1a22] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-291c1a22] {\n  stroke: #0667B3;\n}\n.duplicator .duplicator-item input[data-v-291c1a22],\n.duplicator .duplicator-item textarea[data-v-291c1a22] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-291c1a22] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-291c1a22] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-291c1a22] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-291c1a22] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-291c1a22 5s linear infinite;\n          animation: spinner-data-v-291c1a22 5s linear infinite;\n}\n.title-icon circle[data-v-291c1a22], .title-icon path[data-v-291c1a22] {\n  stroke: #0667B3;\n}\n@-webkit-keyframes spinner-data-v-291c1a22 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-291c1a22 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-291c1a22] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-291c1a22],\n  .duplicator .duplicator-item textarea[data-v-291c1a22] {\n    background: #f4f5f6;\n}\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true& ***!
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
  return _c(
    "AuthContentWrapper",
    { ref: "auth" },
    [
      _c(
        "AuthContent",
        { attrs: { name: "database-credentials", visible: true } },
        [
          _c(
            "div",
            { staticClass: "content-headline" },
            [
              _c("settings-icon", {
                staticClass: "title-icon",
                attrs: { size: "40" },
              }),
              _vm._v(" "),
              _c("h1", [_vm._v("Setup Wizard")]),
              _vm._v(" "),
              _c("h2", [_vm._v("Set up your billing information.")]),
            ],
            1
          ),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "billingInformation",
            staticClass: "form block-form",
            attrs: { tag: "form" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.billingInformationSubmit.apply(null, arguments)
              },
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var invalid = ref.invalid
                  return [
                    _c("FormLabel", [_vm._v("Company Information")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("Company Name:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Billing Name",
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
                                            _vm.billingInformation.billing_name,
                                          expression:
                                            "billingInformation.billing_name",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your company name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value:
                                          _vm.billingInformation.billing_name,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.billingInformation,
                                            "billing_name",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                        _c("label", [_vm._v("VAT Number:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Billing Vat Number",
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
                                            _vm.billingInformation
                                              .billing_vat_number,
                                          expression:
                                            "billingInformation.billing_vat_number",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your VAT number",
                                        type: "text",
                                      },
                                      domProps: {
                                        value:
                                          _vm.billingInformation
                                            .billing_vat_number,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.billingInformation,
                                            "billing_vat_number",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                    _c("FormLabel", { staticClass: "mt-70" }, [
                      _vm._v("Billing Information"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("Billing Country:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Billing Country",
                            rules: "required",
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("SelectInput", {
                                      attrs: {
                                        options: _vm.countries,
                                        placeholder:
                                          "Select your billing country",
                                        isError: errors[0],
                                      },
                                      model: {
                                        value:
                                          _vm.billingInformation
                                            .billing_country,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.billingInformation,
                                            "billing_country",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "billingInformation.billing_country",
                                      },
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                        _c("label", [_vm._v("Billing Address:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Billing Address",
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
                                            _vm.billingInformation
                                              .billing_address,
                                          expression:
                                            "billingInformation.billing_address",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder:
                                          "Type your billing address",
                                        type: "text",
                                      },
                                      domProps: {
                                        value:
                                          _vm.billingInformation
                                            .billing_address,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.billingInformation,
                                            "billing_address",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                    _c("div", { staticClass: "wrapper-inline" }, [
                      _c(
                        "div",
                        { staticClass: "block-wrapper" },
                        [
                          _c("label", [_vm._v("Billing City:")]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            staticClass: "input-wrapper",
                            attrs: {
                              tag: "div",
                              mode: "passive",
                              name: "Billing City",
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
                                              _vm.billingInformation
                                                .billing_city,
                                            expression:
                                              "billingInformation.billing_city",
                                          },
                                        ],
                                        class: { "is-error": errors[0] },
                                        attrs: {
                                          placeholder: "Type your billing city",
                                          type: "text",
                                        },
                                        domProps: {
                                          value:
                                            _vm.billingInformation.billing_city,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.billingInformation,
                                              "billing_city",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      errors[0]
                                        ? _c(
                                            "span",
                                            { staticClass: "error-message" },
                                            [_vm._v(_vm._s(errors[0]))]
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
                          _c("label", [_vm._v("Billing Postal Code:")]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            staticClass: "input-wrapper",
                            attrs: {
                              tag: "div",
                              mode: "passive",
                              name: "Billing Postal Code",
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
                                              _vm.billingInformation
                                                .billing_postal_code,
                                            expression:
                                              "billingInformation.billing_postal_code",
                                          },
                                        ],
                                        class: { "is-error": errors[0] },
                                        attrs: {
                                          placeholder:
                                            "Type your billing postal code",
                                          type: "text",
                                        },
                                        domProps: {
                                          value:
                                            _vm.billingInformation
                                              .billing_postal_code,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.billingInformation,
                                              "billing_postal_code",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      errors[0]
                                        ? _c(
                                            "span",
                                            { staticClass: "error-message" },
                                            [_vm._v(_vm._s(errors[0]))]
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
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("Billing State:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Billing State",
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
                                            _vm.billingInformation
                                              .billing_state,
                                          expression:
                                            "billingInformation.billing_state",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your billing state",
                                        type: "text",
                                      },
                                      domProps: {
                                        value:
                                          _vm.billingInformation.billing_state,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.billingInformation,
                                            "billing_state",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                          _vm._v("Billing Phone Number (optional):"),
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Billing Phone Number",
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
                                            _vm.billingInformation
                                              .billing_phone_number,
                                          expression:
                                            "billingInformation.billing_phone_number",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder:
                                          "Type your billing phone number",
                                        type: "text",
                                      },
                                      domProps: {
                                        value:
                                          _vm.billingInformation
                                            .billing_phone_number,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.billingInformation,
                                            "billing_phone_number",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                      { staticClass: "submit-wrapper" },
                      [
                        _c("AuthButton", {
                          attrs: {
                            icon: "chevron-right",
                            text: "Save and Create Plans",
                            loading: _vm.isLoading,
                            disabled: _vm.isLoading,
                          },
                        }),
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

/***/ "./resources/js/views/SetupWizard/BillingsDetail.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/SetupWizard/BillingsDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BillingsDetail_vue_vue_type_template_id_291c1a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true& */ "./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true&");
/* harmony import */ var _BillingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillingsDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BillingsDetail_vue_vue_type_style_index_0_id_291c1a22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss& */ "./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BillingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BillingsDetail_vue_vue_type_template_id_291c1a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BillingsDetail_vue_vue_type_template_id_291c1a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "291c1a22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetupWizard/BillingsDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BillingsDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_style_index_0_id_291c1a22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=style&index=0&id=291c1a22&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_style_index_0_id_291c1a22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_style_index_0_id_291c1a22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_style_index_0_id_291c1a22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_style_index_0_id_291c1a22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_template_id_291c1a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/BillingsDetail.vue?vue&type=template&id=291c1a22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_template_id_291c1a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingsDetail_vue_vue_type_template_id_291c1a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);