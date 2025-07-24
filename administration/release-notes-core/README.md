#  Administration Release Notes

* **ADM-0003 July 23, 2025**: The Spot console has updated [vCPU](administration/vcpu) and [Savings](administration/savings) pages, offering improved visibility and usability for resource and cost optimization.

* **ADM-0002 July 7, 2025:** There is a limit to the number of API requests you can make every 60 seconds. The limit is according to the Spot organization, API route (such as /aws/ec2/group), and the request type (such as DEL, GET). [Learn more](/administration/api/#rate-limit).

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
  <summary markdown="span" style="color:#7632FE; font-weight:600">December 2024</summary>

   <div style="padding-left:16px">

   *  **ADM-0001 December 8, 2024:** You can use multitenancy to create hierarchies in your Spot organizations. You can set up your child orgs to use role-based access control (RBAC). Multitenancy is useful for managed service providers and resellers. It lets you configure your child orgs at the parent level. You can then give your customers access to the child orgs. [Learn more](administration/organizations/multitenancy).

  </div>

</details>
