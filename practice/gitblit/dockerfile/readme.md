### 构建镜像

```

docker build -t alpine-jre-gitblit:latest .
```

### 运行

docker run -it --name xxx -P alpine-jre-gitblit:latest

### 其他配置

其他配置根据自身需求完成配置。

1、代码存放目录

```
#
# 指定仓库目录
git.repositoriesFolder = /opt/data

# http访问
server.httpPort = 8080
#
# server.httpBindInterface =0.0.0.0
```
