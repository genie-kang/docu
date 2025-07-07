---
title: "Upgrade Linux Agents: Local Endpoint"
sidebar_position: 6
---

# Linux에서 SentinelOne Agent 업그레이드하는 방법
---
<br />
:::tip Note
- **rpm, deb 배포판 별 Agent 업그레이드 방식의 차이는 없습니다.**<br /> ex) 22.2 ➔ 22.3 ➔ 24.3
- Agent 22.2 버전 이하에서 업그레이드를 진행하려면 두 번의 업그레이드가 필요합니다.
- Agent 22.2 버전 이하에서는 Pass Phrase가 필요합니다. 
:::
<br />

## 1. *upgrade* 명령어를 이용한 업그레이드
- <span class = "text-red">*`/opt/sentinelone/bin/sentinelctl control upgrade <설치 파일 버전>`*</span> 를 실행하십시오.<br />

- ### ➊ RPM 
  ```js
  [root@localhost ~]# /opt/sentinelone/bin/sentinelctl control upgrade /home/user/SentinelAgent linux x86 64 v24 3 3 6. rpm
  Initiating agent upgrade...
  Current agent version: 24.2.2.20
  Stopping agent...
  Agent stopped
  Failed extracting rpm signature. exit code: 1, output: /home/user/SentinelAgent_linux_x86_64_v24.6.rpm:
    Header V4 RSA/SHA256 Signature, key ID bf000751: NOKEY
    Header SHAl digest: OK (cdd87dd9b7c251c4963b87e04cc1bld965c2b985)
    V4 RSA/SHA256 Signature, key ID bf000751: NOKEY 
    MD5 digest: 0K (bf24b183f727aeb3281226796221991a)

  Failed to verify file custom signature: Invalid file signature (sha256): EVP_PKEY_verify() Failed. COF71A12687F0000:error:0200008A:rsa routines:RSA_padding_check_PKCS1_type_1:invalid padding:../. 1 openssl/openssl/crypto/rsa/rsa_pkl.c:75:
  COF71A12687F0000:error:02000072:ra routines:rsa_ossl_public_decrypt:padding check failed:../../openssl/openssl/crypto/rsa/rsa_ossl. c:598:
  COF71A12687F0000:error:1C880004:Provider routines:rsa_verify:RSA lib:../../openssl/openssl/providers/implementations/signature/rsa_sig. c:774:

  Verified rpm embedded signature successfully
  Agent upgrade successful
  Starting agent.…
  Agent is running
  ```    
    &nbsp;
  - 새로운 버전의 에이전트가 설치되었는지 확인합니다.<br /> <span class = "text-red">*`sudo /opt/sentinelone/bin/sentinelctl version`*</span> 를 실행하십시오.<br />
    ```bash
    [root@localhost SentinelOne]$ /opt/sentinelone/bin/sentinelctl version
    Agent version: 24.3.3.6
    SentinelCTL version: 24.3.3.6
    Ranger version: 23.4.2.1
    Git hash: <githash_value>
    ```

<br />
<br />

- ### ➋ DEB
  ```js
  [root@ubuntu ~]# /opt/sentinelone/bin/sentinelctl control upgrade /home/user/SentinelAgent linux_ x86_64_v24_3_3_6. det
  Initiating agent upgrade...
  Current agent version: 24.2.2.20
  Stopping agent...
  Agent stopped
  Agent upgrade successful
  Starting agent.…
  Agent is running
  ``` 
      &nbsp;
  - 새로운 버전의 에이전트가 설치되었는지 확인합니다.<br /> <span class = "text-red">*`sudo /opt/sentinelone/bin/sentinelctl version`*</span> 를 실행하십시오.<br />
    ```bash
    [root@localhost SentinelOne]$ /opt/sentinelone/bin/sentinelctl version
    Agent version: 24.3.3.6
    SentinelCTL version: 24.3.3.6
    Ranger version: 23.4.2.1
    Git hash: <githash_value>
    ```
<br />
<br />
 
## 2. 콘솔에서 버전 업그레이드 결과 확인
- 콘솔에서 에이전트 호스트명을 확인하십시오.<br />![Agent Version List](./img/upgrade/rpm_agent.png)
<br />

&nbsp;
- 선택한 에이전트에서 **Agent version**을 통해 업그레이드 된 에이전트 버전을 확인하십시오.<br />![Agent Version List](./img/upgrade/Screenshot%202025-04-06%20at%2019.46.29-1.png)<br />
<br />
---