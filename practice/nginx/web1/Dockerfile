FROM  nginx:latest
# 2.维护者信息
MAINTAINER  bobby yidongdematong@163.com
#  待发布项目拷贝到容器中
COPY  /html/ /usr/share/nginx/html/
# 删除nginx 默认配置文件
RUN rm -rf /etc/nginx/conf.d/default.conf
# 修改nginx默认配置文件，指向代发步项目
COPY /config/host.bobby.conf /etc/nginx/conf.d/
# 设置nginx容器监听8848
# EXPOSE 9981 
# 启动容器后自动启动nginx 服务
# ENTRYPOINT service nginx start && /bin/sh