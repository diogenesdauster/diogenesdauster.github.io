(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return s});var n=t(0),r=t.n(n),l=t(151),c=t(160),s="1424941374";a.default=function(e){var a=e.data,t=e.layoutData,n=a.allMarkdownRemark.edges;return r.a.createElement(l.a,{data:t,url:"/"},r.a.createElement("div",{className:"posts"},n?n.map(function(e,a){return r.a.createElement(c.a,{key:a,url:e.node.fields.slug,title:e.node.frontmatter.title,date:e.node.frontmatter.postdate},r.a.createElement("p",null,e.node.excerpt))}):r.a.createElement("h1",null,"No Posts")))}},149:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(32),i=t.n(s);t.d(a,"a",function(){return i.a});t(150);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},151:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(154),i=t.n(s),o=(t(33),t(155),t(152)),m=t(149),u=function(e){var a=e.data,t=e.activeUri,n=a.allMarkdownRemark.edges;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"container sidebar-sticky"},r.a.createElement("div",{className:"sidebar-about"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},r.a.createElement("span",{role:"img","aria-label":"emoji"},"👨🏻‍💻"," "),r.a.createElement("span",{className:"tags"},"</"),"D.Dauster",r.a.createElement("span",{className:"tags"},">"))),r.a.createElement("p",{className:"tagline"},"Code Has No Accent")),r.a.createElement("input",{type:"checkbox",id:"menu-icon"}),r.a.createElement("label",{className:"menu-label",htmlFor:"menu-icon"}),r.a.createElement("div",{className:"trigger"},r.a.createElement("ul",{className:"sidebar-nav"},r.a.createElement("li",null,r.a.createElement(m.a,{to:"/",className:"/"===t?"sidebar-nav-item active":"sidebar-nav-item"},"Home")),n?n.map(function(e){var a=e.node.frontmatter.name,n=""+a.toLowerCase();return console.log("activeUri: "+t),console.log("url :"+n),r.a.createElement("li",{key:a},r.a.createElement(m.a,{to:n,className:t===n?"sidebar-nav-item active":"sidebar-nav-item"},a))}):null)),r.a.createElement("p",{className:"copyright"}," ","© ",(new Date).getFullYear(),". All rights reserved.")))},d=function(e){return r.a.createElement(m.b,{query:"675172197",render:function(a){return r.a.createElement(u,Object.assign({},e,{data:a}))},data:o})},E=(t(156),t(157),t(158),function(e){var a=e.children,t=e.title,n=e.data,l=e.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:t,meta:[{name:"description",content:"Diogenes WebSite"},{name:"keywords",content:"blog, developer, Diógenes Dauster"}]},r.a.createElement("html",{lang:"en"})),n?r.a.createElement(u,{data:n,activeUri:l}):r.a.createElement(d,{activeUri:l}),r.a.createElement("div",{className:"content container"},a))}),p=function(e){return r.a.createElement(E,e)};p.propTypes={children:c.a.node.isRequired};a.a=p},152:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{name:"About"}}},{node:{frontmatter:{name:"Archive"}}},{node:{frontmatter:{name:"Projects"}}}]}}}},153:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(54),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},160:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(149);a.a=function(e){var a=e.title,t=e.url,n=e.date,c=e.related_posts,s=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post"},r.a.createElement("h1",{className:"post-title"},t?r.a.createElement(l.a,{to:t},a):a),r.a.createElement("span",{className:"post-date"},n),s),c?r.a.createElement("div",{className:"related"},r.a.createElement("h2",null,"Related Posts"),r.a.createElement("ul",{className:"related-posts"},c.map(function(e,a){return r.a.createElement("li",{id:a},r.a.createElement("h3",null,r.a.createElement(l.a,{to:e.url},e.title," ","  ",r.a.createElement("small",null,e.date))))}))):null)}}}]);
//# sourceMappingURL=component---src-pages-index-js-a9bdfd8bb7a333009094.js.map