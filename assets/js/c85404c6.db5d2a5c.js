"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5470],{1600:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(4848),i=t(8453);const o={pubDatetime:new Date("2023-03-28T15:28:43.000Z"),title:"05.Go Function",slug:"05.Go Function",featured:!1,draft:!1,tags:["Go"],description:"Go \u51fd\u6570"},c=void 0,l={id:"Go/tutorial/go-5-function",title:"05.Go Function",description:"Go \u51fd\u6570",source:"@site/docs/Go/tutorial/go-5-function.md",sourceDirName:"Go/tutorial",slug:"/Go/tutorial/05.Go Function",permalink:"/docs/Go/tutorial/05.Go Function",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/tutorial/go-5-function.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"}],version:"current",frontMatter:{pubDatetime:"2023-03-28T15:28:43.000Z",title:"05.Go Function",slug:"05.Go Function",featured:!1,draft:!1,tags:["Go"],description:"Go \u51fd\u6570"},sidebar:"tutorialSidebar",previous:{title:"04.Go Map",permalink:"/docs/Go/tutorial/04.Go Map"},next:{title:"06.Go Struct",permalink:"/docs/Go/tutorial/06.Go Struct"}},a={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"function \u5b9a\u4e49",id:"function-\u5b9a\u4e49",level:2},{value:"\u53c2\u6570\u4e0e\u8fd4\u56de\u503c",id:"\u53c2\u6570\u4e0e\u8fd4\u56de\u503c",level:3},{value:"\u533f\u540d\u51fd\u6570",id:"\u533f\u540d\u51fd\u6570",level:2},{value:"defer",id:"defer",level:2}];function u(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsx)(e.h2,{id:"function-\u5b9a\u4e49",children:"function \u5b9a\u4e49"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'func <function name> (<parameter name> <parameter type>) (<return type>) {\n    <function code>\n}\n\nfunc show() {                                    // \u65e0\u53c2\u6570, \u65e0\u8fd4\u56de\u503c, \u5bf9\u5e94\u5185\u5bb9\u4e0d\u586b\n    Println("no parameter and no return")\n}\n\nfunc add(x int, y int) int {                     // \u53c2\u6570\u548c\u7c7b\u578b\u8981\u5bf9\u5e94\n    return x + y\n}\n\nfunc self(x, y int) (int, int) {                 // \u540c\u7c7b\u578b\u53c2\u6570\u5408\u5e76, \u591a\u8fd4\u56de\u503c, \u8fd4\u56de\u503c\u7c7b\u578b\u9700\u8981\u62ec\u53f7\n    return x, y\n}\n\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"func: \u51fd\u6570\u5b9a\u4e49\u4f7f\u7528\u7684\u5173\u952e\u5b57"}),"\n",(0,r.jsx)(e.li,{children:"function name: \u51fd\u6570\u540d, \u540c\u53d8\u91cf\u4f7f\u7528"}),"\n",(0,r.jsx)(e.li,{children:"parameter name: \u53c2\u6570\u540d, \u53c2\u6570\u540d\u4e0e\u7c7b\u578b\u6210\u5bf9\u5b58\u5728"}),"\n",(0,r.jsx)(e.li,{children:"parameter type: \u53c2\u6570\u7c7b\u578b, \u591a\u4e2a\u540c\u7c7b\u578b\u53c2\u6570\u53ef\u53ea\u5199 1 \u6b21"}),"\n",(0,r.jsx)(e.li,{children:"return type: \u8fd4\u56de\u503c\u7684\u7c7b\u578b"}),"\n",(0,r.jsx)(e.li,{children:"golang \u5f3a\u5236\u89c4\u5b9a\u5de6\u82b1\u62ec\u53f7\u5fc5\u987b\u548c func \u540c\u4e00\u884c"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u53c2\u6570\u4e0e\u8fd4\u56de\u503c",children:"\u53c2\u6570\u4e0e\u8fd4\u56de\u503c"}),"\n",(0,r.jsx)(e.p,{children:"golang \u5141\u8bb8\u4e0d\u5b9a\u6570\u91cf\u7684\u53c2\u6570\ngolang \u5141\u8bb8\u591a\u4e2a\u8fd4\u56de\u503c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func sum(numList ...int) int {                   // \u8bbe\u7f6e\u53ef\u53d8\u53c2\u6570, \u53ef\u53d8\u53c2\u6570\u901a\u5e38\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a\u53c2\u6570\n    res := 0\n    for _, i := range numList {                  // \u53ef\u53d8\u53c2\u6570\u672c\u8d28\u662f\u4e00\u4e2a\u5207\u7247\n        res += i\n    }\n    return res\n}\n\nPrintln(sum(1,2,3,4))\n> 10\n\nfunc calc(x, y int) (sum, sub int) {             // \u6307\u5b9a\u591a\u4e2a\u8fd4\u56de\u503c\n    sum := x + y\n    sub = x - y\n    return\n}\n\nfunc add(x, y int) (int, int) {                  // \u591a\u4e2a\u8fd4\u56de\u503c\u65f6, \u8fd4\u56de\u503c\u7c7b\u578b\u9700\u8981\u5e26\u62ec\u53f7\n    return x+1, y+1\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u533f\u540d\u51fd\u6570",children:"\u533f\u540d\u51fd\u6570"}),"\n",(0,r.jsx)(e.p,{children:"golang \u5141\u8bb8\u5c06\u51fd\u6570\u8d4b\u503c\u7ed9\u53d8\u91cf\ngolang \u5141\u8bb8\u51fd\u6570\u4e0d\u5b9a\u4e49\u540d\u79f0\u76f4\u63a5\u8fd0\u884c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"\naverage := func(x, y int) int {\n    return (x+y)/2\n}\n\nPrintln(average(6, 8))\n> 7\n\navg := func(x, y int) int {\n    return (x+y)/2\n}(3,5)\n\nPrintln(avg)\n> 4\n"})}),"\n",(0,r.jsx)(e.h2,{id:"defer",children:"defer"}),"\n",(0,r.jsx)(e.p,{children:"defer \u5173\u952e\u5b57\u4f1a\u5c06\u4e4b\u540e\u8bed\u53e5\u6216\u51fd\u6570\u653e\u5230\u51fd\u6570\u7ed3\u5c3e\u8fd0\u884c\n\u591a\u4e2a defer \u8bed\u53e5\u6309\u7167\u5148\u8fdb\u540e\u51fa\u7684\u987a\u5e8f\u6267\u884c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'\nfunc delay() {\n    defer func() {                               // \u5c06\u51fd\u6570\u5ef6\u8fdf\u5230\u6700\u540e\u6267\u884c\n        Println("third print")\n    }()\n    Println("first print")\n    Println("second print")\n}\n\n> first print                                    // first second \u6b63\u5e38\u6309\u987a\u5e8f\u6253\u5370\n> second print\n> third print                                    // third \u5ef6\u8fdf\u5230\u6700\u540e\u6253\u5370\n\nfunc stack() {                                   // \u6267\u884c\u591a\u4e2a defer \u8bed\u53e5\n    defer Println("4th")\n    defer Println("3rd")\n    defer Println("2nd")\n    defer Println("1st")\n}\n\n> 1st                                            // \u591a\u4e2a defer \u6309\u7167\u5148\u8fdb\u540e\u51fa\u7684\u987a\u5e8f\u6267\u884c\n> 2nd\n> 3rd\n> 4th\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);