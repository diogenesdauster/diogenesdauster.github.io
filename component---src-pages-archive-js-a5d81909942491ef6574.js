(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return o});n(33),n(50),n(75),n(51),n(166),n(168),n(48);var a=n(0),r=n.n(a),i=n(146),c=n(153),u=n(144);t.default=function(e){var t=function(e){return e&&e[0].node?e.reduce(function(e,t){var n,a=t.node,r=a.frontmatter,i=r.postyear,c=r.postdate,u=r.title,o=a.fields.slug;return e[i]?(e[i].push({postdate:c,slug:o,title:u}),e):Object.assign({},e,((n={})[i]=[{postdate:c,slug:o,title:u}],n))},{}):null}(e.data.allMarkdownRemark.edges);return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Archives"},t?Object.keys(t).sort(function(e,t){return t-e}).map(function(e){return r.a.createElement(a.Fragment,{key:e},r.a.createElement("h1",null,e),r.a.createElement("ul",null,t[e].map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",null,e.postdate," —"," ",r.a.createElement(u.Link,{to:e.slug},e.title)))})))}):"No Archives"))};var o="2013806051"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),u=n(143),o=n.n(u);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(145),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),c=n.n(i),u=n(151),o=n.n(u),l=(n(33),n(152),n(48),n(147)),s=n(144),d=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"container sidebar-sticky"},r.a.createElement("div",{className:"sidebar-about"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},r.a.createElement("span",{role:"img","aria-label":"emoji"},"👨🏻‍💻"," "),r.a.createElement("span",null,"</"),"Diógenes Dauster",r.a.createElement("span",null,">"))),r.a.createElement("p",{className:"lead"},"Code Has No Accent")),r.a.createElement("nav",{className:"sidebar-nav"},r.a.createElement(s.Link,{to:"/",className:"sidebar-nav-item"},"Home"),t?t.map(function(e){var t=e.node.frontmatter.name,n=""+t.toLowerCase();return r.a.createElement(s.Link,{to:n,key:t,className:"sidebar-nav-item"},t)}):null),r.a.createElement("p",null,"© ",(new Date).getFullYear(),". All rights reserved.")))},m=function(e){return r.a.createElement(s.StaticQuery,{query:"675172197",render:function(t){return r.a.createElement(d,Object.assign({},e,{data:t}))},data:l})},f=(n(149),n(150),function(e){var t=e.children,n=e.title,a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:n,meta:[{name:"description",content:"Diogenes WebSite"},{name:"keywords",content:"blog, developer, Diogenes Dauster"}]},r.a.createElement("html",{lang:"en"})),a?r.a.createElement(d,{data:a}):r.a.createElement(m,null),r.a.createElement("div",{className:"content container"},t))}),p=function(e){return r.a.createElement(f,e)};p.propTypes={children:c.a.node.isRequired};t.a=p},147:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{name:"About"}}},{node:{frontmatter:{name:"Archive"}}},{node:{frontmatter:{name:"Projects"}}}]}}}},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),u=n(49),o=n(2),l=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,n){},150:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.title;return r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page-title"},n),t)}},166:function(e,t,n){var a=n(25),r=n(36);n(167)("keys",function(){return function(e){return r(a(e))}})},167:function(e,t,n){var a=n(6),r=n(18),i=n(16);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],c={};c[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",c)}},168:function(e,t,n){"use strict";var a=n(6),r=n(19),i=n(25),c=n(16),u=[].sort,o=[1,2,3];a(a.P+a.F*(c(function(){o.sort(void 0)})||!c(function(){o.sort(null)})||!n(13)(u)),"Array",{sort:function(e){return void 0===e?u.call(i(this)):u.call(i(this),r(e))}})}}]);
//# sourceMappingURL=component---src-pages-archive-js-a5d81909942491ef6574.js.map