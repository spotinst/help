#  Administration Release Notes

*  **ADM-0002 May 5, 2025:** You now add the expiration date of your Azure account secret in the [console](connect-your-cloud-provider/first-account/azure) or [API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure). This lets Spot remind you that your client secret is going to expire in advance. If your client secret expires, your Azure subscription gets disconnected from Spot, preventing Spot from managing your resources.


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">December 2024</summary>

<div style="padding-left:16px">

*  **ADM-0001 December 8, 2024:** You can use multitenancy to create hierarchies in your Spot organizations. You can set up your child orgs to use role-based access control (RBAC). Multitenancy is useful for managed service providers and resellers. It lets you configure your child orgs at the parent level. You can then give your customers access to the child orgs. [Learn more](administration/organizations/multitenancy).

</div>

</details>
