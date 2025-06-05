---
pubDatetime: 2022-10-10 15:28:43
title: Docker config
slug: Docker config
featured: false
draft: false
tags:
  - docker
description: "Docker 基本配置"
---

## Table of Contents

## 在线安装

官方脚本一键安装, 在线下载包安装

```bash
 # 卸载原有 docker
 apt-get autoremove docker docker-ce docker-engine  docker.io  containerd runc
 for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

 # 删除 docker 配置和根目录, 杀死 docker 进程后 umount
 rm -rf /etc/systemd/system/docker.service.d
 umount /var/lib/docker
 rm -rf /var/lib/docker

 # windows 完全卸载 docker
 C:\Program Files\Docker
 C:\Users\<user>\.docker
 C:\Users\<user>\AppData\Local\Docker
 C:\Users\<user>\AppData\Roaming\Docker

 # 添加 docker 下载源
 sudo apt-get update
 sudo apt-get install ca-certificates curl gnupg
 sudo install -m 0755 -d /etc/apt/keyrings
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
 sudo chmod a+r /etc/apt/keyrings/docker.gpg

 # Add the repository to Apt sources:
 echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
   "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
 sudo apt-get update

 # 工具安装 docker
 sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

 docker --version
 > Docker version 24.0.7, build afdd53b

 # 脚本安装
 curl -fsSL https://get.docker.com -o get-docker.sh
 sudo sh get-docker.sh --mirror Aliyun
 docker --version
 > Docker version 24.0.7, build afdd53b
```

## 离线安装

下载离线包, 配置 docker 系统服务

[官方离线包](https://download.docker.com/linux/static/stable/x86_64/)
[阿里云镜像](https://mirrors.aliyun.com/docker-ce/linux/static/stable/?spm=a2c6h.25603864.0.0.41fd2494LNwwk8)

```bash
# 下载 docker 离线包, 解压安装
$ tar -zxvf docker-27.1.1.tgz
$ cp docker/* /usr/bin/
$ docker -v
> Docker version 27.1.1, build 6312585
```

编辑 `/etc/systemd/system/docker.service` 文件, 写入一下内容

```bash
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target docker.socket firewalld.service containerd.service time-set.target
Wants=network-online.target containerd.service
#Requires=docker.socket


[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
# ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
# ExecStart=/usr/bin/dockerd --data-root=/home/docker  # set docker root dir(default: /var/lib/docker)
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutStartSec=0
RestartSec=2
Restart=always

# Note that StartLimit* options were moved from "Service" to "Unit" in systemd 229.
# Both the old, and new location are accepted by systemd 229 and up, so using the old location
# to make them work for either version of systemd.
StartLimitBurst=3

# Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.
# Both the old, and new name are accepted by systemd 230 and up, so using the old name to make
# this option work for either version of systemd.
StartLimitInterval=60s

# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

# Comment TasksMax if your systemd version does not support it.
# Only systemd 226 and above support this option.
TasksMax=infinity

# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes

# kill only the docker process, not all processes in the cgroup
KillMode=process
OOMScoreAdjust=-500

[Install]
WantedBy=multi-user.target
```

启动 docker

```bash
 $ systemctl start docker
 $ systemctl status docker

● docker.service - Docker Application Container Engine
     Loaded: loaded (/etc/systemd/system/docker.service; disabled; vendor preset: enabled)
     Active: active (running) since Tue 2024-07-30 15:48:08 CST; 4 weeks 0 days ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 2491134 (dockerd)
      Tasks: 72
     Memory: 77.1M
```

## 配置

编辑 `/etc/docker/daemon.json`(不存在则创建一个), 选择需要修改的配置写入文件  
[官方参数说明](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon)

```py
{
    "insecure-registries": ["192.168.2.2:8080"],                               # 私有镜像仓库, 第三方镜像源 "<IP>:<PORT>"
    "dns": [],                                                                 # 设定容器DNS的地址，在容器的 /etc/resolv.conf文件中可查看
    "exec-opts": ["native.cgroupdriver=systemd"],                              # 运行时执行选项
    "registry-mirrors": ["https://ucjisdvf.mirror.aliyuncs.com"],              # 更换官方镜像仓库地址为国内镜像地址
    "log-level": "info",                                                       # 显示日志等级 (debug|info|warn|error|fatal, 默认为 info)
    "log-driver": "json-file",                                                 # log 驱动
    "log-opts": {                                                              # 容器默认日志驱动程序选项
        "max-size": "100m",
        "max-file": "3"
    },
    "data-root": "/var/lib/docker"                                             # docker 运行及日志保存位置 (默认 /var/lib/docker)
}
```

更换 Docker 镜像源

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://mirror.ccs.tencentyun.com",
    "https://registry.mirrors.ustc.edu.cn",
    "https://ucjisdvf.mirror.aliyuncs.com"
  ]
}
```

修改配置文件后需要重启 docker 服务生效

```bash
 $ systemctl daemon-reload                                                     # 重新加载 docker 配置文件
 $ systemctl restart docker                                                    # 重新启动 docker

 $ systemctl status docker
 > ...
 > Activate: activate(running)
 > ...

 $ $ systemctl enable docker                                                     # 设置为开机启动
```

## docker 切换路径

```bash
 # 关闭 docker 服务
 $ systemctl stop docker
 
 # 查看 docker 默认根目录
 $ docker info | grep "Docker Root Dir"
 Docker Root Dir: /var/lib/docker
 
 # docker 文件由 /var/lib/docker 复制到 /home/docker
 $ rsync -avxP /var/lib/docker/ /home/docker/
 
 # 修改 docker 根目录, 有两种方法

 # 方法 1, 启动参数配置根目录
 $ vi /etc/systemd/system/docker.service
 ExecStart=/usr/bin/dockerd --data-root=/home/docker  

 # 方法 2 编辑 daemon.json 文件
 $ vi /etc/docker/daemon.json
 "data-root": "/home/docker"
 
 $ systemctl daemon-reload
 $ systemctl restart docker

 $ docker info | grep "Docker Root Dir"
 Docker Root Dir: /home/docker/
```

## Docker 基本参数

```bash
 $ docker --help
  管理命令:
    container   管理容器
    image       管理镜像
    network     管理网络
  命令：
    attach      介入到一个正在运行的容器
    build       根据 Dockerfile 构建一个镜像
    commit      根据容器的更改创建一个新的镜像
    cp          在本地文件系统与容器中复制 文件/文件夹
    create      创建一个新容器
    exec        在容器中执行一条命令
    images      列出镜像
    kill        杀死一个或多个正在运行的容器
    logs        取得容器的日志
    pause       暂停一个或多个容器的所有进程
    ps          列出所有容器
    pull        拉取一个镜像或仓库到 registry
    push        推送一个镜像或仓库到 registry
    rename      重命名一个容器
    restart     重新启动一个或多个容器
    rm          删除一个或多个容器
    rmi         删除一个或多个镜像
    run         在一个新的容器中执行一条命令
    search      在 Docker Hub 中搜索镜像
    start       启动一个或多个已经停止运行的容器
    stats       显示一个容器的实时资源占用
    stop        停止一个或多个正在运行的容器
    tag         为镜像创建一个新的标签
    top         显示一个容器内的所有进程
    unpause     恢复一个或多个容器内所有被暂停的进程
```
