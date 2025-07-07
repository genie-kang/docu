---
title: "Windows : VSS Snapshots"
sidebar_position: 1
---

# SentinelOne VSS Snapshots
---
<br />
:::tip Note
- **SentinelOne에서는 Windows 환경에서 Snapshots라는 기능을 지원합니다.**
- **Snapshots** 기능은 Windows에서 롤백을 위해 VSS Snapshots를 보관합니다.
- 비활성화하면 롤백을 사용할 수 없습니다.
- **SentinelOne 롤백 기능은 Microsoft Windows Volume Shadow Copy Service(VSS)를 사용합니다.**
- Windows VSS는 기본 10%를 사용하도록 되어있습니다.
- 이는 최소값으로 더 낮게 설정할 수는 없으나, 10% 제한을 풀 수는 있습니다.
:::
<br />

## 1. VSS Writers 확인
```js
vssadmin list writers
```
SentinelOne Agent가 Windows VSS를 사용하여 Snapshots을 작성함을 확인할 수 있습니다.

![alt text](./img/Screenshot%202025-04-06%20at%2020.36.13-1.png)
<br />
<br />

## 2. VSS Snapshots 용량 확인
    ```js
    vssadmin list shadowstorage
    ```
- VSS Snapshots 현재 사용하고 있는 용량 확인<br />기본값 10% 지만, 더 축소하는 것은 불가능합니다.
    ![alt text](./img/Screenshot%202025-04-06%20at%2022.34.07-1.png)
<br />
<br />


## 3. VSS Snapshots 삭제

- Agent 보호 기능을 비활성화합니다.

- Snapshots에 대한 보호 기능을 비활성화합니다.

    ```js
    sentinelctl.exe unprotect -k "<passphrase>"

    sentinelctl config vssConfig.vssProtection false
    sentinelctl config enginesWantedState.penetration off
    ```
<br />

- 삭제하려는 Snapshots의 범주를 선택합니다.

    ```js
    모든 shadows 복사본을 삭제:  vssadmin delete shadows /all 

    가장 오래된 항목을 삭제:  vssadmin delete shadows /For=C:/Oldest
    ```

- 아래 오류가 출력된다면:
    ```js
    Error: Snapshots were found, but they were outside of your allowed context.  Try removing them with the backup application which created them.
    ```
    <br />

- Diskshadow를 실행합니다.

    ```js
    Diskshadow

    delete shadows all
    ```

    ![alt text](./img/Screenshot%202025-04-06%20at%2022.48.24-1.png)

    ```js
    sentinelctl config vssConfig.vssProtection true
    sentinelctl config enginesWantedState.penetration local

    sentinelctl.exe protect
    ```
    ![alt text](./img/Screenshot%202025-04-06%20at%2022.49.52-1.png)

<br />
---