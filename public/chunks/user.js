(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"+Pqb":function(e,t,a){"use strict";var i={name:"ProgressBar",props:["progress"]},s=(a("woIv"),a("KHd+")),r=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"f372b280",null);t.a=r.exports},"2Sb1":function(e,t,a){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").g}},s=(a("qf9i"),a("KHd+")),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[e.canBack?a("div",{staticClass:"go-back",on:{click:function(t){return e.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"aafe7e24",null);t.a=r.exports},"3Idf":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#f4f5f6}.page-header .title[data-v-aafe7e24]{color:#1b2539}.page-header .icon path[data-v-aafe7e24]{fill:#0667b3}}",""])},"3OWm":function(e,t,a){"use strict";a.r(t);var i=a("CjXH"),s=a("xnZf"),r=a("D62o"),o=a("THmQ"),n=a("2Sb1"),l=a("kPoH"),c=a("zTYo"),d=a("L2JU"),f=a("vDqi"),p=a.n(f);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g={name:"Profile",components:{CreditCardIcon:i.n,HardDriveIcon:i.B,InboxIcon:i.E,StorageItemDetail:s.a,SectionTitle:o.a,FileTextIcon:i.w,MobileHeader:r.a,PageHeader:n.a,ColorLabel:l.a,Trash2Icon:i.cb,UserIcon:i.gb,LockIcon:i.J,Spinner:c.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({admin:function(){return this.$store.getters.user?this.$store.getters.user.data.attributes:void 0}},Object(d.b)(["config"])),data:function(){return{isLoading:!0,user:void 0}},methods:{fetchUser:function(){var e=this;p.a.get("/api/users/"+this.$route.params.id+"/detail").then((function(t){e.user=t.data,e.isLoading=!1}))}},created:function(){this.fetchUser()}},m=(a("RrKP"),a("KHd+")),u=Object(m.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"single-page"}},[e.isLoading?e._e():a("div",{attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),a("div",{staticClass:"content-page"},[a("div",{staticClass:"user-thumbnail"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.data.attributes.avatar,alt:e.user.data.attributes.name}})]),e._v(" "),a("div",{staticClass:"info"},[a("b",{staticClass:"name"},[e._v("\n                        "+e._s(e.user.data.attributes.name)+"\n                        "),a("ColorLabel",{attrs:{color:"purple"}},[e._v("\n                            "+e._s(e.user.data.attributes.role)+"\n                        ")])],1),e._v(" "),a("span",{staticClass:"email"},[e._v(e._s(e.user.data.attributes.email))])])]),e._v(" "),a("div",{staticClass:"menu-list-wrapper horizontal"},[a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserDetail"}}},[a("div",{staticClass:"icon"},[a("user-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.detail"))+"\n                    ")])]),e._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserStorage"}}},[a("div",{staticClass:"icon"},[a("hard-drive-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.storage"))+"\n                    ")])]),e._v(" "),e.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserSubscription"}}},[a("div",{staticClass:"icon"},[a("credit-card-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.subscription"))+"\n                    ")])]):e._e(),e._v(" "),e.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserInvoices"}}},[a("div",{staticClass:"icon"},[a("file-text-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.invoices"))+"\n                    ")])]):e._e(),e._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserPassword"}}},[a("div",{staticClass:"icon"},[a("lock-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.password"))+"\n                    ")])]),e._v(" "),e.user.data.attributes.name!==e.admin.name?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserDelete"}}},[a("div",{staticClass:"icon"},[a("trash2-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.delete"))+"\n                    ")])]):e._e(),e._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"UserIntegration"}}},[a("div",{staticClass:"icon"},[a("inbox-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n                        Integration\n                    ")])])],1),e._v(" "),a("router-view",{attrs:{user:e.user},on:{"reload-user":e.fetchUser}})],1)],1),e._v(" "),e.isLoading?a("div",{attrs:{id:"loader"}},[a("Spinner")],1):e._e()])}),[],!1,null,"0cc41262",null);t.default=u.exports},"3bJh":function(e,t,a){var i=a("6/0p");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(e.exports=i.locals)},"6/0p":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".user-thumbnail[data-v-0cc41262]{display:flex;align-items:center;cursor:pointer;padding-bottom:10px;padding-top:15px}.user-thumbnail .avatar[data-v-0cc41262]{margin-right:20px;position:relative}.user-thumbnail .avatar img[data-v-0cc41262]{line-height:0;width:62px;height:62px;border-radius:12px;z-index:1;position:relative}.user-thumbnail .avatar img.blurred[data-v-0cc41262]{position:absolute;left:0;top:2px;z-index:0;filter:blur(8px);opacity:.5;top:0}.user-thumbnail .info .name[data-v-0cc41262]{display:block;font-size:1.0625em;line-height:1}.user-thumbnail .info .email[data-v-0cc41262]{color:rgba(27,37,57,.7);font-size:.875em}@media (prefers-color-scheme:dark){.user-thumbnail .info .email[data-v-0cc41262]{color:#7d858c}}",""])},"92Jy":function(e,t,a){"use strict";a("qphJ")},F11w:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".color-label[data-v-ffcb2882]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-ffcb2882]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-ffcb2882]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-ffcb2882]{color:#0667b3;background:rgba(6,103,179,.1)}.color-label.red[data-v-ffcb2882]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},"F12+":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".progress-bar[data-v-f372b280]{width:100%;height:5px;background:#f4f5f6;margin-top:6px;border-radius:10px}.progress-bar span[data-v-f372b280]{background:#0667b3;display:block;height:100%;border-radius:10px;max-width:100%}@media (prefers-color-scheme:dark){.progress-bar[data-v-f372b280]{background:#f4f5f6}}@media only screen and (min-width:680px) and (prefers-color-scheme:dark){.progress-bar[data-v-f372b280]{background:#f4f5f6}}",""])},GkQO:function(e,t,a){"use strict";a("J5Z7")},J5Z7:function(e,t,a){var i=a("F11w");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(e.exports=i.locals)},KPNK:function(e,t,a){var i=a("3Idf");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(e.exports=i.locals)},LE5O:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-56af1b6e]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-56af1b6e],.detail-storage-item.disk .icon line[data-v-56af1b6e],.detail-storage-item.disk .icon path[data-v-56af1b6e],.detail-storage-item.disk .icon polygon[data-v-56af1b6e],.detail-storage-item.disk .icon polyline[data-v-56af1b6e],.detail-storage-item.disk .icon rect[data-v-56af1b6e]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-56af1b6e],.detail-storage-item.images .icon line[data-v-56af1b6e],.detail-storage-item.images .icon path[data-v-56af1b6e],.detail-storage-item.images .icon polygon[data-v-56af1b6e],.detail-storage-item.images .icon polyline[data-v-56af1b6e],.detail-storage-item.images .icon rect[data-v-56af1b6e]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-56af1b6e] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-56af1b6e],.detail-storage-item.videos .icon line[data-v-56af1b6e],.detail-storage-item.videos .icon path[data-v-56af1b6e],.detail-storage-item.videos .icon polygon[data-v-56af1b6e],.detail-storage-item.videos .icon polyline[data-v-56af1b6e],.detail-storage-item.videos .icon rect[data-v-56af1b6e]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-56af1b6e] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-56af1b6e],.detail-storage-item.audios .icon line[data-v-56af1b6e],.detail-storage-item.audios .icon path[data-v-56af1b6e],.detail-storage-item.audios .icon polygon[data-v-56af1b6e],.detail-storage-item.audios .icon polyline[data-v-56af1b6e],.detail-storage-item.audios .icon rect[data-v-56af1b6e]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-56af1b6e] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-56af1b6e],.detail-storage-item.documents .icon line[data-v-56af1b6e],.detail-storage-item.documents .icon path[data-v-56af1b6e],.detail-storage-item.documents .icon polygon[data-v-56af1b6e],.detail-storage-item.documents .icon polyline[data-v-56af1b6e],.detail-storage-item.documents .icon rect[data-v-56af1b6e]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-56af1b6e] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-56af1b6e],.detail-storage-item.others .icon line[data-v-56af1b6e],.detail-storage-item.others .icon path[data-v-56af1b6e],.detail-storage-item.others .icon polygon[data-v-56af1b6e],.detail-storage-item.others .icon polyline[data-v-56af1b6e],.detail-storage-item.others .icon rect[data-v-56af1b6e]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-56af1b6e] span{background:#1b2539}.header-storage-item[data-v-56af1b6e]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-56af1b6e]{width:35px}.header-storage-item .type[data-v-56af1b6e]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-56af1b6e]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}@media (prefers-color-scheme:dark){.header-storage-item .type[data-v-56af1b6e]{color:#1b2539}.header-storage-item .total-size[data-v-56af1b6e]{color:#7d858c}.detail-storage-item.disk .icon circle[data-v-56af1b6e],.detail-storage-item.disk .icon line[data-v-56af1b6e],.detail-storage-item.disk .icon path[data-v-56af1b6e],.detail-storage-item.disk .icon polygon[data-v-56af1b6e],.detail-storage-item.disk .icon polyline[data-v-56af1b6e],.detail-storage-item.disk .icon rect[data-v-56af1b6e],.detail-storage-item.others .icon circle[data-v-56af1b6e],.detail-storage-item.others .icon line[data-v-56af1b6e],.detail-storage-item.others .icon path[data-v-56af1b6e],.detail-storage-item.others .icon polygon[data-v-56af1b6e],.detail-storage-item.others .icon polyline[data-v-56af1b6e],.detail-storage-item.others .icon rect[data-v-56af1b6e]{stroke:#fff}.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span,.detail-storage-item.others .storage-progress[data-v-56af1b6e] span{background:#fff}}",""])},RrKP:function(e,t,a){"use strict";a("3bJh")},THmQ:function(e,t,a){"use strict";var i={name:"SectionTitle"},s=(a("92Jy"),a("KHd+")),r=Object(s.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);t.a=r.exports},VA79:function(e,t,a){var i=a("F12+");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(e.exports=i.locals)},b0xl:function(e,t,a){"use strict";a("oyp5")},kPoH:function(e,t,a){"use strict";var i={name:"ColorLabel",props:["color"]},s=(a("GkQO"),a("KHd+")),r=Object(s.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);t.a=r.exports},lW02:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".text-label[data-v-69d97df2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-69d97df2]{color:#0667b3}}",""])},oyp5:function(e,t,a){var i=a("LE5O");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(e.exports=i.locals)},qf9i:function(e,t,a){"use strict";a("KPNK")},qphJ:function(e,t,a){var i=a("lW02");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(e.exports=i.locals)},woIv:function(e,t,a){"use strict";a("VA79")},xnZf:function(e,t,a){"use strict";var i=a("+Pqb"),s=a("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:s.B,FileTextIcon:s.w,ProgressBar:i.a,MusicIcon:s.P,VideoIcon:s.jb,ImageIcon:s.D,FileIcon:s.v}},o=(a("b0xl"),a("KHd+")),n=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"detail-storage-item",class:e.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==e.type?a("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?a("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?a("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?a("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?a("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?a("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"56af1b6e",null);t.a=n.exports}}]);