(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/sign"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Sign.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FilesView_MediaFullPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/MediaFullPreview */ "./resources/js/components/FilesView/MediaFullPreview.vue");
/* harmony import */ var pdfvuer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfvuer */ "./node_modules/pdfvuer/dist/pdfvuer.umd.js");
/* harmony import */ var pdfvuer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfvuer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "./resources/js/utils.js");
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdf-lib */ "./node_modules/pdf-lib/es/index.js");
/* harmony import */ var _components_FilesView_OTPModal_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/FilesView/OTPModal.vue */ "./resources/js/components/FilesView/OTPModal.vue");


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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SignView",
  components: {
    FilePreviewMedia: _components_FilesView_MediaFullPreview__WEBPACK_IMPORTED_MODULE_1__["default"],
    pdf: pdfvuer__WEBPACK_IMPORTED_MODULE_2___default.a,
    pdfx: vue_pdf__WEBPACK_IMPORTED_MODULE_3__["default"],
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__["SearchIcon"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__["PlusIcon"],
    MinusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__["MinusIcon"],
    OTPModal: _components_FilesView_OTPModal_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  computed: {
    filename: function filename() {
      var name = this.$route.params["fileId"];
      var ext = this.$route.query["type"];
      return name + "." + ext;
    },
    fileUrl: function fileUrl() {
      // get host of current website
      var endpoint = window.location.origin;
      return endpoint + "/file/" + this.filename;
    }
  },
  methods: {
    signDocument: function signDocument(otp) {
      this.isOTPModalOpen = false;
      this.$store.dispatch("signDocument", {
        file: this.pdf64,
        page: this.numPages,
        otp: otp,
        title: this.filename,
        signPos: this.signPos,
        reason: "Acceptance"
      });
    },
    setPageNumber: function setPageNumber(sum) {
      if (this.numPages !== 0) {
        this.numPages = sum;
      }
    },
    setSignPosition: function setSignPosition(pdfDoc) {
      // Get the last page of the document
      var pages = pdfDoc.getPages();
      var firstPage = pages[pages.length - 1]; // Get the width and height of the first page

      var _firstPage$getSize = firstPage.getSize(),
          width = _firstPage$getSize.width,
          height = _firstPage$getSize.height;

      this.signPos = {
        x: width * 0.15,
        y: height * 0.15
      };
    },
    getPdf: function getPdf() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, pdfdata, pdfbin, pdfDoc;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.pdfdata = undefined;
                _this.numPages = 0;
                _context.next = 4;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["createBlobFromFile"])(_this.fileUrl);

              case 4:
                data = _context.sent;
                _context.next = 7;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["createFileBlob"])(data);

              case 7:
                pdfdata = _context.sent;
                pdfbin = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["convertDataURIToBinary"])(pdfdata);
                _context.next = 11;
                return pdf_lib__WEBPACK_IMPORTED_MODULE_8__["PDFDocument"].load(pdfbin);

              case 11:
                pdfDoc = _context.sent;
                _this.numPages = pdfDoc.getPages().length;
                _this.raw = pdfDoc;
                _this.pdfbin = pdfbin;
                _this.pdf64 = pdfdata;

                _this.setSignPosition(pdfDoc);

                _this.pdfdata = vue_pdf__WEBPACK_IMPORTED_MODULE_3__["default"].createLoadingTask(pdfbin);
                setTimeout(function () {
                  _this.$refs.pdfwrapper.addEventListener("scroll", function (e) {
                    // get scroll position
                    var scrollTop = e.target.scrollTop; // get height of the scroll

                    var scrollHeight = e.target.scrollHeight; // get percetage scroll

                    var scrollPercent = scrollTop / scrollHeight * 100; // get interpolated scroll percentage into range pages

                    var page = Math.round(scrollPercent / 100 * _this.numPages);

                    if (page !== _this.currentIndex && page <= _this.numPages) {
                      _this.currentIndex = page;
                    }
                  });
                }, 1000);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    checkSign: function checkSign() {
      if (this.$store.getters.isLogged === undefined) {
        this.$router.push({
          name: "SignUp",
          query: {
            ref: this.$route.name
          }
        });
      } else if (!this.$store.getters.token) {
        this.$router.push({
          name: "Profile",
          query: {
            create_signature: true,
            msg: "Please create a signature",
            redirect: window.location.href
          }
        });
      }

      this.isOTPModalOpen = true;
    },
    getFilesForView: function getFilesForView() {
      var _this2 = this;

      var requestedFile = this.fileInfoDetail[0];
      this.data.map(function (element) {
        if (requestedFile.mimetype === "pdf") {
          if (element.mimetype === "pdf") _this2.files.push(element);
        } else {
          if (element.type === requestedFile.type) _this2.files.push(element);
        }
      });
      this.files.forEach(function (element, index) {
        if (element.id === _this2.fileInfoDetail[0].id) {
          _this2.currentIndex = index;
        }
      });
    },
    increaseSizeOfPDF: function increaseSizeOfPDF() {
      _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("document-zoom:in");
    },
    decreaseSizeOfPDF: function decreaseSizeOfPDF() {
      _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("document-zoom:out");
    }
  },
  data: function data() {
    return {
      pdfdata: undefined,
      pdfbin: undefined,
      pdf64: undefined,
      signPos: undefined,
      isOTPModalOpen: false,
      numPages: 0,
      currentIndex: 0,
      raw: undefined,
      files: [],
      documentSize: 50
    };
  },
  created: function created() {
    var _this3 = this;

    // Set zoom size
    this.documentSize = window.innerWidth < 960 ? 100 : 50;
    _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$on("file-preview:next", function () {
      return _this3.next();
    });
    _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$on("file-preview:prev", function () {
      return _this3.prev();
    });
    _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$on("document-zoom:in", function () {
      if (_this3.documentSize < 100) _this3.documentSize += 10;
    });
    _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$on("document-zoom:out", function () {
      if (_this3.documentSize > 40) _this3.documentSize -= 10;
    });
    this.getPdf();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-wrapper[data-v-230704c3] {\n  width: 100%;\n  position: absolute;\n  inset: 0;\n  background-color: #082247;\n  max-height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.header[data-v-230704c3] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  width: 100%;\n  background: #202d7c;\n  flex-direction: column;\n}\n.header .logo[data-v-230704c3] {\n  height: 2rem;\n}\n.header .logo img[data-v-230704c3] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.header .btn-sign[data-v-230704c3] {\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  color: white;\n  background-color: transparent;\n  border: 2px solid white;\n  margin-top: 1rem;\n  font-size: 0.75rem;\n}\n.header .btn-sign[data-v-230704c3]:hover {\n  border-color: transparent;\n  cursor: pointer;\n}\n.footer[data-v-230704c3] {\n  margin-top: auto;\n  padding: 1rem 3rem;\n  background-color: #011027;\n  z-index: 99;\n}\n.footer p[data-v-230704c3] {\n  color: #fff;\n}\n#pdf-wrapper[data-v-230704c3] {\n  overflow-y: scroll;\n  margin: 0 auto;\n  position: absolute;\n  top: 8rem;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  height: 80%;\n}\n@media screen and (min-width: 640px) {\n#pdf-wrapper[data-v-230704c3] {\n    top: 6rem;\n}\n}\n.file-wrapper-preview[data-v-230704c3] {\n  width: 100%;\n  height: 100%;\n  padding: 30px 0px;\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent !important;\n}\n.file-wrapper-preview .file-wrapper[data-v-230704c3] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.file-wrapper-preview .file-wrapper .file-shadow[data-v-230704c3] {\n  box-shadow: 0 8px 40px rgba(17, 26, 52, 0.05);\n}\n.file-wrapper-preview .file-wrapper .file[data-v-230704c3] {\n  max-width: 100%;\n  max-height: 100%;\n  align-self: center;\n}\n.file-wrapper-preview .file-wrapper .audio[data-v-230704c3] {\n  border-radius: 28px;\n}\n.file-wrapper-preview .file-wrapper img[data-v-230704c3] {\n  border-radius: 4px;\n}\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-230704c3] {\n  max-width: 1080px;\n  max-height: 100%;\n}\n@media (min-width: 1200px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-230704c3] {\n    max-width: 800px;\n}\n}\n@media (min-width: 1920px) and (max-width: 2560px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-230704c3] {\n    max-width: 1080px;\n}\n}\n@media (min-width: 2560px) and (max-width: 3840px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-230704c3] {\n    max-width: 1440px;\n}\n}\n@media (min-width: 3840px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-230704c3] {\n    max-width: 2160px;\n}\n}\n.file-wrapper-preview .file-wrapper .video-wrapper .video[data-v-230704c3] {\n  max-width: 100%;\n  max-height: 100%;\n  align-self: center;\n}\n@media (prefers-color-scheme: dark) {\n.navigation-arrows .prev[data-v-230704c3],\n  .navigation-arrows .next[data-v-230704c3] {\n    color: #A4ADB6;\n    filter: drop-shadow(0px 1px 0 #111314);\n}\n.file-wrapper-preview .file-wrapper .file-shadow[data-v-230704c3] {\n    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n}\n}\n.utilities[data-v-230704c3] {\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 100;\n  position: fixed;\n  bottom: 5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  padding: 0.8rem 1.2rem;\n  border-radius: 0.7rem;\n}\n.utilities > *[data-v-230704c3] {\n  color: white !important;\n}\n.utilities > p[data-v-230704c3] {\n  font-size: 0.75em;\n  font-weight: bold;\n  margin-right: 1rem;\n  white-space: nowrap;\n}\n.utilities .zoom[data-v-230704c3] {\n  display: flex;\n}\n.utilities .zoom > *[data-v-230704c3] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.utilities .zoom *[data-v-230704c3] {\n  background-color: transparent;\n  color: white;\n  border: none;\n}\n@media screen and (min-width: 640px) {\n.header[data-v-230704c3] {\n    padding: 1.5rem 5rem;\n    flex-direction: row;\n}\n.header .logo[data-v-230704c3] {\n    width: 8rem;\n    height: auto;\n}\n.header .btn-sign[data-v-230704c3] {\n    margin-top: 0;\n    font-size: 1rem;\n}\n.utilities > p[data-v-230704c3] {\n    font-size: 0.875em;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=template&id=230704c3&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Sign.vue?vue&type=template&id=230704c3&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "sign-wrapper" },
    [
      _c(
        "header",
        { staticClass: "header" },
        [
          _c("router-link", { staticClass: "logo", attrs: { to: "/files" } }, [
            _c("img", {
              attrs: { src: "/assets/images/logo.png", alt: "Logo  " },
            }),
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn-sign", on: { click: _vm.checkSign } },
            [_vm._v("Sign Document")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("main", [
        _c("div", { staticClass: "file-wrapper-preview" }, [
          _c(
            "div",
            {
              ref: "pdfwrapper",
              style: { width: _vm.documentSize + "%" },
              attrs: { id: "pdf-wrapper" },
            },
            [
              _vm._l(_vm.numPages, function (i, k) {
                return _c(
                  "div",
                  { key: k, staticStyle: { "margin-bottom": "16px" } },
                  [_c("pdfx", { attrs: { src: _vm.pdfdata, page: i } })],
                  1
                )
              }),
              _vm._v(" "),
              _c("div", { staticClass: "utilities" }, [
                _c("p", [
                  _vm._v(
                    "Page " +
                      _vm._s(_vm.currentIndex + 1) +
                      " / " +
                      _vm._s(_vm.numPages)
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "zoom" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn-zoom-out",
                        on: { click: _vm.decreaseSizeOfPDF },
                      },
                      [_c("minus-icon", { attrs: { size: "1x" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("search-icon", { attrs: { size: "1.2x" } }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-zoom-in",
                        on: { click: _vm.increaseSizeOfPDF },
                      },
                      [_c("plus-icon", { attrs: { size: "1x" } })],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            2
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("OTPModal", {
        attrs: { open: _vm.isOTPModalOpen },
        on: { close: _vm.signDocument },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("p", [_vm._v("Powered by Xignature")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/*! exports provided: createFileBlob, createBlobFromFile, convertDataURIToBinary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFileBlob", function() { return createFileBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlobFromFile", function() { return createBlobFromFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataURIToBinary", function() { return convertDataURIToBinary; });
function createFileBlob(file) {
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
function createBlobFromFile(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';

    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error('Could not load image'));
      }
    };

    xhr.send();
  });
}
var BASE64_MARKER = ';base64,';
function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }

  return array;
}

/***/ }),

/***/ "./resources/js/views/FilePages/Sign.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/FilePages/Sign.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sign_vue_vue_type_template_id_230704c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sign.vue?vue&type=template&id=230704c3&scoped=true& */ "./resources/js/views/FilePages/Sign.vue?vue&type=template&id=230704c3&scoped=true&");
/* harmony import */ var _Sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sign.vue?vue&type=script&lang=js& */ "./resources/js/views/FilePages/Sign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var pdfvuer_dist_pdfvuer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfvuer/dist/pdfvuer.css?vue&type=style&index=0&lang=css& */ "./node_modules/pdfvuer/dist/pdfvuer.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Sign_vue_vue_type_style_index_1_id_230704c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true& */ "./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sign_vue_vue_type_template_id_230704c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sign_vue_vue_type_template_id_230704c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "230704c3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FilePages/Sign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FilePages/Sign.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/FilePages/Sign.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_style_index_1_id_230704c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=style&index=1&id=230704c3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_style_index_1_id_230704c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_style_index_1_id_230704c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_style_index_1_id_230704c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_style_index_1_id_230704c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/FilePages/Sign.vue?vue&type=template&id=230704c3&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/FilePages/Sign.vue?vue&type=template&id=230704c3&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_template_id_230704c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sign.vue?vue&type=template&id=230704c3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Sign.vue?vue&type=template&id=230704c3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_template_id_230704c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sign_vue_vue_type_template_id_230704c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);