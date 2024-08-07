"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1235],{9750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(4848),i=t(8453);const a={author:"facsert",pubDatetime:new Date("2023-04-07T15:02:16.000Z"),title:"Linux System",slug:"Linux System",featured:!1,draft:!1,tags:["Linux"],description:"Linux \u7cfb\u7edf"},l=void 0,r={id:"Linux/Linux-4-system",title:"Linux System",description:"Linux \u7cfb\u7edf",source:"@site/docs/Linux/Linux-4-system.md",sourceDirName:"Linux",slug:"/Linux/Linux System",permalink:"/docs/Linux/Linux System",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Linux-4-system.md",tags:[{inline:!0,label:"Linux",permalink:"/docs/tags/linux"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-04-07T15:02:16.000Z",title:"Linux System",slug:"Linux System",featured:!1,draft:!1,tags:["Linux"],description:"Linux \u7cfb\u7edf"},sidebar:"tutorialSidebar",previous:{title:"Linux Text",permalink:"/docs/Linux/Linux Text"},next:{title:"Linux Package",permalink:"/docs/Linux/Linux Package"}},c={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u7cfb\u7edf",id:"\u7cfb\u7edf",level:2},{value:"uname",id:"uname",level:3},{value:"date",id:"date",level:3},{value:"df",id:"df",level:3},{value:"du",id:"du",level:3},{value:"free",id:"free",level:3},{value:"ps",id:"ps",level:3},{value:"systemctl",id:"systemctl",level:3},{value:"netstat : network statistics",id:"netstat--network-statistics",level:3},{value:"ifconfig",id:"ifconfig",level:3},{value:"kill",id:"kill",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(n.h2,{id:"\u7cfb\u7edf",children:"\u7cfb\u7edf"}),"\n",(0,s.jsx)(n.h3,{id:"uname",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/uname.html",children:"uname"})}),"\n",(0,s.jsx)(n.p,{children:"Unix name"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ uname -a                                      # \u6253\u5370\u64cd\u4f5c\u7cfb\u7edf\u7684\u6240\u6709\u4fe1\u606f\n > Linux master 3.10.0-1160.81.1.el7.x86_64 #1 SMP Fri Dec 16 17:29:43 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux\n"})}),"\n",(0,s.jsx)(n.h3,{id:"date",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/date.html",children:"date"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' $ date                                          # \u73b0\u5b9e\u7cfb\u7edf\u65f6\u95f4\n > Fri 07 Apr 2023 02:16:35 AM EDT\n\n $ date +"%Y-%m-%d %H:%M:%S"                     # \u683c\u5f0f\u5316\u8f93\u51fa\u65f6\u95f4\n > 2023-04-07 02:16:52\n\n $ date -s "01:01:01 2022-08-09"                 # \u8bbe\u7f6e\u65f6\u95f4\n'})}),"\n",(0,s.jsx)(n.h3,{id:"df",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/df.html",children:"df"})}),"\n",(0,s.jsx)(n.p,{children:"disk free"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ df                                            # \u663e\u793a\u7cfb\u7edf\u78c1\u76d8\u5360\u7528\u4fe1\u606f, \u9ed8\u8ba4\u4ee5 KB \u4e3a\u5355\u4f4d\n $ df -h                                         # \u5bb9\u91cf\u6570\u636e\u4ee5 MB \u4e3a\u5355\u4f4d\n\n $ df -h                                         # \u5bb9\u91cf\u4fe1\u606f\u667a\u80fd\u6dfb\u52a0\u5355\u4f4d\n > Filesystem      Size  Used Avail Use% Mounted on\n > udev            3.9G     0  3.9G   0% /dev\n > tmpfs           796M   41M  755M   6% /run\n > /dev/sda1        58G   17G   39G  30% /\n"})}),"\n",(0,s.jsx)(n.h3,{id:"du",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/du.html",children:"du"})}),"\n",(0,s.jsx)(n.p,{children:"disk usage: \u67e5\u770b\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u5360\u7528\u5927\u5c0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ du <arg> <file>                               # \u663e\u793a\u76ee\u5f55\u5360\u7528\u7a7a\u95f4\u5927\u5c0f\n $ du -s <file>                                  # --summarize \u53ea\u663e\u793a\u603b\u8ba1\u5360\u7528\n $ du -h <file>                                  # --human-readable \u6dfb\u52a0\u5355\u4f4d\n\n $ du *                                          # \u5217\u51fa\u6240\u6709\u6587\u4ef6\u53ca\u5927\u5c0f\n > 97764   go20.tar.gz\n > 4       host.txt\n > 24      mongo.tar.gz\n\n $ du -h                                         # \u667a\u80fd\u663e\u793a\u5355\u4f4d\n > 4.0K    ./test\n > 834M    .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"free",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/free.html",children:"free"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ free                                          # \u663e\u793a\u7cfb\u7edf\u5185\u5b58\u5360\u7528(KB)\n $ free -m                                       # \u4ee5 MB \u4e3a\u5355\u4f4d\u663e\u793a\n $ free -g                                       # \u4ee5 GB \u4e3a\u5355\u4f4d\u663e\u793a\n\n $ free -h                                       # \u667a\u80fd\u663e\u793a\u5355\u4f4d\n                total        used        free      shared  buff/cache   available\n > Mem:          7.8Gi       1.2Gi       5.3Gi        41Mi       1.3Gi       6.3Gi\n > Swap:         974Mi          0B       974Mi\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ps",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/ps.html",children:"ps"})}),"\n",(0,s.jsx)(n.p,{children:"process status: \u8fdb\u7a0b\u72b6\u6001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ ps <opt>                                      # \u663e\u793a\u7cfb\u7edf\u8fdb\u7a0b\u72b6\u6001\n $ ps aux                                        # \u663e\u793a\u7cfb\u7edf\u6240\u6709\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f\n > USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\n > root         1  0.0  0.1 104188 10472 ?        Ss   Apr02   0:03 /sbin/init\n > root         2  0.0  0.0      0     0 ?        S    Apr02   0:00 [kthreadd]\n > root         3  0.0  0.0      0     0 ?        I<   Apr02   0:00 [rcu_gp]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"systemctl",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/systemctl.html",children:"systemctl"})}),"\n",(0,s.jsx)(n.p,{children:"systemctl control"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ systemctl <opt> <service>                     # \u8bbe\u7f6e\u67d0\u9879\u670d\u52a1\n $ systemctl start <service>                     # \u542f\u52a8nfs\u670d\u52a1\n $ systemctl enable <service>                    # \u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8\n $ systemctl disable <service>                   # \u505c\u6b62\u5f00\u673a\u81ea\u542f\u52a8\n $ systemctl status <service>                    # \u67e5\u770b\u670d\u52a1\u5f53\u524d\u72b6\u6001\n $ systemctl restart <service>                   # \u91cd\u65b0\u542f\u52a8\u67d0\u670d\u52a1\n $ systemctl list-units --type=service           # \u67e5\u770b\u6240\u6709\u5df2\u542f\u52a8\u7684\u670d\u52a1\n\n $ systemctl statuc docker\n > \u25cf docker.service - Docker Application Container Engine\n >   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)\n >   Active: active (running) since Sun 2023-04-02 20:24:38 EDT; 4 days ago\n >     Docs: https://docs.docker.com\n > Main PID: 704 (dockerd)\n > ......\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"netstat--network-statistics",children:[(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/netstat.html",children:"netstat"})," : network statistics"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ netstat <opt>                                 # \u663e\u793a\u7f51\u7edc\u7aef\u53e3\u4fe1\u606f\n $ netstat -a                                    # \u663e\u793a\u6240\u6709\u7f51\u7edc\u7aef\u53e3\u4fe1\u606f\n $ netstat -t                                    # \u663e\u793a TCP \u7f51\u7edc\u7aef\u53e3\u4fe1\u606f\n $ netstat -u                                    # \u663e\u793a UDP \u7f51\u7edc\u7aef\u53e3\u4fe1\u606f\n $ netstat -l                                    # --listening \u663e\u793a\u5904\u4e8e\u76d1\u542c\u72b6\u6001\u7684\u7aef\u53e3\n\n $ netstat -anlp | grep 22\n > tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      577/sshd\n > tcp        0      0 10.0.2.15:22            10.0.2.2:61110          ESTABLISHED 19205/sshd: root@no\n > tcp6       0      0 :::22                   :::*                    LISTEN      577/sshd\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ifconfig",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/ifconfig.html",children:"ifconfig"})}),"\n",(0,s.jsx)(n.p,{children:"network interfaces configuring"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ ifconfig                                      # \u663e\u793a\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e\u548c\u53c2\u6570\n > enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n >       inet 10.0.2.15  netmask 255.255.255.0  broadcast 10.0.2.255\n >       inet6 fe80::a00:27ff:fe2e:3801  prefixlen 64  scopeid 0x20<link>\n >       ether 08:00:27:2e:38:01  txqueuelen 1000  (Ethernet)\n >       RX packets 1226712  bytes 239728472 (228.6 MiB)\n >       RX errors 0  dropped 0  overruns 0  frame 0\n >       TX packets 857854  bytes 146145492 (139.3 MiB)\n >       TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n > ......\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kill",children:(0,s.jsx)(n.a,{href:"https://linux.alianga.com/c/kill.html",children:"kill"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" $ kill <opt> <pid>                              # \u6740\u6b7b\u8fdb\u7a0b\n $ kill -9 <pid>                                 # \u5f3a\u5236\u6740\u6b7b <pid> \u8fdb\u7a0b\n\n $ killall <name>                                # \u6740\u6b7b\u6240\u6709\u540d\u5b57\u4e3a <name> \u8fdb\u7a0b\n $ pkill -o <name>                               # \u6740\u6b7b <name> \u8fdb\u7a0b\u4e2d\u8fdb\u7a0b\u53f7\u6700\u5c0f\u7684\n $ pkill -n <name>                               # \u6740\u6b7b <name> \u8fdb\u7a0b\u4e2d\u8fdb\u7a0b\u53f7\u6700\u5927\u7684\n\n $ sleep 300 &                                   # \u540e\u53f0\u6267\u884c sleep \u6307\u4ee4\n > [1] 23287                                     # \u7cfb\u7edf\u8fd4\u56de\u540e\u53f0\u7684\u8fdb\u7a0b pid\n $ kill -9 23287                                 # \u6839\u636e pip \u6740\u6b7b\u6307\u5b9a\u8fdb\u7a0b\n > [1]  + 23287 killed     sleep 300\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);