(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"2Sb1":function(e,a,t){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").g}},n=(t("qf9i"),t("KHd+")),r=Object(n.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-header"},[e.canBack?t("div",{staticClass:"go-back",on:{click:function(a){return e.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"aafe7e24",null);a.a=r.exports},"3Idf":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#f4f5f6}.page-header .title[data-v-aafe7e24]{color:#1b2539}.page-header .icon path[data-v-aafe7e24]{fill:#0667b3}}",""])},"4zU4":function(e,a,t){"use strict";t.r(a);var i=t("wz3J"),n=t("D62o"),r=t("2Sb1"),o=t("zTYo"),p=t("CjXH"),b=(t("vDqi"),{name:"UpgradePlan",components:{PlanPricingTables:i.a,MobileHeader:n.a,PageHeader:r.a,CloudIcon:p.j,Spinner:o.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(e){this.isLoading=e},onSelectTable:function(e){this.$store.commit("STORE_REQUESTED_PLAN",e)}},beforeMount:function(){var e=document.createElement("script");e.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(e)},mounted:function(){this.$store.dispatch("getAppData")}}),l=(t("W+hG"),t("KHd+")),c=Object(l.a)(b,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"single-page"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"plan-title"},[t("cloud-icon",{staticClass:"title-icon",attrs:{size:"42"}}),e._v(" "),t("h1",[e._v(e._s(e.$t("page_pricing_tables.title")))]),e._v(" "),t("h2",[e._v(e._s(e.$t("page_pricing_tables.description")))])],1),e._v(" "),t("PlanPricingTables",{on:{load:e.onLoadPricingTables,"selected-plan":e.onSelectTable}})],1)],1),e._v(" "),e.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):e._e()])}),[],!1,null,"43cb5be1",null);a.default=c.exports},AcNm:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form[data-v-43cb5be1]{max-width:700px}.form.inline-form[data-v-43cb5be1]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-43cb5be1]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-43cb5be1]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-43cb5be1]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-43cb5be1]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-43cb5be1]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-43cb5be1]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-43cb5be1]:last-child{margin-bottom:0}.form.block-form .button[data-v-43cb5be1]{margin-top:50px}.form .inline-wrapper[data-v-43cb5be1]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-43cb5be1]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-43cb5be1]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-43cb5be1]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-43cb5be1]{display:flex}.single-line-form .submit-button[data-v-43cb5be1]{margin-left:20px}.error-message[data-v-43cb5be1]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-43cb5be1]{width:100%}input[type=email][data-v-43cb5be1],input[type=number][data-v-43cb5be1],input[type=password][data-v-43cb5be1],input[type=tel][data-v-43cb5be1],input[type=text][data-v-43cb5be1],textarea[data-v-43cb5be1]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-43cb5be1],input[type=number].is-error[data-v-43cb5be1],input[type=password].is-error[data-v-43cb5be1],input[type=tel].is-error[data-v-43cb5be1],input[type=text].is-error[data-v-43cb5be1],textarea.is-error[data-v-43cb5be1]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-43cb5be1]::-moz-placeholder,input[type=number][data-v-43cb5be1]::-moz-placeholder,input[type=password][data-v-43cb5be1]::-moz-placeholder,input[type=tel][data-v-43cb5be1]::-moz-placeholder,input[type=text][data-v-43cb5be1]::-moz-placeholder,textarea[data-v-43cb5be1]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-43cb5be1]:-ms-input-placeholder,input[type=number][data-v-43cb5be1]:-ms-input-placeholder,input[type=password][data-v-43cb5be1]:-ms-input-placeholder,input[type=tel][data-v-43cb5be1]:-ms-input-placeholder,input[type=text][data-v-43cb5be1]:-ms-input-placeholder,textarea[data-v-43cb5be1]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-43cb5be1]::placeholder,input[type=number][data-v-43cb5be1]::placeholder,input[type=password][data-v-43cb5be1]::placeholder,input[type=tel][data-v-43cb5be1]::placeholder,input[type=text][data-v-43cb5be1]::placeholder,textarea[data-v-43cb5be1]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-43cb5be1]:focus,input[type=number][data-v-43cb5be1]:focus,input[type=password][data-v-43cb5be1]:focus,input[type=tel][data-v-43cb5be1]:focus,input[type=text][data-v-43cb5be1]:focus,textarea[data-v-43cb5be1]:focus{border-color:#0667b3;box-shadow:0 1px 5px rgba(6,103,179,.3)}input[type=email][disabled][data-v-43cb5be1],input[type=number][disabled][data-v-43cb5be1],input[type=password][disabled][data-v-43cb5be1],input[type=tel][disabled][data-v-43cb5be1],input[type=text][disabled][data-v-43cb5be1],textarea[disabled][data-v-43cb5be1]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-43cb5be1]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-43cb5be1],.additional-link b[data-v-43cb5be1]{color:#0667b3;cursor:pointer}.additional-link a[data-v-43cb5be1]:hover,.additional-link b[data-v-43cb5be1]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-43cb5be1]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-43cb5be1]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-43cb5be1],.form textarea[data-v-43cb5be1]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-43cb5be1]{display:block}.form.block-form .block-wrapper label[data-v-43cb5be1]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-43cb5be1]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-43cb5be1]{display:block}.form.inline-form .input-wrapper .error-message[data-v-43cb5be1]{position:relative;bottom:0}.form .button[data-v-43cb5be1]{padding:14px 32px}.single-line-form[data-v-43cb5be1]{display:block}.single-line-form .submit-button[data-v-43cb5be1]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-43cb5be1],input[type=number][data-v-43cb5be1],input[type=password][data-v-43cb5be1],input[type=tel][data-v-43cb5be1],input[type=text][data-v-43cb5be1],textarea[data-v-43cb5be1]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-43cb5be1]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-43cb5be1]{color:#7d858c}.form.block-form .block-wrapper label[data-v-43cb5be1],.form .inline-wrapper .switch-label .input-label[data-v-43cb5be1]{color:#1b2539}input[type=email][data-v-43cb5be1],input[type=number][data-v-43cb5be1],input[type=password][data-v-43cb5be1],input[type=tel][data-v-43cb5be1],input[type=text][data-v-43cb5be1],textarea[data-v-43cb5be1]{border-color:#f4f5f6;background:#f4f5f6;color:#1b2539}input[type=email][data-v-43cb5be1]::-moz-placeholder,input[type=number][data-v-43cb5be1]::-moz-placeholder,input[type=password][data-v-43cb5be1]::-moz-placeholder,input[type=tel][data-v-43cb5be1]::-moz-placeholder,input[type=text][data-v-43cb5be1]::-moz-placeholder,textarea[data-v-43cb5be1]::-moz-placeholder{color:#7d858c}input[type=email][data-v-43cb5be1]:-ms-input-placeholder,input[type=number][data-v-43cb5be1]:-ms-input-placeholder,input[type=password][data-v-43cb5be1]:-ms-input-placeholder,input[type=tel][data-v-43cb5be1]:-ms-input-placeholder,input[type=text][data-v-43cb5be1]:-ms-input-placeholder,textarea[data-v-43cb5be1]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-43cb5be1]::placeholder,input[type=number][data-v-43cb5be1]::placeholder,input[type=password][data-v-43cb5be1]::placeholder,input[type=tel][data-v-43cb5be1]::placeholder,input[type=text][data-v-43cb5be1]::placeholder,textarea[data-v-43cb5be1]::placeholder{color:#7d858c}input[type=email][disabled][data-v-43cb5be1],input[type=number][disabled][data-v-43cb5be1],input[type=password][disabled][data-v-43cb5be1],input[type=tel][disabled][data-v-43cb5be1],input[type=text][disabled][data-v-43cb5be1],textarea[disabled][data-v-43cb5be1]{background:#f4f5f6;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.plan-title[data-v-43cb5be1]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-43cb5be1],.plan-title line[data-v-43cb5be1],.plan-title path[data-v-43cb5be1],.plan-title polyline[data-v-43cb5be1],.plan-title rect[data-v-43cb5be1]{color:#0667b3}.plan-title h1[data-v-43cb5be1]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-43cb5be1]{font-size:1.25em;font-weight:500}@media (prefers-color-scheme:dark){.plan-title h1[data-v-43cb5be1]{color:#1b2539}.plan-title h2[data-v-43cb5be1]{color:#7d858c}}",""])},KPNK:function(e,a,t){var i=t("3Idf");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},VNWY:function(e,a,t){"use strict";t("j+Oh")},"W+hG":function(e,a,t){"use strict";t("dece")},ZaIx:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".plan[data-v-8b2ebeb2]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-8b2ebeb2]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-8b2ebeb2]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-8b2ebeb2],.plan .plan-header .icon line[data-v-8b2ebeb2],.plan .plan-header .icon path[data-v-8b2ebeb2],.plan .plan-header .icon polyline[data-v-8b2ebeb2],.plan .plan-header .icon rect[data-v-8b2ebeb2]{color:#0667b3}.plan .plan-header .title[data-v-8b2ebeb2]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-8b2ebeb2]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-8b2ebeb2]{margin:65px 0}.plan .plan-features .storage-size[data-v-8b2ebeb2]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-8b2ebeb2]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{width:100%;text-align:center}.plan .plan-footer .price[data-v-8b2ebeb2]{color:#0667b3;font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-8b2ebeb2]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-8b2ebeb2]{display:block;margin:0}}@media (prefers-color-scheme:dark){.plan .plan-wrapper[data-v-8b2ebeb2]{background:#f4f5f6}.plan .plan-header .title[data-v-8b2ebeb2]{color:#1b2539}.plan .plan-header .description[data-v-8b2ebeb2]{color:#7d858c}.plan .plan-features .storage-description[data-v-8b2ebeb2],.plan .plan-features .storage-size[data-v-8b2ebeb2]{color:#1b2539}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{background:rgba(6,103,179,.1)}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] .content{color:#0667b3}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{color:#1b2539}}",""])},dece:function(e,a,t){var i=t("AcNm");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},"j+Oh":function(e,a,t){var i=t("ZaIx");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},qf9i:function(e,a,t){"use strict";t("KPNK")},wz3J:function(e,a,t){"use strict";var i=t("Nv84"),n=t("CjXH"),r=t("L2JU"),o=t("vDqi"),p=t.n(o);function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var c={name:"PlanPricingTables",components:{HardDriveIcon:n.B,ButtonBase:i.a},data:function(){return{plans:void 0}},computed:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},Object(r.b)(["user"])),methods:{selectPlan:function(e){this.$emit("selected-plan",e),this.$router.push({name:"UpgradeBilling"})}},created:function(){var e=this;p.a.get("/api/public/pricing").then((function(a){e.plans=a.data.filter((function(a){return a.data.attributes.capacity>e.user.data.attributes.storage_capacity})),e.$emit("load",!1)}))}},d=(t("VNWY"),t("KHd+")),s=Object(d.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.plans?t("div",{staticClass:"plans-wrapper"},e._l(e.plans,(function(a,i){return t("article",{key:i,staticClass:"plan"},[t("div",{staticClass:"plan-wrapper"},[t("header",{staticClass:"plan-header"},[t("div",{staticClass:"icon"},[t("hard-drive-icon",{attrs:{size:"26"}})],1),e._v(" "),t("h1",{staticClass:"title"},[e._v(e._s(a.data.attributes.name))]),e._v(" "),t("h2",{staticClass:"description"},[e._v(e._s(a.data.attributes.description))])]),e._v(" "),t("section",{staticClass:"plan-features"},[t("b",{staticClass:"storage-size"},[e._v(e._s(a.data.attributes.capacity_formatted))]),e._v(" "),t("span",{staticClass:"storage-description"},[e._v(e._s(e.$t("page_pricing_tables.storage_capacity")))])]),e._v(" "),t("footer",{staticClass:"plan-footer"},[t("b",{staticClass:"price"},[e._v("\n                    "+e._s(a.data.attributes.price)+"/"+e._s(e.$t("global.monthly_ac"))+"\n                    "),a.data.attributes.tax_rates.length>0?t("small",{staticClass:"vat-disclaimer"},[e._v(e._s(e.$t("page_pricing_tables.vat_excluded")))]):e._e()]),e._v(" "),t("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(t){return e.selectPlan(a)}}},[e._v("\n                    "+e._s(e.$t("global.get_it"))+"\n                ")])],1)])])})),0):e._e()}),[],!1,null,"8b2ebeb2",null);a.a=s.exports}}]);