"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9539],{2904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=n(4848),r=n(8453);const c={author:"facsert",pubDatetime:new Date("2024-08-12T11:24:43.000Z"),title:"Go Context",slug:"Go Context",featured:!1,draft:!1,tags:["Go"],description:"Go \u4e0a\u4e0b\u6587"},i=void 0,a={id:"Go/tutorial/go-context",title:"Go Context",description:"Go \u4e0a\u4e0b\u6587",source:"@site/docs/Go/tutorial/go-context.md",sourceDirName:"Go/tutorial",slug:"/Go/tutorial/Go Context",permalink:"/docs/Go/tutorial/Go Context",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/tutorial/go-context.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-08-12T11:24:43.000Z",title:"Go Context",slug:"Go Context",featured:!1,draft:!1,tags:["Go"],description:"Go \u4e0a\u4e0b\u6587"},sidebar:"tutorialSidebar",previous:{title:"07.Go Interface",permalink:"/docs/Go/tutorial/07.Go Interface"},next:{title:"Go Goroutine",permalink:"/docs/Go/tutorial/Go Goroutine"}},s={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"context.Context"})," \u7528\u4e8e\u5728\u591a\u4e2a\u534f\u7a0b\u4e2d\u8bbe\u7f6e\u622a\u6b62\u65f6\u95f4, \u540c\u6b65\u4fe1\u53f7, \u4f20\u9012\u503c"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"\ntype Context interface {\n    // \u622a\u81f3\u65f6\u95f4\n    Deadline() (deadline time.Time, ok bool)\n    // context \u88ab\u53d6\u6d88\u540e\u5173\u95ed\n    Done() <-chan struct{}\n    // \u7ed3\u675f\u539f\u56e0, \u8d85\u65f6(DeadlineExceeded)/\u53d6\u6d88(Canceled)\n    Err() error\n    // \u5b58\u53d6\u952e\u503c\u5bf9\n    Value(key interface{}) interface{}\n}\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'var wg sync.WaitGroup\n\n// \u521b\u5efa\u4e0a\u4e0b\u6587\u548c\u53d6\u6d88\u51fd\u6570, \u8bbe\u7f6e 3s \u8d85\u65f6\u65f6\u95f4\nctx, cancle := context.WithTimeout(context.Background(), 3*time.Second)\ndefer cancle()\n\nwork := func(ctx context.Context, t time.Duration) {\n    wait := 1 * time.Second\n    LOOP:\n        for {\n            select {\n            case <- ctx.Done():\n                fmt.Printf("work done %v\\n", ctx.Err())\n                break LOOP\n            default:\n                if (wait > t) {\n                    fmt.Printf("timeout with %v %v\\n", t, ctx.Err())\n                    break LOOP\n                }\n                wait += 1 * time.Second\n                time.Sleep(1*time.Second)\n            }\n        }\n    wg.Done()\n}\n\nwg.Add(2)\ngo work(ctx, 4*time.Second)\ngo work(ctx, 2*time.Second)\n\n// \u6a21\u62df\u4e3b\u7ebf\u7a0b\u64cd\u4f5c\ntime.Sleep(3*time.Second)\n\n// \u4e3b\u52a8\u53d6\u6d88\ncancle()\nwg.Wait()\n\n> timeout with 2s <nil>       // \u5230\u8fbe work \u8bbe\u7f6e\u65f6\u95f4\u9000\u51fa\n> work done context canceled  // \u4e0a\u4e0b\u6587\u53d6\u6d88\u9000\u51fa\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u521b\u5efa ",(0,o.jsx)(t.code,{children:"context"})," \u540e, \u5c06\u5176\u4f5c\u4e3a\u534f\u7a0b\u53c2\u6570, \u591a\u4e2a\u534f\u7a0b\u5171\u7528\u540c\u4e00\u4e2a\u4e0a\u4e0b\u6587, \u5b9e\u73b0\u591a\u4e2a\u534f\u7a0b\u6d88\u606f\u540c\u6b65"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const r={},c=o.createContext(r);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);