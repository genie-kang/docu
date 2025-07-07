---
title: Network Requirements
sidebar_position: 2
---
<br />
# 네트워크 요구 사항
---
<br />
<!-- |URL|Port / Protocol|Flow|
|---|---------------|----|
|apse1-pago.sentinelone.net|443 / SSL|Outbound|
|ioc-gw-prod-ap-southeast-1-1a.sentinelone.net|443 / SSL|Outbound| -->

| URL                                                       | Port | Service | FLOW      |
|-----------------------------------------------------------|------|---------|-----------|
| apse1-pago.sentinelone.net                                | 443  | HTTPS   | Outbound  |
| ioc-gw-prod-ap-southeast-1-1a.sentinelone.net             | 443  | HTTPS   | Outbound  |
| ioc-gw-prod-ap-southeast-1-1b.sentinelone.net             | 443  | HTTPS   | Outbound  |

- 위 정보를 참고하여 방화벽 정책 등록을 요청드립니다.
- 에이전트는 URL Base 통신만 지원하며, 반드시 각 노드는 DNS 통신이 가능하여야 합니다.

