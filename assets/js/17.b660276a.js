(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{457:function(s,t,a){"use strict";var e=a(28),n=a(65);a(174);function j(s,t,a){return t in s?Object.defineProperty(s,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[t]=a,s}a(29),a(30);var i=a(315),r=a.n(i),l=function(){function s(t){var a=t.title,n=t.description,i=t.coverImage,r=t.path,l=t.publishDate,o=t.lang,c=t.tags;Object(e.a)(this,s),j(this,"title",void 0),j(this,"description",void 0),j(this,"coverImage",void 0),j(this,"path",void 0),j(this,"publishDate",void 0),j(this,"lang",void 0),j(this,"tags",void 0),this.title=a,this.description=n,this.coverImage=i,this.path=r,this.publishDate=l,this.lang=o||"th-TH",this.tags=c||[]}return Object(n.a)(s,[{key:"getMoment",value:function(){return r.a.locale(this.lang),r()(this.publishDate).fromNow()}},{key:"getDate",value:function(){return r.a.locale(this.lang),r()(this.publishDate).calendar()}}]),s}();t.a=l},467:function(s,t,a){var e={"./af":318,"./af.js":318,"./ar":319,"./ar-dz":320,"./ar-dz.js":320,"./ar-kw":321,"./ar-kw.js":321,"./ar-ly":322,"./ar-ly.js":322,"./ar-ma":323,"./ar-ma.js":323,"./ar-sa":324,"./ar-sa.js":324,"./ar-tn":325,"./ar-tn.js":325,"./ar.js":319,"./az":326,"./az.js":326,"./be":327,"./be.js":327,"./bg":328,"./bg.js":328,"./bm":329,"./bm.js":329,"./bn":330,"./bn.js":330,"./bo":331,"./bo.js":331,"./br":332,"./br.js":332,"./bs":333,"./bs.js":333,"./ca":334,"./ca.js":334,"./cs":335,"./cs.js":335,"./cv":336,"./cv.js":336,"./cy":337,"./cy.js":337,"./da":338,"./da.js":338,"./de":339,"./de-at":340,"./de-at.js":340,"./de-ch":341,"./de-ch.js":341,"./de.js":339,"./dv":342,"./dv.js":342,"./el":343,"./el.js":343,"./en-SG":344,"./en-SG.js":344,"./en-au":345,"./en-au.js":345,"./en-ca":346,"./en-ca.js":346,"./en-gb":347,"./en-gb.js":347,"./en-ie":348,"./en-ie.js":348,"./en-il":349,"./en-il.js":349,"./en-nz":350,"./en-nz.js":350,"./eo":351,"./eo.js":351,"./es":352,"./es-do":353,"./es-do.js":353,"./es-us":354,"./es-us.js":354,"./es.js":352,"./et":355,"./et.js":355,"./eu":356,"./eu.js":356,"./fa":357,"./fa.js":357,"./fi":358,"./fi.js":358,"./fo":359,"./fo.js":359,"./fr":360,"./fr-ca":361,"./fr-ca.js":361,"./fr-ch":362,"./fr-ch.js":362,"./fr.js":360,"./fy":363,"./fy.js":363,"./ga":364,"./ga.js":364,"./gd":365,"./gd.js":365,"./gl":366,"./gl.js":366,"./gom-latn":367,"./gom-latn.js":367,"./gu":368,"./gu.js":368,"./he":369,"./he.js":369,"./hi":370,"./hi.js":370,"./hr":371,"./hr.js":371,"./hu":372,"./hu.js":372,"./hy-am":373,"./hy-am.js":373,"./id":374,"./id.js":374,"./is":375,"./is.js":375,"./it":376,"./it-ch":377,"./it-ch.js":377,"./it.js":376,"./ja":378,"./ja.js":378,"./jv":379,"./jv.js":379,"./ka":380,"./ka.js":380,"./kk":381,"./kk.js":381,"./km":382,"./km.js":382,"./kn":383,"./kn.js":383,"./ko":384,"./ko.js":384,"./ku":385,"./ku.js":385,"./ky":386,"./ky.js":386,"./lb":387,"./lb.js":387,"./lo":388,"./lo.js":388,"./lt":389,"./lt.js":389,"./lv":390,"./lv.js":390,"./me":391,"./me.js":391,"./mi":392,"./mi.js":392,"./mk":393,"./mk.js":393,"./ml":394,"./ml.js":394,"./mn":395,"./mn.js":395,"./mr":396,"./mr.js":396,"./ms":397,"./ms-my":398,"./ms-my.js":398,"./ms.js":397,"./mt":399,"./mt.js":399,"./my":400,"./my.js":400,"./nb":401,"./nb.js":401,"./ne":402,"./ne.js":402,"./nl":403,"./nl-be":404,"./nl-be.js":404,"./nl.js":403,"./nn":405,"./nn.js":405,"./pa-in":406,"./pa-in.js":406,"./pl":407,"./pl.js":407,"./pt":408,"./pt-br":409,"./pt-br.js":409,"./pt.js":408,"./ro":410,"./ro.js":410,"./ru":411,"./ru.js":411,"./sd":412,"./sd.js":412,"./se":413,"./se.js":413,"./si":414,"./si.js":414,"./sk":415,"./sk.js":415,"./sl":416,"./sl.js":416,"./sq":417,"./sq.js":417,"./sr":418,"./sr-cyrl":419,"./sr-cyrl.js":419,"./sr.js":418,"./ss":420,"./ss.js":420,"./sv":421,"./sv.js":421,"./sw":422,"./sw.js":422,"./ta":423,"./ta.js":423,"./te":424,"./te.js":424,"./tet":425,"./tet.js":425,"./tg":426,"./tg.js":426,"./th":427,"./th.js":427,"./tl-ph":428,"./tl-ph.js":428,"./tlh":429,"./tlh.js":429,"./tr":430,"./tr.js":430,"./tzl":431,"./tzl.js":431,"./tzm":432,"./tzm-latn":433,"./tzm-latn.js":433,"./tzm.js":432,"./ug-cn":434,"./ug-cn.js":434,"./uk":435,"./uk.js":435,"./ur":436,"./ur.js":436,"./uz":437,"./uz-latn":438,"./uz-latn.js":438,"./uz.js":437,"./vi":439,"./vi.js":439,"./x-pseudo":440,"./x-pseudo.js":440,"./yo":441,"./yo.js":441,"./zh-cn":442,"./zh-cn.js":442,"./zh-hk":443,"./zh-hk.js":443,"./zh-tw":444,"./zh-tw.js":444};function n(s){var t=j(s);return a(t)}function j(s){if(!a.o(e,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e[s]}n.keys=function(){return Object.keys(e)},n.resolve=j,s.exports=n,n.id=467},478:function(s,t,a){},479:function(s,t,a){},702:function(s,t,a){"use strict";a(478)},703:function(s,t,a){"use strict";a(479)},711:function(s,t,a){"use strict";a.r(t);a(457);var e={props:{data:{type:Object,default:function(){return{}}}},computed:{momentDate:function(){return this.data.getMoment()},momentCalendar:function(){return this.data.getDate()}}},n=(a(702),a(703),a(47)),j=Object(n.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("router-link",{staticClass:"block md:inline-block",attrs:{to:s.data.path}},[a("div",{staticClass:"card max-w-full md:max-w-xs lg:max-w-sm shadow hover:shadow-lg"},[a("img",{staticClass:"w-full",attrs:{src:s.data.coverImage,alt:s.data.title}}),s._v(" "),a("div",{staticClass:"card-content px-6 py-4"},[a("div",[a("time",{staticClass:"has-text-primary",attrs:{datetime:s.momentCalendar,title:s.momentCalendar}},[s._v(s._s(s.momentDate))]),s._v(" "),a("p",{staticClass:"title font-semibold text-2xl",attrs:{title:s.data.title}},[s._v(s._s(s.data.title))]),s._v(" "),a("div",{staticClass:"content"},[s._v(s._s(s.data.description))])]),s._v(" "),a("TagList",{attrs:{tags:s.data.tags}})],1)])])}),[],!1,null,"3da2afa3",null);t.default=j.exports}}]);