/*! For license information please see 4b88d109.3444daa1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[911337],{251577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(785893),r=n(511151);const a={title:"Introducing the Backstage Community Plugins Repository",author:"Ben Lambert, Spotify",authorURL:"https://github.com/benjdlambert",authorImageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"},s=void 0,i={permalink:"/blog/2024/04/19/community-plugins",source:"@site/blog/2024-04-19-community-plugins.mdx",title:"Introducing the Backstage Community Plugins Repository",description:"tl;dr: We've set up the new community plugins repository, and have migrated most of the packages in the plugins directory of the main Backstage repository to their new home!",date:"2024-04-19T00:00:00.000Z",tags:[],readingTime:5.44,hasTruncateMarker:!0,authors:[{name:"Ben Lambert, Spotify",url:"https://github.com/benjdlambert",imageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"}],frontMatter:{title:"Introducing the Backstage Community Plugins Repository",author:"Ben Lambert, Spotify",authorURL:"https://github.com/benjdlambert",authorImageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"},unlisted:!1,nextItem:{title:"Backstage in Paris: Wrapping up BackstageCon and KubeCon + CloudNativeCon Europe 2024",permalink:"/blog/2024/03/27/backstagecon-kubecon-24"}},c={authorsImageUrls:[void 0]},u=[];function m(e){const t={a:"a",code:"code",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"tl;dr"}),": We've set up the new ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/community-plugins",children:"community plugins repository"}),", and have migrated most of the packages in the ",(0,o.jsx)(t.code,{children:"plugins"})," directory of the main Backstage repository to their new home!"]}),"\n",(0,o.jsxs)(t.p,{children:["For those who depended on these plugins, migrating is as simple as ",(0,o.jsx)(t.code,{children:"yarn backstage-cli versions:bump"})," then ",(0,o.jsx)(t.code,{children:"yarn backstage-cli versions:migrate"}),". If you're already on ",(0,o.jsx)(t.code,{children:"1.26.1"}),", then be sure to run ",(0,o.jsx)(t.code,{children:"yarn backstage-cli versions:bump --skip-migrate"})," then ",(0,o.jsx)(t.code,{children:"yarn backstage-cli versions:migrate"})," to take advantage of the code reference replacement helpers."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},675251:(e,t,n)=>{var o=n(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,a={},u=null,m=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(m=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:m,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(667294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);