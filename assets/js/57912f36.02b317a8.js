"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1510],{4193:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var h=n(4848),l=n(8453);const t={author:"facsert",pubDatetime:new Date("2022-08-28T15:28:43.000Z"),title:"zsh",slug:"zsh",featured:!1,draft:!1,tags:["zsh","Tool"],description:"zsh \u662f\u4e00\u4e2a\u9ad8\u6548\u7f8e\u89c2\u7684 shell"},i=void 0,o={id:"Tool/zsh",title:"zsh",description:"zsh \u662f\u4e00\u4e2a\u9ad8\u6548\u7f8e\u89c2\u7684 shell",source:"@site/docs/Tool/zsh.md",sourceDirName:"Tool",slug:"/Tool/zsh",permalink:"/docs/Tool/zsh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tool/zsh.md",tags:[{inline:!0,label:"zsh",permalink:"/docs/tags/zsh"},{inline:!0,label:"Tool",permalink:"/docs/tags/tool"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2022-08-28T15:28:43.000Z",title:"zsh",slug:"zsh",featured:!1,draft:!1,tags:["zsh","Tool"],description:"zsh \u662f\u4e00\u4e2a\u9ad8\u6548\u7f8e\u89c2\u7684 shell"},sidebar:"tutorialSidebar",previous:{title:"vim",permalink:"/docs/Tool/vim"}},a={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"zsh \u4ecb\u7ecd",id:"zsh-\u4ecb\u7ecd",level:2},{value:"\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"\u5b89\u88c5\u4e0e\u914d\u7f6e",level:2},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:2},{value:"\u914d\u7f6e\u4e3b\u9898",id:"\u914d\u7f6e\u4e3b\u9898",level:3},{value:"powerlevel10k",id:"powerlevel10k",level:3},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u547d\u4ee4\u63d0\u793a",id:"\u547d\u4ee4\u63d0\u793a",level:3},{value:"\u667a\u80fd\u8865\u5168",id:"\u667a\u80fd\u8865\u5168",level:3},{value:"\u5feb\u901f\u8df3\u8f6c",id:"\u5feb\u901f\u8df3\u8f6c",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"zsh-syntax-highlighting",id:"zsh-syntax-highlighting",level:3},{value:"zsh-autosuggestions",id:"zsh-autosuggestions",level:3},{value:"z",id:"z",level:3},{value:"extract",id:"extract",level:3}];function r(s){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...s.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,h.jsx)(e.h2,{id:"zsh-\u4ecb\u7ecd",children:"zsh \u4ecb\u7ecd"}),"\n",(0,h.jsx)(e.p,{children:"zsh\u80fd\u57fa\u672c\u5b8c\u7f8e\u517c\u5bb9bash\u7684\u547d\u4ee4\uff0c\u5e76\u4e14\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u4f18\u96c5,\nzsh \u53ef\u4ee5\u901a\u8fc7 oh-my-zsh \u6dfb\u52a0\u4e3b\u9898\u548c\u63d2\u4ef6\u5b9e\u73b0\u7f8e\u89c2\u9ad8\u6548\u7684\u547d\u4ee4\u884c\u4f53\u9a8c"}),"\n",(0,h.jsx)(e.h2,{id:"\u5b89\u88c5\u4e0e\u914d\u7f6e",children:"\u5b89\u88c5\u4e0e\u914d\u7f6e"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:" $ sudo apt install zsh                          # Ubuntu \u76f4\u63a5\u4e0b\u8f7d\u5b89\u88c5\n $ yum install zsh                               # Centos Redhat yum \u5b89\u88c5\u7248\u672c\u4f4e\u65e0\u6cd5\u6dfb\u52a0 oh-my-zsh\n \n $ zsh && echo $SHELL                            # mac \u9ed8\u8ba4\u662f zsh\n > /bin/zsh\n\n $ cat /etc/passwd | grep root                   # \u67e5\u770b root \u7528\u6237\u7684\u9ed8\u8ba4 shell\n"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:" $ zsh                                           # \u4f7f\u7528 zsh \u547d\u4ee4\u542f\u52a8 zsh\n $ cat /etc/shells                               # \u67e5\u770b\u6240\u6709 shell\n\n $ echo $SHELL                                   # \u67e5\u770b\u5f53\u524d shell\n > /bin/bash\n\n $ which zsh                                     # \u67e5\u770b zsh \u6267\u884c\u6587\u4ef6\u4f4d\u7f6e\n $ chsh -s /bin/zsh                              # /bin/zsh \u4e3a zsh \u6267\u884c\u6587\u4ef6\u4f4d\u7f6e(\u91cd\u65b0\u767b\u5f55\u8d26\u53f7\u751f\u6548)\n\n $ usermod --shell /usr/bin/zsh root             # root \u7528\u6237\u8bbe\u7f6e zsh \u4e3a\u9ed8\u8ba4 shell\n $ cat /etc/passwd |grep root                    # \u68c0\u67e5 root \u7528\u6237\u9ed8\u8ba4shell\n > root:x:0:0:root:/root:/usr/bin/zsh\n\n $ ~/.zshrc                                      # \u542f\u52a8 zsh \u65f6\u6267\u884c\u7684\u914d\u7f6e\u6587\u4ef6\n $ source ~/.zshrc                               # \u914d\u7f6e\u7acb\u5373\u751f\u6548\n"})}),"\n",(0,h.jsx)(e.p,{children:"\u6ce8: .zshrc \u53ef\u5220\u9664, \u542f\u52a8 zsh \u672a\u53d1\u73b0 .zshrc \u6587\u4ef6\u4f1a\u63d0\u793a\u91cd\u65b0\u914d\u7f6e zsh"}),"\n",(0,h.jsx)(e.h2,{id:"\u4e3b\u9898",children:"\u4e3b\u9898"}),"\n",(0,h.jsx)(e.p,{children:"oh-my-zsh \u662f zsh \u4e3b\u9898\u63a7\u5236\u5de5\u5177, \u5b89\u88c5\u540e\u53ef\u66f4\u6362\u4e3b\u9898, \u5b89\u88c5\u63d2\u4ef6"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:' # GitHub \u6e90\u7801\u5b89\u88c5\n $ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n # \u56fd\u5185\u955c\u50cf\n $ sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"\n'})}),"\n",(0,h.jsx)(e.p,{children:"\u6ce8: .oh-my-zsh \u9ed8\u8ba4\u5b89\u88c5\u5728 ~/.oh-my-zsh, \u4e3b\u9898\u5939\u4e3a ~/.oh-my-zsh/themes"}),"\n",(0,h.jsx)(e.h3,{id:"\u914d\u7f6e\u4e3b\u9898",children:"\u914d\u7f6e\u4e3b\u9898"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:' $ vi ~/.zshrc                                   # \u4fee\u6539 zsh \u914d\u7f6e\u6587\u4ef6\n\n > ZSH_THEME="<\u4e3b\u9898>"                              # \u66f4\u6362 .oh-my-zsh \u4e3b\u9898\n > export ZSH="<.oh-my-zsh\u4f4d\u7f6e>"                   # \u5b9a\u4e49 .oh-my-zsh \u4f4d\u7f6e\n'})}),"\n",(0,h.jsx)(e.p,{children:"\u6ce8: .oh-my-zsh \u7684\u4f4d\u7f6e\u662f\u53ef\u53d8\u7684, \u53ea\u8981\u5728 .zshrc \u914d\u7f6e\u4e2d\u6307\u5b9a\u5373\u53ef"}),"\n",(0,h.jsx)(e.h3,{id:"powerlevel10k",children:"powerlevel10k"}),"\n",(0,h.jsx)(e.p,{children:".oh-my-zsh \u6709\u5f88\u591a\u4e3b\u9898\u53ef\u66f4\u6362, powerlevel10k \u662f\u4e00\u6b3e\u7206\u706b\u7684\u4e3b\u9898"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:' $ git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\n\n $ vi ~/.zshrc                                   # \u4fee\u6539 zsh \u4e3b\u9898\n > ZSH_THEME="powerlevel10k/powerlevel10k"\n\n$ source ~/.zshrc                                # \u914d\u7f6e\u7acb\u5373\u751f\u6548\n\n$ p10k configure                                 # \u91cd\u65b0\u8bbe\u7f6e\u4e3b\u9898\u914d\u7f6e\n'})}),"\n",(0,h.jsxs)(e.p,{children:["powerlevel10k \u63a8\u8350\u4f7f\u7528 mesloLGS \u5b57\u4f53(",(0,h.jsx)(e.code,{children:"https://github.com/romkatv/powerlevel10k-media"})," \u4e0b\u8f7d\u5b89\u88c5)\n\u6ce8: \u914d\u7f6e\u751f\u6548\u540e, \u81ea\u52a8\u8fdb\u5165\u914d\u7f6e\u9009\u9879, \u9010\u4e00\u9009\u62e9\u5373\u53ef"]}),"\n",(0,h.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,h.jsx)(e.p,{children:"\u4ecb\u7ecd\u4e00\u4e9b\u9ad8\u6548\u529f\u80fd"}),"\n",(0,h.jsx)(e.h3,{id:"\u547d\u4ee4\u63d0\u793a",children:"\u547d\u4ee4\u63d0\u793a"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:" $ command  <Tab>                                # \u8f93\u5165\u547d\u4ee4, \u6309\u4e0b Tab \u4f1a\u663e\u793a\u53ef\u6267\u884c\u53c2\u6570\n\n $ date -<Tab>                                   # \u4f7f\u7528 Tab \u67e5\u770b\u63d0\u793a\n > --date       -d         -- output date specified by string\n > --help                  -- output help and exit\n > --file       -f         -- output dates specified in file\n"})}),"\n",(0,h.jsx)(e.h3,{id:"\u667a\u80fd\u8865\u5168",children:"\u667a\u80fd\u8865\u5168"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:" $ cd /h/f/D <Tab>                               # \u8def\u5f84\u7f29\u5199\u8865\u5168\n > cd /home/facser/Desktop/\n\n $ cd /home/facser/ <Tab> <Tab>                  # \u8fde\u7eed\u4e24\u6b21 Tab \u8fdb\u5165\u9009\u62e9\u6a21\u5f0f\n"})}),"\n",(0,h.jsx)(e.h3,{id:"\u5feb\u901f\u8df3\u8f6c",children:"\u5feb\u901f\u8df3\u8f6c"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:" $ d                                             # \u6267\u884c d \u547d\u4ee4, \u5217\u51fa\u4e4b\u524d\u8fdb\u5165\u7684\u76ee\u5f55, \u6570\u5b57\u9009\u62e9\n > 0       ~/Desktop\n > 1       ~/Desktop/test\n > 2       ~\n > 3       ~root\n\n $ cd - <Tab>                                    # \u540c\u4e0a, \u5217\u51fa\u4e4b\u524d\u76ee\u5f55, \u901a\u8fc7\u6570\u5b57\u9009\u62e9\n"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-zsh",children:" $ alias                                         # \u5217\u51fa\u6240\u6709\u5feb\u6377\u547d\u4ee4\n\n cd .. => ...                                    # \u5e38\u7528\u7684\u547d\u4ee4\u70ed\u952e\n cd - => -\n git status => gst\n git log --stat => glg\n git add --all => gaa\n git commit -a -s => gcas\n git push origin {curr_branch} => ggpush\n git pull origin {curr_branch} => ggpull\n"})}),"\n",(0,h.jsx)(e.h2,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,h.jsx)(e.p,{children:"oh-my-zsh \u53ef\u4ee5\u5b89\u88c5\u8bb8\u591a\u9ad8\u6548\u63d2\u4ef6, \u5b89\u88c5\u540e\u53ef\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd"}),"\n",(0,h.jsx)(e.h3,{id:"zsh-syntax-highlighting",children:"zsh-syntax-highlighting"}),"\n",(0,h.jsx)(e.p,{children:"\u9519\u8bef\u8bed\u6cd5\u9ad8\u4eae, \u6b63\u786e\u547d\u4ee4\u7eff\u8272, \u9519\u8bef\u547d\u4ee4\u7ea2\u8272"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-bash",children:" $ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-/root/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n\n $ vi ~/.bashrc                                  # \u7f16\u8f91 zsh \u914d\u7f6e\u6587\u4ef6, plugins \u6dfb\u52a0\u63d2\u4ef6\n > plugins=(\n >   ...\n >   zsh-syntax-highlighting\n > )\n\n $ source ~/.zshrc                               # \u914d\u7f6e\u7acb\u5373\u751f\u6548\n"})}),"\n",(0,h.jsx)(e.h3,{id:"zsh-autosuggestions",children:"zsh-autosuggestions"}),"\n",(0,h.jsx)(e.p,{children:"\u8865\u5168\u5386\u53f2\u547d\u4ee4"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-bash",children:" $ git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions\n\n $ vi ~/.bashrc                                  # \u7f16\u8f91 zsh \u914d\u7f6e\u6587\u4ef6, plugins \u6dfb\u52a0\u63d2\u4ef6\n > plugins=(\n >   ...\n >   zsh-autosuggestions\n > )\n\n $ source ~/.zshrc                               # \u914d\u7f6e\u7acb\u5373\u751f\u6548\n"})}),"\n",(0,h.jsx)(e.h3,{id:"z",children:"z"}),"\n",(0,h.jsx)(e.p,{children:"\u4ec5\u8f93\u5165\u6587\u4ef6\u5373\u53ef\u8df3\u8f6c\u5230\u66fe\u7ecf\u8fdb\u5165\u7684\u6587\u4ef6\u76ee\u5f55(oh-my-zsh\u81ea\u5e26,\u65e0\u9700\u4e0b\u8f7d)"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-bash",children:" $ vi ~/.bashrc                                  # \u7f16\u8f91 zsh \u914d\u7f6e\u6587\u4ef6, plugins \u6dfb\u52a0\u63d2\u4ef6\n > plugins=(\n >   ...\n >   z\n > )\n\n $ source ~/.zshrc                               # \u914d\u7f6e\u7acb\u5373\u751f\u6548\n\n $ ~/Desktop/zsh/a/b/c                           # \u8fdb\u5165\u8fc7 c \u6587\u4ef6\u76ee\u5f55\n $ ...                                           # \u968f\u610f\u8fdb\u5165\u5176\u4ed6\u8def\u5f84\n $\n $ z c                                           # z \u547d\u4ee4\u52a0\u6587\u4ef6\u5939\u540d\u5373\u53ef\u56de\u53bb\n"})}),"\n",(0,h.jsx)(e.h3,{id:"extract",children:"extract"}),"\n",(0,h.jsx)(e.p,{children:"\u4e00\u952e\u89e3\u538b tar, gz, zip, rar \u5305(oh-my-zsh\u81ea\u5e26,\u65e0\u9700\u4e0b\u8f7d)"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-bash",children:" $ vi ~/.bashrc                                  # \u7f16\u8f91 zsh \u914d\u7f6e\u6587\u4ef6, plugins \u6dfb\u52a0\u63d2\u4ef6\n > plugins=(\n >   ...\n >   extract\n > )\n\n $ x package.tar.gz                              # x \u547d\u4ee4\u52a0\u538b\u7f29\u5305\u5373\u53ef\u89e3\u538b\n $ x package.zip\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,h.jsx)(e,{...s,children:(0,h.jsx)(r,{...s})}):r(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var h=n(6540);const l={},t=h.createContext(l);function i(s){const e=h.useContext(t);return h.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),h.createElement(t.Provider,{value:e},s.children)}}}]);