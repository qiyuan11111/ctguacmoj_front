(function(t){function e(e){for(var s,a,l=e[0],o=e[1],_=e[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,_||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={status:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var _=0;_<l.length;_++)e(l[_]);var c=o;r.push([7,"chunk-vendors","chunk-common"]),n()})({"0d42":function(t,e,n){},"5fb3":function(t,e,n){"use strict";var s=n("0d42"),i=n.n(s);i.a},7:function(t,e,n){t.exports=n("ba08")},ba08:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"status"}},[n("loadings",{ref:"load"}),n("navbar",{attrs:{isActive:t.page_belong}}),n("div",{staticClass:"container mundb-standard-container"},[n("paper-card",[n("div",[n("div",{staticClass:"no-scrollbar table-responsive"},[n("table",{staticClass:"table",attrs:{id:"result-tab"}},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v(" RunID ")]),n("th",{attrs:{scope:"col"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search.user_info,expression:"search.user_info"}],staticClass:"form-control search-query",staticStyle:{"text-align":"center"},attrs:{type:"text",name:"ufo",placeholder:"User"},domProps:{value:t.search.user_info},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.choose_user_info(e)},input:function(e){e.target.composing||t.$set(t.search,"user_info",e.target.value)}}})]),n("th",{attrs:{scope:"col"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search.problem_id,expression:"search.problem_id"}],staticClass:"form-control search-query",staticStyle:{"text-align":"center"},attrs:{type:"text",name:"pid",placeholder:"ID"},domProps:{value:t.search.problem_id},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.choose_problem_id(e)},input:function(e){e.target.composing||t.$set(t.search,"problem_id",e.target.value)}}})]),n("th",{attrs:{scope:"col"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search.result,expression:"search.result"}],class:["form-control","search-query",t.trans_result_color(t.page_setting.result)],staticStyle:{"text-align":"center","background-color":"white"},attrs:{type:"text",name:"res",placeholder:"Result",readonly:"readonly",id:"dropdownMenuResult"},domProps:{value:t.search.result},on:{focus:function(e){return t.switch_result_pannel(1,!0)},blur:function(e){return t.switch_result_pannel(1,!1)},input:function(e){e.target.composing||t.$set(t.search,"result",e.target.value)}}}),n("div",{staticClass:"pannel result-pannel",style:{width:"148.8px",display:t.result_pannel.a||t.result_pannel.b?"":"none"},on:{mouseover:function(e){return t.switch_result_pannel(0,!0)},mouseleave:function(e){return t.switch_result_pannel(0,!1)}}},[n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-grey-text",on:{click:function(e){return t.switch_result(null)}}},[t._v("All ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-green-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_ACCEPTED)}}},[t._v("Accepted ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-orange-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_COMPILING)}}},[t._v("Compiling ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-orange-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_COMPILE_ERROR)}}},[t._v("Compile Error ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-red-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_WRONG_ANSWER)}}},[t._v("Wrong Answer ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-red-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_PRESENTATION_ERROR)}}},[t._v("Presentation Error ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-red-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_RUNTIME_ERROR)}}},[t._v("Runtime Error ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-deep-purple-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_TIME_LIMIT_EXCESS)}}},[t._v("Time Limit Exceed ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-deep-purple-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_MEMORY_LIMIT_EXCESS)}}},[t._v("Memory Limit Exceed ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item wemd-deep-purple-text",on:{click:function(e){return t.switch_result(t.GLOBAL.OJ_RESULT_OUTPUT_LIMIT_EXCESS)}}},[t._v("Output Limit Exceed ")]),n("div",{staticClass:"dropdown-divider"})])]),n("th",{attrs:{scope:"col"}},[n("div",[n("input",{staticClass:"form-control ",staticStyle:{width:"100%","background-color":"white","text-align":"center"},attrs:{placeholder:"Lang",type:"text",name:"language",readonly:"readonly"},on:{focus:function(e){return t.switch_lang_pannel(1,!0)},blur:function(e){return t.switch_lang_pannel(1,!1)}}}),n("div",{staticClass:"pannel lang-pannel",style:{width:"148.8px",display:t.lang_pannel.a||t.lang_pannel.b?"":"none"},on:{mouseover:function(e){return t.switch_lang_pannel(0,!0)},mouseleave:function(e){return t.switch_lang_pannel(0,!1)}}},[n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(null)}}},[t._v("All ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_C)}}},[t._v("C ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_CPLUS)}}},[t._v("C++ ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_PASCAL)}}},[t._v("Pascal ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_JAVA)}}},[t._v("Java ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_RUBY)}}},[t._v(" Ruby ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_BASH)}}},[t._v("Bash ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_PYTHON)}}},[t._v("Python ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_PHP)}}},[t._v("PHP ")]),n("div",{staticClass:"dropdown-divider"}),n("div",{staticClass:"pannel-item",on:{click:function(e){return t.switch_lang(t.GLOBAL.OJ_LANG_PERL)}}},[t._v("Perl ")]),n("div",{staticClass:"dropdown-divider"})])])]),n("th",{attrs:{scope:"col"}},[t._v(" Memory ")]),n("th",{attrs:{scope:"col"}},[t._v(" Time ")]),n("th",{attrs:{scope:"col"}},[t._v(" Code Length ")]),n("th",{attrs:{scope:"col"}},[t._v(" Submit Time ")])])]),n("tbody",t._l(t.solution,(function(e){return n("tr",{key:t.key},[n("td",[t._v(t._s(e.solutionId))]),n("td",[t._v(t._s(e.nick))]),n("td",[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"/problem.html?pid="+e.problemId}},[t._v("CAOJ"+t._s(e.problemId))])]),n("td",{class:[t.trans_result_color(e.result)]},[t._v(" "+t._s(t.trans_result_string(e.result))+" ")]),n("td",[t._v(t._s(t.trans_lang_string(e.language)))]),n("td",[t._v(t._s(-1==e.memory?"---":e.memory))]),n("td",[t._v(t._s(-1==e.time?"---":e.time))]),n("td",[t._v(t._s(e.codeLength))]),n("td",[t._v(t._s(t.diff_time(e.createTime)))])])})),0)])])])])],1),n("footers")],1)},r=[],a=(n("a9e3"),n("ac1f"),n("5319"),n("841c"),n("ff6f")),l=n("2c4b"),o=n("54a1"),_=n("2cd5"),c={name:"status",components:{navbar:a["a"],Loadings:o["a"],Footers:l["a"]},data:function(){return{page_belong:"status",page_setting:{access_token:"",refresh_token:"",language:"",page:null,result:null,user_info:null,problem_id:null,lang:null},search:{user_info:null,problem_id:null,result:null,lang:null},result_pannel:{a:!1,b:!1},lang_pannel:{a:!1,b:!1},solution:""}},methods:{diff_time:function(t){return t=_["a"].diff_time(t),console.log(t),t.year>=1?1==t.year?t.year+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_YEAR.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.year+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_YEAR.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.month>=1?1==t.month?t.month+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_MONTH.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.month+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_MONTH.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.week>=1?1==t.week?t.week+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_WEEK.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.week+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_WEEK.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.day>=1?1==t.day?t.day+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_DAY.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.day+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_DAY.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.hour>=1?1==t.hour?t.hour+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_HOUR.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.hour+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_HOUR.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.minute>=1?1==t.minute?t.minute+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_MINUTE.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.minute+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_MINUTE.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.second<=1?t.second+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_SECOND.ONE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO"):t.second+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_SECOND.MORE")+this.$t("WARN.OJ_MESSAGE_TIME_AGO.OJ_AGO")},getUrlKey:function(t){return _["a"].getUrlKey(t)},addUrlParm:function(t,e){null!=_["a"].getUrlKey("result")&&(this.page_setting.result=_["a"].getUrlKey("result")),null!=_["a"].getUrlKey("uinfo")&&(this.page_setting.user_info=_["a"].getUrlKey("uinfo")),null!=_["a"].getUrlKey("pid")&&(this.page_setting.problem_id=_["a"].getUrlKey("pid")),null!=_["a"].getUrlKey("lang")&&(this.page_setting.lang=_["a"].getUrlKey("lang")),"result"==t&&(this.page_setting.result=null!=e?e:null),"uinfo"==t&&(this.page_setting.user_info=null!=e?e:null),"pid"==t&&(this.page_setting.problem_id=null!=e?e:null),"lang"==t&&(this.page_setting.lang=null!=e?e:null)},getUrlString:function(){var t="";return null!=this.page_setting.result&&(t+="&result="+encodeURIComponent(this.page_setting.result)),null!=this.page_setting.user_info&&(t+="&uinfo="+encodeURIComponent(this.page_setting.user_info)),null!=this.page_setting.problem_id&&(t+="&pid="+encodeURIComponent(this.page_setting.problem_id)),null!=this.page_setting.lang&&(t+="&lang="+encodeURIComponent(this.page_setting.lang)),t.replace("&","?")},choose_user_info:function(){this.search.user_info=""==this.search.user_info?null:this.search.user_info,this.addUrlParm("uinfo",this.search.user_info);var t=this.GLOBAL.OJ_DEFAULT_FRONT_SERVE+"/status.html"+this.getUrlString();window.location.href=t},choose_problem_id:function(){this.search.problem_id=""==this.search.problem_id?null:this.search.problem_id,this.addUrlParm("pid",this.search.problem_id);var t=this.GLOBAL.OJ_DEFAULT_FRONT_SERVE+"/status.html"+this.getUrlString();window.location.href=t},switch_result_pannel:function(t,e){1==t?this.result_pannel.a=e:this.result_pannel.b=e},switch_result:function(t){this.addUrlParm("result",t);var e=this.GLOBAL.OJ_DEFAULT_FRONT_SERVE+"/status.html"+this.getUrlString();window.location.href=e},switch_lang_pannel:function(t,e){1==t?this.lang_pannel.a=e:this.lang_pannel.b=e},switch_lang:function(t){this.addUrlParm("lang",t);var e=this.GLOBAL.OJ_DEFAULT_FRONT_SERVE+"/status.html"+this.getUrlString();window.location.href=e},trans_result_string:function(t){if(null==t)return"";var e=this.GLOBAL.OJ_MESSAGE_RESULT_STRING.get(t);return this.$t("ANS."+e)},trans_result_color:function(t){if(null==t)return"";var e=this.GLOBAL.OJ_MESSAGE_RESULT_COLOR_CLASS.get(t);return e},trans_lang_string:function(t){if(null==t)return"";var e=this.GLOBAL.OJ_MESSAGE_LANG_STRING.get(t);return this.$t("LANG."+e)},test:function(){alert("555")}},created:function(){this.page_setting.access_token=_["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token"),this.page_setting.refresh_token=_["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token"),console.log(this.page_setting.access_token);var t=localStorage.getItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang");null!=t&&(this.page_setting.language=t),this.page_setting.result=null==_["a"].getUrlKey("result")?null:Number(_["a"].getUrlKey("result")),this.search.result=this.trans_result_string(this.page_setting.result),this.page_setting.user_info=this.search.user_info=_["a"].getUrlKey("uinfo"),this.page_setting.problem_id=this.search.problem_id=null==_["a"].getUrlKey("pid")?null:Number(_["a"].getUrlKey("pid")),this.page_setting.lang=null==_["a"].getUrlKey("lang")?null:Number(_["a"].getUrlKey("lang")),this.search.lang=this.trans_lang_string(this.page_setting.lang),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/status",this.page_setting,{emulateJSON:!0}).then((function(e){var n=e.body.OJ_ERROR_TYPE;if(this.solution=e.body.OJ_SOLUTION,console.log(this.solution),n==this.GLOBAL.OJ_ERROR_NO_ERROR){var s=e.body.OJ_USER_INFO.saved,i=e.body.OJ_USER_INFO.access_token,r=e.body.OJ_USER_INFO.refresh_token;e.body.OJ_USER_INFO.permissions.admin||e.body.OJ_USER_INFO.permissions.superAdmin?_["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_ADMIN):_["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_USER),s?(_["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",i,7),_["a"].setCookieWithTime(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",r,7)):(_["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token",i),_["a"].setCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",r))}else n==this.GLOBAL.OJ_ERROR_NOT_LOGIN&&_["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_VISITOR);t=e.body.OJ_LANGUAGE_TYPE,localStorage.setItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang",t),this.$i18n.locale=t}),(function(){console.log("请求失败处理")}))}},u=c,d=(n("5fb3"),n("2877")),O=Object(d["a"])(u,i,r,!1,null,"1266377f",null),h=O.exports,p=n("8c4f");s["a"].use(p["a"]);var A=[{path:"/status",name:"status",meta:{title:"client 登录"}}],g=new p["a"]({mode:"history",routes:A}),E=n("3ddb"),v=n("edad");n("3495");s["a"].config.productionTip=!1,s["a"].prototype.GLOBAL=v["a"],s["a"].use(E["a"]);var f=new E["a"]({locale:v["a"].OJ_DEFAULT_LANG,messages:_["a"].messages});new s["a"]({i18n:f,router:g,render:function(t){return t(h)}}).$mount("#status")}});
//# sourceMappingURL=status.b60b9d09.js.map