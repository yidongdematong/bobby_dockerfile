## dockerfile

Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明.

一般而言，Dockerfile分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令。
1. 基础镜像信息
指定所创建镜像的基础镜像，如果本地不存在，则默认会去Docker Hub下载指定镜像。

格式为FROM<image>，或FROM<image>：<tag>，或FROM<image>@<digest>。

任何Dockerfile中的第一条指令必须为FROM指令。并且，如果在同一个Dockerfile中创建多个镜像，可以使用多个FROM指令（每个镜像一次）
## 常用指令
###  FROM

指定基础镜像，必须为第一个命令
格式：
```
FROM <image>[:<tag>]
例如：
FROM alpine:latest
```
为了保证镜像精简，可以选用体积较小的Alpine或Debian作为基础镜像.

### MAINTAINER
指定维护者信息
格式：
```
MAINTAINER <name>
例如：
MAINTAINER bobby#yidongdematong@163.com
```

### RUN
运行指定的命令，并生成新的镜像层

格式：
```
#shell形式
RUN <command>
或
#exec形式
RUN["executable"，"param1"，"param2"]。

注意，后一个指令会被解析为Json数组，因此必须用双引号。
例如：
RUN  ["mkdir","/home/bobby"]

前者默认将在shell终端中运行命令，即/bin/sh-c；后者则使用exec执行，不会启动shell环境。

指定使用其他终端类型可以通过第二种方式实现，例如RUN ["/bin/bash"，"-c"，"echo hello"]。

每条RUN指令将在当前镜像的基础上执行指定命令，并提交为新的镜像。当命令较长时可以使用\来换行
```
###  CMD    
指定启动容器时默认执行的命令
格式：
```
#在/bin/sh中执行，提供给需要交互的应用
CMD <command>
#使用exec执行，是推荐使用的方式
CMD ["executable"，"param1"，"param2"]
#提供给ENTRYPOINT的默认参数
CMD ["param1"，"param2"]
例如：
CMD  ["/bin/sh"]
```
### ENTRYPOINT
指定镜像的默认入口命令，该入口命令会在启动容器时作为根命令执行，所有传入值作为该命令的参数
格式：
```
#exec调用执行
ENTRYPOINT ["executable"，"param1"，"param2"]
ENTRYPOINT /bin/sh -c "echo hello"
#shell调用执行
ENTRYPOINT ["param1"，"param2"]

当指定ENTRYPOINT时，CMD指令将作为根命令的参数。
此时，CMD指令指定值将作为根命令的参数。

每个Dockerfile中只能有一个ENTRYPOINT，当指定多个时，只有最后一个有效。

在运行时，可以被--entrypoint参数覆盖掉，如docker run--entrypoint。
```