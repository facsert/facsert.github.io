"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5811],{41541:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(74848),o=t(28453);const r={pubDatetime:new Date("2023-07-10T09:29:19.000Z"),title:"Go Gin",slug:"Go Gin",featured:!1,draft:!1,tags:["Go","Gin"],description:"Go Web \u6846\u67b6 Gin"},a=void 0,s={id:"Go/modules/go-gin",title:"Go Gin",description:"Go Web \u6846\u67b6 Gin",source:"@site/docs/Go/modules/go-gin.md",sourceDirName:"Go/modules",slug:"/Go/modules/Go Gin",permalink:"/docs/Go/modules/Go Gin",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/modules/go-gin.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"},{inline:!0,label:"Gin",permalink:"/docs/tags/gin"}],version:"current",frontMatter:{pubDatetime:"2023-07-10T09:29:19.000Z",title:"Go Gin",slug:"Go Gin",featured:!1,draft:!1,tags:["Go","Gin"],description:"Go Web \u6846\u67b6 Gin"},sidebar:"tutorialSidebar",previous:{title:"Go File IO",permalink:"/docs/Go/modules/Go File IO"},next:{title:"Go Gorm",permalink:"/docs/Go/modules/Go Gorm"}},c={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u8def\u7531\u53c2\u6570",id:"\u8def\u7531\u53c2\u6570",level:2},{value:"Query \u53c2\u6570",id:"query-\u53c2\u6570",level:2},{value:"Form \u53c2\u6570",id:"form-\u53c2\u6570",level:2},{value:"JSON \u53c2\u6570",id:"json-\u53c2\u6570",level:3},{value:"\u53c2\u6570\u7ed1\u5b9a",id:"\u53c2\u6570\u7ed1\u5b9a",level:3},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3}];function g(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://gin-gonic.com/zh-cn/",children:"Gin \u5b98\u7f51"})}),"\n",(0,i.jsx)(e.p,{children:"Gin \u662f\u4e00\u4e2a\u7528 Go (Golang) \u7f16\u5199\u7684 HTTP Web \u6846\u67b6"}),"\n",(0,i.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"go get -u"})," \u4e0b\u8f7d\u6700\u65b0\u7684 gin \u5305, \u540c\u65f6\u628a\u4f9d\u8d56\u4fe1\u606f\u5199\u5165 go.mod"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" $ go env -w GOPROXY=https://goproxy.cn,direct             # \u8bbe\u7f6e go \u4e0b\u8f7d\u6e90\u4e3a\u56fd\u5185\u6e90\n $ go get -u github.com/gin-gonic/gin                      # -u \u5f3a\u5236\u4f7f\u7528\u7f51\u7edc\u4e0b\u8f7d\u5b89\u88c5 Gin \u4f9d\u8d56\u5305\n\n $ go list -m all | grep gin\n > github.com/gin-gonic/gin v1.9.1\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" $ go mod init web                                         # \u521d\u59cb\u5316 web \u9879\u76ee\n $ touch main.go                                           # \u521b\u5efa\u9879\u76ee\u5165\u53e3\u6587\u4ef6\n $ go get -u github.com/gin-gonic/gin                      # \u5b89\u88c5 gin \u6846\u67b6\n\n $ ls -l\n total 24\n > -rw-r--r-- 1 root root  2265 Jul 19 02:45 go.mod\n > -rw-r--r-- 1 root root 15259 Jul 19 02:45 go.sum\n > -rw-r--r-- 1 root root   234 Jul 19 03:18 main.go\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7f16\u8f91 main.go \u6587\u4ef6\uff0c\u6dfb\u52a0\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gin-gonic/gin"                             // \u5f15\u5165 gin\n    "net/http"\n)\n\nfunc main() {\n    engine := gin.Default()                                // \u5b9e\u4f8b\u5316 engine \u5bf9\u8c61\n    engine.GET("/", webRoot)                               // \u6ce8\u518c\u8def\u7531 / \u53ca\u5176\u5904\u7406\u51fd\u6570\n    engine.GET("/index", webIndex)                         // \u6ce8\u518c\u8def\u7531 /index \u53ca\u5176\u5904\u7406\u51fd\u6570\n    engine.Run(":8080")                                    // \u542f\u52a8\u670d\u52a1, \u76d1\u542c 8080 \u7aef\u53e3\n}\n\nfunc webRoot(context *gin.Context) {\n    context.String(http.StatusOK, "this is root page")\n}\n\nfunc webIndex(context *gin.Context) {\n    context.String(http.StatusOK, "this is index page")\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u6267\u884c ",(0,i.jsx)(e.code,{children:"main.go"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" $ go run main.go\n > ......\n > [GIN-debug] GET    /                         --\x3e main.webRoot (3 handlers)\n > [GIN-debug] GET    /index                    --\x3e main.webIndex (3 handlers)\n > ......\n > [GIN-debug] Listening and serving HTTP on :8080\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u8def\u7531\u53c2\u6570",children:"\u8def\u7531\u53c2\u6570"}),"\n",(0,i.jsxs)(e.p,{children:["Github \u4e2a\u4eba\u4e3b\u9875 ",(0,i.jsx)(e.code,{children:"http://github.com/{username}"}),", \u66ff\u6362\u4e0d\u540c\u7528\u6237\u540d\u5373\u53ef\u8fdb\u5165\u4e0d\u540c\u7528\u6237\u7684 Github \u4e3b\u9875\n\u7f51\u5740\u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"username"})," \u5c31\u662f\u8def\u7531\u53c2\u6570, \u540e\u53f0\u670d\u52a1\u62ff\u5230 ",(0,i.jsx)(e.code,{children:"username"})," \u7684\u5b9e\u9645\u503c\u7136\u540e\u8fd4\u56de\u8be5\u7528\u6237\u7684\u4fe1\u606f"]}),"\n",(0,i.jsx)(e.p,{children:"Gin \u901a\u8fc7 Param() \u6216 Params \u83b7\u53d6\u8def\u7531\u4e2d\u7684\u53c2\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (c *Context) Param(key string) string                 // Param \u8fd4\u56de string \u7c7b\u578b\n\ntype Params []Param\nfunc (ps Params) ByName(name string) (va string)           // Params \u7684\u53c2\u6570\u67e5\u627e\u65b9\u6cd5\nfunc (ps Params) Get(name string) (string, bool)           // Params \u7684\u53c2\u6570\u67e5\u627e\u65b9\u6cd5\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    ...\n    engine.GET("/index/:id", routeParam)                   // \u6ce8\u518c\u8def\u7531\u548c\u5bf9\u5e94\u51fd\u6570\n    engine.GET("/group/:name", routeParams)\n    ...\n}\n\nfunc routeParam(c *gin.Context) {                          // index \u4efb\u610f\u5b50\u754c\u9762\n    id := c.Param("id")                                    // Param \u83b7\u53d6\u8def\u7531\u53c2\u6570\u7684\u503c\n    c.String(200, "id: %s", id)\n}\n\nfunc routeParams(c *gin.Context) {                         // group \u4efb\u610f\u5b50\u754c\u9762\n    n, err := c.Params.Get("name")                         // Params.Get \u83b7\u53d6\u8def\u7531\u53c2\u6570\u503c\n    m := c.Params.ByName("name")                           // Params.ByName \u83b7\u53d6\u8def\u7531\u53c2\u6570\u503c\n    c.String(200, "n: %s  m: %s", n, m)\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"query-\u53c2\u6570",children:"Query \u53c2\u6570"}),"\n",(0,i.jsxs)(e.p,{children:["\u7f51\u5740 ",(0,i.jsx)(e.code,{children:"https://github.com/facsert?tab=repositories"})," \u4e2d ",(0,i.jsx)(e.code,{children:"?"})," \u540e\u7684\u4fbf\u662f Quary \u53c2\u6570, \u53c2\u6570\u5f62\u5f0f ",(0,i.jsx)(e.code,{children:"key=value"}),", \u901a\u8fc7 & \u5206\u9694"]}),"\n",(0,i.jsx)(e.p,{children:"Gin \u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u83b7\u53d6 query \u53c2\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (c *Context) GetQuery(key string) (string, bool)\nfunc (c *Context) Query(key string) string\nfunc (c *Context) DefaultQuery(key, defaultValue string) string\n\nfunc (c *Context) GetQueryArray(key string) ([]string, bool)\nfunc (c *Context) QueryArray(key string) []string\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    ...\n    engine.GET("/index/", routeQuerys)                     // \u6ce8\u518c\u8def\u7531\u548c\u5bf9\u5e94\u51fd\u6570\n    engine.GET("/group/", routeQuery)\n    ...\n}\n\nfunc routeQuerys(c *gin.Context) {                         // http://localhost:8080/index?id=4\n    id := c.QueryArry("id")                                // \u83b7\u53d6 queray \u53c2\u6570\u503c\u5217\u8868\n    c.String(200, "id: %v", id)                            // id: [4]\n}\n\nfunc routeQuery(c *gin.Context) {                          // http://localhost:8080/group?name=jack\n    n, err := c.DefaultQuery("name", "nobody")             // \u672a\u83b7\u53d6\u5230\u5219\u4f7f\u7528\u9ed8\u8ba4\u503c nobody\n    m := c.Query("name")                                   // query \u83b7\u53d6\u53c2\u6570\u503c\n    c.String(200, "n: %s  m: %s", n, m)                    // n: jack  m: jack\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"form-\u53c2\u6570",children:"Form \u53c2\u6570"}),"\n",(0,i.jsxs)(e.p,{children:["Form \u8868\u5355\u6570\u636e\u5b58\u50a8\u5728 POST \u8bf7\u6c42\u4f53\u4e2d, \u8bf7\u6c42\u4f53\u683c\u5f0f: ",(0,i.jsx)(e.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (c *Context) PostForm(key string) string\nfunc (c *Context) DefaultPostForm(key, defaultValue string) stri\nfunc (c *Context) GetPostForm(key string) (string, bool)\nfunc (c *Context) PostFormMap(key string) map[string]string\n\n\nfunc (c *Context) PostFormArray(key string) []string\nfunc (c *Context) GetPostFormArray(key string) ([]string, bool)\nfunc (c *Context) GetPostFormMap(key string) (map[string]string, bool)\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    ...\n    engine.POST("/table/", table)                          // \u6ce8\u518c\u8def\u7531\u548c\u5bf9\u5e94\u51fd\u6570\n    ...\n}\n\nfunc table(c *gin.Context) {                               // curl -X \'POST\' http://localhost:8080/table\n    name := c.PostForm("name")                             // -H \'Content-Type: application/x-www-form-urlencoded\'\n    age := c.PostForm("age")                               // -d \'name=lily&age=16\'\n    c.String(200, "name:%s age:%s", name, age)             // name:lily age:16\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"json-\u53c2\u6570",children:"JSON \u53c2\u6570"}),"\n",(0,i.jsxs)(e.p,{children:["JSON \u6570\u636e\u5b58\u50a8\u5728 POST \u8bf7\u6c42\u4f53\u4e2d, \u8bf7\u6c42\u4f53 ",(0,i.jsx)(e.code,{children:"application/json"}),", \u83b7\u53d6\u539f\u59cb\u6570\u636e\u540e\u683c\u5f0f\u5316\u8f6c map"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    ...\n    engine.POST("/raw/", rawData)                          // \u6ce8\u518c\u8def\u7531\u548c\u5bf9\u5e94\u51fd\u6570\n    ...\n}\n\nfunc rawData(c *gin.Context) {                             // curl -X \'POST\' http://localhost:8080/raw\n    data, _ := c.GetRawData()                              // -H \'Content-Type: application/json\'\n    var m map[string]any                                   // -d \'{name:lily, age:16}\'\n    _ = json.Unmarshal(data, &m)\n    c.String(200, "Json: %#v", m)                          // Json: map[string]interface {}{"age":"14", "user":"petter"}\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u53c2\u6570\u7ed1\u5b9a",children:"\u53c2\u6570\u7ed1\u5b9a"}),"\n",(0,i.jsxs)(e.p,{children:["\u57fa\u4e8e\u8bf7\u6c42\u7c7b\u578b\u5f00\u53d1\u63a5\u53e3\u6bd4\u8f83\u9ebb\u70e6, \u4e14\u591a\u79cd\u53c2\u6570\u90fd\u662f ",(0,i.jsx)(e.code,{children:"key-value"})," \u5f62\u5f0f, \u4e8e\u662f\u6709\u4e86\u81ea\u9002\u5e94\u89e3\u6790\n\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53, \u5c06\u8bf7\u6c42\u4f53\u5b57\u6bb5\u4e0e\u7ed3\u6784\u4f53\u5c5e\u6027\u7ed1\u5b9a, \u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"ShouldBind"})," \u8d4b\u503c\u7ed9\u7ed3\u6784\u4f53\u5c5e\u6027"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'type Person struct {                                       // \u7ed3\u6784\u4f53\u5c5e\u6027\u5f00\u5934\u5927\u5199, \u5141\u8bb8\u5916\u90e8\u4f7f\u7528\n    Name string `json:"name" form:"name" binding:"required"`\n    Age  string `json:"age" form:"age" binding:"required"`\n}\n\nfunc main() {\n    engine := gin.Default()\n    engine.POST("/model", func(c *gin.Context) {           // Body {"age": "16","name": "lily"}\n        var p Person\n        err := c.ShouldBind(&p)                            // \u81ea\u9002\u5e94\u89e3\u6790\n        if err != nil { c.String(400, "login fail") }\n        c.String(200, "login info: %#v", p)               // login info: main.Person{Name:"Bob", Age:"16"}\n    })\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u6587\u4ef6\u4e0a\u4f20",children:"\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go"})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);