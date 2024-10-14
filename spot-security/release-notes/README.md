# Spot Security Release Notes

## Features and Enhancements

* **SEC-008: October 14th, 2024** Presets are now called Asset Groups. You can use asset groups to filter findings for specific crown jewels, teams, or production accounts. After you've set up an asset group, you can use it in Billing Engine, Cost Intelligence, and Spot Security. [Learn more](spot-security/features/security-dashboard/)

* **SEC-007: October 8th, 2024** Spot Security supports two new AWS service types: CloudFront and DynamoDB. [Learn more](spot-security/security-matrix/)

<details>
  <summary markdown="span">September 2024</summary>

* **SEC-006: September 16th, 2024** Spot Security supports two new AWS service types: ECS (Elastic Container Service) and SQS (Simple Queue Service).. [Learn more](spot-security/security-matrix/)

* **SEC-005: September 16th, 2024** You can get email notifications when a set of specific security rules fail. The email notification contains details about the rules and the failing assets. [Learn more](spot-security/features/analyze-risks/)

</details>


<details>
  <summary markdown="span">June 2024</summary>

* **SEC-004: June 25th, 2024** Spot Security now supports automatic remediation of misconfigurations. This lets you fix detected risks with a single click. Spot Security lets you view the logs of all previous remediations and roll back if there are issues. In addition, role-based access control (RBAC) lets admins control who can do these remediations. This way, only authorized users can make changes to the security posture. [Learn more](spot-security/features/analyze-risks/remediate)

* **SEC-003: June 20th, 2024** Spot Security has launched an enhanced version of the IAM Entitlement Analyzer. You can now run simple queries to determine who can perform specific actions on various assets. Additionally, it helps optimize policies by identifying duplicate and excessive privileges. [Learn more](spot-security/features/policy-engine)

* **SEC-002: June 2nd, 2024** With Infrastructure as Code (IaC) scanning, you can now examine your source code repository for misconfigurations. You can also integrate this with your pull requests (PRs), and Spot Security will comment on any detected misconfigurations on the PR itself. This enables you to take corrective actions before merging the pull request, helps ensure your infrastructure is properly configured, and minimizes the risks in your deployments. [Learn more](spot-security/features/iac-scan/)

</details>


<details>
  <summary markdown="span">May 2024</summary>

* **SEC-001: May 22, 2024** Spot Security has released a new Prioritised Vulnerability feature. This feature is designed to streamline vulnerability patching by contextualizing CVEs based on the host they are detected on. Instead of solely relying on severity, this feature assigns a priority ranking from 1 to 100, with lower ranks indicating higher risk. [Learn more](spot-security/features/security-dashboard/?id=prioritised-vulnerability)

</details>
