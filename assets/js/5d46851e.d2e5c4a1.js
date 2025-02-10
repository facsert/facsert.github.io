"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3349],{7633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=t(4848),r=t(8453);const o={pubDatetime:new Date("2023-11-23T08:58:24.000Z"),title:"Python loguru",slug:"Python loguru",featured:!1,draft:!1,tags:["Python"],description:"Python \u65e5\u5fd7\u6a21\u5757 loguru"},s=void 0,i={id:"Python/python-loguru",title:"Python loguru",description:"Python \u65e5\u5fd7\u6a21\u5757 loguru",source:"@site/docs/Python/python-loguru.md",sourceDirName:"Python",slug:"/Python/Python loguru",permalink:"/docs/Python/Python loguru",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-loguru.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{pubDatetime:"2023-11-23T08:58:24.000Z",title:"Python loguru",slug:"Python loguru",featured:!1,draft:!1,tags:["Python"],description:"Python \u65e5\u5fd7\u6a21\u5757 loguru"},sidebar:"tutorialSidebar",previous:{title:"Python flat dictionary",permalink:"/docs/Python/Python flat dictionary"},next:{title:"Python Magic Method",permalink:"/docs/Python/Python Magic Method"}},d={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e\u8f93\u51fa",id:"\u914d\u7f6e\u8f93\u51fa",level:2},{value:"\u81ea\u5b9a\u4e49\u8f93\u51fa",id:"\u81ea\u5b9a\u4e49\u8f93\u51fa",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,l.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.p,{children:"loguru \u662f\u4e00\u4e2a\u7b2c\u4e09\u65b9\u8bb0\u5f55\u65e5\u5fd7\u7684 Python \u5e93, \u53ef\u4ee5\u7b80\u5355\u5feb\u901f\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" $ python -m pip install loguru\n $ pip list | grep loguru\n > loguru             0.7.2\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'from loguru import logger\n\nlogger.info("this is a info log")\nlogger.error("this is a error log")\nlogger.debug("this is a debug log")\n\n2023-11-23 09:04:56.748 | INFO     | __main__:<module>:10 - this is a info log\n2023-11-23 09:04:56.749 | ERROR    | __main__:<module>:11 - this is a error log\n2023-11-23 09:04:56.749 | DEBUG    | __main__:<module>:12 - this is a debug log\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u8f93\u51fa",children:"\u914d\u7f6e\u8f93\u51fa"}),"\n",(0,l.jsx)(n.p,{children:"\u9ed8\u8ba4\u8f93\u51fa\u5305\u542b\u591a\u4e2a\u5185\u5bb9\u548c\u8bbe\u5b9a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"level : `'DEBUG'`                                                              # \u53ea\u663e\u793a DEBUG \u754c\u522b\u4e0a\u7684 log\nformat:  '<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>'\n  time : '<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green>'                       # 2023-11-23 09:04:56.749\n  level: '<level>{level: <8}</level>'                                          # INFO     \u5de6\u5bf9\u9f50, 8 \u4e2a\u5b57\u7b26, \u7a7a\u683c\u8865\u5168\n  model: '<cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan>'     # __main__:<module>:10 \u51fd\u6570\u540d, \u884c\u53f7\n  msg  : '<level>{message}</level>'                                            # this is a info log \u6253\u5370 log\n"})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Tag"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"TRACE"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"DEBUG"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"INFO"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"SUCCESS"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"WARNING"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"ERROR"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"CRITICAL"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Severity"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"5"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"10"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"20"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"25"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"30"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"40"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"50"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"method"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"trace"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"debug"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"info"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"success"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"warning"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"error"})}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.code,{children:"critical"})})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u9ed8\u8ba4\u8f93\u51fa\u5185\u5bb9\u6bd4\u8f83\u5197\u4f59, \u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"logger.remove()"})," \u5220\u9664\u9ed8\u8ba4\u8f93\u51fa, \u7136\u540e\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"logger.add()"})," \u91cd\u65b0\u914d\u7f6e\u8f93\u51fa."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"import sys\nfrom loguru import logger\n\nlogger.remove()                                                                # \u5220\u9664\u9ed8\u8ba4\u8f93\u51fa\nfmt = '[<level>{level: <8}</level>][<green>{time:YYYY-MM-DD HH:mm:ss}</green>]: <level>{message}</level>'\nlogger.add(sys.stderr,  level='INFO', format=fmt)                              # \u91cd\u65b0\u914d\u7f6e\u9ed8\u8ba4\u8f93\u51fa, level='INFO' \u8868\u793a\u8f93\u51faINFO\u7ea7\u522b\u4ee5\u4e0a\u7684\u65e5\u5fd7\n\nlogger.info(\"this is a info log\")\nlogger.error(\"this is a error log\")\nlogger.debug(\"this is a debug log\")\n\n[INFO    ][2023-11-23 09:12:40]: this is a info log\n[ERROR   ][2023-11-23 09:12:40]: this is a error log\n"})}),"\n",(0,l.jsx)(n.p,{children:"logger.add \u53c2\u6570"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"logger.add(\n    sink,                                        # file \u5bf9\u8c61, logging handle \u6a21\u5757\u6216\u8005\u5b57\u7b26\u4e32; sys.stderr, 'log.txt'\n    *,\n    level=_defaults.LOGURU_LEVEL,                # \u65e5\u5fd7\u8f93\u51fa\u7b49\u7ea7\n    format=_defaults.LOGURU_FORMAT,              # \u65e5\u5fd7\u683c\u5f0f\n    filter=_defaults.LOGURU_FILTER,              # \u5224\u65ad\u5185\u5bb9\u662f\u5426\u8f93\u51fa\u5230 sink\n    colorize=_defaults.LOGURU_COLORIZE,          # \u5185\u5bb9\u5305\u542b\u989c\u8272\u6807\u8bb0\u662f\u5426\u5728\u7ec8\u7aef\u7740\u8272\n    serialize=_defaults.LOGURU_SERIALIZE,        # \u662f\u5426\u5c06\u5185\u5bb9\u8f6c\u6362\u4e3a json\n    backtrace=_defaults.LOGURU_BACKTRACE,\n    diagnose=_defaults.LOGURU_DIAGNOSE,          # \u5f02\u5e38\u8ddf\u8e2a\uff0c\u6253\u5370\u65f6\u662f\u5426\u663e\u793a\u53d8\u91cf\u503c\n    enqueue=_defaults.LOGURU_ENQUEUE,\n    context=_defaults.LOGURU_CONTEXT,\n    catch=_defaults.LOGURU_CATCH,\n\n    # \u82e5 sink \u4e3a\u6587\u4ef6\u65f6, \u53ef\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\n    rotation:                                    # \u8bbe\u5b9a\u521b\u5efa\u65b0\u6587\u4ef6\u8bb0\u7684\u6761\u4ef6, \u56fa\u5b9a\u65f6\u95f4\u65b0\u5efa('00:00', '1 week'), \u6587\u4ef6\u5230\u8fbe\u6307\u5b9a\u5927\u5c0f\u65b0\u5efa('500 MB')\n    retention:                                   # \u65e5\u5fd7\u4fdd\u7559\u6761\u4ef6, \u4fdd\u7559 10 \u5929:'10 days', \u4fdd\u755910\u4e2a\u6587\u4ef6: 10\n    compression:                                 # \u65e5\u5fd7\u6587\u4ef6\u5728\u5173\u95ed\u65f6\u5e94\u8f6c\u6362\u4e3a\u7684\u538b\u7f29\u6216\u5b58\u6863\u683c\u5f0f, 'zip', 'tar.gz'\n    delay:                                       # \u662f\u5728\u914d\u7f6e sink \u540e\u7acb\u5373\u521b\u5efa\u6587\u4ef6\uff0c\u8fd8\u662f\u5ef6\u8fdf\u5230\u7b2c\u4e00\u6761\u8bb0\u5f55\u7684\u6d88\u606f\u65f6\u518d\u521b\u5efa, \u9ed8\u8ba4\u4e3a False\u3002\n    mode:                                        # \u5185\u7f6e open() \u51fd\u6570\u7684\u6253\u5f00\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a a (\u4ee5\u8ffd\u52a0\u6a21\u5f0f\u6253\u5f00\u6587\u4ef6)\n    buffering:                                   # \u5185\u7f6e open() \u51fd\u6570\u7684\u7f13\u51b2\u7b56\u7565\uff0c\u9ed8\u8ba4\u4e3a1\uff08\u884c\u7f13\u51b2\u6587\u4ef6\uff09\u3002\n    encoding:                                    # \u5185\u7f6e open() \u51fd\u6570\u7684\u6587\u4ef6\u7f16\u7801\uff0c\u5982\u679c None\uff0c\u5219\u9ed8\u8ba4\u4e3a locale.getpreferredencoding()\u3002\n    **kwargs\n)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u8f93\u51fa",children:"\u81ea\u5b9a\u4e49\u8f93\u51fa"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'logger.add(\'report.log\', level=\'INFO\', rotation="1 days", retention="1 months")\nlogger.level("GET", no=21, color="<white>")\nlogger.level("PUT", no=22, color="<white>")\nlogger.level("POST", no=23, color="<white>")\nlogger.add(\'requests.log\', level=\'GET\', filter=lambda r: 20 < r[\'level\'].no < 24, rotation="1 days", retention="1 months")\n\nlogger.log("GET", "request get")\nlogger.log("PUT", "request PUT")\nlogger.log("POST", "request POST")\n\n[GET     ][2023-12-13 21:42:21]: request get\n[PUT     ][2023-12-13 21:47:51]: request put\n[POST    ][2023-12-13 21:48:03]: request post\n'})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var l=t(6540);const r={},o=l.createContext(r);function s(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);