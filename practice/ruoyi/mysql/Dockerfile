FROM mysql:latest
MAINTAINER "bobby#yidongdematong@163.com"

# 数据库初始化脚本
COPY /init/ruoyi.sql /docker-entrypoint-initdb.d/

EXPOSE 3306 33060
