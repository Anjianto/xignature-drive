(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2Sb1":function(t,a,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").g}},r=(e("qf9i"),e("KHd+")),o=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(a){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"aafe7e24",null);a.a=o.exports},"3Idf":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#f4f5f6}.page-header .title[data-v-aafe7e24]{color:#1b2539}.page-header .icon path[data-v-aafe7e24]{fill:#0667b3}}",""])},"92Jy":function(t,a,e){"use strict";e("qphJ")},GqMj:function(t,a,e){var i=e("v3Td");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},Idvm:function(t,a,e){var i=e("lig4");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},KPNK:function(t,a,e){var i=e("3Idf");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},THmQ:function(t,a,e){"use strict";var i={name:"SectionTitle"},r=(e("92Jy"),e("KHd+")),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);a.a=o.exports},Xk6H:function(t,a,e){"use strict";e("Idvm")},btva:function(t,a,e){"use strict";e.r(a);var i=e("A5+z"),r=e("eZ9V"),o=e("TJPC"),n=e("xxrA"),l=e("D62o"),p=e("THmQ"),d=e("Nv84"),s=e("2Sb1"),f=e("zTYo"),c=e("vDqi"),u=e.n(c),m={name:"PageEdit",components:{ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,FormLabel:r.a,SectionTitle:p.a,MobileHeader:l.a,SwitchInput:n.a,PageHeader:s.a,ButtonBase:d.a,required:o.d,Spinner:f.a},data:function(){return{isLoading:!0,page:void 0}},methods:{changeStatus:function(t){this.$updateText("/pages/"+this.$route.params.slug,"visibility",t)}},created:function(){var t=this;u.a.get("/api/pages/"+this.$route.params.slug).then((function(a){t.page=a.data,t.isLoading=!1}))}},v=(e("fXlL"),e("KHd+")),b=Object(v.a)(m,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"single-page"}},[!t.isLoading&&t.page?e("div",{attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("PageHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("div",{staticClass:"content-page"},[e("ValidationObserver",{ref:"personalInformation",staticClass:"form block-form form-fixed-width",attrs:{tag:"form"},scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;return[e("FormLabel",[t._v("\n                    "+t._s(t.page.data.attributes.title)+"\n                ")]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[t._v(t._s(t.$t("admin_pages.form.visibility"))+":")]),t._v(" "),e("small",{staticClass:"input-help"},[t._v(t._s(t.$t("admin_pages.form.visibility_help")))])]),t._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:t.page.data.attributes.visibility},on:{input:t.changeStatus}})],1)])]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("admin_pages.form.title"))+":")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.page.data.attributes.title,expression:"page.data.attributes.title"}],class:{"is-error":i[0]},attrs:{placeholder:t.$t("admin_pages.form.title_plac"),type:"text"},domProps:{value:t.page.data.attributes.title},on:{input:[function(a){a.target.composing||t.$set(t.page.data.attributes,"title",a.target.value)},function(a){return t.$updateText("/pages/"+t.$route.params.slug,"title",t.page.data.attributes.title)}]}}),t._v(" "),i[0]?e("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("admin_pages.form.slug"))+":")]),t._v(" "),e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.page.data.attributes.slug,expression:"page.data.attributes.slug"}],attrs:{type:"text",disabled:""},domProps:{value:t.page.data.attributes.slug},on:{input:function(a){a.target.composing||t.$set(t.page.data.attributes,"slug",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("admin_pages.form.content"))+":")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.page.data.attributes.content,expression:"page.data.attributes.content"}],class:{"is-error":i[0]},attrs:{placeholder:t.$t("admin_pages.form.content_plac"),rows:"18"},domProps:{value:t.page.data.attributes.content},on:{input:[function(a){a.target.composing||t.$set(t.page.data.attributes,"content",a.target.value)},function(a){return t.$updateText("/pages/"+t.$route.params.slug,"content",t.page.data.attributes.content)}]}}),t._v(" "),i[0]?e("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1)]}}],null,!1,3800545431)})],1)],1):t._e(),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()])}),[],!1,null,"305f0172",null);a.default=b.exports},eZ9V:function(t,a,e){"use strict";var i={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},r=(e("Xk6H"),e("KHd+")),o=Object(r.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},fXlL:function(t,a,e){"use strict";e("GqMj")},lW02:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-69d97df2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-69d97df2]{color:#0667b3}}",""])},lig4:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#0667b3}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#1b2539}}",""])},qf9i:function(t,a,e){"use strict";e("KPNK")},qphJ:function(t,a,e){var i=e("lW02");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,r);i.locals&&(t.exports=i.locals)},v3Td:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form[data-v-305f0172]{max-width:700px}.form.inline-form[data-v-305f0172]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-305f0172]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-305f0172]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-305f0172]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-305f0172]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-305f0172]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-305f0172]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-305f0172]:last-child{margin-bottom:0}.form.block-form .button[data-v-305f0172]{margin-top:50px}.form .inline-wrapper[data-v-305f0172]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-305f0172]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-305f0172]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-305f0172]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-305f0172]{display:flex}.single-line-form .submit-button[data-v-305f0172]{margin-left:20px}.error-message[data-v-305f0172]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-305f0172]{width:100%}input[type=email][data-v-305f0172],input[type=number][data-v-305f0172],input[type=password][data-v-305f0172],input[type=text][data-v-305f0172],textarea[data-v-305f0172]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-305f0172],input[type=number].is-error[data-v-305f0172],input[type=password].is-error[data-v-305f0172],input[type=text].is-error[data-v-305f0172],textarea.is-error[data-v-305f0172]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-305f0172]::-moz-placeholder,input[type=number][data-v-305f0172]::-moz-placeholder,input[type=password][data-v-305f0172]::-moz-placeholder,input[type=text][data-v-305f0172]::-moz-placeholder,textarea[data-v-305f0172]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-305f0172]:-ms-input-placeholder,input[type=number][data-v-305f0172]:-ms-input-placeholder,input[type=password][data-v-305f0172]:-ms-input-placeholder,input[type=text][data-v-305f0172]:-ms-input-placeholder,textarea[data-v-305f0172]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-305f0172]::placeholder,input[type=number][data-v-305f0172]::placeholder,input[type=password][data-v-305f0172]::placeholder,input[type=text][data-v-305f0172]::placeholder,textarea[data-v-305f0172]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-305f0172]:focus,input[type=number][data-v-305f0172]:focus,input[type=password][data-v-305f0172]:focus,input[type=text][data-v-305f0172]:focus,textarea[data-v-305f0172]:focus{border-color:#0667b3;box-shadow:0 1px 5px rgba(6,103,179,.3)}input[type=email][disabled][data-v-305f0172],input[type=number][disabled][data-v-305f0172],input[type=password][disabled][data-v-305f0172],input[type=text][disabled][data-v-305f0172],textarea[disabled][data-v-305f0172]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-305f0172]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-305f0172],.additional-link b[data-v-305f0172]{color:#0667b3;cursor:pointer}.additional-link a[data-v-305f0172]:hover,.additional-link b[data-v-305f0172]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-305f0172]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-305f0172]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-305f0172],.form textarea[data-v-305f0172]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-305f0172]{display:block}.form.block-form .block-wrapper label[data-v-305f0172]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-305f0172]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-305f0172]{display:block}.form.inline-form .input-wrapper .error-message[data-v-305f0172]{position:relative;bottom:0}.form .button[data-v-305f0172]{padding:14px 32px}.single-line-form[data-v-305f0172]{display:block}.single-line-form .submit-button[data-v-305f0172]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-305f0172],input[type=number][data-v-305f0172],input[type=password][data-v-305f0172],input[type=text][data-v-305f0172],textarea[data-v-305f0172]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-305f0172]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-305f0172]{color:#7d858c}.form.block-form .block-wrapper label[data-v-305f0172],.form .inline-wrapper .switch-label .input-label[data-v-305f0172]{color:#1b2539}input[type=email][data-v-305f0172],input[type=number][data-v-305f0172],input[type=password][data-v-305f0172],input[type=text][data-v-305f0172],textarea[data-v-305f0172]{border-color:#f4f5f6;background:#f4f5f6;color:#1b2539}input[type=email][data-v-305f0172]::-moz-placeholder,input[type=number][data-v-305f0172]::-moz-placeholder,input[type=password][data-v-305f0172]::-moz-placeholder,input[type=text][data-v-305f0172]::-moz-placeholder,textarea[data-v-305f0172]::-moz-placeholder{color:#7d858c}input[type=email][data-v-305f0172]:-ms-input-placeholder,input[type=number][data-v-305f0172]:-ms-input-placeholder,input[type=password][data-v-305f0172]:-ms-input-placeholder,input[type=text][data-v-305f0172]:-ms-input-placeholder,textarea[data-v-305f0172]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-305f0172]::placeholder,input[type=number][data-v-305f0172]::placeholder,input[type=password][data-v-305f0172]::placeholder,input[type=text][data-v-305f0172]::placeholder,textarea[data-v-305f0172]::placeholder{color:#7d858c}input[type=email][disabled][data-v-305f0172],input[type=number][disabled][data-v-305f0172],input[type=password][disabled][data-v-305f0172],input[type=text][disabled][data-v-305f0172],textarea[disabled][data-v-305f0172]{background:#f4f5f6;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}",""])}}]);