@echo off
REM ÿ���賿�Զ�����docker����localcodeserverΪ���񲢵�����ͨ������ϵͳ��ʱ������ɶ�ʱ����
title �������������µľ��񹤾�
REM ���ñ���
echo �������뱸�ݵ������������ƣ�
set /p container_name=
set CONTAINER_NAME=%container_name%
set IMAGE_NAME=localcodeserver_backup
echo �����뱸���ļ���ŵ�ַ��
set /p  backup_dir=
set BACKUP_DIR=%backup_dir%
set DATE=%date:~0,4%%date:~5,2%%date:~8,2%
set TIMESTAMP=%time:~0,2%%time:~3,2%%time:~6,2%
set TIMESTAMP=%TIMESTAMP: =0%
set BACKUP_FILENAME=%IMAGE_NAME%_%DATE%_%TIMESTAMP%.tar

REM ��������Ŀ¼����������ڣ�

if not exist "%BACKUP_DIR%" (
    mkdir "%BACKUP_DIR%"
)

REM �ύ����Ϊ�¾���
echo �����ύ���� %CONTAINER_NAME% Ϊ�¾��� %IMAGE_NAME%:%DATE% ...
docker commit %CONTAINER_NAME% %IMAGE_NAME%:%DATE%

REM ���������ļ�
echo ���ڵ������� %BACKUP_DIR%\%BACKUP_FILENAME% ...
docker save -o "%BACKUP_DIR%\%BACKUP_FILENAME%" %IMAGE_NAME%:%DATE%

echo �������: %BACKUP_DIR%\%BACKUP_FILENAME%

REM ɾ����ʱ���񣨿�ѡ��
REM echo ����ɾ����ʱ���� %IMAGE_NAME%:%DATE% ...
docker rmi %IMAGE_NAME%:%DATE%

pause
exit