"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4736],{4768:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=l(4848),s=l(8453);const t={pubDatetime:new Date("2022-12-31T19:20:23.000Z"),title:"vim",slug:"vim",featured:!1,draft:!1,tags:["vim","Tool"],description:"vim \u662f\u4e00\u4e2a\u4f7f\u7528\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5668"},r=void 0,a={id:"Tool/vim",title:"vim",description:"vim \u662f\u4e00\u4e2a\u4f7f\u7528\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5668",source:"@site/docs/Tool/vim.md",sourceDirName:"Tool",slug:"/Tool/vim",permalink:"/docs/Tool/vim",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tool/vim.md",tags:[{inline:!0,label:"vim",permalink:"/docs/tags/vim"},{inline:!0,label:"Tool",permalink:"/docs/tags/tool"}],version:"current",frontMatter:{pubDatetime:"2022-12-31T19:20:23.000Z",title:"vim",slug:"vim",featured:!1,draft:!1,tags:["vim","Tool"],description:"vim \u662f\u4e00\u4e2a\u4f7f\u7528\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5668"},sidebar:"tutorialSidebar",previous:{title:"rabbitmq",permalink:"/docs/Tool/rabbitmq"},next:{title:"zsh",permalink:"/docs/Tool/zsh"}},d={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"normal \u6a21\u5f0f",id:"normal-\u6a21\u5f0f",level:2},{value:"\u5feb\u901f\u79fb\u52a8",id:"\u5feb\u901f\u79fb\u52a8",level:3},{value:"\u526a\u5207\u5185\u5bb9",id:"\u526a\u5207\u5185\u5bb9",level:3},{value:"\u590d\u5236\u5185\u5bb9",id:"\u590d\u5236\u5185\u5bb9",level:3},{value:"insert \u6a21\u5f0f",id:"insert-\u6a21\u5f0f",level:2},{value:"visual \u6a21\u5f0f",id:"visual-\u6a21\u5f0f",level:2},{value:"command \u6a21\u5f0f",id:"command-\u6a21\u5f0f",level:2},{value:"\u641c\u7d22",id:"\u641c\u7d22",level:3}];function c(n){const e={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsx)(e.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsx)(e.p,{children:"vim \u662f\u4e00\u4e2a\u4f7f\u7528\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5668\uff0c\u5b83\u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u5e76\u4e14\u53ef\u4ee5\u4e0e\u5176\u4ed6\u7a0b\u5e8f\u914d\u5408\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" $ sudo apt-get install vim\n $ vim --version\n > VIM - Vi IMproved 8.1 (2018 May 18, compiled Dec 07 2023 15:42:49)\n > ......\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"vi /etc/vim/vimrc"}),", \u7f16\u8f91 vim \u914d\u7f6e",(0,i.jsx)(e.br,{}),"\n","\u914d\u7f6e\u6587\u4ef6\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:'"'})," \u4f5c\u4e3a\u6ce8\u91ca\u7b26\u53f7"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:' set nocp         "\u4f7f\u7528\u975e\u517c\u5bb9 vi \u6a21\u5f0f\n set nu           "\u5728\u5de6\u4fa7\u884c\u53f7\n set tabstop=4    "tab \u957f\u5ea6\u8bbe\u7f6e\u4e3a 4\n set nobackup     "\u8986\u76d6\u6587\u4ef6\u65f6\u4e0d\u5907\u4efd\n set cursorline   "\u7a81\u51fa\u663e\u793a\u5f53\u524d\u884c\n set ruler        "\u5728\u53f3\u4e0b\u89d2\u663e\u793a\u5149\u6807\u4f4d\u7f6e\u7684\u72b6\u6001\u884c\n set autoindent   "\u81ea\u52a8\u7f29\u8fdb\n set showmode     "\u663e\u793a\u5f53\u524d\u6a21\u5f0f\n'})}),"\n",(0,i.jsx)(e.h2,{id:"normal-\u6a21\u5f0f",children:"normal \u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"vim \u7f16\u8f91\u6587\u4ef6\u9ed8\u8ba4\u5c31\u662f normal \u6a21\u5f0f:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5feb\u901f\u79fb\u52a8"}),"\n",(0,i.jsx)(e.li,{children:"\u5220\u9664\u5185\u5bb9"}),"\n",(0,i.jsx)(e.li,{children:"\u590d\u5236\u5185\u5bb9"}),"\n",(0,i.jsx)(e.li,{children:"\u9ecf\u8d34\u5185\u5bb9"}),"\n",(0,i.jsx)(e.li,{children:"\u641c\u7d22\u5185\u5bb9"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5feb\u901f\u79fb\u52a8",children:"\u5feb\u901f\u79fb\u52a8"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"h, j, k, l  \u5de6, \u4e0b, \u4e0a, \u53f3\n\nb, e  \u5f53\u524d\u5355\u8bcd\u7684\u5f00\u5934, \u7ed3\u5c3e\nw, ge \u4e0b\u4e2a\u5355\u8bcd\u7684\u5f00\u5934, \u4e0a\u4e2a\u5355\u8bcd\u7ed3\u5c3e\n\n0, ^, $     \u884c\u9996, \u884c\u9996(\u975e\u7a7a\u767d\u5b57\u7b26), \u6587\u6863\u672b\u5c3e\n\nctrl + b \u5411\u4e0a\u6eda\u52a8\u4e00\u5c4f\nctrl + f \u5411\u4e0b\u6eda\u52a8\u4e00\u5c4f\n\ngg, G \u6587\u6863\u5f00\u5934, \u6587\u6863\u672b\u5c3e\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u526a\u5207\u5185\u5bb9",children:"\u526a\u5207\u5185\u5bb9"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"x     \u526a\u5207\u5f53\u524d\u5b57\u7b26\nX     \u526a\u5207\u5f53\u524d\u5b57\u7b26\u524d\u4e00\u4e2a\ndd    \u526a\u5207\u5f53\u524d\u884c\ndw    \u526a\u5207\u5f53\u524d\u5355\u8bcd\nd$    \u526a\u5207\u5f53\u524d\u884c\u5230\u884c\u5c3e\nd0    \u526a\u5207\u5f53\u524d\u884c\u5230\u884c\u9996\n\nd<n>j \u526a\u5207\u5f53\u524d\u884c\u53ca\u5176\u540e n \u884c\nd<n>k \u526a\u5207\u5f53\u524d\u884c\u53ca\u5176\u524d n \u884c\nd<n>w \u526a\u5207\u5f53\u524d\u5355\u8bcd\u53ca\u5176\u540e n \u4e2a\u5355\u8bcd\nd<n>b \u526a\u5207\u5f53\u524d\u5355\u8bcd\u53ca\u5176\u524d n \u4e2a\u5355\u8bcd\n\np     \u9ecf\u8d34\u526a\u5207\u677f\u5185\u5bb9\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u590d\u5236\u5185\u5bb9",children:"\u590d\u5236\u5185\u5bb9"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"yy    \u590d\u5236\u5f53\u524d\u884c\nyw    \u590d\u5236\u5f53\u524d\u5355\u8bcd\ny$    \u590d\u5236\u5f53\u524d\u884c\u5230\u884c\u5c3e\ny0    \u590d\u5236\u5f53\u524d\u884c\u5230\u884c\u9996\ny^    \u590d\u5236\u5f53\u524d\u884c\u5230\u884c\u9996(\u975e\u7a7a\u767d\u5b57\u7b26)\n\ny<n>j \u590d\u5236\u5f53\u524d\u884c\u53ca\u5176\u540e n \u884c\ny<n>k \u590d\u5236\u5f53\u524d\u884c\u53ca\u5176\u524d n \u884c\ny<n>w \u590d\u5236\u5f53\u524d\u5355\u8bcd\u53ca\u5176\u540e n \u4e2a\u5355\u8bcd\ny<n>b \u590d\u5236\u5f53\u524d\u5355\u8bcd\u53ca\u5176\u524d n \u4e2a\u5355\u8bcd\n\np     \u9ecf\u8d34\u526a\u5207\u677f\u5185\u5bb9(d \u6216 y \u540e\u64cd\u4f5c\u7684\u5185\u5bb9)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"insert-\u6a21\u5f0f",children:"insert \u6a21\u5f0f"}),"\n",(0,i.jsx)(e.h2,{id:"visual-\u6a21\u5f0f",children:"visual \u6a21\u5f0f"}),"\n",(0,i.jsx)(e.h2,{id:"command-\u6a21\u5f0f",children:"command \u6a21\u5f0f"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4efb\u610f\u6a21\u5f0f\u4e0b\uff0c\u6309\u4e0b ",(0,i.jsx)(e.code,{children:":"})," \u952e\uff0c\u8fdb\u5165 command \u6a21\u5f0f\uff0c\u53ef\u4ee5\u6267\u884c vim \u547d\u4ee4"]}),"\n",(0,i.jsx)(e.h3,{id:"\u641c\u7d22",children:"\u641c\u7d22"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"/pattern + enter \u641c\u7d22\u5339\u914d\u9879\u76ee\nn  N             \u5411\u4e0b\u641c\u7d22\u4e0b\u4e00\u4e2a\u5339\u914d\u9879, \u5411\u4e0a\u641c\u7d22\u4e0a\u4e00\u4e2a\u5339\u914d\u9879\n\n:s/pattern/replace/g  \u5355\u884c\u5168\u66ff\u6362\n:s/pattern/replace/gi  \u5ffd\u7565\u5927\u5c0f\u5199\u66ff\u6362\n\n:%s/pattern/replace/g  \u5168\u5c40\u66ff\u6362\n:%s/pattern/replace/i  \u5168\u5c40\u5ffd\u7565\u5927\u5c0f\u5199\u66ff\u6362\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>a});var i=l(6540);const s={},t=i.createContext(s);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);