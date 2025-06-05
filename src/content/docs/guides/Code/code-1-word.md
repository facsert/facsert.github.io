---
pubDatetime: 2022-08-09 21:20:45
title: 代码
slug: 代码
featured: false
draft: false
tags:
  - code
description: ""
---

## Table of Contents

## 规则

确定代码空格, 对齐, 换行的规则

### 空格

使用空格使运算语句更清晰, 分隔多个数据或参数

```python
 4 + 2                                           # 6 二元运算
 2 ** 3                                          # 8 指数运算

 love = True                                     # 赋值
 love is True                                    # True 逻辑判断
 not love                                        # False 非运算
 love > (not love)                               # True 比较运算
 love and love                                   # True 逻辑运算

 (1, 2, 3)                                       # 数据之间空格区分
 {'name': 'petter'}                              # 键值对区分 key value

 func(msg='hello', name='petter')                # 参数之间空格区分
```

无需空格的代码

```javascript
 !true                                           // false 非运算 一元运算
 ~2                                              // -3 按位取反
 [1, 2, 3]                                       // 逗号前不需要空格
 {'key': 'value'}                                // 括号开头和结尾无需空格
```

### 对齐

通过缩进区分代码所属区域, 同层级的代码对齐

```javascript
if (count) {
  // 通过缩进区分代码所属区域
  while (count--) {
    console.log(count);
  }

  // 循环结束后打印结果
  console.log("while cycle over");
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

```python
# 函数名较长和参数过多, 换行需要缩进
run_long_name_function(
    cycle='1',
    step='reset',
    log='pass',
    time=133
)

# 较大的数据结构
{
    'name': 'petter',
    'age': 25,
    'gender': 'Male',
}
```

相同的内容对齐后更容易发现差异, 代码整体更加美观整洁

```python
http.post(username='alice',   email='alice@example.com',   phone='12345678')
http.post(username='bob',     email='bob@example.com',     phone='12345678')
http.post(username='victory', email='victory@example.com', phone='12345678')
http.post(username='petter',  email='petter@example.com',  phone='12345678')
```

### 空行

时用空行分隔无关的代码, 使相关的代码形成代码块

```python
def check_server_info():

    if not connect("192.168.1.100:22"):
        display("connect failed ", False)
        exit()

    if not exists("/home/server/info"):
        display("file not exists", False)
        exit()

    try:
        check("/home/server/info")
    except TimeoutError as err:
        display(f'check server info failed: {err}', False)
        exit()

    display('check server info success')
```

### 单一规则

在一个项目里只使用一种代码规则

1. 命名法(驼峰法, 蛇形命名)不要混用
2. 相似的问题尽量使用同一种解决方式
3. 相似的结构或处理方式, 代码格式尽量保持一致

## 命名

- 准确 突出重点
- 简洁
- 一致性

命名目地: 把信息放入名字里  
变量命名: 名词 形容词  
函数命名: 动词 名词 (形容词)

```bash
errTestMsg                  # 驼峰命名

err_test_msg                # 蛇形命名, 下划线 _ 区分断点
```

### 准确 突出重点

使用 **准确** **具体** **单一**的词

[常用动词](#常用动词)

正向语义命名

```python
 test_pass = True                                # 推荐
 test_fail = False                               # 不推荐

 able = True                                     # 值与语义对应
 unable = False                                  # 双重否定表示肯定
```

通过 **前缀** **后缀** 突出重点
强调或者注意的内容放在最后

```python
 is_xx                                           # 是不是
 should_xx                                       # 是否应该
 has_xx                                          # 有没有
 can_xx                                          # 能不能

 max_xx                                          # 最大的
 min_xx                                          # 最小的
 avg_xx                                          # 平均的
```

```python
 time_secs = 8                                   # 时间变量添加单位
 size_mb = 2                                     # 添加单位 mb
 length_str = '5'                                # 添加值类型后缀
 book_json = {'code': {...}}                     # 添加值类型后缀

 apple_red                                       # 强调 apple 的颜色
 red_apple                                       # 强调 apple 个体
```

### 长度

使用常用的单词缩写  
省略无用的内容  
在小的作用域内可以使用简短的变量名

```python
 def get_central_processing_unit_information():
    central_processing_unit_id = 1
    central_processing_unit_model = 'Intel i7-10710U'
    central_processing_unit_core_count = 4

 # 善用常用缩写, 省略无用的内容, 缩短变量名
 # 通过作用域信息省略变量名
 def get_cpu_info():
    id = 1
    model = 'Intel i7-10710U'
    core_count = 4
```

[常见单词缩写](#单词缩写)

### 一致性

项目中表示同样的值或类似的值, 命名方式保持一致或趋同

```python
# 标题打印, 标题等级, 和标题填充长度
def title(string='title', level=3, length=30):
    pass

# 进度条打印, 等待时间, 是否显示进度条, 进度条长度
def wait(delay=1, view=True, length=50):
    pass

# ping 命令, 测试次数, 失败间隔等待时间, 是否显示命令打印
def ping(host, count=3, delay=10, view=True):
    pass

# 类似的参数使用相同参数名称
```

## 注释

代码比注释更重要  
注释应强调使用规范和缺陷

### 代码比注释更重要

注释是代码的补充, 先写好代码, 再使用注释引导读者理解代码  
无需用注释解释能从代码迅速推断的内容, 避免无效注释

### 强调使用规范和缺陷

函数和类的注释要表明参数类型, 使用方式
表明对可能出现的问题

```python
def title(string='title', level=3, length=30):
    """根据 level 等级打印不同样式的标题

    Args:
        string (str, optional): 标题内容. Defaults to 'title'.
        level  (int, optional): 标题等级 (0, 1, 2, 3). Defaults to 3.
        length (int, optional): 标题一端符号的数量. Defaults to 30.

    Returns:
        None: 无返回值

    Attention:
        标题有4个等级, 与符号对应关系是
            0: '##### title #####'
            1: '===== title ====='
            2: '***** title *****'
            3: '----- title -----'
    """
    pass

```

## 常用动词

```shell
    添加/插入                      add, append, insert,
    创建/初始化                    create, initialize,
    加载/选择                      load, pick, select
    删除/销毁                      delete, remove, destroy, drop
    打开/启动                      open, start
    关闭/停止                      close, stop
    获取/读取                      get, fetch, acquire, read,
    查找/查询                      search, find, query
    设置/重置                      set, reset
    放入/写入                      put, write,
    释放/刷新                      release, refresh
    发送/推送                      send, push
    接收/拉取                      receive, pull
    提交/取消                      submit, cancel
    收集/采集                      collect,
    提取/解析                      sub, extract, parse
    编码/解码                      encode, decode
    填充/压缩                      fill, pack, compress
    清空/解压                      flush, clear, unpack, decompress
    增加/减少                      increase, decrease, reduce
    分隔/拼接                      split, join, concat
    过滤/校验/检测                 filter, valid, check
```

## 单词缩写

```shell
    addition              add               加
    subtraction           sub               减
    multiplication        mul               乘法
    division              div               除法
    hexadecimal           hex               十六进制
    array                 arr               数组, 集合
    list/Sequence         lst/seq           列表
    dictionary            dict              字典
    character             char              字符
    string                str               字符串
    text                  txt               文本
    number                num               数量, 编号
    image                 img               图像
    length                len               长度
    summation             sum               和
    average               avg               平均
    maximum               max               最大值
    minimum               min               最小值
    middle                mid               中值
    source                src               源头
    address               addr              地址
    previous              pre               前一个
    current               cur               当前的
    initalize             init              初始化
    database              db                数据库
    administrator         adm               管理员
    password              pwd               密码
    user                  usr               用户
    directory             dir               目录
    document              doc               文档
    library               lib               库
    function              func              函数
    object                obj               对象
    argument              arg               实参
    variable              var               变量
    parameter             param             参数(形参)
    execute               exec              执行
    command               cmd               命令
    configuration         config            配置
```
