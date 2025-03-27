"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5025],{91598:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=e(74848),r=e(28453);const s={pubDatetime:new Date("2023-03-27T15:28:43.000Z"),title:"06.Go Struct",slug:"06.Go Struct",featured:!1,draft:!1,tags:["Go"],description:"Go \u7ed3\u6784\u4f53"},o=void 0,i={id:"Go/tutorial/go-6-struct",title:"06.Go Struct",description:"Go \u7ed3\u6784\u4f53",source:"@site/docs/Go/tutorial/go-6-struct.md",sourceDirName:"Go/tutorial",slug:"/Go/tutorial/06.Go Struct",permalink:"/docs/Go/tutorial/06.Go Struct",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/tutorial/go-6-struct.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"}],version:"current",frontMatter:{pubDatetime:"2023-03-27T15:28:43.000Z",title:"06.Go Struct",slug:"06.Go Struct",featured:!1,draft:!1,tags:["Go"],description:"Go \u7ed3\u6784\u4f53"},sidebar:"tutorialSidebar",previous:{title:"05.Go Function",permalink:"/docs/Go/tutorial/05.Go Function"},next:{title:"07.Go Interface",permalink:"/docs/Go/tutorial/07.Go Interface"}},c={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Struct",id:"struct",level:2},{value:"struct \u521d\u59cb\u5316",id:"struct-\u521d\u59cb\u5316",level:3},{value:"struct \u65b9\u6cd5",id:"struct-\u65b9\u6cd5",level:3},{value:"struct \u5c5e\u6027\u4fee\u6539",id:"struct-\u5c5e\u6027\u4fee\u6539",level:3},{value:"struct \u8f6c json",id:"struct-\u8f6c-json",level:3}];function l(n){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsx)(t.h2,{id:"struct",children:"Struct"}),"\n",(0,a.jsx)(t.h3,{id:"struct-\u521d\u59cb\u5316",children:"struct \u521d\u59cb\u5316"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:' type <struct name> struct {                     // \u5b9a\u4e49\u7ed3\u6784\u4f53, \u7ed3\u6784\u4f53\u53ef\u4ee5\u8ba4\u4e3a\u662f\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\n   <attribute name>  <type>                      // \u5b9a\u4e49\u7ed3\u6784\u4f53\u5c5e\u6027\u53ca\u5176\u7c7b\u578b\n   <attribute name>  <type>                      // \u6bcf\u4e2a\u5c5e\u6027\u540d\u552f\u4e00, \u4e0d\u80fd\u91cd\u590d\n   ...\n }\n\n type Student struct {                           // \u5b9a\u4e49 Student \u7c7b\u578b\u6570\u636e\n   name, city  string                            // Student \u7c7b\u578b\u6709 name city \u5c5e\u6027, \u5c5e\u6027\u503c\u4e3a string\n   age int                                       // Student \u7c7b\u578b\u6709 age \u5c5e\u6027, \u5c5e\u6027\u7c7b\u578b\u4e3a int\n }\n\n var John Student                                // \u521d\u59cb\u5316 Student \u7c7b\u578b\u53d8\u91cf John\n John.name = "John"                              // \u4f7f\u7528 . \u8d4b\u503c\n John.age = 18\n\n Lily := Student{                                // \u521d\u59cb\u5316 Student \u7c7b\u578b\u53d8\u91cf Lily\n   name: "Lily",\n   city: "shanghai",\n }\n\n Printf("%#v\\n", John)\n Printf("%#v\\n", Lily)\n\n > main.Student{name:"John", city:"", age:18}    // \u672a\u521d\u59cb\u5316\u7684\u5c5e\u6027\u4f7f\u7528\u7c7b\u578b\u7684\u96f6\u503c\n > main.Student{name:"Lily", city:"shanghai", age:0}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"struct-\u65b9\u6cd5",children:"struct \u65b9\u6cd5"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:' type Student struct {\n   name, city string\n   age int\n }\n\n func (s Student) Learn() {\n   Printf("%s learning in %s\\n", s.name, s.city)\n }\n\n func (s Student) Play() {\n   Printf("%s play games\\n", s.name)\n }\n\n John := Student{\n    name: "John",\n    city: "shanghai",\n }\n\n John.Learn()\n John.Play()\n\n > John learning in shanghai\n > John play games\n'})}),"\n",(0,a.jsx)(t.h3,{id:"struct-\u5c5e\u6027\u4fee\u6539",children:"struct \u5c5e\u6027\u4fee\u6539"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:' type Student struct {\n   name, city string\n   age int\n }\n\n func (s Student) rename1(name string) {         // \u91cd\u547d\u540d\u5c5e\u6027 name\n   s.name = name\n   Printf("rename1 to %s\\n", s.name)\n }\n\n func (s *Student) rename2(name string) {        // \u91cd\u547d\u540d\u5c5e\u6027 name\n   s.name = name\n   Printf("rename2 to %s\\n", s.name)\n }\n\n John := Student{\n    name: "John",\n    city: "shanghai",\n }\n\n John.rename2("Jack")\n John.rename1("Lily")\n Printf("name: %s\\n", John.name)\n\n > rename2 to Jack                               // \u91cd\u547d\u540d\u7ed3\u679c\u5bf9\u7ed3\u6784\u4f53\u751f\u6548\n > rename1 to Lily                               // \u91cd\u547d\u540d\u7ed3\u679c\u53ea\u5728\u51fd\u6570\u5185\u751f\u6548\n > name: Jack\n'})}),"\n",(0,a.jsx)(t.h3,{id:"struct-\u8f6c-json",children:"struct \u8f6c json"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'import (\n   . "fmt"\n   "encoding/json"\n)\n\n type Student struct {\n     Name string                                 // \u5c5e\u6027\u540d\u5927\u5199\u5176\u5b83\u6a21\u5757\u53ef\u8bbf\u95ee, \u53ef\u4ee5\u8f6c json\n     city string                                 // \u5c5e\u6027\u540d\u5c0f\u5199\u5176\u5b83\u6a21\u5757\u4e0d\u80fd\u8bbf\u95ee\u4e5f\u4e0d\u80fd\u8f6c json\n     Age int     `json:"age"`                    // \u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49 tag, \u4fee\u6539\u8f6c\u5316\u4e3a json \u540e key \u540d\u79f0\n}\n\n John := Student{\n    Name: "John",\n    city: "shanghai",\n    Age: 18,\n }\n\n jsonStu, err := json.Marshal(John)              // struct \u8f6c json\n if err != nil {\n   panic("json marshal failed")\n }\n\n Println(John)\n Println(string(jsonStu))\n\n > {John shanghai 18}                            // John \u7ed3\u6784\u4f53\u6240\u6709\u5c5e\u6027\u503c\n > {"Name":"John","age":18}                      // city \u5c5e\u6027\u4e0d\u5728, Age \u5c5e\u6027\u540d\u53d8\u4e3a age\n'})})]})}function d(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>i});var a=e(96540);const r={},s=a.createContext(r);function o(n){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(s.Provider,{value:t},n.children)}}}]);