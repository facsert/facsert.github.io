---
pubDatetime: 2023-03-23 15:28:43
title: NodeJS config
slug: NodeJS config
featured: false
draft: false
tags:
  - NodeJS
description: "NodeJS 基本配置"
---

## Table of Contents

## Download and Update

[nodejs 官网下载](https://nodejs.org/zh-cn)

```bash
 # 使用版本管理器 nvm 安装 node, 任选一种方式下载
 $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
 $ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

 # 设置 nvm 镜像源
 $ export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/

 $ nvm install 20
 $ nvm ls
 $ nvm use 20
 > Now using node v20.18.0 (npm v10.8.2)

 $ node -v                                       # 查看 node 版本
 > v20.18.0

 $ nvm ls
 >     v20.18.0
```

nodejs 通过 n 模块更新或切换版本

```bash
 $ node -v                                       # node 版本
 > v18.15.0
 $ npm cache clean -f                            # 清除nodejs的cache：
 $ npm install -g n                              # 使用npm全局安装n模块
 $ npm view node versions                        # node所有版本
 $ n latest                                      # 升级到最新版本
 $ n stable                                      # 升级到最新稳定版本
 $ n v18.15.0                                    # 升级到 18.15.0 版本, 某个具体版本号
 $ n install --insecure v18.1.0                  # 下载 18.1.0 版本, 忽略 SSL 证书

 $ n ls                                          # 列出本地所有 node 版本
 $ n ls-remote                                   # 列出当前可下载版本
 $ n                                             # 进入交互页面选择版本作为默认版本

 $ npm -v                                        # npm 版本, node 的包管理器
 > 9.5.0
 $ npm install npm@latest -g                     # npm 升级到最新版
 $ npm install npm@xx -g                         # npm 升级到指定版本
 $ npm version                                   # 查看当前 npm 版本详情
 $ npm view npm version                          # 查看 npm 最新版本
 $ npm view npm versions                         # 查看 npm 所有版本
 $ npm list                                      # 已安装插件清单
```

离线切换, 将下载的 nodejs 版本包解压

```bash
 # 解压离线包, 将文件复制到 n 对应的版本文件路径下
 $ tar -xvf node-v17.9.0-linux-x64.tar.xz
 $ cp -rf node-v17.9.0-linux-x64/*  /usr/local/n/version/node/17.9.0/

 # 在交互页面选择指定版本
 $ n
  ο node/17.6.0
    node/17.9.0
    node/18.1.0

     copying : node/17.6.0
   installed : v17.6.0 (with npm 8.5.1)

 $ node -v
 > v17.6.0
```

### npm 配置

npm 可用更换默认模块安装位置和缓存位置
npm 可更换下载源为国内源

```bash
 $ npm config set prefix <path>                  # 更换全局模块安装位置
 $ npm get prefix                                # 查看 npm 安装全局模块的位置
 > /usr/local

 $ npm config set cache <path>                   # 更换 npm 缓存位置
 $ npm get cache                                 # 查看 npm 缓存存放的位置
 > /Users/john/.npm

 $ npm install nrm -g                            # 使用资源切换工具 nrm 切换下载源
 $ nrm ls                                        # 列出可用的下载源
 $ nrm use taobao                                # 使用 taobao 源

 $ npm config get registry                       # 查看当前 npm 下载源
 > https://registry.npmjs.org/                   # 官方 npm 下载源

 $ npm config set registry <source>              # 命令切换 npm 下载源
 $ npm config set registry http://registry.npmmirror.com
```

npm 全局安装, 存放在全局模块位置, 所有项目生效
npm 本地安装, 在当前目录 node_modules 文件夹下, 仅目录下项目生效

```bash
 $ npm init                                      # 初始化项目, 生产 package.json 记录安装的模块及版本
 $ npm install vue --save                        # 更新 package.json 中 vue 版本的版本信息
 $ npm install                                   # 目录下存在 package.json 会自动根据文件下载依赖包

 $ npm list                                      # 查看当前项目安装的模块

 $ npm list -g                                   # 查看全局安装的模块
  /usr/local/lib
  ├── corepack@0.17.1
  ├── n@9.0.1
  ├── npm@9.6.2
  └── yarn@1.22.19

 $ npm install <package>                          # 本地安装模块
 $ npm install <package> -g                       # 全局安装模块

 $ npm uninstall <package>                        # 卸载本地安装的模块
 $ npm uninstall <package> -g                     # 卸载全局安装的模块
```

### yarn 配置

```bash
 $ npm install yarn -g                           # npm 全局安装 yarn
 $ yarn config set global-folder <path>          # 设置全局安装目录
 $ yarn config set cache-folder <path>           # 设置全局缓存目录

 $ yarn global add yrm                           # 安装 yrm 以切换下载源
 $ yrm ls                                        # 列出所有下载源
 $ yrm use taobao                                # 使用 taobao 源

 $ yarn config get registry                      # 查看当前 yarn 下载源
 > https://registry.yarnpkg.com                  # yarn 官方默认源

 $ yarn config set registry <source>             # 命令更换 yarn 下载源
```

yarn 的使用与 npm 类似

```bash
 $ yarn init                                     # yarn 初始化项目, 生成 package.json
 $ yarn install                                  # 目录下有 package.json 自动下载文件内的包

 $ yarn global add <package>                     # 全局安装工具包
 $ yarn add <package>                            # 本地安装包

 $ yarn global remove <package>                  # 卸载全局包
 $ yarn remove <package>                         # 卸载项目下的包

 $ yarn upgrade <package>                        # 更新某个包

 $ yarn list                                     # 显示本地安装的所有包

 $ yarn global list                              # 显示全局安装的所有包
 > yarn global v1.22.19
 >   - yrm

 $ yarn info <package>                           # 查看包的信息
```

## Windows fnm

fnm 是 node 版本管理工具, 支持 window(n 不支持 windows)

```powershell
# windows 安装 fnm
winget install Schniz.fnm

# linux macos 安装 fnm(需要先安装 curl 和 unzip), 或者直接下载 fnm 文件
curl -o- https://fnm.vercel.app/install | bash

# 获取本例 node 版本(本地已安装版本显示 system)
fnm list

# 显示可安装的版本
fnm list-remote

# 下载指定版本
fnm install 20

# windows 设置环境变量 fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
# linux 将 eval "$(fnm env --use-on-cd --shell bash)" 写入 .bashrc
# 使用临时使用版本
fnm use 20

# 设置命令行开启默认版本
fnm default 20
```

注: 要使 fnm 环境变量持续生效需修改 powershell 配置文件

```powershell
# 若 powershell 配置不存在则生成
if (-not (Test-Path $profile)) { New-Item $profile -Force }

# 查看配置路径
echo $profile
> D:\Document\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

# 将以下命令写入文件最后一行
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
```
