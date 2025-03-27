"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2551],{66118:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(74848),o=t(28453);const r={pubDatetime:new Date("2023-11-20T09:20:27.000Z"),title:"React Configuration",slug:"React Configuration",featured:!1,draft:!1,tags:["React"],description:"React \u57fa\u672c\u914d\u7f6e"},s=void 0,c={id:"Frontend/React/react-create",title:"React Configuration",description:"React \u57fa\u672c\u914d\u7f6e",source:"@site/docs/Frontend/React/react-create.md",sourceDirName:"Frontend/React",slug:"/Frontend/React/React Configuration",permalink:"/docs/Frontend/React/React Configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend/React/react-create.md",tags:[{inline:!0,label:"React",permalink:"/docs/tags/react"}],version:"current",frontMatter:{pubDatetime:"2023-11-20T09:20:27.000Z",title:"React Configuration",slug:"React Configuration",featured:!1,draft:!1,tags:["React"],description:"React \u57fa\u672c\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"React base",permalink:"/docs/Frontend/React/React base"},next:{title:"React fetch",permalink:"/docs/Frontend/React/React fetch"}},i={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Root",id:"root",level:2},{value:"Router",id:"router",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'$ mkdir next-demo && cd next-demo\n$ npm init -y\n$ npm i react react-dom next\n\n$ ls\n> node_modules  package.json  package-lock.json\n\n$ cat package.json\n{\n  "name": "next-app",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "dev": "next",                               # \u6dfb\u52a0\u547d\u4ee4, \u5f00\u53d1\u9879\u76ee\n    "build": "next build",                       # \u6dfb\u52a0\u547d\u4ee4, \u6784\u5efa\u9879\u76ee\n    "start": "next start"                        # \u6dfb\u52a0\u547d\u4ee4, \u542f\u52a8\u9879\u76ee\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "next": "^14.1.4",\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  }\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u9879\u76ee\u7ed3\u6784"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"next-app/\n\u2502\n\u251c\u2500\u2500 app/                                         # \u9875\u9762\u6587\u4ef6\u5939\n\u2502   \u251c\u2500\u2500 page.js                                  # \u4e3b\u9875\n\u2502   \u2514\u2500\u2500 layout.js                                # \u9875\u9762\u6a21\u677f\n\u2502   \u2514\u2500\u2500 login/                                   # \u767b\u5f55\u9875\u9762\n\u2502       \u2514\u2500\u2500 page.js                              # \u767b\u5f55\u9875\u9762\u4e3b\u9875\n\u2502       \u2514\u2500\u2500 layout.js                            # \u767b\u5f55\u9875\u9762\u6a21\u677f\n\u2502\n\u251c\u2500\u2500 public/                                      # \u9759\u6001\u8d44\u6e90\u6587\u4ef6\u5939\n\u2502   \u2514\u2500\u2500 images/                                  # \u56fe\u7247\n\u2502   \u2514\u2500\u2500 favicon.ico                              # \u7f51\u7ad9\u56fe\u6807\n\u2502\n\u251c\u2500\u2500 styles/                                      # \u6837\u5f0f\u6587\u4ef6\u5939\n\u2502   \u251c\u2500\u2500 globals.css                              # \u5168\u5c40\u6837\u5f0f\n\u2502   \u2514\u2500\u2500 Home.module.css                          # \u4e3b\u9875\u6837\u5f0f\u6a21\u5757\n\u2502\n\u251c\u2500\u2500 components/                                  # \u7ec4\u4ef6\u6587\u4ef6\u5939\n\u2502   \u2514\u2500\u2500 Header.js                                # \u5934\u90e8\u7ec4\u4ef6\n\u2502   \u2514\u2500\u2500 Footer.js                                # \u5e95\u90e8\u7ec4\u4ef6\n\u2502\n\u251c\u2500\u2500 package.json                                 # \u9879\u76ee\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 .gitignore                                   # Git \u5ffd\u7565\u6587\u4ef6\n\u2514\u2500\u2500 README.md                                    # \u9879\u76ee\u8bf4\u660e\u6587\u4ef6\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8def\u7531"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'# app \u6587\u4ef6\u4e0b, \u53ea\u89e3\u6790 page \u6587\u4ef6\u4f5c\u4e3a\u8def\u7531, \u5176\u4f59\u6587\u4ef6\u4e0d\u4f5c\u4e3a\u8def\u7531\n\u251c\u2500\u2500 app/\n\u2502   \u251c\u2500\u2500 page.js\n\u2502   \u2514\u2500\u2500 layout.js                                # "/" \u4e3b\u9875\n\u2502   \u2514\u2500\u2500 login/\n\u2502   \u2502   \u2514\u2500\u2500 page.js                              # "/login" \u767b\u5f55\u9875\u9762\u4e3b\u9875\n\u2502   \u2502   \u2514\u2500\u2500 nav.js                               # \u4e0d\u89e3\u6790\n\u2502   \u2514\u2500\u2500 (content)/                               # \u5206\u7ec4\u6587\u4ef6, \u4e0d\u4f5c\u4e3a\u8def\u7531\n\u2502       \u2514\u2500\u2500 tag\n\u2502           \u2514\u2500\u2500 page.js                          # "/tag"\n\u2502           \u2514\u2500\u2500 layout.js\n\u2502   \u2514\u2500\u2500 articles/                                # \u5206\u7ec4\u6587\u4ef6, \u4e0d\u4f5c\u4e3a\u8def\u7531\n\u2502       \u2514\u2500\u2500 [slug]                               # slug \u53ef\u4ee5\u4e3a\u4efb\u610f\u503c\n\u2502           \u2514\u2500\u2500 page.js                          # "/articles/3" \u4f7f\u7528\u94a9\u5b50\u83b7\u53d6\u8def\u5f84\u53c2\u6570\u53d6\u503c\u6e32\u67d3\n\u2502           \u2514\u2500\u2500 layout.js\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u4f7f\u7528 vite \u6784\u5efa React \u9879\u76ee"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm i vite -g                                    # \u4e0b\u8f7d vite\n\nnpm create vite demo                             # \u521b\u5efa\u9879\u76ee\n\u2714 Select a framework: \u203a React\n\u2714 Select a variant: \u203a JavaScript\nScaffolding project in /root/Desktop/React/demo...\n\nDone. Now run:\n\n  cd demo\n  npm install\n  npm run dev\n\ncd demo && npm install                           # \u4e0b\u8f7d\u4f9d\u8d56\u5305\nnpm run dev                                      # \u542f\u52a8\u9879\u76ee\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u4fee\u6539 vite \u914d\u7f6e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'export default defineConfig({\n  server: {\n    host: "10.58.14.96", // \u4fee\u6539\u670d\u52a1 host\n    port: 5173, // \u4fee\u6539\u670d\u52a1\u7aef\u53e3\n  },\n  // ......\n});\n'})}),"\n",(0,a.jsx)(e.h2,{id:"root",children:"Root"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'// app/page.jsx\nexport default function RootPage() {\n  return <h1>Hello Next.js</h1>\n}\n\n// app/layout.jsx, page \u5185\u5bb9\u4f1a\u4f5c\u4e3a children \u53d8\u91cf, \u5d4c\u5165\u6a21\u677f\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en">\n      <body>\n        {/* Layout UI */}\n        <main>{children}</main>\n      </body>\n    </html>\n  )\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"router",children:"Router"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// \u4f7f\u7528 next Link \u7ec4\u4ef6\u8df3\u8f6c\u9875\u9762\nimport Link from 'next/link'\n\nexport default function PageLink({ posts }) {\n  return (\n    <Link href='/index'>Index Page</Link>\n  )\n}\n\n// \u4f7f\u7528 next useRouter \u8df3\u8f6c\u9875\u9762\n'use client'\n\nimport { useRouter } from 'next/navigation'\n\nexport default function Page() {\n  const router = useRouter()\n  return (\n    <button type=\"button\" onClick={() => router.push('/dashboard')}>\n      Dashboard\n    </button>\n  )\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var a=t(96540);const o={},r=a.createContext(o);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);