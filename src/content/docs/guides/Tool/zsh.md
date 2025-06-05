---
pubDatetime: 2022-08-28 15:28:43
title: zsh
slug: zsh
featured: false
draft: false
tags:
  - zsh
  - Tool
description: "zsh 是一个高效美观的 shell"
---

## Table of Contents

## zsh 介绍

zsh 能基本完美兼容 bash 的命令，并且使用起来更加优雅,
zsh 可以通过 oh-my-zsh 添加主题和插件实现美观高效的命令行体验

## 安装与配置

```zsh
 $ sudo apt install zsh                          # Ubuntu 直接下载安装
 $ yum install zsh                               # Centos Redhat yum 安装版本低无法添加 oh-my-zsh

 $ zsh && echo $SHELL                            # mac 默认是 zsh
 > /bin/zsh

 $ cat /etc/passwd | grep root                   # 查看 root 用户的默认 shell
```

```zsh
 $ zsh                                           # 使用 zsh 命令启动 zsh
 $ cat /etc/shells                               # 查看所有 shell

 $ echo $SHELL                                   # 查看当前 shell
 > /bin/bash

 $ which zsh                                     # 查看 zsh 执行文件位置
 $ chsh -s /bin/zsh                              # /bin/zsh 为 zsh 执行文件位置(重新登录账号生效)

 $ usermod --shell /usr/bin/zsh root             # root 用户设置 zsh 为默认 shell
 $ cat /etc/passwd |grep root                    # 检查 root 用户默认shell
 > root:x:0:0:root:/root:/usr/bin/zsh

 $ ~/.zshrc                                      # 启动 zsh 时执行的配置文件
 $ source ~/.zshrc                               # 配置立即生效
```

注: .zshrc 可删除, 启动 zsh 未发现 .zshrc 文件会提示重新配置 zsh

## 主题

oh-my-zsh 是 zsh 主题控制工具, 安装后可更换主题, 安装插件

```zsh
 # GitHub 源码安装
 $ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

 # 国内镜像
 $ sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"
```

注: .oh-my-zsh 默认安装在 ~/.oh-my-zsh, 主题夹为 ~/.oh-my-zsh/themes

### 配置主题

```zsh
 $ vi ~/.zshrc                                   # 修改 zsh 配置文件

 > ZSH_THEME="<主题>"                              # 更换 .oh-my-zsh 主题
 > export ZSH="<.oh-my-zsh位置>"                   # 定义 .oh-my-zsh 位置
```

注: .oh-my-zsh 的位置是可变的, 只要在 .zshrc 配置中指定即可

### powerlevel10k

.oh-my-zsh 有很多主题可更换, powerlevel10k 是一款爆火的主题

```zsh
 # GitHub 源码安装
 $ git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
 
 # 国内镜像
 $ git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"

 
 $ vi ~/.zshrc                                   # 修改 zsh 主题
 > ZSH_THEME="powerlevel10k/powerlevel10k"

$ source ~/.zshrc                                # 配置立即生效

$ p10k configure                                 # 重新设置主题配置
```

powerlevel10k 推荐使用 mesloLGS 字体(`https://github.com/romkatv/powerlevel10k-media` 下载安装)
注: 配置生效后, 自动进入配置选项, 逐一选择即可

## 功能

介绍一些高效功能

### 命令提示

```zsh
 $ command  <Tab>                                # 输入命令, 按下 Tab 会显示可执行参数

 $ date -<Tab>                                   # 使用 Tab 查看提示
 > --date       -d         -- output date specified by string
 > --help                  -- output help and exit
 > --file       -f         -- output dates specified in file
```

### 智能补全

```zsh
 $ cd /h/f/D <Tab>                               # 路径缩写补全
 > cd /home/ubuntu/Desktop/

 $ cd /home/ubuntu/ <Tab> <Tab>                  # 连续两次 Tab 进入选择模式
```

### 快速跳转

```zsh
 $ d                                             # 执行 d 命令, 列出之前进入的目录, 数字选择
 > 0       ~/Desktop
 > 1       ~/Desktop/test
 > 2       ~
 > 3       ~root

 $ cd - <Tab>                                    # 同上, 列出之前目录, 通过数字选择
```

```zsh
 $ alias                                         # 列出所有快捷命令

 cd .. => ...                                    # 常用的命令热键
 cd - => -
 git status => gst
 git log --stat => glg
 git add --all => gaa
 git commit -a -s => gcas
 git push origin {curr_branch} => ggpush
 git pull origin {curr_branch} => ggpull
```

## 插件

oh-my-zsh 可以安装许多高效插件, 安装后可使用插件功能

### zsh-syntax-highlighting

错误语法高亮, 正确命令绿色, 错误命令红色

```bash
 $ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-/root/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

 $ vi ~/.bashrc                                  # 编辑 zsh 配置文件, plugins 添加插件
 > plugins=(
 >   ...
 >   zsh-syntax-highlighting
 > )

 $ source ~/.zshrc                               # 配置立即生效
```

### zsh-autosuggestions

补全历史命令

```bash
 $ git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

 $ vi ~/.bashrc                                  # 编辑 zsh 配置文件, plugins 添加插件
 > plugins=(
 >   ...
 >   zsh-autosuggestions
 > )

 $ source ~/.zshrc                               # 配置立即生效
```

### z

仅输入文件即可跳转到曾经进入的文件目录(oh-my-zsh 自带,无需下载)

```bash
 $ vi ~/.bashrc                                  # 编辑 zsh 配置文件, plugins 添加插件
 > plugins=(
 >   ...
 >   z
 > )

 $ source ~/.zshrc                               # 配置立即生效

 $ ~/Desktop/zsh/a/b/c                           # 进入过 c 文件目录
 $ ...                                           # 随意进入其他路径
 $
 $ z c                                           # z 命令加文件夹名即可回去
```

### extract

一键解压 tar, gz, zip, rar 包(oh-my-zsh 自带,无需下载)

```bash
 $ vi ~/.bashrc                                  # 编辑 zsh 配置文件, plugins 添加插件
 > plugins=(
 >   ...
 >   extract
 > )

 $ x package.tar.gz                              # x 命令加压缩包即可解压
 $ x package.zip
```
