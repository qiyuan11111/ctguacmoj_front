(function(t){function a(a){for(var i,n,r=a[0],c=a[1],d=a[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(a);while(u.length)u.shift()();return o.push.apply(o,d||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],i=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(i=!1)}i&&(o.splice(a--,1),t=n(n.s=e[0]))}return t}var i={},s={submitpage:0},o=[];function n(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=i,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)n.d(e,i,function(a){return t[a]}.bind(null,i));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var d=0;d<r.length;d++)a(r[d]);var l=c;o.push([6,"chunk-vendors","chunk-common"]),e()})({"50c0":function(t,a,e){"use strict";(function(t){var i=e("54a1"),s=e("2cd5");a["a"]={data:function(){return{page_setting:{access_token:"",refresh_token:"",language:"",pid:0,is_login:!1},editorOptions:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,tabSize:4,fontSize:18,showPrintMargin:!1},problem:{submitStatistics:{allSubmitTimes:0}},copy:{id:"",ing:!1,type:""},problem_open:!0,edit_open:!0}},methods:{initEditor:function(){e("93c6"),e("d1f7"),e("5e31")},handleCopy:function(t,a,e,i){s["a"].handleClipboard(t,a),this.copy.id=e,this.copy.type=i,this.copy.ing=!0;var o=this;setTimeout((function(){o.copy.ing=!1}),500)},togglt_problem_button:function(){this.problem_open?this.edit_open&&(this.problem_open=!1):this.problem_open=!0},togglt_edit_button:function(){this.edit_open?this.problem_open&&(this.edit_open=!1):this.edit_open=!0}},components:{editor:e("50bc"),Loadings:i["a"]},name:"submitpage",created:function(){this.page_setting.access_token=s["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token"),this.page_setting.refresh_token=s["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token"),console.log(this.page_setting.access_token);var a=localStorage.getItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang");null!=a&&(this.page_setting.language=a),this.page_setting.pid=s["a"].getUrlKey("pid"),null==this.page_setting.pid&&(window.location.href=this.GLOBAL.OJ_DEFAULT_FRONT_SERVE+"/problemset.html"),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/submitpage",this.page_setting,{emulateJSON:!0}).then((function(e){var i=e.body.OJ_ERROR_TYPE;if(i==this.GLOBAL.OJ_ERROR_NO_ERROR){var o=e.body.OJ_USER_INFO.saved,n=e.body.OJ_USER_INFO.access_token,r=e.body.OJ_USER_INFO.refresh_token;e.body.OJ_USER_INFO.permissions.admin||e.body.OJ_USER_INFO.permissions.superAdmin?s["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_ADMIN):s["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_USER),o?(s["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",n,7),s["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",r,7)):(s["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",n),s["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",r))}else i==this.GLOBAL.OJ_ERROR_NON_EXISTENT_PROBLEM?window.location.href="/problem.html?pid="+encodeURIComponent(this.page_setting.pid):i==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&s["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_VISITOR);this.problem=e.body.OJ_PROBLEM,document.title=this.problem.title+" | CTGUACM",a=e.body.OJ_LANGUAGE_TYPE,localStorage.setItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang",a),this.$i18n.locale=a,t(document).ready((function(){t(".double-card").each((function(){var a,e=t(this).children(".card:first").children(".card-body").height(),i=t(this).children(".card:last").children(".card-body").height();a=e>i?e:i,t(this).children(".card:first").children(".card-body").css("height",a+25+"px"),t(this).children(".card:last").children(".card-body").css("height",a+25+"px")}));var a="49%";t("middle-slider").mousedown((function(){t("slide-curtain").fadeIn(0),t("slide-curtain").mousemove((function(e){a=e.pageX<=.9*window.innerWidth&&e.pageX>=.4*window.innerWidth?e.pageX-.0035*window.innerWidth:e.pageX>.9*window.innerWidth?.9*window.innerWidth-.0035*window.innerWidth:.4*window.innerWidth-.0035*window.innerWidth;var i=a/window.innerWidth*100,s=(.9965*window.innerWidth-a)/window.innerWidth*100;t("left-side").css("width",i+"vw"),t("right-side").css("width",s+"vw")}))})),t("slide-curtain").mouseup((function(){t("slide-curtain").fadeOut(0),console.log(a)}))}))}),(function(){console.log("请求失败处理")}))}}}).call(this,e("1157"))},"56f5":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("a026"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"submitpage"}},[e("loadings",{ref:"load"}),e("div",{staticClass:"immersive-container",attrs:{id:"editor-container"}},[e("top-side",{class:{"problem-only":t.problem_open&&!t.edit_open,"editor-only":!t.problem_open&&t.edit_open}},[e("slide-curtain",{staticStyle:{display:"none",height:"658.4px"}}),e("left-side",{staticStyle:{width:"49.82vw"}},[e("div",{class:{"left-side-pre":!0,"container-pro":t.problem_open&&!t.edit_open}},[e("div",{staticClass:"prob-header animated pre-animated cm-performance-optimistic fadeInLeft"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{id:"backBtn",onclick:"window.location.href = '/problem.html?pid="+encodeURIComponent(t.page_setting.pid)+"'"}},[e("i",{staticClass:"fa fa-hand-o-left",attrs:{"aria-hidden":"true"}}),t._v(" Back ")]),e("info-badge",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"AC Rate"}},[e("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(0==t.problem.submitStatistics.allSubmitTimes?"---":(100*t.problem.submitStatistics.acSubmitTimes/t.problem.submitStatistics.allSubmitTimes).toFixed(2)+"%")+" ")]),e("info-badge",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Time Limit"}},[e("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.problem.timeLimit)+"ms ")]),e("info-badge",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Memory Limit"}},[e("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.problem.memoryLimit)+"MB ")]),t.problem.isSpj?e("info-badge",{staticStyle:{color:"red"}},[t._v(" Special Judge ")]):t._e()],1),e("div",{staticClass:"animated pre-animated cm-performance-optimistic cm-delay fadeInLeft"},[e("fresh-container",[e("div",{staticStyle:{"text-align":"center","font-family":"Consolas","white-space":"pre"}},[e("h3",{},[t._v(t._s(t.problem.problemId+": "+t.problem.title))])]),e("div",{staticStyle:{"margin-top":"1rem","font-size":"17px"}},[e("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}}),e("span",[t._v(" Problem Information")])]),e("div",{staticClass:"problem"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header",staticStyle:{color:"black"}},[e("span",[t._v("Problem Description")])]),e("div",{staticClass:"card-body"},[e("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.problemDescribe)}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header",staticStyle:{color:"black"}},[e("span",[t._v("Input Description")])]),e("div",{staticClass:"card-body"},[e("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.inputDescribe)}})])]),e("div",{staticClass:"card",attrs:{"data-v-8b7d93b8":""}},[e("div",{staticClass:"card-header",staticStyle:{color:"black"}},[e("span",[t._v("Output Description")])]),e("div",{staticClass:"card-body"},[e("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.outputDescribe)}})])]),t._l(t.problem.sampleIO,(function(a,i){return[e("div",{key:t.key,staticClass:"double-card"},[e("div",{staticClass:"card",staticStyle:{width:"48%",float:"left"}},[e("div",{staticClass:"card-header",staticStyle:{color:"black"}},[e("span",[t._v(" Sample Input "+t._s(i+1)+" "),t.copy.id==i&&1==t.copy.ing&&0==t.copy.type?e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]):e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleCopy(a.sample_I,e,i,0)}}},[e("i",{staticClass:"fa fa-files-o",attrs:{"aria-hidden":"true"}})])])]),e("div",{staticClass:"card-body"},[e("span",{staticClass:"sampledata",staticStyle:{"white-space":"pre"},attrs:{id:"sampleinput"+i}},[t._v(t._s(a.sample_I))])])]),e("div",{staticClass:"card",staticStyle:{width:"48%",float:"right"}},[e("div",{staticClass:"card-header",staticStyle:{color:"black"}},[e("span",[t._v(" Sample Output "+t._s(i+1)+" "),t.copy.id==i&&1==t.copy.ing&&1==t.copy.type?e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]):e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleCopy(a.sample_O,e,i,1)}}},[e("i",{staticClass:"fa fa-files-o",attrs:{"aria-hidden":"true"}})])])]),e("div",{staticClass:"card-body"},[e("span",{staticClass:"sampledata",staticStyle:{"white-space":"pre"},attrs:{id:"sampleoutput"+i}},[t._v(t._s(a.sample_O))])])]),e("div",{staticStyle:{clear:"both"}})])]}))],2)])],1)])]),e("middle-slider"),e("right-side",{staticStyle:{width:"49.82vw"}},[e("editor",{attrs:{theme:"twilight",lang:"c_cpp",height:"100%",options:t.editorOptions},on:{init:t.initEditor},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1)],1),e("bottom-side",[e("div",[e("button",{class:{btn:!0,"btn-secondary":!0,"cm-active":t.problem_open},attrs:{type:"button",id:"problemBtn"},on:{click:t.togglt_problem_button}},[e("i",{staticClass:"fa fa-book fa-fw",attrs:{"aria-hidden":"true"}})]),e("button",{class:{btn:!0,"btn-secondary":!0,"cm-active":t.edit_open},attrs:{type:"button",id:"editorBtn"},on:{click:t.togglt_edit_button}},[e("i",{staticClass:"fa fa-pencil-square-o fa-fw",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"historyBtn"}},[e("i",{staticClass:"fa fa-history fa-fw",attrs:{"aria-hidden":"true"}}),t._v(" History ")])]),e("div",[e("div",{staticClass:"btn-group dropup"},[e("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"cur_lang_selector","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"devicon-cplusplus-plain colored"}),t._v(" C++ "),e("div",{staticClass:"ripple-container"})]),e("div",{staticClass:"dropdown-menu cm-scrollable-menu"},[e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"1","data-comp":"c","data-lang":"c","data-lcode":"c"}},[e("i",{staticClass:"devicon-c-plain colored"}),t._v(" C ")]),e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"2","data-comp":"c","data-lang":"cpp","data-lcode":"cpp"}},[e("i",{staticClass:"devicon-cplusplus-plain colored"}),t._v(" C++ ")]),e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"3","data-comp":"java","data-lang":"java","data-lcode":"java"}},[e("i",{staticClass:"devicon-java-plain colored"}),t._v(" Java ")]),e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"32","data-comp":"python","data-lang":"python","data-lcode":"py2"}},[e("i",{staticClass:"devicon-python-plain colored"}),t._v(" Python 2.7 ")]),e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"33","data-comp":"python","data-lang":"python","data-lcode":"py3"}},[e("i",{staticClass:"devicon-python-plain colored"}),t._v(" Python 3.7 ")]),e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"121","data-comp":"php","data-lang":"php","data-lcode":"php7"}},[e("i",{staticClass:"devicon-php-plain colored"}),t._v(" PHP 7.3 ")]),e("button",{staticClass:"dropdown-item lang-selector",attrs:{"data-coid":"122","data-comp":"javascript","data-lang":"javascript","data-lcode":"jsc"}},[e("i",{staticClass:"devicon-javascript-plain colored"}),t._v(" Javascript ")])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"submitBtn"}},[e("i",{staticClass:"fa fa-paper-plane fa-fw",attrs:{"aria-hidden":"true"}}),t._v(" Submit Code ")])])])])],1)],1)},o=[],n=e("50c0"),r=n["a"],c=(e("cc2c"),e("2877")),d=Object(c["a"])(r,s,o,!1,null,"1f3fe1a8",null),l=d.exports,p=e("8c4f");i["a"].use(p["a"]);var u=[{path:"/submitpage",name:"submitpage",meta:{title:"client 登录"}}],h=new p["a"]({mode:"history",routes:u}),m=e("3ddb"),_=e("edad"),b=e("2cd5");e("3495");i["a"].config.productionTip=!1,i["a"].prototype.GLOBAL=_["a"],i["a"].use(m["a"]);var f=new m["a"]({locale:_["a"].OJ_DEFAULT_LANG,messages:b["a"].messages});new i["a"]({i18n:f,router:h,render:function(t){return t(l)}}).$mount("#submitpage")},6:function(t,a,e){t.exports=e("56f5")},cc2c:function(t,a,e){"use strict";var i=e("f35e"),s=e.n(i);s.a},f35e:function(t,a,e){}});
//# sourceMappingURL=submitpage.993e852b.js.map