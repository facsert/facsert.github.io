"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2309],{22586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(74848),r=t(28453);const l={pubDatetime:new Date("2024-01-30T21:12:43.000Z"),title:"AlertManager",slug:"AlertManager",featured:!1,draft:!1,tags:["Prometheus"],description:"AlertManager \u662f prometheus \u7684\u544a\u8b66\u7ba1\u7406\u5de5\u5177"},s=void 0,i={id:"Prometheus/alertmanager",title:"AlertManager",description:"AlertManager \u662f prometheus \u7684\u544a\u8b66\u7ba1\u7406\u5de5\u5177",source:"@site/docs/Prometheus/alertmanager.md",sourceDirName:"Prometheus",slug:"/Prometheus/AlertManager",permalink:"/docs/Prometheus/AlertManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Prometheus/alertmanager.md",tags:[{inline:!0,label:"Prometheus",permalink:"/docs/tags/prometheus"}],version:"current",frontMatter:{pubDatetime:"2024-01-30T21:12:43.000Z",title:"AlertManager",slug:"AlertManager",featured:!1,draft:!1,tags:["Prometheus"],description:"AlertManager \u662f prometheus \u7684\u544a\u8b66\u7ba1\u7406\u5de5\u5177"},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/docs/Prometheus/Prometheus"},next:{title:"Grafana",permalink:"/docs/Prometheus/Grafana"}},o={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"alertmanager \u662f\u4e00\u4e2a\u544a\u8b66\u7ec4\u4ef6, \u9ed8\u8ba4\u7aef\u53e3 9093"}),"\n",(0,a.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Prometheus \u754c\u9762\u4e0b\u8f7d ",(0,a.jsx)(n.a,{href:"https://prometheus.io/download/",children:"Alertmanager"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:" # \u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\n $ ./amtool check-config alertmanager-config.yaml\n > Checking '../alertmanager/alertmanager-config.yml'  SUCCESS\n > Found:\n > - global config\n > - route\n > - 1 inhibit rules\n > - 1 receivers\n > - 1 templates\n > SUCCESS\n\n $ ./alertmanager-linux-amd64 --config.file=alertmanager-config.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,a.jsx)(n.code,{children:"http://localhost:9093"})," \u754c\u9762\u67e5\u770b",(0,a.jsx)(n.br,{}),"\n","\u91cd\u542f alermanager \u670d\u52a1 curl -X POST ",(0,a.jsx)(n.code,{children:"http://localhost:9093/-/reload"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,a.jsx)(n.p,{children:"\u914d\u7f6e\u544a\u8b66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'global:\n  resolve_timeout: 5m\n  smtp_smarthost: "smtp.com:25" # \u914d\u7f6e smtp \u670d\u52a1\u5730\u5740, \u90ae\u7bb1\u7c7b\u578b\u548c smtp \u670d\u52a1\u5668\u5bf9\u5e94\n  smtp_from: "facsert@outlook.com" # \u53d1\u9001\u4eba\n  smtp_auth_username: "facsert@outlook.com" # \u90ae\u7bb1\u8d26\u6237\n  smtp_auth_password: "xxxxxx" # \u90ae\u7bb1\u5bc6\u7801\n  smtp_require_tls: false\n\ntemplates:\n  - "/root/Desktop/alertmanager/email.tmpl" # \u90ae\u4ef6\u6a21\u677f\n\nroute:\n  receiver: group # \u9ed8\u8ba4\u6536\u4ef6\u4eba\n  group_by: [...] # \u5206\u7ec4\u65b9\u5f0f [\'alertname\', \'instance\'] \u4e0d\u5206\u7ec4 [...], \u5b57\u6bb5\u503c\u76f8\u540c\u5373\u4e3a\u901a\u4e00\u7ec4, \u544a\u8b66\u53ef\u5408\u5e76\n  group_wait: 30s # \u7b49\u5f85\u540c\u7ec4\u544a\u8b66\u65f6\u95f4; \u89e6\u53d1\u544a\u8b66\u540e, \u7b49\u5f85\u540c\u7ec4\u544a\u8b66\u4ee5\u5408\u5e76\u544a\u8b66\u4fe1\u606f\u53d1\u9001\u4e00\u6b21(\u9ed8\u8ba4 30s)\n  group_interval: 5m # \u5df2\u53d1\u9001\u544a\u8b66\u540e, \u540c\u7ec4\u53c8\u51fa\u73b0\u544a\u8b66, \u518d\u6b21\u53d1\u9001\u544a\u8b66\u7684\u7b49\u5f85\u65f6\u95f4(\u9ed8\u8ba4 5m)\n  repeat_interval: 4h # \u5df2\u53d1\u9001\u544a\u8b66, \u544a\u8b66\u672a\u6062\u590d, \u518d\u6b21\u53d1\u9001\u540c\u6837\u7684\u544a\u8b66\u4fe1\u606f\u7684\u95f4\u9694(\u9ed8\u8ba4 4h)\n\n  # routes:                                      # \u8bbe\u7f6e\u5b50\u8def\u7531, \u6309\u7167\u8def\u7531\u89c4\u5219\u53d1\u9001, \u5339\u914d\u89c4\u5219\u624d\u4f1a\u53d1\u9001\u7ed9\u63a5\u6536\u4eba\n  #   - match:\n  #       team: operations\n  #     group_by: [env,dc]\n  #     receiver: \'ops\'\n  #   - receiver: ops                            # \u8def\u7531\u548c\u6807\u7b7e\uff0c\u6839\u636ematch\u6765\u6307\u5b9a\u53d1\u9001\u76ee\u6807\uff0c\u5982\u679c rule\u7684lable \u5305\u542b alertname\uff0c \u4f7f\u7528 ops \u6765\u53d1\u9001\n  #     group_wait: 10s\n  #     match:\n  #       team: operations\n\nreceivers: # \u5b9a\u4e49\u63a5\u53d7\u4eba\u7fa4\u7ec4\n  - name: group #\n    email_configs:\n      - to: "facsert@outlook.com" # \u5982\u679c\u60f3\u53d1\u9001\u591a\u4e2a\u4eba\u5c31\u4ee5 \',\'\u505a\u5206\u5272\uff0c\u5199\u591a\u4e2a\u90ae\u4ef6\u4eba\u5373\u53ef\u3002\n        send_resolved: true\n        html: \'{{ template "email.default.message" .}}\'\n        headers:\n          from: "Prometheus \u8b66\u62a5"\n          subject: "Prometheus \u544a\u8b66\u90ae\u4ef6"\n          to: "facsert"\n    webhook_configs: # \u53d1\u9001\u544a\u8b66\u4fe1\u606f\u7ed9\u670d\u52a1\u5668\n      url: "http://localhost:8080/api/v1/alerts"\n\ninhibit_rules:\n  - source_match:\n      severity: "critical"\n    target_match:\n      severity: "warning"\n    equal: ["alertname", "dev", "instance"]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["group_by: \u5206\u7ec4\u65b9\u5f0f, \u6309 prometheus \u544a\u8b66\u89c4\u5219\u4e2d labels \u7684\u81ea\u5b9a\u4e49\u5b57\u6bb5",(0,a.jsx)(n.br,{}),"\n","group_wait: \u89e6\u53d1\u7ec4\u5185\u7b2c\u4e00\u4e2a\u544a\u8b66\u540e, \u5148\u4e0d\u53d1\u544a\u8b66, \u7b49\u5f85 group_wait \u65f6\u95f4, \u770b\u662f\u5426\u6709\u540c\u7ec4\u544a\u8b66, \u6709\u5219\u5408\u5e76\u544a\u8b66, \u4ec5\u53d1\u9001\u4e00\u6b21",(0,a.jsx)(n.br,{}),"\n","group_interval: \u7ec4\u5185\u5df2\u53d1\u9001\u544a\u8b66\u540e, \u540c\u7ec4\u51fa\u73b0\u65b0\u544a\u8b66; \u5148\u4e0d\u53d1, \u7b49\u5f85 group_interval \u65f6\u95f4, \u770b\u662f\u5426\u6709\u540c\u7ec4\u65b0\u544a\u8b66, \u8fde\u540c\u5df2\u53d1\u9001\u4fe1\u606f, \u5e76\u5408\u5e76\u518d\u6b21\u53d1\u9001",(0,a.jsx)(n.br,{}),"\n","repeat_interval: \u5df2\u53d1\u9001\u544a\u8b66, \u544a\u8b66\u4e00\u76f4\u672a\u590d\u4f4d; \u7b49\u5f85 repeat_interval \u65f6\u95f4, \u518d\u6b21\u53d1\u9001\u540c\u6837\u7684\u544a\u8b66"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 prometheus \u76d1\u63a7 node1 node2 node3 \u673a\u5668"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'groups:\n  - name: monitor # \u89c4\u5219\u7ec4\u540d, \u552f\u4e00\n    rules:\n      - alert: Node Down\n        expr: up{job=~".*Node.*"} == 0 # \u544a\u8b66\u89c4\u5219, \u8868\u8fbe\u5f0f\u6210\u7acb\u8868\u793a node1 \u65ad\u8fde\n        for: 1m # \u8868\u8fbe\u5f0f\u6301\u7eed\u6210\u7acb\u5e76\u6301\u7eed 1 \u5206\u949f pending \u65f6\u95f4, \u672a\u6062\u590d\u5219\u5f00\u59cb\u53d1\u9001\u544a\u8b66\n        labels: # \u81ea\u5b9a\u4e49\u5b57\u6bb5, \u53ef\u7528\u4e8e\u544a\u8b66\u5206\u7ec4, \u5b9a\u4e49\u6216\u8986\u76d6\u53d8\u91cf\n          severity: critical\n        annotations:\n          summary: "{{ $labels.instance }} down" # \u8b66\u62a5\u63cf\u8ff0, \u4f7f\u7528 {{ $label.instance }} \u83b7\u53d6\u8282\u70b9\u5c5e\u6027\n          description: ""\n          value: "{{ $value }}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["alertmanager \u4e2d group_by \u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"team"})," \u5b57\u6bb5\u5206\u7ec4, team \u5b57\u6bb5\u503c\u4e00\u81f4\u4e3a\u540c\u4e00\u7ec4",(0,a.jsx)(n.br,{}),"\n","node1 \u8282\u70b9\u8868\u8fbe\u5f0f\u6210\u7acb(expr), \u8fdb\u5165 pending \u72b6\u6001; pending \u6301\u7eed 1 \u5206\u949f(for \u5b57\u6bb5), \u544a\u8b66\u53d1\u9001\u7ed9 alertmanager, \u5e76\u8fdb\u5165 firing \u72b6\u6001",(0,a.jsx)(n.br,{}),"\n","aleertmanager \u63a5\u5230 node1 \u544a\u8b66, \u7b49\u5f85 30s(group_wait); \u671f\u95f4 node2 \u89e6\u53d1\u4e5f\u544a\u8b66; \u540c\u4e00\u7ec4\u4e24\u4e2a\u544a\u8b66\u5408\u5e76\u7136\u540e\u53d1\u9001",(0,a.jsx)(n.br,{}),"\n","\u544a\u8b66\u53d1\u9001\u540e node1 node2 \u544a\u8b66\u672a\u89e3\u9664, node3 \u89e6\u53d1\u544a\u8b66, \u5728 node3 \u89e6\u53d1\u544a\u8b66 5m(group_interval) \u540e\u53d1\u9001 node1 node2 node3 \u5408\u5e76\u544a\u8b66",(0,a.jsx)(n.br,{}),"\n","node1 node2 node3 \u544a\u8b66\u4e00\u76f4\u672a\u6062\u590d, \u7b49\u5f85 4h(repeat_interval) \u540e\u518d\u6b21\u53d1\u9001 node1 node2 node3 \u5408\u5e76\u544a\u8b66"]}),"\n",(0,a.jsx)(n.p,{children:"\u90ae\u4ef6\u6a21\u677f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tmpl",children:'{{ define "email.default.message" }}\n{{- if gt (len .Alerts.Firing) 0 -}}\n<h2> \u5f02\u5e38\u544a\u8b66 </h2>\n<table border="1" bgcolor="#e8e8e8">\n  <thead bgcolor="#EF665B">\n      <tr bgcolor="#EF665B">\n      <td align="center" valign="middle"> \u544a\u8b66\u4e3b\u673a </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u7ea7\u522b </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u72b6\u6001 </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u7c7b\u578b </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u6982\u8ff0 </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u53d6\u503c </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u65f6\u95f4 </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u8be6\u60c5 </td>\n      </tr>\n  </thead>\n  <tbody>\n    {{ range $i, $alert :=.Alerts }}\n    <tr>\n      <td align="left" valign="middle">{{ $alert.Labels.instance }}</td>\n      <td align="left" valign="middle">{{ $alert.Labels.severity }}</td>\n      <td align="left" valign="middle">{{   .Status }}</td>\n      <td align="left" valign="middle">{{ $alert.Labels.alertname }}</td>\n      <td align="left" valign="middle">{{ $alert.Annotations.summary }}</td>\n      <td align="left" valign="middle">{{ $alert.Annotations.value }}</td>\n      <td align="left" valign="middle">{{ ($alert.StartsAt.Add 28800e9).Format "2006-01-02 15:04:05" }}</td>\n      <td align="left" valign="middle">{{ $alert.Annotations.description }}</td>\n    </tr>\n    {{ end }}\n  </tbody>\n</table>\n{{ end -}}\n\n{{- if gt (len .Alerts.Resolved) 0 -}}\n<h2> \u5f02\u5e38\u6062\u590d </h2>\n<table border="1" bgcolor="#e8e8e8">\n  <thead bgcolor="#98FB98">\n      <tr bgcolor="#98FB98">\n      <td align="center" valign="middle"> \u544a\u8b66\u4e3b\u673a </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u72b6\u6001 </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u7c7b\u578b </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u6982\u8ff0 </td>\n      <td align="center" valign="middle"> \u544a\u8b66\u65f6\u95f4 </td>\n      <td align="center" valign="middle"> \u6062\u590d\u65f6\u95f4 </td>\n      </tr>\n  </thead>\n  <tbody>\n    {{ range $i, $alert :=.Alerts }}\n    <tr>\n      <td align="left" valign="middle">{{ $alert.Labels.instance }}</td>\n      <td align="left" valign="middle">{{   .Status }}</td>\n      <td align="left" valign="middle">{{ $alert.Labels.alertname }}</td>\n      <td align="left" valign="middle">{{ $alert.Annotations.summary }}</td>\n      <td align="left" valign="middle">{{ ($alert.StartsAt.Add 28800e9).Format "2006-01-02 15:04:05" }}</td>\n      <td align="left" valign="middle">{{ ($alert.EndsAt.Add 28800e9).Format "2006-01-02 15:04:05" }}</td>\n    </tr>\n    {{ end }}\n  </tbody>\n</table>\n{{ end -}}\n{{ end -}}\n\n\x3c!-- {{ range $i, $alert :=.Alerts }}: \u904d\u5386\u6240\u6709\u544a\u8b66, \u4f7f\u7528 `$alert` \u83b7\u53d6\u5355\u4e2a\u544a\u8b66\u5bf9\u8c61, \u4f7f\u7528 . \u83b7\u53d6\u89c4\u5219\u914d\u7f6e\u4e2d alert \u5b57\u6bb5\u4e0b\u5185\u5bb9\n\u5982: $alert.Labels.instance => alert.labels.instance   --\x3e\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"prometheus.yml"})," \u6307\u5b9a alertmanager \u670d\u52a1, \u89c4\u5219\u6587\u4ef6, \u6dfb\u52a0\u76d1\u63a7\u8282\u70b9"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# \u6dfb\u52a0 alertmanager \u670d\u52a1\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n            - localhost:9093\n\n# \u6307\u5b9a\u89c4\u5219\u6587\u4ef6\nrule_files:\n  - "rules.yml"\n\nscrape_configs:\n  # prometheus.yml \u6ce8\u518c\u8282\u70b9\n  - job_name: "Node"\n    static_configs:\n      - targets: ["192.168.1.100:9100"]\n        # \u53ef\u9009\u9879, \u901a\u8fc7 labels \u6dfb\u52a0\u81ea\u5b9a\u4e49\u8282\u70b9\u4fe1\u606f, \u9ed8\u8ba4\u6709 instance \u5c5e\u6027\u5bf9\u5e94 targets\n        labels:\n          host: "192.168.1.100"\n          tag: "python"\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"rules.yml"})," \u8bbe\u5b9a\u544a\u8b66\u89c4\u5219"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# rules.yml \u5b9a\u4e49\u65ad\u8fde\u89c4\u5219\ngroups:\n  - name: monitor\n    rules:\n      - alert: Node Down\n        expr: up{job=~".*Node.*"} == 0 # \u544a\u8b66\u89c4\u5219, \u8868\u8fbe\u5f0f\u6210\u7acb\u8868\u793a node1 \u65ad\u8fde\n        for: 5m # \u8868\u8fbe\u5f0f\u6301\u7eed\u6210\u7acb\u5e76\u6301\u7eed 1 \u5206\u949f pending \u65f6\u95f4, \u672a\u6062\u590d\u5219\u5f00\u59cb\u53d1\u9001\u544a\u8b66\n        labels: # \u81ea\u5b9a\u4e49\u5b57\u6bb5, \u7528\u4e8e\u5206\u7ec4\n          severity: critical\n        annotations:\n          summary: "{{ $labels.host }} disconnect for 5m"\n          description: ""\n          value: "{{ $value }}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"alertmanager.yml"})," \u8bbe\u5b9a\u544a\u8b66\u670d\u52a1\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'route:\n  group_by: ["alertname"]\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 1h\n  receiver: "devops"\nreceivers:\n  - name: "devops"\n    # \u5c06\u544a\u8b66\u6d88\u606f\u53d1\u9001\u7ed9\u6307\u5b9a\u670d\u52a1\n    webhook_configs:\n      - url: "http://192.168.1.150:8030/api/v1/alerts"\ninhibit_rules:\n  - source_match:\n      severity: "critical"\n    target_match:\n      severity: "warning"\n    equal: ["alertname", "dev", "instance"]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u62c9\u8d77\u540e\u7aef\u914d\u7f6e\u63a5\u53e3 POST ",(0,a.jsx)(n.code,{children:"http://192.168.1.150:8030/api/v1/alerts"})," \u63a5\u6536\u544a\u8b66"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "receiver": "devops",\n  "status": "firing",\n  "alerts": [\n    {\n      "status": "firing",\n      "labels": {\n        "alertname": "Node Down",\n        "host": "192.168.1.100",\n        "instance": "192.168.1.100:9100",\n        "job": "Node",\n        "severity": "critical",\n        "tag": "python"\n      },\n      "annotations": {\n        "description": "",\n        "summary": "192.168.1.100 disconnect for 5m",\n        "value": "0"\n      },\n      "startsAt": "2024-10-11T03:43:02.163Z",\n      "endsAt": "0001-01-01T00:00:00Z",\n      "generatorURL": "http://canpheds02659:9090/graph?g0.expr=up%7Bjob%3D~%22.%2ANode.%2A%22%7D+%3D%3D+0&g0.tab=1",\n      "fingerprint": "7e27892c867dd27f"\n    }\n  ],\n  "groupLabels": {\n    "alertname": "Node Down"\n  },\n  "commonLabels": {\n    "alertname": "Node Down",\n    "host": "192.168.1.100",\n    "instance": "192.168.1.100:9100",\n    "job": "Node",\n    "severity": "critical",\n    "tag": "python"\n  },\n  "commonAnnotations": {\n    "description": "",\n    "summary": "192.168.1.100:10101 disconnect for 5m",\n    "value": "0"\n  },\n  "externalURL": "http://canpheds02659:9093",\n  "version": "4",\n  "groupKey": "{}:{alertname=\\"Node Down\\"}",\n  "truncatedAlerts": 0\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);