(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],p=0,_=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&_.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(_.length)_.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={submitpage:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;n.push([7,"chunk-vendors","chunk-common"]),i()})({"50c0":function(t,e,i){"use strict";(function(t){var s=i("54a1"),a=i("2cd5");e["a"]={data:function(){return{page_setting:{access_token:"",refresh_token:"",language:"",pid:0,is_login:!1,content:"",lang:0,sid:0,result:-1,beforeload:!0},editorOptions:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,tabSize:4,fontSize:18,showPrintMargin:!1},problem:{submitStatistics:{allSubmitTimes:0}},copy:{id:"",ing:!1,type:""},problem_open:!0,edit_open:!0}},methods:{initEditor:function(){i("2099"),i("2b41"),i("79fb")},handleCopy:function(t,e,i,s){a["a"].handleClipboard(t,e),this.copy.id=i,this.copy.type=s,this.copy.ing=!0;var n=this;setTimeout((function(){n.copy.ing=!1}),500)},togglt_problem_button:function(){this.problem_open?this.edit_open&&(this.problem_open=!1):this.problem_open=!0},togglt_edit_button:function(){this.edit_open?this.problem_open&&(this.edit_open=!1):this.edit_open=!0},switch_lang:function(t){this.page_setting.lang=t},submit_code:function(){this.page_setting.result=this.GLOBAL.OJ_RESULT_WAITING,this.page_setting.sid=0,this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/submitcode",{pid:this.page_setting.pid,lang:this.page_setting.lang,code:this.page_setting.content},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(t){var e=t.body.OJ_ERROR_TYPE;e==this.GLOBAL.OJ_ERROR_NO_ERROR?(this.page_setting.sid=t.body.OJ_SOLUTION_ID,this.refresh_result()):e==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&(window.location.href="/loginpage.html")}),(function(){console.log("请求失败处理")}))},test_submit_code:function(){this.page_setting.result=this.GLOBAL.OJ_RESULT_WAITING,this.page_setting.sid=0,this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/test/submitcode",{pid:this.page_setting.pid,lang:this.page_setting.lang,code:this.page_setting.content},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(t){var e=t.body.OJ_ERROR_TYPE;e==this.GLOBAL.OJ_ERROR_NO_ERROR?(this.page_setting.sid=t.body.OJ_SOLUTION_ID,this.page_setting.result=t.body.results):e==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&(window.location.href="/loginpage.html")}),(function(){console.log("请求失败处理")}))},refresh_result:function(){console.log(this.page_setting.result),console.log(this.page_setting.sid),0==this.page_setting.sid||-1!=this.page_setting.result&&this.page_setting.result!=this.GLOBAL.OJ_RESULT_WAITING&&this.page_setting.result!=this.GLOBAL.OJ_RESULT_COMPILING&&this.page_setting.result!=this.GLOBAL.OJ_RESULT_RUNNING_JUDGING&&this.page_setting.result!=this.GLOBAL.OJ_RESULT_JUDGING||this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/result/sid",{sid:this.page_setting.sid},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(t){console.log(t.body);var e=t.body.OJ_ERROR_TYPE;if(e==this.GLOBAL.OJ_ERROR_NO_ERROR){this.page_setting.result=t.body.OJ_RESULT;var i=this;setTimeout((function(){i.refresh_result()}),2e3)}else e==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&(window.location.href="/loginpage.html")}),(function(){console.log("请求失败处理")}))}},components:{editor:i("7c9e"),Loadings:s["a"]},name:"submitpage",created:function(){this.page_setting.access_token=a["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token"),this.page_setting.refresh_token=a["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token"),console.log(this.page_setting.access_token);var e=localStorage.getItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang");null!=e&&(this.page_setting.language=e),this.page_setting.pid=a["a"].getUrlKey("pid"),null==this.page_setting.pid&&(window.location.href="/problemset.html"),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/submitpage",{language:this.page_setting.language,pid:this.page_setting.pid},{emulateJSON:!0,headers:{OJ_ACCESS_TOKEN:this.page_setting.access_token,OJ_REFRESH_TOKEN:this.page_setting.refresh_token}}).then((function(i){var s=i.body.OJ_ERROR_TYPE;console.log(i),s==this.GLOBAL.OJ_ERROR_NO_ERROR?this.page_setting.beforeload=!1:s==this.GLOBAL.OJ_ERROR_NON_EXISTENT_PROBLEM?window.location.href="/problem.html?pid="+encodeURIComponent(this.page_setting.pid):this.GLOBAL.OJ_ERROR_NOT_LOGIN,this.problem=i.body.OJ_PROBLEM,document.title=this.problem.title+" | CTGUACM",e=i.body.OJ_LANGUAGE_TYPE,localStorage.setItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang",e),this.$i18n.locale=e,t(document).ready((function(){t(".double-card").each((function(){var e,i=t(this).children(".card:first").children(".card-body").height(),s=t(this).children(".card:last").children(".card-body").height();e=i>s?i:s,t(this).children(".card:first").children(".card-body").css("height",e+25+"px"),t(this).children(".card:last").children(".card-body").css("height",e+25+"px")}));var e="49%";t("middle-slider").mousedown((function(){t("slide-curtain").fadeIn(0),t("slide-curtain").mousemove((function(i){e=i.pageX<=.9*window.innerWidth&&i.pageX>=.4*window.innerWidth?i.pageX-.0035*window.innerWidth:i.pageX>.9*window.innerWidth?.9*window.innerWidth-.0035*window.innerWidth:.4*window.innerWidth-.0035*window.innerWidth;var s=e/window.innerWidth*100,a=(.9965*window.innerWidth-e)/window.innerWidth*100;t("left-side").css("width",s+"vw"),t("right-side").css("width",a+"vw")}))})),t("slide-curtain").mouseup((function(){t("slide-curtain").fadeOut(0),console.log(e)}))}))}),(function(){console.log("请求失败处理")}))}}}).call(this,i("1157"))},"56f5":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("a026"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{display:t.page_setting.beforeload?"none":""},attrs:{id:"submitpage"}},[i("loadings",{ref:"load"}),i("div",{staticClass:"immersive-container",attrs:{id:"editor-container"}},[i("top-side",{class:{"problem-only":t.problem_open&&!t.edit_open,"editor-only":!t.problem_open&&t.edit_open}},[i("slide-curtain",{staticStyle:{display:"none",height:"658.4px"}}),i("left-side",{staticStyle:{width:"49.82vw"}},[i("div",{class:{"left-side-pre":!0,"container-pro":t.problem_open&&!t.edit_open}},[i("div",{staticClass:"prob-header animated pre-animated cm-performance-optimistic fadeInLeft"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{id:"backBtn",onclick:"window.location.href = '/problem.html?pid="+encodeURIComponent(t.page_setting.pid)+"'"}},[i("i",{staticClass:"fa fa-hand-o-left",attrs:{"aria-hidden":"true"}}),t._v(" Back ")]),i("info-badge",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"AC Rate"}},[i("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(0==t.problem.submitStatistics.allSubmitTimes?"---":(100*t.problem.submitStatistics.acSubmitTimes/t.problem.submitStatistics.allSubmitTimes).toFixed(2)+"%")+" ")]),i("info-badge",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Time Limit"}},[i("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.problem.timeLimit)+"ms ")]),i("info-badge",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Memory Limit"}},[i("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s((t.problem.memoryLimit/1024).toFixed(0))+"KB ")]),t.problem.isSpj?i("info-badge",{staticStyle:{color:"red"}},[t._v(" Special Judge ")]):t._e()],1),i("div",{staticClass:"animated pre-animated cm-performance-optimistic cm-delay fadeInLeft"},[i("fresh-container",[i("div",{staticStyle:{"text-align":"center","font-family":"Consolas","white-space":"pre"}},[i("h3",{},[t._v(t._s(t.problem.problemId+": "+t.problem.title))])]),i("div",{staticStyle:{"margin-top":"1rem","font-size":"17px"}},[i("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}}),i("span",[t._v(" Problem Information")])]),i("div",{staticClass:"problem"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header",staticStyle:{color:"black"}},[i("span",[t._v("Problem Description")])]),i("div",{staticClass:"card-body"},[i("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.problemDescribe)}})])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-header",staticStyle:{color:"black"}},[i("span",[t._v("Input Description")])]),i("div",{staticClass:"card-body"},[i("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.inputDescribe)}})])]),i("div",{staticClass:"card",attrs:{"data-v-8b7d93b8":""}},[i("div",{staticClass:"card-header",staticStyle:{color:"black"}},[i("span",[t._v("Output Description")])]),i("div",{staticClass:"card-body"},[i("span",{staticStyle:{"white-space":"pre"},domProps:{innerHTML:t._s(t.problem.outputDescribe)}})])]),t._l(t.problem.sampleIO,(function(e,s){return[i("div",{key:t.key,staticClass:"double-card"},[i("div",{staticClass:"card",staticStyle:{width:"48%",float:"left"}},[i("div",{staticClass:"card-header",staticStyle:{color:"black"}},[i("span",[t._v(" Sample Input "+t._s(s+1)+" "),t.copy.id==s&&1==t.copy.ing&&0==t.copy.type?i("a",{attrs:{href:"javascript:void(0)"}},[i("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]):i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){return t.handleCopy(e.sample_I,i,s,0)}}},[i("i",{staticClass:"fa fa-files-o",attrs:{"aria-hidden":"true"}})])])]),i("div",{staticClass:"card-body"},[i("span",{staticClass:"sampledata",staticStyle:{"white-space":"pre"},attrs:{id:"sampleinput"+s}},[t._v(t._s(e.sample_I))])])]),i("div",{staticClass:"card",staticStyle:{width:"48%",float:"right"}},[i("div",{staticClass:"card-header",staticStyle:{color:"black"}},[i("span",[t._v(" Sample Output "+t._s(s+1)+" "),t.copy.id==s&&1==t.copy.ing&&1==t.copy.type?i("a",{attrs:{href:"javascript:void(0)"}},[i("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]):i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){return t.handleCopy(e.sample_O,i,s,1)}}},[i("i",{staticClass:"fa fa-files-o",attrs:{"aria-hidden":"true"}})])])]),i("div",{staticClass:"card-body"},[i("span",{staticClass:"sampledata",staticStyle:{"white-space":"pre"},attrs:{id:"sampleoutput"+s}},[t._v(t._s(e.sample_O))])])]),i("div",{staticStyle:{clear:"both"}})])]}))],2)])],1)])]),i("middle-slider"),i("right-side",{staticStyle:{width:"49.82vw","padding-bottom":"10px","padding-top":"10px","padding-right":"5px","background-color":"black"}},[i("editor",{attrs:{theme:"twilight",lang:"c_cpp",height:"100%",options:t.editorOptions},on:{init:t.initEditor},model:{value:t.page_setting.content,callback:function(e){t.$set(t.page_setting,"content",e)},expression:"page_setting.content"}})],1)],1),i("bottom-side",[i("div",[i("button",{class:{btn:!0,"btn-secondary":!0,"cm-active":t.problem_open},attrs:{type:"button",id:"problemBtn"},on:{click:t.togglt_problem_button}},[i("i",{staticClass:"fa fa-book fa-fw",attrs:{"aria-hidden":"true"}})]),i("button",{class:{btn:!0,"btn-secondary":!0,"cm-active":t.edit_open},attrs:{type:"button",id:"editorBtn"},on:{click:t.togglt_edit_button}},[i("i",{staticClass:"fa fa-pencil-square-o fa-fw",attrs:{"aria-hidden":"true"}})]),i("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"historyBtn"}},[i("i",{staticClass:"fa fa-history fa-fw",attrs:{"aria-hidden":"true"}}),t._v(" History ")])]),i("div",[i("div",{staticClass:"btn-group dropup"},[i("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"cur_lang_selector","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t.page_setting.lang==t.GLOBAL.OJ_LANG_C?[i("i",{staticClass:"devicon-c-plain colored"}),t._v(" C ")]:t.page_setting.lang==t.GLOBAL.OJ_LANG_CPLUS?[i("i",{staticClass:"devicon-cplusplus-plain colored"}),t._v(" C++ ")]:t.page_setting.lang==t.GLOBAL.OJ_LANG_CPLUS11?[i("i",{staticClass:"devicon-cplusplus-plain colored"}),t._v(" C++11 ")]:t._e()],2),i("div",{staticClass:"dropdown-menu cm-scrollable-menu"},[i("button",{staticClass:"dropdown-item lang-selector",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_C)}}},[i("i",{staticClass:"devicon-c-plain colored"}),t._v(" C ")]),i("button",{staticClass:"dropdown-item lang-selector",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_CPLUS)}}},[i("i",{staticClass:"devicon-cplusplus-plain colored"}),t._v(" C++ ")]),i("button",{staticClass:"dropdown-item lang-selector",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_CPLUS11)}}},[i("i",{staticClass:"devicon-cplusplus-plain colored"}),t._v(" C++11 ")])]),i("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"submitBtn"},on:{click:t.test_submit_code}},[i("i",{staticClass:"fa fa-paper-plane fa-fw",attrs:{"aria-hidden":"true"}}),t._v(" Submit Code ")]),i("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"resultBtn"}},[-1==t.page_setting.result?i("i",{staticClass:"fa fa-dot-circle-o fa-fw",staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}):t.page_setting.result==t.GLOBAL.OJ_RESULT_WAITING?i("i",{staticClass:"fa fa-spin fa-cog fa-fw ",staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}):t.page_setting.result==t.GLOBAL.OJ_RESULT_COMPILING||t.page_setting.result==t.GLOBAL.OJ_RESULT_RUNNING_JUDGING||t.page_setting.result==t.GLOBAL.OJ_RESULT_JUDGING?i("i",{class:"fa fa-spin fa-cog fa-fw "+t.GLOBAL.OJ_MESSAGE_RESULT_COLOR_CLASS.get(t.page_setting.result),staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}):t.page_setting.result==t.GLOBAL.OJ_RESULT_ACCEPTED?i("i",{class:"fa fa-check fa-fw "+t.GLOBAL.OJ_MESSAGE_RESULT_COLOR_CLASS.get(t.page_setting.result),staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}):t.page_setting.result==t.GLOBAL.OJ_RESULT_COMPILATION_ERROR?i("i",{class:"fa fa-exclamation-triangle fa-fw "+t.GLOBAL.OJ_MESSAGE_RESULT_COLOR_CLASS.get(t.page_setting.result),staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}):t.page_setting.result==t.GLOBAL.OJ_RESULT_SYSTEM_ERROR||t.page_setting.result==t.GLOBAL.OJ_RESULT_WRONG_ANSWER||t.page_setting.result==t.GLOBAL.OJ_RESULT_RUNTIME_ERROR||t.page_setting.result==t.GLOBAL.OJ_RESULT_PRESENTATION_ERROR||t.page_setting.result==t.GLOBAL.OJ_RESULT_TIME_LIMIT_EXCEEDED||t.page_setting.result==t.GLOBAL.OJ_RESULT_MEMORY_LIMIT_EXCEEDED||t.page_setting.result==t.GLOBAL.OJ_RESULT_OUTPUT_LIMIT_EXCEEDED?i("i",{class:"fa fa-times fa-fw "+t.GLOBAL.OJ_MESSAGE_RESULT_COLOR_CLASS.get(t.page_setting.result),staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}}):t._e()])])])])],1)],1)},n=[],o=i("50c0"),r=o["a"],l=(i("b6d5"),i("2877")),c=Object(l["a"])(r,a,n,!1,null,"3d306cdc",null),d=c.exports,p=i("8c4f");s["a"].use(p["a"]);var _=[{path:"/submitpage",name:"submitpage",meta:{title:"client 登录"}}],g=new p["a"]({mode:"history",routes:_}),u=i("a925"),h=i("edad"),f=i("2cd5");i("3495");s["a"].config.productionTip=!1,s["a"].prototype.GLOBAL=h["a"],s["a"].use(u["a"]);var O=new u["a"]({locale:h["a"].OJ_DEFAULT_LANG,messages:f["a"].messages});new s["a"]({i18n:O,router:g,render:function(t){return t(d)}}).$mount("#submitpage")},"5f28":function(t,e,i){},7:function(t,e,i){t.exports=i("56f5")},b6d5:function(t,e,i){"use strict";var s=i("5f28"),a=i.n(s);a.a}});
//# sourceMappingURL=submitpage.0a814912.js.map