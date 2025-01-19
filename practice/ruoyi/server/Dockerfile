FROM  java-jre:8
MAINTAINER "bobby#yidongdematong@163.com"
# 上传 java 项目
COPY  /jar/ruoyi-admin.jar /home/java/
RUN  mkdir -p /home/ruoyi/uploadPath
EXPOSE 8850
# 启动java 项目
# ENTRYPOINT exec  java -jar /home/java/ruoyi-admin.jar && /bin/sh
ENTRYPOINT  cd /home/java/ &&  date;sleep 1m;java -jar  ruoyi-admin.jar
# ENTRYPOINT  /bin/sh
# # ENTRYPOINT  java -version && /bin/sh
