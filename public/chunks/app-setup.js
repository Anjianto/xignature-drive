(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/app-setup"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_Others_Forms_SwitchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/SwitchInput */ "./resources/js/components/Others/Forms/SwitchInput.vue");
/* harmony import */ var _components_Others_Forms_ImageInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/Forms/ImageInput */ "./resources/js/components/Others/Forms/ImageInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);


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













/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EnvironmentSetup',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__["SettingsIcon"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    SwitchInput: _components_Others_Forms_SwitchInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_8__["default"],
    ImageInput: _components_Others_Forms_ImageInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_9__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_11__["required"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      app: {
        title: '',
        description: '',
        logo: undefined,
        logo_horizontal: undefined,
        favicon: undefined,
        contactMail: '',
        googleAnalytics: '',
        defaultStorage: '5',
        userRegistration: 1,
        storageLimitation: 1
      }
    };
  },
  methods: {
    appSetupSubmit: function appSetupSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.appSetup.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Create form

                formData = new FormData(); // Add image to form

                formData.append('title', _this.app.title);
                formData.append('description', _this.app.description);
                formData.append('contactMail', _this.app.contactMail);
                formData.append('userRegistration', Boolean(_this.app.userRegistration) ? 1 : 0);
                formData.append('storageLimitation', Boolean(_this.app.storageLimitation) ? 1 : 0);
                if (_this.app.googleAnalytics) formData.append('googleAnalytics', _this.app.googleAnalytics);
                if (_this.app.defaultStorage) formData.append('defaultStorage', _this.app.defaultStorage);
                if (_this.app.logo) formData.append('logo', _this.app.logo);
                if (_this.app.logo_horizontal) formData.append('logo_horizontal', _this.app.logo_horizontal);
                if (_this.app.favicon) formData.append('favicon', _this.app.favicon); // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('/api/setup/app-setup', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }).then(function (response) {
                  // End loading
                  _this.isLoading = false; // Redirect to next step

                  _this.$router.push({
                    name: 'AdminAccount'
                  });
                })["catch"](function (error) {
                  // End loading
                  _this.isLoading = false;
                });

              case 18:
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-47687dfc] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-47687dfc] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-47687dfc] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-47687dfc] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-47687dfc] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-47687dfc] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-47687dfc] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-47687dfc] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-47687dfc]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-47687dfc] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-47687dfc] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-47687dfc] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-47687dfc] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-47687dfc] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-47687dfc] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-47687dfc] {\n  margin-left: 20px;\n}\n.error-message[data-v-47687dfc] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-47687dfc] {\n  width: 100%;\n}\ntextarea[data-v-47687dfc],\ninput[type=\"password\"][data-v-47687dfc],\ninput[type=\"text\"][data-v-47687dfc],\ninput[type=\"tel\"][data-v-47687dfc],\ninput[type=\"number\"][data-v-47687dfc],\ninput[type=\"email\"][data-v-47687dfc] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-47687dfc],\ninput[type=\"password\"].is-error[data-v-47687dfc],\ninput[type=\"text\"].is-error[data-v-47687dfc],\ninput[type=\"tel\"].is-error[data-v-47687dfc],\ninput[type=\"number\"].is-error[data-v-47687dfc],\ninput[type=\"email\"].is-error[data-v-47687dfc] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-47687dfc]::-moz-placeholder, input[type=\"password\"][data-v-47687dfc]::-moz-placeholder, input[type=\"text\"][data-v-47687dfc]::-moz-placeholder, input[type=\"tel\"][data-v-47687dfc]::-moz-placeholder, input[type=\"number\"][data-v-47687dfc]::-moz-placeholder, input[type=\"email\"][data-v-47687dfc]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-47687dfc]:-ms-input-placeholder, input[type=\"password\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"text\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"tel\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"number\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"email\"][data-v-47687dfc]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-47687dfc]::placeholder,\ninput[type=\"password\"][data-v-47687dfc]::placeholder,\ninput[type=\"text\"][data-v-47687dfc]::placeholder,\ninput[type=\"tel\"][data-v-47687dfc]::placeholder,\ninput[type=\"number\"][data-v-47687dfc]::placeholder,\ninput[type=\"email\"][data-v-47687dfc]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-47687dfc]:focus,\ninput[type=\"password\"][data-v-47687dfc]:focus,\ninput[type=\"text\"][data-v-47687dfc]:focus,\ninput[type=\"tel\"][data-v-47687dfc]:focus,\ninput[type=\"number\"][data-v-47687dfc]:focus,\ninput[type=\"email\"][data-v-47687dfc]:focus {\n  border-color: #0667B3;\n  box-shadow: 0 1px 5px rgba(6, 103, 179, 0.3);\n}\ntextarea[disabled][data-v-47687dfc],\ninput[type=\"password\"][disabled][data-v-47687dfc],\ninput[type=\"text\"][disabled][data-v-47687dfc],\ninput[type=\"tel\"][disabled][data-v-47687dfc],\ninput[type=\"number\"][disabled][data-v-47687dfc],\ninput[type=\"email\"][disabled][data-v-47687dfc] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-47687dfc] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-47687dfc], .additional-link a[data-v-47687dfc] {\n  color: #0667B3;\n  cursor: pointer;\n}\n.additional-link b[data-v-47687dfc]:hover, .additional-link a[data-v-47687dfc]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-47687dfc] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-47687dfc] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-47687dfc], .form textarea[data-v-47687dfc] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-47687dfc] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-47687dfc] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-47687dfc] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-47687dfc] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-47687dfc] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-47687dfc] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-47687dfc] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-47687dfc] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-47687dfc],\n  input[type=\"password\"][data-v-47687dfc],\n  input[type=\"number\"][data-v-47687dfc],\n  input[type=\"tel\"][data-v-47687dfc],\n  input[type=\"text\"][data-v-47687dfc],\n  input[type=\"email\"][data-v-47687dfc] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-47687dfc] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-47687dfc] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-47687dfc] {\n    color: #1B2539;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-47687dfc] {\n    color: #1B2539;\n}\ntextarea[data-v-47687dfc],\n  input[type=\"password\"][data-v-47687dfc],\n  input[type=\"text\"][data-v-47687dfc],\n  input[type=\"number\"][data-v-47687dfc],\n  input[type=\"tel\"][data-v-47687dfc],\n  input[type=\"email\"][data-v-47687dfc] {\n    border-color: #f4f5f6;\n    background: #f4f5f6;\n    color: #1B2539;\n}\ntextarea[data-v-47687dfc]::-moz-placeholder, input[type=\"password\"][data-v-47687dfc]::-moz-placeholder, input[type=\"text\"][data-v-47687dfc]::-moz-placeholder, input[type=\"number\"][data-v-47687dfc]::-moz-placeholder, input[type=\"tel\"][data-v-47687dfc]::-moz-placeholder, input[type=\"email\"][data-v-47687dfc]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-47687dfc]:-ms-input-placeholder, input[type=\"password\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"text\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"number\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"tel\"][data-v-47687dfc]:-ms-input-placeholder, input[type=\"email\"][data-v-47687dfc]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-47687dfc]::placeholder,\n  input[type=\"password\"][data-v-47687dfc]::placeholder,\n  input[type=\"text\"][data-v-47687dfc]::placeholder,\n  input[type=\"number\"][data-v-47687dfc]::placeholder,\n  input[type=\"tel\"][data-v-47687dfc]::placeholder,\n  input[type=\"email\"][data-v-47687dfc]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-47687dfc],\n  input[type=\"password\"][disabled][data-v-47687dfc],\n  input[type=\"text\"][disabled][data-v-47687dfc],\n  input[type=\"number\"][disabled][data-v-47687dfc],\n  input[type=\"tel\"][disabled][data-v-47687dfc],\n  input[type=\"email\"][disabled][data-v-47687dfc] {\n    background: #f4f5f6;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-47687dfc] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-47687dfc] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-47687dfc] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-47687dfc] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-47687dfc] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-47687dfc] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-47687dfc] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-47687dfc] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-47687dfc] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-47687dfc] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-47687dfc] {\n    width: 100%;\n}\n.auth-form h1[data-v-47687dfc] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-47687dfc] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-47687dfc] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-47687dfc] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-47687dfc] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-47687dfc] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-47687dfc], .auth-form h2[data-v-47687dfc], .auth-form .additional-link[data-v-47687dfc] {\n    color: #1B2539;\n}\n}\n.content-headline[data-v-47687dfc] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-47687dfc] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-47687dfc] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-47687dfc] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-47687dfc] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-47687dfc] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-47687dfc] {\n  stroke: #0667B3;\n}\n.duplicator .duplicator-item input[data-v-47687dfc],\n.duplicator .duplicator-item textarea[data-v-47687dfc] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-47687dfc] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-47687dfc] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-47687dfc] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-47687dfc] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-47687dfc 5s linear infinite;\n          animation: spinner-data-v-47687dfc 5s linear infinite;\n}\n.title-icon circle[data-v-47687dfc], .title-icon path[data-v-47687dfc] {\n  stroke: #0667B3;\n}\n@-webkit-keyframes spinner-data-v-47687dfc {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-47687dfc {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-47687dfc] {\n    background: #f4f5f6;\n}\n.duplicator .duplicator-item input[data-v-47687dfc],\n  .duplicator .duplicator-item textarea[data-v-47687dfc] {\n    background: #f4f5f6;\n}\n}\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=template&id=47687dfc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=template&id=47687dfc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
              _c("h2", [
                _vm._v("Set up your application appearance, analytics, etc."),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "appSetup",
            staticClass: "form block-form",
            attrs: { tag: "form" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.appSetupSubmit.apply(null, arguments)
              },
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var invalid = ref.invalid
                  return [
                    _c("FormLabel", [_vm._v("General Settings")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("App Title:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "App Title",
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
                                          value: _vm.app.title,
                                          expression: "app.title",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your app title",
                                        type: "text",
                                      },
                                      domProps: { value: _vm.app.title },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.app,
                                            "title",
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
                        _c("label", [_vm._v("App Description:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "App Description",
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
                                          value: _vm.app.description,
                                          expression: "app.description",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder:
                                          "Type your app description",
                                        type: "text",
                                      },
                                      domProps: { value: _vm.app.description },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.app,
                                            "description",
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
                        _c("label", [_vm._v("App Logo (optional):")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "App Logo",
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("ImageInput", {
                                      attrs: { error: errors[0] },
                                      model: {
                                        value: _vm.app.logo,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.app, "logo", $$v)
                                        },
                                        expression: "app.logo",
                                      },
                                    }),
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
                          _vm._v("App Logo Horizontal (optional):"),
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "App Logo",
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("ImageInput", {
                                      attrs: { error: errors[0] },
                                      model: {
                                        value: _vm.app.logo_horizontal,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.app,
                                            "logo_horizontal",
                                            $$v
                                          )
                                        },
                                        expression: "app.logo_horizontal",
                                      },
                                    }),
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
                        _c("label", [_vm._v("App Favicon (optional):")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "App Favicon",
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("ImageInput", {
                                      attrs: { error: errors[0] },
                                      model: {
                                        value: _vm.app.favicon,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.app, "favicon", $$v)
                                        },
                                        expression: "app.favicon",
                                      },
                                    }),
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
                      _vm._v("Others Information"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("Contact Email:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Contact Email",
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
                                          value: _vm.app.contactMail,
                                          expression: "app.contactMail",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your contact email",
                                        type: "email",
                                      },
                                      domProps: { value: _vm.app.contactMail },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.app,
                                            "contactMail",
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
                          _vm._v("Google Analytics Code (optional):"),
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Google Analytics Code",
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
                                          value: _vm.app.googleAnalytics,
                                          expression: "app.googleAnalytics",
                                        },
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder:
                                          "Paste your Google Analytics Code",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: _vm.app.googleAnalytics,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.app,
                                            "googleAnalytics",
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
                    _c("div", { staticClass: "block-wrapper" }, [
                      _c("div", { staticClass: "input-wrapper" }, [
                        _c(
                          "div",
                          { staticClass: "inline-wrapper" },
                          [
                            _c("div", { staticClass: "switch-label" }, [
                              _c("label", { staticClass: "input-label" }, [
                                _vm._v("Storage Limitation:"),
                              ]),
                              _vm._v(" "),
                              _c("small", { staticClass: "input-help" }, [
                                _vm._v(
                                  "If this value is off, all users will have infinity storage capacity and you won't be "
                                ),
                                _c("br"),
                                _vm._v(
                                  "able to charge your users for storage plan."
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("SwitchInput", {
                              staticClass: "switch",
                              attrs: { state: _vm.app.storageLimitation },
                              model: {
                                value: _vm.app.storageLimitation,
                                callback: function ($$v) {
                                  _vm.$set(_vm.app, "storageLimitation", $$v)
                                },
                                expression: "app.storageLimitation",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.app.storageLimitation
                      ? _c(
                          "div",
                          { staticClass: "block-wrapper" },
                          [
                            _c("label", [
                              _vm._v("Default Storage Space for Accounts:"),
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              staticClass: "input-wrapper",
                              attrs: {
                                tag: "div",
                                mode: "passive",
                                name: "Default Storage Space",
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
                                              value: _vm.app.defaultStorage,
                                              expression: "app.defaultStorage",
                                            },
                                          ],
                                          class: { "is-error": errors[0] },
                                          attrs: {
                                            min: "1",
                                            max: "999999999",
                                            placeholder:
                                              "Set default storage space in GB",
                                            type: "number",
                                          },
                                          domProps: {
                                            value: _vm.app.defaultStorage,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.app,
                                                "defaultStorage",
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
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "block-wrapper" }, [
                      _c("div", { staticClass: "input-wrapper" }, [
                        _c(
                          "div",
                          { staticClass: "inline-wrapper" },
                          [
                            _c("div", { staticClass: "switch-label" }, [
                              _c("label", { staticClass: "input-label" }, [
                                _vm._v("Allow User Registration:"),
                              ]),
                              _vm._v(" "),
                              _c("small", { staticClass: "input-help" }, [
                                _vm._v(
                                  "You can disable public registration for new users. You will still able to "
                                ),
                                _c("br"),
                                _vm._v(
                                  "create new users in administration panel."
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("SwitchInput", {
                              staticClass: "switch",
                              attrs: { state: _vm.app.userRegistration },
                              model: {
                                value: _vm.app.userRegistration,
                                callback: function ($$v) {
                                  _vm.$set(_vm.app, "userRegistration", $$v)
                                },
                                expression: "app.userRegistration",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "submit-wrapper" },
                      [
                        _c("AuthButton", {
                          attrs: {
                            icon: "chevron-right",
                            text: "Save and Create Admin",
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

/***/ "./resources/js/views/SetupWizard/AppSetup.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/SetupWizard/AppSetup.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSetup_vue_vue_type_template_id_47687dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSetup.vue?vue&type=template&id=47687dfc&scoped=true& */ "./resources/js/views/SetupWizard/AppSetup.vue?vue&type=template&id=47687dfc&scoped=true&");
/* harmony import */ var _AppSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSetup.vue?vue&type=script&lang=js& */ "./resources/js/views/SetupWizard/AppSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppSetup_vue_vue_type_style_index_0_id_47687dfc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss& */ "./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSetup_vue_vue_type_template_id_47687dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSetup_vue_vue_type_template_id_47687dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47687dfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetupWizard/AppSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetupWizard/AppSetup.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/AppSetup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_style_index_0_id_47687dfc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=style&index=0&id=47687dfc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_style_index_0_id_47687dfc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_style_index_0_id_47687dfc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_style_index_0_id_47687dfc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_style_index_0_id_47687dfc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/SetupWizard/AppSetup.vue?vue&type=template&id=47687dfc&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/AppSetup.vue?vue&type=template&id=47687dfc&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_template_id_47687dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSetup.vue?vue&type=template&id=47687dfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/AppSetup.vue?vue&type=template&id=47687dfc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_template_id_47687dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSetup_vue_vue_type_template_id_47687dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);