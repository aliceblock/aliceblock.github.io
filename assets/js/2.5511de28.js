(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{316:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));n(69),n(48),n(317),n(491),n(178),n(68),n(101),n(102),n(24),n(97),n(175);var s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,a=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(s),n=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+n}function p(t,e){var n=t.hash,i=function(t){var e=t.match(s);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function f(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var s=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===s)return Object.assign({},t[i],{type:"page",path:h(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,s){var i=n.pages,r=n.themeConfig,a=s&&r.locales&&r.locales[s]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,o),u=l.base,c=l.config;return c?c.map((function(t){return function t(e,n,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return f(n,e,s);if(Array.isArray(e))return Object.assign(f(n,e[0],s),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var r=e.children||[];return 0===r.length&&e.path?Object.assign(f(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map((function(e){return t(e,n,s,i+1)})),collapsable:!1!==e.collapsable}}(t,i,u)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},317:function(t,e,n){"use strict";var s=n(170),i=n(5),r=n(14),a=n(23),o=n(171),l=n(172);s("match",1,(function(t,e,n){return[function(e){var n=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,n):new RegExp(e)[t](String(n))},function(t){var s=n(e,t,this);if(s.done)return s.value;var a=i(t),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var h,p=[],f=0;null!==(h=l(a,u));){var d=String(h[0]);p[f]=d,""===d&&(a.lastIndex=o(u,r(a.lastIndex),c)),f++}return 0===f?null:p}]}))},445:function(t,e,n){var s=n(23),i="["+n(446)+"]",r=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},446:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},456:function(t,e,n){"use strict";n(488),n(94),n(96);var s=n(316),i={props:{item:{required:!0}},computed:{link:function(){return Object(s.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:s.f,isMailto:s.g,isTel:s.h}},r=n(47),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.a=a.exports},459:function(t,e,n){},460:function(t,e,n){},461:function(t,e,n){var s=n(6),i=n(2),r=n(95),a=n(462),o=n(7).f,l=n(70).f,u=n(169),c=n(103),h=n(177),p=n(10),f=n(1),d=n(32).set,g=n(176),v=n(3)("match"),m=i.RegExp,b=m.prototype,j=/a/g,k=/a/g,x=new m(j)!==j,_=h.UNSUPPORTED_Y;if(s&&r("RegExp",!x||_||f((function(){return k[v]=!1,m(j)!=j||m(k)==k||"/a/i"!=m(j,"i")})))){for(var y=function(t,e){var n,s=this instanceof y,i=u(t),r=void 0===e;if(!s&&i&&t.constructor===y&&r)return t;x?i&&!r&&(t=t.source):t instanceof y&&(r&&(e=c.call(t)),t=t.source),_&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=a(x?new m(t,e):m(t,e),s?this:b,y);return _&&n&&d(o,{sticky:n}),o},C=function(t){t in y||o(y,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},$=l(m),w=0;$.length>w;)C($[w++]);b.constructor=y,y.prototype=b,p(i,"RegExp",y)}g("RegExp")},462:function(t,e,n){var s=n(4),i=n(99);t.exports=function(t,e,n){var r,a;return i&&"function"==typeof(r=e.constructor)&&r!==n&&s(a=r.prototype)&&a!==n.prototype&&i(t,a),t}},463:function(t,e,n){},464:function(t,e,n){},465:function(t,e,n){},466:function(t,e,n){},467:function(t,e,n){var s={"./af":318,"./af.js":318,"./ar":319,"./ar-dz":320,"./ar-dz.js":320,"./ar-kw":321,"./ar-kw.js":321,"./ar-ly":322,"./ar-ly.js":322,"./ar-ma":323,"./ar-ma.js":323,"./ar-sa":324,"./ar-sa.js":324,"./ar-tn":325,"./ar-tn.js":325,"./ar.js":319,"./az":326,"./az.js":326,"./be":327,"./be.js":327,"./bg":328,"./bg.js":328,"./bm":329,"./bm.js":329,"./bn":330,"./bn.js":330,"./bo":331,"./bo.js":331,"./br":332,"./br.js":332,"./bs":333,"./bs.js":333,"./ca":334,"./ca.js":334,"./cs":335,"./cs.js":335,"./cv":336,"./cv.js":336,"./cy":337,"./cy.js":337,"./da":338,"./da.js":338,"./de":339,"./de-at":340,"./de-at.js":340,"./de-ch":341,"./de-ch.js":341,"./de.js":339,"./dv":342,"./dv.js":342,"./el":343,"./el.js":343,"./en-SG":344,"./en-SG.js":344,"./en-au":345,"./en-au.js":345,"./en-ca":346,"./en-ca.js":346,"./en-gb":347,"./en-gb.js":347,"./en-ie":348,"./en-ie.js":348,"./en-il":349,"./en-il.js":349,"./en-nz":350,"./en-nz.js":350,"./eo":351,"./eo.js":351,"./es":352,"./es-do":353,"./es-do.js":353,"./es-us":354,"./es-us.js":354,"./es.js":352,"./et":355,"./et.js":355,"./eu":356,"./eu.js":356,"./fa":357,"./fa.js":357,"./fi":358,"./fi.js":358,"./fo":359,"./fo.js":359,"./fr":360,"./fr-ca":361,"./fr-ca.js":361,"./fr-ch":362,"./fr-ch.js":362,"./fr.js":360,"./fy":363,"./fy.js":363,"./ga":364,"./ga.js":364,"./gd":365,"./gd.js":365,"./gl":366,"./gl.js":366,"./gom-latn":367,"./gom-latn.js":367,"./gu":368,"./gu.js":368,"./he":369,"./he.js":369,"./hi":370,"./hi.js":370,"./hr":371,"./hr.js":371,"./hu":372,"./hu.js":372,"./hy-am":373,"./hy-am.js":373,"./id":374,"./id.js":374,"./is":375,"./is.js":375,"./it":376,"./it-ch":377,"./it-ch.js":377,"./it.js":376,"./ja":378,"./ja.js":378,"./jv":379,"./jv.js":379,"./ka":380,"./ka.js":380,"./kk":381,"./kk.js":381,"./km":382,"./km.js":382,"./kn":383,"./kn.js":383,"./ko":384,"./ko.js":384,"./ku":385,"./ku.js":385,"./ky":386,"./ky.js":386,"./lb":387,"./lb.js":387,"./lo":388,"./lo.js":388,"./lt":389,"./lt.js":389,"./lv":390,"./lv.js":390,"./me":391,"./me.js":391,"./mi":392,"./mi.js":392,"./mk":393,"./mk.js":393,"./ml":394,"./ml.js":394,"./mn":395,"./mn.js":395,"./mr":396,"./mr.js":396,"./ms":397,"./ms-my":398,"./ms-my.js":398,"./ms.js":397,"./mt":399,"./mt.js":399,"./my":400,"./my.js":400,"./nb":401,"./nb.js":401,"./ne":402,"./ne.js":402,"./nl":403,"./nl-be":404,"./nl-be.js":404,"./nl.js":403,"./nn":405,"./nn.js":405,"./pa-in":406,"./pa-in.js":406,"./pl":407,"./pl.js":407,"./pt":408,"./pt-br":409,"./pt-br.js":409,"./pt.js":408,"./ro":410,"./ro.js":410,"./ru":411,"./ru.js":411,"./sd":412,"./sd.js":412,"./se":413,"./se.js":413,"./si":414,"./si.js":414,"./sk":415,"./sk.js":415,"./sl":416,"./sl.js":416,"./sq":417,"./sq.js":417,"./sr":418,"./sr-cyrl":419,"./sr-cyrl.js":419,"./sr.js":418,"./ss":420,"./ss.js":420,"./sv":421,"./sv.js":421,"./sw":422,"./sw.js":422,"./ta":423,"./ta.js":423,"./te":424,"./te.js":424,"./tet":425,"./tet.js":425,"./tg":426,"./tg.js":426,"./th":427,"./th.js":427,"./tl-ph":428,"./tl-ph.js":428,"./tlh":429,"./tlh.js":429,"./tr":430,"./tr.js":430,"./tzl":431,"./tzl.js":431,"./tzm":432,"./tzm-latn":433,"./tzm-latn.js":433,"./tzm.js":432,"./ug-cn":434,"./ug-cn.js":434,"./uk":435,"./uk.js":435,"./ur":436,"./ur.js":436,"./uz":437,"./uz-latn":438,"./uz-latn.js":438,"./uz.js":437,"./vi":439,"./vi.js":439,"./x-pseudo":440,"./x-pseudo.js":440,"./yo":441,"./yo.js":441,"./zh-cn":442,"./zh-cn.js":442,"./zh-hk":443,"./zh-hk.js":443,"./zh-tw":444,"./zh-tw.js":444};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id=467},468:function(t,e,n){},469:function(t,e,n){},470:function(t,e,n){"use strict";var s=n(0),i=n(34).find,r=n(98),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),s({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},471:function(t,e,n){},472:function(t,e,n){},482:function(t,e,n){"use strict";n(493),n(495),n(175),n(97),n(24),n(317),n(48);var s={data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,s=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],r=0;r<e.length&&!(i.length>=5);r++){var a=e[r];if(this.getPageLocalePath(a)===n&&this.isSearchable(a)&&!a.frontmatter.draft)if(s(a))i.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(i.length>=5);o++){var l=a.headers[o];s(l)&&i.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},i=(n(497),n(47)),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,s){return n("li",{staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports;n(498);function a(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var o={components:{SidebarButton:Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(484).a,SearchBox:r,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(a(this.$el,"paddingLeft"))+parseInt(a(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},l=(n(502),Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=l.exports},483:function(t,e,n){"use strict";n.r(e);n(94);var s=n(316),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(487).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(483).default},methods:{isActive:s.e}},r=(n(504),n(47)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(470),n(68);function o(t,e,n,s){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},n)}function l(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var u=Object(s.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),l(t,e.children,n,i,r,a+1)])})))}var u={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,r=(n.$site,n.$route),a=n.$themeConfig,u=n.$themeLocaleConfig,c=e.props,h=c.item,p=c.sidebarDepth,f=Object(s.e)(r,h.path),d="auto"===h.type?f||h.children.some((function(t){return Object(s.e)(r,h.basePath+"#"+t.slug)})):f,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,d),v=[i.frontmatter.sidebarDepth,p,u.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=u.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,r,v)]:(d||m)&&h.headers&&!s.d.test(h.path)?[g,l(t,Object(s.c)(h.headers),h.path,r,v)]:g}};n(505);var c={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(r.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return"page"===e.type&&Object(s.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(s.e)(this.$route,t.regularPath)}}},h=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,s){return n("li",{key:s},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},484:function(t,e,n){"use strict";var s=n(45),i=(n(96),n(68),n(69),n(48),n(94),n(179),n(317),n(461),n(173),n(456)),r=n(487),a={components:{NavLink:i.a,DropdownTransition:r.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},o=(n(500),n(47)),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports,u=n(316),c={components:{NavLink:i.a,DropdownLink:l},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var a,o=e[s],l=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===a}))||(a=s)),{text:l,link:a}}))};return[].concat(Object(s.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(u.j)(t),{items:(t.items||[]).map(u.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}}},h=(n(501),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=h.exports},485:function(t,e,n){"use strict";n(69),n(48);var s=n(315),i=n.n(s),r=n(316);function a(t,e,n){var s=[];!function t(e,n){for(var s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(var i=0;i<s.length;i++){var r=s[i];if("page"===r.type&&r.path===decodeURIComponent(t.path))return s[i+n]}}var o={props:["sidebarItems"],computed:{lastUpdated:function(){var t=this.$page.frontmatter.lang||"th-TH";return i.a.locale(t),i()(this.$page.lastUpdated).fromNow()},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(r.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(r.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,s=t.docsDir,i=void 0===s?"":s,r=t.docsBranch,a=void 0===r?"master":r,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,i,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,s,i){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(s,"/")+(n?n.replace(r.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(r.a,"")+"/":"")+i}}},l=(n(503),n(47)),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),n("FacebookComment"),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()],1),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=u.exports},486:function(t,e,n){"use strict";var s=n(483),i=n(484),r={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:i.a},props:["items"]},a=(n(506),n(47)),o=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},487:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(499),n(47)),r=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},488:function(t,e,n){"use strict";var s=n(0),i=n(489);s({target:"String",proto:!0,forced:n(490)("link")},{link:function(t){return i(this,"a","href",t)}})},489:function(t,e,n){var s=n(23),i=/"/g;t.exports=function(t,e,n,r){var a=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+a+"</"+e+">"}},490:function(t,e,n){var s=n(1);t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},491:function(t,e,n){"use strict";var s=n(170),i=n(169),r=n(5),a=n(23),o=n(100),l=n(171),u=n(14),c=n(172),h=n(71),p=n(1),f=[].push,d=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));s("split",2,(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=String(a(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===t)return[s];if(!i(t))return e.call(s,t,r);for(var o,l,u,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,p+"g");(o=h.call(g,s))&&!((l=g.lastIndex)>d&&(c.push(s.slice(d,o.index)),o.length>1&&o.index<s.length&&f.apply(c,o.slice(1)),u=o[0].length,d=l,c.length>=r));)g.lastIndex===o.index&&g.lastIndex++;return d===s.length?!u&&g.test("")||c.push(""):c.push(s.slice(d)),c.length>r?c.slice(0,r):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,i,n):s.call(String(i),e,n)},function(t,i){var a=n(s,t,this,i,s!==e);if(a.done)return a.value;var h=r(t),p=String(this),f=o(h,RegExp),v=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new f(g?h:"^(?:"+h.source+")",m),j=void 0===i?4294967295:i>>>0;if(0===j)return[];if(0===p.length)return null===c(b,p)?[p]:[];for(var k=0,x=0,_=[];x<p.length;){b.lastIndex=g?x:0;var y,C=c(b,g?p:p.slice(x));if(null===C||(y=d(u(b.lastIndex+(g?0:x)),p.length))===k)x=l(p,x,v);else{if(_.push(p.slice(k,x)),_.length===j)return _;for(var $=1;$<=C.length-1;$++)if(_.push(C[$]),_.length===j)return _;x=k=y}}return _.push(p.slice(k)),_}]}),!g)},493:function(t,e,n){var s=n(0),i=n(494);s({global:!0,forced:parseInt!=i},{parseInt:i})},494:function(t,e,n){var s=n(2),i=n(445).trim,r=n(446),a=s.parseInt,o=/^[+-]?0[Xx]/,l=8!==a(r+"08")||22!==a(r+"0x16");t.exports=l?function(t,e){var n=i(String(t));return a(n,e>>>0||(o.test(n)?16:10))}:a},495:function(t,e,n){"use strict";var s=n(0),i=n(445).trim;s({target:"String",proto:!0,forced:n(496)("trim")},{trim:function(){return i(this)}})},496:function(t,e,n){var s=n(1),i=n(446);t.exports=function(t){return s((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},497:function(t,e,n){"use strict";n(459)},498:function(t,e,n){"use strict";n(460)},499:function(t,e,n){"use strict";n(463)},500:function(t,e,n){"use strict";n(464)},501:function(t,e,n){"use strict";n(465)},502:function(t,e,n){"use strict";n(466)},503:function(t,e,n){"use strict";n(468)},504:function(t,e,n){"use strict";n(469)},505:function(t,e,n){"use strict";n(471)},506:function(t,e,n){"use strict";n(472)}}]);