"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6958],{2156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=r(4848),c=r(8453);const t={author:"facsert",pubDatetime:new Date("2022-10-10T15:28:43.000Z"),title:"Docker config",slug:"Docker config",featured:!1,draft:!1,tags:["docker"],description:"Docker \u57fa\u672c\u914d\u7f6e"},s=void 0,d={id:"Docker/docker-0-base",title:"Docker config",description:"Docker \u57fa\u672c\u914d\u7f6e",source:"@site/docs/Docker/docker-0-base.md",sourceDirName:"Docker",slug:"/Docker/Docker config",permalink:"/docs/Docker/Docker config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-0-base.md",tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2022-10-10T15:28:43.000Z",title:"Docker config",slug:"Docker config",featured:!1,draft:!1,tags:["docker"],description:"Docker \u57fa\u672c\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Redis Base",permalink:"/docs/Database/Redis/Redis Base"},next:{title:"Docker image",permalink:"/docs/Docker/Docker image"}},i={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Docker \u57fa\u672c\u53c2\u6570",id:"docker-\u57fa\u672c\u53c2\u6570",level:2}];function l(e){const n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(n.p,{children:["Docker \u5b89\u88c5",(0,o.jsx)(n.br,{}),"\n","\u4e0b\u8f7d\u5b98\u65b9\u4e00\u952e\u5b89\u88c5\u811a\u672c\u5b89\u88c5"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:' # \u5378\u8f7d\u539f\u6709 docker\n apt-get autoremove docker docker-ce docker-engine  docker.io  containerd runc\n for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done\n\n # \u5220\u9664 docker \u914d\u7f6e\u548c\u6839\u76ee\u5f55, \u6740\u6b7b docker \u8fdb\u7a0b\u540e umount\n rm -rf /etc/systemd/system/docker.service.d\n umount /var/lib/docker\n rm -rf /var/lib/docker\n\n # \u6dfb\u52a0 docker \u4e0b\u8f7d\u6e90\n sudo apt-get update\n sudo apt-get install ca-certificates curl gnupg\n sudo install -m 0755 -d /etc/apt/keyrings\n curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n sudo chmod a+r /etc/apt/keyrings/docker.gpg\n\n # Add the repository to Apt sources:\n echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n   "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \\\n   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n sudo apt-get update\n\n # \u5de5\u5177\u5b89\u88c5 docker\n sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n\n docker --version\n > Docker version 24.0.7, build afdd53b\n\n # \u811a\u672c\u5b89\u88c5\n curl -fsSL https://get.docker.com -o get-docker.sh\n sudo sh get-docker.sh --mirror Aliyun\n docker --version\n > Docker version 24.0.7, build afdd53b\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,o.jsxs)(n.p,{children:["\u7f16\u8f91 ",(0,o.jsx)(n.code,{children:"/etc/docker/daemon.json"}),"(\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u4e00\u4e2a), \u9009\u62e9\u9700\u8981\u4fee\u6539\u7684\u914d\u7f6e\u5199\u5165\u6587\u4ef6",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon",children:"\u5b98\u65b9\u53c2\u6570\u8bf4\u660e"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n    "insecure-registries": ["192.168.2.2:8080"],                               # \u79c1\u6709\u955c\u50cf\u4ed3\u5e93, \u7b2c\u4e09\u65b9\u955c\u50cf\u6e90 "<IP>:<PORT>"\n    "dns": [],                                                                 # \u8bbe\u5b9a\u5bb9\u5668DNS\u7684\u5730\u5740\uff0c\u5728\u5bb9\u5668\u7684 /etc/resolv.conf\u6587\u4ef6\u4e2d\u53ef\u67e5\u770b\n    "exec-opts": ["native.cgroupdriver=systemd"],                              # \u8fd0\u884c\u65f6\u6267\u884c\u9009\u9879\n    "registry-mirrors": ["https://ucjisdvf.mirror.aliyuncs.com"],              # \u66f4\u6362\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93\u5730\u5740\u4e3a\u56fd\u5185\u955c\u50cf\u5730\u5740\n    "log-level": "info",                                                       # \u663e\u793a\u65e5\u5fd7\u7b49\u7ea7 (debug|info|warn|error|fatal, \u9ed8\u8ba4\u4e3a info)\n    "log-driver": "json-file",                                                 # log \u9a71\u52a8\n    "log-opts": {                                                              # \u5bb9\u5668\u9ed8\u8ba4\u65e5\u5fd7\u9a71\u52a8\u7a0b\u5e8f\u9009\u9879\n        "max-size": "100m",\n        "max-file": "3"\n    },\n    "data-root": "/var/lib/docker"                                             # docker \u8fd0\u884c\u53ca\u65e5\u5fd7\u4fdd\u5b58\u4f4d\u7f6e (\u9ed8\u8ba4 /var/lib/docker)\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u66f4\u6362 Docker \u955c\u50cf\u6e90"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "registry-mirrors": [\n     "https://docker.mirrors.ustc.edu.cn",\n     "https://registry.docker-cn.com",\n     "http://hub-mirror.c.163.com",\n     "https://mirror.ccs.tencentyun.com",\n     "https://registry.mirrors.ustc.edu.cn",\n     "https://ucjisdvf.mirror.aliyuncs.com"\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\u9700\u8981\u91cd\u542f docker \u670d\u52a1\u751f\u6548"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" $ systemctl daemon-reload                                                     # \u91cd\u65b0\u52a0\u8f7d docker \u914d\u7f6e\u6587\u4ef6\n $ systemctl restart docker                                                    # \u91cd\u65b0\u542f\u52a8 docker\n\n $ systemctl status docker\n > ...\n > Activate: activate(running)\n > ...\n\n $ $ systemctl enable docker                                                     # \u8bbe\u7f6e\u4e3a\u5f00\u673a\u542f\u52a8\n"})}),"\n",(0,o.jsx)(n.h2,{id:"docker-\u57fa\u672c\u53c2\u6570",children:"Docker \u57fa\u672c\u53c2\u6570"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" $ docker --help\n  \u7ba1\u7406\u547d\u4ee4:\n    container   \u7ba1\u7406\u5bb9\u5668\n    image       \u7ba1\u7406\u955c\u50cf\n    network     \u7ba1\u7406\u7f51\u7edc\n  \u547d\u4ee4\uff1a\n    attach      \u4ecb\u5165\u5230\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n    build       \u6839\u636e Dockerfile \u6784\u5efa\u4e00\u4e2a\u955c\u50cf\n    commit      \u6839\u636e\u5bb9\u5668\u7684\u66f4\u6539\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\n    cp          \u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e0e\u5bb9\u5668\u4e2d\u590d\u5236 \u6587\u4ef6/\u6587\u4ef6\u5939\n    create      \u521b\u5efa\u4e00\u4e2a\u65b0\u5bb9\u5668\n    exec        \u5728\u5bb9\u5668\u4e2d\u6267\u884c\u4e00\u6761\u547d\u4ee4\n    images      \u5217\u51fa\u955c\u50cf\n    kill        \u6740\u6b7b\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n    logs        \u53d6\u5f97\u5bb9\u5668\u7684\u65e5\u5fd7\n    pause       \u6682\u505c\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u7684\u6240\u6709\u8fdb\u7a0b\n    ps          \u5217\u51fa\u6240\u6709\u5bb9\u5668\n    pull        \u62c9\u53d6\u4e00\u4e2a\u955c\u50cf\u6216\u4ed3\u5e93\u5230 registry\n    push        \u63a8\u9001\u4e00\u4e2a\u955c\u50cf\u6216\u4ed3\u5e93\u5230 registry\n    rename      \u91cd\u547d\u540d\u4e00\u4e2a\u5bb9\u5668\n    restart     \u91cd\u65b0\u542f\u52a8\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\n    rm          \u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\n    rmi         \u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u955c\u50cf\n    run         \u5728\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\u4e2d\u6267\u884c\u4e00\u6761\u547d\u4ee4\n    search      \u5728 Docker Hub \u4e2d\u641c\u7d22\u955c\u50cf\n    start       \u542f\u52a8\u4e00\u4e2a\u6216\u591a\u4e2a\u5df2\u7ecf\u505c\u6b62\u8fd0\u884c\u7684\u5bb9\u5668\n    stats       \u663e\u793a\u4e00\u4e2a\u5bb9\u5668\u7684\u5b9e\u65f6\u8d44\u6e90\u5360\u7528\n    stop        \u505c\u6b62\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n    tag         \u4e3a\u955c\u50cf\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6807\u7b7e\n    top         \u663e\u793a\u4e00\u4e2a\u5bb9\u5668\u5185\u7684\u6240\u6709\u8fdb\u7a0b\n    unpause     \u6062\u590d\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u5185\u6240\u6709\u88ab\u6682\u505c\u7684\u8fdb\u7a0b\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var o=r(6540);const c={},t=o.createContext(c);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);