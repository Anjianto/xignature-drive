(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"2wZp":function(t,e,i){"use strict";i("Mlra")},"6Rdq":function(t,e,i){"use strict";var n=i("9Q3x"),r=i("yMep"),o=i("c4kp"),s=i("2QtR"),a=i("L2JU"),c=i("xCqy");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={name:"FilesView",components:{DesktopSortingAndPreview:n.a,DesktopToolbar:r.a,FileBrowser:o.a,ContextMenu:s.a},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(a.b)(["config"])),methods:{contextMenu:function(t,e){c.a.$emit("contextMenu:show",t,e)}}},d=(i("2wZp"),i("KHd+")),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"files-view"},on:{"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[i("ContextMenu"),t._v(" "),i("DesktopSortingAndPreview"),t._v(" "),i("DesktopToolbar"),t._v(" "),i("FileBrowser")],1)}),[],!1,null,null,null);e.a=f.exports},CoTS:function(t,e,i){"use strict";i.r(e);var n=i("6Rdq"),r=i("LtV2"),o=i("hXay"),s=i("CjXH"),a={name:"FilesView",components:{ContentFileView:n.a,ContentSidebar:r.a,ContentGroup:o.a,LinkIcon:s.H,UsersIcon:s.ib},methods:{getShared:function(){this.$store.dispatch("getShared",[{back:!1,init:!1}])},getParticipantUploads:function(){this.$store.dispatch("getParticipantUploads")}},mounted:function(){this.getShared()}},c=i("KHd+"),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"viewport"}},[i("ContentSidebar",[i("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[i("div",{staticClass:"menu-list-wrapper vertical"},[i("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["shared"])},on:{click:function(e){return t.getShared()}}},[i("div",{staticClass:"icon"},[i("link-icon",{attrs:{size:"17"}})],1),t._v(" "),i("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.my_shared"))+"\n                    ")])]),t._v(" "),i("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["participant_uploads"])},on:{click:function(e){return t.getParticipantUploads()}}},[i("div",{staticClass:"icon"},[i("users-icon",{attrs:{size:"17"}})],1),t._v(" "),i("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.participant_uploads"))+"\n                    ")])])])])],1),t._v(" "),i("ContentFileView")],1)}),[],!1,null,"fd8b19c0",null);e.default=l.exports},Mlra:function(t,e,i){var n=i("Q8SN");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,r);n.locals&&(t.exports=n.locals)},Q8SN:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"#files-view{font-family:Nunito,sans-serif;font-size:16px;width:100%;height:100%;position:relative;min-width:320px;overflow-x:hidden;padding-left:15px;padding-right:15px;overflow-y:hidden}@media only screen and (max-width:690px){#files-view{padding-left:0;padding-right:0}}",""])}}]);