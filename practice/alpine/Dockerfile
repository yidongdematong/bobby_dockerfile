# 尝试通过dockerfile 构建镜像
# 四步走
# 1.基础镜像信息
FROM alpine:latest
# 2.维护者信息
MAINTAINER  bobby yidongdematong@163.com
# 3.镜像操作指令,新建一个目录
# RUN 指令主要用来执行一些构建时的操作，比如安装软件、编译代码、下载文件等，这些操作都会在镜像构建时执行。
RUN ["mkdir","/home/bobby"]
ENTRYPOINT ["/bin/sh"]
# 4.容器启动时执行命令,CMD指令的主要目的在于给启动的容器指定默认要运行的程序，且在运行结束后，容器也将终止；不过，CMD命令可以被docker run的命令行选项给覆盖,Dockerfile中可以存在多个CMD指令，但是只有最后一个会生效。
CMD ["cd","/home/bobby"]