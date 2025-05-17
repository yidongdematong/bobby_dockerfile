@echo off
title ���ؾ��������������Ƹ��˲ֿ�-bobby
REM ���ͱ���Docker���񵽰����Ƹ��˲ֿ�ű�
REM ʹ�÷���: putsh_to_ali.bat [���ؾ�����] [�汾��ǩ] [�����Ʋֿ������ռ�] [�����ƾ�����]

REM �������
if "%1"=="" (
    echo ����: ��ָ�����ؾ�������
    echo �÷�: %0 [���ؾ�����] [�汾��ǩ] [�����������ռ�] [�����ƾ�����]
    echo ʾ��: %0 myapp 1.0.0 mynamespace myrepo
    exit /b 1
)

if "%2"=="" (
    set TAG=latest
) else (
    set TAG=%2
)

if "%3"=="" (
    set ALIYUN_NAMESPACE=���Ĭ�������ռ�
) else (
    set ALIYUN_NAMESPACE=%3
)

if "%4"=="" (
    set ALIYUN_REPO=%1
) else (
    set ALIYUN_REPO=%4
)

REM ���ð�����Docker�ֿ��ַ
set ALIYUN_REGISTRY=registry.cn-hangzhou.aliyuncs.com

REM ���������Ŀ�꾵������
set TARGET_IMAGE=%ALIYUN_REGISTRY%/%ALIYUN_NAMESPACE%/%ALIYUN_REPO%:%TAG%

echo.
echo ���ڽ����ؾ��� %1:%TAG% ���͵������Ʋֿ� %TARGET_IMAGE%
echo.

REM ����1: ��¼������Docker Registry��
echo ���ڵ�¼������Docker Registry...
docker login --username=yidongdematong@163.com  %ALIYUN_REGISTRY%

if %ERRORLEVEL% neq 0 (
    echo ����: Docker��¼ʧ��
    exit /b 1
)

REM ����2: ��Ǳ��ؾ���
echo ���ڱ�Ǿ���...
docker tag %1:%TAG% %TARGET_IMAGE%

if %ERRORLEVEL% neq 0 (
    echo ����: ������ʧ��
    exit /b 1
)

REM ����3: ���;���
echo �������;��񵽰����Ʋֿ�...
docker push %TARGET_IMAGE%

if %ERRORLEVEL% neq 0 (
    echo ����: ��������ʧ��
    exit /b 1
)

REM ����4: �������ر��
set /p CLEANUP="�Ƿ�ɾ�����ر�ǵľ���?(y/n) "
if /i "%CLEANUP%"=="y" (
    echo ����ɾ�����ر�ǵľ���...
    docker rmi %TARGET_IMAGE%
)

echo.
echo �����������!
echo �����ƾ����ַ: %TARGET_IMAGE%

pause
exit