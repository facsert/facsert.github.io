"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8431],{4240:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=l(4848),s=l(8453);const r={author:"facsert",date:new Date("2022-07-03T15:44:44.000Z"),modDatetime:null,title:"01.BASH Basic",slug:"01.BASH Basic",featured:!1,draft:!1,tags:["bash"],description:"Bash \u57fa\u672c\u8bed\u6cd5"},d=void 0,c={id:"Bash/Bash-1-basic",title:"01.BASH Basic",description:"Bash \u57fa\u672c\u8bed\u6cd5",source:"@site/docs/Bash/Bash-1-basic.md",sourceDirName:"Bash",slug:"/Bash/01.BASH Basic",permalink:"/docs/Bash/01.BASH Basic",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Bash/Bash-1-basic.md",tags:[{inline:!0,label:"bash",permalink:"/docs/tags/bash"}],version:"current",frontMatter:{author:"facsert",date:"2022-07-03T15:44:44.000Z",modDatetime:null,title:"01.BASH Basic",slug:"01.BASH Basic",featured:!1,draft:!1,tags:["bash"],description:"Bash \u57fa\u672c\u8bed\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"},next:{title:"02.Bash Branch",permalink:"/docs/Bash/02.Bash Branch"}},i={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:2},{value:"echo",id:"echo",level:3},{value:"printf",id:"printf",level:3},{value:"\u8f93\u51fa\u91cd\u5b9a\u5411",id:"\u8f93\u51fa\u91cd\u5b9a\u5411",level:3},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u7279\u6b8a\u53d8\u91cf",id:"\u7279\u6b8a\u53d8\u91cf",level:3},{value:"\u53d8\u91cf\u9ed8\u8ba4\u503c",id:"\u53d8\u91cf\u9ed8\u8ba4\u503c",level:3},{value:"\u7279\u6b8a\u7c7b\u578b\u53d8\u91cf",id:"\u7279\u6b8a\u7c7b\u578b\u53d8\u91cf",level:3},{value:"\u5f15\u53f7",id:"\u5f15\u53f7",level:2},{value:"\u5355\u5f15\u53f7\u4e0e\u53cc\u5f15\u53f7",id:"\u5355\u5f15\u53f7\u4e0e\u53cc\u5f15\u53f7",level:3},{value:"\u53cd\u5f15\u53f7",id:"\u53cd\u5f15\u53f7",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u5e38\u7528\u8f6c\u4e49\u7b26\u53f7",id:"\u5e38\u7528\u8f6c\u4e49\u7b26\u53f7",level:3},{value:"\u5e38\u7528\u73af\u5883\u53d8\u91cf",id:"\u5e38\u7528\u73af\u5883\u53d8\u91cf",level:3},{value:"\u5e38\u7528\u7279\u6b8a\u53d8\u91cf",id:"\u5e38\u7528\u7279\u6b8a\u53d8\u91cf",level:3}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://wangdoc.com/bash/",children:"BASH \u6559\u7a0b"})}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:["Bash \u662f\u4e00\u79cd Linux \u548c macOS \u4e0a\u7684\u547d\u4ee4\u884c Shell\uff0c\u5b83\u662f Linux \u7cfb\u7edf\u4e2d\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684 Shell",(0,t.jsx)(n.br,{}),"\n","Shell \u662f\u4e00\u4e2a\u63d0\u4f9b\u4e0e\u7528\u6237\u5bf9\u8bdd\u7684\u73af\u5883\u7684\u7a0b\u5e8f; \u53c8\u79f0\u4e3a\u547d\u4ee4\u884c\u73af\u5883 command line interface, \u7b80\u5199\u4e3a CLI"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ cat /etc/shells                               # \u67e5\u770b\u7cfb\u7edf\u4e0b\u6240\u6709\u7684 shell\n > /bin/bash\n > /bin/csh\n > /bin/dash\n > /bin/ksh\n > /bin/sh\n > /bin/zsh\n\n $ echo $SHELL                                   # \u5f53\u524d\u4f7f\u7528\u7684 shell\n > /bin/zsh\n\n $ chsh -s /bin/bash                             # \u4fee\u6539\u5f53\u524d shell \u4e3a bash\n $ usermod --shell /bin/zsh root                 # \u8bbe\u7f6e root \u7528\u6237\u9ed8\u8ba4 shell \u4e3a zsh\n $ cat /etc/passwd |grep root                    # \u67e5\u770b root \u7528\u6237\u7684\u9ed8\u8ba4 shell\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"BASH \u57fa\u7840\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ command <option> <args>                       # \u547d\u4ee4 \u9009\u9879 \u53c2\u6570, shell \u547d\u4ee4\u4e00\u822c\u683c\u5f0f\n\n $ cat -n log.txt                                # \u8bfb\u53d6 log.txt \u6587\u4ef6, \u547d\u4ee4 cat, \u9009\u9879 -n, \u53c2\u6570 log.txt\n > 1 1st\n > 2 2nd\n > 3 3rd\n\n $ command | <command> | <command>               # \u547d\u4ee4\u7ba1\u9053\n $ cat log.txt | grep "3rd"                      # \u7ba1\u9053\u524d\u7684\u503c\u4f5c\u4e3a\u7ba1\u9053\u540e\u547d\u4ee4\u7684\u53c2\u6570\n > 3rd\n\n $ grep "3rd" log.txt                            # \u4e0e\u4e0a\u4e00\u547d\u4ee4\u7b49\u6548\n > 3rd\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Bash \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"#"})," \u4f5c\u4e3a\u6ce8\u91ca\u7b26\u53f7, \u6ce8\u91ca\u5185\u5bb9\u4e0d\u4f1a\u88ab\u6267\u884c"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8f93\u51fa",children:"\u8f93\u51fa"}),"\n",(0,t.jsx)(n.h3,{id:"echo",children:(0,t.jsx)(n.a,{href:"https://linux.alianga.com/c/echo.html",children:"echo"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ echo <opt> <string>                           # \u6253\u5370 string \u5185\u5bb9, \u4e0d\u6fc0\u6d3b\u8f6c\u4e49\u7b26\u53f7\n $ echo -e <string>                              # \u6fc0\u6d3b\u5b57\u7b26\u4e2d\u7684\u8f6c\u4e49\u5b57\u7b26\n\n $ echo "first \\nsecond"\n > first \\nsecond\n\n $ echo -e "first \\nsecond"\n > first\n > second\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8: \u66f4\u591a\u8f6c\u4e49\u7b26\u53f7\u6d4f\u89c8 ",(0,t.jsx)(n.a,{href:"#%E5%B8%B8%E7%94%A8%E8%BD%AC%E4%B9%89%E7%AC%A6%E5%8F%B7",children:"\u8f6c\u4e49\u7b26\u53f7"})]}),"\n",(0,t.jsx)(n.h3,{id:"printf",children:(0,t.jsx)(n.a,{href:"https://linux.alianga.com/c/printf.html",children:"printf"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ printf <format string>                        # \u683c\u5f0f\u5316\u8f93\u51fa\u5b57\u7b26\u4e32\n\n $ printf "%s length is %.3f" "line" "4.53245"   # \u5b57\u7b26\u4e32\u683c\u5f0f\u5316\n > line length is 4.523\n\n $ printf "%-6s _ %s" "left" "right"               # \u9ed8\u8ba4\u53f3\u5bf9\u9f50, \u5e26 - \u5de6\u5bf9\u9f50, \u6570\u5b57\u8868\u793a\u5360\u4f4d\n > left   _ right\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u8f93\u51fa\u91cd\u5b9a\u5411",children:"\u8f93\u51fa\u91cd\u5b9a\u5411"}),"\n",(0,t.jsxs)(n.p,{children:["Bash \u547d\u4ee4\u6b63\u786e\u7ed3\u679c\u9ed8\u8ba4\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa, \u9519\u8bef\u5185\u5bb9\u8f93\u51fa\u5230\u6807\u51c6\u9519\u8bef\u8f93\u51fa",(0,t.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u901a\u8fc7\u91cd\u5b9a\u5411\u7b26\u53f7 ",(0,t.jsx)(n.code,{children:">"}),"(\u8986\u76d6\u5199\u5165) ",(0,t.jsx)(n.code,{children:">>"}),"(\u8ffd\u52a0\u5199\u5165) \u5c06\u8f93\u51fa\u5185\u5bb9\u91cd\u5b9a\u5411\u5230\u6307\u5b9a\u5bf9\u8c61"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u6807\u51c6\u8f93\u51fa"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u6807\u51c6\u9519\u8bef"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u7a7a"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"&1"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"&2"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"/dev/null"})]})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ command 2>&1                                  # \u5c06\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\n > zsh: command not found: data\n\n $ command 2>/dev/null                           # \u5c06\u9519\u8bef\u5199\u5165\u7a7a\u7684\u865a\u62df\u8bbe\u5907, \u5373\u4e0d\u663e\u793a\u9519\u8bef\n >\n\n $ command > file                                # \u6e05\u7a7a\u6587\u4ef6\u5185\u5bb9, \u547d\u4ee4\u6807\u51c6\u8f93\u51fa\u5199\u5165\u6587\u4ef6\n $ date > log.txt; cat log.txt                   # date \u547d\u4ee4\u7ed3\u679c\u5199\u5165 log\u6587\u4ef6, \u6253\u5370 log \u5185\u5bb9\u9a8c\u8bc1\u5199\u5165\u5185\u5bb9\n > Mon Jul  3 23:05:14 CST 2023\n\n $ command >> file                               # \u4fdd\u7559\u6587\u4ef6\u5185\u5bb9, \u547d\u4ee4\u6807\u51c6\u8f93\u51fa\u8ffd\u52a0\u5165\u6587\u4ef6\n $ date >> log.txt; cat log.txt                  # date \u547d\u4ee4\u7ed3\u679c\u8ffd\u52a0\u5165 log\u6587\u4ef6, \u6253\u5370 log \u5185\u5bb9\u9a8c\u8bc1\u5199\u5165\u5185\u5bb9\n > Mon Jul  3 23:05:14 CST 2023\n > Mon Jul  3 23:05:38 CST 2023\n\n $ command > /dev/null                           # \u547d\u4ee4\u6807\u51c6\u8f93\u51fa\u5199\u5165 null, \u5373\u4e0d\u663e\u793a\u6b63\u5e38\u7ed3\u679c\n $ date >/dev/null\n >\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,t.jsxs)(n.p,{children:["BASH \u53d8\u91cf\u9ed8\u8ba4\u4e3a\u5b57\u7b26\u4e32, \u60f3\u8981\u64cd\u4f5c\u5b57\u7b26\u4e32\u6216\u8005\u5f15\u7528\u53d8\u91cf\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"$"})," \u7b26\u53f7"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ <variable name>=<variable value>              # \u53d8\u91cf\u5b9a\u4e49\n\n $ variable=\"hello world\"                        # \u53d8\u91cf\u8d4b\u503c, '=' \u53f7\u524d\u540e\u4e0d\u5141\u8bb8\u7a7a\u683c\n $ temp=hello_world                              # \u5b57\u7b26\u4e32\u65e0\u5f15\u53f7\u8d4b\u503c\u65f6\u4e0d\u5141\u8bb8\u7a7a\u683c\n\n $ echo variable                                 # \u628a\u6253\u5370\u5185\u5bb9\u5f53\u505a\u5b57\u7b26\u4e32\u76f4\u63a5\u6253\u5370\n > variable\n\n $ echo $variable                                # \u6253\u5370\u53d8\u91cf\u7684\u503c\n > hello world\n\n $ echo say_${temp}_to_code                      # \u5b57\u7b26\u8fde\u7528\u65f6, \u7528 {} \u533a\u5206\u53d8\u91cf\n > say_hello_world_to_code\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5efa\u8bae\u5b57\u7b26\u4e32\u64cd\u4f5c\u65f6, \u6dfb\u52a0\u5f15\u53f7\u4f7f\u53d8\u91cf\u64cd\u4f5c\u66f4\u52a0\u660e\u786e(\u6613\u4e8e\u533a\u5206\u7f16\u8f91\u5668\u4e2d\u5b57\u7b26\u4e32\u4e0e\u53d8\u91cf)"}),"\n",(0,t.jsx)(n.h3,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6253\u5f00 BASH \u65f6\u95f4, \u6709\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u63d0\u524d\u5728 shell \u4e2d\u5b9a\u4e49, \u8fd9\u4e9b\u53d8\u91cf\u5f80\u5f80\u6709\u7279\u6b8a\u542b\u4e49"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ env                                           # \u663e\u793a\u6240\u6709\u73af\u5883\u53d8\u91cf\n\n $ echo "path: $HOME, user: $USER"                # \u6253\u5370\u7528\u6237\u76ee\u5f55\u548c\u7528\u6237\n > path: /root, user: root\n\n $ echo $PATH                                    # \u8fd0\u884c\u73af\u5883\u76ee\u5f55\u7ec4\u6210\u7684\u5217\u8868\n $ echo $PWD                                     # \u6253\u5370\u5f53\u524d\u76ee\u5f55\n\n $ export <var>=<val>                            # \u81ea\u5b9a\u4e49\u5f53\u524d\u547d\u4ee4\u884c\u73af\u5883\u53d8\u91cf, \u65b0\u5f00\u7a97\u53e3\u6216\u91cd\u542f\u5931\u6548\n $ unset <var>                                   # \u5220\u9664\u53d8\u91cf, \u73af\u5883\u53d8\u91cf\u548c\u81ea\u5b9a\u4e49\u53d8\u91cf\u5747\u53ef\n $ set                                           # \u663e\u793a\u6240\u6709 shell \u53d8\u91cf\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8: \u66f4\u591a\u73af\u5883\u53d8\u91cf\u6d4f\u89c8 ",(0,t.jsx)(n.a,{href:"#%E5%B8%B8%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",children:"\u73af\u5883\u53d8\u91cf"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u7279\u6b8a\u53d8\u91cf",children:"\u7279\u6b8a\u53d8\u91cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ $<char>                                       # \u5982 $? $! \u7b49\u7279\u6b8a\u542b\u4e49\u53d8\u91cf\n\n $ date;echo "date command return: $?"           # \u4e0a\u4e2a\u547d\u4ee4\u8fd4\u56de\u503c\n > Sat May  4 10:11:22 PM CST 2024\n > date command return: 0                        # 0 \u8868\u793a\u547d\u4ee4\u6267\u884c\u6210\u529f, \u5176\u5b83\u8868\u793a\u5931\u8d25\u6216\u9519\u8bef\n\n $ echo "Process ID: $$"                         # \u5f53\u524d shell \u8fdb\u7a0b ID\n > Process ID: 12345                             # 12345 \u4e3a\u5f53\u524d shell \u8fdb\u7a0b ID\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8: \u66f4\u591a\u7279\u6b8a\u53d8\u91cf ",(0,t.jsx)(n.a,{href:"#%E7%89%B9%E6%AE%8A%E5%8F%98%E9%87%8F",children:"\u7279\u6b8a\u53d8\u91cf"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u53d8\u91cf\u9ed8\u8ba4\u503c",children:"\u53d8\u91cf\u9ed8\u8ba4\u503c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ ${variable:-value}                            # \u53d8\u91cf\u4e3a\u7a7a\u6216\u4e0d\u5b58\u5728\u8fd4\u56de value\n $ ${variable:+value}                            # \u53d8\u91cf\u5b58\u5728\u4e14\u4e0d\u4e3a\u7a7a\u8fd4\u56de value\n\n $ ${variable:=value}                            # \u53d8\u91cf\u4e3a\u7a7a\u6216\u4e0d\u5b58\u5728\u8bbe\u7f6e\u53d8\u91cf\u4e3a value, \u8fd4\u56de values\n $ ${variable:?message}                          # \u53d8\u91cf\u4e3a\u7a7a\u6216\u4e0d\u5b58\u5728\u6253\u5370 message, \u5e76\u9000\u51fa\n\n $ echo "hello ${name:-petter}"\n > hello petter\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u7279\u6b8a\u7c7b\u578b\u53d8\u91cf",children:"\u7279\u6b8a\u7c7b\u578b\u53d8\u91cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ declare <opt> <var>=<val>                     # \u5b9a\u4e49\u7279\u6b8a\u7c7b\u578b\u53d8\u91cf\n\n $ declare -i int1=8 int2=6 sum                  # \u5b9a\u4e49\u6574\u6570\u53d8\u91cf, \u53ef\u76f4\u63a5\u6570\u5b66\u8fd0\u7b97\n $ sum=int1+int2; echo $sum                      # \u58f0\u660e\u6574\u6570\u53d8\u91cf\u53ef\u76f4\u63a5\u6570\u5b66\u8fd0\u7b97( + \u5de6\u53f3\u4e0d\u80fd\u6709\u7a7a\u683c)\n > 14\n\n $ declare -a arr=(1 2 3)                        # \u5b9a\u4e49\u6570\u7ec4\u53d8\u91cf\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ let <var>=<expression>                        # \u58f0\u660e\u542b\u7b97\u672f\u8868\u8fbe\u5f0f\u7684\u53d8\u91cf\n\n $ let "sum = 7 + 8"\n $ let "add = sum++"\n $ echo "sum: $sum  add: $add"\n > sum: 15 add: 16\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5f15\u53f7",children:"\u5f15\u53f7"}),"\n",(0,t.jsx)(n.h3,{id:"\u5355\u5f15\u53f7\u4e0e\u53cc\u5f15\u53f7",children:"\u5355\u5f15\u53f7\u4e0e\u53cc\u5f15\u53f7"}),"\n",(0,t.jsx)(n.p,{children:"BASH \u533a\u5206\u5355\u5f15\u53f7\u548c\u53cc\u5f15\u53f7, \u5355\u5f15\u53f7\u5185\u5168\u90e8\u4e3a\u5f53\u505a\u5b57\u7b26, \u53cc\u5f15\u53f7\u4f1a\u6fc0\u6d3b\u53d8\u91cf\u5f15\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ name="petter"\n\n $ echo \'hello\\t$name\'                           # \u5355\u5f15\u53f7\u7981\u6b62\u53d8\u91cf\u540d\u6269\u5c55, \u539f\u6837\u6253\u5370\n > hello\\t$name                                  # bash \u9ed8\u8ba4\u4e0d\u8f6c\u4e49 \\t, zsh \u9ed8\u8ba4\u8f6c\u4e49 \\t\n\n $ echo "hello\\t$name"                           # \u53cc\u5f15\u53f7\u5141\u8bb8\u53d8\u91cf\u540d\u6269\u5c55\n > hello\\tpetter\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u53cd\u5f15\u53f7",children:"\u53cd\u5f15\u53f7"}),"\n",(0,t.jsx)(n.p,{children:"\u53cd\u5f15\u53f7\u7528\u4e8e\u6267\u884c\u547d\u4ee4, \u4e00\u822c\u7528\u4e8e\u5c06\u547d\u4ee4\u7ed3\u679c\u8d4b\u503c\u7ed9\u53d8\u91cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ echo date, `date`\n > date, Sat May 4 10:16:10 PM CST 2024          # \u53cd\u5f15\u53f7\u4f1a\u6267\u884c\u5305\u542b\u7684\u5185\u5bb9\n\n $ echo date, $(date)                            # \u4e0e\u53cd\u5f15\u53f7\u6548\u679c\u4e00\u81f4\n > date, Sat May 4 10:18:29 PM CST 2024\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u53cd\u5f15\u53f7\u6613\u4e8e\u4e0e\u5355\u5f15\u53f7\u6df7\u6dc6, \u5efa\u8bae\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"$()"})," \u65b9\u5f0f, \u4fbf\u4e8e\u533a\u5206"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9644\u5f55",children:"\u9644\u5f55"}),"\n",(0,t.jsx)(n.h3,{id:"\u5e38\u7528\u8f6c\u4e49\u7b26\u53f7",children:"\u5e38\u7528\u8f6c\u4e49\u7b26\u53f7"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u7b26\u53f7"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u542b\u4e49"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\n"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6362\u884c\u7b26"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\r"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u56de\u8f66, \u56de\u5230\u884c\u9996"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\t"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Tab \u952e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\b"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5149\u6807\u5de6\u79fb 1 \u4f4d"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u5e38\u7528\u73af\u5883\u53d8\u91cf",children:"\u5e38\u7528\u73af\u5883\u53d8\u91cf"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u53d8\u91cf"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u542b\u4e49"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"HOME"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u524d\u7528\u6237\u76ee\u5f55"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"USER"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u524d\u7528\u6237"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"SHELL"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u524d\u4f7f\u7528\u7684 shell"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"PATH"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u73af\u5883\u53d8\u91cf"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"PWD"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u524d\u76ee\u5f55"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u5e38\u7528\u7279\u6b8a\u53d8\u91cf",children:"\u5e38\u7528\u7279\u6b8a\u53d8\u91cf"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u53d8\u91cf"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u542b\u4e49"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"$?"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"$!"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684 pid"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"$$"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u524d shell \u8fdb\u7a0b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"$@"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u524d\u51fd\u6570\u6216\u811a\u672c\u7684\u6240\u6709\u53c2\u6570"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>c});var t=l(6540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);