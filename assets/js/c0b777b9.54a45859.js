"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6958],{5487:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=r(4848),o=r(8453);const s={pubDatetime:new Date("2022-10-10T15:28:43.000Z"),title:"Docker config",slug:"Docker config",featured:!1,draft:!1,tags:["docker"],description:"Docker \u57fa\u672c\u914d\u7f6e"},c=void 0,i={id:"Docker/docker-0-base",title:"Docker config",description:"Docker \u57fa\u672c\u914d\u7f6e",source:"@site/docs/Docker/docker-0-base.md",sourceDirName:"Docker",slug:"/Docker/Docker config",permalink:"/docs/Docker/Docker config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-0-base.md",tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{pubDatetime:"2022-10-10T15:28:43.000Z",title:"Docker config",slug:"Docker config",featured:!1,draft:!1,tags:["docker"],description:"Docker \u57fa\u672c\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Sqlite3",permalink:"/docs/Database/sqlite3/sqlite3-0-base"},next:{title:"Docker image",permalink:"/docs/Docker/Docker image"}},d={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5728\u7ebf\u5b89\u88c5",id:"\u5728\u7ebf\u5b89\u88c5",level:2},{value:"\u79bb\u7ebf\u5b89\u88c5",id:"\u79bb\u7ebf\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Docker \u57fa\u672c\u53c2\u6570",id:"docker-\u57fa\u672c\u53c2\u6570",level:2}];function l(e){const n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(n.h2,{id:"\u5728\u7ebf\u5b89\u88c5",children:"\u5728\u7ebf\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"\u5b98\u65b9\u811a\u672c\u4e00\u952e\u5b89\u88c5, \u5728\u7ebf\u4e0b\u8f7d\u5305\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' # \u5378\u8f7d\u539f\u6709 docker\n apt-get autoremove docker docker-ce docker-engine  docker.io  containerd runc\n for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done\n\n # \u5220\u9664 docker \u914d\u7f6e\u548c\u6839\u76ee\u5f55, \u6740\u6b7b docker \u8fdb\u7a0b\u540e umount\n rm -rf /etc/systemd/system/docker.service.d\n umount /var/lib/docker\n rm -rf /var/lib/docker\n\n # \u6dfb\u52a0 docker \u4e0b\u8f7d\u6e90\n sudo apt-get update\n sudo apt-get install ca-certificates curl gnupg\n sudo install -m 0755 -d /etc/apt/keyrings\n curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n sudo chmod a+r /etc/apt/keyrings/docker.gpg\n\n # Add the repository to Apt sources:\n echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n   "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \\\n   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n sudo apt-get update\n\n # \u5de5\u5177\u5b89\u88c5 docker\n sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n\n docker --version\n > Docker version 24.0.7, build afdd53b\n\n # \u811a\u672c\u5b89\u88c5\n curl -fsSL https://get.docker.com -o get-docker.sh\n sudo sh get-docker.sh --mirror Aliyun\n docker --version\n > Docker version 24.0.7, build afdd53b\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u79bb\u7ebf\u5b89\u88c5",children:"\u79bb\u7ebf\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u79bb\u7ebf\u5305, \u914d\u7f6e docker \u7cfb\u7edf\u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://download.docker.com/linux/static/stable/x86_64/",children:"\u5b98\u65b9\u79bb\u7ebf\u5305"}),"\n",(0,t.jsx)(n.a,{href:"https://mirrors.aliyun.com/docker-ce/linux/static/stable/?spm=a2c6h.25603864.0.0.41fd2494LNwwk8",children:"\u963f\u91cc\u4e91\u955c\u50cf"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7d docker \u79bb\u7ebf\u5305, \u89e3\u538b\u5b89\u88c5\n$ tar -zxvf docker-27.1.1.tgz\n$ cp docker/* /usr/bin/\n$ docker -v\n> Docker version 27.1.1, build 6312585\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7f16\u8f91 ",(0,t.jsx)(n.code,{children:"/etc/systemd/system/docker.service"})," \u6587\u4ef6, \u5199\u5165\u4e00\u4e0b\u5185\u5bb9"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target docker.socket firewalld.service containerd.service time-set.target\nWants=network-online.target containerd.service\n#Requires=docker.socket\n\n\n[Service]\nType=notify\n# the default is not to use systemd for cgroups because the delegate issues still\n# exists and systemd currently does not support the cgroup feature set required\n# for containers run by docker\n#ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock\nExecStart=/usr/bin/dockerd\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutStartSec=0\nRestartSec=2\nRestart=always\n\n# Note that StartLimit* options were moved from "Service" to "Unit" in systemd 229.\n# Both the old, and new location are accepted by systemd 229 and up, so using the old location\n# to make them work for either version of systemd.\nStartLimitBurst=3\n\n# Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.\n# Both the old, and new name are accepted by systemd 230 and up, so using the old name to make\n# this option work for either version of systemd.\nStartLimitInterval=60s\n\n# Having non-zero Limit*s causes performance problems due to accounting overhead\n# in the kernel. We recommend using cgroups to do container-local accounting.\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\n\n# Comment TasksMax if your systemd version does not support it.\n# Only systemd 226 and above support this option.\nTasksMax=infinity\n\n# set delegate yes so that systemd does not reset the cgroups of docker containers\nDelegate=yes\n\n# kill only the docker process, not all processes in the cgroup\nKillMode=process\nOOMScoreAdjust=-500\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u542f\u52a8 docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ systemctl start docker\n $ systemctl status docker\n\n\u25cf docker.service - Docker Application Container Engine\n     Loaded: loaded (/etc/systemd/system/docker.service; disabled; vendor preset: enabled)\n     Active: active (running) since Tue 2024-07-30 15:48:08 CST; 4 weeks 0 days ago\nTriggeredBy: \u25cf docker.socket\n       Docs: https://docs.docker.com\n   Main PID: 2491134 (dockerd)\n      Tasks: 72\n     Memory: 77.1M\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u7f16\u8f91 ",(0,t.jsx)(n.code,{children:"/etc/docker/daemon.json"}),"(\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u4e00\u4e2a), \u9009\u62e9\u9700\u8981\u4fee\u6539\u7684\u914d\u7f6e\u5199\u5165\u6587\u4ef6",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon",children:"\u5b98\u65b9\u53c2\u6570\u8bf4\u660e"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'{\n    "insecure-registries": ["192.168.2.2:8080"],                               # \u79c1\u6709\u955c\u50cf\u4ed3\u5e93, \u7b2c\u4e09\u65b9\u955c\u50cf\u6e90 "<IP>:<PORT>"\n    "dns": [],                                                                 # \u8bbe\u5b9a\u5bb9\u5668DNS\u7684\u5730\u5740\uff0c\u5728\u5bb9\u5668\u7684 /etc/resolv.conf\u6587\u4ef6\u4e2d\u53ef\u67e5\u770b\n    "exec-opts": ["native.cgroupdriver=systemd"],                              # \u8fd0\u884c\u65f6\u6267\u884c\u9009\u9879\n    "registry-mirrors": ["https://ucjisdvf.mirror.aliyuncs.com"],              # \u66f4\u6362\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93\u5730\u5740\u4e3a\u56fd\u5185\u955c\u50cf\u5730\u5740\n    "log-level": "info",                                                       # \u663e\u793a\u65e5\u5fd7\u7b49\u7ea7 (debug|info|warn|error|fatal, \u9ed8\u8ba4\u4e3a info)\n    "log-driver": "json-file",                                                 # log \u9a71\u52a8\n    "log-opts": {                                                              # \u5bb9\u5668\u9ed8\u8ba4\u65e5\u5fd7\u9a71\u52a8\u7a0b\u5e8f\u9009\u9879\n        "max-size": "100m",\n        "max-file": "3"\n    },\n    "data-root": "/var/lib/docker"                                             # docker \u8fd0\u884c\u53ca\u65e5\u5fd7\u4fdd\u5b58\u4f4d\u7f6e (\u9ed8\u8ba4 /var/lib/docker)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u66f4\u6362 Docker \u955c\u50cf\u6e90"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "registry-mirrors": [\n    "https://docker.mirrors.ustc.edu.cn",\n    "https://registry.docker-cn.com",\n    "http://hub-mirror.c.163.com",\n    "https://mirror.ccs.tencentyun.com",\n    "https://registry.mirrors.ustc.edu.cn",\n    "https://ucjisdvf.mirror.aliyuncs.com"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\u9700\u8981\u91cd\u542f docker \u670d\u52a1\u751f\u6548"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ systemctl daemon-reload                                                     # \u91cd\u65b0\u52a0\u8f7d docker \u914d\u7f6e\u6587\u4ef6\n $ systemctl restart docker                                                    # \u91cd\u65b0\u542f\u52a8 docker\n\n $ systemctl status docker\n > ...\n > Activate: activate(running)\n > ...\n\n $ $ systemctl enable docker                                                     # \u8bbe\u7f6e\u4e3a\u5f00\u673a\u542f\u52a8\n"})}),"\n",(0,t.jsx)(n.h2,{id:"docker-\u57fa\u672c\u53c2\u6570",children:"Docker \u57fa\u672c\u53c2\u6570"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ docker --help\n  \u7ba1\u7406\u547d\u4ee4:\n    container   \u7ba1\u7406\u5bb9\u5668\n    image       \u7ba1\u7406\u955c\u50cf\n    network     \u7ba1\u7406\u7f51\u7edc\n  \u547d\u4ee4\uff1a\n    attach      \u4ecb\u5165\u5230\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n    build       \u6839\u636e Dockerfile \u6784\u5efa\u4e00\u4e2a\u955c\u50cf\n    commit      \u6839\u636e\u5bb9\u5668\u7684\u66f4\u6539\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\n    cp          \u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e0e\u5bb9\u5668\u4e2d\u590d\u5236 \u6587\u4ef6/\u6587\u4ef6\u5939\n    create      \u521b\u5efa\u4e00\u4e2a\u65b0\u5bb9\u5668\n    exec        \u5728\u5bb9\u5668\u4e2d\u6267\u884c\u4e00\u6761\u547d\u4ee4\n    images      \u5217\u51fa\u955c\u50cf\n    kill        \u6740\u6b7b\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n    logs        \u53d6\u5f97\u5bb9\u5668\u7684\u65e5\u5fd7\n    pause       \u6682\u505c\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u7684\u6240\u6709\u8fdb\u7a0b\n    ps          \u5217\u51fa\u6240\u6709\u5bb9\u5668\n    pull        \u62c9\u53d6\u4e00\u4e2a\u955c\u50cf\u6216\u4ed3\u5e93\u5230 registry\n    push        \u63a8\u9001\u4e00\u4e2a\u955c\u50cf\u6216\u4ed3\u5e93\u5230 registry\n    rename      \u91cd\u547d\u540d\u4e00\u4e2a\u5bb9\u5668\n    restart     \u91cd\u65b0\u542f\u52a8\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\n    rm          \u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\n    rmi         \u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u955c\u50cf\n    run         \u5728\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\u4e2d\u6267\u884c\u4e00\u6761\u547d\u4ee4\n    search      \u5728 Docker Hub \u4e2d\u641c\u7d22\u955c\u50cf\n    start       \u542f\u52a8\u4e00\u4e2a\u6216\u591a\u4e2a\u5df2\u7ecf\u505c\u6b62\u8fd0\u884c\u7684\u5bb9\u5668\n    stats       \u663e\u793a\u4e00\u4e2a\u5bb9\u5668\u7684\u5b9e\u65f6\u8d44\u6e90\u5360\u7528\n    stop        \u505c\u6b62\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n    tag         \u4e3a\u955c\u50cf\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6807\u7b7e\n    top         \u663e\u793a\u4e00\u4e2a\u5bb9\u5668\u5185\u7684\u6240\u6709\u8fdb\u7a0b\n    unpause     \u6062\u590d\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u5185\u6240\u6709\u88ab\u6682\u505c\u7684\u8fdb\u7a0b\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);