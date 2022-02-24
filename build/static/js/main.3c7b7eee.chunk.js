(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,a,t){e.exports=t(61)},36:function(e,a,t){},37:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var c,r,n=t(0),l=t.n(n),s=t(28),o=t.n(s),m=(t(36),t(37),t(12)),i=t(8),u=function(){var e;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("div",{className:"container-fluid mx-3 mx-lg-5"},l.a.createElement(i.b,(e={className:"nav-link",to:"/"},Object(m.a)(e,"className","navbar-brand"),Object(m.a)(e,"href","#"),e),l.a.createElement("i",{className:"fab fa-github"}),"  Github Finder"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},"About"))))))},E=Object(n.createContext)(),d=function(){var e=Object(n.useContext)(E),a=e.cleared,t=e.getUser,c=e.clearEvent,r=e.search,s=e.setSearch,o=e.is_blank,m=e.setIs_blank;return l.a.createElement("div",{className:"row justify-content-center mt-5"},l.a.createElement("div",{className:"col-8 "},o&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.a.createElement("i",{className:"fas fa-exclamation-circle"}),"  Enter the name for search"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),void 0==r||""==r?(m(!0),setTimeout((function(){m(!1)}),4e3)):(t(r),s(""))}},l.a.createElement("div",{className:"form-group form-control-lg",style:{padding:0,marginBottom:0}},l.a.createElement("label",{style:{width:"100%"}},l.a.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"Search Users ...",value:r,onChange:function(e){s(e.target.value)},style:{width:"100%"}}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Search")),!a&&l.a.createElement("button",{type:"submit",className:" mt-2 btn btn-secondary btn-lg btn-block",onClick:function(){return c()}},"Clear")))},b=t(1),p=function(){return l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"64px",height:"64px",viewBox:"0 0 128 128"},l.a.createElement("g",null,l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#000"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#555",transform:"rotate(45,64,64)"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#949494",transform:"rotate(90,64,64)"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#ccc",transform:"rotate(135,64,64)"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#e1e1e1",transform:"rotate(180,64,64)"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#e1e1e1",transform:"rotate(225,64,64)"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#e1e1e1",transform:"rotate(270,64,64)"}),l.a.createElement("circle",{cx:"16",cy:"64",r:"16",fill:"#e1e1e1",transform:"rotate(315,64,64)"}),l.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64",calcMode:"discrete",dur:"720ms",repeatCount:"indefinite"}))))},f=function(){var e=Object(n.useContext)(E),a=e.users,t=e.is_loading;return console.log(a),t?l.a.createElement(p,null):l.a.createElement("div",{className:"row justify-content-around"},a.map((function(e){return l.a.createElement("div",{className:"col-lg-4 col-sm-6 col-10"},l.a.createElement("div",{className:"card border-secondary my-5 ",style:{maxWidth:"20rem"}},l.a.createElement("div",{className:"row justify-content-center mt-4"},l.a.createElement("div",{className:"col-md-6 col-8 col-lg-9 col-xl-8 "},l.a.createElement("img",{src:e.avatar_url,className:"card-img-top",alt:"...",style:{borderRadius:"50%"}}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"text-center"},e.login),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-3 col-lg-4 pl-2 pl-lg-4 "},l.a.createElement(i.b,{to:"user/".concat(e.login),type:"button",className:"btn btn-primary"},"More"))))))})))},v=function(){return l.a.createElement("div",{className:"my-5"},l.a.createElement("p",null,"Github Finder is an React App  that allows  to find the github users and watch their profile "),l.a.createElement("p",null," ",l.a.createElement("a",{href:"https://myportfoliohirdeshgupta.herokuapp.com/index.html#"}," Developed by Hirdesh Gupta ")))},_=function(e){var a=e.match.params,t=Object(n.useContext)(E),c=t.getDetails,r=t.is_loading,s=t.userDetails,o=t.getRepos,m=t.repos;Object(n.useEffect)((function(){o(a.name),c(a.name)}),[]);for(var u=[],d=0;d<5;d++)u.push(l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card border-light mb-3"},l.a.createElement("h5",{className:"py-2 pl-2 "},l.a.createElement("a",{className:"text-white",href:m[0]&&m[d].html_url},m[0]&&m[d].name)))));return r?l.a.createElement(p,null):l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"row mt-4 align-ite"},l.a.createElement("div",{className:"col-5 col-lg-2"},l.a.createElement(i.b,{type:"button",to:"/",className:"btn btn-primary"},"Go To Search")),l.a.createElement("div",{className:" col-4 col-md-2"},l.a.createElement("h5",null,"Hirable ",s.hireable?l.a.createElement("i",{className:"fas fa-check",style:{color:"green"}}):l.a.createElement("i",{className:"fas fa-times",style:{color:"red"}})))),l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card border-light mb-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:s.avatar_url,className:"card-img-top",alt:"...",style:{borderRadius:"50%",height:150,width:150}}))),l.a.createElement("h2",{className:"text-center mt-2"},s.name?s.name:s.login),s.location&&l.a.createElement("p",{className:"text-center mt-0"},s.location)),l.a.createElement("div",{className:"col-md-6"},s.login&&l.a.createElement("div",null,l.a.createElement("h4",null,"Bio"),l.a.createElement("p",null,s.bio)),l.a.createElement("a",{href:s.html_url,type:"button",className:"btn btn-primary"},"Visit Github Profile"),l.a.createElement("p",{className:"mt-3"},l.a.createElement("strong",null,"Username : "),s.login),s.company&&l.a.createElement("p",null,l.a.createElement("strong",null,"Company :"),s.company),s.blog&&l.a.createElement("p",null,l.a.createElement("strong",null,"Website : "),s.blog)))))),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card border-light mb-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-12 col-md-11  col-lg-8 col-xl-7"},l.a.createElement("button",{type:"button",className:"btn btn-info mx-1 mt-1"},"Followers : ",s.followers),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1  mt-1"},"Following : ",s.following),l.a.createElement("button",{type:"button",className:"btn btn-success mx-1  mt-1"},"Public Repos : ",s.public_repos),l.a.createElement("button",{type:"button",className:"btn btn-danger mx-1  mt-1"},"Public Gists : ",s.public_gists)))))),u))},y=t(10),g=t.n(y),N=t(13),h=t(30),S={SET_USERS:"SET_USERS",SET_LOADING:"SET_LOADING",SET_CLEARED:"SET_CLEARED",SET_SEARCH:"SET_SEARCH",SET_USER_DETAILS:"SET_USER_DETAILS",SET_REPOS:"SET_REPOS",SET_IS_BLANK:"SET_IS_BLANK"},T=t(3),O=S.SET_USERS,x=S.SET_LOADING,C=S.SET_CLEARED,j=S.SET_SEARCH,w=S.SET_USER_DETAILS,R=S.SET_REPOS,D=S.SET_IS_BLANK,A=function(e,a){switch(a.type){case O:return Object(T.a)(Object(T.a)({},e),{},{users:a.payload,is_loading:!1});case x:return Object(T.a)(Object(T.a)({},e),{},{is_loading:!0});case C:return Object(T.a)(Object(T.a)({},e),{},{cleared:a.payload});case j:return Object(T.a)(Object(T.a)({},e),{},{search:a.payload});case w:return Object(T.a)(Object(T.a)({},e),{},{userDetails:a.payload,is_loading:!1});case R:return Object(T.a)(Object(T.a)({},e),{},{repos:a.payload});case D:return Object(T.a)(Object(T.a)({},e),{},{is_blank:a.payload})}},I=t(14),k=t.n(I),L=S.SET_USERS,U=S.SET_LOADING,P=S.SET_CLEARED,H=S.SET_SEARCH,B=S.SET_USER_DETAILS,G=S.SET_REPOS,K=S.SET_IS_BLANK;c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_CLIENT_ID:"95c30163b04cffcff27cdafbb78ecbf186e68aa1"}).GITHUB_CLIENT_ID,r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_CLIENT_ID:"95c30163b04cffcff27cdafbb78ecbf186e68aa1"}).GITHUB_CLIENT_SECRET;var W=function(e){var a=Object(n.useReducer)(A,{users:[],cleared:!0,is_loading:!1,search:"",userDetails:{},repos:[],is_blank:!1}),t=Object(h.a)(a,2),s=t[0],o=t[1],m=function(){var e=Object(N.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o({type:U}),e.next=4,k.a.get("https://api.github.com/search/users?q=".concat(a,"&client_id=").concat(c,"&client_secret=").concat(r));case 4:t=e.sent,o({type:P,payload:!1}),o({type:L,payload:t.data.items}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),i=function(){var e=Object(N.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o({type:U}),e.next=4,k.a.get("https://api.github.com/users/".concat(a,"?client_id=").concat(c,"&client_secret=").concat(r));case 4:t=e.sent,o({type:B,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(N.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://api.github.com/users/".concat(a,"/repos?sort=created&client_id=").concat(c,"&client_secret=").concat(r));case 3:t=e.sent,o({type:G,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(E.Provider,{value:{users:s.users,is_loading:s.is_loading,cleared:s.cleared,search:s.search,userDetails:s.userDetails,repos:s.repos,is_blank:s.is_blank,getUser:m,clearEvent:function(){o({type:L,payload:[]}),o({type:P,payload:!0})},setSearch:function(e){o({type:H,payload:e})},getDetails:i,getRepos:u,setIs_blank:function(e){o({type:K,payload:e})}}},e.children)},F=function(){return l.a.createElement(W,null,l.a.createElement(i.a,null,l.a.createElement(n.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"container"},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(d,null),l.a.createElement(f,null))}}),l.a.createElement(b.a,{exact:!0,path:"/about",component:v}),l.a.createElement(b.a,{exact:!0,path:"/user/:name",render:function(e){return l.a.createElement(_,e)}}))))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3c7b7eee.chunk.js.map