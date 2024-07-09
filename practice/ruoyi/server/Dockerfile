FROM  java:openjdk-8u111-jre-alpine
MAINTAINER "bobby#yidongdematong@163.com"
# 上传 java 项目
COPY  /jar/ruoyi-admin.jar /home/java/
RUN  mkdir -p /home/ruoyi/uploadPath
EXPOSE 8850
# 启动java 项目
# ENTRYPOINT exec  java -jar /home/java/ruoyi-admin.jar && /bin/sh
ENTRYPOINT  java -version && top && /bin/sh
# ENTRYPOINT  /bin/sh
# # ENTRYPOINT  java -version && /bin/sh
