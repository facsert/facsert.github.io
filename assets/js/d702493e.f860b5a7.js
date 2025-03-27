"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9691],{1889:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(74848),o=t(28453);const a={pubDatetime:new Date("2024-09-24T08:52:15.000Z"),title:"Python thread",slug:"Python thread",featured:!1,draft:!1,tags:["Python"],description:"Python \u591a\u7ebf\u7a0b"},l=void 0,s={id:"Python/python-thread",title:"Python thread",description:"Python \u591a\u7ebf\u7a0b",source:"@site/docs/Python/python-thread.md",sourceDirName:"Python",slug:"/Python/Python thread",permalink:"/docs/Python/Python thread",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-thread.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{pubDatetime:"2024-09-24T08:52:15.000Z",title:"Python thread",slug:"Python thread",featured:!1,draft:!1,tags:["Python"],description:"Python \u591a\u7ebf\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"Python sqlalchemy",permalink:"/docs/Python/Python sqlalchemy"},next:{title:"Python Type",permalink:"/docs/Python/Python Type"}},r={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u591a\u7ebf\u7a0b",id:"\u591a\u7ebf\u7a0b",level:2}];function c(n){const e={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(e.p,{children:["\u5355\u7ebf\u7a0b\u8868\u793a\u7a0b\u5e8f\u4e2d\u53ea\u6709\u4e00\u4e2a\u6267\u884c\u6d41, \u7a0b\u5e8f\u4efb\u4e00\u65f6\u95f4\u53ea\u6267\u884c\u4e00\u4e2a\u4efb\u52a1",(0,i.jsx)(e.br,{}),"\n","\u591a\u7ebf\u7a0b\u8868\u793a\u6709\u591a\u4e2a\u6267\u884c\u6d41, \u5355\u4e2a\u7a0b\u5e8f\u5728\u540c\u4e00\u65f6\u95f4\u6267\u884c\u591a\u4e2a\u4efb\u52a1"]}),"\n",(0,i.jsxs)(e.p,{children:["\u591a\u7ebf\u7a0b\u672c\u8d28\u662f CPU \u591a\u6838\u5fc3, \u5982 CPU 8 \u6838 12 \u7ebf\u7a0b, \u8868\u793a 8 \u4e2a\u7269\u7406\u6838\u5fc3, 4 \u4e2a\u6838\u5fc3\u652f\u6301\u8d85\u7ebf\u7a0b, 1 \u4e2a\u6838\u5fc3\u652f\u6301\u53cc\u7ebf\u7a0b",(0,i.jsx)(e.br,{}),"\n","\u5176\u4f59 4 \u4e2a\u6838\u5fc3\u5bf9\u5e94 1 \u4e2a\u6838\u5fc3, \u82e5\u786c\u4ef6\u4ec5\u6709 1 \u4e2a\u6838\u5fc3\u4e14\u65e0\u8d85\u7ebf\u7a0b, \u4ee3\u7801\u5c42\u9762\u4f7f\u7528\u591a\u7ebf\u7a0b\u7ed3\u679c\u4f9d\u7136\u662f\u5355\u7ebf\u7a0b(\u7ebf\u7a0b\u5207\u6362)"]}),"\n",(0,i.jsx)(e.h2,{id:"\u591a\u7ebf\u7a0b",children:"\u591a\u7ebf\u7a0b"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"python"})," \u8bed\u8a00\u5185\u7f6e GIL \u9501(\u4e92\u65a5\u9501), \u540c\u4e00\u65f6\u95f4\u53ea\u6709 1 \u4e2a\u7ebf\u7a0b\u80fd\u6267\u884c, \u5b9e\u9645\u662f\u5728\u591a\u4e2a\u7ebf\u7a0b\u95f4\u6765\u56de\u6765\u56de\u5207\u6362",(0,i.jsx)(e.br,{}),"\n","GIL \u9501\u4f7f\u5f97\u591a\u7ebf\u7a0b\u5728\u6267\u884c CPU \u8ba1\u7b97\u5bc6\u96c6\u4efb\u52a1\u4e0d\u80fd\u8282\u7701\u65f6\u95f4, \u591a\u7ebf\u7a0b\u6267\u884c IO \u5bc6\u96c6\u4efb\u52a1\u53ef\u4ee5\u8282\u7ea6\u65f6\u95f4"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"import timeit\nfrom threading import Thread\n\n\ndef compute():\n    for _ in range(100_000_000):\n        pass\n\ndef single_compute():\n    compute()\n    compute()\n\ndef multi_compute():\n    t1, t2 = Thread(target=compute), Thread(target=compute)\n    t1.start()\n    t2.start()\n\n    t1.join()\n    t2.join()\n\nprint(f\"single: {timeit.timeit('single_compute()', number=1, globals=globals()) = }\")\nprint(f\"multi: {timeit.timeit('multi_compute()', number=1, globals=globals()) = }\")\n\n# \u8ba1\u7b97\u5bc6\u96c6\u4efb\u52a1\u4f7f\u7528\u591a\u7ebf\u7a0b\u7ed3\u679c\u4e0e\u5355\u7ebf\u7a0b\u7ed3\u679c\u76f8\u5dee\u4e0d\u5927, \u7c7b\u4f3c\u6284\u4e24\u7bc7\u6587\u7ae0, \u4e0d\u8bba\u6765\u56de\u5207\u8fd8\u662f\u6309\u987a\u5e8f\u90fd\u9700\u8981\u4e00\u76f4\u6284\nsingle: timeit.timeit('single_compute()', number=1, globals=globals()) = 3.9793272567912936\nmulti: timeit.timeit('multi_compute()', number=1, globals=globals()) = 3.7624008180573583\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"import timeit\nfrom threading import Thread\nfrom time import sleep\n\ndef io():\n    sleep(2)\n\ndef single_io():\n    io()\n    io()\n\ndef multi_io():\n    t1, t2 = Thread(target=io), Thread(target=io)\n    t1.start()\n    t2.start()\n\n    t1.join()\n    t2.join()\n\nprint(f\"single: {timeit.timeit('single_io()', number=1, globals=globals()) = }\")\nprint(f\"multi: {timeit.timeit('multi_io()', number=1, globals=globals()) = }\")\n\n# io \u5bc6\u96c6\u4efb\u52a1\u8fd1\u4e4e\u771f\u5b9e\u591a\u7ebf\u7a0b(\u74f6\u9888\u4e3b\u8981\u5728 IO, CPU \u5927\u90e8\u5206\u65f6\u95f4\u5728\u7b49\u5f85)\n# \u5b9e\u9645 io \u4efb\u52a1\u53d7\u7ebf\u7a0b\u5207\u6362\u5f00\u9500, \u78c1\u76d8 IO \u7b49\u56e0\u7d20, \u591a\u7ebf\u7a0b IO \u4efb\u52a1\u4e0d\u4e00\u5b9a\u4f1a\u6bd4\u5355\u7ebf\u7a0b\u5feb\nsingle: timeit.timeit('single_io()', number=1, globals=globals()) = 4.000157259404659\nmulti: timeit.timeit('multi_io()', number=1, globals=globals()) = 2.000672407448292\n"})}),"\n",(0,i.jsx)(e.p,{children:'python \u591a\u7ebf\u7a0b\u66f4\u5927\u7684\u610f\u4e49\u5728\u4e8e\u521b\u5efa\u591a\u4e2a\u5de5\u4f5c\u6d41, "\u540c\u65f6" \u6267\u884c\u591a\u4e2a\u4efb\u52a1'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:'from threading import Thread\n\ndef test():\n    print("do some task")\n\n# \u521b\u5efa\u7ebf\u7a0b\nt = Thread(target=test)\n\n# \u7ebf\u7a0b\u540e\u53f0\u6267\u884c\nt.start()\n\n# \u7b49\u5f85\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\nt.join()\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:'from time import sleep, time\nfrom datetime import datetime\nfrom threading import Thread\n\nfrom loguru import logger\n\nclass Chan:\n    """ \u5355\u4e2a\u7ebf\u7a0b\u5c01\u88c5\n    Params:\n        func: callable \u53ef\u6267\u884c\u51fd\u6570\n        params: dict|None=None \u51fd\u6570\u53c2\u6570\n        count: int=1 \u8bbe\u5b9a\u51fd\u6570\u6267\u884c\u6b21\u6570(\u5c0f\u4e8e 0 \u8868\u793a\u65e0\u9650\u6b21\u6570)\n        timeout: int=0 \u8bbe\u5b9a\u8d85\u65f6\u65f6\u95f4(\u5c0f\u4e8e\u7b49\u4e8e 0 \u8868\u793a\u65e0\u9650\u65f6\u95f4)\n        interval: int=0 \u5faa\u73af\u6267\u884c\u95f4\u9694\n    """\n\n    def __init__(self,\n        func: callable,\n        params: dict|None=None,\n        count: int=1,\n        timeout: int=0,\n        interval: int=0,\n    ) -> None:\n        self.timeout: int|float = timeout if timeout > 0 else float(\'inf\')\n        self.count: int|float = int(count) if count > 0 else float(\'inf\')\n        self.interval: int = interval\n\n        self.func: callable = func\n        self.params: dict = params if params else {}\n\n        self._running: bool = True\n\n        self.output: dict[datetime, any] = {}\n        self.thread: Thread = Thread(target=self.function, daemon=True)\n        self.pid: int = self.thread.native_id\n        self.alive: bool = self.thread.is_alive()\n\n    def function(self) -> None:\n        """ \u7ebf\u7a0b\u6267\u884c\u51fd\u6570 """\n        if self._running is False:\n            raise RuntimeError("Thread has already been started")\n\n        index, timeout = 0, time() + self.timeout\n        while True:\n            if not self._running:\n                break\n\n            self.output.update({datetime.now(): self.func(**(self.params))})\n            sleep(self.interval)\n            index += 1\n\n            if (index >= self.count or time() > timeout):\n                self._running = False\n                break\n\n        self.alive = False\n\n    def run(self) -> int:\n        """ \u6267\u884c\u7ebf\u7a0b """\n        self.thread.start()\n        self.pid = self.thread.native_id\n        self.alive = self.thread.is_alive()\n        return self.pid\n\n    def wait(self, timeout=None) -> dict[datetime, any]:\n        """ \u7b49\u5f85\u7ebf\u7a0b\u7ed3\u675f """\n        self.thread.join(timeout)\n        self.alive = self.thread.is_alive()\n        return self.output\n\n    def stop(self) -> bool:\n        """ \u4e3b\u52a8\u505c\u6b62\u7ebf\u7a0b(\u5f53\u6b21\u5faa\u73af\u6267\u884c\u5b8c\u540e\u505c\u6b62) """\n        self._running = False\n        self.alive = self.thread.is_alive()\n        return self.alive is False\n\ndef pool(chans: list[Chan], size: int=5, interval: float=0.1) -> list[Chan]:\n    """ \u7ebf\u7a0b\u6c60\u6267\u884c\u6c60\n        chans list[Chan]: \u7ebf\u7a0b\u5217\u8868\n        size int: \u7ebf\u7a0b\u6c60\u6700\u5927\u6570\u91cf\n        interval float: \u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\n    """\n    if not isinstance(size, int) or size <= 0:\n        raise ValueError("size must be int and bigger than 0")\n\n    group: list[Chan] = []\n    pool: list[Chan] = []\n    chan_list = chan_list[::-1]\n\n    while len(pool) < size and chan_list:\n        chan = chan_list.pop()\n        chan.run()\n        pool.append(chan)\n\n    while pool:\n        for index, chan in enumerate(pool):\n            if chan.alive:\n                continue\n\n            group.append(pool.pop(index))\n            if chan_list:\n                ch = chan_list.pop()\n                ch.run()\n                pool.append(ch)\n\n        sleep(interval)\n\n    return group\n\nif __name__ == \'__main__\':\n    def wait(second: int):\n        logger.info(f"wait {second} second")\n        sleep(second)\n        return second\n\n    c1 = Chan(func=wait, params={\'second\': 3}, count=2, timeout=6, interval=1)\n    c2 = Chan(func=wait, params={\'second\': 2}, count=2, interval=1)\n\n    pool([c1, c2], 2, 0.1)\n    logger.info(f"{c1.output=}, {c1.alive=}, {c1.pid=}")\n    logger.info(f"{c2.output=}, {c2.alive=}, {c2.pid=}")\n    logger.info("finish")\n'})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var i=t(96540);const o={},a=i.createContext(o);function l(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);