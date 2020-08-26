(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{13:function(e,a,t){"use strict";var n={name:"FormLabel",components:{Edit2Icon:t(1).m}},r=(t(230),t(0)),o=Object(r.a)(n,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},142:function(e,a,t){var n=t(405);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)},15:function(e,a,t){"use strict";var n={name:"PageTab",props:["isLoading"],components:{Spinner:t(19).a}},r=(t(234),t(0)),o=Object(r.a)(n,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"page-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[a("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"4339da66",null);a.a=o.exports},16:function(e,a,t){"use strict";var n={name:"PageTabGroup"},r=(t(232),t(0)),o=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);a.a=o.exports},173:function(e,a,t){"use strict";var n={props:["label","name","avatar","info","error"],data:function(){return{imagePreview:void 0}},watch:{imagePreview:function(e){this.$store.commit("UPDATE_AVATAR",e)}},methods:{showImagePreview:function(e){var a=this,t=e.target.files[0].name,n=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg"].includes(n)){var r=e.target.files[0],o=new FileReader;o.onload=function(){return a.imagePreview=o.result},o.readAsDataURL(r),this.$updateImage("/user/profile","avatar",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.avatar&&(this.imagePreview=this.avatar)}},r=(t(282),t(0)),o=Object(r.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"dropzone",class:{"is-error":e.error}},[t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file",name:e.name},on:{change:function(a){return e.showImagePreview(a)}}}),e._v(" "),e.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),e.imagePreview?t("img",{ref:"image",staticClass:"image-preview blurred",attrs:{src:e.imagePreview}}):e._e()])}),[],!1,null,"fa58d4b2",null);a.a=o.exports},174:function(e,a,t){"use strict";var n={name:"TextLabel"},r=(t(284),t(0)),o=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"theme-label"},[this._t("default")],2)}),[],!1,null,"4c650264",null);a.a=o.exports},21:function(e,a,t){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t(1).d}},r=(t(238),t(0)),o=Object(r.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-header"},[e.canBack?t("div",{staticClass:"go-back",on:{click:function(a){return e.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"aafe7e24",null);a.a=o.exports},230:function(e,a,t){"use strict";var n=t(54);t.n(n).a},231:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},232:function(e,a,t){"use strict";var n=t(55);t.n(n).a},233:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},234:function(e,a,t){"use strict";var n=t(56);t.n(n).a},235:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,"",""])},238:function(e,a,t){"use strict";var n=t(58);t.n(n).a},239:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #111314;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},282:function(e,a,t){"use strict";var n=t(81);t.n(n).a},283:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".dropzone[data-v-fa58d4b2] {\n  position: relative;\n  line-height: 0;\n}\n.dropzone input[type='file'][data-v-fa58d4b2] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-fa58d4b2] {\n  width: 62px;\n  height: 62px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.dropzone .blurred[data-v-fa58d4b2] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n",""])},284:function(e,a,t){"use strict";var n=t(82);t.n(n).a},285:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".theme-label[data-v-4c650264] {\n  font-size: 0.875em;\n  color: #00BC7E;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 20px;\n}\n",""])},404:function(e,a,t){"use strict";var n=t(142);t.n(n).a},405:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,'.form[data-v-b4ce7330] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-b4ce7330] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-b4ce7330] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-b4ce7330] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-b4ce7330] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-b4ce7330] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-b4ce7330] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-b4ce7330] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-b4ce7330]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-b4ce7330] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-b4ce7330] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-b4ce7330] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-b4ce7330] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-b4ce7330] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-b4ce7330] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-b4ce7330] {\n  margin-left: 20px;\n}\n.error-message[data-v-b4ce7330] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-b4ce7330] {\n  width: 100%;\n}\ntextarea[data-v-b4ce7330],\ninput[type="password"][data-v-b4ce7330],\ninput[type="text"][data-v-b4ce7330],\ninput[type="number"][data-v-b4ce7330],\ninput[type="email"][data-v-b4ce7330] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-b4ce7330],\ninput[type="password"].is-error[data-v-b4ce7330],\ninput[type="text"].is-error[data-v-b4ce7330],\ninput[type="number"].is-error[data-v-b4ce7330],\ninput[type="email"].is-error[data-v-b4ce7330] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-b4ce7330]::-webkit-input-placeholder, input[type="password"][data-v-b4ce7330]::-webkit-input-placeholder, input[type="text"][data-v-b4ce7330]::-webkit-input-placeholder, input[type="number"][data-v-b4ce7330]::-webkit-input-placeholder, input[type="email"][data-v-b4ce7330]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-b4ce7330]::-moz-placeholder, input[type="password"][data-v-b4ce7330]::-moz-placeholder, input[type="text"][data-v-b4ce7330]::-moz-placeholder, input[type="number"][data-v-b4ce7330]::-moz-placeholder, input[type="email"][data-v-b4ce7330]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-b4ce7330]:-ms-input-placeholder, input[type="password"][data-v-b4ce7330]:-ms-input-placeholder, input[type="text"][data-v-b4ce7330]:-ms-input-placeholder, input[type="number"][data-v-b4ce7330]:-ms-input-placeholder, input[type="email"][data-v-b4ce7330]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-b4ce7330]::-ms-input-placeholder, input[type="password"][data-v-b4ce7330]::-ms-input-placeholder, input[type="text"][data-v-b4ce7330]::-ms-input-placeholder, input[type="number"][data-v-b4ce7330]::-ms-input-placeholder, input[type="email"][data-v-b4ce7330]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-b4ce7330]::placeholder,\ninput[type="password"][data-v-b4ce7330]::placeholder,\ninput[type="text"][data-v-b4ce7330]::placeholder,\ninput[type="number"][data-v-b4ce7330]::placeholder,\ninput[type="email"][data-v-b4ce7330]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-b4ce7330]:focus,\ninput[type="password"][data-v-b4ce7330]:focus,\ninput[type="text"][data-v-b4ce7330]:focus,\ninput[type="number"][data-v-b4ce7330]:focus,\ninput[type="email"][data-v-b4ce7330]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-b4ce7330],\ninput[type="password"][disabled][data-v-b4ce7330],\ninput[type="text"][disabled][data-v-b4ce7330],\ninput[type="number"][disabled][data-v-b4ce7330],\ninput[type="email"][disabled][data-v-b4ce7330] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-b4ce7330] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-b4ce7330], .additional-link a[data-v-b4ce7330] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-b4ce7330]:hover, .additional-link a[data-v-b4ce7330]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-b4ce7330] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-b4ce7330] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-b4ce7330], .form textarea[data-v-b4ce7330] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-b4ce7330] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-b4ce7330] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-b4ce7330] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-b4ce7330] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-b4ce7330] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-b4ce7330] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-b4ce7330] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-b4ce7330] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-b4ce7330],\n  input[type="password"][data-v-b4ce7330],\n  input[type="number"][data-v-b4ce7330],\n  input[type="text"][data-v-b4ce7330],\n  input[type="email"][data-v-b4ce7330] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-b4ce7330] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-b4ce7330] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-b4ce7330] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-b4ce7330] {\n    color: #bec6cf;\n}\ntextarea[data-v-b4ce7330],\n  input[type="password"][data-v-b4ce7330],\n  input[type="text"][data-v-b4ce7330],\n  input[type="number"][data-v-b4ce7330],\n  input[type="email"][data-v-b4ce7330] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-b4ce7330]::-webkit-input-placeholder, input[type="password"][data-v-b4ce7330]::-webkit-input-placeholder, input[type="text"][data-v-b4ce7330]::-webkit-input-placeholder, input[type="number"][data-v-b4ce7330]::-webkit-input-placeholder, input[type="email"][data-v-b4ce7330]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-b4ce7330]::-moz-placeholder, input[type="password"][data-v-b4ce7330]::-moz-placeholder, input[type="text"][data-v-b4ce7330]::-moz-placeholder, input[type="number"][data-v-b4ce7330]::-moz-placeholder, input[type="email"][data-v-b4ce7330]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-b4ce7330]:-ms-input-placeholder, input[type="password"][data-v-b4ce7330]:-ms-input-placeholder, input[type="text"][data-v-b4ce7330]:-ms-input-placeholder, input[type="number"][data-v-b4ce7330]:-ms-input-placeholder, input[type="email"][data-v-b4ce7330]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-b4ce7330]::-ms-input-placeholder, input[type="password"][data-v-b4ce7330]::-ms-input-placeholder, input[type="text"][data-v-b4ce7330]::-ms-input-placeholder, input[type="number"][data-v-b4ce7330]::-ms-input-placeholder, input[type="email"][data-v-b4ce7330]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-b4ce7330]::placeholder,\n  input[type="password"][data-v-b4ce7330]::placeholder,\n  input[type="text"][data-v-b4ce7330]::placeholder,\n  input[type="number"][data-v-b4ce7330]::placeholder,\n  input[type="email"][data-v-b4ce7330]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-b4ce7330],\n  input[type="password"][disabled][data-v-b4ce7330],\n  input[type="text"][disabled][data-v-b4ce7330],\n  input[type="number"][disabled][data-v-b4ce7330],\n  input[type="email"][disabled][data-v-b4ce7330] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-b4ce7330] {\n  max-width: 100%;\n}\n@media only screen and (max-width: 960px) {\n.form .button-base[data-v-b4ce7330] {\n    width: 100%;\n    margin-top: 0;\n    text-align: center;\n}\n}\n',""])},54:function(e,a,t){var n=t(231);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)},55:function(e,a,t){var n=t(233);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)},56:function(e,a,t){var n=t(235);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)},565:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t.n(n),o=t(8),i=t(16),s=t(173),p=t(13),l=t(18),d=t(11),c=t(15),b=t(21),u=t(174),m=t(10),v=t(3),f=t(4),h=t.n(f);function w(e,a,t,n,r,o,i){try{var s=e[o](i),p=s.value}catch(e){return void t(e)}s.done?a(p):Promise.resolve(p).then(n,r)}var g={name:"Password",components:{PageTabGroup:i.a,FormLabel:p.a,PageTab:c.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,UserImageInput:s.a,MobileHeader:l.a,PageHeader:b.a,ButtonBase:d.a,ThemeLabel:u.a,required:m.a},data:function(){return{newPasswordConfirmation:"",newPassword:"",isLoading:!1}},methods:{resetPassword:function(){var e,a=this;return(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.password.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:h.a.post(a.$store.getters.api+"/user/password",{password:a.newPassword,password_confirmation:a.newPasswordConfirmation}).then((function(){a.newPassword="",a.newPasswordConfirmation="",a.$refs.password.reset(),v.a.$emit("success:open",{title:a.$t("popup_pass_changed.title"),message:a.$t("popup_pass_changed.message")})})).catch((function(e){422==e.response.status&&e.response.data.errors.password&&a.$refs.password.setErrors({"New Password":e.response.data.errors.password})}));case 6:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(n,r){var o=e.apply(a,t);function i(e){w(o,n,r,i,s,"next",e)}function s(e){w(o,n,r,i,s,"throw",e)}i(void 0)}))})()}}},x=(t(404),t(0)),y=Object(x.a)(g,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("PageTab",[t("PageTabGroup",[t("ValidationObserver",{ref:"password",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.resetPassword(a)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[t("FormLabel",[e._v(e._s(e.$t("user_password.title")))]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("page_create_password.label_new_pass"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"New Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("page_create_password.label_new_pass"),type:"password"},domProps:{value:e.newPassword},on:{input:function(a){a.target.composing||(e.newPassword=a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("page_create_password.label_confirm_pass"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Your Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordConfirmation,expression:"newPasswordConfirmation"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("page_create_password.label_confirm_pass"),type:"password"},domProps:{value:e.newPasswordConfirmation},on:{input:function(a){a.target.composing||(e.newPasswordConfirmation=a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("ButtonBase",{staticClass:"confirm-form",attrs:{type:"submit","button-style":"theme"}},[e._v("\n                    "+e._s(e.$t("profile.store_pass"))+"\n                ")])],1)]}}])})],1)],1)}),[],!1,null,"b4ce7330",null);a.default=y.exports},58:function(e,a,t){var n=t(239);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)},81:function(e,a,t){var n=t(283);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)},82:function(e,a,t){var n=t(285);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,r);n.locals&&(e.exports=n.locals)}}]);