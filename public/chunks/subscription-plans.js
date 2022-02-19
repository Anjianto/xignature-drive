(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"26E0":function(t,a,e){"use strict";e.r(a);var i=e("o0o1"),r=e.n(i),o=e("A5+z"),n=e("bDRN"),d=e("4TWA"),c=e("eZ9V"),s=e("Nv84"),l=e("KnjL"),p=e("j8qy"),u=e("ASoH"),f=e("CjXH"),m=e("TJPC"),v=e("vDqi"),b=e.n(v);function h(t,a,e,i,r,o,n){try{var d=t[o](n),c=d.value}catch(t){return void e(t)}d.done?a(c):Promise.resolve(c).then(i,r)}var x={name:"subscriptionPlans",components:{AuthContentWrapper:n.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:f.V,SelectInput:d.a,AuthContent:p.a,ButtonBase:s.a,AuthButton:u.a,FormLabel:c.a,required:m.d,InfoBox:l.a,XIcon:f.ib},computed:{submitButtonText:function(){return this.isLoading?"Creating Subscription Stripe Plans":"Save and Go Next"}},data:function(){return{isLoading:!1,isError:!1,errorMessage:"",subscriptionPlans:[{id:1,type:"plan",attributes:{name:"",description:"",price:"",capacity:""}}]}},methods:{subscriptionPlansSubmit:function(){var t,a=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$refs.subscriptionPlans.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:a.isLoading=!0,a.isError=!1,b.a.post("/api/setup/stripe-plans",{plans:a.subscriptionPlans}).then((function(){a.$router.push({name:"EnvironmentSetup"})})).catch((function(t){(t.response.status=500)&&(a.isError=!0,a.errorMessage=t.response.data.message)})).finally((function(){a.isLoading=!1}));case 8:case"end":return t.stop()}}),t)})),function(){var a=this,e=arguments;return new Promise((function(i,r){var o=t.apply(a,e);function n(t){h(o,i,r,n,d,"next",t)}function d(t){h(o,i,r,n,d,"throw",t)}n(void 0)}))})()},addRow:function(){this.subscriptionPlans.push({id:Math.floor(1e7*Math.random()),type:"plans",attributes:{name:"",description:"",price:"",capacity:""}})},removeRow:function(t){this.subscriptionPlans=this.subscriptionPlans.filter((function(a){return a.id!==t.id}))}},created:function(){this.$scrollTop()}},g=(e("ZEkr"),e("KHd+")),y=Object(g.a)(x,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),t._v(" "),e("h1",[t._v("Setup Wizard")]),t._v(" "),e("h2",[t._v("Set up plans for your customers.")])],1),t._v(" "),e("ValidationObserver",{ref:"subscriptionPlans",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),t.subscriptionPlansSubmit.apply(null,arguments)}},scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;return[e("FormLabel",[t._v("Create your plans")]),t._v(" "),e("InfoBox",[e("p",[t._v("Your plans will be "),e("b",[t._v("sorted automatically")]),t._v(" in ascent order by plan price. All plans is automatically created as monthly plans.")])]),t._v(" "),e("div",{staticClass:"duplicator"},[t._l(t.subscriptionPlans,(function(a,i){return e("div",{key:i++,staticClass:"plan-item duplicator-item"},[1!==i?e("x-icon",{staticClass:"delete-item",attrs:{size:"22"},on:{click:function(e){return t.removeRow(a)}}}):t._e(),t._v(" "),e("b",{staticClass:"duplicator-title"},[t._v(t._s(i)+". Plan")]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Name:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.attributes.name,expression:"plan.attributes.name"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your plan name",type:"text"},domProps:{value:a.attributes.name},on:{input:function(e){e.target.composing||t.$set(a.attributes,"name",e.target.value)}}}),t._v(" "),r[0]?e("span",{staticClass:"error-message"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Description (optional):")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Description"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.errors;return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.attributes.description,expression:"plan.attributes.description"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your plan description"},domProps:{value:a.attributes.description},on:{input:function(e){e.target.composing||t.$set(a.attributes,"description",e.target.value)}}}),t._v(" "),r[0]?e("span",{staticClass:"error-message"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Price:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Price",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.attributes.price,expression:"plan.attributes.price"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your plan price",type:"number",step:"0.01",min:"1",max:"999999999999"},domProps:{value:a.attributes.price},on:{input:function(e){e.target.composing||t.$set(a.attributes,"price",e.target.value)}}}),t._v(" "),r[0]?e("span",{staticClass:"error-message"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Storage Capacity:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage Capacity",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.attributes.capacity,expression:"plan.attributes.capacity"}],class:{"is-error":r[0]},attrs:{min:"1",max:"999999999",placeholder:"Type storage capacity in GB",type:"number"},domProps:{value:a.attributes.capacity},on:{input:function(e){e.target.composing||t.$set(a.attributes,"capacity",e.target.value)}}}),t._v(" "),r[0]?e("span",{staticClass:"error-message"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)})],1)],1)})),t._v(" "),e("ButtonBase",{staticClass:"duplicator-add-button",attrs:{"button-style":"theme-solid"},nativeOn:{click:function(a){return t.addRow.apply(null,arguments)}}},[t._v("Add New Plan\n                ")])],2),t._v(" "),t.isError?e("InfoBox",{staticStyle:{"margin-top":"40px"},attrs:{type:"error"}},[e("p",[t._v(t._s(t.errorMessage))])]):t._e(),t._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:t.submitButtonText,loading:t.isLoading,disabled:t.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"437ccd3f",null);a.default=y.exports},ASoH:function(t,a,e){"use strict";var i={name:"AuthContent",props:["loading","icon","text","ltr"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=(e("UcVe"),e("KHd+")),o=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",t._g(t._b({class:["button outline",{ltr:t.ltr}]},"button",t.$attrs,!1),t.$listeners),[e("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"203714d0",null);a.a=o.exports},CvMU:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".button[data-v-203714d0]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:flex;align-items:center;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button.ltr[data-v-203714d0]{flex-direction:row-reverse}.button.ltr .icon[data-v-203714d0]{margin-right:12px}.button .text-label[data-v-203714d0]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-203714d0]{margin-left:12px;font-size:1em}.button.solid[data-v-203714d0]{background:#0667b3;border:2px solid #0667b3}.button.solid .text-label[data-v-203714d0]{color:#fff}.button.outline[data-v-203714d0]{border:2px solid #1b2539}.button.outline .text-label[data-v-203714d0]{color:#1b2539}.button.outline .icon path[data-v-203714d0]{fill:#0667b3}.button.outline[data-v-203714d0]:hover{border-color:#0667b3}.button.outline:hover .text-label[data-v-203714d0]{color:#0667b3}@media (prefers-color-scheme:dark){.button.outline[data-v-203714d0]{background:#f4f5f6;border-color:#1b2539}.button.outline .text-label[data-v-203714d0]{color:#1b2539}}.sync-alt[data-v-203714d0]{-webkit-animation:spin-data-v-203714d0 1s linear infinite;animation:spin-data-v-203714d0 1s linear infinite}@-webkit-keyframes spin-data-v-203714d0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-203714d0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},Idvm:function(t,a,e){var i=e("lig4");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},Jx8r:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},MQUL:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form[data-v-437ccd3f]{max-width:700px}.form.inline-form[data-v-437ccd3f]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-437ccd3f]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-437ccd3f]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-437ccd3f]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-437ccd3f]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-437ccd3f]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-437ccd3f]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-437ccd3f]:last-child{margin-bottom:0}.form.block-form .button[data-v-437ccd3f]{margin-top:50px}.form .inline-wrapper[data-v-437ccd3f]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-437ccd3f]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-437ccd3f]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-437ccd3f]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-437ccd3f]{display:flex}.single-line-form .submit-button[data-v-437ccd3f]{margin-left:20px}.error-message[data-v-437ccd3f]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-437ccd3f]{width:100%}input[type=email][data-v-437ccd3f],input[type=number][data-v-437ccd3f],input[type=password][data-v-437ccd3f],input[type=text][data-v-437ccd3f],textarea[data-v-437ccd3f]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-437ccd3f],input[type=number].is-error[data-v-437ccd3f],input[type=password].is-error[data-v-437ccd3f],input[type=text].is-error[data-v-437ccd3f],textarea.is-error[data-v-437ccd3f]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-437ccd3f]::-moz-placeholder,input[type=number][data-v-437ccd3f]::-moz-placeholder,input[type=password][data-v-437ccd3f]::-moz-placeholder,input[type=text][data-v-437ccd3f]::-moz-placeholder,textarea[data-v-437ccd3f]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-437ccd3f]:-ms-input-placeholder,input[type=number][data-v-437ccd3f]:-ms-input-placeholder,input[type=password][data-v-437ccd3f]:-ms-input-placeholder,input[type=text][data-v-437ccd3f]:-ms-input-placeholder,textarea[data-v-437ccd3f]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-437ccd3f]::placeholder,input[type=number][data-v-437ccd3f]::placeholder,input[type=password][data-v-437ccd3f]::placeholder,input[type=text][data-v-437ccd3f]::placeholder,textarea[data-v-437ccd3f]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-437ccd3f]:focus,input[type=number][data-v-437ccd3f]:focus,input[type=password][data-v-437ccd3f]:focus,input[type=text][data-v-437ccd3f]:focus,textarea[data-v-437ccd3f]:focus{border-color:#0667b3;box-shadow:0 1px 5px rgba(6,103,179,.3)}input[type=email][disabled][data-v-437ccd3f],input[type=number][disabled][data-v-437ccd3f],input[type=password][disabled][data-v-437ccd3f],input[type=text][disabled][data-v-437ccd3f],textarea[disabled][data-v-437ccd3f]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-437ccd3f]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-437ccd3f],.additional-link b[data-v-437ccd3f]{color:#0667b3;cursor:pointer}.additional-link a[data-v-437ccd3f]:hover,.additional-link b[data-v-437ccd3f]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-437ccd3f]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-437ccd3f]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-437ccd3f],.form textarea[data-v-437ccd3f]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-437ccd3f]{display:block}.form.block-form .block-wrapper label[data-v-437ccd3f]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-437ccd3f]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-437ccd3f]{display:block}.form.inline-form .input-wrapper .error-message[data-v-437ccd3f]{position:relative;bottom:0}.form .button[data-v-437ccd3f]{padding:14px 32px}.single-line-form[data-v-437ccd3f]{display:block}.single-line-form .submit-button[data-v-437ccd3f]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-437ccd3f],input[type=number][data-v-437ccd3f],input[type=password][data-v-437ccd3f],input[type=text][data-v-437ccd3f],textarea[data-v-437ccd3f]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-437ccd3f]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-437ccd3f]{color:#7d858c}.form.block-form .block-wrapper label[data-v-437ccd3f],.form .inline-wrapper .switch-label .input-label[data-v-437ccd3f]{color:#1b2539}input[type=email][data-v-437ccd3f],input[type=number][data-v-437ccd3f],input[type=password][data-v-437ccd3f],input[type=text][data-v-437ccd3f],textarea[data-v-437ccd3f]{border-color:#f4f5f6;background:#f4f5f6;color:#1b2539}input[type=email][data-v-437ccd3f]::-moz-placeholder,input[type=number][data-v-437ccd3f]::-moz-placeholder,input[type=password][data-v-437ccd3f]::-moz-placeholder,input[type=text][data-v-437ccd3f]::-moz-placeholder,textarea[data-v-437ccd3f]::-moz-placeholder{color:#7d858c}input[type=email][data-v-437ccd3f]:-ms-input-placeholder,input[type=number][data-v-437ccd3f]:-ms-input-placeholder,input[type=password][data-v-437ccd3f]:-ms-input-placeholder,input[type=text][data-v-437ccd3f]:-ms-input-placeholder,textarea[data-v-437ccd3f]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-437ccd3f]::placeholder,input[type=number][data-v-437ccd3f]::placeholder,input[type=password][data-v-437ccd3f]::placeholder,input[type=text][data-v-437ccd3f]::placeholder,textarea[data-v-437ccd3f]::placeholder{color:#7d858c}input[type=email][disabled][data-v-437ccd3f],input[type=number][disabled][data-v-437ccd3f],input[type=password][disabled][data-v-437ccd3f],input[type=text][disabled][data-v-437ccd3f],textarea[disabled][data-v-437ccd3f]{background:#f4f5f6;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.auth-logo-text[data-v-437ccd3f]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-437ccd3f]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-437ccd3f]{min-width:310px}.auth-form .additional-link a[data-v-437ccd3f]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-437ccd3f]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-437ccd3f]{width:120px;margin-bottom:20px}.auth-form h1[data-v-437ccd3f]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-437ccd3f]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-437ccd3f]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-437ccd3f]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-437ccd3f]{width:100%}.auth-form h1[data-v-437ccd3f]{font-size:1.875em}.auth-form h2[data-v-437ccd3f]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-437ccd3f]{font-size:1.375em}.auth-form h2[data-v-437ccd3f]{font-size:1.125em}.auth-form input[data-v-437ccd3f]{min-width:0}.auth-form .additional-link[data-v-437ccd3f]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-437ccd3f],.auth-form h1[data-v-437ccd3f],.auth-form h2[data-v-437ccd3f]{color:#1b2539}}.content-headline[data-v-437ccd3f]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-437ccd3f]{min-width:0}.duplicator .duplicator-add-button[data-v-437ccd3f]{width:100%}.duplicator .duplicator-item[data-v-437ccd3f]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-437ccd3f]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-437ccd3f]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-437ccd3f]{stroke:#0667b3}.duplicator .duplicator-item input[data-v-437ccd3f],.duplicator .duplicator-item textarea[data-v-437ccd3f]{box-shadow:none;background:#fafafa}.form[data-v-437ccd3f]{max-width:580px;text-align:left}.submit-wrapper[data-v-437ccd3f]{text-align:right}.submit-wrapper .button[data-v-437ccd3f]{margin:58px 0 50px;width:100%}.title-icon[data-v-437ccd3f]{margin-bottom:10px;-webkit-animation:spinner-data-v-437ccd3f 5s linear infinite;animation:spinner-data-v-437ccd3f 5s linear infinite}.title-icon circle[data-v-437ccd3f],.title-icon path[data-v-437ccd3f]{stroke:#0667b3}@-webkit-keyframes spinner-data-v-437ccd3f{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-437ccd3f{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-437ccd3f],.duplicator .duplicator-item input[data-v-437ccd3f],.duplicator .duplicator-item textarea[data-v-437ccd3f]{background:#f4f5f6}}",""])},P9jD:function(t,a,e){var i=e("CvMU");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},UcVe:function(t,a,e){"use strict";e("P9jD")},VoUj:function(t,a,e){var i=e("MQUL");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},Xk6H:function(t,a,e){"use strict";e("Idvm")},ZEkr:function(t,a,e){"use strict";e("VoUj")},bDRN:function(t,a,e){"use strict";var i={name:"AuthContentWrapper"},r=(e("iYAH"),e("KHd+")),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=o.exports},eZ9V:function(t,a,e){"use strict";var i={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},r=(e("Xk6H"),e("KHd+")),o=Object(r.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},iYAH:function(t,a,e){"use strict";e("lh0Q")},j8qy:function(t,a,e){"use strict";var i={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=e("KHd+"),o=Object(r.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=o.exports},lh0Q:function(t,a,e){var i=e("Jx8r");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},lig4:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#0667b3}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#1b2539}}",""])}}]);