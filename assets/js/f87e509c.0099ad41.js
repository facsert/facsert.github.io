"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6214],{95144:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>x});var s=t(74848),l=t(28453);const d={pubDatetime:new Date("2022-07-19T15:28:43.000Z"),title:"Linux Text",slug:"Linux Text",featured:!1,draft:!1,tags:["Linux"],description:"Linux \u6587\u672c\u64cd\u4f5c"},r=void 0,i={id:"Linux/Linux-3-text",title:"Linux Text",description:"Linux \u6587\u672c\u64cd\u4f5c",source:"@site/docs/Linux/Linux-3-text.md",sourceDirName:"Linux",slug:"/Linux/Linux Text",permalink:"/docs/Linux/Linux Text",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Linux-3-text.md",tags:[{inline:!0,label:"Linux",permalink:"/docs/tags/linux"}],version:"current",frontMatter:{pubDatetime:"2022-07-19T15:28:43.000Z",title:"Linux Text",slug:"Linux Text",featured:!1,draft:!1,tags:["Linux"],description:"Linux \u6587\u672c\u64cd\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"Linux File",permalink:"/docs/Linux/Linux File"},next:{title:"Linux System",permalink:"/docs/Linux/Linux System"}},c={},x=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u6587\u672c\u641c\u7d22",id:"\u6587\u672c\u641c\u7d22",level:2},{value:"grep",id:"grep",level:3},{value:"wc",id:"wc",level:3},{value:"\u6587\u672c\u7f16\u8f91",id:"\u6587\u672c\u7f16\u8f91",level:2},{value:"xargs",id:"xargs",level:3},{value:"sort",id:"sort",level:3},{value:"tr",id:"tr",level:3},{value:"sed",id:"sed",level:3},{value:"awk",id:"awk",level:3},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f",id:"\u6b63\u5219\u8868\u8fbe\u5f0f",level:2},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\u793a\u4f8b",id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u793a\u4f8b",level:3}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(e.h2,{id:"\u6587\u672c\u641c\u7d22",children:"\u6587\u672c\u641c\u7d22"}),"\n",(0,s.jsx)(e.p,{children:"\u8bfb\u53d6\u6587\u672c\u5185\u5bb9\u641c\u7d22\u6216\u5237\u9009\u7b26\u5408\u6761\u4ef6\u7684\u5185\u5bb9"}),"\n",(0,s.jsx)(e.h3,{id:"grep",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/grep.html",children:"grep"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"global search regular expression and print out the line"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6587\u672c\u641c\u7d22\u548c\u7b5b\u9009"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:' $ grep <patten> <file>                          # \u4ece\u6587\u4ef6\u4e2d\u7b5b\u9009\u51fa\u7b26\u5408\u6a21\u5f0f\u7684\u884c, \u53ef\u641c\u7d22\u591a\u4e2a\u6587\u4ef6\n $ egrep <regex> <file>                          # \u4e0e grep -E \u7c7b\u4f3c\n\n $ grep "3r" host.txt                            # grep \u4f1a\u663e\u793a\u6240\u6709\u5305\u542b \u201c3r\u201d \u7684\u884c\n > 3rd\n\n $ cat host.txt | grep "3r"                      # \u4e0e\u4e0a\u8ff0\u547d\u4ee4\u6548\u679c\u4e00\u81f4\n > 3rd\n\n $ grep -nE "[0-9]th" host.txt                   # \u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d, \u5e76\u663e\u793a\u884c\n > 4:4th\n > 5:5th\n\n $ cat host.txt | egrep -i "[0-9]TH" | grep -v 5 # \u591a\u6b21\u7ba1\u9053\u7b5b\u9009\u884c, egrep \u4e0e grep -E \u4e00\u81f4\n > 4th                                           # \u901a\u8fc7\u6b63\u5219\u5ffd\u7565\u5927\u5c0f\u5199\u7b5b\u9009, \u53bb\u9664\u5305\u542b 5 \u7684\u884c\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"parameter"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"meaning"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"c"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--count"})," \u53ea\u663e\u793a\u5339\u914d\u884c\u7684\u6570\u91cf"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"E"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--extend-regexp"})," \u4f7f\u7528\u6b63\u5219\u5339\u914d"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"i"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--ignore-case"})," \u5ffd\u7565\u5927\u5c0f\u5199"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"o"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--only-matching"})," \u53ea\u663e\u793a\u5339\u914d\u5230\u5185\u5bb9, \u540c\u884c\u5176\u5b83\u5185\u5bb9\u4e0d\u663e\u793a"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"n"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--line-number"})," \u540c\u65f6\u663e\u793a\u884c\u6570"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"v"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--revert-match"})," \u53cd\u8f6c\u67e5\u627e, \u663e\u793a\u4e0d\u5339\u914d\u7684\u6240\u6709\u884c"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"w"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--word-regexp"})," \u5355\u8bcd\u5168\u5339\u914d, \u5b58\u5728\u8be5\u5355\u8bcd\u7684\u884c, \u4e0d\u5305\u542b\u5b50\u5b57\u7b26\u4e32"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"x"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"--line-regexp"})," \u884c\u5168\u5339\u914d, \u5fc5\u987b\u4e0e\u884c\u5b8c\u5168\u4e00\u81f4"]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"wc",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/wc.html",children:"wc"})}),"\n",(0,s.jsx)(e.p,{children:"Word count \u6587\u5b57\u8ba1\u6570"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ wc -c                                         # --bytes char \u7edf\u8ba1\u5b57\u7b26\u6570\u91cf\n $ wc -w                                         # --words \u7edf\u8ba1\u5355\u8bcd\u6570\u91cf\n $ wc -l                                         # --lines \u7edf\u8ba1\u884c\u7684\u6570\u91cf\n\n $ cat host.txt | wc -l                          # wc \u662f\u4ee5\u884c\u5c3e\u662f\u5426\u6709\u6362\u884c\u7b26\u53f7\u5224\u65ad\u4e3a\u4e00\u884c\n > 4 host.txt                                    # \u5b9e\u9645\u6709 5 \u884c, \u7b2c 5 \u884c\u7ed3\u5c3e\u6ca1\u6709\u6362\u884c\u7b26\u53f7\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6587\u672c\u7f16\u8f91",children:"\u6587\u672c\u7f16\u8f91"}),"\n",(0,s.jsx)(e.h3,{id:"xargs",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/xargs.html",children:"xargs"})}),"\n",(0,s.jsx)(e.p,{children:"extended arguments: \u6587\u672c\u683c\u5f0f\u8f6c\u6362\u4e0e\u6269\u5145"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:' $ <command> | xargs <options> <command>         # \u5904\u7406\u5de6\u8fb9\u547d\u4ee4\u7684\u8f93\u51fa, \u5e76\u4f5c\u4e3a\u53f3\u8fb9\u547d\u4ee4\u7684\u8f93\u5165\u6267\u884c\n\n $ echo "end" | xargs echo "start"               # \u5c06 "end" \u4f20\u9012\u7ed9\u53f3\u8fb9 echo \u547d\u4ee4\n > start end                                     # \u4e0e echo "start" "end" \u4e00\u81f4\n\n $ cat host.txt | xargs -n 3                     # \u8bfb\u53d6\u6587\u672c\u5185\u5bb9, \u4fee\u6539\u683c\u5f0f, \u6bcf\u884c 3 \u4e2a\u5b57\u7b26\u4e32\n > 1st 2nd 3rd                                   # xargs \u53f3\u8fb9\u4e0d\u586b\u547d\u4ee4, \u9ed8\u8ba4\u4f7f\u7528 echo\n > 4th 5th\n\n $ echo "1-2-3-4" | xargs -d \'-\' -n 2            # \u4ee5 \'-\' \u5206\u5272\u5b57\u7b26\u4e32, \u5206\u9694\u7b26\u53f7\u53ef\u4ee5\u662f\u5355\u4e2a\u5b57\u7b26,\u5355\u4e2a\u6570\u5b57\u6216\u5355\u4e2a\u5b57\u6bcd\n > 1 2                                           # \u6bcf\u884c\u663e\u793a\u4e24\u4e2a\u5b57\u7b26\u4e32\n > 3 4\n\n $ echo "1 2 3"| xargs -n1 echo line             # xargs -n1, \u6bcf\u884c\u4e00\u4e2a\u5b57\u7b26\u4e32, \u5c06 1 \u884c\u5206\u5272\u4e3a 3 \u884c\n > line 1\n > line 2\n > line 3\n\n $ echo "1 2 3"| xargs -n 1 | xargs -i echo "line {} end"\n > line 1 end                                    # xargs -n 1, \u6bcf\u884c\u4e00\u4e2a\u5b57\u7b26\u4e32, \u5c06 1 \u884c\u5206\u5272\u4e3a 3 \u884c\n > line 2 end                                    # -i \u4f7f\u7528 {} \u53d8\u91cf\u66ff\u6362, \u6bcf\u4e00\u884c\u5185\u5bb9\u66ff\u6362\u6389 {} \u6267\u884c\n > line 3 end\n\n $ cat host.txt | xargs -I num sh -c \'echo num start; echo num end\'\n > 1st start                                     # -I \u8bbe\u7f6e\u53d8\u91cf num(\u53ef\u81ea\u5b9a\u4e49), \u4f9b\u540e\u7eed\u591a\u6761\u547d\u4ee4\u6267\u884c\n > 1st end                                       # \u6267\u884c\u4e24\u6b21 echo \u547d\u4ee4, num \u66ff\u6362\u4e3a cat \u7684\u8f93\u51fa\n > 2nd start\n > 2nd end\n'})}),"\n",(0,s.jsx)(e.h3,{id:"sort",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/sort.html",children:"sort"})}),"\n",(0,s.jsx)(e.p,{children:"\u6587\u672c\u884c\u6392\u5e8f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:' $ sort <file>                                   # \u6309\u6bcf\u884c\u7b2c\u9996\u5b57\u7b26\u7684 ASCII \u7801\u503c\u987a\u5e8f\u6392\u5e8f, \u76f8\u540c\u5219\u5f80\u540e\u4e00\u4e2a\u4e00\u4e2a\u6bd4\u8f83\n\n $ sort host.txt                                 # \u6309\u6bcf\u884c\u5b57\u7b26 ASCII \u9010\u4e2a\u6392\u5e8f\n > 128-1st-1                                     # \u6bcf\u884c\u5f00\u5934\u5206\u522b\u662f 1 2 3, \u6309\u987a\u5e8f\u6392\u5e8f\n > 255-3rd-2\n > 32-2nd-0\n\n $ sort -n host.txt                              # \u6839\u636e\u6570\u503c\u6bd4\u8f83, \u82e5\u662f\u5b57\u6bcd\u5f00\u5934, \u6309\u5355\u4e2a\u5b57\u7b26\u7684 ASCII \u6570\u503c\u6bd4\u8f83\n > 32-2nd-0                                      # \u6bcf\u884c\u5f00\u5934\u6570\u503c\u662f 32 128 255, \u6839\u636e\u5927\u5c0f\u6392\u5e8f\n > 128-1st-1                                     # \u82e5\u5f00\u5934\u662f\u5b57\u7b26, \u6309\u5355\u4e2a\u5b57\u7b26 ASCII \u6570\u503c\u6392\u5e8f\n > 255-3rd-2\n\n$ sort -t "-" -k 4 -n host.txt                   # \u4ee5 \'-\' \u4e3a\u5206\u5272\u7b26\u53f7, \u53d6\u7b2c 4 \u5217\u6309\u6570\u503c\u6392\u5e8f\n > c-32-2nd-0                                    # -t "-" \u4ee5 - \u7b26\u53f7\u5206\u9694\u884c\n > b-128-1st-1                                   # -k \u53d6\u7b2c 4 \u5217\n > a-255-3rd-2                                   # -n \u6839\u636e\u6570\u503c\u6392\u5e8f\n\n $ sort -r <file>                                # --reverse \u53cd\u5411\u6392\u5e8f\n $ sort -u <file>                                # --unique \u4e0d\u663e\u793a\u91cd\u590d\u7684\u884c\n'})}),"\n",(0,s.jsx)(e.h3,{id:"tr",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/tr.html",children:"tr"})}),"\n",(0,s.jsx)(e.p,{children:"transform \u6587\u672c\u66ff\u6362 \u538b\u7f29 \u5220\u9664"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ tr <option> <parameter>                       # \u6587\u672c\u66ff\u6362, \u5220\u9664, \u5408\u5e76\u76f8\u90bb\u91cd\u590d\n\n $ cat host.txt | tr 'a-z' 'A-Z' | tr \"-\" \"=\"    # \u5c0f\u5199\u5168\u66ff\u6362\u4e3a\u5927\u5199, - \u66ff\u6362\u4e3a =\n > 1ST=1\n > 2ND=0\n > 3RD=2\n\n $ echo \"aaccbbcc\" | tr -s 'ac'                  # -s \u538b\u7f29\u591a\u4e2a\u8fde\u7eed a \u6216\u591a\u4e2a\u8fde\u7eed c \u4e3a 1 \u4e2a\n > acbbc                                         # \u4ec5\u9650\u4e8e\u5355\u4e2a\u5b57\u7b26\u91cd\u590d, \u4e14\u76f8\u90bb\u91cd\u590d\u624d\u4f1a\u751f\u6548\n\n $ cat host.txt | xargs | tr -d '0-9'            # \u5220\u9664\u6587\u4ef6\u5185\u6240\u6709\u6570\u5b57\n > st- nd- rd-                                   # -d \u540e\u7684\u5185\u5bb9\u9010\u4e00\u5220\u9664, \u5373\u5220\u9664 0 1 2 3 4 5 6 7 8 9\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6ce8: tr \u66ff\u6362\u6216\u5220\u9664\u65f6\u628a\u5b57\u7b26\u96c6\u770b\u505a",(0,s.jsx)(e.strong,{children:"\u591a\u4e2a\u5b57\u7b26"}),"\u8fdb\u884c\u64cd\u4f5c\n\u5982 tr -d 'abc' \u8868\u793a\u5220\u9664\u6587\u672c\u4e2d\u6240\u6709 a b c \u5b57\u7b26"]}),"\n",(0,s.jsx)(e.h3,{id:"sed",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/sed.html",children:"sed"})}),"\n",(0,s.jsx)(e.p,{children:"stream editor \u6d41\u5f0f\u7f16\u8f91"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ sed <option> <range> <model> <file>\n\n > option: \u53c2\u6570\n >   -i: sed \u7684\u4fee\u6539\u7ed3\u679c\u5199\u5165\u6587\u4ef6\n >   -n: \u8f93\u51fa\u7ed3\u679c, \u4e0e p \u5408\u7528\u53ea\u6253\u5370\u4fee\u6539\u7684\u884c\n >   -e: \u4e32\u8054\u591a\u4e2a sed \u6307\u4ee4\n\n > range: \u884c\u53f7\u6216\u8005\u6b63\u5219\u7b5b\u9009\u8303\u56f4\n >   \u884c\u53f7: '3' \u7b2c\u4e09\u884c; '2,5' 2\u52305\u884c; '1~2' \u5947\u6570\u884c; '2~2' \u5076\u6570\u884c;\n >   \u6b63\u5219: '/[0-9]/' \u542b\u6709\u6570\u5b57\u7684\u884c;  '/1st/,/3rd/' 1st \u884c\u548c 3rd \u4e4b\u95f4\u6240\u6709\u884c\n\n > model: \u64cd\u4f5c\u6a21\u5f0f\n >   p: \u6253\u5370\u6a21\u5f0f\n >   d: \u5220\u9664\u6a21\u5f0f\n >   s: \u66ff\u6362\u6a21\u5f0f\n >   <n>g: \u4e0e s \u66ff\u6362\u6a21\u5f0f\u5408\u7528, \u6807\u660e\u66ff\u6362\u6b21\u6570\n >   a\\: \u884c\u5c3e\u8ffd\u52a0\n >   i\\: \u884c\u9996\u63d2\u5165\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"select \u7b5b\u9009"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ sed <option> <line index> file                # \u6839\u636e\u884c\u5e8f\u53f7\u7b5b\u9009\u884c\n $ sed <option> <regex> file                     # \u6839\u636e\u5173\u952e\u5b57\u7b5b\u9009\u884c\n\n $ sed -n '2,$p' host.txt                        # \u622a\u53d6\u7b2c\u4e8c\u884c\u5230\u6700\u540e\u4e00\u884c $ \u4ee3\u8868\u6700\u540e\u4e00\u884c\n > 2nd-0                                         # \u4f7f\u7528 -n \u53c2\u6570\u548c p \u6253\u5370\u7b26\u5408\u9700\u6c42\u7684\u884c\n > 3rd-2\n\n $ sed -n '/[a-z]d/p' host.txt                   # \u7b5b\u9009\u5305\u542b \u5b57\u6bcd+d \u7684 \u884c\n > 2nd-0\n > 3rd-2\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"delete \u5220\u9664"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ sed <option> <line index> d file                # \u6839\u636e\u884c\u5e8f\u53f7\u7b5b\u9009\u884c\n $ sed <option> <regex> d file                     # \u6839\u636e\u5173\u952e\u5b57\u7b5b\u9009\u884c\n\n $ sed '$d' host.txt                               # \u5220\u9664\u6700\u540e\u4e00\u884c\n > 1st-1                                           # \u663e\u793a\u5220\u9664\u540e\u5269\u4f59\u7684\u884c, \u6587\u4ef6\u4fdd\u6301\u4e0d\u53d8\n > 2nd-0\n\n $ sed -i '/0$/d' host.txt                         # \u5220\u9664\u4ee5 0 \u4e3a\u7ed3\u5c3e\u7684\u884c\n > 1st-1                                           # -i \u663e\u793a\u5220\u9664\u540e\u5269\u4f59\u7684\u884c, \u5e76\u5c06\u4fee\u6539\u5199\u5165\u6587\u4ef6\n > 3rd-2\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"replace \u66ff\u6362"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ sed <option> 's/<before>/<after>/<n>g' <file> # \u9010\u884c\u66ff\u6362, s \u66ff\u6362\u6a21\u5f0f; <n>g \u66ff\u6362 n \u6b21, n \u4e0d\u586b\u5219\u5168\u66ff\u6362\n\n $ echo \"hi hi ha\" | sed 's/hi/ha/g'             # \u5c06 hi \u66ff\u6362\u4e3a ha, n \u672a\u586b, \u5168\u66ff\u6362\n > ha ha ha\n\n $ echo \"hi hi ha\" | sed 's:hi:ha:'              # \u5c06 hi \u66ff\u6362\u4e3a ha, \u6ca1\u6709 g, \u53ea\u66ff\u6362\u4e00\u6b21\n > ha hi ha                                      # \u5b9a\u754c\u7b26\u9664\u4e86 / \u4e5f\u53ef\u4ee5\u7528 : , \u6216 |\n\n $ sed -i 's/-[0-3]/=end/1g' host.txt && cat host.txt\n > 1st=end                                       # -i, \u4e0d\u663e\u793a\u7ed3\u679c, \u5c06\u4fee\u6539\u5199\u5165\u6587\u4ef6\n > 2nd=end                                       # \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f, \u5c06 -1 -2 -3 \u90fd\u66ff\u6362\u4e3a =end\n > 3rd=end                                       # \u7ed3\u5c3e\u6ca1\u6709 g, \u53ea\u66ff\u6362\u4e00\u6b21\n\n $ sed -n 's/nd\\|rd/th/gp' host.txt              # -n \u548c p \u5408\u7528\u6253\u5370\u5339\u914d\u7684\u884c\n > 2th-0                                         # \u5c06 nd \u6216 rd \u66ff\u6362\u4e3a th\n > 3th-2\n\n $ sed 's/.d/(& or th)/g' host.txt               # \u4f7f\u7528 & \u505a\u53d8\u91cf\u66ff\u6362\n > 1st-1\n > 2(nd or th)-0\n > 3(rd or th)-2\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"add insert \u8ffd\u52a0 \u63d2\u5165"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ sed <option> <regex> <a\\ i\\> <string> <file>  #\n\n $ sed '/1st/a\\first line' host.txt              # \u5728\u5305\u542b 1st \u7684\u884c\u7ed3\u5c3e\u6dfb\u52a0 first line\n > 1st-1                                         # \u884c\u7ed3\u5c3e\u662f\u6362\u884c\u7b26, \u8ffd\u52a0\u5185\u5bb9\u5728\u6362\u884c\u7b26\u540e, \u5373\u4e0b\u4e00\u884c\n > first line\n > 2nd-0\n > 3rd-2\n\n $ sed '/1st/1\\first line' host.txt              # \u5728\u5305\u542b 1st \u7684\u884c\u5f00\u5934\u6dfb\u52a0 first line\n > first line\n > 1st-1\n > 2nd-0\n > 3rd-2\n"})}),"\n",(0,s.jsx)(e.h3,{id:"awk",children:(0,s.jsx)(e.a,{href:"https://linux.alianga.com/c/awk.html",children:"awk"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:' $ awk \'BEGIN{ commands } pattern{ commands } END{ commands }\' <file>\n\n > BEGIN{ commands }: \u64cd\u4f5c\u6587\u672c\u524d\u6267\u884c, \u9009\u586b, \u4e00\u822c\u7528\u4e8e\u521d\u59cb\u5316\u53d8\u91cf\n > pattern{ commands }: \u884c\u64cd\u4f5c, \u5faa\u73af\u4f53, \u5bf9\u6bcf\u884c\u6267\u884c\n > END{ commands }: \u6bcf\u6b21\u6267\u884c\u5b8c\u884c\u64cd\u4f5c\u540e\u6267\u884c, \u9009\u586b, \u4e00\u822c\u7528\u4e8e\u6253\u5370\u884c\u64cd\u4f5c\u7ed3\u679c\n\n $ awk \'BEGIN{i=0} {i++} END{print i}\' host.txt  # \u6253\u5370\u6587\u672c\u884c\n > 3                                             # \u521d\u59cb\u5316 i, \u6bcf\u904d\u5386\u4e00\u884c, i + 1, \u6700\u540e\u6253\u5370 i\n\n $ awk \'{print $1, $NF, "index:"NR}\' host.txt    # \u4ee5\u7a7a\u683c\u4e3a\u5206\u9694,\u6253\u5370\u7b2c 1 \u5217, \u6700\u540e\u4e00\u5217\u53ca\u884c\u5e8f\u53f7\n > 1st first index:1                             # $0 \u8868\u793a\u6574\u884c, $<n> \u8868\u793a\u7b2cn\u5217, \u672a\u6307\u5b9a\u5206\u9694\u7b26\u53f7\u9ed8\u8ba4\u7a7a\u683c\u4e3a\u5206\u9694\n > 2nd second index:2                            # $NF \u8868\u793a\u6700\u540e\u4e00\u5217 $(NF-<N>) \u5012\u6570\u7b2c n \u5217\n > 3rd third index:3                             # NR \u8868\u793a\u884c\u5e8f\u53f7, \u4e0d\u9700\u8981 $\n\n $ num=2; awk -F \'=\' -v col=$num  \'{print  "line: "NR " column " col": "  $col}\' host.txt\n > line: 1 column 2: 1                           # -F "=" \u4ee5 = \u4e3a\u5206\u9694\u7b26\u53f7, \u4e0e \'BEGIN{ FS = "=" }\' \u6548\u679c\u4e00\u81f4\n > line: 2 column 2: 0                           # -v col=$num \u4ece\u5916\u90e8\u6dfb\u52a0\u53d8\u91cf\u8d4b\u503c\u7ed9 col\n > line: 3 column 2: 2                           # "" \u5185\u5bb9\u6253\u5370, \u53d8\u91cf\u81ea\u52a8\u66ff\u6362, $<n> \u53d6\u7b2c n \u5217\n\n /dev/sda1  234G  191G   31G  87%   /\n |-------|  |--|  |--|   |--| |-| |--------|\n    $1       $2    $3     $4   $5  $6 ($NF)   NR: line index\n |-----------------------------------------|\n                    $0\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"select \u7b5b\u9009"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" $ awk <pattern> { command }\n\n $ awk 'NR%2==1, $3 ~ /ir/ {print $0}' host.txt  # \u901a\u8fc7\u8868\u8fbe\u5f0f\u7b5b\u9009\u7b26\u5408\u6761\u4ef6\u7684\u884c\n > 1st 1 first                                   # NR%2 == 1, \u884c\u5e8f\u53f7\u4e3a 2 \u7684\u500d\u6570\u4f59 1 , \u5373\u5947\u6570\u884c\n > 3rd 2 third                                   # $3 ~ /ir/ \u5373\u7b2c 3 \u5217\u5305\u542b ir \u5b57\u7b26\u4e32\n\n $ awk '$1 !~ /nd/, /^[1-3]/ {print}' host.txt   # \u4f7f\u7528\u6b63\u5219\u7b5b\u9009\u884c\n > 1st 1 first                                   # $1 !~ /nd/ \u7b2c 1 \u5217\u4e0d\u5305\u542b nd \u5b57\u7b26\u4e32\n > 3rd 2 third                                   # ^[1-3] \u4ee5\u6570\u5b57 1 2 3 \u4e3a\u884c\u5f00\u5934\n\n $ awk '/sec/, /3rd/ {print}' host.txt           # \u901a\u8fc7\u5b50\u5b57\u7b26\u4e32\u622a\u53d6\u4e24\u5b50\u5b57\u7b26\u4e4b\u95f4\u6240\u6709\u7684\u884c\n > 2nd 0 second                                  # sec \u5728\u7b2c 2 \u884c\n > 3rd 2 third                                   # 3rd \u5728\u7b2c 3 \u884c\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6b63\u5219\u8868\u8fbe\u5f0f",children:"\u6b63\u5219\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"char"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"meaning"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"^"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u5339\u914d\u8f93\u5165\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\u4f4d\u7f6e, ^start \u4ee5\u5b57\u7b26\u4e32 start \u5f00\u5934"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"$"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u5339\u914d\u8f93\u5165\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u4f4d\u7f6e, $end \u4ee5\u5b57\u7b26\u4e32 end \u5f00\u5934"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"."})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:'\u5339\u914d\u9664"\\n"\u4e4b\u5916\u7684\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26, .'})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"[]"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u5339\u914d\u6240\u5305\u542b\u7684\u4efb\u610f**\u4e00\u4e2a**\u5b57\u7b26, [fac] \u5339\u914d f a c \u4e2d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26, [a-z] \u4efb\u610f\u5355\u4e2a\u5c0f\u5199\u5b57\u6bcd [0-9] \u4efb\u610f\u5355\u4e2a\u6570\u5b57"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"[^]"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u8d1f\u503c\u5b57\u7b26\u8303\u56f4\u3002\u5339\u914d\u4efb\u4f55\u4e0d\u5728\u6307\u5b9a\u8303\u56f4\u5185\u7684\u4efb\u610f\u5b57\u7b26, [^fac] \u5339\u914d\u4e0d\u5305\u542b f a c \u4e2d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"|"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u6216\u5339\u914d, \u7b26\u53f7\u4e24\u8fb9\u5747\u53ef [0-9]|[a-z] \u5339\u914d\u4efb\u610f\u5355\u4e2a\u6570\u5b57\u6216\u5c0f\u5199\u5b57\u6bcd"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"\uff1f"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u5339\u914d\u524d\u9762\u7684\u5b50\u8868\u8fbe\u5f0f\u96f6\u6b21\u6216\u4e00\u6b21, [0-9]? \u5339\u914d 0 \u4e2a\u6216 1 \u4e2a\u6570\u5b57"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"+"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u5339\u914d\u524d\u9762\u7684\u5b50\u8868\u8fbe\u5f0f\u4e00\u6b21\u6216\u591a\u6b21, [A-Z]+ \u5339\u914d 1 \u4e2a\u6216\u591a\u4e2a\u5927\u5199\u5b57\u6bcd"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"*"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"\u5339\u914d\u524d\u9762\u7684\u5b50\u8868\u8fbe\u5f0f\u96f6\u6b21\u6216\u591a\u6b21, .\\*.txt \u5339\u914d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\u51fa\u73b00\u6b21\u6216\u591a\u6b21, \u5373\u8868\u793a\u4efb\u610f\u4ee5 .txt \u7ed3\u5c3e"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"{m}"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"n\u662f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u3002\u5339\u914d\u786e\u5b9a\u7684n\u6b21\u3002{3} \u56fa\u5b9a\u5339\u914d 3 \u6b21"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"{m,n}"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"m\u548cn\u5747\u4e3a\u975e\u8d1f\u6574\u6570\uff0c\u5176\u4e2dn<=m\u3002{1\uff0c3} \u6700\u5c11 1 \u6b21\u6700\u591a 3 \u6b21, {2,} \u6700\u5c11\u4e24\u6b21, {,4} \u6700\u591a 4 \u6b21"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"()"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:'\u5339\u914dpattern\u5e76\u83b7\u53d6\u8fd9\u4e00\u5339\u914d, \u5c06\u62ec\u53f7\u5185\u5339\u914d\u770b\u6210\u4e00\u4e2a\u6574\u4f53 \uff08[0-9]=)\\* "\u6570\u5b57=" \u7684\u683c\u5f0f\u51fa\u73b0\u4efb\u610f\u6b21'})})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u793a\u4f8b",children:"\u6b63\u5219\u8868\u8fbe\u5f0f\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5339\u914d IPV4"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:' $ echo "127.0.0.1 \\n255.255.1 \\n0.0.0.0 " | egrep -o "([0-9]{1,3}\\.){3}[0-9]{1,3}"\n > 127.0.0.1                                     # -o \u4ec5\u663e\u793a\u5339\u914d\u5185\u5bb9, [0-9]{1,3} \u4efb\u610f\u6570\u5b57\u51fa\u73b0 1 \u5230 3 \u6b21\n > 0.0.0.0                                       # ([0-9]{1,3}\\.){3}  \u5339\u914d\u683c\u5f0f 3 \u6b21, . \u7ecf\u8fc7\u8f6c\u4e49\u4ec5\u8868\u793a . \u5b57\u7b26\n'})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var s=t(96540);const l={},d=s.createContext(l);function r(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);