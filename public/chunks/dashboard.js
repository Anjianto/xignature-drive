(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/b5n":function(a,t,e){"use strict";var i=e("L4cV");e.n(i).a},"1GHo":function(a,t,e){"use strict";var i=e("cD4F");e.n(i).a},"2Sb1":function(a,t,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").e}},n=(e("qf9i"),e("KHd+")),o=Object(n.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=o.exports},"3Idf":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#131414}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},"3YzQ":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".empty-page-content[data-v-2d45c340]{width:100%;height:100%;display:flex;align-items:center;text-align:center}.empty-page-content .content[data-v-2d45c340]{margin:0 auto;max-width:360px}.empty-page-content .content[data-v-2d45c340] .button-base{margin:0 auto}.empty-page-content .icon circle[data-v-2d45c340],.empty-page-content .icon line[data-v-2d45c340],.empty-page-content .icon path[data-v-2d45c340],.empty-page-content .icon polyline[data-v-2d45c340]{stroke:#00bc7e}.empty-page-content .header[data-v-2d45c340]{margin-top:15px;margin-bottom:25px}.empty-page-content .title[data-v-2d45c340]{font-size:1.4375em;font-weight:700;padding-bottom:5px}.empty-page-content .description[data-v-2d45c340]{font-size:1em;font-weight:500}",""])},"5XA5":function(a,t,e){var i=e("aUEw");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},"6FmA":function(a,t,e){var i=e("afx8");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},"6TPS":function(a,t,e){"use strict";var i=e("CjXH"),n={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(e("FNZF"),e("KHd+")),s=Object(o.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",{staticClass:"table-row"},a._l(a.normalizedColumns,(function(t,i){return e("td",{key:i,staticClass:"table-cell"},[e("span",[a._v(a._s(t))])])})),0)}),[],!1,null,"15a1e318",null).exports,r=(e("LvDl"),e("vDqi")),l=e.n(r),d={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:i.f,ChevronLeftIcon:i.e,DatatableCell:s,ChevronUpIcon:i.g},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(a){a>this.data.meta.last_page||0===a||(this.pageIndex=a,this.getPage(a))},sort:function(a,t){t&&(this.filter.field=a,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(a){var t=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+a),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(a){t.data=a.data,t.$emit("data",a.data)})).catch((function(){return t.$isSomethingWrong()})).finally((function(){t.$emit("init",!0),t.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},c=(e("HMoj"),Object(o.a)(d,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"datatable"},[a.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",a._l(a.columns,(function(t,i){return t.hidden?a._e():e("th",{key:i,class:{sortable:t.sortable},on:{click:function(e){return a.sort(t.field,t.sortable)}}},[e("span",[a._v(a._s(t.label))]),a._v(" "),t.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===a.filter.sort},attrs:{size:"14"}}):a._e()],1)})),0)]),a._v(" "),e("tbody",{staticClass:"table-body"},[a._l(a.data.data,(function(t){return a._t("default",[e("DatatableCell",{key:t.id,attrs:{data:t}})],{row:t})}))],2)]):a._e(),a._v(" "),a.isLoading||a.hasData?a._e():a._t("empty-page"),a._v(" "),a.paginator&&a.hasData?e("div",{staticClass:"paginator-wrapper"},[a.data.meta.total>20&&a.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a._l(6,(function(t,i){return e("li",{key:i,staticClass:"page-item",on:{click:function(e){return a.goToPage(t)}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])])})),a._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),a.data.meta.total>20&&a.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(1)}}},[e("a",{staticClass:"page-link"},[a._v("\n                    1\n                ")])]):a._e(),a._v(" "),a._l(5,(function(t,i){return a.pageIndex<5?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return a.goToPage(t)}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(a.floatPages,(function(t,i){return a.pageIndex>=5&&a.pageIndex<a.data.meta.last_page-3?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return a.goToPage(t)}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(5,(function(t,i){return a.pageIndex>a.data.meta.last_page-4?e("li",{key:i,staticClass:"page-item",on:{click:function(t){a.goToPage(a.data.meta.last_page-(4-i))}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===a.data.meta.last_page-(4-i)}},[a._v("\n                    "+a._s(a.data.meta.last_page-(4-i))+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(a.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[a._v("\n                    "+a._s(a.data.meta.last_page)+"\n                ")])]):a._e(),a._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),e("span",{staticClass:"paginator-info"},[a._v(a._s(a.$t("datatable.paginate_info",{visible:a.data.meta.per_page,total:a.data.meta.total})))])]):a._e()],2)}),[],!1,null,"56f3a787",null));t.a=c.exports},"6gqG":function(a,t,e){var i=e("ydEr");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},"7OGm":function(a,t,e){"use strict";var i=e("6gqG");e.n(i).a},"8ODE":function(a,t,e){var i=e("9mcR");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},"92Jy":function(a,t,e){"use strict";var i=e("qphJ");e.n(i).a},"9mcR":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".dashboard-notice[data-v-23d92d52]{margin-bottom:20px}.widgets-total[data-v-23d92d52]{display:grid;margin:0 -20px 20px}.widgets-total.widgets-coll-2[data-v-23d92d52]{grid-template-columns:repeat(auto-fill,50%)}.widgets-total.widgets-coll-3[data-v-23d92d52]{grid-template-columns:repeat(auto-fill,33.3%)}.widgets-total .widget[data-v-23d92d52]{width:100%;padding:20px}.dashboard-headline[data-v-23d92d52]{display:flex;justify-content:space-between;margin-top:20px;margin-bottom:20px}.became-backer[data-v-23d92d52]{background:rgba(255,189,45,.1);display:inline-block;padding:5px 10px;border-radius:6px;margin-left:40px;cursor:pointer}.became-backer .content[data-v-23d92d52],.became-backer .icon[data-v-23d92d52]{display:inline-block;vertical-align:middle}.became-backer .icon[data-v-23d92d52]{margin-right:10px;line-height:0}.became-backer .icon line[data-v-23d92d52],.became-backer .icon rect[data-v-23d92d52]{stroke:#ffbd2d}.became-backer .content[data-v-23d92d52]{color:#ffbd2d;font-weight:700;font-size:.875em}.metadata .meta[data-v-23d92d52]{display:inline-block;margin-left:20px}.metadata .meta-title[data-v-23d92d52]{font-size:.875em;font-weight:700}.logo .dark-mode[data-v-23d92d52]{display:none}@media only screen and (max-width:1190px){.widgets-total[data-v-23d92d52]{margin:0 -10px 10px}.widgets-total .widget[data-v-23d92d52]{padding:10px}}@media only screen and (max-width:1024px){.widgets-total.widgets-coll-2[data-v-23d92d52],.widgets-total.widgets-coll-3[data-v-23d92d52]{grid-template-columns:repeat(auto-fill,50%)}}@media only screen and (max-width:960px){.widgets-total.widgets-coll-2[data-v-23d92d52],.widgets-total.widgets-coll-3[data-v-23d92d52]{grid-template-columns:repeat(auto-fill,100%)}.became-backer[data-v-23d92d52]{display:none}.dashboard-headline[data-v-23d92d52]{display:block;text-align:left}.dashboard-headline .metadata .meta[data-v-23d92d52]:first-child{margin-left:0}.dashboard-headline .logo[data-v-23d92d52]{margin-bottom:10px}}@media (prefers-color-scheme:dark){.metadata .meta-title[data-v-23d92d52]{color:#bec6cf}}",""])},EUmv:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".widget-value[data-v-26c186ae]{margin-top:10px;margin-bottom:30px}.widget-value span[data-v-26c186ae]{font-size:2.375em;font-weight:800}.footer-link[data-v-26c186ae]{display:flex;align-items:center}.footer-link polyline[data-v-26c186ae]{stroke:#00bc7e}.footer-link .content[data-v-26c186ae]{font-size:.75em;font-weight:700;margin-right:5px}@media only screen and (max-width:1190px){.widget-value span[data-v-26c186ae]{font-size:1.875em}}@media (prefers-color-scheme:dark){.footer-link .content[data-v-26c186ae],.widget-value span[data-v-26c186ae]{color:#bec6cf}}",""])},F11w:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".color-label[data-v-ffcb2882]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-ffcb2882]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-ffcb2882]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-ffcb2882]{color:#00bc7e;background:rgba(0,188,126,.1)}.color-label.red[data-v-ffcb2882]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},FNZF:function(a,t,e){"use strict";var i=e("Mrvf");e.n(i).a},GELx:function(a,t,e){"use strict";var i={name:"DatatableCellImage",props:["image","title","description","image-size"]},n=(e("Ze+S"),e("KHd+")),o=Object(n.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"cell-image-thumbnail"},[a.image?e("div",{staticClass:"image",class:a.imageSize},[e("img",{attrs:{src:a.image,alt:a.title}}),a._v(" "),e("img",{staticClass:"blurred",attrs:{src:a.image,alt:a.title}})]):a._e(),a._v(" "),e("div",{staticClass:"info"},[a.title?e("b",{staticClass:"name"},[a._v(a._s(a.title))]):a._e(),a._v(" "),a.description?e("span",{staticClass:"description"},[a._v(a._s(a.description))]):a._e()])])}),[],!1,null,"9a875e3a",null);t.a=o.exports},GkQO:function(a,t,e){"use strict";var i=e("J5Z7");e.n(i).a},HMoj:function(a,t,e){"use strict";var i=e("5XA5");e.n(i).a},J5Z7:function(a,t,e){var i=e("F11w");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},KPNK:function(a,t,e){var i=e("3Idf");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},KbUq:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".table-row[data-v-15a1e318]{border-radius:8px}.table-row[data-v-15a1e318]:hover{background:#f4f5f6}.table-row .table-cell[data-v-15a1e318]{padding-top:15px;padding-bottom:15px}.table-row .table-cell[data-v-15a1e318]:first-child{padding-left:15px}.table-row .table-cell[data-v-15a1e318]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-15a1e318]{font-size:1em;font-weight:700}",""])},KfIT:function(a,t,e){"use strict";var i=e("CjXH"),n={name:"EmptyPageContent",props:["icon","title","description"],components:{SettingsIcon:i.O,FileTextIcon:i.s,FileIcon:i.r}},o=(e("oeGM"),e("KHd+")),s=Object(o.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"empty-page-content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"icon"},["file"===a.icon?e("file-icon",{attrs:{size:"38"}}):a._e(),a._v(" "),"file-text"===a.icon?e("file-text-icon",{attrs:{size:"38"}}):a._e(),a._v(" "),"settings"===a.icon?e("settings-icon",{attrs:{size:"38"}}):a._e()],1),a._v(" "),e("div",{staticClass:"header"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))]),a._v(" "),e("h2",{staticClass:"description"},[a._v(a._s(a.description))])]),a._v(" "),a._t("default")],2)])}),[],!1,null,"2d45c340",null);t.a=s.exports},KnjL:function(a,t,e){"use strict";var i={name:"InfoBox",props:["type"]},n=(e("7OGm"),e("KHd+")),o=Object(n.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);t.a=o.exports},L4cV:function(a,t,e){var i=e("UgoL");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},Mrvf:function(a,t,e){var i=e("KbUq");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},NteM:function(a,t,e){var i=e("SpaE");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},SpaE:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".cell-image-thumbnail[data-v-9a875e3a]{display:flex;align-items:center;cursor:pointer}.cell-image-thumbnail .image[data-v-9a875e3a]{margin-right:20px;line-height:0;position:relative}.cell-image-thumbnail .image img[data-v-9a875e3a]{line-height:0;width:48px;height:48px;border-radius:8px;z-index:1;position:relative}.cell-image-thumbnail .image img.blurred[data-v-9a875e3a]{position:absolute;left:0;top:2px;z-index:0;filter:blur(8px);opacity:.5}.cell-image-thumbnail .image.small img[data-v-9a875e3a]{width:32px;height:32px}.cell-image-thumbnail .info .description[data-v-9a875e3a],.cell-image-thumbnail .info .name[data-v-9a875e3a]{max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cell-image-thumbnail .info .name[data-v-9a875e3a]{font-size:.9375em;line-height:1;color:#1b2539}.cell-image-thumbnail .info .description[data-v-9a875e3a]{color:rgba(27,37,57,.7);font-size:.75em}@media (prefers-color-scheme:dark){.cell-image-thumbnail .image img.blurred[data-v-9a875e3a]{display:none}.cell-image-thumbnail .info .name[data-v-9a875e3a]{color:#bec6cf}.cell-image-thumbnail .info .description[data-v-9a875e3a]{color:#7d858c}}",""])},THmQ:function(a,t,e){"use strict";var i={name:"SectionTitle"},n=(e("92Jy"),e("KHd+")),o=Object(n.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);t.a=o.exports},UgoL:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".mobile-action-button[data-v-8b0e9378]{background:#f4f5f6;margin-right:15px;border-radius:8px;padding:7px 10px;cursor:pointer;border:none;transition:all .15s ease}.mobile-action-button .flex[data-v-8b0e9378]{display:flex;align-items:center}.mobile-action-button .icon[data-v-8b0e9378]{margin-right:10px;font-size:.875em}.mobile-action-button .icon circle[data-v-8b0e9378],.mobile-action-button .icon line[data-v-8b0e9378],.mobile-action-button .icon path[data-v-8b0e9378],.mobile-action-button .icon polyline[data-v-8b0e9378],.mobile-action-button .icon rect[data-v-8b0e9378]{transition:all .15s ease}.mobile-action-button .label[data-v-8b0e9378]{transition:all .15s ease;font-size:.875em;font-weight:700;color:#1b2539}.mobile-action-button[data-v-8b0e9378]:active{transform:scale(.95)}.mobile-action-button[data-v-8b0e9378]:hover{background:rgba(0,188,126,.1)}.mobile-action-button:hover .icon circle[data-v-8b0e9378],.mobile-action-button:hover .icon line[data-v-8b0e9378],.mobile-action-button:hover .icon path[data-v-8b0e9378],.mobile-action-button:hover .icon polyline[data-v-8b0e9378],.mobile-action-button:hover .icon rect[data-v-8b0e9378]{stroke:#00bc7e}.mobile-action-button:hover .label[data-v-8b0e9378]{color:#00bc7e}@media (prefers-color-scheme:dark){.mobile-action-button[data-v-8b0e9378]{background:#1e2024}.mobile-action-button circle[data-v-8b0e9378],.mobile-action-button line[data-v-8b0e9378],.mobile-action-button path[data-v-8b0e9378],.mobile-action-button polyline[data-v-8b0e9378],.mobile-action-button rect[data-v-8b0e9378]{stroke:#00bc7e}.mobile-action-button .label[data-v-8b0e9378]{color:#bec6cf}}",""])},"Ze+S":function(a,t,e){"use strict";var i=e("NteM");e.n(i).a},aUEw:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".datatable[data-v-56f3a787]{height:100%}.table-row[data-v-56f3a787]{transition:all .3s ease}.table-row-enter[data-v-56f3a787],.table-row-leave-to[data-v-56f3a787]{opacity:0;transform:translateY(-100%)}.table-row-leave-active[data-v-56f3a787]{position:absolute}.table[data-v-56f3a787]{border-collapse:collapse;overflow-x:auto}.table[data-v-56f3a787],.table tr[data-v-56f3a787]{width:100%}.table tr td[data-v-56f3a787]:first-child,.table tr th[data-v-56f3a787]:first-child{padding-left:15px}.table tr td[data-v-56f3a787]:last-child,.table tr th[data-v-56f3a787]:last-child{padding-right:15px;text-align:right}.table .table-header[data-v-56f3a787]{margin-bottom:10px}.table .table-header tr td[data-v-56f3a787],.table .table-header tr th[data-v-56f3a787]{padding:12px;text-align:left}.table .table-header tr td span[data-v-56f3a787],.table .table-header tr th span[data-v-56f3a787]{color:#00bc7e;font-weight:700;font-size:.75em;white-space:nowrap}.table .table-header tr td.sortable[data-v-56f3a787],.table .table-header tr th.sortable[data-v-56f3a787]{cursor:pointer}.table .table-header tr td.sortable:hover .filter-arrow[data-v-56f3a787],.table .table-header tr th.sortable:hover .filter-arrow[data-v-56f3a787]{opacity:1}.table .table-header tr td[data-v-56f3a787]:last-child,.table .table-header tr th[data-v-56f3a787]:last-child{text-align:right}.table .table-header .filter-arrow[data-v-56f3a787]{vertical-align:middle;margin-left:8px;transition:all .3s ease;opacity:0}.table .table-header .filter-arrow path[data-v-56f3a787]{fill:rgba(27,37,57,.7)}.table .table-header .filter-arrow.arrow-down[data-v-56f3a787]{transform:rotate(180deg)}.table .table-header span[data-v-56f3a787]{font-size:13px;color:rgba(27,37,57,.7);font-weight:700}.table .table-body tr[data-v-56f3a787]{border-radius:8px}.table .table-body tr[data-v-56f3a787]:hover{background:#f4f5f6}.table .table-body tr td[data-v-56f3a787],.table .table-body tr th[data-v-56f3a787]{padding:12px}.table .table-body tr td:last-child button[data-v-56f3a787],.table .table-body tr th:last-child button[data-v-56f3a787]{margin-right:0}.table .table-body a.page-link[data-v-56f3a787],.table .table-body span[data-v-56f3a787]{font-size:.9375em;font-weight:700;padding:10px 35px 10px 0;display:block;white-space:nowrap}.pagination .page-item[data-v-56f3a787]{padding:3px;display:inline-block}.pagination .page-link[data-v-56f3a787]{width:30px;height:30px;display:block;color:#1b2539;border-radius:6px;text-align:center;line-height:2.4;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s ease}.pagination .page-link .icon[data-v-56f3a787]{vertical-align:middle;margin-top:-2px}.pagination .page-link.active[data-v-56f3a787],.pagination .page-link[data-v-56f3a787]:hover:not(.disabled){background:#f4f5f6;color:#1b2539}.pagination .page-link.disabled[data-v-56f3a787]{background:transparent;cursor:default}.pagination .page-link.disabled svg path[data-v-56f3a787]{fill:rgba(27,37,57,.7)}.paginator-wrapper[data-v-56f3a787]{margin-top:30px;margin-bottom:40px;display:flex;justify-content:space-between;align-items:center}.paginator-wrapper .paginator-info[data-v-56f3a787]{font-size:13px;color:rgba(27,37,57,.7)}.user-preview[data-v-56f3a787]{display:flex;align-items:center;cursor:pointer}.user-preview img[data-v-56f3a787]{width:45px;margin-right:22px}@media only screen and (max-width:690px){.paginator-wrapper[data-v-56f3a787]{display:block;text-align:center}.paginator-wrapper .paginator-info[data-v-56f3a787]{margin-top:10px;display:block}}@media (prefers-color-scheme:dark){.table .table-header tr td span[data-v-56f3a787],.table .table-header tr th span[data-v-56f3a787]{color:#00bc7e}.table .table-body th[data-v-56f3a787]:hover,.table .table-body tr[data-v-56f3a787]:hover{background:#1e2024}.pagination .page-link[data-v-56f3a787],.paginator-wrapper .paginator-info[data-v-56f3a787]{color:#7d858c}.pagination .page-link svg polyline[data-v-56f3a787]{stroke:#bec6cf}.pagination .page-link.active[data-v-56f3a787],.pagination .page-link[data-v-56f3a787]:hover:not(.disabled){color:#00bc7e;background:rgba(0,188,126,.1)}.pagination .page-link.disabled[data-v-56f3a787]{background:transparent;cursor:default}.pagination .page-link.disabled svg polyline[data-v-56f3a787]{stroke:#7d858c}}",""])},afx8:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"",""])},bM42:function(a,t,e){"use strict";var i=e("6FmA");e.n(i).a},by5l:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".widget-content[data-v-0c299a3c]{padding:20px;border-radius:8px;box-shadow:0 5px 10px -6px rgba(26,36,55,.15);background:#fff}.headline[data-v-0c299a3c]{display:flex}.headline .icon[data-v-0c299a3c]{margin-right:10px}.headline .icon circle[data-v-0c299a3c],.headline .icon line[data-v-0c299a3c],.headline .icon path[data-v-0c299a3c],.headline .icon polygon[data-v-0c299a3c]{stroke:#00bc7e}@media only screen and (max-width:1190px){.headline .title[data-v-0c299a3c]{font-size:.875em}}@media (prefers-color-scheme:dark){.widget-content[data-v-0c299a3c]{background:#1e2024}.headline .title[data-v-0c299a3c]{color:#bec6cf}}",""])},cD4F:function(a,t,e){var i=e("by5l");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},fn3I:function(a,t,e){"use strict";var i=e("8ODE");e.n(i).a},jdAz:function(a,t,e){"use strict";var i=e("w5hA");e.n(i).a},jhMt:function(a,t,e){"use strict";e.r(t);var i=e("GELx"),n=e("6TPS"),o=e("CjXH"),s={name:"WidgetWrapper",props:["icon","title"],components:{ChevronRightIcon:o.f,HardDriveIcon:o.w,StarIcon:o.Q,UsersIcon:o.X}},r=(e("1GHo"),e("KHd+")),l=Object(r.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"widget"},[e("div",{staticClass:"widget-content"},[e("div",{staticClass:"headline"},[e("div",{staticClass:"icon"},["users"===a.icon?e("users-icon",{attrs:{size:"19"}}):a._e(),a._v(" "),"star"===a.icon?e("star-icon",{attrs:{size:"19"}}):a._e(),a._v(" "),"hard-drive"===a.icon?e("hard-drive-icon",{attrs:{size:"19"}}):a._e()],1),a._v(" "),e("b",{staticClass:"title"},[a._v(a._s(a.title))])]),a._v(" "),a._t("default")],2)])}),[],!1,null,"0c299a3c",null).exports,d=e("kPoH"),c=e("vDqi"),p=e.n(c),b={name:"WidgetLatestRegistrations",props:["icon","title"],components:{DatatableCellImage:i.a,DatatableWrapper:n.a,WidgetWrapper:l,Trash2Icon:o.R,ColorLabel:d.a,Edit2Icon:o.n},data:function(){return{isLoading:!1,columns:[{label:this.$t("admin_page_user.table.name"),field:"name",sortable:!1},{label:this.$t("admin_page_user.table.role"),field:"role",sortable:!1},{label:this.$t("admin_page_user.table.storage_used"),field:"used",sortable:!1},{label:this.$t("admin_page_user.table.created_at"),field:"created_at",sortable:!1},{label:this.$t("admin_page_user.table.action"),field:"data.action",sortable:!1}]}},methods:{getRoleColor:function(a){switch(a){case"admin":return"purple";case"user":return"yellow"}}}},g=(e("bM42"),Object(r.a)(b,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("WidgetWrapper",{attrs:{icon:a.icon,title:a.title}},[e("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/dashboard/new-users",paginator:!1,columns:a.columns},on:{init:function(t){a.isLoading=!1}},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.row;return[e("tr",[e("td",{staticStyle:{width:"300px"}},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:i.data.id}}}},[e("DatatableCellImage",{attrs:{image:i.data.attributes.avatar,title:i.data.attributes.name,description:i.data.attributes.email}})],1)],1),a._v(" "),e("td",[e("ColorLabel",{attrs:{color:a.getRoleColor(i.data.attributes.role)}},[a._v("\n                        "+a._s(i.data.attributes.role)+"\n                    ")])],1),a._v(" "),e("td",[e("span",{staticClass:"cell-item"},[a._v("\n                        "+a._s(i.relationships.storage.data.attributes.used_formatted)+"\n                    ")])]),a._v(" "),e("td",[e("span",{staticClass:"cell-item"},[a._v("\n                        "+a._s(i.data.attributes.created_at_formatted)+"\n                    ")])]),a._v(" "),e("td",[e("div",{staticClass:"action-icons"},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:i.data.id}}}},[e("edit-2-icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),a._v(" "),e("router-link",{attrs:{to:{name:"UserDelete",params:{id:i.data.id}}}},[e("trash2-icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}}])})],1)}),[],!1,null,"5ce08e6b",null).exports),f=e("t5U/"),v=e("KfIT"),u=e("xxrA"),m=e("D62o"),h=e("THmQ"),_={name:"WidgetTotals",props:["icon","title","value","linkRoute","linkName"],components:{ChevronRightIcon:o.f,WidgetWrapper:l,HardDriveIcon:o.w,StarIcon:o.Q,UsersIcon:o.X}},x=(e("jdAz"),Object(r.a)(_,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("WidgetWrapper",{attrs:{icon:a.icon,title:a.title}},[e("div",{staticClass:"widget-value"},[e("span",[a._v(a._s(a.value))])]),a._v(" "),e("router-link",{staticClass:"footer-link",attrs:{to:{name:a.linkRoute}}},[e("span",{staticClass:"content"},[a._v(a._s(a.linkName))]),a._v(" "),e("chevron-right-icon",{attrs:{size:"16"}})],1)],1)}),[],!1,null,"26c186ae",null).exports),k=e("Nv84"),w=e("KnjL"),C=e("2Sb1"),y=e("zTYo"),I=e("L2JU");function z(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function E(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var j={name:"Dashboard",components:{WidgetLatestRegistrations:g,MobileActionButton:f.a,EmptyPageContent:v.a,DatatableWrapper:n.a,WidgetTotals:x,CreditCardIcon:o.k,SectionTitle:h.a,MobileHeader:m.a,SwitchInput:u.a,PageHeader:C.a,ButtonBase:k.a,ColorLabel:d.a,InfoBox:w.a,Spinner:y.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?z(Object(e),!0).forEach((function(t){E(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(I.b)(["config"])),data:function(){return{isLoading:!1,data:void 0}},methods:{changeStatus:function(a,t){this.$updateText("/plans/"+t+"/update","is_active",a)}},created:function(){var a=this;p.a.get("/api/dashboard").then((function(t){a.data=t.data})).finally((function(){a.isLoading=!1}))}},T=(e("fn3I"),Object(r.a)(j,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"single-page"}},[!a.isLoading&&a.data?e("div",{attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),e("div",{staticClass:"dashboard-headline"},[a._m(0),a._v(" "),e("div",{staticClass:"metadata"},[e("a",{staticClass:"meta",attrs:{href:"https://vuefilemanager.com/changelog",target:"_blank"}},[e("span",{staticClass:"meta-title"},[a._v(a._s(a.$t("admin_page_dashboard.version"))+":")]),a._v(" "),e("ColorLabel",{attrs:{color:"purple"}},[a._v("\n                        "+a._s(a.data.app_version)+"\n                    ")])],1),a._v(" "),a.data.license?e("a",{staticClass:"meta",attrs:{href:"https://codecanyon.net/item/vue-file-manager-with-laravel-backend/25815986",target:"_blank"}},[e("span",{staticClass:"meta-title"},[a._v(a._s(a.$t("admin_page_dashboard.license"))+":")]),a._v(" "),e("ColorLabel",{attrs:{color:"purple"}},[a._v("\n                        "+a._s(a.data.license)+"\n                    ")])],1):a._e(),a._v(" "),a.config.isDemo?a._e():e("a",{staticClass:"became-backer",attrs:{href:"https://vuefilemanager.com/become-a-backer",target:"_blank"}},[e("div",{staticClass:"icon"},[e("credit-card-icon",{attrs:{size:"15"}})],1),a._v(" "),e("span",{staticClass:"content"},[a._v("\n                        "+a._s(a.$t("admin_page_dashboard.backer_button"))+"\n                    ")])])])]),a._v(" "),a.config.isSaaS&&!a.config.stripe_public_key?e("InfoBox",{staticClass:"dashboard-notice"},[e("i18n",{attrs:{path:"notice.stripe_activation"}},[e("router-link",{attrs:{to:{name:"AppPayments"}}},[a._v(a._s(a.$t("notice.stripe_activation_button")))])],1)],1):a._e(),a._v(" "),e("div",{staticClass:"widgets-total",class:{"widgets-coll-3":a.config.isSaaS,"widgets-coll-2":!a.config.isSaaS}},[e("WidgetTotals",{staticClass:"widget",attrs:{icon:"users",title:a.$t("admin_page_dashboard.w_total_users.title"),value:a.data.total_users,"link-route":"Users","link-name":a.$t("admin_page_dashboard.w_total_users.link")}}),a._v(" "),e("WidgetTotals",{staticClass:"widget",attrs:{icon:"hard-drive",title:a.$t("admin_page_dashboard.w_total_space.title"),value:a.data.total_used_space,"link-route":"Users","link-name":a.$t("admin_page_dashboard.w_total_space.link")}}),a._v(" "),a.config.isSaaS?e("WidgetTotals",{staticClass:"widget",attrs:{icon:"star",title:a.$t("admin_page_dashboard.w_total_premium.title"),value:a.data.total_premium_users,"link-route":"Plans","link-name":a.$t("admin_page_dashboard.w_total_premium.link")}}):a._e()],1),a._v(" "),e("div",{staticClass:"widget-users"},[e("WidgetLatestRegistrations",{staticClass:"widget",attrs:{icon:"users",title:a.$t("admin_page_dashboard.w_latest_users.title")}})],1)],1):a._e(),a._v(" "),a.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):a._e()])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"logo"},[t("a",{attrs:{href:"https://vuefilemanager.com",target:"_blank"}},[t("img",{staticClass:"light-mode",attrs:{src:"/assets/images/vuefilemanager-horizontal-logo.svg",alt:"VueFileManager"}})])])}],!1,null,"23d92d52",null));t.default=T.exports},kPoH:function(a,t,e){"use strict";var i={name:"ColorLabel",props:["color"]},n=(e("GkQO"),e("KHd+")),o=Object(n.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);t.a=o.exports},lW02:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".text-label[data-v-69d97df2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-69d97df2]{color:#00bc7e}}",""])},oeGM:function(a,t,e){"use strict";var i=e("xjpg");e.n(i).a},qf9i:function(a,t,e){"use strict";var i=e("KPNK");e.n(i).a},qphJ:function(a,t,e){var i=e("lW02");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},"t5U/":function(a,t,e){"use strict";var i=e("CjXH"),n={name:"MobileActionButton",props:["icon"],components:{CreditCardIcon:i.k,FolderPlusIcon:i.u,UserPlusIcon:i.W,TrashIcon:i.S,PlusIcon:i.J,ListIcon:i.C,GridIcon:i.v}},o=(e("/b5n"),e("KHd+")),s=Object(o.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},["credit-card"===a.icon?e("credit-card-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"folder-plus"===a.icon?e("folder-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th-list"===a.icon?e("list-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"trash"===a.icon?e("trash-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th"===a.icon?e("grid-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"user-plus"===a.icon?e("user-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"plus"===a.icon?e("plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),e("span",{staticClass:"label"},[a._t("default")],2)],1)])}),[],!1,null,"8b0e9378",null);t.a=s.exports},w5hA:function(a,t,e){var i=e("EUmv");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},xjpg:function(a,t,e){var i=e("3YzQ");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},ydEr:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".info-box[data-v-bf43be5e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-bf43be5e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-bf43be5e],.info-box.error p[data-v-bf43be5e]{color:#fd397a}.info-box.error a[data-v-bf43be5e]{text-decoration:underline}.info-box p[data-v-bf43be5e]{font-size:.9375em;line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-bf43be5e] a{color:#00bc7e}.info-box a[data-v-bf43be5e],.info-box b[data-v-bf43be5e]{font-weight:700;color:#00bc7e}.info-box a[data-v-bf43be5e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-bf43be5e]{margin-top:15px}.info-box ul[data-v-bf43be5e],.info-box ul li[data-v-bf43be5e],.info-box ul li a[data-v-bf43be5e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-bf43be5e]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-bf43be5e]{background:#1e2024}.info-box p[data-v-bf43be5e],.info-box ul li[data-v-bf43be5e]{color:#bec6cf}}",""])}}]);