(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"2Sb1":function(a,t,e){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").g}},i=(e("qf9i"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=o.exports},"3Idf":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #131414;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},"5XA5":function(a,t,e){var n=e("aUEw");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},"6TPS":function(a,t,e){"use strict";var n=e("CjXH"),i={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(e("FNZF"),e("KHd+")),s=Object(o.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",{staticClass:"table-row"},a._l(a.normalizedColumns,(function(t,n){return e("td",{key:n,staticClass:"table-cell"},[e("span",[a._v(a._s(t))])])})),0)}),[],!1,null,"15a1e318",null).exports,l=(e("LvDl"),e("vDqi")),r=e.n(l),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:n.h,ChevronLeftIcon:n.g,DatatableCell:s,ChevronUpIcon:n.i},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(a){a>this.data.meta.last_page||0===a||(this.pageIndex=a,this.getPage(a))},sort:function(a,t){t&&(this.filter.field=a,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(a){var t=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+a),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,r.a.get(this.URI).then((function(a){t.data=a.data,t.$emit("data",a.data)})).catch((function(){return t.$isSomethingWrong()})).finally((function(){t.$emit("init",!0),t.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(e("HMoj"),Object(o.a)(c,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"datatable"},[a.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",a._l(a.columns,(function(t,n){return t.hidden?a._e():e("th",{key:n,class:{sortable:t.sortable},on:{click:function(e){return a.sort(t.field,t.sortable)}}},[e("span",[a._v(a._s(t.label))]),a._v(" "),t.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===a.filter.sort},attrs:{size:"14"}}):a._e()],1)})),0)]),a._v(" "),e("tbody",{staticClass:"table-body"},[a._l(a.data.data,(function(t){return a._t("default",[e("DatatableCell",{key:t.id,attrs:{data:t}})],{row:t})}))],2)]):a._e(),a._v(" "),a.isLoading||a.hasData?a._e():a._t("empty-page"),a._v(" "),a.paginator&&a.hasData?e("div",{staticClass:"paginator-wrapper"},[a.data.meta.total>20&&a.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a._l(6,(function(t,n){return e("li",{key:n,staticClass:"page-item",on:{click:function(e){return a.goToPage(t)}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])])})),a._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),a.data.meta.total>20&&a.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(1)}}},[e("a",{staticClass:"page-link"},[a._v("\n                    1\n                ")])]):a._e(),a._v(" "),a._l(5,(function(t,n){return a.pageIndex<5?e("li",{key:n,staticClass:"page-item",on:{click:function(e){return a.goToPage(t)}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(a.floatPages,(function(t,n){return a.pageIndex>=5&&a.pageIndex<a.data.meta.last_page-3?e("li",{key:n,staticClass:"page-item",on:{click:function(e){return a.goToPage(t)}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(5,(function(t,n){return a.pageIndex>a.data.meta.last_page-4?e("li",{key:n,staticClass:"page-item",on:{click:function(t){a.goToPage(a.data.meta.last_page-(4-n))}}},[e("a",{staticClass:"page-link",class:{active:a.pageIndex===a.data.meta.last_page-(4-n)}},[a._v("\n                    "+a._s(a.data.meta.last_page-(4-n))+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(a.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[a._v("\n                    "+a._s(a.data.meta.last_page)+"\n                ")])]):a._e(),a._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),e("span",{staticClass:"paginator-info"},[a._v(a._s(a.$t("datatable.paginate_info",{visible:a.data.meta.per_page,total:a.data.meta.total})))])]):a._e()],2)}),[],!1,null,"56f3a787",null));t.a=d.exports},"92Jy":function(a,t,e){"use strict";var n=e("qphJ");e.n(n).a},F11w:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".color-label[data-v-ffcb2882] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-ffcb2882] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-ffcb2882] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-ffcb2882] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-ffcb2882] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n",""])},FNZF:function(a,t,e){"use strict";var n=e("Mrvf");e.n(n).a},GELx:function(a,t,e){"use strict";var n={name:"DatatableCellImage",props:["image","title","description","image-size"]},i=(e("Ze+S"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"cell-image-thumbnail"},[a.image?e("div",{staticClass:"image",class:a.imageSize},[e("img",{attrs:{src:a.image,alt:a.title}}),a._v(" "),e("img",{staticClass:"blurred",attrs:{src:a.image,alt:a.title}})]):a._e(),a._v(" "),e("div",{staticClass:"info"},[a.title?e("b",{staticClass:"name"},[a._v(a._s(a.title))]):a._e(),a._v(" "),a.description?e("span",{staticClass:"description"},[a._v(a._s(a.description))]):a._e()])])}),[],!1,null,"9a875e3a",null);t.a=o.exports},GkQO:function(a,t,e){"use strict";var n=e("J5Z7");e.n(n).a},HMoj:function(a,t,e){"use strict";var n=e("5XA5");e.n(n).a},J5Z7:function(a,t,e){var n=e("F11w");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},KPNK:function(a,t,e){var n=e("3Idf");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},KbUq:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".table-row[data-v-15a1e318] {\n  border-radius: 8px;\n}\n.table-row[data-v-15a1e318]:hover {\n  background: #f4f5f6;\n}\n.table-row .table-cell[data-v-15a1e318] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.table-row .table-cell[data-v-15a1e318]:first-child {\n  padding-left: 15px;\n}\n.table-row .table-cell[data-v-15a1e318]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table-row .table-cell span[data-v-15a1e318] {\n  font-size: 1em;\n  font-weight: bold;\n}\n",""])},Mrvf:function(a,t,e){var n=e("KbUq");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},NteM:function(a,t,e){var n=e("SpaE");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},SpaE:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".cell-image-thumbnail[data-v-9a875e3a] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.cell-image-thumbnail .image[data-v-9a875e3a] {\n  margin-right: 20px;\n  line-height: 0;\n  position: relative;\n}\n.cell-image-thumbnail .image img[data-v-9a875e3a] {\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.cell-image-thumbnail .image img.blurred[data-v-9a875e3a] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n.cell-image-thumbnail .image.small img[data-v-9a875e3a] {\n  width: 32px;\n  height: 32px;\n}\n.cell-image-thumbnail .info .name[data-v-9a875e3a], .cell-image-thumbnail .info .description[data-v-9a875e3a] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.cell-image-thumbnail .info .name[data-v-9a875e3a] {\n  font-size: 0.9375em;\n  line-height: 1;\n  color: #1B2539;\n}\n.cell-image-thumbnail .info .description[data-v-9a875e3a] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n@media (prefers-color-scheme: dark) {\n.cell-image-thumbnail .image img.blurred[data-v-9a875e3a] {\n    display: none;\n}\n.cell-image-thumbnail .info .name[data-v-9a875e3a] {\n    color: #bec6cf;\n}\n.cell-image-thumbnail .info .description[data-v-9a875e3a] {\n    color: #7d858c;\n}\n}\n",""])},THmQ:function(a,t,e){"use strict";var n={name:"SectionTitle"},i=(e("92Jy"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);t.a=o.exports},ZIRg:function(a,t,e){"use strict";e.r(t);var n=e("GELx"),i=e("6TPS"),o=e("t5U/"),s=e("D62o"),l=e("THmQ"),r=e("Nv84"),c=e("CjXH"),d=e("2Sb1"),p=e("kPoH"),g=e("zTYo"),b=e("L2JU");e("vDqi");function f(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function u(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var v={name:"Profile",components:{DatatableCellImage:n.a,MobileActionButton:o.a,DatatableWrapper:i.a,SectionTitle:l.a,MobileHeader:s.a,Trash2Icon:c.Y,PageHeader:d.a,ButtonBase:r.a,ColorLabel:p.a,Edit2Icon:c.q,Spinner:g.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){u(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(b.b)(["config"])),data:function(){return{isLoading:!0,columns:void 0}},methods:{getRoleColor:function(a){switch(a){case"admin":return"purple";case"user":return"yellow"}}},created:function(){this.columns=[{label:this.$t("admin_page_user.table.name"),field:"name",sortable:!0},{label:this.$t("admin_page_user.table.role"),field:"role",sortable:!0},{label:this.$t("admin_page_user.table.plan"),field:"subscription",sortable:!1,hidden:!this.config.isSaaS},{label:this.$t("admin_page_user.table.storage_used"),field:"used",sortable:!0},{label:this.$t("admin_page_user.table.storage_capacity"),field:"settings.storage_capacity",sortable:!0,hidden:!this.config.storageLimit},{label:this.$t("admin_page_user.table.created_at"),field:"created_at",sortable:!0},{label:this.$t("admin_page_user.table.action"),field:"data.action",sortable:!1}]}},h=(e("v7vm"),e("KHd+")),m=Object(h.a)(v,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"single-page"}},[e("div",{attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:a.$t(a.$router.currentRoute.meta.title)}}),a._v(" "),e("PageHeader",{attrs:{title:a.$t(a.$router.currentRoute.meta.title)}}),a._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"table-tools"},[e("div",{staticClass:"buttons"},[e("router-link",{attrs:{to:{name:"UserCreate"}}},[e("MobileActionButton",{attrs:{icon:"user-plus"}},[a._v("\n                            "+a._s(a.$t("admin_page_user.create_user.submit"))+"\n                        ")])],1)],1)]),a._v(" "),e("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/users",paginator:!0,columns:a.columns},on:{init:function(t){a.isLoading=!1}},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.row;return[e("tr",[e("td",{staticStyle:{"min-width":"320px"}},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:n.data.id}}}},[e("DatatableCellImage",{attrs:{image:n.data.attributes.avatar,title:n.data.attributes.name,description:n.data.attributes.email}})],1)],1),a._v(" "),e("td",[e("ColorLabel",{attrs:{color:a.getRoleColor(n.data.attributes.role)}},[a._v("\n                                "+a._s(n.data.attributes.role)+"\n                            ")])],1),a._v(" "),a.config.isSaaS?e("td",[n.data.attributes.subscription?e("span",{staticClass:"cell-item"},[a._v("\n                                "+a._s(a.$t("global.premium"))+"\n                            ")]):e("span",{staticClass:"cell-item"},[a._v("\n                                "+a._s(a.$t("global.free"))+"\n                            ")])]):a._e(),a._v(" "),e("td",[e("span",{staticClass:"cell-item"},[a._v("\n                                "+a._s(n.relationships.storage.data.attributes.used_formatted)+"\n                            ")])]),a._v(" "),a.config.storageLimit?e("td",[e("span",{staticClass:"cell-item"},[a._v("\n                                "+a._s(n.relationships.storage.data.attributes.capacity_formatted)+"\n                            ")])]):a._e(),a._v(" "),e("td",[e("span",{staticClass:"cell-item"},[a._v("\n                                "+a._s(n.data.attributes.created_at_formatted)+"\n                            ")])]),a._v(" "),e("td",[e("div",{staticClass:"action-icons"},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:n.data.id}}}},[e("edit-2-icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),a._v(" "),e("router-link",{attrs:{to:{name:"UserDelete",params:{id:n.data.id}}}},[e("trash2-icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}}])})],1)],1),a._v(" "),a.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):a._e()])}),[],!1,null,"7288ff38",null);t.default=m.exports},"Ze+S":function(a,t,e){"use strict";var n=e("NteM");e.n(n).a},aUEw:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".datatable[data-v-56f3a787] {\n  height: 100%;\n}\n.table-row[data-v-56f3a787] {\n  transition: 0.3s all ease;\n}\n.table-row-enter[data-v-56f3a787],\n.table-row-leave-to[data-v-56f3a787] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.table-row-leave-active[data-v-56f3a787] {\n  position: absolute;\n}\n.table[data-v-56f3a787] {\n  width: 100%;\n  border-collapse: collapse;\n  overflow-x: auto;\n}\n.table tr[data-v-56f3a787] {\n  width: 100%;\n}\n.table tr td[data-v-56f3a787]:first-child, .table tr th[data-v-56f3a787]:first-child {\n  padding-left: 15px;\n}\n.table tr td[data-v-56f3a787]:last-child, .table tr th[data-v-56f3a787]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table .table-header[data-v-56f3a787] {\n  margin-bottom: 10px;\n}\n.table .table-header tr td[data-v-56f3a787], .table .table-header tr th[data-v-56f3a787] {\n  padding: 12px;\n  text-align: left;\n}\n.table .table-header tr td span[data-v-56f3a787], .table .table-header tr th span[data-v-56f3a787] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.75em;\n  white-space: nowrap;\n}\n.table .table-header tr td.sortable[data-v-56f3a787], .table .table-header tr th.sortable[data-v-56f3a787] {\n  cursor: pointer;\n}\n.table .table-header tr td.sortable:hover .filter-arrow[data-v-56f3a787], .table .table-header tr th.sortable:hover .filter-arrow[data-v-56f3a787] {\n  opacity: 1;\n}\n.table .table-header tr td[data-v-56f3a787]:last-child, .table .table-header tr th[data-v-56f3a787]:last-child {\n  text-align: right;\n}\n.table .table-header .filter-arrow[data-v-56f3a787] {\n  vertical-align: middle;\n  margin-left: 8px;\n  transition: 0.3s all ease;\n  opacity: 0;\n}\n.table .table-header .filter-arrow path[data-v-56f3a787] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.table .table-header .filter-arrow.arrow-down[data-v-56f3a787] {\n  transform: rotate(180deg);\n}\n.table .table-header span[data-v-56f3a787] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n  font-weight: bold;\n}\n.table .table-body tr[data-v-56f3a787] {\n  border-radius: 8px;\n}\n.table .table-body tr[data-v-56f3a787]:hover {\n  background: #f4f5f6;\n}\n.table .table-body tr td[data-v-56f3a787], .table .table-body tr th[data-v-56f3a787] {\n  padding: 12px;\n}\n.table .table-body tr td:last-child button[data-v-56f3a787], .table .table-body tr th:last-child button[data-v-56f3a787] {\n  margin-right: 0;\n}\n.table .table-body span[data-v-56f3a787], .table .table-body a.page-link[data-v-56f3a787] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  padding: 10px 35px 10px 0;\n  display: block;\n  white-space: nowrap;\n}\n.pagination .page-item[data-v-56f3a787] {\n  padding: 3px;\n  display: inline-block;\n}\n.pagination .page-link[data-v-56f3a787] {\n  width: 30px;\n  height: 30px;\n  display: block;\n  color: #1B2539;\n  border-radius: 6px;\n  text-align: center;\n  line-height: 2.4;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  transition: 0.15s all ease;\n}\n.pagination .page-link .icon[data-v-56f3a787] {\n  vertical-align: middle;\n  margin-top: -2px;\n}\n.pagination .page-link[data-v-56f3a787]:hover:not(.disabled) {\n  background: #f4f5f6;\n  color: #1B2539;\n}\n.pagination .page-link.active[data-v-56f3a787] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n.pagination .page-link.disabled[data-v-56f3a787] {\n  background: transparent;\n  cursor: default;\n}\n.pagination .page-link.disabled svg path[data-v-56f3a787] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.paginator-wrapper[data-v-56f3a787] {\n  margin-top: 30px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n}\n.user-preview[data-v-56f3a787] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-preview img[data-v-56f3a787] {\n  width: 45px;\n  margin-right: 22px;\n}\n@media only screen and (max-width: 690px) {\n.paginator-wrapper[data-v-56f3a787] {\n    display: block;\n    text-align: center;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n    margin-top: 10px;\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table .table-header tr td span[data-v-56f3a787], .table .table-header tr th span[data-v-56f3a787] {\n    color: #00BC7E;\n}\n.table .table-body tr[data-v-56f3a787]:hover, .table .table-body th[data-v-56f3a787]:hover {\n    background: #1e2024;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n    color: #7d858c;\n}\n.pagination .page-link[data-v-56f3a787] {\n    color: #7d858c;\n}\n.pagination .page-link svg polyline[data-v-56f3a787] {\n    stroke: #bec6cf;\n}\n.pagination .page-link[data-v-56f3a787]:hover:not(.disabled) {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.active[data-v-56f3a787] {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.disabled[data-v-56f3a787] {\n    background: transparent;\n    cursor: default;\n}\n.pagination .page-link.disabled svg polyline[data-v-56f3a787] {\n    stroke: #7d858c;\n}\n}\n",""])},iD9g:function(a,t,e){var n=e("mE+g");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},jIdw:function(a,t,e){"use strict";var n=e("iD9g");e.n(n).a},kPoH:function(a,t,e){"use strict";var n={name:"ColorLabel",props:["color"]},i=(e("GkQO"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);t.a=o.exports},lW02:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".text-label[data-v-69d97df2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-69d97df2] {\n    color: #00BC7E;\n}\n}\n",""])},"mE+g":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".mobile-action-button[data-v-50a1066a] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n  /*&:hover {\n        background: rgba($theme, 0.1);\n\n        .icon {\n            path, line, polyline, rect, circle {\n                stroke: $theme;\n            }\n        }\n\n        .label {\n            color: $theme;\n        }\n    }*/\n}\n.mobile-action-button .flex[data-v-50a1066a] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-50a1066a] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-50a1066a], .mobile-action-button .icon line[data-v-50a1066a], .mobile-action-button .icon polyline[data-v-50a1066a], .mobile-action-button .icon rect[data-v-50a1066a], .mobile-action-button .icon circle[data-v-50a1066a] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-50a1066a] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.mobile-action-button[data-v-50a1066a]:active {\n  transform: scale(0.95);\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-50a1066a] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-50a1066a], .mobile-action-button line[data-v-50a1066a], .mobile-action-button polyline[data-v-50a1066a], .mobile-action-button rect[data-v-50a1066a], .mobile-action-button circle[data-v-50a1066a] {\n    stroke: #00BC7E;\n}\n.mobile-action-button .label[data-v-50a1066a] {\n    color: #bec6cf;\n}\n}\n",""])},poQ8:function(a,t,e){var n=e("y3km");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},qf9i:function(a,t,e){"use strict";var n=e("KPNK");e.n(n).a},qphJ:function(a,t,e){var n=e("lW02");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},"t5U/":function(a,t,e){"use strict";var n=e("CjXH"),i={name:"MobileActionButton",props:["icon"],components:{SortingAndPreviewIcon:e("Fqzo").a,CheckSquareIcon:n.e,CreditCardIcon:n.n,FolderPlusIcon:n.x,UserPlusIcon:n.db,XSquareIcon:n.hb,CheckIcon:n.d,TrashIcon:n.Z,PlusIcon:n.O,ListIcon:n.G,GridIcon:n.z}},o=(e("jIdw"),e("KHd+")),s=Object(o.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},["credit-card"===a.icon?e("credit-card-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"folder-plus"===a.icon?e("folder-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th-list"===a.icon?e("list-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"trash"===a.icon?e("trash-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th"===a.icon?e("grid-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"user-plus"===a.icon?e("user-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"plus"===a.icon?e("plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"check-square"===a.icon?e("check-square-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"x-square"===a.icon?e("x-square-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"check"===a.icon?e("check-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"preview-sorting"===a.icon?e("sorting-and-preview-icon",{staticClass:"icon preview-sorting",attrs:{size:"15"}}):a._e(),a._v(" "),e("span",{staticClass:"label"},[a._t("default")],2)],1)])}),[],!1,null,"50a1066a",null);t.a=s.exports},v7vm:function(a,t,e){"use strict";var n=e("poQ8");e.n(n).a},y3km:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".table-tools[data-v-7288ff38] {\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 40px;\n  z-index: 9;\n}\n.table .cell-item[data-v-7288ff38] {\n  font-size: 0.9375em;\n  white-space: nowrap;\n}\n@media only screen and (max-width: 690px) {\n.table-tools[data-v-7288ff38] {\n    padding: 0 0 5px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table-tools[data-v-7288ff38] {\n    background: #131414;\n}\n}\n",""])}}]);