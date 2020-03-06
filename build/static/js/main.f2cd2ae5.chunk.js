(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{38:function(e,t,a){e.exports=a(69)},43:function(e,t,a){},44:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),s=(a(43),a(13)),i=a(12),l=(a(44),function(e){return r.a.createElement("div",{className:"box header"},r.a.createElement("div",{className:"header-logo"},r.a.createElement(s.b,{exact:"true",to:"/demos/movie-search/"},"Movie Search")),r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.c,{to:"/demos/movie-search/watch-later",activeClassName:"top-nav-active"},r.a.createElement("span",null,"Watchlist")))))))}),h=a(6),u=a(8),m=a(7),d=a(9),v=a(11),f=a(4),p=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={searchTerm:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"handleSubmit",value:function(){this.props.searchMovies(this.state.searchTerm)}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&this.handleSubmit()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search title",onChange:this.handleChange,onKeyDown:this.handleKeyDown}),r.a.createElement("button",{onClick:this.handleSubmit},"search"))}}]),t}(r.a.Component),g=a(21),b=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie-list-wrapper"},r.a.createElement("ul",{className:"movie-list"},this.props.movies.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",{className:"poster-wrapper"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.poster_path),alt:"".concat(t.title," movie poster")})),r.a.createElement("div",null,r.a.createElement("h3",null,t.title," ",r.a.createElement("small",null,"(",new Date(t.release_date).getFullYear(),")")),r.a.createElement("p",null,t.overview),r.a.createElement("div",{className:"movie-list-item-more"},r.a.createElement(s.b,{to:"/"},"more"),r.a.createElement("span",{className:"more-gradient"}))),r.a.createElement("div",null,-1===e.props.watchLater.indexOf(t.id)?r.a.createElement("div",{className:"watch-later-btn",onClick:function(){return e.props.saveToWatchLater(t.id)}},r.a.createElement(g.a,{size:25})):r.a.createElement("div",{className:"watch-later-btn saved",onClick:function(){return e.props.deleteFromWatchLater(t.id)}},r.a.createElement(g.b,{size:25}))))}))))}}]),t}(r.a.Component),w=a(16),E=a.n(w),L=a(36),y=a.n(L),O={get:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.send(e,"get",{},t)},post:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"post",t,a)},put:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"put",t,a)},delete:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"delete",t,a)},send:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return a.length>0&&!0===n&&(a=y.a.stringify(a)),new Promise((function(n,r){E.a.defaults.headers["X-Requested-With"]="XMLHttpRequest";try{var o=document.querySelector('meta[name="csrf-token"]').getAttribute("content");o&&(E.a.defaults.headers["CSRF-Token"]=o)}catch(c){console.log("No csrf token found. ",c)}E.a.defaults.withCredentials=!0,E.a[t.toLowerCase()](e,a).then((function(e){return n(e.data)})).catch((function(e){if(e.response){var t=e.response.status;if(401===t||403===t||419===t)return console.log("Ajax error: ",e),void(window.location.href="/login");r(422===t?{validationErrors:e.response.data.errors}:e.response.data)}else e.request?console.log(e.request):console.log("Error",e.message);console.log(e.config)}))}))}},j=a(37),W=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movies:[],heading:"Popular movies",watchLater:[]},a.searchMovies=a.searchMovies.bind(Object(f.a)(a)),a.saveToWatchLater=a.saveToWatchLater.bind(Object(f.a)(a)),a.deleteFromWatchLater=a.deleteFromWatchLater.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"searchMovies",value:function(e){var t=this;this.setState({movies:[],heading:"Searching..."}),O.post("/movies/search",{searchTerm:e}).then((function(e){"undefined"!=typeof e.movies&&t.setState({movies:e.movies,heading:"Search results (".concat(e.movies.length,")")})})).catch((function(e){t.setState({heading:"An error ocurred."}),console.log(e)}))}},{key:"saveToWatchLater",value:function(e){var t=Object(j.a)(this.state.watchLater);t.push(e),this.setState({watchLater:t}),this.setWatchLater(t)}},{key:"deleteFromWatchLater",value:function(e){var t=this.state.watchLater.filter((function(t){return t!==e}));this.setState({watchLater:t}),this.setWatchLater(t)}},{key:"setWatchLater",value:function(e){window.localStorage.setItem("watchLater",JSON.stringify(e))}},{key:"getWatchLater",value:function(){var e=window.localStorage.getItem("watchLater");return null===e?[]:JSON.parse(e)}},{key:"componentDidMount",value:function(){var e=this;this.setState({heading:"Loading...",watchLater:this.getWatchLater()}),O.get("/demos/movie-search/data/movies/popular.json").then((function(t){"undefined"!=typeof t.results&&e.setState({movies:t.results,heading:"Popular movies"})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(p,{searchMovies:this.searchMovies}),r.a.createElement("h1",{className:"heading"},this.state.heading),r.a.createElement(b,{movies:this.state.movies,watchLater:this.state.watchLater,saveToWatchLater:this.saveToWatchLater,deleteFromWatchLater:this.deleteFromWatchLater}))}}]),t}(r.a.Component),S=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),t}(W),k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={watchLater:[],movies:[],heading:"Watch later"},a.deleteFromWatchLater=a.deleteFromWatchLater.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.getWatchLater();this.setState({heading:"Loading...",watchLater:t}),O.get("/demos/movie-search/data/movies/popular.json").then((function(a){"undefined"!=typeof a.results&&e.setState({movies:a.results.filter((function(e){return-1!==t.indexOf(e.id)})),heading:"Watch later"})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},this.state.heading),this.state.movies.length||"Loading..."===this.state.heading?"":r.a.createElement("p",{className:"empty-watchlist-notification"},"You have not added any movies yet."),r.a.createElement(b,{movies:this.state.movies,watchLater:this.state.watchLater,saveToWatchLater:this.saveToWatchLater,deleteFromWatchLater:this.deleteFromWatchLater}))}}]),t}(W);null===window.localStorage.getItem("watchLater")&&window.localStorage.setItem("watchLater","[]");var N=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(l,null),r.a.createElement("div",{className:"box content"},r.a.createElement(i.a,{exact:!0,path:"/demos/movie-search/",component:S}),r.a.createElement(i.a,{path:"/demos/movie-search/watch-later",component:k})),r.a.createElement("div",{className:"box footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f2cd2ae5.chunk.js.map