"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4842],{94859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453);const o={pubDatetime:new Date("2023-12-13T20:57:56.000Z"),title:"Python requests",slug:"Python requests",featured:!1,draft:!1,tags:["Python","requests"],description:"Python HTTP \u6a21\u5757 requests"},a=void 0,l={id:"Python/python-requests",title:"Python requests",description:"Python HTTP \u6a21\u5757 requests",source:"@site/docs/Python/python-requests.md",sourceDirName:"Python",slug:"/Python/Python requests",permalink:"/docs/Python/Python requests",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-requests.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"},{inline:!0,label:"requests",permalink:"/docs/tags/requests"}],version:"current",frontMatter:{pubDatetime:"2023-12-13T20:57:56.000Z",title:"Python requests",slug:"Python requests",featured:!1,draft:!1,tags:["Python","requests"],description:"Python HTTP \u6a21\u5757 requests"},sidebar:"tutorialSidebar",previous:{title:"Python mongo",permalink:"/docs/Python/Python mongo"},next:{title:"Python sqlalchemy",permalink:"/docs/Python/Python sqlalchemy"}},i={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"HTTP",id:"http",level:2},{value:"\u53d1\u9001\u8bf7\u6c42",id:"\u53d1\u9001\u8bf7\u6c42",level:2},{value:"GET",id:"get",level:3},{value:"POST",id:"post",level:3},{value:"Response",id:"response",level:2},{value:"\u6587\u4ef6\u4f20\u8f93",id:"\u6587\u4ef6\u4f20\u8f93",level:2},{value:"\u4e0a\u4f20\u6587\u4ef6",id:"\u4e0a\u4f20\u6587\u4ef6",level:3},{value:"\u4e0b\u8f7d\u6587\u4ef6",id:"\u4e0b\u8f7d\u6587\u4ef6",level:3}];function u(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"requests \u662f\u4e00\u4e2a\u7b80\u5355\u5f3a\u5927\u7684 http \u8bf7\u6c42\u5e93\uff0c\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65"}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' $ python -m pip install requests\n $ python -c "import requests" && echo $?\n > 0\n'})}),"\n",(0,s.jsx)(n.h2,{id:"http",children:"HTTP"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"requests"})," \u662f\u4e00\u4e2a python \u7684 http \u5e93, \u5b83\u53ef\u4ee5\u7528\u6765\u53d1\u9001 http \u8bf7\u6c42, \u5e76\u63a5\u6536 http \u54cd\u5e94",(0,s.jsx)(n.br,{}),"\n","HTTP \u7684\u5168\u79f0\u662f HyperText Transfer Protocol (\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae)\u7684\u7f29\u5199\uff0c\u662f\u4e00\u79cd\u5efa\u7acb\u5728 TCP \u4e0a\u7684\u65e0\u72b6\u6001\u8fde\u63a5",(0,s.jsx)(n.br,{}),"\n","HTTP \u662f\u4e92\u8054\u7f51\u7684\u57fa\u7840\u534f\u8bae\uff0c\u7528\u4e8e\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u5b83\u89c4\u5b9a\u4e86\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u683c\u5f0f\uff0c\u5305\u62ec\u8bf7\u6c42\u4e0e\u54cd\u5e94\u7684\u683c\u5f0f",(0,s.jsx)(n.br,{}),"\n","\u5ba2\u6237\u7aef\u901a\u8fc7\u5730\u5740\u94fe\u63a5\u751f\u6210 HTTP \u62a5\u6587, \u5e76\u53d1\u9001\u7ed9\u670d\u52a1\u5668, \u670d\u52a1\u5668\u6839\u636e\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u54cd\u5e94"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# \u8bf7\u6c42 URL\nhttp://localhost:8001/node/get?id=1\n\n# HTTP \u62a5\u6587\u4e3b\u8981\u4fe1\u606f\nRequest URL: http://localhost:8001/node/get?id=1 # \u8bf7\u6c42 URL\nRequest Method: GET                              # \u8bf7\u6c42\u65b9\u6cd5\nStatus Code: 200 OK                              # \u54cd\u5e94\u72b6\u6001\u7801\nRemote Address: 127.0.0.1:8001\nReferrer Policy: strict-origin-when-cross-origin\n\n# chrome General \u8bf7\u6c42\u62a5\u6587\u6240\u6709\u4fe1\u606f\naccept: application/json                         # \u5ba2\u6237\u7aef\u63a5\u6536\u7684\u6570\u636e\u683c\u5f0f\nAccept-Encoding: gzip, deflate, br               # \u5ba2\u6237\u7aef\u63a5\u6536\u7684\u6570\u636e\u538b\u7f29\u683c\u5f0f\nAccept-Language: zh-CN,zh;q=0.9                  # \u5ba2\u6237\u7aef\u63a5\u6536\u7684\u8bed\u8a00\nCache-Control: no-cache\nConnection: keep-alive                           # \u8fde\u63a5\u7c7b\u578b\nHost: localhost:8001                             # \u670d\u52a1\u5668\u5730\u5740\nPragma: no-cache\nReferer: http://localhost:8001/\nsec-ch-ua: "Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Windows"\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: same-origin\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36\n\n# HTTP \u54cd\u5e94\ncontent-length: 39                               # \u54cd\u5e94\u6570\u636e\u957f\u5ea6\ncontent-type: application/json                   # \u54cd\u5e94\u6570\u636e\u683c\u5f0f\ndate: Wed, 03 Jan 2024 13:48:14 GMT              # \u54cd\u5e94\u65f6\u95f4\nserver: uvicorn\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53d1\u9001\u8bf7\u6c42",children:"\u53d1\u9001\u8bf7\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"request \u652f\u6301\u591a\u79cd\u79cd\u57fa\u672c\u8bf7\u6c42\u65b9\u6cd5, \u5e38\u7528\u6709 4 \u79cd(RESTFUL API):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GET: \u83b7\u53d6\u6570\u636e"}),"\n",(0,s.jsx)(n.li,{children:"POST: \u65b0\u589e\u6570\u636e"}),"\n",(0,s.jsx)(n.li,{children:"PUT: \u4fee\u6539\u6570\u636e"}),"\n",(0,s.jsx)(n.li,{children:"DELETE: \u5220\u9664\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'import requests\n\n# \u6839\u636e\u6e90\u7801, \u6240\u6709\u8bf7\u6c42\u65b9\u6cd5\u90fd\u662f\u5bf9 `request(method, url, **kwargs)` \u7684\u5c01\u88c5\nrequests.get(url, params=None, **kwargs)\n=> requests.request("get", url, params=params, **kwargs)\n\nrequests.post(url, data=None, json=None, **kwargs)\n=> request("post", url, data=data, json=json, **kwargs)\n\nrequests.put(url, data=None, **kwargs)\n=> requests.request("put", url, data=data, **kwargs)\n\nrequests.delete(url, **kwargs)\n=> requests.request("delete", url, **kwargs)\n\n# request \u6ce8\u91ca\u4e3b\u8981\u53c2\u6570\n"""Constructs and sends a :class:`Request <Request>`.\n\n:param method\uff1a\u7528\u4e8e\u65b0\u7c7b\u7684\u65b9\u6cd5\uff1aRequest \u5bf9\u8c61\uff1aGET\u3001OPTIONS\u3001Head\u3001POST\u3001PUT\u3001PATCH \u6216 DELETE\n:param url\uff1a`Request`\u5bf9\u8c61\u7684URL\n:param params:\uff08\u53ef\u9009\uff09\u5b57\u5178\uff0c\u8981\u53d1\u9001\u7684\u5143\u7ec4\u6216\u5b57\u8282\u5217\u8868, \u5728\uff1aclass:`Request`\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u4e2d\n:param data:(\u53ef\u9009) \u5b57\u5178\u3001\u5143\u7ec4\u5217\u8868\u3001\u5b57\u8282\u6216\u7c7b\u4f3c\u6587\u4ef6\u7684\u8981\u5728\uff1a\u7c7b\u7684\u4e3b\u4f53\u4e2d\u53d1\u9001\u7684\u5bf9\u8c61\uff1a`Request`\n:param json:\uff08\u53ef\u9009\uff09\u8981\u5728\uff1a\u7c7b\u7684\u4e3b\u4f53\u4e2d\u53d1\u9001\u7684JSON\u53ef\u5e8f\u5217\u5316Python\u5bf9\u8c61\uff1a`Request`\n:param headers:\uff08\u53ef\u9009\uff09\u8981\u53d1\u9001\u7684HTTP\u6807\u5934\u7684\u5b57\u5178\uff1a\u7c7b\uff1a`Request`\n:param Cookie:\uff08\u53ef\u9009\uff09Dict\u6216CookieJar\u5bf9\u8c61\u8981\u4e0e\uff1aclass:`Request`\u4e00\u8d77\u53d1\u9001\n:param auth:\uff08\u53ef\u9009\uff09\u7528\u4e8e\u542f\u7528\u57fa\u672c/\u6458\u8981/\u81ea\u5b9a\u4e49HTTP\u8eab\u4efd\u9a8c\u8bc1\u7684\u8eab\u4efd\u9a8c\u8bc1\u5143\u7ec4\n:param timeout:\uff08\u53ef\u9009\uff09\u7b49\u5f85\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u7684\u79d2\u6570\u5728\u653e\u5f03\u4e4b\u524d\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u6d6e\u70b9\u6570\uff0c\u6216\u4e00\u4e2a\uff1aref:`(\u8fde\u63a5\u8d85\u65f6\uff0c\u8bfb\u53d6timeout)<timeout>`\u5143\u7ec4\n:param stream:\uff08\u53ef\u9009\uff09\u5982\u679c``False``\uff0c\u54cd\u5e94\u5185\u5bb9\u5c06\u7acb\u5373\u4e0b\u8f7d\n"""\n'})}),"\n",(0,s.jsx)(n.h3,{id:"get",children:"GET"}),"\n",(0,s.jsxs)(n.p,{children:["GET \u8bf7\u6c42\u53ef\u5728 url \u4e2d\u643a\u5e26\u53c2\u6570, \u4ee5 ",(0,s.jsx)(n.code,{children:"?"})," \u5206\u754c, ",(0,s.jsx)(n.code,{children:"&"})," \u5206\u5272\u591a\u4e2a\u53c2\u6570",(0,s.jsx)(n.br,{}),"\n","\u5982: ",(0,s.jsx)(n.code,{children:"http://localhost:8001/node/get?name=lily&age=18"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests\n\n# \u4ee5\u4e0b 4 \u79cd\u65b9\u5f0f\u7b49\u6548\nr = requests.get('http://localhost:8001/person?name=lily')\nr = requests.get('http://localhost:8001/person', params={'name': 'lily'})\nr = requests.request('GET', 'http://localhost:8001/person?name=lily')\nr = requests.request('GET', 'http://localhost:8001/person', params={'name': 'lily'})\n\nprint(r.status_code)\nprint(r.text)\n\n# requetst.get \u6e90\u7801\ndef get(url, params=None, **kwargs):\n    r\"\"\"Sends a GET request.\n\n    :param url: URL for the new :class:`Request` object.\n    :param params: (optional) Dictionary, list of tuples or bytes to send\n        in the query string for the :class:`Request`.\n    :param \\*\\*kwargs: Optional arguments that ``request`` takes.\n    :return: :class:`Response <Response>` object\n    :rtype: requests.Response\n    \"\"\"\n\n    return request(\"get\", url, params=params, **kwargs)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"post",children:"POST"}),"\n",(0,s.jsxs)(n.p,{children:["POST \u8bf7\u6c42\u4e00\u822c\u7528\u4e8e\u5411\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e, \u5982: \u8868\u5355\u63d0\u4ea4, \u6587\u4ef6\u4e0a\u4f20\u7b49",(0,s.jsx)(n.br,{}),"\n","POST \u8bf7\u6c42\u5728\u8bf7\u6c42\u4f53\u4e2d\u53d1\u9001\u6570\u636e, \u5982: ",(0,s.jsx)(n.code,{children:"http://localhost:8001/node/post"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nr = requests.post(\'http://localhost:8001/node/post\', data={\'name\': \'lily\'})\n\n# data \u5bf9\u5e94\u524d\u7aef\u4e2d\u7684\u8868\u5355\u7c7b\u578b\u6570\u636e(\u4e00\u822c\u662f form \u7ec4\u4ef6)\n# json \u5bf9\u5e94\u524d\u7aef\u4e2d JS \u5bf9\u8c61\u7c7b\u578b\u6570\u636e\ndef post(url, data=None, json=None, **kwargs):\n    r"""Sends a POST request.\n\n    :param url: URL for the new :class:`Request` object.\n    :param data: (optional) Dictionary, list of tuples, bytes, or file-like\n        object to send in the body of the :class:`Request`.\n    :param json: (optional) A JSON serializable Python object to send in the body of the :class:`Request`.\n    :param \\*\\*kwargs: Optional arguments that ``request`` takes.\n    :return: :class:`Response <Response>` object\n    :rtype: requests.Response\n    """\n\n    return request("post", url, data=data, json=json, **kwargs)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"import requests\n\nr = requests.get('http://localhost:8001/person?name=lily')\n\n# attr\nr.status_code                                    # \u54cd\u5e94\u72b6\u6001\u7801\nr.url                                            # \u8bf7\u6c42\u94fe\u63a5\nr.headers                                        # \u54cd\u5e94\u5934\nr.content                                        # \u54cd\u5e94\u4f53, \u5e38\u7528\u4e8e\u63a5\u6536\u7c7b\u6587\u4ef6\u6570\u636e\nr.text                                           # \u54cd\u5e94 unicode \u5b57\u7b26\u4e32\n\n# method\nr.ok()                                           # \u72b6\u6001\u7801\u5c0f\u4e8e 400 True, \u5426\u5219\u4e3a False\nr.close()                                        # \u5173\u95ed\u54cd\u5e94, \u505c\u6b62\u63a5\u6536\nr.iter_lines(chunk_size=512, decode_unicode=False, delimiter=None) # \u9010\u884c\u8bfb\u53d6\u54cd\u5e94\u4f53\nr.json(**kwargs)                                 # \u5c06\u54cd\u5e94\u4f53\u8f6c\u4e3a json \u683c\u5f0f\u6570\u636e\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests\n\n# \u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u6587\u672c\u5185\u5bb9\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.text)\n\n# \u8fd4\u56de\u54cd\u5e94\u4f53\u7684 JSON \u6570\u636e\nprint(r.json())\n\n# \u8fd4\u56de\u54cd\u5e94\u72b6\u6001\u7801\nprint(r.status_code)\n\n# \u8fd4\u56de\u54cd\u5e94\u5934\nprint(r.headers)\n\n# \u8fd4\u56de\u8bf7\u6c42\u7684 URL\nprint(r.url)\n\n# \u8fd4\u56de\u54cd\u5e94\u7684 cookies\nprint(r.cookies)\n\n# \u8fd4\u56de\u54cd\u5e94\u7684\u7f16\u7801\u683c\u5f0f\nprint(r.encoding)\n\n# \u5982\u679c\u54cd\u5e94\u72b6\u6001\u7801\u4e0d\u662f 200, \u5219\u629b\u51fa\u5f02\u5e38\nr.raise_for_status()\n\n# \u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9\nprint(r.content)\n\n# \u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u8fed\u4ee3\u5668, \u8fed\u4ee3\u5668\u6bcf\u8fed\u4ee3\u4e00\u6b21, \u5c31\u8fd4\u56de\u4e00\u884c\u5185\u5bb9\nfor line in r.iter_lines():\n    print(line)\n\n# \u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u8fed\u4ee3\u5668, \u8fed\u4ee3\u5668\u6bcf\u8fed\u4ee3\u4e00\u6b21, \u5c31\u8fd4\u56de\u4e00\u90e8\u5206\u5185\u5bb9\nfor chunk in r.iter_content(chunk_size=1024):\n    print(chunk)\n\n# \u5173\u95ed\u54cd\u5e94\u4f53\nr.close()\n\n# \u8fd4\u56de\u539f\u59cb\u7684\u54cd\u5e94\u5bf9\u8c61\nprint(r.raw)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6587\u4ef6\u4f20\u8f93",children:"\u6587\u4ef6\u4f20\u8f93"}),"\n",(0,s.jsx)(n.p,{children:"requests \u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u548c\u4e0b\u8f7d"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0a\u4f20\u6587\u4ef6",children:"\u4e0a\u4f20\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests\n\nfiles = {'file': open('test.txt', 'rb')}\nr = requests.post('http://localhost:8001/node/upload', files=files)\n\n# \u4e0a\u4f20\u6587\u4ef6, \u5e76\u6307\u5b9a\u6587\u4ef6\u540d\nfiles = {'file': ('test.txt', open('test.txt', 'rb'))}\nr = requests.post('http://localhost:8001/node/upload', files=files)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0b\u8f7d\u6587\u4ef6",children:"\u4e0b\u8f7d\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests\n\n# \u5c0f\u6587\u4ef6\u4e0b\u8f7d\nr = requests.get('http://localhost:8001/node/download')\nwith open('test.txt', 'wb') as f:\n    f.write(r.content)\n\n# \u6d41\u5f0f\u4e0b\u8f7d, \u8fb9\u4e0b\u8fb9\u5b58, \u9002\u5408\u5927\u6587\u4ef6\nr = requests.get('http://localhost:8001/node/download')\nwith open('test.txt', 'wb') as f:\n    for chunk in r.iter_content(1024):\n        f.write(chunk)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);