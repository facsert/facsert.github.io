"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4089],{90881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(74848),r=t(28453);const l={pubDatetime:new Date("2023-04-02T15:28:43.000Z"),title:"Go File IO",slug:"Go File IO",featured:!1,draft:!1,tags:["Go"],description:"Go \u6587\u4ef6 IO"},s=void 0,o={id:"Go/modules/go-fileIO",title:"Go File IO",description:"Go \u6587\u4ef6 IO",source:"@site/docs/Go/modules/go-fileIO.md",sourceDirName:"Go/modules",slug:"/Go/modules/Go File IO",permalink:"/docs/Go/modules/Go File IO",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/modules/go-fileIO.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"}],version:"current",frontMatter:{pubDatetime:"2023-04-02T15:28:43.000Z",title:"Go File IO",slug:"Go File IO",featured:!1,draft:!1,tags:["Go"],description:"Go \u6587\u4ef6 IO"},sidebar:"tutorialSidebar",previous:{title:"Github Action",permalink:"/docs/Git/Github Action"},next:{title:"Go Gin",permalink:"/docs/Go/modules/Go Gin"}},d={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"read file",id:"read-file",level:2},{value:"write file",id:"write-file",level:2},{value:"OpenFile \u6a21\u5f0f",id:"openfile-\u6a21\u5f0f",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsx)(n.h2,{id:"read-file",children:"read file"}),"\n",(0,i.jsxs)(n.p,{children:["golang \u901a\u8fc7 os \u5bf9\u6587\u4ef6\u8bfb\u5199\n",(0,i.jsx)(n.code,{children:"io/ioutil"})," \u8bfb\u5199\u6587\u4ef6\u8c03\u7528\u7684\u662f os \u7684\u65b9\u6cd5"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'\nimport {\n    . "fmt"\n    "io"\n    "bufio"\n}\n\nfunc read(fileName string) string {                                  // \u5feb\u901f\u8bfb\u53d6\u6587\u4ef6\u5168\u90e8\u5185\u5bb9\n    content, err := os.ReadFile(fileName)\n    if  err != nil {\n        panic(Sprintf("read %s failed: %s", fileName, err))\n    }\n    return string(content)\n}\n\nfunc readLine(fileName string) []string {                            // \u9010\u884c\u8bfb\u53d6\u6587\u4ef6, \u8fd4\u56de\u5b57\u7b26\u4e32\u5207\u7247, \u5207\u7247\u5143\u7d20\u7ed3\u5c3e\u65e0\u6362\u884c\u7b26\u53f7\n    file, err := os.OpenFile(fileName, os.O_RDONLY|os.O_CREATE, 0666)\n    if err != nil {\n        panic("read file error: ", err)\n    }\n    defer file.Close()\n\n    buf := bufio.NewReader(file)\n    content := []string{}\n    for {\n        line, _, err := buf.ReadLine()\n        if err == io.EOF {\n            break\n        }\n        content = append(content, string(line))\n    }\n    return content\n}\n\nfunc readByte(fileName string, length int) string {                  // \u6bcf\u6b21\u8bfb\u53d6\u56fa\u5b9a\u957f\u5ea6\u5b57\u7b26\u4e32\n    file, err := os.OpenFile(fileName, os.O_RDONLY|os.O_CREATE, 0666)\n    if err != nil {\n        Println("read file error: ", err)\n    }\n    defer file.Close()\n\n    buf := make([]byte, length)\n    content := []byte{}\n    for {\n        _, err := file.Read(buf)\n        if err == io.EOF {\n            break\n        }\n        content = append(content, buf...)\n    }\n    return string(content)\n}\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"write-file",children:"write file"}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u4ef6\u5199\u5165\u5206\u4e24\u79cd: \u8986\u76d6\u5199\u5165, \u8ffd\u52a0\u5199\u5165\n\u6587\u4ef6\u5199\u5165\u51fd\u6570\u672c\u8d28\u662f\u5bf9 os.OpenFile \u7684\u5c01\u88c5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func write(fileName, s string) {                                     // \u6587\u4ef6\u8986\u76d6\u5199\u5165, \u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u81ea\u52a8\u65b0\u5efa\n    if err := os.WriteFile(fileName, []byte(s), 0666); err != nil {  // WriteFile \u662f\u5bf9 OpenFile \u7684\u5c01\u88c5\n        panic(Sprintf("write error: %v\\n", err))\n    }\n}\n\nfunc writeInit(fileName, s string) {                                 // \u8986\u76d6\u5199\u5165\u6587\u4ef6, \u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\n    file, err := os.OpenFile(fileName, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, 0666)\n    if err != nil {\n        panic(Sprintln("open file failed"))\n    }\n    defer file.Close()\n\n    if _, err := file.Write([]byte(s)); err != nil {                 // \u4e5f\u53ef\u7528 file.WriteString(s), \u672c\u8d28\u4e5f\u662f\u8c03\u7528 file.Write()\n        panic(Sprintf("write file failed: %v\\n", err))\n    }\n}\n\nfunc writeAdd(fileName, s string) {                                  // \u8ffd\u52a0\u5199\u5165\u6587\u4ef6, \u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\n    file, err := os.OpenFile(fileName, os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0666)\n    if err != nil {\n        panic(Sprintln("open file failed"))\n    }\n    defer file.Close()\n\n    if _, err := file.Write([]byte(s)); err != nil {\n        panic(Sprintf("write file failed: %v\\n", err))\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"openfile-\u6a21\u5f0f",children:"OpenFile \u6a21\u5f0f"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"model"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"mean"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_RDONLY"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u6253\u5f00\u6a21\u5f0f, \u53ea\u80fd\u9009 3 \u9009 1, read only \u7f29\u5199, \u53ea\u8bfb"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_WRONLY"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u6253\u5f00\u6a21\u5f0f, \u53ea\u80fd\u9009 3 \u9009 1, write only \u7f29\u5199, \u53ea\u5199"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_RDWR"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u6253\u5f00\u6a21\u5f0f, \u53ea\u80fd\u9009 3 \u9009 1, read write \u7f29\u5199, \u8bfb\u5199"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_APPEND"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u64cd\u4f5c\u6a21\u5f0f, \u53ef\u591a\u9009\u642d\u914d, append, \u8ffd\u52a0\u5199\u5165"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_TRUNC"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u64cd\u4f5c\u6a21\u5f0f, \u53ef\u591a\u9009\u642d\u914d, truncate \u7f29\u5199, \u6253\u5f00\u6587\u4ef6\u65f6\u6e05\u7a7a\u6587\u4ef6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_CREATE"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u64cd\u4f5c\u6a21\u5f0f, \u53ef\u591a\u9009\u642d\u914d, create, \u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"O_EXCL"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u64cd\u4f5c\u6a21\u5f0f, \u53ef\u591a\u9009\u642d\u914d, exclusive \u7f29\u5199, \u548c O_CREATE \u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528, \u6587\u4ef6\u5fc5\u987b\u4e0d\u5b58\u5728"})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);