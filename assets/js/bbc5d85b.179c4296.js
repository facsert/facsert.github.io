"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7294],{4966:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const s={pubDatetime:new Date("2024-09-23T14:20:43.000Z"),title:"Linux network",slug:"Linux network",featured:!1,draft:!1,tags:["Linux","network"],description:"\u7f51\u7edc"},o=void 0,a={id:"Linux/Linux-7.network",title:"Linux network",description:"\u7f51\u7edc",source:"@site/docs/Linux/Linux-7.network.md",sourceDirName:"Linux",slug:"/Linux/Linux network",permalink:"/docs/Linux/Linux network",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Linux-7.network.md",tags:[{inline:!0,label:"Linux",permalink:"/docs/tags/linux"},{inline:!0,label:"network",permalink:"/docs/tags/network"}],version:"current",frontMatter:{pubDatetime:"2024-09-23T14:20:43.000Z",title:"Linux network",slug:"Linux network",featured:!1,draft:!1,tags:["Linux","network"],description:"\u7f51\u7edc"},sidebar:"tutorialSidebar",previous:{title:"Linux crontab",permalink:"/docs/Linux/Linux crontab"},next:{title:"Mermaid basic",permalink:"/docs/Mermaid/Mermaid basic"}},l={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"IP \u5730\u5740",id:"ip-\u5730\u5740",level:2},{value:"IPV6 \u683c\u5f0f",id:"ipv6-\u683c\u5f0f",level:2},{value:"\u5b50\u7f51\u63a9\u7801",id:"\u5b50\u7f51\u63a9\u7801",level:2}];function d(n){const e={br:"br",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(e.p,{children:["\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u6307\u5c06\u591a\u4e2a\u8ba1\u7b97\u673a\u8fde\u63a5\u5728\u4e00\u8d77, \u5b9e\u73b0\u4fe1\u606f\u4ea4\u6362\u3001\u8d44\u6e90\u5171\u4eab\u548c\u6570\u636e\u4f20\u8f93\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf",(0,t.jsx)(e.br,{}),"\n","\u7cfb\u7edf\u4e2d\u7f51\u5173\u7ed9\u6bcf\u4e00\u53f0\u673a\u5668\u5206\u914d\u4e00\u4e2a IP \u5730\u5740, \u540c\u4e00\u7f51\u54af\u4e2d\u7684\u673a\u5668\u4e4b\u95f4\u901a\u8fc7 IP \u5730\u5740\u4e92\u76f8\u8bc6\u522b\u548c\u901a\u4fe1",(0,t.jsx)(e.br,{}),"\n","\u4e0d\u540c\u7f51\u7edc\u7684\u673a\u5668\u4e4b\u95f4\u65e0\u6cd5\u76f4\u63a5\u901a\u4fe1\uff0c\u9700\u8981\u901a\u8fc7\u8def\u7531\u5668\u8fdb\u884c\u4e2d\u8f6c"]}),"\n",(0,t.jsx)(e.mermaid,{value:"flowchart LR\n   subgraph \u7f51\u7edc\n      direction LR\n      subgraph \u5c40\u57df\u7f511\n         direction TB\n         A1[\u8bbe\u59071] --\x3e A(\u7f51\u51731)\n         A2[\u8bbe\u59072] --\x3e A(\u7f51\u51731)\n      end\n      subgraph \u5c40\u57df\u7f512\n         direction LR\n         B1[\u8bbe\u59071] --\x3e B(\u7f51\u51732)\n         B2[\u8bbe\u59072] --\x3e B(\u7f51\u51732)\n      end\n      subgraph \u5c40\u57df\u7f513\n         direction RL\n         C1[\u8bbe\u59071] --\x3e C(\u7f51\u51733)\n         C2[\u8bbe\u59072] --\x3e C(\u7f51\u51733)\n      end\n      A <--\x3e B <--\x3e C <--\x3e A\n   end"}),"\n",(0,t.jsx)(e.h2,{id:"ip-\u5730\u5740",children:"IP \u5730\u5740"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"IPV4: 32 \u4f4d\u4e8c\u8fdb\u5236(2^32), \u901a\u5e38\u8f6c\u5316\u4e3a 4 \u7ec4(\u4e00\u7ec40-255)10\u8fdb\u5236\u8868\u793a(256^4=2^32), \u4ece 0.0.0.0 \u5230 255.255.255.255, \u5730\u5740\u5df2\u7528\u5c3d"}),"\n",(0,t.jsxs)(e.li,{children:["IPV6: 128 \u4f4d\u4e8c\u8fdb\u5236(2^128), \u901a\u5e38\u7528 8 \u7ec4 4 \u4f4d 16 \u8fdb\u5236(16^4^8=2^128), 0000:0000:00..(8\u7ec4 32\u4e2a0) \u5230 FFFF:FFFF",":FF","..(8\u7ec4 32\u4e2aF)"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:" # linux macos \u67e5\u770b IP \u5730\u5740\n $ ip a\n $ ifconfig\n\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.31.239.107  netmask 255.255.240.0  broadcast 172.31.239.255\n        inet6 fe80::215:5dff:fe0d:d89f  prefixlen 64  scopeid 0x20<link>\n        ether 00:15:5d:0d:d8:9f  txqueuelen 1000  (Ethernet)\n        RX packets 77958  bytes 50386965 (50.3 MB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 39222  bytes 5389894 (5.3 MB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10<host>\n        loop  txqueuelen 1000  (Local Loopback)\n        RX packets 754324  bytes 666443571 (666.4 MB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 754324  bytes 666443571 (666.4 MB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n \n # windows \u67e5\u770b IP \u5730\u5740\n $ ipconfig\n\n\u4ee5\u592a\u7f51\u9002\u914d\u5668 \u4ee5\u592a\u7f51 2:\n\n   \u8fde\u63a5\u7279\u5b9a\u7684 DNS \u540e\u7f00 . . . . . . . .: openstacklocal \n   IPv4 \u5730\u5740 . . . . . . . . . . . . : 10.1.1.15\n   IPv6 \u5730\u5740 . . . . . . . . . . . . : fe80::42e:23ba:5f50:4232%16\n   \u5b50\u7f51\u63a9\u7801  . . . . . . . . . . . . : 255.255.255.0\n   \u9ed8\u8ba4\u7f51\u5173. . . . . . . . . . . . . : 10.1.112.1\n\n\u4ee5\u592a\u7f51\u9002\u914d\u5668 vEthernet (WSL (Hyper-V firewall)):\n\n   \u8fde\u63a5\u7279\u5b9a\u7684 DNS \u540e\u7f00 . . . . . . . :\n   IPv4 \u5730\u5740 . . . . . . . . . . . . : 172.31.224.1\n   \u5b50\u7f51\u63a9\u7801  . . . . . . . . . . . . : 255.255.240.0\n   \u9ed8\u8ba4\u7f51\u5173. . . . . . . . . . . . . :\n"})}),"\n",(0,t.jsx)(e.h2,{id:"ipv6-\u683c\u5f0f",children:"IPV6 \u683c\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"IPV6 \u670932\u5b57\u7b26, \u4e3a\u7b80\u4fbf\u8bfb\u5199\u8bbe\u5b9a\u4e86\u4e00\u4e9b\u538b\u7f29\u683c\u5f0f\u7b80\u5199, \u673a\u5668\u53ef\u4ee5\u6309\u89c4\u5219\u8865\u5168\u6062\u590d\u539f\u6709\u7684 IPV6 \u5730\u5740"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:" # \u4e00\u7ec4 4 \u4e2a\u5b57\u7b26\u6216\u8fde\u7eed\u591a\u7ec4\u5168\u4e3a 0 \u7b80\u5199\u4e3a ::(\u907f\u514d\u591a\u79cd\u6062\u590d\u7ed3\u679c, \u4e00\u4e2aIPV6\u5730\u5740\u53ea\u80fd\u51fa\u73b0 1 \u6b21)\n 0000:0000:0000:0000:0000:0000:0000:0000 -> ::\n \n # \u6b64\u79cd\u7b80\u5199\u4f1a\u5bfc\u81f4\u8865\u4f4d\u51fa\u73b0\u591a\u79cd\u60c5\u51b5, \u6240\u4ee5\u4e0d\u5141\u8bb8\u591a\u4e2a ::\n 0000:0000:0001:0000:0000:0001:0000:0000 -> ::0001::0001::\n\n # 16 \u8fdb\u5236\u4e2d 00A0 = A0, \u6570\u5b57\u4e2d\u524d\u7f6e\u7684 0 \u4e0d\u5f71\u54cd\u5927\u5c0f, \u4e5f\u9002\u7528\u4e8e IPV6\n 0000:0000:0000:0001:0000:0000:0002:0000 -> ::1:0:0:2:0\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5b50\u7f51\u63a9\u7801",children:"\u5b50\u7f51\u63a9\u7801"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a\u4e86\u5bf9\u5c40\u57df\u7f51\u4e0b\u7684\u8bbe\u5907\u8fdb\u884c\u5206\u7c7b, \u8bbe\u8ba1\u4e86\u5b50\u7f51\u63a9\u7801\u5bf9\u7f51\u6bb5\u8fdb\u884c\u5212\u5206(\u5982\u5c40\u57df\u7f51\u4e0b\u53ef\u7528 IP \u5730\u5740\u5212\u5206 3 \u7ec4, \u6bcf\u7ec450\u4e2a IP \u5730\u5740)",(0,t.jsx)(e.br,{}),"\n","\u5b50\u7f51\u63a9\u7801\u4e2d 1 \u7684\u4f4d\u7f6e\u8868\u793a\u7f51\u7edc\u90e8\u5206(\u7f51\u6bb5\u5206\u7ec4), 0 \u7684\u4f4d\u7f6e\u8868\u793a\u4e3b\u673a\u90e8\u5206(\u8bbe\u5907)"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# C \u7c7b\u5730\u5740\u7684\u5b50\u7f51\u63a9\u7801\u4e3a 255.255.255.0, 3 \u7ec4\u9700\u8981 2 \u4f4d\u8868\u793a(2^2), 50 \u4e2a IP \u5730\u5740\u9700\u8981 6 \u4f4d(2^6)\n# \u5b9e\u9645\u5212\u5206\u7f51\u6bb5, \u6bcf\u4e2a\u7f51\u6bb5\u8fd8\u5fc5\u987b\u8981\u6709\u7f51\u7edc\u5730\u5740(\u7b2c\u4e00\u4e2a)\u548c\u5e7f\u64ad\u5730\u5740(\u6700\u540e\u4e00\u4e2a), \u5373\u6bcf\u4e2a\u7f51\u6bb5 52 \u5730\u5740\n11111111.11111111.11111111.11000000 -> 255.255.255.192\nA\u5b50\u7f51\u7684\u7f51\u7edc\u5730\u5740\uff1a192.168.0.0/26, \u53ef\u7528\u5730\u5740\uff08192.168.0.1\uff5e192.168.0.62\uff09, \u5e7f\u64ad\u5730\u5740\uff1a192.168.0.63/26\nB\u5b50\u7f51\u7684\u7f51\u7edc\u5730\u5740\uff1a192.168.0.64/26, \u53ef\u7528\u5730\u5740\uff08192.168.65\uff5e192.168.0.126\uff09, \u5e7f\u64ad\u5730\u5740\uff1a192.168.0.127\nC\u5b50\u7f51\u7684\u7f51\u7edc\u5730\u5740\uff1a192.168.0.128/26, \u53ef\u7528\u5730\u5740\uff08192.168.129\uff5e192.168.0.190\uff09, \u5e7f\u64ad\u5730\u5740\uff1a192.168.0.191\n\n# \u5b50\u7f51\u63a9\u7801\u4e8c\u8fdb\u5236\u4e2d\u6709 26 \u4f4d\u4e3a 1, \u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u52a0\u5728 IP \u5730\u5740\u540e\u4e00\u540c\u8868\u793a 192.168.0.0/26\n\n# \u4e00\u822c\u5bb6\u5ead\u7f51\u7edc\u90fd\u4e3a C \u7c7b\u5730\u5740, \u6240\u4ee5\u5b50\u7f51\u63a9\u7801\u4e00\u822c\u4e3a 255.255.255.0(\u5373\u4e0d\u5206\u7ec4)\n# \u7f51\u7edc\u5730\u5740(\u5b50\u7f51\u5730\u5740 netmask), \u4e00\u822c\u4e3a\u7b2c\u4e00\u4e2a IP \u5730\u5740, \u5e38\u4e3a 192.168.1.0\n# \u7f51\u5173(\u8def\u7531\u5668\u5730\u5740 gateway), \u4e00\u822c\u4e3a\u7b2c\u4e00\u4e2a\u53ef\u7528 IP \u5730\u5740, \u5e38\u4e3a 192.168.1.1\n# \u5e7f\u64ad\u5730\u5740, \u4e00\u822c\u4e3a\u6700\u540e\u4e00\u4e2a IP \u5730\u5740, \u5e38\u4e3a 192.168.1.255\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);