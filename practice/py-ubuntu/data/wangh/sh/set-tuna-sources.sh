#!/bin/bash

# ===========================================

# set-tuna-sources.sh

# 功能：全自动将 Ubuntu 源更换为 清华大学镜像站（https://mirrors.tuna.tsinghua.edu.cn）

# 用法：sudo bash set-tuna-sources.sh

# 作者：bobby <yidongdematong@163.com>

# ===========================================

# 颜色定义

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN} 正在自动更换 Ubuntu 源为 清华大学镜像站...${NC}"

# 检查是否为 root

if [ "$EUID" -ne 0 ]; then
echo -e "${RED} 错误：请使用 sudo 或 root 用户运行${NC}"
exit 1
fi

# 获取系统代号

CODENAME=$(lsb_release -cs)
if [ -z "$CODENAME" ]; then
echo -e "${RED} 无法获取系统代号，请确保已安装 lsb-release${NC}"
exit 1
fi

# 定义清华源地址

MIRROR="https://mirrors.tuna.tsinghua.edu.cn/ubuntu"

# 备份原文件

SOURCES="/etc/apt/sources.list"
BACKUP="/etc/apt/sources.list.bak.$(date +%Y%m%d-%H%M%S)"

if [ -f "$SOURCES" ]; then
cp "$SOURCES" "$BACKUP"
echo -e "${YELLOW} 已备份原配置到：$BACKUP${NC}"
else
    echo -e "${RED} 错误：$SOURCES 不存在！${NC}"
exit 1
fi

# 生成新的 sources.list（清华源）

cat > "$SOURCES" << EOF

# 清华大学开源镜像站 | https://mirrors.tuna.tsinghua.edu.cn

deb $MIRROR $CODENAME main restricted universe multiverse
deb-src $MIRROR $CODENAME main restricted universe multiverse

deb $MIRROR $CODENAME-security main restricted universe multiverse
deb-src $MIRROR $CODENAME-security main restricted universe multiverse

deb $MIRROR $CODENAME-updates main restricted universe multiverse
deb-src $MIRROR $CODENAME-updates main restricted universe multiverse

deb $MIRROR $CODENAME-backports main restricted universe multiverse
deb-src $MIRROR $CODENAME-backports main restricted universe multiverse
EOF

echo -e "${GREEN}镜像源已成功更换为清华大学镜像站${NC}"
echo -e "${GREEN} 源地址：$MIRROR${NC}"

# 更新软件包列表

echo -e "${YELLOW} 正在执行 apt update...${NC}"
apt update

if [ $? -eq 0 ]; then
echo -e "${GREEN} 镜像源切换成功，软件包列表已更新！${NC}"
else
echo -e "${RED} apt update 失败，请检查网络连接或镜像站可用性${NC}"
echo -e "${YELLOW} 可恢复备份：sudo cp $BACKUP /etc/apt/sources.list${NC}"
exit 1
fi

# 提示完成

echo
echo -e "${GREEN} 全部操作完成！系统已使用清华源。${NC}"
