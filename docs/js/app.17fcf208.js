(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("a925"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app"}},[r("el-header",{staticClass:"md-ih-header"},[r("div",{staticClass:"md-ih-container"},[r("section",{staticClass:"md-ih-header_left"},[r("img",{staticClass:"md-ih-header-logo",attrs:{src:"https://manhattan.didistatic.com/static/manhattan/mand/docs/mand-logo-black.svg",alt:""}}),r("span",{staticClass:"md-ih-header-name"},[e._v("Mand Mobile Issue Helper")])]),r("section",{staticClass:"md-ih-header_right"},[r("div",{staticClass:"md-ih-lang",on:{click:e.changeLang}},[e._v("\n          "+e._s(e.lang)+"\n        ")])])])]),r("el-main",{staticClass:"md-ih-main"},[r("div",{staticClass:"md-ih-container"},[r("statement"),r("el-form",{ref:"form",staticClass:"md-ih-form",attrs:{"label-position":"top",model:e.basic,"show-message":!1,"validate-on-rule-change":!1,"status-icon":""},nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("project"),required:"",prop:"project"}},[r("el-select",{model:{value:e.basic.project,callback:function(t){e.$set(e.basic,"project",t)},expression:"basic.project"}},[r("el-option",{attrs:{label:"Mand Mobile",value:"mand-mobile"}}),r("el-option",{attrs:{label:"Mand Mobile RN",value:"mand-mobile-rn"}})],1)],1),r("el-form-item",{attrs:{label:e.$t("type"),required:"",prop:"type"}},[r("el-radio-group",{model:{value:e.basic.type,callback:function(t){e.$set(e.basic,"type",t)},expression:"basic.type"}},[r("el-radio-button",{attrs:{label:"bug-report"}},[e._v(e._s(e.$t("typeLable0")))]),r("el-radio-button",{attrs:{label:"feature-request"}},[e._v(e._s(e.$t("typeLable1")))])],1)],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("title"),required:"",prop:"title"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.basic.title,callback:function(t){e.$set(e.basic,"title",t)},expression:"basic.title"}})],1)],1)]),r("keep-alive",[r(e.basic.type,{ref:"content",tag:"component",attrs:{project:e.basic.project}})],1),r("div",{staticClass:"md-ih-action"},[r("el-button",{attrs:{type:"primary",round:""},on:{click:e.generate}},[e._v(e._s(e.$t("preview")))])],1)],1)]),r("el-footer",{staticClass:"md-ih-footer"},[e._v("\n    Inspired by  "),r("a",{attrs:{href:"https://new-issue.vuejs.org/",target:"_blank"}},[e._v("Vue Issue Helper")])]),r("el-dialog",{staticClass:"md-ih-preivew",attrs:{title:"预览",visible:e.isPreviewShow,"close-on-click-modal":!1,"close-on-press-escape":!1,modal:!1},on:{"update:visible":function(t){e.isPreviewShow=t}}},[r("div",{staticClass:"md-ih-preivew-markdown markdown-body",domProps:{innerHTML:e._s(e.previewContent.html)}}),r("div",{staticClass:"md-ih-preivew-footer"},[r("el-button",{attrs:{type:"primary",round:""},on:{click:e.create}},[e._v(e._s(e.$t("create")))])],1)])],1)},s=[],o=(r("a481"),r("96cf"),r("3b8d")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return"zh"===e.$i18n.locale?r("div",{staticClass:"md-ih-statement"},[r("h2",[e._v("在开始之前")]),e._m(0)]):r("div",{staticClass:"md-ih-statement"},[r("h2",[e._v("Before Start")]),e._m(1)])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("请尝试在文档中寻找答案，并仔细的检查代码")]),r("li",[e._v("请尝试在旧issue中寻找是否类似问题已被解决")]),r("li",[e._v("请详尽的描述您的问题，更多的有效信息，可以得到更好的帮助")]),r("li",[e._v("请尽量用英文，如果能够把问题描述清楚")]),r("li",[e._v("强烈推荐阅读"),r("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html",target:"_blank"}},[e._v("《如何有效地报告Bug》")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Please try to find the answer in the documentation and check the code carefully.")]),r("li",[e._v("Please try to find out if the similar issue has been resolved in the old issue.")]),r("li",[e._v("Please describe your problem in detail, more effective information, you can get better help.")]),r("li",[e._v("Please try to use English if you can describe the problem clearly.")]),r("li",[e._v("It is highly recommended to read "),r("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html",target:"_blank"}},[e._v("《How to Effectively Report Bug》")])])])}],p=(r("7530"),r("2877")),u={},d=Object(p["a"])(u,l,c,!1,null,"07f0addb",null),m=d.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticClass:"md-ih-form",attrs:{"label-position":"top",model:e.attrs,"show-message":!1,"validate-on-rule-change":!1,"status-icon":""},nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("rationale"),prop:"rationale",required:""}},[r("el-input",{attrs:{type:"textarea",maxlength:"200",rows:"3"},model:{value:e.attrs.rationale,callback:function(t){e.$set(e.attrs,"rationale",t)},expression:"attrs.rationale"}}),r("p",{staticClass:"md-ih-form-item-tips",domProps:{innerHTML:e._s(e.$t("rationaleTips"))}})],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("proposal"),prop:"proposal",required:""}},[r("el-input",{attrs:{type:"textarea",maxlength:"200",rows:"3"},model:{value:e.attrs.proposal,callback:function(t){e.$set(e.attrs,"proposal",t)},expression:"attrs.proposal"}}),r("p",{staticClass:"md-ih-form-item-tips",domProps:{innerHTML:e._s(e.$t("proposalTips"))}})],1)],1)])},h=[],b=(r("b54a"),r("0e54")),v=r.n(b),g=r("f904"),w=r.n(g);function y(e){var t="".concat(e,"\n\n\x3c!-- generated by Mand Mobile Issue Helper. DO NOT REMOVE --\x3e");w()(t);var r=new v.a.Renderer({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),a=r.link;return r.link=function(e,t,n){var i=a.call(r,e,t,n);return i.replace(/^<a /,'<a target="_blank" rel="nofollow" ')},{markdown:t,html:v()(e,{renderer:r})}}r("8e6e"),r("ac6a"),r("456d");var x=r("bd86"),k=(r("386d"),r("4328")),_=r.n(k);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach(function(t){Object(x["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function C(){return _.a.parse(window.location.search.slice(1))}function O(e){var t=window.location.origin+"/?"+_.a.stringify(j({},C(),{},e),{encode:!1});window.history.pushState({path:t},"",t)}var P={data:function(){return{attrs:{}}},methods:{generate:function(){var e=this;return new Promise(function(t,r){e.$refs.form.validate(function(a){if(a){var n=e.attrs,i=n.rationale,s=n.proposal;t(y("\n### What problem does this feature solve?\n".concat(i,"\n\n### What does the proposed API look like?\n").concat(s,"\n  ").trim()))}else r()})})}}},M=P,L=Object(p["a"])(M,f,h,!1,null,null,null),T=L.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticClass:"md-ih-form",attrs:{"label-position":"top",model:e.attrs,"show-message":!1,"validate-on-rule-change":!1,"status-icon":""},nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:this.project+" "+e.$t("version"),prop:"version",required:""}},[r("el-input",{attrs:{maxlength:"10",placeholder:"2.4.1"},model:{value:e.attrs.version,callback:function(t){e.$set(e.attrs,"version",t)},expression:"attrs.version"}}),r("p",{staticClass:"md-ih-form-item-tips"},[e._v("npm ls "+e._s(this.project))])],1),r("el-form-item",{attrs:{label:e.libVersionLabel+" "+e.$t("versionLib"),prop:"versionLib",required:""}},[r("el-input",{attrs:{maxlength:"10",placeholder:"2.6.1"},model:{value:e.attrs.versionLib,callback:function(t){e.$set(e.attrs,"versionLib",t)},expression:"attrs.versionLib"}})],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("versionBrowser"),prop:"versionBrowser",required:""}},[r("el-input",{attrs:{maxlength:"30",placeholder:"iphone x/safari"},model:{value:e.attrs.versionBrowser,callback:function(t){e.$set(e.attrs,"versionBrowser",t)},expression:"attrs.versionBrowser"}})],1),r("el-form-item",{attrs:{label:e.$t("versionNode")}},[r("el-input",{attrs:{maxlength:"30",placeholder:"node 10.0.1/npm 3.5.1"},model:{value:e.attrs.versionNode,callback:function(t){e.$set(e.attrs,"versionNode",t)},expression:"attrs.versionNode"}}),r("p",{staticClass:"md-ih-form-item-tips"},[e._v(e._s(e.$t("versionNodeTips")))])],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("recurring")}},[r("el-input",{attrs:{maxlength:"50",placeholder:"https://codesandbox.io/s/mand-mobile-quick-start-ckqbz"},model:{value:e.attrs.recurring,callback:function(t){e.$set(e.attrs,"recurring",t)},expression:"attrs.recurring"}}),r("p",{staticClass:"md-ih-form-item-tips",domProps:{innerHTML:e._s(e.$t("recurringTips"))}})],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("steps"),prop:"steps",required:""}},[r("el-input",{attrs:{type:"textarea",maxlength:"200",rows:"3"},model:{value:e.attrs.steps,callback:function(t){e.$set(e.attrs,"steps",t)},expression:"attrs.steps"}})],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("expected"),prop:"expected",required:""}},[r("el-input",{attrs:{type:"textarea",maxlength:"200",rows:"3"},model:{value:e.attrs.expected,callback:function(t){e.$set(e.attrs,"expected",t)},expression:"attrs.expected"}})],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("actual"),prop:"actual",required:""}},[r("el-input",{attrs:{type:"textarea",maxlength:"200",rows:"3"},model:{value:e.attrs.actual,callback:function(t){e.$set(e.attrs,"actual",t)},expression:"attrs.actual"}})],1)],1),r("div",{staticClass:"md-ih-form-item"},[r("el-form-item",{attrs:{label:e.$t("extra")}},[r("el-input",{attrs:{type:"textarea",maxlength:"200",rows:"3"},model:{value:e.attrs.extra,callback:function(t){e.$set(e.attrs,"extra",t)},expression:"attrs.extra"}})],1)],1)])},B=[],I={props:{project:{default:""}},data:function(){return{attrs:{}}},computed:{libVersionLabel:function(){switch(this.project){case"mand-mobile":return"Vue";case"mand-mobile-rn":return"React Native";default:return""}}},methods:{generate:function(){var e=this;return new Promise(function(t,r){e.$refs.form.validate(function(a){if(a){var n=e.attrs,i=n.version,s=n.versionLib,o=n.versionBrowser,l=n.versionNode,c=n.recurring,p=n.steps,u=n.expected,d=n.actual,m=n.extra;t(y("\n#### Mand Mobile Version\n".concat(i,"            \n\n#### ").concat(e.libVersionLabel," Version\n").concat(s,"       \n\n#### Model / OS & Browser Info\n").concat(o,"       \n\n").concat(l?"#### Node Version, Package Management Tool\n\n".concat(l):"","\n\n").concat(c?"#### Recurring Links\n".concat(c):"","\n\n#### Recurring Steps\n").concat(p,"\n\n#### Expectant Behaviors\n").concat(u,"\n\n#### Actual Behaviors\n").concat(d,"\n\n").concat(m?"---\n".concat(m):"","\n  ").trim()))}else r()})})}}},S=I,N=Object(p["a"])(S,q,B,!1,null,null,null),R=N.exports,E={name:"app",components:{Statement:m,FeatureRequest:T,BugReport:R},data:function(){return{basic:{project:"",title:"",type:"bug-report"},isPreviewShow:!1,previewContent:""}},computed:{lang:function(){return"zh"===this.$i18n.locale?"English":"中文"}},watch:{"basic.project":function(e){O({project:e})}},created:function(){this.$set(this.basic,"project",C().project||"mand-mobile")},methods:{generate:function(){var e=this;this.$refs.form.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.$refs.content.generate();case 5:e.generated=t.sent,e.previewContent=e.generated,e.isPreviewShow=!0,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](2);case 12:case"end":return t.stop()}},t,null,[[2,10]])}));return function(e){return t.apply(this,arguments)}}())},create:function(){var e="[".concat(this.basic.type,"] ").concat(encodeURIComponent(this.basic.title).replace(/%2B/gi,"+")),t=encodeURIComponent(this.previewContent.markdown).replace(/%2B/gi,"+");window.open("https://github.com/didi/".concat(this.basic.project,"/issues/new?title=").concat(e,"&body=").concat(t))},changeLang:function(){var e="zh"===this.$i18n.locale?"en":"zh";this.$i18n.locale=e}}},z=E,H=(r("7faf"),Object(p["a"])(z,i,s,!1,null,null,null)),V=H.exports,D={zh:{project:"相关项目",type:"Issue类型",typeLable0:"问题反馈",typeLable1:"功能要求",title:"Issue标题",version:"版本",versionLib:"版本",versionBrowser:"机型/操作系统/浏览器及版本",versionNode:"Node版本/包管理工具(npm/cnpm/yarn等)及版本",versionNodeTips:"如果是构建相关问题",recurring:"复现链接",recurringTips:'请提供一个尽可能精简的用以问题的<a href="https://codesandbox.io/s/mand-mobile-quick-start-ckqbz" target="_blank">demo</a>或是GitHub仓库的链接。',steps:"复现步骤",expected:"期待行为是什么？",actual:"实际行为是什么？",extra:"补充说明",rationale:"这个功能解决了什么问题？",rationaleTips:"请尽可能详尽地说明这个需求的用例和场景。最重要的是：解释清楚是怎样的用户体验需求催生了这个功能。<br/>Mand Mobile是面向金融场景的组件库，基于金融场景的功能会被高优支持。",proposal:"你期望的API是怎样的？",proposalTips:'描述一下你期望这个新功能的 API 是如何使用的，并提供一些代码示例。请用<a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a>格式化你的代码片段。',preview:"预览",create:"创建"},en:{project:"I am opening an issue for",type:"This is a",typeLable0:"Bug Report",typeLable1:"Feature Request",title:"Issue title",version:"version",versionLib:"version",versionBrowser:"Model / OS & Browser Info",versionNode:"Node Version, Package Management Tool",versionNodeTips:"If it's a build related issue",recurring:"Recurring Link",recurringTips:'Please provide a link by forking this links <a href="https://codesandbox.io/s/mand-mobile-quick-start-ckqbz" target="_blank">demo</a> or GitHub repo.',steps:"Steps to reproduce",expected:"What is expected?",actual:"What is actually happening?",extra:"Any additional comments?",rationale:"What problem does this feature solve?",rationaleTips:"Explain your use case, context, and rationale behind this feature request. More importantly, what is the end user experience you are trying to build that led to the need for this feature?<br/>Mand Mobile is a component library for financial scenarios, and features based on financial scenarios are supported by high priority.",proposal:"What does the proposed API look like?",proposalTips:'Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> to format your code blocks.',preview:"Preview",create:"Create"}},A=r("5c96"),W=r.n(A);r("0fae"),r("3cc5"),r("e4cb");a["default"].config.productionTip=!1,a["default"].use(W.a),a["default"].use(n["a"]);var F=new n["a"]({locale:"zh",messages:D});new a["default"]({i18n:F,render:function(e){return e(V)}}).$mount("#app")},7530:function(e,t,r){"use strict";var a=r("ebb8"),n=r.n(a);n.a},"7faf":function(e,t,r){"use strict";var a=r("8fba"),n=r.n(a);n.a},"8fba":function(e,t,r){},ebb8:function(e,t,r){}});
//# sourceMappingURL=app.17fcf208.js.map