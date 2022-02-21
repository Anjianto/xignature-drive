(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+SgC":function(a,t,e){"use strict";e.r(t);var o=e("o0o1"),r=e.n(o),i=e("A5+z"),n=e("bDRN"),d=e("4TWA"),s=e("xxrA"),l=e("D+dh"),p=e("eZ9V"),c=e("KnjL"),m=e("j8qy"),u=e("ASoH"),b=e("CjXH"),v=e("TJPC"),f=e("xCqy"),h=e("vDqi"),g=e.n(h);function x(a,t,e,o,r,i,n){try{var d=a[i](n),s=d.value}catch(a){return void e(a)}d.done?t(s):Promise.resolve(s).then(o,r)}var w={name:"EnvironmentSetup",components:{AuthContentWrapper:n.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SettingsIcon:b.X,SelectInput:d.a,SwitchInput:s.a,AuthContent:m.a,ImageInput:l.a,AuthButton:u.a,FormLabel:p.a,required:v.d,InfoBox:c.a},data:function(){return{isLoading:!1,admin:{name:"",email:"",avatar:void 0,password:"",password_confirmation:""}}},methods:{adminAccountSubmit:function(){var a,t=this;return(a=r.a.mark((function a(){var e;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.adminAccount.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,(e=new FormData).append("name",t.admin.name),e.append("email",t.admin.email),e.append("password",t.admin.password),e.append("password_confirmation",t.admin.password_confirmation),e.append("license",localStorage.getItem("license")),e.append("purchase_code",localStorage.getItem("purchase_code")),t.admin.avatar&&e.append("avatar",t.admin.avatar),g.a.post("/api/setup/admin-setup",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){t.isLoading=!1,t.$store.commit("SET_AUTHORIZED",!0),"Extended"===localStorage.getItem("license")&&t.$store.commit("SET_SAAS",!0),t.$router.push({name:"Dashboard"}),localStorage.removeItem("purchase_code"),localStorage.removeItem("license")})).catch((function(a){401==a.response.status&&"invalid_client"===a.response.data.error&&f.a.$emit("alert:open",{emoji:"🤔",title:t.$t("popup_passport_error.title"),message:t.$t("popup_passport_error.message")}),500==a.response.status&&f.a.$emit("alert:open",{emoji:"🤔",title:t.$t("popup_signup_error.title"),message:t.$t("popup_signup_error.message")}),422==a.response.status&&(a.response.data.errors.email&&t.$refs.adminAccount.setErrors({Email:a.response.data.errors.email}),a.response.data.errors.password&&t.$refs.adminAccount.setErrors({Password:a.response.data.errors.password})),t.isLoading=!1}));case 15:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(o,r){var i=a.apply(t,e);function n(a){x(i,o,r,n,d,"next",a)}function d(a){x(i,o,r,n,d,"throw",a)}n(void 0)}))})()}},created:function(){this.$scrollTop()}},y=(e("NZTt"),e("KHd+")),_=Object(y.a)(w,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Setup Wizard")]),a._v(" "),e("h2",[a._v("Create your admin account.")])],1),a._v(" "),e("ValidationObserver",{ref:"adminAccount",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.adminAccountSubmit.apply(null,arguments)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("Create Admin Account")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Avatar (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Avatar"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:a.admin.avatar,callback:function(t){a.$set(a.admin,"avatar",t)},expression:"admin.avatar"}})]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Full Name:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Full Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.name,expression:"admin.name"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your full name",type:"text"},domProps:{value:a.admin.name},on:{input:function(t){t.target.composing||a.$set(a.admin,"name",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Email:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Email",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.email,expression:"admin.email"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your email",type:"email"},domProps:{value:a.admin.email},on:{input:function(t){t.target.composing||a.$set(a.admin,"email",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Password:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Password",rules:"required|confirmed:confirmation"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.password,expression:"admin.password"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your password",type:"password"},domProps:{value:a.admin.password},on:{input:function(t){t.target.composing||a.$set(a.admin,"password",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Password Confirmation:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",name:"confirmation",rules:"required",vid:"confirmation"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.password_confirmation,expression:"admin.password_confirmation"}],class:{"is-error":o[0]},attrs:{placeholder:"Confirm your password",type:"password"},domProps:{value:a.admin.password_confirmation},on:{input:function(t){t.target.composing||a.$set(a.admin,"password_confirmation",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Create Admin and Login",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"71a9d2b0",null);t.default=_.exports},ASoH:function(a,t,e){"use strict";var o={name:"AuthContent",props:["loading","icon","text","ltr"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=(e("miOP"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",a._g(a._b({class:["button outline",{ltr:a.ltr}]},"button",a.$attrs,!1),a.$listeners),[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"f70eed9c",null);t.a=i.exports},"D+dh":function(a,t,e){"use strict";var o=e("CjXH"),r={name:"ImageInput",props:["image","error"],components:{ImageIcon:o.D,XIcon:o.kb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(a){var t=this,e=a.target.files[0].name,o=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(o)){var r=a.target.files[0],i=new FileReader;i.onload=function(){return t.imagePreview=i.result},i.readAsDataURL(r),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},i=(e("w9z4"),e("KHd+")),n=Object(i.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dropzone",class:{"is-error":a.error}},[a.imagePreview?e("div",{staticClass:"reset-image",on:{click:a.resetImage}},[e("x-icon",{staticClass:"close-icon",attrs:{size:"14"}})],1):a._e(),a._v(" "),e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return a.showImagePreview(t)}}}),a._v(" "),a.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[e("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),a._v(" "),e("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),e("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"eb0cae00",null);t.a=n.exports},DPjq:function(a,t,e){var o=e("IjSi");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},IS7u:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".dropzone[data-v-eb0cae00]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-eb0cae00]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-eb0cae00]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-eb0cae00],.dropzone.is-error .icon-upload polyline[data-v-eb0cae00],.dropzone.is-error .icon-upload rect[data-v-eb0cae00]{stroke:#fd397a}.dropzone input[type=file][data-v-eb0cae00]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-eb0cae00]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-eb0cae00]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-eb0cae00]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload rect[data-v-eb0cae00]{stroke:#0667b3}.dropzone .dropzone-message .dropzone-title[data-v-eb0cae00]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-eb0cae00]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-eb0cae00]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-eb0cae00]{fill:#1b2539}@media (prefers-color-scheme:dark){.dropzone[data-v-eb0cae00]{border-color:hsla(0,0%,100%,.2)}.dropzone .dropzone-message .icon-upload line[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload path[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00]{stroke:#0667b3}.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00]{color:#7d858c}}",""])},Idvm:function(a,t,e){var o=e("lig4");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},IjSi:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-f70eed9c]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:flex;justify-content:center;align-items:center;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button.ltr[data-v-f70eed9c]{flex-direction:row-reverse}.button.ltr .icon[data-v-f70eed9c]{margin-right:12px}.button .text-label[data-v-f70eed9c]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-f70eed9c]{margin-left:12px;font-size:1em}.button.solid[data-v-f70eed9c]{background:#0667b3;border:2px solid #0667b3}.button.solid .text-label[data-v-f70eed9c]{color:#fff}.button.outline[data-v-f70eed9c]{border:2px solid #1b2539}.button.outline .text-label[data-v-f70eed9c]{color:#1b2539}.button.outline .icon path[data-v-f70eed9c]{fill:#0667b3}.button.outline[data-v-f70eed9c]:hover{border-color:#0667b3}.button.outline:hover .text-label[data-v-f70eed9c]{color:#0667b3}@media (prefers-color-scheme:dark){.button.outline[data-v-f70eed9c]{background:#f4f5f6;border-color:#1b2539}.button.outline .text-label[data-v-f70eed9c]{color:#1b2539}}.sync-alt[data-v-f70eed9c]{-webkit-animation:spin-data-v-f70eed9c 1s linear infinite;animation:spin-data-v-f70eed9c 1s linear infinite}@-webkit-keyframes spin-data-v-f70eed9c{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-f70eed9c{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},Jx8r:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},NZTt:function(a,t,e){"use strict";e("RN6i")},RN6i:function(a,t,e){var o=e("rOG4");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},Xk6H:function(a,t,e){"use strict";e("Idvm")},bDRN:function(a,t,e){"use strict";var o={name:"AuthContentWrapper"},r=(e("iYAH"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=i.exports},"bN/l":function(a,t,e){var o=e("IS7u");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},eZ9V:function(a,t,e){"use strict";var o={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},r=(e("Xk6H"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=i.exports},iYAH:function(a,t,e){"use strict";e("lh0Q")},j8qy:function(a,t,e){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=e("KHd+"),i=Object(r.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=i.exports},lh0Q:function(a,t,e){var o=e("Jx8r");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},lig4:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#0667b3}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#1b2539}}",""])},miOP:function(a,t,e){"use strict";e("DPjq")},rOG4:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-71a9d2b0]{max-width:700px}.form.inline-form[data-v-71a9d2b0]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-71a9d2b0]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-71a9d2b0]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-71a9d2b0]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-71a9d2b0]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-71a9d2b0]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-71a9d2b0]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-71a9d2b0]:last-child{margin-bottom:0}.form.block-form .button[data-v-71a9d2b0]{margin-top:50px}.form .inline-wrapper[data-v-71a9d2b0]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-71a9d2b0]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-71a9d2b0]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-71a9d2b0]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-71a9d2b0]{display:flex}.single-line-form .submit-button[data-v-71a9d2b0]{margin-left:20px}.error-message[data-v-71a9d2b0]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-71a9d2b0]{width:100%}input[type=email][data-v-71a9d2b0],input[type=number][data-v-71a9d2b0],input[type=password][data-v-71a9d2b0],input[type=tel][data-v-71a9d2b0],input[type=text][data-v-71a9d2b0],textarea[data-v-71a9d2b0]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-71a9d2b0],input[type=number].is-error[data-v-71a9d2b0],input[type=password].is-error[data-v-71a9d2b0],input[type=tel].is-error[data-v-71a9d2b0],input[type=text].is-error[data-v-71a9d2b0],textarea.is-error[data-v-71a9d2b0]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-71a9d2b0]::-moz-placeholder,input[type=number][data-v-71a9d2b0]::-moz-placeholder,input[type=password][data-v-71a9d2b0]::-moz-placeholder,input[type=tel][data-v-71a9d2b0]::-moz-placeholder,input[type=text][data-v-71a9d2b0]::-moz-placeholder,textarea[data-v-71a9d2b0]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-71a9d2b0]:-ms-input-placeholder,input[type=number][data-v-71a9d2b0]:-ms-input-placeholder,input[type=password][data-v-71a9d2b0]:-ms-input-placeholder,input[type=tel][data-v-71a9d2b0]:-ms-input-placeholder,input[type=text][data-v-71a9d2b0]:-ms-input-placeholder,textarea[data-v-71a9d2b0]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-71a9d2b0]::placeholder,input[type=number][data-v-71a9d2b0]::placeholder,input[type=password][data-v-71a9d2b0]::placeholder,input[type=tel][data-v-71a9d2b0]::placeholder,input[type=text][data-v-71a9d2b0]::placeholder,textarea[data-v-71a9d2b0]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-71a9d2b0]:focus,input[type=number][data-v-71a9d2b0]:focus,input[type=password][data-v-71a9d2b0]:focus,input[type=tel][data-v-71a9d2b0]:focus,input[type=text][data-v-71a9d2b0]:focus,textarea[data-v-71a9d2b0]:focus{border-color:#0667b3;box-shadow:0 1px 5px rgba(6,103,179,.3)}input[type=email][disabled][data-v-71a9d2b0],input[type=number][disabled][data-v-71a9d2b0],input[type=password][disabled][data-v-71a9d2b0],input[type=tel][disabled][data-v-71a9d2b0],input[type=text][disabled][data-v-71a9d2b0],textarea[disabled][data-v-71a9d2b0]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-71a9d2b0]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-71a9d2b0],.additional-link b[data-v-71a9d2b0]{color:#0667b3;cursor:pointer}.additional-link a[data-v-71a9d2b0]:hover,.additional-link b[data-v-71a9d2b0]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-71a9d2b0]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-71a9d2b0]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-71a9d2b0],.form textarea[data-v-71a9d2b0]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-71a9d2b0]{display:block}.form.block-form .block-wrapper label[data-v-71a9d2b0]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-71a9d2b0]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-71a9d2b0]{display:block}.form.inline-form .input-wrapper .error-message[data-v-71a9d2b0]{position:relative;bottom:0}.form .button[data-v-71a9d2b0]{padding:14px 32px}.single-line-form[data-v-71a9d2b0]{display:block}.single-line-form .submit-button[data-v-71a9d2b0]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-71a9d2b0],input[type=number][data-v-71a9d2b0],input[type=password][data-v-71a9d2b0],input[type=tel][data-v-71a9d2b0],input[type=text][data-v-71a9d2b0],textarea[data-v-71a9d2b0]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-71a9d2b0]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-71a9d2b0]{color:#7d858c}.form.block-form .block-wrapper label[data-v-71a9d2b0],.form .inline-wrapper .switch-label .input-label[data-v-71a9d2b0]{color:#1b2539}input[type=email][data-v-71a9d2b0],input[type=number][data-v-71a9d2b0],input[type=password][data-v-71a9d2b0],input[type=tel][data-v-71a9d2b0],input[type=text][data-v-71a9d2b0],textarea[data-v-71a9d2b0]{border-color:#f4f5f6;background:#f4f5f6;color:#1b2539}input[type=email][data-v-71a9d2b0]::-moz-placeholder,input[type=number][data-v-71a9d2b0]::-moz-placeholder,input[type=password][data-v-71a9d2b0]::-moz-placeholder,input[type=tel][data-v-71a9d2b0]::-moz-placeholder,input[type=text][data-v-71a9d2b0]::-moz-placeholder,textarea[data-v-71a9d2b0]::-moz-placeholder{color:#7d858c}input[type=email][data-v-71a9d2b0]:-ms-input-placeholder,input[type=number][data-v-71a9d2b0]:-ms-input-placeholder,input[type=password][data-v-71a9d2b0]:-ms-input-placeholder,input[type=tel][data-v-71a9d2b0]:-ms-input-placeholder,input[type=text][data-v-71a9d2b0]:-ms-input-placeholder,textarea[data-v-71a9d2b0]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-71a9d2b0]::placeholder,input[type=number][data-v-71a9d2b0]::placeholder,input[type=password][data-v-71a9d2b0]::placeholder,input[type=tel][data-v-71a9d2b0]::placeholder,input[type=text][data-v-71a9d2b0]::placeholder,textarea[data-v-71a9d2b0]::placeholder{color:#7d858c}input[type=email][disabled][data-v-71a9d2b0],input[type=number][disabled][data-v-71a9d2b0],input[type=password][disabled][data-v-71a9d2b0],input[type=tel][disabled][data-v-71a9d2b0],input[type=text][disabled][data-v-71a9d2b0],textarea[disabled][data-v-71a9d2b0]{background:#f4f5f6;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.auth-logo-text[data-v-71a9d2b0]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-71a9d2b0]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-71a9d2b0]{min-width:310px}.auth-form .additional-link a[data-v-71a9d2b0]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-71a9d2b0]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-71a9d2b0]{width:120px;margin-bottom:20px}.auth-form h1[data-v-71a9d2b0]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-71a9d2b0]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-71a9d2b0]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-71a9d2b0]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-71a9d2b0]{width:100%}.auth-form h1[data-v-71a9d2b0]{font-size:1.875em}.auth-form h2[data-v-71a9d2b0]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-71a9d2b0]{font-size:1.375em}.auth-form h2[data-v-71a9d2b0]{font-size:1.125em}.auth-form input[data-v-71a9d2b0]{min-width:0}.auth-form .additional-link[data-v-71a9d2b0]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-71a9d2b0],.auth-form h1[data-v-71a9d2b0],.auth-form h2[data-v-71a9d2b0]{color:#1b2539}}.content-headline[data-v-71a9d2b0]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-71a9d2b0]{min-width:0}.duplicator .duplicator-add-button[data-v-71a9d2b0]{width:100%}.duplicator .duplicator-item[data-v-71a9d2b0]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-71a9d2b0]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-71a9d2b0]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-71a9d2b0]{stroke:#0667b3}.duplicator .duplicator-item input[data-v-71a9d2b0],.duplicator .duplicator-item textarea[data-v-71a9d2b0]{box-shadow:none;background:#fafafa}.form[data-v-71a9d2b0]{max-width:580px;text-align:left}.submit-wrapper[data-v-71a9d2b0]{text-align:right}.submit-wrapper .button[data-v-71a9d2b0]{margin:58px 0 50px;width:100%}.title-icon[data-v-71a9d2b0]{margin-bottom:10px;-webkit-animation:spinner-data-v-71a9d2b0 5s linear infinite;animation:spinner-data-v-71a9d2b0 5s linear infinite}.title-icon circle[data-v-71a9d2b0],.title-icon path[data-v-71a9d2b0]{stroke:#0667b3}@-webkit-keyframes spinner-data-v-71a9d2b0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-71a9d2b0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-71a9d2b0],.duplicator .duplicator-item input[data-v-71a9d2b0],.duplicator .duplicator-item textarea[data-v-71a9d2b0]{background:#f4f5f6}}",""])},w9z4:function(a,t,e){"use strict";e("bN/l")}}]);