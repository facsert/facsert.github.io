"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9859],{3615:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var o=e(4848),t=e(8453);const c={author:"facsert",pubDatetime:new Date("2023-09-27T21:03:53.000Z"),title:"Python Anaconda",slug:"Python Anaconda",featured:!1,draft:!1,tags:["Python","Anaconda"],description:"Python \u7248\u672c\u63a7\u5236\u5de5\u5177 Anaconda"},s=void 0,d={id:"Python/python-conda",title:"Python Anaconda",description:"Python \u7248\u672c\u63a7\u5236\u5de5\u5177 Anaconda",source:"@site/docs/Python/python-conda.md",sourceDirName:"Python",slug:"/Python/Python Anaconda",permalink:"/docs/Python/Python Anaconda",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-conda.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"},{inline:!0,label:"Anaconda",permalink:"/docs/tags/anaconda"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-09-27T21:03:53.000Z",title:"Python Anaconda",slug:"Python Anaconda",featured:!1,draft:!1,tags:["Python","Anaconda"],description:"Python \u7248\u672c\u63a7\u5236\u5de5\u5177 Anaconda"},sidebar:"tutorialSidebar",previous:{title:"Python Class",permalink:"/docs/Python/Python Class"},next:{title:"Python datetime",permalink:"/docs/Python/Python datetime"}},r={},i=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u521b\u5efa\u73af\u5883",id:"\u521b\u5efa\u73af\u5883",level:2},{value:"\u542f\u7528\u9000\u51fa",id:"\u542f\u7528\u9000\u51fa",level:2},{value:"\u5220\u9664\u73af\u5883",id:"\u5220\u9664\u73af\u5883",level:2},{value:"\u5305\u7ba1\u7406",id:"\u5305\u7ba1\u7406",level:2},{value:"\u66f4\u6362\u6e90",id:"\u66f4\u6362\u6e90",level:2}];function l(n){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Anaconda \u662f\u4e00\u4e2a python \u7248\u672c\u7ba1\u7406\u5668, \u80fd\u5feb\u901f\u521b\u5efa\u865a\u62df\u73af\u5883, \u7ba1\u7406 python \u7248\u672c,\u5b89\u88c5\u5305\u7b49."}),"\n",(0,o.jsx)(a.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsx)(a.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://www.anaconda.com/",children:"Anaconda \u5b98\u7f51"})," \u4e0b\u8f7d\u5bf9\u5e94\u5e73\u53f0\u5b89\u88c5\u5305\n",(0,o.jsx)(a.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/",children:"\u56fd\u5185\u955c\u50cf"})]}),"\n",(0,o.jsx)(a.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ conda info                                              # \u67e5\u770b anaconda \u57fa\u672c\u4fe1\u606f\n $ conda --version                                         # \u67e5\u770b conda \u7248\u672c\n > conda 22.9.0\n\n $ conda env list                                          # \u5217\u51fa\u5f53\u524d\u6240\u6709\u73af\u5883\n $ conda info -e                                           # \u5217\u51fa\u5f53\u524d\u6240\u6709\u73af\u5883\n > # conda environments:\n > #\n > base                  *  /root/anaconda3                # \u5e26 * \u8868\u793a\u5f53\u524d\u4f7f\u7528\u73af\u5883\n > py3.9                    /root/anaconda3/envs/py3.9     # \u5df2\u521b\u5efa\u73af\u5883\n\n $ conda update -n base -c defaults conda                  # \u66f4\u65b0 conda \u7248\u672c\n $ conda update -n base conda\n"})}),"\n",(0,o.jsx)(a.h2,{id:"\u521b\u5efa\u73af\u5883",children:"\u521b\u5efa\u73af\u5883"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ conda create -n <name> python=<version>                 # \u9009\u62e9 python \u7248\u672c\u521b\u5efa\u865a\u62df\u73af\u5883\u5e76\u547d\u540d\n\n $ conda create -n py3.7 python=3.7                        # \u521b\u5efa python 3.7 \u865a\u62df\u73af\u5883\n > Collecting package metadata (current_repodata.json): done\n > Solving environment: done\n > ......                                                  # \u4e0b\u8f7dpython\u7248\u672c\u5305\n > Retrieving notices: ...working... done\n"})}),"\n",(0,o.jsx)(a.h2,{id:"\u542f\u7528\u9000\u51fa",children:"\u542f\u7528\u9000\u51fa"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ conda activate <name>                                   # \u6fc0\u6d3b\u6307\u5b9a\u73af\u5883\n $ conda activate py3.7                                    # \u6fc0\u6d3b\u865a\u62df\u73af\u5883\n\n $ conda deactivate                                        # \u9000\u51fa\u5f53\u524d\u73af\u5883\n\n $ conda rename -n <old name> <new name>                   # \u91cd\u547d\u540d\u73af\u5883\n $ conda rename -n py3.9 py39\n > Source:      /root/anaconda3/envs/py3.9\n > Destination: /root/anaconda3/envs/py39\n > Packages: 21\n > Files: 926\n > Preparing transaction: done\n > Verifying transaction: done\n > Executing transaction: done\n"})}),"\n",(0,o.jsx)(a.h2,{id:"\u5220\u9664\u73af\u5883",children:"\u5220\u9664\u73af\u5883"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ conda env remove -n <name>                               # \u5220\u9664\u6307\u5b9a\u73af\u5883\n\n $ conda env remove -n py3.7                                # \u5220\u9664 py3.7 \u73af\u5883\n > Remove all packages in environment /root/anaconda3/envs/py3.7:\n"})}),"\n",(0,o.jsx)(a.h2,{id:"\u5305\u7ba1\u7406",children:"\u5305\u7ba1\u7406"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ conda list -n <name>\n $ conda list -n py3.7                                      # \u5217\u51fa\u73af\u5883\u5185\u6240\u6709\u5305\n > # packages in environment at /root/anaconda3/envs/py39:\n > #\n > # Name\n > ......\n\n $ conda install -n <name> <pkg1> <pkg2>                   # \u6307\u5b9a\u73af\u5883\u5b89\u88c5\u5305\n $ conda install -n  py39  toml  yaml                      # py39 \u73af\u5883\u5b89\u88c5 toml \u548c yaml \u5305\n\n $ conda uninstall <pkg> -n <name>                         # \u6307\u5b9a\u73af\u5883\u5378\u8f7d\u5305\n $ conda uninstall yaml -n py39\n\n $ conda update --all -n <name>                            # \u6307\u5b9a\u73af\u5883\u66f4\u65b0\u6240\u6709\u5305\n"})}),"\n",(0,o.jsx)(a.h2,{id:"\u66f4\u6362\u6e90",children:"\u66f4\u6362\u6e90"}),"\n",(0,o.jsx)(a.p,{children:"\u67e5\u770b\u5f53\u524d conda \u6e90"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ conda config --show channels\n > channels:\n > - defaults\n"})}),"\n",(0,o.jsxs)(a.p,{children:["\u7528\u6237\u8def\u5f84\u4e0b ",(0,o.jsx)(a.code,{children:".condarc"})," \u6587\u4ef6\u4fee\u6539\u6e90, \u65e0\u6587\u4ef6\u5219\u521b\u5efa"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"linux: $USER/.condarc"}),"\n",(0,o.jsx)(a.li,{children:"windows: C:\\Users%USER%.condarc"}),"\n"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:" $ cat ~/.condarc\n > channels:\n > - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/\n > - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/\n > - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/\n\n $ conda config --show channels\n > channels:\n >  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/cond-forge/\n >  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/\n >  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/\n"})}),"\n",(0,o.jsx)(a.p,{children:"\u56fd\u5185\u6e90"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-log",children:"channels:\n  - defaults\nshow_channel_urls: true\nssl_verify: false\ndefault_channels:\n  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/main\n  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/r\n  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/msys2\ncustom_channels:\n  conda-forge: https://mirrors.bfsu.edu.cn/anaconda/cloud\n  msys2: https://mirrors.bfsu.edu.cn/anaconda/cloud\n  bioconda: https://mirrors.bfsu.edu.cn/anaconda/cloud\n  menpo: https://mirrors.bfsu.edu.cn/anaconda/cloud\n  pytorch: https://mirrors.bfsu.edu.cn/anaconda/cloud\n  pytorch-lts: https://mirrors.bfsu.edu.cn/anaconda/cloud\n  simpleitk: https://mirrors.bfsu.edu.cn/anaconda/cloud\n"})})]})}function h(n={}){const{wrapper:a}={...(0,t.R)(),...n.components};return a?(0,o.jsx)(a,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,a,e)=>{e.d(a,{R:()=>s,x:()=>d});var o=e(6540);const t={},c=o.createContext(t);function s(n){const a=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function d(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(c.Provider,{value:a},n.children)}}}]);