# Spot Security Release Notes

## Features and Enhancements

  * **SEC-010 December 17, 2024** In a few clicks, you can [onboard cloud accounts](spot-security/getting-started/) to Spot Security for misconfiguration and compliance assessment.


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">November 2024</summary>

<div style="padding-left:16px">

  * **SEC-009 November 19, 2024** You can [set up](spot-security/features/vulnerability/configure/aws) vulnerability scanning for Amazon Elastic Kubernetes Service and view the results in the [Vulnerability Scan Dashboard](spot-security/features/vulnerability/dashboard).

 </div>
</details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">October 2024</summary>
  
<div style="padding-left:16px">


* **SEC-008 October 14th, 2024** Presets are now called Asset Groups. You can use asset groups to filter findings for specific crown jewels, teams, or production accounts. [Learn more](spot-security/features/security-dashboard/)

* **SEC-007: October 8, 2024** Spot Security supports two new AWS service types: CloudFront and DynamoDB. [Learn more](spot-security/security-matrix/).

 </div>
</details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">September 2024</summary>

<div style="padding-left:16px">

* **SEC-006 September 16, 2024** Spot Security supports two new AWS service types: ECS (Elastic Container Service) and SQS (Simple Queue Service). [Learn more](spot-security/security-matrix/).

* **SEC-005 September 16, 2024** You can get email notifications when a set of specific security rules fail. The email notification contains details about the rules and the failing assets. [Learn more](spot-security/features/analyze-risks/).

 </div>
</details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">June 2024</summary>

<div style="padding-left:16px">


* **SEC-004 June 25, 2024** Spot Security supports automatic remediation of misconfigurations. This lets you fix detected risks with a single click. Spot Security lets you view the logs of all previous remediations and roll back if there are issues. In addition, role-based access control (RBAC) lets admins control who can do these remediations. This way, only authorized users can make changes to the security posture. [Learn more](spot-security/features/analyze-risks/remediate).

* **SEC-003 June 20, 2024** Spot Security has launched an enhanced version of the IAM Entitlement Analyzer. You can now run simple queries to determine who can perform specific actions on various assets. Additionally, it helps optimize policies by identifying duplicate and excessive privileges. [Learn more](spot-security/features/policy-engine).

* **SEC-002 June 2, 2024** With Infrastructure as Code (IaC) scanning, you can examine your source code repository for misconfigurations. You can also integrate this with your pull requests (PRs), and Spot Security will comment on any detected misconfigurations on the PR itself. This enables you to take corrective actions before merging the pull request, helps ensure your infrastructure is properly configured, and minimizes the risks in your deployments. [Learn more](spot-security/features/iac-scan/).

 </div>
</details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">May 2024</summary>

<div style="padding-left:16px">

* **SEC-001 May 22, 2024** Spot Security has released a new Prioritised Vulnerability feature. This feature is designed to streamline vulnerability patching by contextualizing CVEs based on the host they are detected on. Instead of solely relying on severity, this feature assigns a priority ranking from 1 to 100, with lower ranks indicating higher risk. [Learn more](spot-security/features/security-dashboard/?id=prioritised-vulnerability).

 </div>
</details>
