---
title: Uninstalling Agents on Linux
sidebar_position: 2
---

# Linux Agent 삭제
---

## 1. RHEL/CentOS/Rokcy/Redhat 계열
### 1) 에이전트 패키지 설치 확인
- <span class = "text-red">*`rpm -qa | grep Cylance`*</span> 을 실행합니다. <br />
    ```bash
    [root@localhost AuroraPROTECT]$ rpm -qa | grep Cylance
    CylancePROTECTDriver-x.x.xxxx-xxx.elx.x86_64
    CylancePROTECTOpenDriver-x.x.xxxx-xxx.elx.x86_64
    CylancePROTECT-x.x.xxxx-xxx.x86_64
    ```
<br />

### 2) 에이전트 삭제
- 에이전트 서비스 중지 <br />
   ```bash
    [root@localhost AuroraPROTECT]$ systemctl stop cylancesvc
  ```
- 에이전트 패키지 삭제
   ```bash
    [root@localhost AuroraPROTECT]$ rpm -e | CylancePROTECTDriver
    [root@localhost AuroraPROTECT]$ rpm -e | CylancePROTECTOpenDriver
    [root@localhost AuroraPROTECT]$ rpm -e | CylancePROTECT
   ```
- 에이전트 패키지 삭제 확인
  - Cylance 관련 패키지가 확인되지 않을 시 삭제 완료
  ```bash
    [root@localhost AuroraPROTECT]$ rpm -qa | grep Cylance
  ```
<br />
<br />

## 2. Ubuntu/Debian 계열
### 1) 에이전트 패키지 설치 확인
- <span class = "text-red">*`dpkg -l | grep cylance`*</span> 을 실행합니다. <br />
    ```bash
    [root@localhost AuroraPROTECT]$ dpkg -l | grep cylance
    ii 	cylance-protect             x.x.xxxx.xxxx
    ii 	cylance-protect-driver	    x.x.xxxx.xxxx
    ii  cylance-protect-opendriver  x.x.xxxx.xxxx
    ```
<br />
<br />

### 2) 에이전트 삭제
- 에이전트 서비스 중지 <br />
   ```bash
    [root@localhost AuroraPROTECT]$ systemctl stop cylancesvc
  ```
- 에이전트 패키지 삭제
   ```bash
    [root@localhost AuroraPROTECT]$ dpkg -P cylance-protect
    [root@localhost AuroraPROTECT]$ dpkg -P cylance-protect-driver
    [root@localhost AuroraPROTECT]$ dpkg -P cylance-protect-open-driver
   ```
- 에이전트 패키지 삭제 확인
  - Cylance 관련 패키지가 확인되지 않을 시 삭제 완료
  ```bash
    [root@localhost AuroraPROTECT]$ dpkg -l | grep cylance
  ```