"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8784],{7821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var l=t(4848),s=t(8453);const r={author:"facsert",pubDatetime:new Date("2024-02-22T20:31:28.000Z"),title:"Postgresql table",slug:"Postgresql table",featured:!1,draft:!1,tags:["Postgresql"],description:"Postgresql \u8868\u64cd\u4f5c"},d=void 0,i={id:"Database/Postgres/postgres-2-table",title:"Postgresql table",description:"Postgresql \u8868\u64cd\u4f5c",source:"@site/docs/Database/Postgres/postgres-2-table.md",sourceDirName:"Database/Postgres",slug:"/Database/Postgres/Postgresql table",permalink:"/docs/Database/Postgres/Postgresql table",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database/Postgres/postgres-2-table.md",tags:[{inline:!0,label:"Postgresql",permalink:"/docs/tags/postgresql"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-02-22T20:31:28.000Z",title:"Postgresql table",slug:"Postgresql table",featured:!1,draft:!1,tags:["Postgresql"],description:"Postgresql \u8868\u64cd\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"Postgresql database",permalink:"/docs/Database/Postgres/Postgresql database"},next:{title:"Postgresql data",permalink:"/docs/Database/Postgres/Postgresql data"}},c={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u8868\u7ea6\u675f",id:"\u8868\u7ea6\u675f",level:2},{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:3},{value:"NOT NULL",id:"not-null",level:2},{value:"UNIQUE",id:"unique",level:2},{value:"CHECK",id:"check",level:2},{value:"\u4fee\u6539\u8868",id:"\u4fee\u6539\u8868",level:2}];function A(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"\u6570\u636e\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u4ee3\u7801"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u5e03\u5c14\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"BOOLEAN"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TRUE('true', 't', 'yes', 'y', '1'), FALSE('false', 'f', 'no', 'n', '0') \u6216 NULL"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u5b57\u7b26\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"CHAR(50)"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u56fa\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u7c7b\u578b, \u957f\u5ea6\u4e0d\u8db3, \u7a7a\u683c\u8865\u9f50, \u8d85\u51fa\u5c06\u5f02\u5e38(\u4e0d\u63a8\u8350)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u5b57\u7b26\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"VARCHAR(50)"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53ef\u53d8\u957f\u5ea6\u7684\u5b57\u7b26\u7c7b\u578b\uff0c\u4e0d\u8865\u957f\u5ea6, \u8d85\u51fa\u5c06\u5f02\u5e38(\u4e0d\u5e26\u957f\u5ea6\u4e0e TEXT \u76f8\u540c)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u5b57\u7b26\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TEXT"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53d8\u957f\u5ea6\u7684\u5b57\u7b26\u7c7b\u578b, \u5b58\u50a8\u4efb\u610f\u957f\u5ea6\u7684\u5b57\u7b26\u4e32"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6574\u6570\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SMALLINT/INT2"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"2\u5b57\u8282\u6709\u7b26\u53f7\u6574\u6570(-32768, 32767)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6574\u6570\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"INTEGER/INT/INT4"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"4\u5b57\u8282\u6709\u7b26\u53f7\u6574\u6570(-2147483648, 2147483647)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6574\u6570\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"BIGINT/INT8"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"8\u5b57\u8282\u6709\u7b26\u53f7\u6574\u6570(-9223372036854775808, 9223372036854775807)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6d6e\u70b9\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"REAL/FLOAT4"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570(4\u5b57\u8282)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6d6e\u70b9\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"DOUBLE PRECISION/FLOAT8"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570(8\u5b57\u8282)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6d6e\u70b9\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"NUMERIC(p, s)"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u9ad8\u7cbe\u5ea6\u6570\u5b57, p\u8868\u793a\u6570\u5b57\u603b\u957f\u5ea6, s\u8868\u793a\u5c0f\u6570\u4f4d\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u65f6\u95f4\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"DATE"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u65e5\u671f(yyyy-mm-dd)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u65f6\u95f4\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TIME"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"\u4e00\u5929\u4e2d\u7684\u67d0\u4e2a\u65f6\u523b(HH:MM:SS.ssssss)"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u65f6\u95f4\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TIMESTAMP"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"\u65f6\u95f4\u65e5\u671f\u548c\u65f6\u523b(YYYY-MM-DD HH:MI:SS[.ssssss])"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u65f6\u95f4\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"INTERVAL"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u65f6\u95f4\u95f4\u9694"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u65f6\u95f4\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TIMESTAMP"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e26\u65f6\u533a\u7684\u65f6\u95f4\u65e5\u671f\u548c\u65f6\u523b"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"JSON\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"JSON"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"JSON\u683c\u5f0f\u7684\u5b57\u7b26\u4e32"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u6570\u7ec4\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ARRAY"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6570\u7ec4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"UUID\u7c7b\u578b"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"UUID"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"UUID"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'/* \u521b\u5efa\u8868 */\nCREATE TABLE [IF NOT EXISTS] table_name (\n  column1 datatype(length) column_contraint,\n  column2 datatype(length) column_contraint,\n  column3 datatype(length) column_contraint,\n  table_constraints\n);\n\n/* \u521b\u5efa\u8868\u793a\u4f8b(create \u662f\u5173\u952e\u5b57\u4e0d\u53ef\u4f5c\u4e3a\u8868\u5934) */\nCREATE TABLE IF NOT EXISTS "students" (             /* IF NOT EXISTS \u8868\u5b58\u5728\u5219\u4e0d\u521b\u5efa */\n    "id" SERIAL NOT NULL PRIMARY KEY,               /* id \u4f5c\u4e3a\u4e3b\u952e\u4e14\u4e0d\u80fd\u4e3a\u7a7a id \u81ea\u589e*/\n    "name" VARCHAR(20) NOT NULL,                    /* name \u6700\u957f\u4e3a20\u5b57\u7b26\u4e14\u4e0d\u80fd\u4e3a\u7a7a */\n    "age" INT,                                      /* age \u53ef\u4ee5\u4e3a\u7a7a */\n    "locked" BOOLEAN NOT NULL DEFAULT false,        /* locked \u9ed8\u8ba4\u4e3a false \u4e14\u4e0d\u80fd\u4e3a\u7a7a */\n    "create_at" TIMESTAMP NOT NULL DEFAULT NOW(),   /* create_at \u65f6\u95f4\u6233\u4e14\u4e0d\u80fd\u4e3a\u7a7a */\n  CONSTRAINT unique_name UNIQUE ("name", "age")     /* \u8bbe\u7f6e\u552f\u4e00\u7ea6\u675f unique_name */\n);\n\n/* \u67e5\u770b\u6240\u6709\u8868 */\n\\d\n          List of relations\n Schema |   Name   | Type  |  Owner\n--------+----------+-------+----------\n public | students | table | postgres\n\n/* \u67e5\u770b\u6307\u5b9a\u7684\u8868\u8be6\u7ec6\u4fe1\u606f */\n\\d students\n                         Table "public.students"\n  Column   |            Type             | Collation | Nullable | Default\n-----------+-----------------------------+-----------+----------+---------\n id        | integer                     |           | not null |\n name      | character varying(20)       |           | not null |\n age       | integer                     |           |          |\n locked    | boolean                     |           | not null | false\n create_at | timestamp without time zone |           | not null |\nIndexes:\n    "students_pkey" PRIMARY KEY, btree (id)\n\n/* \u5220\u9664\u8868 */\nDROP TABLE IF EXISTS students;\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u8868\u7ea6\u675f",children:"\u8868\u7ea6\u675f"}),"\n",(0,l.jsx)(n.h3,{id:"\u4e3b\u952e",children:"\u4e3b\u952e"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"PRIMARY KEY"})," \u4e3a\u8868\u521b\u5efa\u4e3b\u952e"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e00\u5f20\u8868\u53ea\u80fd\u6709\u4e00\u4e2a\u4e3b\u952e, \u8868\u53ef\u4ee5\u6ca1\u6709\u4e3b\u952e"}),"\n",(0,l.jsx)(n.li,{children:"\u4e3b\u952e\u5fc5\u987b\u552f\u4e00, \u53ef\u4ee5\u7531\u4e00\u4e2a\u5217\u6216\u591a\u4e2a\u5217\u5171\u540c\u7ec4\u6210"}),"\n",(0,l.jsxs)(n.li,{children:["\u4e3b\u952e\u5217\u4e0d\u5141\u8bb8\u4e3a ",(0,l.jsx)(n.code,{children:"NULL"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'/* \u521b\u5efa\u8868, id \u4e3a\u4e3b\u952e */\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name VARCHAR(45),\n);\n\n/* \u65e0\u4e3b\u952e\u7684\u8868, \u6dfb\u52a0\u4e3b\u952e */\nALTER TABLE users ADD PRIMARY KEY (id);\n\n/* \u67e5\u770b\u8868\u7ed3\u6784 */\n\\d users\n                      Table "public.users"\nColumn |         Type          | Collation | Nullable | Default\n--------+-----------------------+-----------+----------+---------\nid     | integer               |           | not null |\nname   | character varying(45) |           |          |\nIndexes:\n    "users_pkey" PRIMARY KEY, btree (id)\n\n/* \u5220\u9664\u4e3b\u952e */\nTABLE TABLE users DROP CONSTRAINT users_pkey;\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u4e3b\u952e\u4e3a SERIAL, UUID \u81ea\u52a8\u751f\u6210\u4e3b\u952e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"/* SERIAL \u5217\u81ea\u52a8\u751f\u6210\u8fde\u7eed\u9012\u589e\u6574\u6570 */\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(45)\n);\n\n/* \u4f7f\u7528 UUID \u4f5c\u4e3a\u4e3b\u952e */\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(45)\n);\n\n/* \u591a\u5217\u7ec4\u5408\u4e3b\u952e */\nCREATE TABLE users (\n  id SERIAL,\n  name VARCHAR(45),\n  PRIMARY KEY (id, name)\n);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"not-null",children:"NOT NULL"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"NOT NULL"})," \u4f7f\u5217\u7684\u503c\u4e0d\u80fd\u4e3a\u7a7a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"/* id \u5217\u4e0d\u80fd\u4e3a\u7a7a */\nCREATE TABLE users (\n    id INT NOT NULL\n);\n\n/* \u5217\u6dfb\u52a0 NOT NULL \u7ea6\u675f(\u9700\u5c06\u5217\u6240\u6709\u503c\u8bbe\u4e3a\u975e\u7a7a\u624d\u80fd\u6dfb\u52a0) */\nALTER TABLE users ALTER COLUMN id SET NOT NULL;\n\n/* \u5217\u5220\u9664 NOT NULL \u7ea6\u675f */\nALTER TABLE users ALTER COLUMN id DROP NOT NULL;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"unique",children:"UNIQUE"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"UNIQUE"})," \u4f7f\u5217\u7684\u503c\u552f\u4e00"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"/* id \u5217\u6240\u6709\u503c\u5747\u552f\u4e00 */\nCREATE TABLE users (\n    id INT UNIQUE\n);\n\n/* \u6dfb\u52a0\u591a\u5217\u552f\u4e00\u7ea6\u675f */\nCREATE TABLE users (\n    id INT,\n    name VARCHAR(20),\n    CONSTRAINT unique_cols\n      UNIQUE (id, name)\n);\n\n/* \u5217\u6dfb\u52a0 UNIQUE \u7ea6\u675f(\u9700\u5c06\u5217\u6240\u6709\u503c\u8bbe\u4e3a\u975e\u7a7a\u624d\u80fd\u6dfb\u52a0) */\nALTER TABLE users ADD CONSTRAINT unique_cols UNIQUE (id);\n\n/* \u5217\u5220\u9664 UNIQUE \u7ea6\u675f */\nALTER TABLE users DROP CONSTRAINT unique_cols;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"check",children:"CHECK"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"CHECK"})," \u7ea6\u675f\u9650\u5236\u5217\u7684\u503c\u8303\u56f4, \u4e0d\u7b26\u5408\u7684\u6570\u636e\u65e0\u6cd5\u6dfb\u52a0"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"/* age \u5217\u6dfb\u52a0 CHECK \u7ea6\u675f */\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    age INTEGER NOT NULL,\n    CONSTRAINT user_age \n      CHECK(age > 0)\n);\n\n/* \u6dfb\u52a0 CHECK \u7ea6\u675f */\nALTER TABLE users ADD CONSTRAINT user_age CHECK (age > 0);\n\n/* \u5220\u9664 CHECK \u7ea6\u675f */\nALTER TABLE users DROP CONSTRAINT user_age;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4fee\u6539\u8868",children:"\u4fee\u6539\u8868"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [IF EXISTS] "table_name"\n    /* \u91cd\u547d\u540d\u8868 * */\n    RENAME TO new_table_name;\n    /* \u6dfb\u52a0\u5217 */\n    ADD COLUMN column_name datatype(length) column_contraint;\n    /* \u4fee\u6539\u5217 */\n    ALTER COLUMN column_name datatype(length) column_contraint;\n    /* \u5220\u9664\u5217 */\n    DROP COLUMN column_name;\n    /* \u6dfb\u52a0\u7ea6\u675f */\n    ADD CONSTRAINT constraint_name constraint_type;\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f: ALTER TABLE \u6bcf\u6b21\u53ea\u6267\u884c\u4e00\u4e2a\u4fee\u6539\u64cd\u4f5c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'/* \u521b\u5efa\u8868 */\nCREATE TABLE IF NOT EXISTS "job" (\n    "id" SERIAL PRIMARY KEY,\n    "name" VARCHAR(10) NOT NULL\n);\n\n/* \u6dfb\u52a0\u5217 */\nALTER TABLE "job"\nADD COLUMN "status_name" VARCHAR(20) DEFAULT \'pending\';\n\n/* \u91cd\u547d\u540d\u5217 */\nALTER TABLE "job"\nRENAME COLUMN "status_name" TO "status";\n\n/* \u5220\u9664\u5217 */\nALTER TABLE "job"\nDROP COLUMN "status";\n\n/* \u6dfb\u52a0\u7ea6\u675f */\nALTER TABLE "job"\nADD CONSTRAINT "unique_task" UNIQUE ("name");\n\n/* \u4fee\u6539\u5217 */\nALTER TABLE "job"\nALTER COLUMN "name" TYPE VARCHAR(50);\n\n/* \u91cd\u547d\u540d\u8868 */\nALTER TABLE "job"\nRENAME TO "task";\n'})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(A,{...e})}):A(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var l=t(6540);const s={},r=l.createContext(s);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);