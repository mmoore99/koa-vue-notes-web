webpackJsonp([10],{11:function(t,e,n){"use strict";var a=n(5),s=n(133);a.a.use(s.a);var o=function(t){return n.e(5).then(function(){var e=[n(142)];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(2).then(function(){var e=[n(145)];t.apply(null,e)}.bind(this)).catch(n.oe)},i=function(t){return n.e(0).then(function(){var e=[n(147)];t.apply(null,e)}.bind(this)).catch(n.oe)},c=function(t){return n.e(3).then(function(){var e=[n(144)];t.apply(null,e)}.bind(this)).catch(n.oe)},u=function(t){return n.e(1).then(function(){var e=[n(146)];t.apply(null,e)}.bind(this)).catch(n.oe)},l=function(t){return n.e(8).then(function(){var e=[n(139)];t.apply(null,e)}.bind(this)).catch(n.oe)},f=function(t){return n.e(7).then(function(){var e=[n(140)];t.apply(null,e)}.bind(this)).catch(n.oe)},p=function(t){return n.e(6).then(function(){var e=[n(141)];t.apply(null,e)}.bind(this)).catch(n.oe)},m=function(t){return n.e(4).then(function(){var e=[n(143)];t.apply(null,e)}.bind(this)).catch(n.oe)};a.a.component("navbar",n(129)),a.a.component("footer-main",n(128));var h=new s.a({mode:"history",routes:[{path:"*",component:m,name:"notFound",meta:{title:"Not Found"}},{path:"/",component:o,name:"home",meta:{title:"Home"}},{path:"/user/login",component:r,name:"login",meta:{title:"Login"}},{path:"/user/signup",component:i,name:"signup",meta:{title:"Signup"}},{path:"/user/forgot",component:c,name:"forgot",meta:{title:"Forgot"}},{path:"/user/reset",component:u,name:"reset",meta:{title:"Reset"}},{path:"/account",component:l,name:"account",meta:{title:"Account",requiresAuth:!0}},{path:"/createNote",component:f,name:"createNote",meta:{title:"Create Note",requiresAuth:!0}},{path:"/editNote",component:p,name:"editNote",meta:{title:"Edit Note",requiresAuth:!0}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});h.beforeEach(function(t,e,n){document.title=t.meta.title;var a=localStorage.getItem("accessToken")?localStorage.getItem("accessToken"):null,s=localStorage.getItem("refreshToken")?localStorage.getItem("refreshToken"):null;a&&h.app.$options.store.dispatch("user/setUserAndTokens",{accessToken:a,refreshToken:s}),t.meta.requiresAuth&&!h.app.$options.store.getters["user/user"]&&n({name:"home"}),n()}),e.a=h},12:function(t,e,n){"use strict";var a=n(5),s=n(3),o=n(84),r=n(83);a.a.use(s.b);var i=new s.b.Store({modules:{user:o.a,note:r.a}});e.a=i},122:function(t,e){},123:function(t,e){},124:function(t,e){},128:function(t,e,n){function a(t){n(124)}var s=n(19)(n(80),n(132),a,"data-v-8a0f1b94",null);t.exports=s.exports},129:function(t,e,n){function a(t){n(123)}var s=n(19)(n(81),n(131),a,"data-v-59aa962b",null);t.exports=s.exports},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),t._v(" "),n("keep-alive",{attrs:{include:"account"}},[n("router-view")],1),t._v(" "),n("div",{staticClass:"sticky-footer-spacing"}),t._v(" "),n("footer-main")],1)},staticRenderFns:[]}},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-section"},[n("div",{staticClass:"container container-nav"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"},exact:""}},[t._v("Koa-Vue-Notes")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[t.user?t._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"signup"}}},[t._v("Signup")])],1),t._v(" "),t.user?t._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[t._v("Login")])],1),t._v(" "),t.user?t._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"forgot"}}},[t._v("Forgot")])],1),t._v(" "),t.user?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"account"}}},[t._v("Account")])],1):t._e(),t._v(" "),t.user?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"createNote"}}},[t._v("Create Note")])],1):t._e(),t._v(" "),t.user?n("li",{staticClass:"nav-item"},[t.user?n("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.logout()}}},[t._v("Logout")]):t._e()]):t._e()]),t._v(" "),t._m(1)])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/johndatserakis/koa-vue-notes-web",target:"_blank"}},[n("i",{staticClass:"fa fa-github fa-fw"}),t._v(" Web Code on GitHub")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/johndatserakis/koa-vue-notes-api",target:"_blank"}},[n("i",{staticClass:"fa fa-github fa-fw"}),t._v(" API Code on GitHub")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/johndatserakis/",target:"_blank"}},[n("i",{staticClass:"fa fa-info-circle fa-fw"})])])])}]}},132:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"footer-main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[n("a",{attrs:{href:"https://github.com/johndatserakis"}},[t._v("Koa-Vue-Notes")]),t._v(" is a SPA using Koa (2.3) as the "),n("a",{attrs:{href:"https://github.com/johndatserakis/koa-vue-notes-api"}},[t._v("backend")]),t._v(" and Vue (2.3) as the "),n("a",{attrs:{href:"https://github.com/johndatserakis/koa-vue-notes-api"}},[t._v("frontend")]),t._v(".")])])])])])}]}},31:function(t,e,n){"use strict";function a(t){return u.a.defaults.headers.common.Authorization="Bearer "+t}function s(t){return!!t.response&&(401===t.response.status&&"TOKEN_EXPIRED"===t.response.data.message?new r.a(function(t,e){l.a.dispatch("user/refreshUserTokens").then(function(e){l.a.dispatch("user/setUserAndTokens",{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken}).then(function(e){return t(!0)})}).catch(function(t){l.a.dispatch("user/userLogout"),f.a.replace({name:"login"}),i.a.toasted.error("To verify your session, please login.")})}):void 0)}n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var o=n(22),r=n.n(o),i=n(5),c=n(20),u=n.n(c),l=n(12),f=n(11)},55:function(t,e){},57:function(t,e,n){function a(t){n(122)}var s=n(19)(n(79),n(130),a,null,null);t.exports=s.exports},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(3);e.default={name:"footer-main",methods:{},computed:{}}},81:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(60),s=n.n(a),o=n(3);e.default={name:"navbar",methods:{logout:function(){this.$store.dispatch("user/userLogout",this.$router)}},computed:s()({},n.i(o.a)({user:function(t){return t.user.user}}))}},82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),s=n(57),o=n.n(s),r=n(11),i=n(12),c=(n(3),n(59)),u=n.n(c),l=n(58),f=n.n(l),p=n(56),m=n.n(p),h=n(55);n.n(h);a.a.use(u.a),a.a.use(f.a,{theme:"bubble",position:"top-right",duration:2300}),window.jQuery=window.$=m.a,window.Popper={},n(54),a.a.config.productionTip=!1,new a.a({el:"#app",store:i.a,router:r.a,template:"<App/>",components:{App:o.a},computed:{},mounted:function(){}})},83:function(t,e,n){"use strict";var a=n(22),s=n.n(a),o=n(5),r=n(3),i=n(20),c=n.n(i),u=(n(12),n(11),n(53)),l=(n.n(u),n(31));o.a.use(r.b),c.a.defaults.baseURL="https://koa-vue-notes-api.innermonkdesign.com";var f={namespaced:!0,state:{notes:[]},mutations:{ADD_NOTES:function(t,e){t.notes=t.notes.concat(e)}},getters:{notes:function(t){return t.notes}},actions:{getUsersNotes:function(t,e){var a=(t.dispatch,t.commit),o=(t.getters,t.rootGetters);return new s.a(function(t,s){n.i(l.b)(o["user/accessToken"]),c.a.get("/api/v1/notes",{params:{sort:e.sort,order:e.order,page:e.page,limit:e.limit}}).then(function(e){a("ADD_NOTES",e.data),t(e.data)}).catch(function(t){s(t)})})},getNote:function(t,e){var a=(t.dispatch,t.commit,t.getters,t.rootGetters);return new s.a(function(t,s){n.i(l.b)(a["user/accessToken"]),c.a.get("/api/v1/notes/"+e).then(function(e){t(e.data)}).catch(function(t){s(t)})})},createNote:function(t,e){var a=(t.dispatch,t.commit,t.getters,t.rootGetters);return new s.a(function(t,s){n.i(l.b)(a["user/accessToken"]),c.a.post("/api/v1/notes/",{title:e.title,content:e.content}).then(function(e){t(e)}).catch(function(t){s(t)})})},saveNote:function(t,e){var a=(t.dispatch,t.commit,t.getters,t.rootGetters);return new s.a(function(t,s){n.i(l.b)(a["user/accessToken"]),c.a.put("/api/v1/notes/"+e.id,{title:e.title,content:e.content}).then(function(e){t(e)}).catch(function(t){s(t)})})},deleteNote:function(t,e){var a=(t.dispatch,t.commit,t.getters,t.rootGetters);return new s.a(function(t,s){n.i(l.b)(a["user/accessToken"]),c.a.delete("/api/v1/notes/"+e.id).then(function(e){t(e)}).catch(function(t){s(t)})})}}};e.a=f},84:function(t,e,n){"use strict";var a=n(22),s=n.n(a),o=n(5),r=n(3),i=n(53),c=n.n(i),u=(n(12),n(11),n(31)),l=n(20),f=n.n(l);o.a.use(r.b),f.a.defaults.baseURL="https://koa-vue-notes-api.innermonkdesign.com";var p={namespaced:!0,state:{user:null,accessToken:null,refreshToken:null},mutations:{SET_USER:function(t,e){t.user=e},STORE_ACCESS_TOKEN:function(t,e){t.accessToken=e,localStorage.setItem("accessToken",e)},STORE_REFRESH_TOKEN:function(t,e){t.refreshToken=e,localStorage.setItem("refreshToken",e)},LOGOUT_USER:function(t){t.user=null,t.accessToken=null,t.refreshToken=null,localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")}},getters:{user:function(t){return t.user},accessToken:function(t){return t.accessToken},refreshToken:function(t){return t.refreshToken}},actions:{setUserAndTokens:function(t,e){var n=(t.dispatch,t.commit);t.getters,t.rootGetters;return new s.a(function(t,a){var s=c()(e.accessToken);return n("SET_USER",s.data[0]),n("STORE_ACCESS_TOKEN",e.accessToken),n("STORE_REFRESH_TOKEN",e.refreshToken),t(!0)})},userLogin:function(t,e){var n=t.dispatch;t.commit,t.getters,t.rootGetters;return new s.a(function(t,a){f.a.post("/api/v1/user/authenticate",{username:e.username,password:e.password}).then(function(e){return n("setUserAndTokens",{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken}),t()}).catch(function(t){return o.a.toasted.error("Hmm, those details don't seem right."),a()})})},refreshUserTokens:function(t){var e=(t.dispatch,t.commit,t.getters),a=t.rootGetters;return new s.a(function(t,s){n.i(u.b)(a["user/accessToken"]),f.a.post("/api/v1/user/refreshAccessToken",{username:e.user.username,refreshToken:e.refreshToken}).then(function(e){return t(e)}).catch(function(t){return s(t)})})},userLogout:function(t,e){var n=(t.dispatch,t.commit);t.getters,t.rootGetters;return new s.a(function(t,a){return n("LOGOUT_USER"),e&&e.push({name:"home"}),t()})},userSignup:function(t,e){t.dispatch,t.commit,t.getters,t.rootGetters;return new s.a(function(t,n){f.a.post("/api/v1/user/signup",{firstName:e.firstName,lastName:e.lastName,username:e.username,email:e.email,password:e.password}).then(function(e){return o.a.toasted.success("Successfully signed up. Please login."),t()}).catch(function(t){return o.a.toasted.error("Hmm, something you entered doesn't seem right."),n()})})},userForgot:function(t,e){t.dispatch,t.commit,t.getters,t.rootGetters;return new s.a(function(t,n){f.a.post("/api/v1/user/forgot",{email:e.email,url:"https://koa-vue-notes-web.innermonkdesign.com/user/reset",type:"web"}).then(function(e){o.a.toasted.success("Please check your email."),t()}).catch(function(e){o.a.toasted.success("Please check your email."),t()})})},userReset:function(t,e){t.dispatch,t.commit,t.getters,t.rootGetters;return new s.a(function(t,n){console.log("here"),f.a.post("/api/v1/user/resetPassword",{password:e.password,passwordResetToken:e.passwordResetToken,email:e.email}).then(function(e){return o.a.toasted.success("Successfully reset password. Please login."),t()}).catch(function(t){return console.log(t),o.a.toasted.error("Your reset link has expired or is incorrect. Please reset your password again."),n()})})}}};e.a=p}},[82]);
//# sourceMappingURL=app.67a9e63e090d3edff3cf.js.map