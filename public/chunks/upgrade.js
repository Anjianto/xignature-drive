(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{ASoH:function(t,a,e){"use strict";var o={name:"AuthContent",props:["loading","icon","text","ltr"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(e("miOP"),e("KHd+")),r=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",t._g(t._b({class:["button outline",{ltr:t.ltr}]},"button",t.$attrs,!1),t.$listeners),[e("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"f70eed9c",null);a.a=r.exports},"D+dh":function(t,a,e){"use strict";var o=e("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:o.D,XIcon:o.kb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(t){var a=this,e=t.target.files[0].name,o=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(o)){var i=t.target.files[0],r=new FileReader;r.onload=function(){return a.imagePreview=r.result},r.readAsDataURL(i),this.$emit("input",t.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(e("w9z4"),e("KHd+")),n=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropzone",class:{"is-error":t.error}},[t.imagePreview?e("div",{staticClass:"reset-image",on:{click:t.resetImage}},[e("x-icon",{staticClass:"close-icon",attrs:{size:"14"}})],1):t._e(),t._v(" "),e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(a){return t.showImagePreview(a)}}}),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:t.imagePreview}}):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isData,expression:"! isData"}],staticClass:"dropzone-message"},[e("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),t._v(" "),e("span",{staticClass:"dropzone-title"},[t._v("\n            "+t._s(t.$t("input_image.title"))+"\n        ")]),t._v(" "),e("span",{staticClass:"dropzone-description"},[t._v("\n            "+t._s(t.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"eb0cae00",null);a.a=n.exports},DPjq:function(t,a,e){var o=e("IjSi");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},Hv5D:function(t,a,e){var o=e("ogRf");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},IS7u:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".dropzone[data-v-eb0cae00]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-eb0cae00]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-eb0cae00]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-eb0cae00],.dropzone.is-error .icon-upload polyline[data-v-eb0cae00],.dropzone.is-error .icon-upload rect[data-v-eb0cae00]{stroke:#fd397a}.dropzone input[type=file][data-v-eb0cae00]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-eb0cae00]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-eb0cae00]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-eb0cae00]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload rect[data-v-eb0cae00]{stroke:#0667b3}.dropzone .dropzone-message .dropzone-title[data-v-eb0cae00]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-eb0cae00]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-eb0cae00]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-eb0cae00]{fill:#1b2539}@media (prefers-color-scheme:dark){.dropzone[data-v-eb0cae00]{border-color:hsla(0,0%,100%,.2)}.dropzone .dropzone-message .icon-upload line[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload path[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00]{stroke:#0667b3}.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00]{color:#7d858c}}",""])},Idvm:function(t,a,e){var o=e("lig4");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},IjSi:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".button[data-v-f70eed9c]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:flex;justify-content:center;align-items:center;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button.ltr[data-v-f70eed9c]{flex-direction:row-reverse}.button.ltr .icon[data-v-f70eed9c]{margin-right:12px}.button .text-label[data-v-f70eed9c]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-f70eed9c]{margin-left:12px;font-size:1em}.button.solid[data-v-f70eed9c]{background:#0667b3;border:2px solid #0667b3}.button.solid .text-label[data-v-f70eed9c]{color:#fff}.button.outline[data-v-f70eed9c]{border:2px solid #1b2539}.button.outline .text-label[data-v-f70eed9c]{color:#1b2539}.button.outline .icon path[data-v-f70eed9c]{fill:#0667b3}.button.outline[data-v-f70eed9c]:hover{border-color:#0667b3}.button.outline:hover .text-label[data-v-f70eed9c]{color:#0667b3}@media (prefers-color-scheme:dark){.button.outline[data-v-f70eed9c]{background:#f4f5f6;border-color:#1b2539}.button.outline .text-label[data-v-f70eed9c]{color:#1b2539}}.sync-alt[data-v-f70eed9c]{-webkit-animation:spin-data-v-f70eed9c 1s linear infinite;animation:spin-data-v-f70eed9c 1s linear infinite}@-webkit-keyframes spin-data-v-f70eed9c{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-f70eed9c{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},Jx8r:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},Xk6H:function(t,a,e){"use strict";e("Idvm")},a2g2:function(t,a,e){"use strict";e("Hv5D")},bDRN:function(t,a,e){"use strict";var o={name:"AuthContentWrapper"},i=(e("iYAH"),e("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=r.exports},"bN/l":function(t,a,e){var o=e("IS7u");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},eZ9V:function(t,a,e){"use strict";var o={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},i=(e("Xk6H"),e("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=r.exports},iYAH:function(t,a,e){"use strict";e("lh0Q")},j8qy:function(t,a,e){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=e("KHd+"),r=Object(i.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=r.exports},lh0Q:function(t,a,e){var o=e("Jx8r");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},lig4:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#0667b3}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#1b2539}}",""])},m48H:function(t,a,e){"use strict";e.r(a);var o=e("o0o1"),i=e.n(o),r=e("A5+z"),n=e("bDRN"),p=e("4TWA"),s=e("xxrA"),l=e("D+dh"),c=e("eZ9V"),d=e("KnjL"),u=e("j8qy"),f=e("ASoH"),v=e("CjXH"),m=e("TJPC"),b=e("L2JU"),g=e("vDqi"),h=e.n(g);function x(t,a,e,o,i,r,n){try{var p=t[r](n),s=p.value}catch(t){return void e(t)}p.done?a(s):Promise.resolve(s).then(o,i)}function w(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function y(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var _={name:"EnvironmentSetup",components:{AuthContentWrapper:n.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:v.X,SelectInput:p.a,SwitchInput:s.a,AuthContent:u.a,ImageInput:l.a,AuthButton:f.a,FormLabel:c.a,required:m.d,InfoBox:d.a},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?w(Object(e),!0).forEach((function(a){y(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},Object(b.b)(["config"])),data:function(){return{isLoading:!1,app:{license:void 0,purchase_code:"",title:"",description:"",logo:void 0,logo_horizontal:void 0,favicon:void 0,contactMail:"",googleAnalytics:"",defaultStorage:"5",userRegistration:1,storageLimitation:1}}},methods:{storeAppSetup:function(){var t=this,a=new FormData;a.append("purchase_code",this.app.purchase_code),a.append("license",this.app.license),a.append("title",this.app.title),a.append("description",this.app.description),a.append("contactMail",this.app.contactMail),a.append("userRegistration",Boolean(this.app.userRegistration)?1:0),a.append("storageLimitation",Boolean(this.app.storageLimitation)?1:0),this.app.googleAnalytics&&a.append("googleAnalytics",this.app.googleAnalytics),this.app.defaultStorage&&a.append("defaultStorage",this.app.defaultStorage),this.app.logo&&a.append("logo",this.app.logo),this.app.logo_horizontal&&a.append("logo_horizontal",this.app.logo_horizontal),this.app.favicon&&a.append("favicon",this.app.favicon),h.a.post("/api/upgrade/app",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){t.isLoading=!1,t.$router.push({name:"SignIn"})})).catch((function(a){t.isLoading=!1}))},appSetupSubmit:function(){var t,a=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$refs.appSetup.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:a.isLoading=!0,h.a.post("/api/setup/purchase-code",{purchaseCode:a.app.purchase_code}).then((function(t){"b6896a44017217c36f4a6fdc56699728"===t.data?(a.app.license="Extended",a.$store.commit("SET_SAAS",!0)):a.app.license="Regular",a.storeAppSetup()})).catch((function(t){t.response.status})).finally((function(){a.isLoading=!1}));case 7:case"end":return t.stop()}}),t)})),function(){var a=this,e=arguments;return new Promise((function(o,i){var r=t.apply(a,e);function n(t){x(r,o,i,n,p,"next",t)}function p(t){x(r,o,i,n,p,"throw",t)}n(void 0)}))})()}},created:function(){"1.7"===this.config.latest_upgrade&&this.$router.push({name:"SignIn"})}},k=(e("a2g2"),e("KHd+")),z=Object(k.a)(_,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),t._v(" "),e("h1",[t._v("Upgrade VueFileManager")]),t._v(" "),e("h2",[t._v("Please fill form bellow to upgrade VueFileManager.")])],1),t._v(" "),e("ValidationObserver",{ref:"appSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),t.appSetupSubmit.apply(null,arguments)}},scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;return[e("FormLabel",[t._v("Set your License")]),t._v(" "),e("FormLabel",{staticClass:"mt-70"},[t._v("General Settings")]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("App Title:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.app.title,expression:"app.title"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your app title",type:"text"},domProps:{value:t.app.title},on:{input:function(a){a.target.composing||t.$set(t.app,"title",a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("App Description:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Description",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.app.description,expression:"app.description"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your app description",type:"text"},domProps:{value:t.app.description},on:{input:function(a){a.target.composing||t.$set(t.app,"description",a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("App Logo (optional):")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:t.app.logo,callback:function(a){t.$set(t.app,"logo",a)},expression:"app.logo"}})]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("App Logo Horizontal (optional):")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:t.app.logo_horizontal,callback:function(a){t.$set(t.app,"logo_horizontal",a)},expression:"app.logo_horizontal"}})]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("App Favicon (optional):")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Favicon"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:t.app.favicon,callback:function(a){t.$set(t.app,"favicon",a)},expression:"app.favicon"}})]}}],null,!0)})],1),t._v(" "),e("FormLabel",{staticClass:"mt-70"},[t._v("Others Information")]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Contact Email:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Contact Email",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.app.contactMail,expression:"app.contactMail"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your contact email",type:"email"},domProps:{value:t.app.contactMail},on:{input:function(a){a.target.composing||t.$set(t.app,"contactMail",a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Google Analytics Code (optional):")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Google Analytics Code"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.app.googleAnalytics,expression:"app.googleAnalytics"}],class:{"is-error":o[0]},attrs:{placeholder:"Paste your Google Analytics Code",type:"text"},domProps:{value:t.app.googleAnalytics},on:{input:function(a){a.target.composing||t.$set(t.app,"googleAnalytics",a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[t._v("Storage Limitation:")]),t._v(" "),e("small",{staticClass:"input-help"},[t._v("If this value is off, all users will have infinity storage capacity and you won't be "),e("br"),t._v("able to charge your users for storage plan.")])]),t._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:t.app.storageLimitation},model:{value:t.app.storageLimitation,callback:function(a){t.$set(t.app,"storageLimitation",a)},expression:"app.storageLimitation"}})],1)])]),t._v(" "),t.app.storageLimitation?e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Default Storage Space for Accounts:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Default Storage Space",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.app.defaultStorage,expression:"app.defaultStorage"}],class:{"is-error":o[0]},attrs:{min:"1",max:"999999999",placeholder:"Set default storage space in GB",type:"number"},domProps:{value:t.app.defaultStorage},on:{input:function(a){a.target.composing||t.$set(t.app,"defaultStorage",a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1):t._e(),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[t._v("Allow User Registration:")]),t._v(" "),e("small",{staticClass:"input-help"},[t._v("You can disable public registration for new users. You will still able to "),e("br"),t._v("create new users in administration panel.")])]),t._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:t.app.userRegistration},model:{value:t.app.userRegistration,callback:function(a){t.$set(t.app,"userRegistration",a)},expression:"app.userRegistration"}})],1)])]),t._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Upgrade",loading:t.isLoading,disabled:t.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"c15926f0",null);a.default=z.exports},miOP:function(t,a,e){"use strict";e("DPjq")},ogRf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form[data-v-c15926f0]{max-width:700px}.form.inline-form[data-v-c15926f0]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-c15926f0]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-c15926f0]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-c15926f0]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-c15926f0]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-c15926f0]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-c15926f0]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-c15926f0]:last-child{margin-bottom:0}.form.block-form .button[data-v-c15926f0]{margin-top:50px}.form .inline-wrapper[data-v-c15926f0]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-c15926f0]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-c15926f0]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-c15926f0]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-c15926f0]{display:flex}.single-line-form .submit-button[data-v-c15926f0]{margin-left:20px}.error-message[data-v-c15926f0]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-c15926f0]{width:100%}input[type=email][data-v-c15926f0],input[type=number][data-v-c15926f0],input[type=password][data-v-c15926f0],input[type=tel][data-v-c15926f0],input[type=text][data-v-c15926f0],textarea[data-v-c15926f0]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-c15926f0],input[type=number].is-error[data-v-c15926f0],input[type=password].is-error[data-v-c15926f0],input[type=tel].is-error[data-v-c15926f0],input[type=text].is-error[data-v-c15926f0],textarea.is-error[data-v-c15926f0]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-c15926f0]::-moz-placeholder,input[type=number][data-v-c15926f0]::-moz-placeholder,input[type=password][data-v-c15926f0]::-moz-placeholder,input[type=tel][data-v-c15926f0]::-moz-placeholder,input[type=text][data-v-c15926f0]::-moz-placeholder,textarea[data-v-c15926f0]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-c15926f0]:-ms-input-placeholder,input[type=number][data-v-c15926f0]:-ms-input-placeholder,input[type=password][data-v-c15926f0]:-ms-input-placeholder,input[type=tel][data-v-c15926f0]:-ms-input-placeholder,input[type=text][data-v-c15926f0]:-ms-input-placeholder,textarea[data-v-c15926f0]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-c15926f0]::placeholder,input[type=number][data-v-c15926f0]::placeholder,input[type=password][data-v-c15926f0]::placeholder,input[type=tel][data-v-c15926f0]::placeholder,input[type=text][data-v-c15926f0]::placeholder,textarea[data-v-c15926f0]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-c15926f0]:focus,input[type=number][data-v-c15926f0]:focus,input[type=password][data-v-c15926f0]:focus,input[type=tel][data-v-c15926f0]:focus,input[type=text][data-v-c15926f0]:focus,textarea[data-v-c15926f0]:focus{border-color:#0667b3;box-shadow:0 1px 5px rgba(6,103,179,.3)}input[type=email][disabled][data-v-c15926f0],input[type=number][disabled][data-v-c15926f0],input[type=password][disabled][data-v-c15926f0],input[type=tel][disabled][data-v-c15926f0],input[type=text][disabled][data-v-c15926f0],textarea[disabled][data-v-c15926f0]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-c15926f0]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-c15926f0],.additional-link b[data-v-c15926f0]{color:#0667b3;cursor:pointer}.additional-link a[data-v-c15926f0]:hover,.additional-link b[data-v-c15926f0]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-c15926f0]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-c15926f0]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-c15926f0],.form textarea[data-v-c15926f0]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-c15926f0]{display:block}.form.block-form .block-wrapper label[data-v-c15926f0]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-c15926f0]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-c15926f0]{display:block}.form.inline-form .input-wrapper .error-message[data-v-c15926f0]{position:relative;bottom:0}.form .button[data-v-c15926f0]{padding:14px 32px}.single-line-form[data-v-c15926f0]{display:block}.single-line-form .submit-button[data-v-c15926f0]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-c15926f0],input[type=number][data-v-c15926f0],input[type=password][data-v-c15926f0],input[type=tel][data-v-c15926f0],input[type=text][data-v-c15926f0],textarea[data-v-c15926f0]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-c15926f0]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-c15926f0]{color:#7d858c}.form.block-form .block-wrapper label[data-v-c15926f0],.form .inline-wrapper .switch-label .input-label[data-v-c15926f0]{color:#1b2539}input[type=email][data-v-c15926f0],input[type=number][data-v-c15926f0],input[type=password][data-v-c15926f0],input[type=tel][data-v-c15926f0],input[type=text][data-v-c15926f0],textarea[data-v-c15926f0]{border-color:#f4f5f6;background:#f4f5f6;color:#1b2539}input[type=email][data-v-c15926f0]::-moz-placeholder,input[type=number][data-v-c15926f0]::-moz-placeholder,input[type=password][data-v-c15926f0]::-moz-placeholder,input[type=tel][data-v-c15926f0]::-moz-placeholder,input[type=text][data-v-c15926f0]::-moz-placeholder,textarea[data-v-c15926f0]::-moz-placeholder{color:#7d858c}input[type=email][data-v-c15926f0]:-ms-input-placeholder,input[type=number][data-v-c15926f0]:-ms-input-placeholder,input[type=password][data-v-c15926f0]:-ms-input-placeholder,input[type=tel][data-v-c15926f0]:-ms-input-placeholder,input[type=text][data-v-c15926f0]:-ms-input-placeholder,textarea[data-v-c15926f0]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-c15926f0]::placeholder,input[type=number][data-v-c15926f0]::placeholder,input[type=password][data-v-c15926f0]::placeholder,input[type=tel][data-v-c15926f0]::placeholder,input[type=text][data-v-c15926f0]::placeholder,textarea[data-v-c15926f0]::placeholder{color:#7d858c}input[type=email][disabled][data-v-c15926f0],input[type=number][disabled][data-v-c15926f0],input[type=password][disabled][data-v-c15926f0],input[type=tel][disabled][data-v-c15926f0],input[type=text][disabled][data-v-c15926f0],textarea[disabled][data-v-c15926f0]{background:#f4f5f6;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.auth-logo-text[data-v-c15926f0]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-c15926f0]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-c15926f0]{min-width:310px}.auth-form .additional-link a[data-v-c15926f0]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-c15926f0]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-c15926f0]{width:120px;margin-bottom:20px}.auth-form h1[data-v-c15926f0]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-c15926f0]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-c15926f0]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-c15926f0]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-c15926f0]{width:100%}.auth-form h1[data-v-c15926f0]{font-size:1.875em}.auth-form h2[data-v-c15926f0]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-c15926f0]{font-size:1.375em}.auth-form h2[data-v-c15926f0]{font-size:1.125em}.auth-form input[data-v-c15926f0]{min-width:0}.auth-form .additional-link[data-v-c15926f0]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-c15926f0],.auth-form h1[data-v-c15926f0],.auth-form h2[data-v-c15926f0]{color:#1b2539}}.content-headline[data-v-c15926f0]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-c15926f0]{min-width:0}.duplicator .duplicator-add-button[data-v-c15926f0]{width:100%}.duplicator .duplicator-item[data-v-c15926f0]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-c15926f0]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-c15926f0]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-c15926f0]{stroke:#0667b3}.duplicator .duplicator-item input[data-v-c15926f0],.duplicator .duplicator-item textarea[data-v-c15926f0]{box-shadow:none;background:#fafafa}.form[data-v-c15926f0]{max-width:580px;text-align:left}.submit-wrapper[data-v-c15926f0]{text-align:right}.submit-wrapper .button[data-v-c15926f0]{margin:58px 0 50px;width:100%}.title-icon[data-v-c15926f0]{margin-bottom:10px;-webkit-animation:spinner-data-v-c15926f0 5s linear infinite;animation:spinner-data-v-c15926f0 5s linear infinite}.title-icon circle[data-v-c15926f0],.title-icon path[data-v-c15926f0]{stroke:#0667b3}@-webkit-keyframes spinner-data-v-c15926f0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-c15926f0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-c15926f0],.duplicator .duplicator-item input[data-v-c15926f0],.duplicator .duplicator-item textarea[data-v-c15926f0]{background:#f4f5f6}}",""])},w9z4:function(t,a,e){"use strict";e("bN/l")}}]);