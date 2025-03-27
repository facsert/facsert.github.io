"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4074],{17317:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(74848),n=t(28453);const o={pubDatetime:new Date("2023-11-01T09:15:02.000Z"),title:"Docker Registry",slug:"Docker Registry",featured:!1,draft:!1,tags:["docker"],description:"Docker \u79c1\u6709\u4ed3\u5e93"},c=void 0,a={id:"Docker/docker-4-registry",title:"Docker Registry",description:"Docker \u79c1\u6709\u4ed3\u5e93",source:"@site/docs/Docker/docker-4-registry.md",sourceDirName:"Docker",slug:"/Docker/Docker Registry",permalink:"/docs/Docker/Docker Registry",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-4-registry.md",tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{pubDatetime:"2023-11-01T09:15:02.000Z",title:"Docker Registry",slug:"Docker Registry",featured:!1,draft:!1,tags:["docker"],description:"Docker \u79c1\u6709\u4ed3\u5e93"},sidebar:"tutorialSidebar",previous:{title:"Docker Network",permalink:"/docs/Docker/Docker Network"},next:{title:"Docker Cluster",permalink:"/docs/Docker/Docker Cluster"}},i={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:2},{value:"\u63a8\u9001\u955c\u50cf",id:"\u63a8\u9001\u955c\u50cf",level:2},{value:"\u955c\u50cf\u7ba1\u7406",id:"\u955c\u50cf\u7ba1\u7406",level:2}];function d(e){const r={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(r.p,{children:"\u521b\u5efa\u672c\u5730 docker \u4ed3\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:' $ docker pull registry\n\n $ docker images\n > registry  latest  3c11102b9417   2 months ago    23.7MB\n\n $ docker run -d -p 5000:5000 \\                  # \u5bbf\u4e3b 5000 \u7aef\u53e3\u6620\u5c04\u5230\u5bb9\u5668 5000 \u7aef\u53e3\n   --restart=always \\                            # \u5bb9\u5668\u968f\u5bbf\u4e3b\u542f\u52a8\n   --volume /opt/registry:/var/lib/registry \\    # \u5bbf\u4e3b\u76ee\u5f55\u6620\u5c04\u5230\u5bb9\u5668\u76ee\u5f55\n   --name registry registry                      # \u5bb9\u5668\u540d\u79f0 \u955c\u50cf\u540d\u79f0\n\n $ docker ps\n > 9f5e1fa8dab6  registry:latest  "/entrypoint.sh /etc\u2026"   8 weeks ago   Up 3 weeks   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6ce8: ",(0,s.jsx)(r.code,{children:"/var/lib/registry"})," \u662f\u5bb9\u5668\u5185\u5b58\u653e\u955c\u50cf\u7684\u8def\u5f84"]}),"\n",(0,s.jsx)(r.h2,{id:"\u672c\u5730\u914d\u7f6e",children:"\u672c\u5730\u914d\u7f6e"}),"\n",(0,s.jsx)(r.p,{children:"\u672c\u5730\u914d\u7f6e docker"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:' $ ifconfig\n > ......\n > 10.58.14.96                                   # \u67e5\u770b\u5bbf\u4e3b\u673a\u5668 IP\n > ......\n\n $ vim /etc/docker/daemon.json\n > ......\n > "insecure-registries": [\n        "10.58.14.96:5000"                        # \u6dfb\u52a0\u672c\u5730\u4ed3\u5e93\u5730\u5740\n   ]\n > ......\n\n $ systemctl daemon-reload                                                     # \u91cd\u65b0\u52a0\u8f7d docker \u914d\u7f6e\u6587\u4ef6\n $ systemctl restart docker                                                    # \u91cd\u65b0\u542f\u52a8 docker\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u63a8\u9001\u955c\u50cf",children:"\u63a8\u9001\u955c\u50cf"}),"\n",(0,s.jsx)(r.p,{children:"\u5c06\u672c\u5730\u955c\u50cf\u63a8\u9001\u81f3\u672c\u5730\u4ed3\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:' $ docker images\n > REPOSITORY               TAG       IMAGE ID       CREATED         SIZE\n > mysql                    latest    bdfb0ec4d54a   2 months ago    599MB\n\n $ docker tag mysql:latest 10.58.14.96:5000/mysql:latest\n $ docker images\n > REPOSITORY               TAG       IMAGE ID       CREATED         SIZE\n > mysql                    latest    bdfb0ec4d54a   2 months ago    599MB\n > 10.58.14.96:5000/mysql   latest    bdfb0ec4d54a   2 months ago    599MB\n\n $ docker push 10.58.14.96:5000/mysql:latest\n $ curl -XGET  http://10.58.14.96:5000/v2/_catalog\n > {"repositories":["mysql"]}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u955c\u50cf\u7ba1\u7406",children:"\u955c\u50cf\u7ba1\u7406"}),"\n",(0,s.jsx)(r.p,{children:"\u7ba1\u7406\u79c1\u6709\u4ed3\u5e93\u955c\u50cf"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:' $ curl -XGET  http://10.58.14.96:5000/v2/_catalog\n > {"repositories":["mysql"]}\n\n $ curl -XGET  http://10.58.14.96:5000/v2/mysql/tags/list\n > {"name":"mysql","tags":["latest"]}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5220\u9664\u79c1\u6709\u4ed3\u5e93\u955c\u50cf, \u5b98\u65b9\u5220\u9664\u65b9\u5f0f\u53ea\u5220\u9664\u5143\u6570\u636e, \u955c\u50cf\u672a\u5220\u9664",(0,s.jsx)(r.br,{}),"\n","\u53ef\u4ee5\u76f4\u63a5\u5220\u9664\u955c\u50cf\u6587\u4ef6\u65b9\u5f0f\u5220\u9664\u4ed3\u5e93\u955c\u50cf"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'  # \u76f4\u63a5\u8fdb\u5165\u6620\u5c04\u8def\u5f84\u5220\u9664\u955c\u50cf\u6587\u4ef6\u6216\u8fdb\u5165\u5bb9\u5668\u8def\u5f84\u5220\u9664\u955c\u50cf\n  $ rm -rf {map_path}/docker/registry/v2/repositories/{image}\n  $ docker exec registry rm -rf /var/lib/registry/docker/registry/v2/repositories/{images}\n\n  $ rm -rf /var/lib/registry/docker/registry/v2/repositories/mysql\n\n $ curl -XGET  http://10.58.14.96:5000/v2/_catalog\n > {"repositories":[]}\n'})})]})}function g(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var s=t(96540);const n={},o=s.createContext(n);function c(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);