(function(t){function e(e){for(var o,n,r=e[0],c=e[1],l=e[2],_=0,d=[];_<r.length;_++)n=r[_],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},a={loginpage:0},i=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([2,"chunk-vendors","chunk-common"]),s()})({"150f":function(t,e,s){"use strict";var o=s("95e5"),a=s.n(o);a.a},2:function(t,e,s){t.exports=s("bce3")},"95e5":function(t,e,s){},bce3:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("a026"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"loginpage"}},[s("nav-bar",{attrs:{isActive:t.page_setting.belong}}),s("div",{staticClass:"container mundb-standard-container"},[s("div",{staticClass:"row justify-content-sm-center"},[s("div",{staticClass:"col-sm-12 col-md-8 col-lg-6"},[t._m(0),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("ul",{staticClass:"nav nav-tabs card-header-tabs nav-justified nav-tabs-material",attrs:{id:"accountTab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{id:"login-tab",href:"javascript:void(0)",role:"tab"}},[t._v(t._s(t.$t("DEFAULT.OJ_MESSAGE_LOGIN")))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link ",attrs:{id:"register-tab",href:"registerpage.html",role:"tab"}},[t._v(t._s(t.$t("DEFAULT.OJ_MESSAGE_REGISTER")))])]),s("div",{staticClass:"nav-tabs-indicator",attrs:{id:"nav-tabs-indicator"}})])]),s("div",{staticClass:"tab-content",attrs:{id:"accountTabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{role:"tabpanel"}},[s("form",{staticClass:"needs-validation",attrs:{id:"login_form"},on:{submit:function(e){return e.preventDefault(),t.loginsubmit()}}},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group bmd-form-group",class:{"is-filled":""!=t.inputs.account,"is-focused":"account"==t.current_focus&&t.has_focus}},[s("label",{staticClass:"bmd-label-floating",attrs:{for:"account"}},[t._v(t._s(t.$t("DEFAULT.OJ_MESSAGE_ACCOUNT")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.account,expression:"inputs.account"}],staticClass:"form-control",attrs:{type:"text",name:"account",id:"account",required:""},domProps:{value:t.inputs.account},on:{focus:function(e){return t.is_focus("account")},blur:function(e){t.is_blur(),t.check_account()},keyup:function(e){return t.check_account()},input:function(e){e.target.composing||t.$set(t.inputs,"account",e.target.value)}}}),s("span",{staticClass:"invalid-feedback",style:{display:"inline-block",float:"right",color:t.error_message.account==t.$t("WARN.OJ_MESSAGE_ACCEPTABLE")?"green":"",visibility:t.has_focus&&"account"==t.current_focus||t.inputs.account.length>0?"":"hidden"}},[s("strong",[t._v(t._s(t.error_message.account))])]),s("div",{staticStyle:{clear:"both"}})]),s("div",{staticClass:"form-group bmd-form-group",class:{"is-filled":""!=t.inputs.password,"is-focused":"password"==t.current_focus&&t.has_focus}},[s("label",{staticClass:"bmd-label-floating",attrs:{for:"password"}},[t._v(t._s(t.$t("DEFAULT.OJ_MESSAGE_PASSWORD")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.password,expression:"inputs.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",autocomplete:"off",required:"required"},domProps:{value:t.inputs.password},on:{focus:function(e){return t.is_focus("password")},blur:function(e){t.is_blur(),t.check_password()},keyup:function(e){return t.check_password()},input:function(e){e.target.composing||t.$set(t.inputs,"password",e.target.value)}}}),s("span",{staticClass:"invalid-feedback",style:{display:"inline-block",float:"right",color:t.error_message.password==t.$t("WARN.OJ_MESSAGE_ACCEPTABLE")?"green":"",visibility:t.has_focus&&"password"==t.current_focus||t.inputs.password.length>0?"":"hidden"}},[s("strong",[t._v(t._s(t.error_message.password))])]),s("div",{staticStyle:{clear:"both"}})]),1==t.is_verify_vcode?[s("div",{staticClass:"form-group bmd-form-group",class:{"is-filled":""!=t.inputs.vcode,"is-focused":"vcode"==t.current_focus&&t.has_focus},staticStyle:{float:"left",width:"65%"}},[s("label",{staticClass:"bmd-label-floating",attrs:{for:"vcode"}},[t._v(t._s(t.$t("DEFAULT.OJ_MESSAGE_VERIFICATION_CODE")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.vcode,expression:"inputs.vcode"}],staticClass:"form-control",attrs:{type:"password",id:"vcode",autocomplete:"off",required:"required"},domProps:{value:t.inputs.vcode},on:{focus:function(e){return t.is_focus("vcode")},blur:function(e){t.is_blur(),t.check_vcode()},keyup:function(e){return t.check_vcode()},input:function(e){e.target.composing||t.$set(t.inputs,"vcode",e.target.value)}}}),s("span",{staticClass:"invalid-feedback",style:{display:"inline-block",float:"right",color:t.error_message.vcode==t.$t("WARN.OJ_MESSAGE_ACCEPTABLE")?"green":"",visibility:t.has_focus&&"vcode"==t.current_focus||t.inputs.vcode.length>0?"":"hidden"}},[s("strong",[t._v(t._s(t.error_message.vcode))])]),s("div",{staticStyle:{clear:"both"}})]),s("div",{staticStyle:{float:"right",width:"30%","margin-top":"21px","margin-right":"10px"}},[s("img",{ref:"vcode_img",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.get_vcode_img()}}})]),s("div",{staticStyle:{clear:"both"}})]:t._e(),s("div",{staticClass:"form-group bmd-form-group"},[s("div",{staticClass:"checkbox"},[s("label",{staticClass:"is-filled",attrs:{for:"remember"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.rememberme,expression:"inputs.rememberme"}],staticClass:"form-control",attrs:{type:"checkbox",name:"remember",id:"remember",value:"rememberme"},domProps:{checked:Array.isArray(t.inputs.rememberme)?t._i(t.inputs.rememberme,"rememberme")>-1:t.inputs.rememberme},on:{change:function(e){var s=t.inputs.rememberme,o=e.target,a=!!o.checked;if(Array.isArray(s)){var i="rememberme",n=t._i(s,i);o.checked?n<0&&t.$set(t.inputs,"rememberme",s.concat([i])):n>-1&&t.$set(t.inputs,"rememberme",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.inputs,"rememberme",a)}}}),t._m(1),s("span",[t._v(t._s(t.$t("DEFAULT.OJ_MESSAGE_REMEMBER_ME")))])])])])],2),s("div",{staticClass:"card-footer text-right"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("DEFAULT.OJ_MESSAGE_FORGET_PASSWORD"))+" ")])]),s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v(" "+t._s(t.$t("DEFAULT.OJ_MESSAGE_LOGIN"))+" ")])])])])])])])])]),1==t.model_open?[s("div",{staticClass:"modal fade",attrs:{id:"login_error",tabindex:"-1",role:"dialog","aria-labelledby":"login_error_title","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("h3",{staticStyle:{color:"#ff3f4c"}},[t._v(" "+t._s(t.$t("WARN.OJ_MESSAGE_UNSUCCESSFULLY_LOGIN"))+" ")]),s("br"),s("p",[t._v(t._s(t.login_result.login_info))])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.close_model()}}},[t._v(" OK ")])])])])])]:t._e(),s("footers")],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center",staticStyle:{"margin-top":"10vh","margin-bottom":"20px"}},[s("h1",{staticStyle:{padding:"20px",display:"inline-block"}},[t._v("CAOJ")]),s("p",[t._v("CAOJ's yet another Online Judge")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"checkbox-decorator"},[s("span",{staticClass:"check"})])}],n=s("fb44"),r=n["a"],c=(s("150f"),s("2877")),l=Object(c["a"])(r,a,i,!1,null,"1266ed56",null),u=l.exports,_=s("54a1"),d=s("8c4f");o["a"].use(d["a"]);var f=[{path:"/loginpage",name:"loginpage",meta:{title:"client 登录"}}],m=new d["a"]({mode:"history",routes:f}),p=s("3ddb"),g=s("edad"),E=s("2cd5");s("3495");o["a"].config.productionTip=!1,o["a"].prototype.GLOBAL=g["a"],o["a"].use(p["a"]);var v=new p["a"]({locale:g["a"].OJ_DEFAULT_LANG,messages:E["a"].messages});new o["a"]({i18n:v,router:m,render:function(t){return t(u)}}).$mount("#loginpage"),new o["a"]({i18n:v,router:m,render:function(t){return t(_["a"])}}).$mount("#loadings")},fb44:function(t,e,s){"use strict";(function(t){s("caad"),s("13d5c"),s("a9e3"),s("d3b7"),s("2532"),s("5cc6"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7");var o=s("2ba1"),a=s("ff6f"),i=s("2cd5"),n=s("2c4b");e["a"]={name:"loginpage",components:{Footers:n["a"],NavBar:a["a"]},data:function(){return{inputs:{account:"",password:"",rememberme:"",vcode:"",csrf:""},current_focus:"",has_focus:!1,page_setting:{access_token:"",refresh_token:"",language:"",belong:"account"},login_result:{is_login:!1,has_error:!1,login_info:""},error_message:{account:"　",password:"　",vcode:"　"},is_verify_vcode:!1,model_open:!1}},methods:{submit_img:function(){this.$refs.imgs.click()},handleSuccess:function(t,e,s){this.$success("上传成功")},handleError:function(){this.$error("上传失败,请重新上传图片!")},handleBeforeUpload:function(t){var e=t.type.includes("image");e||this.$message.error("上传文件类型必须是图片!");var s=t.size/1024/1024<2;return s||this.$message.error("上传图片大小不能超过 2MB!"),e&&s},handleProgress:function(t,e,s){this.loading=!0},test:function(){var t=new FormData;t.append("file",this.$refs.imgs.files[0]),console.log(t.get("file")),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/updata",t,{contentType:!1,processData:!1}).then((function(t){}),(function(){console.log("请求失败处理")}))},loginsubmit:function(){var e=this;this.model_open=!1,this.login_result.login_info="",this.login_result.is_login=!0,this.login_result.has_error=!1,this.inputs.password=Object(o["a"])(this.inputs.password),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/account/login",this.inputs,{emulateJSON:!0}).then((function(s){e.login_result.is_login=!1;var o=s.body.OJ_ERROR_TYPE;if(o!=e.GLOBAL.OJ_ERROR_NO_ERROR){e.login_result.has_error=!0;var a=Number(s.body.OJ_LOGIN_ERROR_TIMES);a>=e.GLOBAL.OJ_DEFAULT_NEED_VCODE_TIMES&&e.get_vcode_img(),e.inputs.password=""}o==e.GLOBAL.OJ_ERROR_IP_BE_BANNED?e.login_result.login_info=e.$t("WARN.OJ_MESSAGE_IP_BE_BANNED"):o==e.GLOBAL.OJ_ERROR_WRONG_VCODE?(e.inputs.vcode="",t("#vcode").focus(),e.error_message.vcode=e.$t("WARN.OJ_MESSAGE_WRONG_VCODE"),e.get_vcode_img()):o==e.GLOBAL.OJ_ERROR_ACCOUNT_BE_BANNED?e.login_result.login_info=e.$t("WARN.OJ_MESSAGE_ACCOUNT_BE_BANNED"):o==e.GLOBAL.OJ_ERROR_NON_EXISTENT_ACCOUNT?(t("#account").focus(),e.error_message.account=e.$t("WARN.OJ_MESSAGE_NON_EXISTENT_ACCOUNT"),document.getElementById("account").setCustomValidity(e.$t("WARN.OJ_MESSAGE_NON_EXISTENT_ACCOUNT"))):o==e.GLOBAL.OJ_ERROR_REPETED_ACCOUNT?(t("#account").focus(),e.error_message.account=e.$t("WARN.OJ_MESSAGE_REPETED_ACCOUNT"),document.getElementById("account").setCustomValidity(e.$t("WARN.OJ_MESSAGE_REPETED_ACCOUNT"))):o==e.GLOBAL.OJ_ERROR_ACCOUNT_BE_BANNED?e.login_result.login_info=e.$t("WARN.OJ_MESSAGE_ACCOUNT_BE_BANNED"):o==e.GLOBAL.OJ_ERROR_WRONG_PASSWORD?(t("#password").focus(),e.error_message.password=e.$t("WARN.OJ_MESSAGE_WRONG_PASSWORD"),document.getElementById("password").setCustomValidity(e.$t("WARN.OJ_MESSAGE_WRONG_PASSWORD"))):o!=e.GLOBAL.OJ_ERROR_NO_ERROR&&(e.login_result.login_info=e.$t("WARN.OJ_MESSAGE_BACK_JUMP")),e.login_result.login_info.length>0&&(e.model_open=!0,setTimeout((function(){t("#login_error").modal({backdrop:"static"})}),100));var n=s.body.OJ_USER_INFO.saved;if(0==e.login_result.has_error){var r=s.body.OJ_ACCESS_TOKEN,c=s.body.OJ_REFRESH_TOKEN;n?(i["a"].setCookieWithTime(e.GLOBAL.OJ_DEFAULT_NAME+"access_token",r,7),i["a"].setCookieWithTime(e.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",c,7)):(i["a"].setCookie(e.GLOBAL.OJ_DEFAULT_NAME+"access_token",r),i["a"].setCookie(e.GLOBAL.OJ_DEFAULT_NAME+"refresh_token",c)),window.history.go(-1)}}),(function(t){console.log(t)}))},is_focus:function(t){this.current_focus=t,this.has_focus=!0},is_blur:function(){this.has_focus=!1},check_account:function(){var t=document.getElementById("account");this.error_message.account="　",t.setCustomValidity("")},check_password:function(){var t=document.getElementById("password");this.error_message.password="　",t.setCustomValidity("")},check_vcode:function(){var t=document.getElementById("vcode");this.error_message.vcode="　",t.setCustomValidity("")},get_vcode_img:function(){this.is_verify_vcode=!0,this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/vcode",{},{responseType:"arraybuffer"}).then((function(t){var e="data:image/png;base64,"+btoa(new Uint8Array(t.data).reduce((function(t,e){return t+String.fromCharCode(e)}),""));this.$refs.vcode_img.src=e}),(function(){console.log("请求失败处理")}))},close_model:function(){var t=this;setTimeout((function(){t.model_open=!1,t.login_result.login_info=""}),300)}},created:function(){this.is_verify_vcode=!1,this.page_setting.access_token=i["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"access_token"),this.page_setting.refresh_token=i["a"].getCookie(this.GLOBAL.OJ_DEFAULT_NAME+"refresh_token");var t=localStorage.getItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang");null!=t&&(this.page_setting.language=t),this.$http.post(this.GLOBAL.OJ_DEFAULT_BACK_SERVE+"/loginpage",this.page_setting,{emulateJSON:!0}).then((function(e){var s=e.body.OJ_ERROR_TYPE;if(s!=this.GLOBAL.OJ_ERROR_HAS_LOGIN){i["a"].init_account_controller(this.GLOBAL.OJ_GROUP_NORMAL_VISITOR),this.inputs.csrf=e.body.OJ_LOGIN_CSRF,t=e.body.OJ_LANGUAGE_TYPE,localStorage.setItem(this.GLOBAL.OJ_DEFAULT_NAME+"lang",t),this.$i18n.locale=t;var o=Number(e.body.OJ_LOGIN_ERROR_TIMES);o>=this.GLOBAL.OJ_DEFAULT_NEED_VCODE_TIMES&&this.get_vcode_img()}else window.history.go(-1)}),(function(){console.log("请求失败处理")}))}}}).call(this,s("1157"))}});
//# sourceMappingURL=loginpage.263f06e4.js.map