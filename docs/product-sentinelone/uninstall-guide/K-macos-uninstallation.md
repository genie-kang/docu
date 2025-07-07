---
title: Uninstalling Agents on macOS
sidebar_position: 3
---

# macOS 에이전트 삭제
---
<br />
><br />관리 콘솔 제거 권한이 있는 사용자만 Agent를 제거할 수 있습니다 . 요청에 응답하기 전에 사용자의 이유를 철저히 이해하는 것이 중요합니다.<br /><br />
<br />


## 1. 관리 콘솔에서 에이전트 제거
- **하나 이상의 엔드포인트를 선택합니다.**
  - **➊ SENTINELS** > **➋ ENDPOINTS** > **➌ 엔드포인트 선택** <br />![Agent Selcet](./img/macos/uninstall1.png)<br />

  &nbsp;
- **선택한 엔드포인트에서 에이전트를 제거하십시오.**
  - **➊ Actions** > **➋ Endpoint Actions** > **➌ Uninstall**.<br />![Actions](./img/macos/uninstall2.png)<br />

  &nbsp;
- **Acion approved를 선택하고 Uninstall을 진행하십시오.**<br />![Action approved](./img/macos/uninstall3.png)<br />

  &nbsp;
- 2단계 인증(2FA)을 완료하여 콘솔에서 에이전트를 제거하십시오. 인증은 30분 동안 유효하며, 다시 작업을 수행하려면 재인증이 필요합니다.<br />![Complete 2FA](./img/macos/uninstall4.png)<br />

&nbsp;
- 에이전트가 정상적으로 제거됐는지 관리 콘솔에서 확인하십시오.<br />![Check the console](./img/macos/uninstall5.png)<br />

&nbsp;

## 2. SentinelCtl을 사용하여 에이전트 제거

### 1) 엔드포인트의 암호 가져오기
- **삭제할 엔드포인트를 선택합니다.**<br />![Agent Selcet](./img/macos/uninstall1.png)<br />

&nbsp;
- **➊ Actions** > **➋ Agent Actions** > **➌ Show Passphrase.**<br />![Show Passphrase](./img/macos/uninstall6.png)<br />

&nbsp;
- **암호를 확인하십시오.**<br />![Show Passphrase](./img/macos/uninstall7.png)<br />

&nbsp;
### 2) 명령어 실행 및 패스워드 입력
- SentinelCtl 명령어를 사용해 Uninstall 하십시오.<br />
- <span class = "text-red">*`sudo sentinelctl uninstall --passphrase "<passphrase>"`*</span>를 실행합니다.
    ```bash
    [user@uninstall]:~% sudo sentinelctl uninstall --passphrase "eyJ1cmwiOiAiaHR0cHM6Ly9hcHNlMS1wYWdvLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIzNTY0MTE5MzU3YjU3NGE4In0="
    Password:
    SentinelOne agent has been uninstalled.
    ```

&nbsp;
* 에이전트가 정상적으로 제거됐는지 관리 콘솔에서 확인하십시오.<br />![Check the console](./img/macos/uninstall5.png)<br />

---
