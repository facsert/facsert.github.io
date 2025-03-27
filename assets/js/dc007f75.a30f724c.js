"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3671],{21015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=r(74848),n=r(28453);const s={pubDatetime:new Date("2023-10-30T11:14:56.000Z"),title:"Docker Cluster",slug:"Docker Cluster",featured:!1,draft:!1,tags:["docker"],description:"Docker \u96c6\u7fa4"},c=void 0,a={id:"Docker/docker-5-swarm",title:"Docker Cluster",description:"Docker \u96c6\u7fa4",source:"@site/docs/Docker/docker-5-swarm.md",sourceDirName:"Docker",slug:"/Docker/Docker Cluster",permalink:"/docs/Docker/Docker Cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-5-swarm.md",tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{pubDatetime:"2023-10-30T11:14:56.000Z",title:"Docker Cluster",slug:"Docker Cluster",featured:!1,draft:!1,tags:["docker"],description:"Docker \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"Docker Registry",permalink:"/docs/Docker/Docker Registry"},next:{title:"CSS Base",permalink:"/docs/Frontend/CSS/CSS Base"}},i={},d=[{value:"Table of Contents",id:"table-of-contents",level:2}];function x(e){const t={code:"code",h2:"h2",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:" # master node\n $ docker swarm init                             # \u4e3b\u8282\u70b9\u521d\u59cb\u5316\n > ......\n > docker swarm join --token SWMTKN-1-xxxxxxxxxxxxxxxxxxxxxxx 10.58.14.96:2377\n > ......\n\n $ docker swarm join-token worker                # \u67e5\u770b\u5de5\u4f5c\u8282\u70b9\u52a0\u5165\u547d\u4ee4\n $ docker node ls                                # \u67e5\u770b\u96c6\u7fa4\u4e2d\u8282\u70b9\u4fe1\u606f\n > ID                            HOSTNAME          STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION\n > i98ulk65qim1er06gefq5ihyt     DESKTOP-GMPTFUD   Ready     Active                          24.0.6\n > 4veson0hwfnhs6w8kdu5gnfu2 *   Debian            Ready     Active         Leader           24.0.5\n > a7rf3j9ggr48318bwwxsz6q4s     kwephis           Ready     Active                          24.0.7\n\n # work node \u5de5\u4f5c\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\n $ docker swarm join --token SWMTKN-1-xxxxxxxxxxxxxxxxxxxxxxx 10.58.14.96:2377\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var o=r(96540);const n={},s=o.createContext(n);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);