---
title: "Upgrade Windows Agents: Management Console"
sidebar_position: 4
---

# 관리 콘솔에서 SentinelOne Agent 업그레이드 하는 방법
---
<br />
> <br />콘솔에서 Agent 업그레이드를 진행할 때에는 Agent Online 상태를 유지해야합니다. <br /><br />


## 1. 에이전트 선택
- #### ➊ Sentinels > ➋ ENDPOINTS > ➌ CheckBox > ➍ Actions 실행![alt text](./img/upgrade/Screenshot%202025-04-03%20at%2013.18.16.png)
<br />
<br />

## 2. Update Agent 선택
- #### Agent Version Changes > Update Agent
  ![alt text](./img/upgrade/Screenshot%202025-04-06%20at%2018.09.26.png)<br />
<br />
<br />

## 3. Update Agent 진행
- **Platform** : OS 확인
- **Update Timing**
  - Immediately : 즉시 업그레이드 진행
  - According to Maintenance Window : UPGRADE POLICY ➔ Maintenance Window 에서 지정한 일정으로 업그레이드 진행 <br />
  - **GA**버전임을 확인<br />![alt text](./img/upgrade/Screenshot%202025-04-06%20at%2018.12.46.png)
  <br />

  &nbsp;
- **Update Agent 실행**<br />![alt text](./img/upgrade/Screenshot%202025-04-06%20at%2018.12.53.png)<br />

  &nbsp;
- **Auto Upgrade 정책을 무시하고 실행하는지 여부 확인**<br />![alt text](./img/upgrade/Screenshot%202025-04-06%20at%2018.13.07.png)<br />

  &nbsp;
- **콘솔에서 Agent Version 업그레이드 확인**<br />![alt text](./img/upgrade/Screenshot%202025-04-06%20at%2018.34.03.png)<br />

  &nbsp;
- **로컬 UI에서 AGENT DETAILS > Version 확인**<br />![alt text](./img/upgrade/Screenshot%202025-04-06%20at%2018.19.23.png)<br />

<br />

---