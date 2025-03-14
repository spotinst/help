# Frequently Asked Questions

<!----------------------------------general---------------------------------->

## General

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="genreg">AWS, Azure, GCP: What regions does Spot support for my cloud provider?</summary>

 <div style="padding-left:16px" >

**AWS Regions**

us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, sa-east-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, ap-south-1, me-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-east-1, cn-north-1, cn-northwest-1, ap-northeast-3, af-south-1, eu-south-1, us-gov-east-1, us-gov-west-1, cn-north-1, cn-northwest-1.

Supported products: Eco, CloudAnalyzer, Ocean, Elastigroup.

>**Notes**:
>
> For Eco and CloudAnalyzer only, the following China regions are not supported:
> - cn-north-1
> - cn-northwest-1
>
> For Eco, CUR bucket deployment is only supported in [regions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions) where the `Opt-in Status` is `not required`.

**Azure Regions**

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas, us-gov-virginia, west-us, west-us-2, west-us-3.

Supported products: Ocean, Elastigroup.

**GCP Regions**

us-east1, us-east1, us-east1, us-east4, us-east4, us-east4, us-central1, us-central1, us-central1, us-central1, us-west1, us-west1, us-west1, europe-west4, europe-west4, europe-west4, europe-west1, europe-west1, europe-west1, europe-west3, europe-west3, europe-west3, europe-west2, europe-west2, europe-west2, asia-east1, asia-east1, asia-east1, asia-southeast1, asia-southeast1, asia-southeast1, asia-northeast1, asia-northeast1, asia-northeast1, asia-south1, asia-south1, asia-south1, australia-southeast1, australia-southeast1, australia-southeast1, southamerica-east1, southamerica-east1, southamerica-east1, asia-east2, asia-east2, asia-east2, asia-northeast2, asia-northeast2, asia-northeast2, europe-north1, europe-north1, europe-north1, europe-west6, europe-west6, europe-west6, northamerica-northeast1, northamerica-northeast1, northamerica-northeast1, us-west2, us-west2, us-west2.

Supported products: Ocean, Elastigroup.

   </div>

 </details>
 <a href="faqs/frequently-asked-questions/general#genreg"></a>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="savings">AWS, Azure, GCP: How are costs and savings calculated in the Spot console and the API?</summary>

  <div style="padding-left:16px">

Savings in the Spot API shows you the total cost of the cluster/group.

Savings in the Spot console (click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png"> > **Settings** > **Savings**) shows you how much you saved by using spot nodes instead of on-demand nodes:

* **Potential cost** is the price of the resource based on on-demand pricing.
* **Actual cost** is the actual payment made to the cloud provider after Ocean/EG optimization.
* **Savings %** is the percent of potential cost saved, calculated as (amount saved / potential cost) x 100.
* **Amount saved** is the difference between the potential cost (on-demand pricing) and the actual cost for the selected period.

 </div>
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="billing">AWS, Azure, GCP: What day of the month can I see my Spot bill?</summary>

  <div style="padding-left:16px">

You can [see your invoice](administration/organizations/billing-details?id=monthly-billing-details) on the 15th of the following month. For example, to see data that includes April, you can view the invoices on or after May 15. The charge is about 3 business days after the invoice (around May 18).

Depending on holidays, the invoice and charges may be slightly delayed.

 </div>
 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="gennews">AWS, Azure, GCP: Where can I get the latest Spot and cloud provider news?</summary>

 <div style="padding-left:16px">

You can get information about releases and new features:

* [Spot blog](https://spot.io/blog/)
* [Spot news](https://spot.io/resource-center/?post_types=news)
* [AWS blog](https://aws.amazon.com/blogs/aws/)
* [AWS news](https://aws.amazon.com/new/)
* [Azure blog](https://azure.microsoft.com/en-us/blog/)
* [Azure news](https://azure.microsoft.com/en-us/blog/content-type/announcements/)
* [GCP blog](https://cloud.google.com/blog)
* [GCP news](https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud)


   </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="editname">AWS, Azure, GCP: Can I edit my organization name or my Spot account name?</summary>

 <div style="padding-left:16px">

Yes, you can edit your:

* [Organization name](administration/organizations/?id=update-your-organization-name)
* [Spot account name](administration/organizations/?id=update-your-spot-account-name)

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="genodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1. If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2. If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3. If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4. If there is any free compute service plan commitment, then the instance is a savings plan.
5. Otherwise, the instance will run as a full-price on-demand instance.

Throughout the lifetime of an instance, it can change its “price” whenever there’s any change in the commitments utilization rate. For example, if an instance is running as a full price on-demand instance, and another instance that was utilizing a compute savings plan commitment was terminated, the first instance will start utilizing this commitment if its hourly price rate has enough free space under this commitment. It might take a couple of minutes for this change to show, but since the billing is being calculated retroactively, in practice it’s starting to utilize the commitment right away.
   
 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="runninghours">AWS: How are running hours calculated in the Spot console and AWS?</summary>

  <div style="padding-left:16px">

Running hours are calculated from the moment an instance is launched until it is <i>detached</i> and not <i>terminated</i>. AWS calculates the entire lifetime of the instance.

Here are some reasons for large differences between the numbers in the Spot Console and AWS:

* Groups of instances with long draining periods
* Shutdown scripts with long grace periods

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="AWSIAM">AWS: Can I remove permissions from the Spot IAM policy?</summary>

  <div style="padding-left:16px">

You can choose to remove some of these permissions from the [Spot IAM policy](/administration/api/spot-policy-in-aws):

* **iam:PutRolePolicy** is not required as it is only used if the instance profile itself needs to create inline policies.

* **iam:CreateServiceLinkedRole** is only needed for an initial spot request, then it can be removed. This means it's only required to create the first spot instance in your account. After creating an Ocean or Elastigroup and launching a Spot instance through Spot, you can remove this permission from the policy.

* **iam:AddRoleToInstanceProfile** is generally not required. It is only used to change the role associated with an instance profile and is required for Beanstalk.

* **iam:PassRole** is only required when you custom metrics. Ocean EKS does not require <i>iam:PassRole</i> in the Spot policy. However, if you use custom metrics, you need an account with this role configured for putting metric data into CloudWatch, which is in use by both Ocean (PublishOceanKubernetesCwMetricsExecutor) and EG (ReportCWMetricsNewCmd).

 </div>

 </details>
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="awscw">AWS: Why am I getting an alert in CloudWatch that the AMI ID does not exist?</summary>

  <div style="padding-left:16px">

You might get this alert in CloudWatch:

````json
"eventType": "AwsApiCall",
"error": {
"kind": "Client.InvalidAMIID.NotFound",
"message": "The image id '[ami-xxxxx]' does not exist"
},
````

This can happen if you have AWS resources that are not managed by Spot. Spot scans all regions for each account to show you how you can get savings. This information is shown in the [Optimization dashboard](connect-your-cloud-provider/optimize).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="serviceaccountkey">GCP: Can I change the service account key for my GCP account?</summary>

  <div style="padding-left:16px">

You can reset your credentials using the [set credentials for GCP API](https://docs.spot.io/api/#operation/OrganizationsAndAccountsSetCloudCredentialsForGCP). It typically changes immediately. If it doesn’t, the service runs at the beginning of each hour.

Try launching an instance to see that it’s working correctly.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-signin">SSO: Why can't I sign in to the Spot console?</summary>

  <div style="padding-left:16px">

You may get an error when you try to sign in to the Spot console if:

* You’re using username/password when SSO is enabled for your organization.

  Signing in using username/password is turned off if SSO is set up for your organization. All users, including admins, must use SSO if it’s set up.

  You may have multiple organizations, some that use SSO and some that don’t:

    * If your default organization <i>has</i> SSO, then you can only sign in using SSO. You can see your non-SSO organizations in the org list and switch to them.
      
    * If your default organization <i>doesn’t</i> have SSO, then sign in with your username/password. When you switch to an org with SSO, you’ll get the SSO sign-in page.

* You’re using multiple-factor authentication (MFA) when SSO is set up for your organization.

  Signing in using MFA is turned off if SSO is set up for your organization.

* You’re using MFA when SSO is not set up for your organization.

  Make sure you’re using the correct MFA token for the organization you’re signing into. MFA tokens are specific to a user and an organization.

* **(AWS)** The username in AWS Active Directory doesn’t exactly match the email address in the Spot console.

   Make sure your [Active Directory](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-connect-id-source-ad-idp-specify-user.html) is using the same email address as the Spot console.
  
   You can access the users in the Spot console: click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png"> > **Settings** > **Organization** > **Users**.

* The [Identifier (Entity ID) URL](https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/spotinst-tutorial#configure-azure-ad-sso) is not set up correctly. If the URL isn't correct, you might get this message when you sign in to the Spot console:

  ````
    AADSTS650056: Misconfigured application. This could be due to one of the following: the client has not listed any permissions for 'AAD Graph' in the requested permissions in the client's application registration. Or, the admin has not consented in the tenant. Or, check the application identifier in the request to ensure it matches the configured client application identifier. Or, check the certificate in the request to ensure it's valid. Please contact your admin to fix the configuration or consent on behalf of the tenant. Client app ID: Idl xxxxx.
  ````

  The [Identifier (Entity ID) URL](https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/spotinst-tutorial#configure-azure-ad-sso) must be `https://console.spotinst.com/auth/saml`. It cannot be a different URL or blank.

  Delete the Spotinst app in Azure AD and recreate it with the correct URL.

 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-SAMLID">SSO: What should be the SAML entity ID for the application?</summary>

  <div style="padding-left:16px">

The default entity ID is https://console.spotinst.com/auth/saml. If you need additional entity IDs, you can add a number at the end of the URL (for example, https://console.spotinst.com/auth/saml6).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-ACSURL">SSO: What is the ACS URL?</summary>

  <div style="padding-left:16px">

The ACS URL is https://console.spotinst.com/auth/saml.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-SAMLassertion">SSO: Can the SAML assertion sent back to the application (SP) be encrypted?</summary>

  <div style="padding-left:16px">

The SAML is Base64encoded by the IDP. Encrypted assertions such as AES-256-CBC and TRIPLEDES-CBC are not supported.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSOsinglelogoutservice">SSO: What are the SingleLogoutService URLs?</summary>

  <div style="padding-left:16px">

   Single log out service URLs are not supported. After logging in, users need to manually log out using the Spot console.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-509">SSO: What is the public X.509 certificate for signing and encryption?</summary>

  <div style="padding-left:16px">

The X.509 certificate needs to be a standard strength certificate (2048-bit) with the SHA-1 SAML signature algorithm. The IDP usually provides it as part of the application.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-metadata">SSO: Where can I find the application SAML metadata in XML format?</summary>

  <div style="padding-left:16px">

The attributes that can be sent depend on your [identify provider](administration/identity-providers/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-oktaerror">SSO: Why am I getting a user provisioning error in Okta?</summary>

  <div style="padding-left:16px">

You cannot sign in to your Spot org due to a user provisioning error in your Okta SSO environment. For example, you're getting one of these errors:

* `Automatic provisioning of user {name of user} to app Spotinst failed: Matching user not found.`
* `Automatic profile push of user {name of user} to app Spotinst failed: Error while trying to push profile update for {user email}: No user returned for user {user id}`

These internal logging errors occur because of a misconfiguration in the Okta SSO environment.
1. Make sure edit is set up for provisioning:
    <ol style="list-style-type: lower-alpha;">
    <li>Go to Okta Admin Console and click <b>Applications</b> > <b>Spotinst</b> > <b>Provisioning</b> > <b>To App</b>.</li>
    <li>Click <b>Edit</b> and then <b>Enable</b> for <i>Create Users</i>, <i>Update User Attributes</i>, and <i>Deactivate Users</i>.</li>
    </ol>
 
2. Check for failed tasks:
    <ol style="list-style-type: lower-alpha;">
    <li>Go to the Okta Admin Console and navigate to <b>Dashboard</b> > <b>Tasks</b>. Look for failed provisioning assignments under <b>Tasks</b>.</li>
    <li>If there are failed tasks for the users who were getting errors, retry the tasks by selecting the task and then clicking <b>Retry Selected</b>.</li>
    </ol>

    After retrying the failed tasks, the errors should be resolved and the users should have complete access to the Spotinst app after signing in using SSO. If there are no failed tasks associated with these users or if the issue isn’t resolved, unassign them.
   
3. Unassign the users from the Spotinst app in Okta. Once unassigned, reassign these specific users to the Spotinst app.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-oktadel">SSO: If I delete a user in Okta, is the user deleted in the Spot console?</summary>

  <div style="padding-left:16px">

If you delete or deactivate a user in Okta, the user typically is not deleted or deactivated in the Spot console.

The exception is if you have Okta with [system for cross-domain identity management](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_scim.htm) (SCIM) and selected Deactivate Users in provisioning. In this case, the user will be deleted. All tokens for that user are also deleted.

  </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-groupokta">SSO: How can I add a user to groups in an organization in Okta?</summary>

  <div style="padding-left:16px">

   You can add a user to one or many user groups in an [organization](/administration/sso-access-control/organization-level-sso?id=organization-and-user-group) in Okta spotinst application:
1. Make sure [Okta SAML 2.0 authentication](/administration/identity-providers/okta-saml-authentication) is configured with Spot.
2. Sign in to Okta Admin, go to **Directory** > **Profile Editor**, and select **Spotinst User**.
3. Click **Add Attribute** and add a custom attribute:
    * **Data Type**: <i>string</i>
    * **Display Name**: <i>OrgAndUserGroups</i>
    * **Variable Name**: <i>OrgAndUserGroups</i>

4. Click **Save**.
5. In Okta Admin, go to **Applications** > **Applications**, and select **Spotinst app**.
6. On the Sign On tab, add this custom attribute under the **SAML 2.0 settings**:
   * **Attribute Name**: <i>OrgAndUserGroups</i>
   * **Name Format**: <i>Unspecified</i>
   * **Value**: <i>appuser.OrgAndUserGroups</i>

7. Generate a [new certificate](/administration/identity-providers/okta-saml-authentication) and upload it to your Spot Organization.
8. Add users to groups:
   <ol style="list-style-type: lower-alpha;">
   <li>For each user in your organization who needs to be assigned to groups, go to Okta Admin <b>Directory</b> > <b>People</b>.</li>
   <li>On the Applications tab, locate the Spotinst app and click <b>Edit</b> to add the <i>OrgAndUserGroups</i>:</li>
      <ul>
       <li><p>For a single user: <code>SPOTINST-{OrganizationID}:{UserGroupId}</code></p>
        <p>For example: <code>SPOTINST-606012345678:ugr-1234</code></p>
       </li>
       <li><p>Multiple UserGroupIds for the same organization are separated with a comma: <code>SPOTINST-{OrganizationID}:{UserGroupId1},{UserGroupId2}</code></p>
        <p>For example: <code>SPOTINST-606012345678:ugr-1234,ugr-5678</code></p>
       </li>
      </ul>


 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSOaddlattributes">SSO: What additional attributes (if any) does the application need from the assertion?</summary>

  <div style="padding-left:16px">

There are a number of <a href="/administration/sso-access-control/">attributes that can be sent</a>. These are the default and required attributes:

* Relay State
* Email
* FirstName
* LastName
  
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="verificationemail">Why are existing users getting new verification emails?</summary>

  <div style="padding-left:16px">

Each time a user is added to an organization, the user gets a verification email from Spot. So if a user gets added to 3 organizations, they’ll receive 3 emails so they can confirm their email address all 3 times.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="supporttix">How can I see my open support tickets for Spot?</summary>

  <div style="padding-left:16px">

You can go to the [Spot support center](https://support.spot.io/hc/en-us) to submit requests and view ticket history.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="pagerdutynotifications">Can I set up PagerDuty alerts from Spot?</summary>

  <div style="padding-left:16px">

   You can set up PagerDuty alerts in Spot:

   1. Set up [PagerDuty email integration](https://support.pagerduty.com/docs/email-integration-guide).
   2. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
   3. Click **Notification Center** > **Event Policies**.
   4. Click on the name of the event policy to add the integration.
   5. Go to **Users & Integrations** > **Add Integration**.
   6. Select **External Email** and enter the PagerDuty email address. This allows Spot to send notifications to external email addresses. Any email sent to the PagerDuty email address will trigger a PagerDuty alert.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="opsgenienotifications">Can I set up OpsGenie alerts from Spot?</summary>

  <div style="padding-left:16px">

You can use email or webhook to integrate OpsGenie with the Spot notification center.

**Email**

Set up OpsGenie email integration and then configure the notifications in Spot:

* Using the console
   1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
   2. Click **Notification Center** > **Event Policies**.
   3. Click on the name of the event policy to add the integration.
   4. Go to **Users & Integrations** > **Add Integration**.
   5. Select **External Email** and enter the OpsGenie email address. This allows Spot to send notifications to external email addresses. Any email sent to the OpsGenie email address will trigger an OpsGenie alert.

* Using the Spot API, [add a notification](https://docs.spot.io/api/#operation/notificationsServiceSubscriptionsSubscribe). For example:
   ````json
   "resourceId": "xxxxxxx",
   "protocol": "email ",
   "endpoint": "YOUR@EMAIL.COM",
   "eventType": "xxxxx",
   ````

* Using the Spot API, [update a notification](https://docs.spot.io/api/#operation/notificationsServiceSubscriptionsUpdate). For example:
   ````json
   "resourceId": "xxxxxxx",
   "protocol": "email ",
   "endpoint": "YOUR@EMAIL.COM",
   "eventType": "xxxxx",
   ````

**Webhook**
1. Set up [OpsGenie webhook integration](https://support.atlassian.com/opsgenie/docs/integrate-opsgenie-with-webhook/).
2. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
3. Click **Notification Center** > **Event Policies**.
4. Click on the name of the event policy to add the integration.
5. Go to **Users & Integrations** > **Add Integration**.
6. Select **Webhook** and enter the URL address you created in OpsGenie (for example, https://api.opsgenie.com/v2/alerts).

 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="jq">Can I use JQ to extract data from an API call?</summary>

  <div style="padding-left:16px">

   JQ is a tool that lets you extract, manipulate, and transform JSON data. You can use it extract data from an API call.

You can [download JQ](https://jqlang.github.io/jq/download/) and use the [online curl command line builder](https://curlbuilder.com/). Curl lets you interact with web services, APIs, and services using command line.

For curl, use this template:
````curl
curl -X GET '{URL}' \
-H 'Authorization: Bearer {TOKEN}' \
-H 'Content-Type: application/json'
````

For example:
* Get the value of the maximum number of instances set in an Elastigroup using CLI

    * Use this API:
      https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsListElastigroup
  
    * Enter this in JQ:  
      ````curl
	  curl -X GET 'https://api.spotinst.io/aws/ec2/group/{groupID}' \
      -H 'Authorization: Bearer {token}' \
      -H 'Content-Type: application/json' | jq '.response.items[0].capacity.maximum'
      ````
  
* Get the cluster-ocean id by cluster name

    * Use this API:
      https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterList

    * Enter this in JQ:  
      ````Curl
	  curl –X GET 'https://api.spotinst.io/ocean/aws/k8s/cluster?accountId={accountID}' \
      -H 'Authorization: Bearer {token}' \
      -H 'Content-Type: application/json' 
       | jq '.response.items[] | select(.controllerClusterId | contains("{cluster-name}")) | .id'
      ````

 </div>
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="idle">How long before I get signed out of the Spot console (idle)?</summary>

  <div style="padding-left:16px">

After 12 hours of inactivity, you get signed out of the Spot console.
   
 </div>
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="spotinstsdklambda">Can I integrate Spotinst SDK with AWS Lambda?</summary>

  <div style="padding-left:16px">

The Spotinst SDK library is supported just like any other Python package.

Spotinst-sdk2 is not part of the default PyPl. You need to create a deployment package with it to use it in the Lambda function:

1. [Create a ZIP deployment package with dependencies](https://docs.aws.amazon.com/lambda/latest/dg/python-package.html#python-package-create-dependencies). Make sure that all dependencies and Lambda functions are at the same level, zipped together, and uploaded.
2. Update the [default timeout](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html) for the Lambda function to 60 seconds.

 </div>
 </details>

 
<!----------------------------------ocean---------------------------------->

## Ocean

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanreg">AWS, Azure, GCP: What regions does Spot support for my cloud provider?</summary>

 <div style="padding-left:16px">

**AWS Regions**

us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, sa-east-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, ap-south-1, me-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-east-1, cn-north-1, cn-northwest-1, ap-northeast-3, af-south-1, eu-south-1, us-gov-east-1, us-gov-west-1, cn-north-1, cn-northwest-1.

**Azure Regions**

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas, us-gov-virginia, west-us, west-us-2, west-us-3.

**GCP Regions**

us-east1, us-east1, us-east1, us-east4, us-east4, us-east4, us-central1, us-central1, us-central1, us-central1, us-west1, us-west1, us-west1, europe-west4, europe-west4, europe-west4, europe-west1, europe-west1, europe-west1, europe-west3, europe-west3, europe-west3, europe-west2, europe-west2, europe-west2, asia-east1, asia-east1, asia-east1, asia-southeast1, asia-southeast1, asia-southeast1, asia-northeast1, asia-northeast1, asia-northeast1, asia-south1, asia-south1, asia-south1, australia-southeast1, australia-southeast1, australia-southeast1, southamerica-east1, southamerica-east1, southamerica-east1, asia-east2, asia-east2, asia-east2, asia-northeast2, asia-northeast2, asia-northeast2, europe-north1, europe-north1, europe-north1, europe-west6, europe-west6, europe-west6, northamerica-northeast1, northamerica-northeast1, northamerica-northeast1, us-west2, us-west2, us-west2.

</div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanallocationutilization">AWS, Azure, GCP: What's the difference between allocation and utilization for Ocean right sizing?</summary>

  <div style="padding-left:16px">

Estimating the proper amount of CPU and memory when assigning resource requests to workloads is a challenge that teams face when designing Kubernetes or ECS clusters. To address this challenge and create even more resource-efficient clusters, Ocean has implemented a right-sizing recommendation mechanism.

Right-sizing recommendations are provided per container and summarized for the entire workload for easy presentation at a high level. Recommendations per container enable you to easily understand exactly which applications require changes in resource requests and implement those changes quickly.

Applying the changes suggested by those notifications helps utilize resources in the cluster in a more precise manner and lowers the chances of cluster issues resulting from under- or over-utilization of resources.

Sometimes, there’s a difference between the number of resources in use in the Spot console and AWS.

Ocean performs scaling according to allocation. There are times when a pod’s request fully utilizes the number of resources allocated. Ocean’s scaling takes this into consideration. This is why a discrepancy may occur. The workload can use fewer resources than the number of resources that were initially allocated or requested.

Ocean’s solution to this mismatch is a feature called [Right Sizing](/ocean/features/right-sizing). The Right Sizing tab shows the discrepancy between the number of resources allocated (Requested) and the number of resources that are currently utilized (Recommended). This can help you make changes to your current resource utilization.

![oceanrightsizing1](https://github.com/user-attachments/assets/499116be-1d13-45bf-9ca4-fc57d4b3bd3a)

In the Recommendations table, you can see the exact amount of resources to change from the pod’s request.

![oceanrightsizing2](https://github.com/user-attachments/assets/89944cd8-124f-4d2e-b509-104a92077a7c)

 </div>
 
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunnamedvng">AWS, Azure, GCP: Why is my instance in an unnamed virtual node group?</summary>

  <div style="padding-left:16px">

A node is running in an Ocean cluster and is an unnamed virtual node group.

<img width="900" src="https://github.com/user-attachments/assets/5e581d00-b1c8-4bdb-8e89-c19ef79ad1f1">

This can happen if your virtual node group was deleted in Terraform. When you delete a virtual node group in Terraform, the `spotinst_ocean_aws_launch_spec` > `delete_nodes` needs to be manually set to <i>true</i> in the [Terraform resource](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#delete_nodes). If it's not set to <i>true</i>, the node will keep running and not be in a virtual node group.

 </div>
 
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceansnapshotid">AWS, Azure, GCP: Why am I getting a <i>snapshotId cannot be modified on the root device</i> error?</summary>

  <div style="padding-left:16px">

   If you get a `snapshotId cannot be modified on the root device` error:

   1. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
   2. On the Virtual Nodes Groups tab, select the virtual node group.
   3. Click **JSON**.
   4. In the blockDeviceMappings, update the snapshotID or remove it:

      ````json
	  "blockDeviceMappings": [
      {
        "deviceName": "/dev/xvda",
        "ebs": {
          "deleteOnTerminaspoton": true,
          "encrypted": false,
          "iops": 3000,
          "throughput": 125,
          "snapshotId": "snap-1234",
          "volumeSize": 100,
          "volumeType": "GP3"
        }
      }
    ],
    ````

   5. Click **Save**.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanvngfailedlaunchspec">AWS, Azure, GCP: Can I set the <i>spotPercentage</i> on both a cluster and a virtual node group at the same time?</summary>

  <div style="padding-left:16px">

No, you will get this error:

````
Virtual Node Group configuration failed to update. Reason: Error while trying to create LaunchSpec. spotPercentage cannot be set on both ocean cluster and launch spec
````

The parameter <i>spotPercentage</i> cannot be used for both a cluster and one of its virtual node groups at the same time. This is intentional. Either remove it from the  cluster or from the virtual node group.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocduptags">AWS, Azure, GCP: Why can’t I spin new instances (duplicate tags)?</summary>

  <div style="padding-left:16px">

You can get this message when the group or cluster is scaling up instances:

````
Can't Spin Instances: Code: ValidationError, Message: can't spin spot due to duplicate tags error
````

This happens if you have duplicate tags configured:

* The cluster has more than one of the same custom tags.
* You created a custom tag key with spotinst—Spot automatically creates scaling tags that start with spotinst, resulting in multiple identical tags.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oclogsdkevents">AWS, GCP: Can I log events for the Spotinst SDK for Python?</summary>

  <div style="padding-left:16px">

You can get a detailed response for the [Python SDK](tools-and-provisioning/python-sdk). For example, you can include request IDs and times.

Add the log_level to your scripts: `client = session.client("elastigroup_aws", log_level="debug")`.

Change the session client from <i>elastigroup_aws</i> to [the client you need](https://github.com/spotinst/spotinst-sdk-python?tab=readme-ov-file#client-options).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocdraining">AWS: What is the default draining timeout?</summary>

  <div style="padding-left:16px">

Draining timeout is the time in seconds to allow the instance or node to be drained before terminating it.

The default draining for:

* Elastigroup is 120 seconds
* Ocean is 300 seconds
* ECS (Elastigroup/Ocean) is 900 seconds

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oelasticsearch">AWS: Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) add this code to the JSON:

     ````json
	 "logging": {
       "export": {
         "s3": {
           "id": "di-123"
         }
       }
     }
    ````

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocgp3">AWS: Can I set up gp3 volumes in Ocean?</summary>

  <div style="padding-left:16px">

You can change your volume type to gp3 by:

* Adding a block device mapping for a single virtual node group in the Spot console:

   1. In the Spot console, go to **Ocean** > **Cloud Cluster**s and select the cluster.
   2. On the Virtual Nodes Groups tab, select the virtual node group.
   3. Go to **Advanced** > **Block Device Mapping**.
   4. Add the block device mapping and click **Save**.
   5. [Roll the virtual node group](ocean/features/roll-gen?id=roll-per-node-or-vng) if you want the changes to apply immediately on new nodes.

* Changing the AMI to an AMI with gp3 volume type:

   1. In the Spot console, go to **Ocean** > **Cloud Cluster**s and select the cluster.
   2. On the Virtual Nodes Groups tab, select the virtual node group.
   3. Go to **Advanced** > **Image**.
   4. Select an AMI with gp3.

* Making the [default virtual node group](ocean/features/launch-specifications?id=default-virtual-node-group) gp3 by adding a block device mapping at the cluster level.

   1. Add the block device mapping:

      * In the JSON: select the cluster > **Actions** > **Edit Cluster** > **Review** > **JSON** > **Edit Mode**.
      * Using the [Ocean AWS cluster update API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate).

      Keep in mind, you cannot use both [block device mapping](ocean/tutorials/manage-virtual-node-groups?id=advanced-parameters) and [root volume size](ocean/tutorials/manage-virtual-node-groups?id=configuration-parameters) at the same time.

      Sample block device mapping:

     ````json
	{
	  "group": {
    	   "compute": {
      	    "launchSpecification": {
             "blockDeviceMappings": [
              {
               "deviceName": "/dev/sda1",
               "ebs": {
                 "deleteOnTermination": true,
                 "volumeSize": 24,
                 "volumeType": "gp2"
               }
              }
             ]
            }
           }
          }
         }
    ````

   2. Make sure to [roll the cluster](ocean/features/roll-gen) to replace the current instance gracefully with the changes.

 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1. If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2. If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3. If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4. If there is any free compute service plan commitment, then the instance is a savings plan.
5. Otherwise, the instance will run as a full-price on-demand instance.

Throughout the lifetime of an instance, it can change its “price” whenever there’s any change in the commitments utilization rate. For example, if an instance is running as a full price on-demand instance, and another instance that was utilizing a compute savings plan commitment was terminated, the first instance will start utilizing this commitment if its hourly price rate has enough free space under this commitment. It might take a couple of minutes for this change to show, but since the billing is being calculated retroactively, in practice it’s starting to utilize the commitment right away.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanlabel">AWS: Does a cluster roll replace nodes containing pods with the <i>spotinst.io/restrict-scale-down</i> label?</summary>

  <div style="padding-left:16px">

   Yes, a cluster roll will override the <i>spotinst.io/restrict-scale-down</i> label. Nodes containing pods with the <i>spotinst.io/restrict-scale-down</i> label will be replaced during a cluster roll.

Nodes can be replaced during a cluster roll even if the [instance is locked](elastigroup/features/core-features/instance-actions?id=lock-an-instance). Instance lock only protects the instance from autoscaling actions. Cluster roll is a manually triggered action that requires replacing all the cluster’s instances.

  </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanimds">AWS: How can I update the instance metadata (IMDS) in my cluster?</summary>

  <div style="padding-left:16px">

Instance metadata service (IMDS) is data about your instance that you can use to configure or manage the running instance or virtual machines. IMDS comes from the cloud providers. The metadata can include instance ID, IP address, security groups, and other configuration details.
Instance metadata service version 2 (IMDSv2) addresses security concerns and vulnerabilities from IMDSv1. IMDSv2 has more security measures to protect against potential exploitation and unauthorized access to instance metadata.

**Scenario 1: Ocean and Elastigroup**

You can define metadata for autoscaling groups in AWS that gets imported when you import the groups from AWS to Spot. You can manually configure them in Spot to use IMDSv2.

1. Follow the [Ocean AWS Cluster Create](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Elastigroup AWS Create](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) API instructions and add this configuration for the cluster:
   ````json
   "compute": {
    "launchSpecification": {
        "instanceMetadataOptions": {
            "httpTokens": "required",
            "httpPutResponseHopLimit": 12,
            "httpEndpoint": "enabled"
          }
      }
    }
   ````

2. Apply these changes to the currently running instances so the clusters are restarted and have the new definitions:
    * [Deploy an Elastigroup](https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup?id=deploy-an-elastigroup)
    * [Roll an Ocean cluster](https://docs.spot.io/ocean/features/roll-gen)

**Scenario 2: Stateful Node**

When a stateful managed node is imported from AWS, Spot creates an image from the snapshot. When an instance is recycled, the metadata configuration is deleted and changes to IMDSv1.

You can use your own AMI and configure IMDSv2 on it. All instances launched after recycling will have IMDSv2 by default.

1. Configure IMDSv2 on your AMI:
    * If you're creating a new AMI, you can add IMDSv2 support using AWS CLI:
     ````
      aws ec2 register-image Let me know if there is anything else I can help you with.
      --name my-image \
      --root-device-name /dev/xvda \
      --block-device-mappings DeviceName=/dev/xvda,Ebs={SnapshotId=snap-0123456789example} \
      --imds-support v2.0
      ````

    * If you use an existing AMI, you can add IMDSv2 using AWS CLI:
      ````
      aws ec2 modify-image-attribute \
      --image-id ami-0123456789example \
      --imds-support v2.0
      ````

2. In the Spot console, [create a stateful node](https://docs.spot.io/managed-instance/getting-started/create-a-new-managed-instance) with the custom AMI.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanebs">AWS: Why is EBS optimization disabled on instances optimized by default?</summary>

  <div style="padding-left:16px">

[Amazon EBS–optimized](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) instances use an optimized configuration stack and provide additional, dedicated bandwidth for Amazon EBS I/O.

Instances that are [EBS-optimized by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html#current) are optimized [regardless of the parameter settings](https://github.com/hashicorp/terraform-provider-aws/issues/2667#issuecomment-352622410). There is no need to enable EBS optimization and no effect if you disable EBS optimization in AWS or in Spot.

If an instance type isn’t [EBS-optimized by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html#current), you can enable optimization:

1. In the Spot console, go to the Ocean cluster or Elastigroup.
2. Click **Compute** > **launchSpecification**.
3. Set **ebsOptimized** to <i>true</i>.

   </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="octagpol">AWS: Why can’t I spin new instances (tag policies)?</summary>

  <div style="padding-left:16px">

If you’re getting this message:

````
Can't Spin Spot Instances: Message: The tag policy does not allow the specified value for the following tag key: 'XXX'.
````

It means a tag defined in your Elastigroup or cluster doesn’t comply with AWS’s tag policy.

1. In the Spot console, go to:

   * **Elastigroup** > **Groups** > click on the Elastigroup > **Log**.
   * **Ocean** > **Cloud Clusters** > click on the cluster > **Log**.

2. Identify the problematic tag keys/values.

3. Review [AWS’s tag policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) and how to [set up tag policies](https://aws.amazon.com/about-aws/whats-new/2019/11/aws-launches-tag-policies/).

4. In the Spot console, update the tag keys/values:

   * **Elastigroup** > **Groups** > click on the Elastigroup > **Actions** > **Edit Configuration** > **Compute** > **Advanced Settings**.
   * **Ocean** > **Cloud Clusters** > click on the cluster > **Actions** > **Edit Cluster** > **Compute**.

The instance will be launched when the tags in Spot clusters/groups comply with the tag policy defined in AWS.

   </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocencodedauth">AWS: Why can’t I spin new instances (encoded authorization)?</summary>

  <div style="padding-left:16px">

You can get these messages when the group or cluster is scaling up instances:

* `Can’t Spin Instances: Message: You are not authorized to perform this operation. Encoded authorization failure message`
* `Can’t Spin On-Demand Instances: Message: You are not authorized to perform this operation. Encoded authorization failure message`

These messages could be related to [service control policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) (SCP). Keep in mind, Spot doesn’t get SCP information from AWS, so doesn’t know which instance types AWS blocks because of the SCP restrictions. As a result, Spot cannot launch a new instance of a different type.

1. You need to [identify the reason for the error](https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html) in AWS.
2. In the Spot console, update the instance types:

   * [Ocean](ocean/tips-and-best-practices/manage-machine-types?id=opt-out-of-machine-types)
   * [Elastigroup](elastigroup/features/compute/preferred-instance-types)
   * [Ocean ECS cluster update API](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterUpdate)
   * [Elastigroup AWS update API](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsUpdate)

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocvpnsec">AWS: Why am I getting an <i>exceeded the number of VPC security allowed per instance</i> message?</summary>

  <div style="padding-left:16px">

You may get this message when creating or importing an Elastigroup or cluster if you reach your AWS service quota limit for security groups per network interface:

````
POST https://api.spotinst.io/aws/ec2/group?accountId=act-xxxxx: 400 (request: "xxxxx") SecurityGroupLimitExceeded: You have exceeded the number of VPC security groups allowed per instance.
````

You can [request a quota increase from AWS](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html).

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocscale">AWS: Why am I getting a <i>Scale down as part of instance recovery</i> or <i>Scale up as part of instance recovery</i> message?</summary>

  <div style="padding-left:16px">

You can get this log message if:

* The instance is scaled down because of AWS’s capacity.
* An instance replacement was initiated because of AWS’s capacity. A new instance is launched to replace an instance that was taken back because of AWS’s capacity.
* An instance is manually terminated in AWS.

This means that there are no [spot markets](elastigroup/features/core-features/market-scoring-managing-interruptions?id=fix-strategy) available to launch spot instances. You can add more spot markets to improve availability:

* For Elastigroup, [instance types](elastigroup/features/compute/preferred-instance-types?id=preferred-instance-types) and [availability zones](elastigroup/features/compute/preferred-availability-zones).
* For Ocean, [instance types](ocean/features/vngs/attributes-and-actions-per-vng?id=preferred-instance-types-per-virtual-node-group-aws) and [availability zones](ocean/features/avail-zones-scores?id=configure-your-availability-zones-recommendations).

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocinvalidkeypair">AWS: Why am I getting a <i>Can't Spin On-Demand Instances: Code: InvalidKeyPair.NotFound</i> message?</summary>

  <div style="padding-left:16px">

You can get this message if the key pair is missing or not valid:

````
Can't Spin On-Demand Instances: Code: InvalidKeyPair.NotFound, Message: The key pair 'xxxxx' does not exist
````

Update the key pair:

1. In the Spot console, go to **Ocean** > **Cloud Clusters**, and click on the name of a cluster.
2. Click **Actions** > **Edit Cluster** > **Compute**.
3. In **Instance Specifications**, select a **Key Pair**.

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocssh">Azure: Can I use SSH to connect to an Azure VM?</summary>

  <div style="padding-left:16px">

Yes, you can connect using SSH to a VM running:

* [Linux](https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Linux)
* [Windows](https://learn.microsoft.com/en-us/azure/virtual-machines/windows/connect-ssh?tabs=azurecli)

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="secretnotvalid">Azure: Why can my cluster not perform scaling actions (invalid client secret)?</summary>

  <div style="padding-left:16px">

You got this error in the logs, and it’s not possible for the cluster to perform any scaling actions:

````
Invalid client secret provided. Ensure the secret being sent in the request is the client secret value, not the client secret ID, for a secret added to app
````

In Azure Kubernetes Service (AKS), there are two kinds of secrets: <i>client secret ID</i> and <i>client secret value</i>.

Generate a new client secret <i>value</i> and [update it in the API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="occooldown">ECS, EKS, GKE: How does cooldown work in Ocean?</summary>

  <div style="padding-left:16px">

For scale-up events, Ocean scales up as quickly as possible.

For scale-down events, cooldown is the number of seconds that Ocean waits after the end of a scaling action before starting another scaling action. The default is 300 seconds (5 minutes).

Cooldown is set at the cluster level and is applied across all virtual node groups in the cluster. So if a node of one virtual node group is scaled down, then Ocean waits for the cooldown time to pass before scaling down another node in a virtual node group.

You can set the cooldown period:

* In the Spot console, go to **Ocean** > **Cloud Clusters** > select the cluster > **Actions** > **Edit Cluster** > **Review** > **JSON** > **Edit Mode**.
* Using the APIs:

   * [Ocean AWS cluster update](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate)
   * [Ocean ECS cluster update](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterUpdate)
   * [Ocean GKE cluster update](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterUpdate)

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocnewnodeaz">ECS, EKS: Are new nodes launched in the same availability zone as the old nodes?</summary>

  <div style="padding-left:16px">

Cluster roll randomly chooses the nodes and divides the instances between batches according to the size of their resources. It doesn’t matter which availability zones the nodes are from.

   </div>

 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceaneventbridge">ECS, EKS: How do I create spot interruption notifications?</summary>

  <div style="padding-left:16px">

You can use AWS EventBridge to send spot interruption warnings to the Spot platform in real time. These warnings are pushed by AWS at an account level and are region-specific. You'll need to set up notifications for each account and region.

1. In your AWS console for the EventBridge page, make sure the EventBridge status is <i>Inactive</i>.
2. Reestablish the connection:
   <ol style="list-style-type: lower-alpha;">
     <li>Open your AWS console and select the region.</li>
     <li>Go to the AWS CloudFormation service.</li>
     <li>Create a stack with new resources for a specific region, or create a StackSet for multiple regions.</li>
     <li>Select create from an S3 URL and use this template URL: https://spotinst-public.s3.amazonaws.com/assets/cloudformation/templates/spot-interruption-notification-event-bridge-template.json.</li>
     <li>Click <b>Next</b>.</li>
     <li>Fill in the stack name, spot account ID, and Spot token, then click <b>Next</b>.</li>
     <li>Repeat for each active region.</li>
   </ol>

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="spinspotinstances">ECS, EKS: Why can't I spin new spot instances (InsufficientInstanceCapacity)?</summary>

  <div style="padding-left:16px">

This message is shown in the console logs if Ocean attempts to scale up a certain spot instance type in a particular availability zone. This happens because of a lack of capacity on the AWS side.

````
Can't Spin Spot Instances: Code: InsufficientInstanceCapacity, Message: We currently do not have sufficient m5.2xlarge capacity in the Availability Zone you requested (us-east-1a). Our system will be working on provisioning additional capacity. You can currently get m5.2xlarge capacity by not specifying an Availability Zone in your request or choosing us-east-1b, us-east-1c, us-east-1d, us-east-1f.
````

Ocean is aware of a pending pod and is spinning up an instance. Based on your current instance market, Ocean chooses the instance type in a particular availability zone and attempts to scale up. If it fails due to a lack of capacity, the error message is shown in the console logs.

You can solve this by:
* Having many instance types so Ocean can choose the best available markets.
* Having multiple availability zones to provide more availability.
* For workloads that are not resilient to disruptions, configure the [on demand label](https://docs.spot.io/ocean/features/labels-and-taints?id=spotinstionode-lifecycle) `spotinst.io/node-lifecycle`.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancantspin">ECS, EKS: Why can't I spin new instances (InvalidSnapshot.NotFound)?</summary>

  <div style="padding-left:16px">

You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

````
ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.
````

If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 <img width="460" alt="cant-spin-instances-invalidsnapshot1" src="https://github.com/user-attachments/assets/6b828a90-314f-44e7-8508-077e5e392cb8">


If you have another snapshot, then you can use that snapshot ID for the block device mapping. If not, you can remove the snapshot ID, and then the instance is launched using the AMI information.

* **Elastigroup**: on the Elastigroup you want to change, [open the creation wizard](https://docs.spot.io/elastigroup/features/compute/block-device-mapping) and update the snapshot ID.

  <img width="467" alt="cant-spin-instances-invalidsnapshot2" src="https://github.com/user-attachments/assets/0d90513e-a6f3-478c-9b7f-a8bc2d07a798">


* **Ocean**: on the virtual node group you want to change, update the snapshot ID.

  <img width="588" alt="cant-spin-instances-invalidsnapshot3" src="https://github.com/user-attachments/assets/2cca9a9d-6123-4ddb-99b6-afe565304964">


 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxspot">ECS, EKS: Why can't I spin new spot instances (MaxSpotInstanceCountExceeded)?</summary>

  <div style="padding-left:16px">

   You can get this message if AWS's spot service limit is reached:
   
   ````
   Can't Spin Spot Instances:Code: MaxSpotInstanceCountExceeded, Message: Max spot instance count exceeded
````

You may also get an email from Spot: <i>Spot Proactive Monitoring | Max Spot Instance Count Exceeded</i>. This email includes instructions for opening a support request with AWS, such as the instance type and region that triggered the error.

You can read the AWS documentation on [spot instance quotas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html).

   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocinvalidblockdevicemapping">ECS, EKS: Why am I getting an InvalidBlockDeviceMapping error?</summary>

<div style="padding-left:16px">

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

````
Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping
````

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from `xvda` to `/dev/xvda` on the group's side. In the stateful node, go to **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**. Change the device name from `xvda` to `/dev/xvda` and click **Update**.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="importfargateerror">ECS: Why am I getting an import Fargate services error?</summary>

<div style="padding-left:16px">

When you import Fargate services with more than 5 security groups, you get an error: 

````
Failed to import Fargate services into Ocean. Please verify Spot IAM policy has the right permissions and try again.
````

In Spot, you see this warning:

````
Fargate import failed for xxx-xxxxxx, due to Failed to import services, too many security groups. Import less services to this group (Group ID: xxxx-xxxxxx).
````

You can have up to 5 security groups in each service according to this [article](https://spot.io/blog/import-ecs-fargate-into-spot-ocean/#:~:text=more%20than%20five-,security,-groups%20as%20only). This means that if more than 5 security groups are defined in one of the services, the import doesn’t succeed.

Check the Ocean log to see if you see the error `too many security groups`, as it will get the same error.

Reimport Fargate services with less than 5 security groups and choose only one service at a time to import it successfully.

 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocspecificlaunchspec">ECS: Can I launch an instance with a specific launch specification or virtual node group?</summary>

  <div style="padding-left:16px">

Yes, you can launch an instance with a specific launch specification or virtual node group:

1. In the Spot console, go to **Ocean** > **Cloud Clusters**.
2. Click on the name of the cluster.
3. Go to **Virtual Node Groups** > **Create VNG**.
4. If you want to create a launch specification with custom attributes, in **Node Selection**, add attribute keys and values. For example, **key**: <i>stack</i>, **value**: <i>dev</i>.

   <img width=300 src="https://github.com/user-attachments/assets/e8399504-8a32-424f-a9f5-9606a036f945">

5. Add the custom attribute to the user data startup script: `echo ECS_INSTANCE_ATTRIBUTES='{"stack":"dev"}' >> /etc/ecs/ecs.config`.
6. Add the constraints to the [task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) or service: `memberOf(attribute:stack==dev)`.

When a new instance is launched, it will be from the dedicated virtual node group.

   
 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanecsseparately">ECS: Why are ECS instances launched separately for each task?</summary>

  <div style="padding-left:16px">

   An ECS cluster launches an instance just for a single task, even when there is capacity on the nodes currently running in the cluster. This can happen if a task has placement constraints called <i>distinctInstance</i>, which causes each task in the group to run on its own instance.
   
   You can [define which container instances Amazon ECS uses for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html). The <i>placementConstraints</i> may be defined in one of these actions [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html), [UpdateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html), and/or [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html).
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanoutofstrategy">ECS: Why is the out of strategy replacement getting canceled for standalone tasks?</summary>

  <div style="padding-left:16px">

   If your virtual node group has more on-demand instances than defined, your extra instances are reverted to spot instances when they become available. This is called the fix strategy.

If you see this message in the log:

````
DEBUG, Replacement of type Out of strategy for instance i-xxx has been canceled. Reason for cancelation: Instance contains stand-alone tasks, and the group's configuration doesn't allow termination of stand-alone tasks.
````

It means that your strategy cannot be fixed and your spot instances cannot be reverted to spot instances. This is because you have standalone tasks in the instances, and the group's configuration can't stop standalone tasks. The autoscaler cannot scale down these instances.

Update the cluster [in the API](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterUpdate) or in the cluster's JSON file to include `"shouldScaleDownNonServiceTasks": true`.

The standalone task and instance are terminated and are not redeployed because they weren't created as part of a service.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunregcontainer">ECS: Why are my container instances unregistered?</summary>

  <div style="padding-left:16px">

Your container instances may be unregistered if the newly launched Ocean ECS container instance:

* Has unregistered contain instance events
* Doesn’t have a Container Instance ID
* Is eventually scaled down
* CPU and memory resource allocations are 0%
* Status: Can’t determine

<img alt="unregistered-container-instance1" src="https://github.com/spotinst/help/assets/167069628/acd9d60a-4952-4955-b119-593ccfb9c067">

</br>

<img alt="unregistered-container-instance2" src="https://github.com/spotinst/help/assets/167069628/d7713e91-2850-48ee-9d1a-aa439dcf91d1">

Your container instance must be registered with an ECS cluster. If the container instance isn't registered, its status is <i>unhealthy</i>. Registering a container instance with an ECS cluster means you are telling the ECS service that a specific EC2 instance is available to run containers. It also sends information to ECS about the EC2 instance, such as its IP address, the docker daemon endpoint.

If your container is unregistered, you should make sure:

* **User Data**
  
  1. Go to the cluster in the Spot console and click **Actions** > **Edit Configuration** > **Compute**.
  2. Add this script to **User Data**, using your cluster name.

       ````
       #!/bin/bash
       echo ECS_CLUSTER="xxxxx" >> /etc/ecs/ecs.config
       ````
  
* **AMI**

  ECS is optimized and Agent (similar to the controller in Kubernetes) is configured in the AMI.
  
* **Security group and specific ports**
  * **Port 22 (SSH)** is required if you want to connect to your container instances using Secure Shell (SSH) for troubleshooting or maintenance.
    It is not directly related to ECS cluster registration, but it's commonly included for administrative access to the instances.
  * **Port 2375 (TCP)** is used for the ECS container agent to communicate with the ECS control plane. It allows the agent to register the container instance with the cluster, send heartbeats, and receive instructions for task placement and management.
  * **Port 2376 (TCP)** is used for secure communication between the ECS container agent and the ECS control plane. It enables encrypted communication and is recommended for improved security when managing your ECS cluster.

* **IAM role**

  Configure an instance profile with relevant permissions.

  <img alt="unregistered-container-instance3" src="https://github.com/spotinst/help/assets/167069628/b51d91f7-c067-431f-94b5-64926a6e469c">

* **IP**

  Make sure you configured Public IP according to subnet, and have NAT gateway.
  If you change the configuration in the virtual node group, such as tags/user data, it immediately overrides the cluster's configuration.

  <img alt="unregistered-container-instance4" src="https://github.com/spotinst/help/assets/167069628/98a19d66-d218-41da-bb88-5a99220dcac3">


* [AWS troubleshooting](https://aws.amazon.com/premiumsupport/knowledge-center/ecs-instance-unable-join-cluster/)


 </div>
 
 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceannonservicetask">ECS: What happens if I run a non-service task in a cluster without enough resources?</summary>

  <div style="padding-left:16px">

   A non-service task is a standalone task that isn't part of a service. It's typically used for batch processing or one-time jobs rather than continuous, long-running services. When an independent task runs in a cluster, and there aren't enough resources available, the task may fail to launch due to CPU or memory errors. This means that no service is continuously attempting to launch tasks to meet the required number of tasks. Instead, the task will be launched later when resources become available.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocodlifecycle">ECS: Can I enable on-demand lifecycle for Ocean ECS?</summary>

  <div style="padding-left:16px">

You can set on-demand instances using [placement constraints](ocean/features/scaling-ecs?id=placement-constraints).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="hostportunderutilized">ECS: Can hostPort cause underutilized nodes?</summary>

<div style="padding-left:16px">

If a node only has one task running, then it causes the node to be underutilized. Underutilized nodes should be bin-packed together if there are no constraints in the task/service definition.

Example service:

````json
"placementConstraints": [],
   "placementStrategy": [],
````

The task definition doesn't have constraints to spread tasks across nodes.

````json
"placementConstraints": [
  {
  "type": "memberOf",
  "expression": "attribute:nd.type == default"
  }
  ],
````

Check the **portMappings: hostPort** value in the task/service defintion.

Port mappings allow containers to access ports on the host container instances to send or receive traffic. This configuration can be found in the task definition. The hostPort value in port mapping is normally left blank or set to 0.

Example:
````json
      "portMappings": [
            {
               "protocol": "tcp",
               "hostPort": 0,
               "containerPort": 443
````

However, if the hostPort value equals the containerPort value, then each task needs its own container. Any pending tasks trigger a scale-up, and the number of launched instances is equal to the number of pending tasks. This leads to underutilized instances and higher costs.

You can have multiple containers defined in a single task definition. Check all the <i>portMappings</i> configurations for each container in the [task definition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PortMapping.html).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocagentlogs">ECS: How can I check the ECS agent logs? Can I push the agent logs to CloudWatch?</summary>

  <div style="padding-left:16px">

You can check the logs for ECS instances, for example, to see why an instance was unhealthy.

If the instance hasn’t been terminated yet, you can [connect to the instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/logs.html) to view the agent logs.

You can also [push the ECS agent logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_cloudwatch_logs.html). This lets you check the agent logs even after the instance is replaced.

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceandisconnectcluster">EKS: How can I disconnect a cluster from Ocean?</summary>

  <div style="padding-left:16px">

   You can safely disconnect Ocean from an existing EKS Cluster:

1. Increase the number of instances in the ASG attached to the EKS cluster. This way, the pods that run on the nodes managed by Spot will be able to reschedule on the new instances and avoid downtime.
2. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
3. Click **Actions** > **Edit Cluster**.
4. On the Review tab, click **JSON** > **Edit Mode**.
5. Change **capacity** > **Minimum**, **Maximum**, and **Target** to <i>0</i>.

   <img width="144" alt="oceandisconnectcluster" src="https://github.com/user-attachments/assets/ec722def-980f-4754-ab0d-b2751bf67a81">

   The instances managed by Ocean will be detached and the pods will be rescheduled on the new instances launched by AWS ASG.
6. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
7. Click **Actions** > **Delete**.
 
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocimportcluster">EKS: Why can’t I select my EKS cluster in the Ocean import cluster wizard?</summary>

  <div style="padding-left:16px">

Your EKS cluster may not be included in the list of clusters when you’re trying to import to Ocean. This can happen if there aren’t any node groups in the cluster.

Add a [node group to your EKS cluster](https://docs.aws.amazon.com/eks/latest/userguide/create-managed-node-group.html) then [import the cluster](ocean/getting-started/eks/join-an-existing-cluster) again.

 </div>

 </details>


   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanamiid">EKS: How can I get the AMI ID for EKS-optimized Amazon Linux?</summary>

  <div style="padding-left:16px">

You can get the AMI ID using the [AWS Systems Manager Parameter Store API](https://docs.aws.amazon.com/eks/latest/userguide/retrieve-ami-id.html).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceandaemonsetpods">EKS: Why are DaemonSet pods not scheduled on all nodes in the cluster?</summary>

  <div style="padding-left:16px">

Your DaemonSet pods are only scheduled on one specific virtual node group, not on all the nodes in a virtual node group in cluster.

This can happen if you use taints on your pods in virtual node groups. You can either use taints on all your pods, or not use taints. You can't mix pods with taints and without taints.

Update your tolerances in the DaemonSet YAML so you can schedule DaemonSet pods on the nodes in virtual node groups with taints.

For example, you can update your [DaemonSet pod YAML](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) to include:

````json
   spec:
      tolerations:
      - key: dedicated
        operator: Equal
        value: statefulset
        effect: NoSchedule
````


   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocmaxcap">EKS: Can I set a maximum capacity per virtual node group using eksctl?</summary>

  <div style="padding-left:16px">

Yes, you can use `autoScaler: resourceLimits: maxInstanceCount: 10` to set capacity using [eksctl](ocean/tools-and-integrations/eksctl).

For example:

````json
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: example
  region: us-west-2nodeGroups:
name: ng1
  spotOcean:
    # ...
    autoScaler:
      resourceLimits:
        maxInstanceCount: 10
    # ...
````

   </div>
   
   </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="k8sunhealthy">EKS: Why are my EKS nodes <i>unhealthy</i>?</summary>
   
<div style="padding-left:16px">

Kubernetes nodes in the cluster have <i>Unhealthy</i> status—the node has a <i>Node Name</i> but the Kubernetes status is <i>Unhealthy</i>.

You can debug unhealthy Kubernetes nodes:
* Check the nodes' status by running this command in CLI: `kubectl get nodes`
   Look for nodes in a <i>NotReady</i> or <i>Unknown</i> state. This indicates that the nodes are unhealthy or experiencing issues.
* Get detailed information about the problematic nodes by running the `kubectl describe` command: `kubectl describe node <node-name>`.
   Look for any error messages or warnings that can help identify the problem. Pay attention to resource allocation issues, network connectivity problems, or other relevant information.
* Verify the health of cluster components such as the kubelet, kube-proxy, and container runtime (for example, Docker, containerd). Check your local logs and the status of these components to identify any errors or issues.
* Examine the resource utilization of your nodes, including CPU, memory, and disk usage. High resource utilization can lead to node instability or unresponsiveness. Use tools like Prometheus or Grafana to monitor resource metrics.
* Ensure that network connectivity is properly configured and functioning between the Kubernetes control plane and the nodes. Verify that nodes can reach each other and communicate with external services.
* Use the `kubectl get events` command to check for cluster-level events that might provide insights into the node health issues. Events often contain helpful information about the state of your cluster and its components.
* Examine the logs of individual pods running on the problematic nodes. Logs can provide clues about any application-specific issues or errors that might be impacting node health. Use the `kubectl logs` command to retrieve pod logs.
* Verify that the node configurations (for example, kubelet configuration, network settings) are correct and aligned with the cluster requirements.
* Ensure that the container runtime (such as Docker, containerd) is properly installed and functioning on the nodes. Check the runtime logs for any errors or warnings.
* If you think that a specific component is causing the node health issues, consider updating or reinstalling that component to resolve any known bugs or conflicts.

  </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="k8smigration">EKS: How do unhealthy replacements work during workload migration?</summary>
   
<div style="padding-left:16px">

When you have a [workload migration](ocean/tutorials/migrate-workload) in progress, there may be unhealthy instances. They are not replaced until after the migration finishes. This happens because Ocean’s scaler does not handle replacements in the cluster during workload migration.

If there is no active migration, after the configured unhealthy duration ends (the default is 120 seconds), the unhealthy instances are terminated and immediately replaced with new ones.

 </div>

 </details>
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanhpa">EKS: Can I check Ocean EKS clusters' horizontal pod autoscaling (HPA) policy?</summary>

  <div style="padding-left:16px">

   Ocean doesn't actually have a horizontal pod autoscaling (HPA) policy. The HPA is essentially operating on the Kubernetes side so Ocean itself doesn't have an HPA.

The cluster autoscaler only takes care of provisioning the required number of nodes.

Essentially, if the load increases on your cluster, then Kubernetes will create more replicas, and Ocean will launch nodes for the new pods. Kubernetes HPA will create pods and Ocean will launch new nodes for pods to be scheduled.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="awsnodeterminationhandler">EKS: Can I deploy AWS node termination handler on Spot nodes?</summary>
   
<div style="padding-left:16px">

<a href="https://ec2spotworkshops.com/using_ec2_spot_instances_with_eks/070_selfmanagednodegroupswithspot/deployhandler.html">AWS node termination handler</a> is a DaemonSet pod that is deployed on each spot instance. It detects the instance termination notification signal so that there will be a graceful termination of any pod running on that node, drain from load balancers, and redeploy applications elsewhere in the cluster.

AWS node termination handler makes sure that the Kubernetes control plane responds as it should to events that can cause EC2 instances to become unavailable. Some reasons EC2 instances may become unavailable include:
* EC2 maintenance events
* EC2 spot interruptions
* ASG scale-in
* ASG AZ rebalance
* EC2 instance termination using the API or Console

If not handled, the application code may not stop gracefully, take longer to recover full availability, or accidentally schedule work to nodes going down.

The workflow of the node termination handler DaemonSet is:
1. Identify that a spot instance is being reclaimed.
2. Use the 2-minute notification window to prepare the node for graceful termination.
3. Taint the node and cordon it off to prevent new pods from being placed.
4. Drain connections on the running pods.
5. Replace the pods on the remaining nodes to maintain the desired capacity.

Ocean does not conflict with aws-node-termination-handler. It is possible to install it, but using aws-node-termination-handler is not required. Ocean continuously analyzes how your containers use infrastructure, automatically scaling compute resources to maximize utilization and availability.
Ocean ensures that the cluster resources are utilized and scales down underutilized nodes to optimize maximal cost.
 
 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceannull">EKS: Why are custom parameters in virtual node group <i>null</i>?</summary>
   
<div style="padding-left:16px">

The JSON for a virtual node group has all the parameters from the Ocean template/default virtual node group. Any items you haven’t defined yet have a value of <i>null</i>. This way, you can edit the existing parameters.
    
 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="pythonsdkdebug">EKS: Can I debug the Python SDK?</summary>
   
<div style="padding-left:16px">

You can update this line in the SDK to debug:

1. Change `client = session.client("ocean_aws")` to `client = session.client("ocean_aws", log_level="debug")`.
2. [Create or update](https://github.com/spotinst/spotinst-sdk-python/blob/v2/docs/clients/ocean/ocean_aws_client.md#create_ocean_cluster) the cluster again.

 </div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceaneksclusters">EKS: Why can’t I see EKS clusters in Ocean in the Spot console when I’m importing to Ocean?</summary>

  <div style="padding-left:16px">

When [importing EKS clusters to Ocean](ocean/getting-started/eks/join-an-existing-cluster) in the Spot console, some of your clusters may not show in the list you can import from. Make sure:

* The EKS cluster is in the region you’re trying to import from.
* You have the [correct permissions](ocean/getting-started/eks/join-an-existing-cluster?id=add-required-permissions) and the most [current Spot policy](administration/api/spot-policy-in-aws).
* The Kubernetes cluster has an EKS version that is [supported by Amazon](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html). Spot supports an EKS version two months after the Amazon [EKS release date](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html#kubernetes-release-calendar). A version is considered deprecated for Spot when Amazon [ends standard support](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html#kubernetes-release-calendar). A version is considered retired for Spot when Amazon [ends extended support](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html#kubernetes-release-calendar).
* You have at least one node group in your EKS cluster. There don’t need to be any nodes running in the node group, just configured in the AWS console.
* If you’re using [ASG](ocean/tutorials/manage-virtual-node-groups?id=create-a-vng-from-an-asg) in your EKS cluster, you need to import the EKS cluster using the legacy design:

   <ol style="list-style-type: lower-alpha;">
   <li>In the Spot console, go to <b>Ocean</b> > <b>Cloud Clusters</b> > <b>Create Cluster</b>.</li>
   <li>Select <b>Elastic Kubernetes Service (EKS)</b> > <b>Continue</b>.</li>
   <li>Select <b>Revert to legacy design</b>.</li>
   <li>Import from <i>Auto Scaling Group</i>.</li>
   </ol>

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanshutdownhours">EKS: Why doesn’t Ocean launch a node automatically after shutdown hours end?</summary>

  <div style="padding-left:16px">

You may run into a case where Ocean doesn’t automatically launch a node after the [shutdown hours](ocean/features/running-hours) end. You then need to manually launch a node and reinstall the controller pod after the shutdown hours.

This can happen because Ocean automatically scales down the entire cluster to 0 when the period of running time ends. During the off time, all nodes are down, and the Ocean controller is down and does not report information to the autoscaler.

When the off time ends, Ocean starts a single node from a virtual node group without taints. If all virtual node groups have taints, Ocean starts a node from the default virtual node group unless useAsTemplateOnly is defined, in which case no node is started.

You need to make sure the controller is running, possibly on a node that Ocean does not manage. Once the node launches and is registered to the Kubernetes cluster, the Ocean controller is scheduled.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancontrollerclusterid">EKS: Why am I getting a <i>controllerClusterID already being used by another Ocean cluster</i> message?</summary>

  <div style="padding-left:16px">

A cluster identifier (controllerClusterID) can only be used on one Ocean cluster at a time. This can happen if you’re trying to set up [Ocean Insights](ocean/getting-started/insights) on an existing Ocean cluster, or if the cluster already has [Ocean controller](ocean/tutorials/ocean-controller-v2/) installed on it.

Ocean Insights is intended for <i>unmanaged</i> clusters.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxpods">EKS: Why am I getting a <i>Maximum Pods configuration reached</i> message?</summary>

  <div style="padding-left:16px">

If you get a `Maximum Pods configuration reached` message for a node in the console:

* It usually means that you reached the EKS [maximum pod limit](https://github.com/awslabs/amazon-eks-ami/blob/main/templates/shared/runtime/eni-max-pods.txt). For example, the EKS maximum pod limit for <b>r4.large</b> is <i>29</i>.

   You can [increase the EKS maximum pods](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-increases-pods-per-node-limits/) in AWS. You can see more information about the number of pods per EKS instance on [Stack Overflow](https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-eks#:~:text=For%20t3.,22%20pods%20in%20your%20cluster).

* If the node has fewer pods than the EKS maximum pod limit, then check if the <b>max-pods</b> limit is set at the user data level in the Ocean configuration.

   Increase this limit for the user data in Ocean:

   <ol style="list-style-type: lower-alpha;">
   <li>Go to the cluster in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b> > <b>Compute</b>.</li>
   <li><p>In <b>User Data (Startup Script)</b>, increase the max-pods limit.</p>

   <img width=900 src="https://github.com/user-attachments/assets/5c209a62-5fef-4f01-ae3e-18c5ed09edbd">

   </li>
   <li><a href="ocean/features/roll-gen">Roll the cluster</a>.</li>
   </ol>

   If you continue to get this error, [roll the cluster](ocean/features/roll-gen) again and disable [Respect Pod Disruption Budget (PDB)](ocean/features/roll-gen?id=respect-pod-disruption-budget). You can also manually terminate the node.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceaniaminstance">EKS: Why am I getting an <i>Invalid IAMInstanceProfile</i> error?</summary>

  <div style="padding-left:16px">

You may get an <i>Invalid IAMInstanceProfile</i> error when you're [creating an Ocean cluster using Terraform](https://registry.terraform.io/modules/spotinst/ocean-eks/spotinst/latest/examples/simple-cluster). This can happen if you use <i>IAMInstanceProfileName</i> instead of <i>IAMInstanceProfileARN</i>.

If you want to use <i>IAMInstanceProfileName</i> in Terraform, set <b>use_as_template_only</b> to <i>true</i>.

Once the cluster is configured to use the default virtual node group as a template, <i>IAMInstanceProfileName</i> can be used instead of <i>Invalid IAMInstanceProfile</i>.
      
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocunregnode">EKS: Why am I getting unregistered nodes and syntax error or unexpected EOF messages?</summary>

  <div style="padding-left:16px">

If you have unregistered nodes and are getting log messages such as:

````
/var/lib/cloud/instance/scripts/part-001: line 5: unexpected EOF while looking for matching `"'
   
/var/lib/cloud/instance/scripts/part-001: line 9: syntax error: unexpected end of file

Feb 01 14:03:05 cloud-init[2517]: util.py[WARNING]: Running module scripts-user (<module ‘cloudinit.config.cc_scripts_user' from '/usr/lib/python2.7/site-packages/cloudinit/config/cc_scripts_user.pyc'>) failed
````

Make sure:
1. The parameters are configured correctly (such as labels, AMI, IP, user data).
2. The user data script is executable and working properly.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocgkezone">GKE: How do zones and regions work with clusters?</summary>

  <div style="padding-left:16px">

In GKE, regional clusters replicate the cluster’s control plane and nodes in the region's zones. Using multiple regions and zones helps protect against unexpected failures. Workloads can be redirected to nodes in different zones.

In Spot, when you import a regional cluster, the cluster is <b>not</b> integrated with its existing node pools. The instances are registered to the cluster. Spot does <b>not</b> replicate the nodes in all the zones. It acts as a zonal cluster.

Keep in mind:

* The control planes are managed in GKE and are replicated when a regional cluster is selected. This gives you high reliability in the control planes.
* Ocean autoscaler chooses the best markets available for the pending pods. Ocean quickly launches instances in a different zone if there's a zonal outage.

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancudvng">GKE: Can I set up committed use discounts on virtual node groups?</summary>

  <div style="padding-left:16px">

You can set up committed use discounts (CUDs) for clusters in Ocean and groups in Elastigroup. It cannot be used for virtual node groups.

Set up committed use discounts for:

* [Ocean](ocean/features/committed-use-discount)
* [Elastigroup](elastigroup/features/gcp/commit-use-discount)

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocshutdownhrs">GKE: Are shutdown hours supported in shielded node clusters?</summary>

  <div style="padding-left:16px">

[Shutdown hours](ocean/features/running-hours?id=scaling-behavior-ocean-for-kubernetes) are not supported for GKE clusters with shielded nodes. If you use shutdown hours with shielded nodes, make sure that the Ocean controller is available at the end of the off time by checking that it runs on a node that Ocean does not manage. This is because the controller is part of the node registration process and requires an available node to run on.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocunregistered">GKE: Why are my nodes unregistered?</summary>

  <div style="padding-left:16px">

Some of the common reasons your GKE nodes can be unregistered are if:
* You have shielded nodes. [Shutdown hours](ocean/features/running-hours?id=scaling-behavior-ocean-for-kubernetes) are not supported for GKE clusters with shielded nodes. If you use shutdown hours with shielded nodes, make sure that the Ocean controller is available at the end of the off time by checking that it runs on a node that Ocean does not manage. This is because the controller is part of the node registration process and requires an available node to run on.
* The cluster is in a private network. You need to configure NAT gateway on the cluster in GKE so it’ll have access to the internet.

  Make sure the cluster has <i>external-nat</i> and <i>ONE_TO_ONE_NAT</i> set:

   * In the Spot console, go to **Ocean** > **Cloud Clusters** > select the cluster > **Action** > **Edit Cluster** > **Review** > **JSON**
   * In the [API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterGet)

   For example:
````json
    "compute": {
       "networkInterfaces": [
         {
          "network": "networkname",
          "accessConfigs": [
             {
              "name": "external-nat",
              "type": "ONE_TO_ONE_NAT"
            }
           ],
          "aliasIpRanges": [
            {
             "ipCidrRange": "/24",
             "subnetworkRangeName": "subnetworkRangeName"
            }
           ],
          "projectId": "projectId"
         }
        ],
````

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocmigrateworkloads">GKE: Can I migrate workloads?</summary>

  <div style="padding-left:16px">

You can migrate workloads for GKE:

1. In the Spot console, [create a virtual node group](ocean/tutorials/manage-virtual-node-groups) with [labels that match your workload](ocean/tutorials/manage-virtual-node-groups?id=node-selection-parameters).
2. In GKE, [disable the autoscaler](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler#disable_autoscaling) so GKE won’t launch nodes for the pending pod which should be scheduled in Ocean’s managed nodes.
3. In GKE, [resize the clusters](https://cloud.google.com/sdk/gcloud/reference/container/clusters/resize) to <i>0</i> to drain the nodes: `gcloud container clusters resize <cluster_name> --num-nodes=0 --region=<region/zone> --node-pool <node_pool_name>`.

Ocean then detects the pending pods and launches virtual node groups for the nodes.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanbootdisk">GKE: Why can’t I spin new instances (boot disk architecture)?</summary>

  <div style="padding-left:16px">

If Ocean isn’t launching a VM, you might get this log message:

````
Can’t Spin Instance: Name: sin-abcd. Code: Error, Message: Invalid resource usage: 'Requested boot disk architecture (X86_64) is not compatible with machine type architecture (ARM64).'
````

This can happen because Ocean doesn’t validate VM architecture for GCP. You can [troubleshoot this error](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-arm-vms#errors_when_updating_vms) in GCP.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanscaleup">GKE: Why am I getting a zone_resource_pool_exhausted (scale up) error?</summary>

  <div style="padding-left:16px">

You may get this log message when a VM is trying to scale up or launch VMs:

````
Can't Spin Instance: Name: abcde. Code: ZONE_RESOURCE_POOL_EXHAUSTED_WITH_DETAILS,
Message: The zone 123 does not have enough resources available to fulfill the request, '(resource type:compute)'.
````

This can happen if the specific VM family and size aren’t available for a certain zone at the moment. Elastigroup or Ocean will try to automatically spin up a different VM in a different zone to compensate.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocfailedupdate">GKE: Why am I getting a <i>Failed to update the group</i> (launchSpec) error?</summary>

  <div style="padding-left:16px">

If you update the Kubernetes version and pods launch with the old version, you may get these errors:

* `ERROR, Failed to update the launchSpec ols-f775236b with the latest changes in GKE cluster tagging-stg-eu1-1. Reason: Node pool tagging-stg-eu1-1-pool does not exist.`

* `ERROR, Failed to update the group with the latest changes in GKE cluster tagging-stg-eu1-1. Reason: Node pool tagging-stg-eu1-1-pool does not exist.`

This can happen if the original node pool is deleted, which prevents Ocean from fetching/updating the new GKE configuration. In the future, [preserve the original node pool](ocean/getting-started/gke?id=preserve-original-node-pool) instead of deleting it.

To resolve the errors, you can either:
* [Create a new node pool](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools) with the original pool name. It doesn’t need to run any nodes.
* Delete the cluster in the Spot console (Actions > Delete Cluster) or using [the Spot API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterDelete), then import the cluster in the [Spot console](ocean/getting-started/gke) or using the [Spot API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/reImportGke).

Every 30 minutes, [an automatic process](ocean/features/auto-update-process-gke) runs to update the GKE configuration in the control plane manager. You can [trigger the process manually](https://docs.spot.io/api/#tag/Ocean-GKE/operation/reImportGke).

   </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocinsttax">GKE: Why can't I spin new spot instances (InstanceTaxonomies)?</summary>

  <div style="padding-left:16px">

You can get this message if the instance type is not compatible with the boot disk type:

````
ERROR, Can't Spin Instance: Name: sin-xxxx. Code: Error, Message: [pd-standard] features and [instance_type: VIRTUAL_MACHINE family: COMPUTE_OPTIMIZED generation: GEN_3 cpu_vendor: INTEL architecture: X86_64 ] InstanceTaxonomies are not compatible for creating instance.
````

[Compare the machine family](https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison) and PD-standard disk type to decide which is appropriate for your workload.

Contact support to decide on the selected instance type for launching and to remove the problematic instance type or family from the allowlist.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocquotaexceeded">GKE: Why can’t I spin new instances (quota_exceeded)?</summary>

  <div style="padding-left:16px">

You may get this message when scaling up instances:

````
ERROR, Can't Spin Instance: Name: sin-xxxxx. Code: QUOTA_EXCEEDED, Message: Quota 'M1_CPUS' exceeded. Limit: 0.0 in region us-east4
````

GCP has [allocation quotas](https://cloud.google.com/compute/resource-usage), which limit the number of resources that your project has access to. The limit is per region.

[Check your current quota](https://cloud.google.com/docs/quotas/view-manage). You can [request a quota adjustment](https://cloud.google.com/docs/quotas/view-manage#requesting_higher_quota) from GCP.

The prefix in some of the [machine names changed from n1 to m1](https://cloud.google.com/compute/docs/memory-optimized-machines#m1_series), so will also cause the message to show in the Spot console.

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancgroupmode">GKE: How can I change the CGROUP_MODE for a GKE cluster?</summary>

  <div style="padding-left:16px">

  1. [Change the cgroup_mode in the GKE node pool](https://cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#cgroup-mode-options).
  2. [Reimport the cluster configuration to Ocean](https://docs.spot.io/api/#tag/Ocean-GKE/operation/reImportGke) (or [roll the cluster/virtual node group](ocean/features/roll-gen?id=roll-per-node-or-vng) for all nodes so they have the latest changes).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceantimeout">EKS, GKE: How do draining timeout and termination grace period work together?</summary>

  <div style="padding-left:16px">

[Draining timeout](ocean/features/scaling-kubernetes?id=draining-timeout-per-virtual-node-group) (drainingTimeout) is defined in Ocean. It’s how long Ocean waits for the draining process to end before terminating an instance. The default is 300 seconds.

[Termination grace period](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination) (terminationGracePeriodSeconds) is defined in Kubernetes. It’s how long Kubernetes waits before terminating the pod. The default is 30 seconds.

You can use Ocean’s draining timeout to make sure the node isn’t terminated before the pod’s application finishes draining. This is helpful if you have applications in pods that need a specific amount of time to gracefully shut down.

If you have a pod that needs time to gracefully shut down, define a terminationGracePeriodSeconds in the pod. In Ocean, set a draining timeout that is greater than or equal to the pod's terminationGracePeriodSeconds time. This way, the node will not terminate before the application in the pod gracefully shuts down.

For example, if you have a 600 second terminationGracePeriodSeconds, make sure your draining timeout in Ocean is more than 600 seconds.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanlaunchspec">EKS, GKE: Why am I getting the error: <i>when default launchSpec is used as a template only, can't raise target of Ocean</i>?</summary>

  <div style="padding-left:16px">

   When the `useAsTemplateOnly` parameter is <i>true</i>, you cannot edit the target capacity in the Ocean cluster configuration.
   
Keep in mind that it may not be necessary to increase the target capacity because Ocean automatically scales instances up and down as needed.

If you want to edit the target capacity:
1. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
2. Click **Actions** > **Edit**.
3. On the Review tab, click **JSON** > **Edit Mode**.
4. Go to **Compute** > **launchSpecification**.
5. Change the <b>useAsTemplateOnly</b> parameter to <i>false</i>.

This will let you manually increase the target of the cluster and the nodes will launch in the default virtual node group.

<img width=900 src="https://github.com/user-attachments/assets/6e422a64-db48-4b43-90d0-d6b5ddc35464" >

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceannodeutil">AKS, EKS, GKE: Why is there a difference in node utilization in AWS and the Spot console)?</summary>

  <div style="padding-left:16px">

When you look in the Spot console (**Ocean** > **Cloud Clusters** > node > **Nodes**), the memory and CPU are requests by pod. The <i>requests</i> are grouped at the node. This is the pod <i>allocation</i>.

When you look in the AWS console, you can see the actual <i>utilization</i>, which is different than the <i>allocation</i>.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocstaticendpoint">AKS, EKS, GKE: Can I use a static endpoint with Ocean Controller Version 2?</summary>

  <div style="padding-left:16px">

A dynamic endpoint can change with scaling or other operational activities.

A static endpoint in cloud computing is a fixed, unchanged network address used to access a resource or service reliably. This lets applications and users connect to a stable address that doesn’t change.

You can set a static endpoint to use with Ocean Controller Version 2:

1. Install the latest [controller Helm chart and update the ocean-kubernetes-controller](ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-update?id=update-to-the-latest-version).
2. When you’re installing ocean-kubernetes-controller, also include: `--set spotinst.baseUrl=https://api-static.spotinst.io`.

 </div>

</details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocupgradehelm">AKS, EKS, GKE: Why can’t I upgrade the Ocean Controller Version 2 using Helm?</summary>

  <div style="padding-left:16px">

If you get this message when you’re [upgrading the Ocean Controller Version 2](ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-helm) using Helm:

````
Release "ocean-controller" does not exist. Installing it now.
Error: parse error at (ocean-kubernetes-controller/templates/_helpers.tpl:320): unclosed action
````

You need to:

1. Check if the cluster already has the metrics-server installed: `kubectl get apiservice v1beta1.metrics.k8s.io`.
2. Check the Helm [Charts](https://helm.sh/docs/topics/charts/) version: `helm search repo spot`.
3. Update the [Helm Chart to the latest version](https://helm.sh/docs/helm/helm_upgrade/).

If these don’t work, add the `--set metrics-server.deloyChart=false` flag to the `helm upgrade –install` cmd.

 </div>

</details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanssar">AKS, EKS, GKE: Should I get frequent <i>SelfSubjectAccessReview</i> requests after upgrading to Ocean Controller Version 2?</summary>

  <div style="padding-left:16px">

After you upgrade to Ocean Controller Version 2, you may get many SIEM alerts due to <i>SelfSubjectAccessReview</i> requests to your API server. This is expected behavior.

With the Version 2 Ocean Controller, Spot gets reports for any custom resource you gave it access to through the controller cluster role. For example, an Argo Rollouts custom resource or a VerticalPodAutoscaler for rightsizing. These require Spot to list the custom resources in the cluster and make sure there's read access. This happens when the  controller starts up and on a regular basis when it's running.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="occontrollerlogs">AKS, EKS, GKE: How long are Ocean Controller logs kept for?</summary>

  <div style="padding-left:16px">

The Ocean Controller saves up to 8 days of logs. The logs for each day are about 11 MB.

1. Sign in to the container: `kubectl exec -ti <controller_pod_name> bash -n spot-system`.
2. View the logs: `ls -lah controller/log/spotinst`.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocrightsizingmetrics">AKS, EKS, GKE: Why is rightsizing information not showing after installing the metrics server?</summary>

  <div style="padding-left:16px">

[Rightsizing](ocean/features/ocean-cluster-right-sizing-tab) data may not show after installing the metrics server:

1. Make sure you’re using the [latest version of the controller](ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-update). It takes around 4 days for the metrics to show after upgrading.
2. If you’re using an EKS cluster, make sure you have 2 [security groups](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html):

    * Worker node group with an inbound rule that allows communication with the control plane’s security group through port 443.
    * Cluster’s control plane.

3. Check the [common issues with the metrics server](https://repost.aws/knowledge-center/eks-metrics-server).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocnorestrict">AKS, EKS, GKE: Why is the out of strategy replacement getting canceled for pods <i>without</i> the restrict-scale-down label?</summary>

  <div style="padding-left:16px">

If a node replacement is canceled, you may see this log message in the cluster in the Spot console:

````
DEBUG, Replacement of type Out of strategy for instance has been canceled. Reason for cancellation: A pod with the restrict-scale-down label is currently running on the node.
````

You can also get this message if you’re using the `cluster-autoscaler.kubernetes.io/safe-to-evict` label. It works the same as the `restrict-scale-down` label. When you have one of those labels, the node is not scaled down or replaced.

Make sure that labels and annotations don’t prevent scaling down [on the virtual node groups](ocean/features/scaling-kubernetes?id=scale-down-prevention) or [on the pods](ocean/features/labels-and-taints?id=spotinstiorestrict-scale-down).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceantokens">AKS, EKS, GKE: What are the minimum permissions needed for a programmatic token for creating an Ocean cluster controller?</summary>

  <div style="padding-left:16px">

   You can use a programmatic token for creating Ocean cluster controllers. The benefit of programmatic tokens is they aren't linked to a specific user. If the user is deleted, it doesn't affect the Ocean controller. This helps prevent interruptions and heartbeat issues.

   At minimum, the token must have **account viewer** [permissions](/administration/policies/). Viewer permission is the only permission required for a cluster controller to operate. Cluster controllers don't manage resources in Ocean, the autoscaler does. If you want this same programmatic user to manage other resources in your cluster, additional permission policies are required.

For a network client, only the **account viewer** permission is required for the client to operate.

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocpersistvol">AKS, EKS, GKE: Why are my pods unscheduled with event: <i>pod has unbound immediate PersistentVolumeClaims</i>?</summary>

  <div style="padding-left:16px">

You may get this event in your Kubernetes cluster:

0/3 nodes are available: pod has unbound immediate PersistentVolumeClaims

<img width=600 src="https://github.com/user-attachments/assets/cbbf11bc-ea21-405f-a4ce-c479ce2bbdde">

This can happen because:

* Kubernetes needs [storage classes](https://kubernetes.io/docs/concepts/storage/storage-classes/) to create the [persistent volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) for [persistent volume claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims) (PVCs) dynamically. Make sure you have storage classes configured unless you’re using static persistent volume claims.
* The [persistent volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes) and [persistent volume claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes-1) access modes don’t match.
* The persistent volume [capacity](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity) is less than the persistent volume claim.
* The total number of persistent volume claims is higher than the persistent volume.

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocautoscalingdisabled">AKS, EKS, GKE: Why is my pod unschedulable (autoscaling disabled)?</summary>

  <div style="padding-left:16px">

If the Ocean autoscaler scales up an instance for your pod at least 5 times, but the Kubernetes scheduler can’t schedule the pod, you may get this message:

````
WARN, Pod Metrics-Server-xxxxx Has Failed To Schedule For 76 Minutes. Autoscaling Disabled For Pod Metrics-Server-xxxxx
WARN, Pod Redis-0 Has Failed To Schedule For 76 Minutes. Autoscaling Disabled For Pod Redis-0
WARN, Pod Kube-Dns-Autoscaler-xxxxx Has Failed To Schedule For 76 Minutes. Autoscaling Disabled For Pod Kube-Dns-Autoscaler-xxxxx
WARN, Pod Worker-Deployment-xxxxx Has Failed To Schedule For 76 Minutes. Autoscaling Disabled For Pod Worker-Deployment-xxxxx
WARN, Pod Kube-Dns-xxxxx Has Failed To Schedule For 76 Minutes. Autoscaling Disabled For Pod Kube-Dns-xxxxx
   ````

Ocean stops trying to scale up this pod to prevent infinite scaling.

This can happen if:

* Ocean launches instances for the pending pod but they don’t fully register to the Kubernetes cluster because the pod has no node to schedule.
* You’re using AWS ebs-csi-driver PV/PVC. It’s possible that the [ebs-csi-node](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) DaemonSet pods are not running on the nodes. This can happen if the DaemonSet object is having issues, the DaemonSet pods are not running, or if taints on a custom virtual node group are stopping the DaemonSet pods from being scheduled on the node. If you’re using DaemonSet, then the DaemonSet pods must run on every node if a pending pod has a PVC.
* You’re using GPU nodes. The [Nvidia GPU DaemonSet](https://github.com/NVIDIA/k8s-device-plugin) is required to run on every GPU node for the nodes to expose their GPU resources. If a pending node is requesting GPU, then Ocean launches a GPU instance. You need to make sure the nodes are exposing the GPU resources. Typically, you do this with the Nvidia GPU DaemonSet. If the DaemonSet has issues, then the pod may not be scheduled on the node because the node won’t be exposing the GPU.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocjavaheap">AKS, EKS, GKE: Why am I getting a Java heap space message (OutOfMemoryError)?</summary>

  <div style="padding-left:16px">

You may see this message in the logs if you use Prometheus to scrape Ocean metrics:

````
ERROR 1 --- java.lang.OutOfMemoryError: Java heap space with root cause
java.lang.OutOfMemoryError: Java heap space
````

This means the application ran out of Java heap space, and the pod will crash temporarily. You may also see that the target on the [Prometheus](ocean/tools-and-integrations/prometheus/scrape) dashboard is down.

Use the JAVA_OPTS variables to increase the minimum and maximum heap space the application can use. You can use podEnvVariables in the [helm chart](https://artifacthub.io/packages/helm/spot/ocean-metric-exporter) and set JAVA_OPTS="-Xms256m -Xmx1g".

Set the amounts according to the needs of your pods.

<img width=450 src="https://github.com/user-attachments/assets/2e2aaf44-b76d-445c-a86d-058e53c634e6">


 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8spvcerror">AKS, EKS, GKE: Why am I getting a <i>Kubernetes Autoscaler, Deadlock for Pod</i> error?</summary>

  <div style="padding-left:16px">

You get this error in the log:

````
Kubernetes Autoscaler, Deadlock for Pod: '{pod-name}' 
Can't scale up an Instance since PersistentVolumeClaim: 
'{PVC-name}' 
VolumeId: '{vol-name}' is already attached to an existing Instance: 
'{instance-ID}' Please consider using a new PersistentVolumeClaim or open a 
support ticket.
````

This can happen when the pod has a claim for a specific volume attached to a different instance, and that instance does not have free space for the pod.

By freeing up space, the pod can be placed on its attached node and can use the volume it claimed.

 </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanhostportunderutilized">AKS, EKS, GKE: Can pods requiring HostPort cause underutilized nodes (Kubernetes)?</summary>

If multiple pods request the same port (hostPort), each pod will get the hostPort, but each pod will be scheduled separately on its own node.

Avoid using the hostPort request, unless it’s necessary ([Kubernetes - configuration best practices](https://kubernetes.io/docs/concepts/configuration/overview/)).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sresourcequota">AKS, EKS, GKE: What’s the difference between Kubernetes ResourceQuota and LimitRange objects?</summary>

A [resource quota](https://kubernetes.io/docs/concepts/policy/resource-quotas/) is defined by a ResourceQuota object. It limits aggregate resources, such as CPU, memory, and GPU consumption per namespace. If creating or updating a resource violates a quota constraint, the request will fail with HTTP status code 403 FORBIDDEN with a message explaining the constraint that would have been violated. You can see the messages using: kubectl get events

A [limit range](https://kubernetes.io/docs/concepts/policy/limit-range/) is a policy to constrain the resource allocations (limits and requests) that you can specify for each applicable object kind (such as Pod or [PersistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)) in a namespace.

**ResourceQuota** is used to limit the total resource consumption of a <i>namespace</i>.

**LimitRange** manages constraints at a <i>pod and container level</i> within the project.

  </div>

 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sheadroomnode">AKS, EKS, GKE: Can I configure headroom for a node?</summary>

  <div style="padding-left:16px">

You cannot add headroom at a node level. Headroom is intended for:

* Fast scaling: the infrastructure is ready, no need to wait for scaling.
* Interruption: there is available capacity for the pod. If the headroom is all on one node and the node is interrupted, then there is no headroom that is readily available.

  </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sheadroom">AKS, EKS, GKE: Can I configure automatic headroom using Kubernetes Operations (kOps)?</summary>

  <div style="padding-left:16px">

You can configure [automatic headroom](ocean/features/headroom) using kOps at the cluster level, not at a virtual node group level. Add these [metadata labels](/ocean/tools-and-integrations/kops/metadata-labels):

````
spotinst.io/autoscaler-auto-config: "true"
spotinst.io/autoscaler-auto-headroom-percentage : {Value}
spotinst.io/ocean-default-launchspec: "true"
````

Here's an example of a config file:

````json
apiVersion: kops.k8s.io/v1alpha2
kind: InstanceGroup
metadata:
name: "test-vng-2"

labels:
kops.k8s.io/cluster: "erez-via-2.ts.ek8s.com"
spotinst.io/spot-percentage: "50"
spotinst.io/autoscaler-auto-config: "true"
spotinst.io/ocean-default-launchspec: "true"
spotinst.io/autoscaler-auto-headroom-percentage: "20"
spotinst.io/autoscaler-headroom-num-of-units: "2"
spotinst.io/autoscaler-resource-limits-max-vcpu: "2"
spotinst.io/autoscaler-headroom-mem-per-unit: "1024"
spotinst.io/autoscaler-headroom-gpu-per-unit: "0"

spec:
role: Node
maxSize: 1
minSize: 1
````

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sscaledown">AKS, EKS, GKE: Can I stop Kubernetes workloads from scaling down in Ocean?</summary>

  <div style="padding-left:16px">

You can restrict specific pods from scaling down by configuring Ocean and Kubernetes. The instance will be replaced only if:
* It goes into an unhealthy state.
* Forced by a cloud provider interruption.

There are two options for restricting pods from scaling down:
* Kubernetes deployments/pods: spotinst.io/restrict-scale-down: true

  Use the `spotinst.io/restrict-scale-down` label set to <i>true</i> to block proactive scaling down for more efficient bin packing. This will leave the instance running as long as possible. It gets defined as a label in the pod's configuration. See [restrict scale down](ocean/features/labels-and-taints?id=spotinstiorestrict-scale-down).

* Virtual node group (VNG): restrict scale down (only available for AWS, ECS, and GKE)

  You can configure [Restrict Scale Down](ocean/features/vngs/attributes-and-actions-per-vng) at the VNG level so the nodes and pods within the VNG are not replaced or scaled down due to the auto scaler resource optimization. Create a VNG, go to the Advanced tab, then select **Restrict Scale Down**.

 </div>

 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanfailinstancetypes">AKS, ECS, EKS, GKE: Why does Ocean fail to update instance types?</summary>

  <div style="padding-left:16px">

You cannot update the instance types in the default virtual node group. For example, it’s not supported to remove <i>m4.large</i> and <i>m5.large</i>, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> to the default virtual node group, and then update the cluster.

If you do, you’ll get this error:

````
Launch spec ols-xxxxxxxx instance types are not a subset of ocean cluster
````

Remove the instance types at the cluster level, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> instance types, and then update the cluster.

Instance types of the virtual node group are always a subset of the Ocean cluster.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="excludeinstanceocean">AKS, ECS, EKS, GKE: Can I include or exclude instance types in my Ocean cluster?</summary>

<div style="padding-left:16px">

You can include or exclude certain instance types in your Ocean cluster. Typically, you do it from the cluster configuration.
* **Blacklist**: instance types to block launching in the Ocean cluster. It cannot be used with a permit list.
* **Whitelist**: instance types allowed in the Ocean cluster. It cannot be used with a deny list.
* **Filtering**: list of filters. The instance types that match with all filters make up the Ocean's whitelist parameter. Filtering cannot be used with allow or block lists.

You can allow, [block](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types?id=opt-out-of-machine-types), or [filter](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types?id=select-instance-types-with-advanced-filters) instance types in the cluster configuration in <i>compute: instanceTypes</i> in the cluster’s JSON or using an API.

![exclude-instance-ocean1](https://github.com/spotinst/help/assets/167069628/be29e0f4-5a2c-4e46-a823-f72c218e0460)

</div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancost">AKS, ECS, EKS, GKE: Why is the cost analysis in the Ocean dashboard unusually high for yesterday?</summary>

  <div style="padding-left:16px">

Cost Analysis in the Ocean Dashboard can show an unusually high cost for yesterday.

![oceancostanalysis](https://github.com/user-attachments/assets/96cbe1c7-fa63-4df1-89bb-18154e9778cb)

If you look at the same day a few days later, the cost will be similar to the other days.

![oceancostanalysis2](https://github.com/user-attachments/assets/6a11a3a9-a2b1-405a-b274-c2a5370bff43)

Spot's Cost Analysis reviews the cost data after one day. For instance, if today is August 20, the cost analysis data will be finalized only on August 21.

Initially, the costs are compared with the on demand value of the instance types, followed by the Spot value. Afterwards, the costs are compared with reserved instances and saving plans. So, if the you have reserved instances and saving plans configured, the cost gap from the previous day can be higher.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocparsing">AKS: Why won't my cluster scale up (parsing version)?</summary>

  <div style="padding-left:16px">

If your Ocean cluster won’t scale up, you may see a message like this in the Spot console logs:

````
Failed to perform scale up for virtual node group xxxxx (vng-xxxxx). Got status code different from SC_OK : 400 Body { "code": "BadRequest", "details": null, "message": "Client Error: error parsing version(1.26). If you would like to use alias minor version, please use api version starting from 2022-03-02-preview", "subcode": "" }
````

This happens when the Ocean cluster tries to create a node pool using a specific Kubernetes version. In this message, it’s version 1.26.

* If you want to use a specific version, you also need to give the exact patch version (the alias minor version).
* You also need to make sure your [AKS API version](https://learn.microsoft.com/en-us/azure/aks/supported-kubernetes-versions?tabs=azure-cli#alias-minor-version) is at least the version mentioned in the message.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocudr">AKS: Why is my node not registering in my AKS cluster (UDRWithNodePublicIPNotAllowed)?</summary>

  <div style="padding-left:16px">

If your pods are not registering in your AKS cluster, you may get this message:

````
Could not scale up for pending pod xxxxx due to technical failure to launch required instances. Scale down has been disabled in the cluster until pod is scheduled.
ERROR Failed to perform scale up for virtual node group xxxxx (vng-xxxxx). Got status code different from SC_OK : 400 Body { "code": "UDRWithNodePublicIPNotAllowed", "details": null, "message": "OutboundType UserDefinedRouting can not be combined with Node Public IP.", "subcode": "" }
ERROR Failed to scale up 1 new nodes as part of scaling the virtual node groups vng-xxxxx (xxxxx).
````

You cannot use **enableNodePublicIP** set to <i>True</i> with **userDefinedRouting** set to <i>outboundType</i>.

If you’re using [outbound types of userDefinedRouting](https://learn.microsoft.com/en-us/azure/aks/egress-outboundtype#outbound-type-of-userdefinedrouting), change `"enableNodePublicIP": true`, to <i>false</i>. For example:

````json
    "nodePoolProperties": {
        "maxPodsPerNode": 250,
        "enableNodePublicIP": false,
    }
````

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocworkloadbutton">AKS: Why can’t I migrate a workload for an AKS Ocean cluster?</summary>

  <div style="padding-left:16px">

The Start Migration button can be grayed out for an AKS Ocean cluster if:

* The cluster has system node pools, which must run as regular nodes and don’t require scaling.
* The Kubernetes cluster isn’t running on AKS infrastructure.
* Kubernetes cluster isn’t connected to an Ocean cluster. You can [import an AKS cluster to Ocean](ocean/getting-started/aks/?id=import-an-aks-cluster-to-ocean).
* The Ocean Controller wasn’t installed, updated, and running in the cluster.
* Cluster or virtual node group doesn’t have a [supported Kubernetes version](https://learn.microsoft.com/en-us/azure/aks/supported-kubernetes-versions?tabs=azure-cli#aks-kubernetes-release-calendar).
* You don’t have dedicated [virtual node groups](ocean/features/vngs/?id=virtual-node-groups) for your workload to let Ocean autoscaler scale up nodes.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocworkload">AKS: Why is the workload marked as unable to migrate?</summary>

  <div style="padding-left:16px">

If you’re seeing an unable to migrate status in workload migration, check if the node affinity has `kubernetes.azure.com/scalesetpriority`. Do not use this nodeAffinity. If you have both the Spot toleration and nodeAffinity configured, then Ocean [autoscaling fails](https://docs.spot.io/ocean/getting-started/aks/aks-prerequisites?id=enable-ocean-to-launch-spot-vms-for-workloads). You can see a message in the cluster log in the Spot console.

 </div>

 </details>

 

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanvmarch">AKS: Can I create VMs with specific architecture in Ocean AKS?</summary>

  <div style="padding-left:16px">

You may want to run workloads (pods) on VMs with a specified architecture.

For Ocean clusters (AWS), you can use an AMI with the required architecture. Update the AMI in the cluster or virtual node group (VNG) configuration to make sure the instances are launched according to the architecture specified in the AMI.

However, it’s not possible to do with Ocean AKS clusters because you cannot choose a particular image to run VMs when you create an AKS cluster.

1. Create a new virtual node group in the Ocean AKS cluster and configure it manually or import the configuration of a node pool.
2. Add vmSizes to the virtual node group JSON file.

    ````json
	   "vmSizes": {
        "filters": {
            "architectures": [
                 "x86_64"
            ],
            "series": []
                }
    }
    ````
   
   * <b>Architectures</b> is a list of strings, and the values can be a combination of <i>x86_64</i> (includes both <i>intel64</i> and <i>amd64</i>), <i>intel64</i>, <i>amd64</i>, and <i>arm64</i>.

   * Add <b>series</b> with the VM series for the particular architecture.
     For example, run VMs with <i>arm64</i> and launch the VMs with <i>Dps_V5</i> as the series.
 
     <img width=450 src="https://github.com/user-attachments/assets/1c0fccc2-2847-4cad-a01d-ce60a109db8e">


 </div>
 
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanodnodes">AKS: Why are on-demand nodes running in my virtual node groups?</summary>

  <div style="padding-left:16px">

If you have virtual node groups with Spot % set to 100 or Fallback to Regular set to off, you can still have on-demand nodes running.

This can happen if you have nodes in a [kube-system namespace](https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts#namespaces). Kube-system pods are created by the Kubernetes system and are required to make the cluster work.

AKS only launches spot nodes if the admission controller is enabled and Spot tolerations are injected into the pods.

 </div>
 
 </details>

<!----------------------------------Ocean for Apache Spark---------------------------------->

## Ocean for Apache Spark

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="sparkretries">Can I set the number of retries for a stage in Ocean Spark?</summary>

 <div style="padding-left:16px">

If there is a stage failure when a job runs in Ocean Spark, there’s a [retry mechanism](https://spark.apache.org/docs/3.5.2/configuration.html#:~:text=2.0.3-,spark.stage.maxConsecutiveAttempts,-4). You can change the number of retries for a stage:

1. In the Spot console, go to **Ocean for Spark** > **Configuration Templates**.
2. Select the configuration template of the application you need to change.
3. Add `spark.stage.maxConsecutiveAttempts` with the number of retries.


 </div>
 
 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="sparkdriver">Can I run Spark jobs on the driver, not on executors?</summary>

 <div style="padding-left:16px">

Yes, you can define your configuration template to run your Spark application on the driver and not on the executors.

Define a [Jupyter kernel](ocean-spark/tools-integrations/connect-jupyter-notebooks?id=define-jupyter-kernels-with-configuration-templates) with a low idle timeout so it’s scaled down quickly if it’s not in use:

````
"spark.dynamicAllocation.enabled": "true",
"spark.dynamicAllocation.maxExecutors": "1",
"spark.dynamicAllocation.minExecutors": "0",
"spark.dynamicAllocation.initialExecutors": "0",
"spark.dynamicAllocation.executorIdleTimeout": "10s"
````

 </div>
 
 </details>


<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="sparkwrongvng">Why are my pods going to the wrong virtual node group?</summary>

 <div style="padding-left:16px">

If your Ocean Spark pods are going to the wrong virtual node group, it’s typically because the virtual node group was updated or deleted.

You can either recreate the Ocean Spark cluster or update the labels and taints. These are the definitions for virtual node group labels and taints:

**ocean-spark-system**

````json
    "labels": [
      {
        "key": "nodegroup-name",
        "value": "ofas-system"
      }
    ],
    "taints": [],
````

**ocean-spark-on-demand**

````json
    "labels": [
      {
        "key": "bigdata.spot.io/vng",
        "value": "ocean-spark"
      },
      {
        "key": "nodegroup-name",
        "value": "ocean-spark-on-demand"
      }
    ],
    "taints": [
      {
        "key": "bigdata.spot.io/unschedulable",
        "value": "ocean-spark",
        "effect": "NoSchedule"
      }
    ],
````

**ocean-spark-spot**

````json
    "labels": [
      {
        "key": "bigdata.spot.io/vng",
        "value": "ocean-spark"
      },
      {
        "key": "nodegroup-name",
        "value": "ocean-spark-spot"
      }
    ],
    "taints": [
      {
        "key": "bigdata.spot.io/unschedulable",
        "value": "ocean-spark",
        "effect": "NoSchedule"
      }
    ],
````


 </div>
 
 </details>

<!----------------------------------elastigroup---------------------------------->

## Elastigroup

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egreg">AWS, Azure, GCP:  What regions does Spot support for my cloud provider?</summary>

 <div style="padding-left:16px">

**AWS Regions**

us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, sa-east-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, ap-south-1, me-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-east-1, cn-north-1, cn-northwest-1, ap-northeast-3, af-south-1, eu-south-1, us-gov-east-1, us-gov-west-1, cn-north-1, cn-northwest-1.

**Azure Regions**

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas, us-gov-virginia, west-us, west-us-2, west-us-3.

**GCP Regions**

us-east1, us-east1, us-east1, us-east4, us-east4, us-east4, us-central1, us-central1, us-central1, us-central1, us-west1, us-west1, us-west1, europe-west4, europe-west4, europe-west4, europe-west1, europe-west1, europe-west1, europe-west3, europe-west3, europe-west3, europe-west2, europe-west2, europe-west2, asia-east1, asia-east1, asia-east1, asia-southeast1, asia-southeast1, asia-southeast1, asia-northeast1, asia-northeast1, asia-northeast1, asia-south1, asia-south1, asia-south1, australia-southeast1, australia-southeast1, australia-southeast1, southamerica-east1, southamerica-east1, southamerica-east1, asia-east2, asia-east2, asia-east2, asia-northeast2, asia-northeast2, asia-northeast2, europe-north1, europe-north1, europe-north1, europe-west6, europe-west6, europe-west6, northamerica-northeast1, northamerica-northeast1, northamerica-northeast1, us-west2, us-west2, us-west2.

</div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egodlaunched">AWS, Azure, GCP: Why is an on-demand instance launched instead of a spot instance?</summary>

  <div style="padding-left:16px">

An on-demand instance may be launched instead of a spot instance even if a spot instance is available in the markets selected in the Elastigroup.

You can set [Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) for cluster orientation in Elastigroup. Despite this, Spot may prioritize a certain availability zone to maintain equal distribution. 

An [Elastigroup may have Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) set for cluster orientation, but the system sometimes prioritizes a certain availability zone to maintain equal distribution. When no spot instances are available, an on-demand instance spins up in the relevant availability zone.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egduptags">AWS, Azure, GCP: Why can’t I spin new instances (duplicate tags)?</summary>

  <div style="padding-left:16px">

You can get this message when the group or cluster is scaling up instances:

````
Can't Spin Instances: Code: ValidationError, Message: can't spin spot due to duplicate tags error
````

This happens if you have duplicate tags configured:

* The cluster has more than one of the same custom tags.
* You created a custom tag key with spotinst—Spot automatically creates scaling tags that start with spotinst, resulting in multiple identical tags.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egagentlogs">AWS, Azure: Where are the agent logs saved?</summary>

  <div style="padding-left:16px">

The Spotinst agent logs are saved:

* Linux: /var/log/spotinst/spotinst-agent.log
* Windows: C:\Spotinst

   </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eglogsdkevents">AWS, GCP: Can I log events for the Spotinst SDK for Python?</summary>

  <div style="padding-left:16px">

You can get a detailed response for the [Python SDK](tools-and-provisioning/python-sdk). For example, you can include request IDs and times.

Add the log_level to your scripts: `client = session.client("elastigroup_aws", log_level="debug")`.

Change the session client from <i>elastigroup_aws</i> to [the client you need](https://github.com/spotinst/spotinst-sdk-python?tab=readme-ov-file#client-options).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egelasticsearch1">AWS: Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) add this code to the JSON:
     ````json
	 "logging": {
       "export": {
         "s3": {
           "id": "di-123"
         }
       }
     }
     ````

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1. If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2. If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3. If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4. If there is any free compute service plan commitment, then the instance is a savings plan.
5. Otherwise, the instance will run as a full-price on-demand instance.

Throughout the lifetime of an instance, it can change its “price” whenever there’s any change in the commitments utilization rate. For example, if an instance is running as a full price on-demand instance, and another instance that was utilizing a compute savings plan commitment was terminated, the first instance will start utilizing this commitment if its hourly price rate has enough free space under this commitment. It might take a couple of minutes for this change to show, but since the billing is being calculated retroactively, in practice it’s starting to utilize the commitment right away.
   
 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egdraining">AWS: What is the default draining timeout?</summary>

  <div style="padding-left:16px">

Draining timeout is the time in seconds to allow the instance or node to be drained before terminating it.

The default draining for:
* Elastigroup is 120 seconds
* Ocean is 300 seconds
* ECS (Elastigroup/Ocean) is 900 seconds

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egimds">AWS: How can I update the instance metadata (IMDS) in my cluster?</summary>

<div style="padding-left:16px">

Instance metadata service (IMDS) is data about your instance that you can use to configure or manage the running instance or virtual machines. IMDS comes from the cloud providers. The metadata can include instance ID, IP address, security groups, and other configuration details.
Instance metadata service version 2 (IMDSv2) addresses security concerns and vulnerabilities from IMDSv1. IMDSv2 has more security measures to protect against potential exploitation and unauthorized access to instance metadata.

**Scenario 1: Ocean and Elastigroup**

You can define metadata for autoscaling groups in AWS that gets imported when you import the groups from AWS to Spot. You can manually configure them in Spot to use IMDSv2.

1. Follow the [Ocean AWS Cluster Create](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Elastigroup AWS Create](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) API instructions and add this configuration for the cluster:
   ````json
   "compute": {
    "launchSpecification": {
        "instanceMetadataOptions": {
            "httpTokens": "required",
            "httpPutResponseHopLimit": 12,
            "httpEndpoint": "enabled"
          }
      }
    }
   ````

2. Apply these changes to the currently running instances so the clusters are restarted and have the new definitions:
    * [Deploy an Elastigroup](https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup?id=deploy-an-elastigroup)
    * [Roll an Ocean cluster](https://docs.spot.io/ocean/features/roll-gen)

**Scenario 2: Stateful Node**

When a stateful managed node is imported from AWS, Spot creates an image from the snapshot. When an instance is recycled, the metadata configuration is deleted and changes to IMDSv1.

You can use your own AMI and configure IMDSv2 on it. All instances launched after recycling will have IMDSv2 by default.

1. Configure IMDSv2 on your AMI:
    * If you're creating a new AMI, you can add IMDSv2 support using AWS CLI:
     ````
      aws ec2 register-image Let me know if there is anything else I can help you with.
      --name my-image \
      --root-device-name /dev/xvda \
      --block-device-mappings DeviceName=/dev/xvda,Ebs={SnapshotId=snap-0123456789example} \
      --imds-support v2.0
      ````

    * If you use an existing AMI, you can add IMDSv2 using AWS CLI:
      ````
      aws ec2 modify-image-attribute \
      --image-id ami-0123456789example \
      --imds-support v2.0
      ````

2. In the Spot console, [create a stateful node](https://docs.spot.io/managed-instance/getting-started/create-a-new-managed-instance) with the custom AMI.

 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmemoryscalepolicy">AWS: How can I set a memory-based scaling policy in Elastigroup?</summary>

  <div style="padding-left:16px">

Scaling policies typically include CloudWatch metrics such as CPU utilization, network out, and latency.

You can configure a custom scaling policy that is based on another metric. For example, you may want to scale according to memory utilization.

1. To set a simple scaling policy, revert the Elastigroup configurations to the legacy design:

    <ol style="list-style-type: lower-alpha;">
     <li>In the Spot console, go to <b>Elastigroup</b> > <b>Groups</b>, and click on the name of an Elastigroup.</li>
     <li>Go to <b>Actions</b> > <b>Edit Configuration</b>.</li>
     <li><p>Click <b>Revert to Legacy Design</b>.</p>
     
     <p><img width=700 src="https://github.com/user-attachments/assets/edd8803d-a05b-4850-82e1-e87104006879" /></p>
     </li>

    </ol>

2. Click <b>Scaling</b> > <b>Simple Scaling Policies</b>.
3. Select <b>Up Scaling Policies</b> or <b>Down Scaling Policies</b> and click <b>Add Policy</b>.
4. Set these parameters:
    * <b>Policy Type</b>: <i>Simple scaling</i>
    * <b>Source</b>: <i>AWS CloudWatch</i>
    * <b>Auto Scale Based On</b>: <i>Other</i>
    * <b>Namespace</b>: <i>Custom</i>
    * <b>Custom Namespace</b>: <i>CWagent</i>
    * <b>Metric Name</b>: this [AWS document](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html) contains the metrics you can use. These metrics are collected by the CloudWatch agent. For example, you can use <i>mem_used</i> or <i>mem_used_percent</i>.
     
     <img width=450 src="https://github.com/user-attachments/assets/430e1adc-458b-4723-ba8a-061c766daef3" >
    
5. Verify the [CloudWatch agent is installed](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance.html).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egeventbridge">AWS: How do I create spot interruption notifications?</summary>

  <div style="padding-left:16px">

You can use AWS EventBridge to send spot interruption warnings to the Spot platform in real time. These warnings are pushed by AWS at an account level and are region-specific. You'll need to set up notifications for each account and region.

1. In your AWS console for the EventBridge page, make sure the EventBridge status is <i>Inactive</i>.
2. Reestablish the connection:
   <ol style="list-style-type: lower-alpha;">
     <li>Open your AWS console and select the region.</li>
     <li>Go to the AWS CloudFormation service.</li>
     <li>Create a stack with new resources for a specific region, or create a StackSet for multiple regions.</li>
     <li>Select create from an S3 URL and use this template URL: https://spotinst-public.s3.amazonaws.com/assets/cloudformation/templates/spot-interruption-notification-event-bridge-template.json.</li>
     <li>Click <b>Next</b>.</li>
     <li>Fill in the stack name, spot account ID, and Spot token, then click <b>Next</b>.</li>
     <li>Repeat for each active region.</li>
   </ol>

 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egebs">AWS: Why is EBS optimization disabled on instances optimized by default?</summary>

  <div style="padding-left:16px">

[Amazon EBS–optimized](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) instances use an optimized configuration stack and provide additional, dedicated bandwidth for Amazon EBS I/O.

Instances that are [EBS-optimized by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html#current) are optimized [regardless of the parameter settings](https://github.com/hashicorp/terraform-provider-aws/issues/2667#issuecomment-352622410). There is no need to enable EBS optimization and no effect if you disable EBS optimization in AWS or in Spot.

If an instance type isn’t [EBS-optimized by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html#current), you can enable optimization:

1. In the Spot console, go to the Ocean cluster or Elastigroup.
2. Click **Compute** > **launchSpecification**.
3. Set **ebsOptimized** to <i>true</i>.

   </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egtagpol">AWS: Why can’t I spin new instances (tag policies)?</summary>

  <div style="padding-left:16px">

If you’re getting this message:

````
Can't Spin Spot Instances: Message: The tag policy does not allow the specified value for the following tag key: 'XXX'.
````

It means a tag defined in your Elastigroup or cluster doesn’t comply with AWS’s tag policy.

1. In the Spot console, go to:

   * **Elastigroup** > **Groups** > click on the Elastigroup > **Log**.
   * **Ocean** > **Cloud Clusters** > click on the cluster > **Log**.

2. Identify the problematic tag keys/values.

3. Review [AWS’s tag policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) and how to [set up tag policies](https://aws.amazon.com/about-aws/whats-new/2019/11/aws-launches-tag-policies/).

4. In the Spot console, update the tag keys/values:

   * **Elastigroup** > **Groups** > click on the Elastigroup > **Actions** > **Edit Configuration** > **Compute** > **Advanced Settings**.
   * **Ocean** > **Cloud Clusters** > click on the cluster > **Actions** > **Edit Cluster** > **Compute**.

The instance will be launched when the tags in Spot clusters/groups comply with the tag policy defined in AWS.

   </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egencodedauth">AWS: Why can’t I spin new instances (encoded authorization)?</summary>

  <div style="padding-left:16px">

You can get these messages when the group or cluster is scaling up instances:

* `Can’t Spin Instances: Message: You are not authorized to perform this operation. Encoded authorization failure message`
* `Can’t Spin On-Demand Instances: Message: You are not authorized to perform this operation. Encoded authorization failure message`

These messages could be related to [service control policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) (SCP). Keep in mind, Spot doesn’t get SCP information from AWS, so doesn’t know which instance types AWS blocks because of the SCP restrictions. As a result, Spot cannot launch a new instance of a different type.

1. You need to [identify the reason for the error](https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html) in AWS.
2. In the Spot console, update the instance types:

   * [Ocean](ocean/tips-and-best-practices/manage-machine-types?id=opt-out-of-machine-types)
   * [Elastigroup](elastigroup/features/compute/preferred-instance-types)
   * [Ocean ECS cluster update API](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterUpdate)
   * [Elastigroup AWS update API](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsUpdate)

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eglockedautohealing">AWS: Does autohealing work on locked instances?</summary>

  <div style="padding-left:16px">

You can [lock](elastigroup/features/core-features/instance-actions?id=lock-an-instance) specific instances to prevent them from being scaled down during autoscaling. Instance protection doesn’t work on unhealthy instances. The unhealthy instance handler starts a replacement as a part of the [autohealing](elastigroup/features/compute/autohealing) process, which tries to detach the instance. The detach instances command doesn’t take instance protection into account.

   </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="scalinglatency">AWS: Can I configure a scaling policy for the latency metric?</summary>

  <div style="padding-left:16px">

You can create a scaling policy for latency.

1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies/Up Scaling Policies, click **Add Policy**.
3. Select these parameters:
    * **Auto Scale Based on**: <i>Other</i>
    * **Namespace**: <i>AWS/Application ELB</i>
    * **Metric Name**: <i>TargetResponseTime</i>
    * **Dimensions – Name**: <i>LoadBalancer</i>
    * **Dimensions – Value**: this is the ARN of the load balancer, for example: `loadbalancer/app/{load-balancer-name}/{xxxxxxxxxxx}`

     ![scaling-latency3](https://github.com/spotinst/help/assets/167069628/e9de15c8-6714-4f8f-a458-d2b4e182cf03)

4. Click **Next**.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egscalingRIs">AWS: If <i>Utilize Reserved Instances</i> is enabled, how does scaling work?</summary>

  <div style="padding-left:16px">

By default, Elastigroup monitors the status of your account's reservations and acts accordingly at the launch time of an on-demand instance. When an on-demand instance is scaled up, if the account has an available reservation to use in the specific market (instance type + availability zone), Elastigroup will utilize it and will use the reserved instance payment method.

If **Utilize Reserved Instances** is enabled, it automatically triggers constant attempts to revert the group's instances to on demand (reserved instance) if there are available reservations. It triggers a replacement for all instances, even spot, and uses your account's available reservations. The priority of launching instances in this group is:
1. It will see if there is an option to launch an reserved instance instance
2. If it cannot, it will launch a spot instance.
3. If a spot instance is unavailable for any reason, an on-demand instance will be launched based on the fallback to on-demand configuration.

 </div>
 
 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egscale">AWS: Why am I getting a <i>Scale down as part of instance recovery</i> or <i>Scale up as part of instance recovery</i> message?</summary>

  <div style="padding-left:16px">

You can get this log message if:

* The instance is scaled down because of AWS’s capacity.
* An instance replacement was initiated because of AWS’s capacity. A new instance is launched to replace an instance that was taken back because of AWS’s capacity.
* An instance is manually terminated in AWS.

This means that there are no [spot markets](elastigroup/features/core-features/market-scoring-managing-interruptions?id=fix-strategy) available to launch spot instances. You can add more spot markets to improve availability:

* For Elastigroup, [instance types](elastigroup/features/compute/preferred-instance-types?id=preferred-instance-types) and [availability zones](elastigroup/features/compute/preferred-availability-zones).
* For Ocean, [instance types](ocean/features/vngs/attributes-and-actions-per-vng?id=preferred-instance-types-per-virtual-node-group-aws) and [availability zones](ocean/features/avail-zones-scores?id=configure-your-availability-zones-recommendations).

   </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egoutofstrategy">AWS: Why am I getting an  <i>Out Of Strategy - On Demand No Replacement Will Be Created</i> message?</summary>

  <div style="padding-left:16px">

If your Elastigroup has more on-demand instances than the on-demand workload capacity, Elastigroup tries to revert to spot instances. This is called [fix strategy](elastigroup/features/core-features/market-scoring-managing-interruptions?id=fix-strategy).

When this happens, you can get this message in the Spot console logs:

````
Out Of Strategy - On Demand Above Strategy: Desired OD count: 0.0. Actual OD Count: xx. No Replacement Will Be Created Due To The Following Reason: Account Out Of Strategy procedure is currently suspended.
````

The fix strategy can be paused if:
* There are no [spot markets](elastigroup/features/core-features/market-scoring-managing-interruptions?id=fix-strategy) available to launch spot instances. You can add more [instance types](elastigroup/features/compute/preferred-instance-types?id=preferred-instance-types) and [availability zones](elastigroup/features/compute/preferred-availability-zones) to your group to improve availability.
* The spot instance vCPU quota is exceeded for your AWS account. You can [request a quota increase from AWS](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html).

 </div>
 
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egspinspotinstances">AWS: Why can't I spin new spot instances (InsufficientInstanceCapacity)?</summary>

  <div style="padding-left:16px">

This message is shown in the console logs if Ocean attempts to scale up a certain spot instance type in a particular availability zone. This happens because of a lack of capacity on the AWS side.

````
Can't Spin Spot Instances: Code: InsufficientInstanceCapacity, Message: We currently do not have sufficient m5.2xlarge capacity in the Availability Zone you requested (us-east-1a). Our system will be working on provisioning additional capacity. You can currently get m5.2xlarge capacity by not specifying an Availability Zone in your request or choosing us-east-1b, us-east-1c, us-east-1d, us-east-1f.
````

Ocean is aware of a pending pod and is spinning up an instance. Based on your current instance market, Ocean chooses the instance type in a particular availability zone and attempts to scale up. If it fails due to a lack of capacity, the error message is shown in the console logs.

You can solve this by:
* Having many instance types so Ocean can choose the best available markets.
* Having multiple availability zones to provide more availability.
* For workloads that are not resilient to disruptions, configure the [on demand label](https://docs.spot.io/ocean/features/labels-and-taints?id=spotinstionode-lifecycle) `spotinst.io/node-lifecycle`.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcantspin">AWS: Why can't I spin new instances (InvalidSnapshot.NotFound)?</summary>

<div style="padding-left:16px">

You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

````
ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.
````

If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 <img width="460" alt="cant-spin-instances-invalidsnapshot1" src="https://github.com/user-attachments/assets/6b828a90-314f-44e7-8508-077e5e392cb8">


If you have another snapshot, then you can use that snapshot ID for the block device mapping. If not, you can remove the snapshot ID, and then the instance is launched using the AMI information.

* **Elastigroup**: on the Elastigroup you want to change, [open the creation wizard](https://docs.spot.io/elastigroup/features/compute/block-device-mapping) and update the snapshot ID.

  <img width="467" alt="cant-spin-instances-invalidsnapshot2" src="https://github.com/user-attachments/assets/0d90513e-a6f3-478c-9b7f-a8bc2d07a798">


* **Ocean**: on the virtual node group you want to change, update the snapshot ID.

  <img width="588" alt="cant-spin-instances-invalidsnapshot3" src="https://github.com/user-attachments/assets/2cca9a9d-6123-4ddb-99b6-afe565304964">

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmaxspot">AWS: Why can't I spin new spot instances (MaxSpotInstanceCountExceeded)?</summary>

  <div style="padding-left:16px">

   You can get this message if AWS's spot service limit is reached:
   
   ````
   Can't Spin Spot Instances:Code: MaxSpotInstanceCountExceeded, Message: Max spot instance count exceeded
````

You may also get an email from Spot: <i>Spot Proactive Monitoring | Max Spot Instance Count Exceeded</i>. This email includes instructions for opening a support request with AWS, such as the instance type and region that triggered the error.

You can read the AWS documentation on [spot instance quotas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html).

   
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eginvalidkeypair">AWS: Why am I getting a <i>Can't Spin On-Demand Instances: Code: InvalidKeyPair.NotFound</i> message?</summary>

  <div style="padding-left:16px">

You can get this message if the key pair is missing or not valid: `Can't Spin On-Demand Instances: Code: InvalidKeyPair.NotFound, Message: The key pair 'xxxxx' does not exist`.

Update the key pair:

1. In the Spot console, go to **Elastigroup** > **Groups**, and click on the name of an Elastigroup.
2. Click **Actions** > **Edit Configuration**.
3. In **Basic Settings**, select a **Key Pair**.

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ebsvolumeerror">AWS: Why am I getting an <i>instance launch failed because an EBS volume cannot be encrypted</i> error?</summary>

<div style="padding-left:16px">

If you get this error:

````
Spot Bad Parameters: Spot Request id: Optional{instance ID}. Code: bad-parameters Message: {timestamp}: Instance launch failed because an EBS volume cannot be encrypted. If your launch specification includes an encrypted EBS volume, you must grant the AWSServiceRoleForEC2Spot service-linked role access to any custom KMS keys.
````

Then there are missing permissions in the KMS custom key. You can configure KMS keys:
* [From the same AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/create-encryption-key?id=create-encryption-key)
* [From a different AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/use-cross-account-kms-key-to-encrypt-ebs-volumes) (cross-account)

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egansible">AWS: Why can’t I create an Elastigroup using Ansible (Spotinst SDK library is required)?</summary>

<div style="padding-left:16px">

When creating an Elastigroup with Ansible, you may get this message:

````
TASK [create elastigroup] *****************************
fatal: [localhost]: FAILED! => {"changed": false, "msg": "the Spotinst SDK library is required. (pip install spotinst_sdk2)"}
````

You can get this message even if the library is installed. This can happen if Ansible uses the default Python version, which may not include the required packages.

1. Check which version Ansible is using: `ansible localhost -a 'which python'`

2. Add [Ansible Python interpreter](https://docs.ansible.com/ansible/latest/reference_appendices/python_3_support.html#python-3-support) (ansible_python_interpreter) to the ansible.cfg file.

 </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egod">AWS: Why am I getting a <i>Cannot set both 'ondemand' and 'onDemandTypes' parameters </i> message?</summary>

<div style="padding-left:16px">

You may get the `Cannot set both 'ondemand' and 'onDemandTypes' parameters` message if <i>ondemand</i> is set for a single on-demand instance and <i>onDemandTypes</i> is set for multiple instance types.

Update the parameters:

* In the Spot console:
   <ol style="list-style-type: lower-alpha;">
   <li>Go to <b>Elastigroup</b> > <b>Groups</b>.</li>
   <li>Select the Elastigroup and click <b>Actions</b> > <b>Edit Configuration</b>.</li>
   <li>Go to <b>Compute</b> > <b>Instance selection</b>.</li>
   <li>Update either <i>On-demand Types</i> or <i>Preferred Spot Types</i>.</li>
   </ol>

* In the Spot API. Set the parameter you’re not using to <i>null</i>.
* In Terraform. Set the parameter you’re not using to <i>null</i>.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egerrorpeers">AWS: Why am I getting a <i>"value" contains a conflict between peers</i> error?</summary>

  <div style="padding-left:16px">

When you import a new group to Elastigroup, you may get this error:

````
"value" contains a conflict between exclusive peers [resourceRequirements, spot]
````

This happens if the `resourceRequirements` value is <i>null</i>.

Remove the <i>resourceRequirements</i> field from the JSON file and reimport the group.

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egvpnsec">AWS: Why am I getting an <i>exceeded the number of VPC security allowed per instance</i> message?</summary>

  <div style="padding-left:16px">

You may get this message when creating or importing an Elastigroup or cluster if you reach your AWS service quota limit for security groups per network interface:

````
POST https://api.spotinst.io/aws/ec2/group?accountId=act-xxxxx: 400 (request: "xxxxx") SecurityGroupLimitExceeded: You have exceeded the number of VPC security groups allowed per instance.
````

You can [request a quota increase from AWS](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html).

   </div>

 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eginvalidblockdevicemapping">AWS: Why am I getting an InvalidBlockDeviceMapping error?</summary>

<div style="padding-left:16px">

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

````
Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping
````

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from `xvda` to `/dev/xvda` on the group's side. Go to **Actions** > **Edit Configuration** > **Review Tab** > **Switch to Json Edit format** > **Apply the changes and save**.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egdelbeanstalk">AWS: Why am I getting errors when I try to delete a Beanstalk group?</summary>

  <div style="padding-left:16px">

When you delete a Beanstalk group, make sure you deselect **Rollback beanstalk configuration**. If **Rollback beanstalk configuration** is selected, you <i>may</i> get ASG errors.

1. In the Spot console, go to **Elastigroup** > **Actions** > **Delete Group**.
2. Deselect **Rollback beanstalk configuration**.
3. Type the name of the group to confirm.
4. Click **Delete**.

   </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcodedeploy">AWS: What are the deployment states for CodeDeploy?</summary>

  <div style="padding-left:16px">

This is the list of values you can get for the items.state in the [Get CodeDeploy B/G Deployment API](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsGetCodeDeployB_GDeployment):

AWAITING_DEPLOYMENT_TO_FINISH<br>
AWAITING_INSTANCES_LAUNCH<br>
AWAITING_USER_DEPLOYMENT<br>
ERROR<br>
FINISHED<br>
FINISHED_ERROR<br>
FINISHED_STOPPED<br>
LAUNCHING_NEW_INSTANCES<br>
REMOVE_ALL_SUSPENSIONS<br>
REMOVE_NEW_INSTANCES<br>
REMOVE_OLD_INSTANCES<br>
ROLLBACK_CREATE_DEPLOYMENT<br>
ROLLBACK_REPLACE_OLD_NEW_INSTANCES<br>
ROLLBACK_START<br>
STARTING<br>
STOPPING<br>
TAG_INSTANCES_WITH_GREEN_TAG<br>
UNSTABLE_DEPLOYMENT<br>
VALIDATE_TAGS<br>
WAIT_BEFORE_TERMINATION<br>

Sample code with items.state:

````json
  "response": {
    "status": {
      "code": 200,
      "message": "OK"
    },
    "items": [
      {
        "id": "cdbg-3ccf1234",
        "groupId": "sig-87231234",
        "state": "STARTING",
        "config": {
          "timeout": 20,
          "tags": [
            {
              "tagKey": "ver",
              "tagValue": "pink"
            }
          ],
````

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egssh">Azure: Can I use SSH to connect to an Azure VM?</summary>

  <div style="padding-left:16px">

Yes, you can connect using SSH to a VM running:

* [Linux](https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Linux)
* [Windows](https://learn.microsoft.com/en-us/azure/virtual-machines/windows/connect-ssh?tabs=azurecli)

   </div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egimportvm">Azure: Why am I getting a <i>Failed to import virtual machine</i> or <i>The create/import has failed</i> message?</summary>

  <div style="padding-left:16px">

  You may get one of these error messages when you're trying to import VMs to Elastigroup:

*   `Failed to import virtual machine. Could not retrieve custom image.`
*   `The create/import has failed. The storage account https://{storage-account} that was defined for the boot diagnostic preferences was not found.”`

This can happen when the image or storage account does not exist in the Azure portal. Elastigroup validates the resources configured in the VM before importing to make sure the import process will not fail.

**Failed to import virtual machine**

One of the resources checked is the image, which is taken from the VM JSON configuration file.

If you get the `Failed to import virtual machine. Could not retrieve custom image.` message, it means that Elastigroup couldn't find the custom image configured.
 
Find the name of the image in the Azure console. Go to **VM details** > **JSON view** > **imageReference**.

**The create/import has failed**

The storage account `<Service account>` that was defined for the boot diagnostic preferences was not found.

Before starting the import process, Elastigroup verifies that the service account configured exists in the subscription.

This error means that Elastigroup didn't find a valid storage account in the subscription.

Find the storage account URL in the Azure console. Go to **VM details** > **JSON view** > **diagnosticsProfile**.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egreqdisallowed">Azure: Why am I getting a <i>Failed to launch VM with RequestDisallowedByPolicy</i> message?</summary>

  <div style="padding-left:16px">

When an instance is imported or launched, you may see this message in the Spot console:

````
ERROR Failed to launch virtual machine. Azure error code : RequestDisallowedByPolicy, message : Resource xxxxx was disallowed by policy. Policy identifiers: '[{"policyAssignment":{"name":"Allowed virtual machine size SKUs","id":"/providers/Microsoft.Management/managementGroups/mgid-bcbsri-root-001/providers/Microsoft.Authorization/policyAssignments/xxxxxx"},"policyDefinition":{"name":"Allowed virtual machine size SKUs","id":"/providers/Microsoft.Authorization/policyDefinitions/xxxxx"}}]'
````

This can happen if the policy limits launching VMs, which would limit launching instances.

Check the policy definition and policy assignment included in the message. See what part of the policy is [blocking deployment](https://learn.microsoft.com/en-us/azure/azure-resource-manager/troubleshooting/error-policy-requestdisallowedbypolicy).

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egjenkinsvm">Azure: Why is my VM showing offline in the Jenkins console?</summary>

  <div style="padding-left:16px">

You may have a VM showing as offline in the Jenkins console, but you can see that it’s running in the Azure console and in Spot’s Elastigroup.

You can see this message in the Jenkins console:

````
IP for agent is not available yet not attaching SSH launcher
````

This can happen if you launch agents via SSH and not JNLP, <b><i>and</i></b> you’re using private IPs configured in Elastigroup, but not in the Jenkins plugin. The Jenkins plugin then establishes a connection using a public IP.

Make sure your Jenkins plugin is set to use Private IPs.

<img width=450 src="https://github.com/user-attachments/assets/15ed0fa6-48f8-473f-9c00-784d90bccf3a">

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eggrace">GCP: How does the grace period work?</summary>

  <div style="padding-left:16px">

If an Elastigroup has a [grace period](https://docs.spot.io/api/#tag/Elastigroup-GCP/operation/elastigroupGcpUpdate) of 1,000 seconds, the old instances are only detached after the full grace period of 1,000 seconds ends.

You can [decrease the grace period](https://docs.spot.io/api/#tag/Elastigroup-GCP/operation/elastigroupGcpDeploy) for faster deployment.

   </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcuds">GCP: Can I set up committed use discounts?</summary>

  <div style="padding-left:16px">
     
You can set up committed use discounts (CUDs) for clusters in Ocean and groups in Elastigroup. It cannot be used for virtual node groups.

Set up committed use discounts for:
* [Ocean](ocean/features/committed-use-discount)
* [Elastigroup](elastigroup/features/gcp/commit-use-discount)

   </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eggcpdisksize">GCP: Why am I getting an <i>Invalid value for field error</i> (disk size)?</summary>

  <div style="padding-left:16px">
  You can get this message if instances aren’t starting:

````
Invalid value for field 'resource.disks[0].initializeParams.diskSizeGb': '80'. Requested disk size cannot be smaller than the image size (100 GB)
````

You need to increase the disk size for the Elastigroup:

1. Go to the Elastigroup in the Spot console and click **Actions** > **Edit Configuration** > **Compute**.
2. Update **Boot Disk** > **Disk Size** to be bigger than the configured disk size for the image.
 
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbootdisk">GCP: Why can’t I spin new instances (boot disk architecture)?</summary>

  <div style="padding-left:16px">

If Elastigroup isn’t launching a VM, you might get this log message:

````
Can’t Spin Instance: Name: sin-abcd. Code: Error, Message: Invalid resource usage: 'Requested boot disk architecture (X86_64) is not compatible with machine type architecture (ARM64).'
````

This can happen because Elastigroup doesn’t validate VM architecture for GCP. You can [troubleshoot this error](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-arm-vms#errors_when_updating_vms) in GCP.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcaleup">GCP: Why am I getting a zone_resource_pool_exhausted (scale up) error?</summary>

  <div style="padding-left:16px">

You may get this log message when a VM is trying to scale up or launch VMs:

````
Can't Spin Instance: Name: abcde. Code: ZONE_RESOURCE_POOL_EXHAUSTED_WITH_DETAILS,
Message: The zone 123 does not have enough resources available to fulfill the request, '(resource type:compute)'.
````

This can happen if the specific VM family and size aren’t available for a certain zone at the moment. Elastigroup or Ocean will try to automatically spin up a different VM in a different zone to compensate.

   </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egelasticsearch2">Integration: Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) add this code to the JSON:
     ````json
	 "logging": {
       "export": {
         "s3": {
           "id": "di-123"
         }
       }
     }
     ````

 </div>

 </details>

 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="spotinstagentlogs">Integration: Can I disable Spotinst Agent logging?</summary>

  <div style="padding-left:16px">

You can run this script to stop Spotinst-Agent from sending logs to syslog:

````
sed -i 's/[Service]/[Service]\nStandardOutput=null\nStandardError=null/g' /lib/systemd/system/spotinst-agent.service
systemctl daemon-reload
systemctl restart spotinst-agent
````

 </div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="keepjenkinsalive">Integration: Can I keep Jenkins Agent alive after a job finishes?</summary>

  <div style="padding-left:16px">

You can prevent an immediate termination of a specific spot instance that acted as an agent and carried out a certain Jenkins job. For example, this can be useful if you want to:

* Start additional jobs immediately after
* Optimize resource utilization
* Debug or review logs

<i>Idle minutes before termination</i> defines how long the Spot plugin should wait before terminating an idle instance.

Increase the <i>Idle minutes before termination</i> in the [Spot Jenkins plugin](tools-and-provisioning/ci-cd/jenkins).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="jenkinsretrigger">Integration: Can I trigger the same Jenkins job on a different instance if it was interrupted?</summary>

  <div style="padding-left:16px">

You can [retrigger the Jenkins job automatically](tools-and-provisioning/ci-cd/jenkins) if a node is interrupted. The interrupted job parameters are transferred to the new job.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkvariables">Integration: Is maintenance mode needed when I add Beanstalk environment variables?</summary>

  <div style="padding-left:16px">

Beanstalk [environment variables](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html) are part of the application managed on the Beanstalk side, independently from the Elastigroup. Variables are automatically picked by instances that Spotinst launches into the environment.

Add variables in the [Elastic Beanstalk console](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html?icmpid=docs_elasticbeanstalk_console#environments-cfg-softwaresettings-specific). Maintenance mode is not required as this change does not affect the infrastructure.

 </div>
 
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkgrouperror">Integration: Why am I getting a <i>group is in error state</i> message when I try to delete an Elastigroup Beanstalk from the Spot console?</summary>

  <div style="padding-left:16px">

If you get this message when you try to delete an Elastigroup Beanstalk from the Spot console:

````
Group is in ERROR state and not in READY state, cannot delete it
````

You need to put the group in maintenance mode and detach the remaining instances, then you can delete the Elastigroup. 

Keep in mind, you cannot delete a Beanstalk group if:
* The attached Beanstalk group was deleted.
* One of the resources was deleted, such as a security group or Elastic Beanstalk.

If you get an error, you can force delete the group by deselecting **Rollback beanstalk configuration**.
  
If you need to attach a Beanstalk environment, you can manually [rebuild your Beanstalk environment](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-management-rebuild.html).


 </div>

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsnreg">AWS, Azure, GCP:  What regions does Spot support for my cloud provider?</summary>

 <div style="padding-left:16px">

**AWS Regions**

us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, sa-east-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, ap-south-1, me-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-east-1, cn-north-1, cn-northwest-1, ap-northeast-3, af-south-1, eu-south-1, us-gov-east-1, us-gov-west-1, cn-north-1, cn-northwest-1.

**Azure Regions**

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas, us-gov-virginia, west-us, west-us-2, west-us-3.

**GCP Regions**

us-east1, us-east1, us-east1, us-east4, us-east4, us-east4, us-central1, us-central1, us-central1, us-central1, us-west1, us-west1, us-west1, europe-west4, europe-west4, europe-west4, europe-west1, europe-west1, europe-west1, europe-west3, europe-west3, europe-west3, europe-west2, europe-west2, europe-west2, asia-east1, asia-east1, asia-east1, asia-southeast1, asia-southeast1, asia-southeast1, asia-northeast1, asia-northeast1, asia-northeast1, asia-south1, asia-south1, asia-south1, australia-southeast1, australia-southeast1, australia-southeast1, southamerica-east1, southamerica-east1, southamerica-east1, asia-east2, asia-east2, asia-east2, asia-northeast2, asia-northeast2, asia-northeast2, europe-north1, europe-north1, europe-north1, europe-west6, europe-west6, europe-west6, northamerica-northeast1, northamerica-northeast1, northamerica-northeast1, us-west2, us-west2, us-west2.

</div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="snodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1. If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2. If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3. If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4. If there is any free compute service plan commitment, then the instance is a savings plan.
5. Otherwise, the instance will run as a full-price on-demand instance.

Throughout the lifetime of an instance, it can change its “price” whenever there’s any change in the commitments utilization rate. For example, if an instance is running as a full price on-demand instance, and another instance that was utilizing a compute savings plan commitment was terminated, the first instance will start utilizing this commitment if its hourly price rate has enough free space under this commitment. It might take a couple of minutes for this change to show, but since the billing is being calculated retroactively, in practice it’s starting to utilize the commitment right away.
   
 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsnimds">AWS: How can I update the instance metadata (IMDS) in my cluster?</summary>

<div style="padding-left:16px">

Instance metadata service (IMDS) is data about your instance that you can use to configure or manage the running instance or virtual machines. IMDS comes from the cloud providers. The metadata can include instance ID, IP address, security groups, and other configuration details.
Instance metadata service version 2 (IMDSv2) addresses security concerns and vulnerabilities from IMDSv1. IMDSv2 has more security measures to protect against potential exploitation and unauthorized access to instance metadata.

**Scenario 1: Ocean and Elastigroup**

You can define metadata for autoscaling groups in AWS that gets imported when you import the groups from AWS to Spot. You can manually configure them in Spot to use IMDSv2.

1. Follow the [Ocean AWS Cluster Create](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Elastigroup AWS Create](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) API instructions and add this configuration for the cluster:
   ````json
   "compute": {
    "launchSpecification": {
        "instanceMetadataOptions": {
            "httpTokens": "required",
            "httpPutResponseHopLimit": 12,
            "httpEndpoint": "enabled"
          }
      }
    }
   ````

2. Apply these changes to the currently running instances so the clusters are restarted and have the new definitions:
    * [Deploy an Elastigroup](https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup?id=deploy-an-elastigroup)
    * [Roll an Ocean cluster](https://docs.spot.io/ocean/features/roll-gen)

**Scenario 2: Stateful Node**

When a stateful managed node is imported from AWS, Spot creates an image from the snapshot. When an instance is recycled, the metadata configuration is deleted and changes to IMDSv1.

You can use your own AMI and configure IMDSv2 on it. All instances launched after recycling will have IMDSv2 by default.

1. Configure IMDSv2 on your AMI:
    * If you're creating a new AMI, you can add IMDSv2 support using AWS CLI:
     ````
      aws ec2 register-image Let me know if there is anything else I can help you with.
      --name my-image \
      --root-device-name /dev/xvda \
      --block-device-mappings DeviceName=/dev/xvda,Ebs={SnapshotId=snap-0123456789example} \
      --imds-support v2.0
     ````

    * If you use an existing AMI, you can add IMDSv2 using AWS CLI:
      ````
      aws ec2 modify-image-attribute \
      --image-id ami-0123456789example \
      --imds-support v2.0
   ````

3. In the Spot console, [create a stateful node](https://docs.spot.io/managed-instance/getting-started/create-a-new-managed-instance) with the custom AMI.
   
 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-delete">AWS: Are stateful node resources deallocated when I delete an instance?</summary>

  <div style="padding-left:16px">

   <p>When you delete a stateful node, you can choose what gets deallocated using:</p>

   * [The Spot console](managed-instance/features/data-volume-persistence?id=deallocated)

   * [Terraform](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/stateful_node_aws#delete)

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssnconvert">AWS: Can I convert a stateful node to a stateful Elastigroup?</summary>

  <div style="padding-left:16px">

   You can reimport the stateful instance to Elastigroup:

   1. In the Spot console, go to **Elastigroup** > **Stateful Nodes**, select the stateful node, and click **Actions** > **Edit Configuration**.
   2. Go to **Review** > **JSON** and select **Edit Mode**.
   3. Change <b>lifeCycle</b> to <i>on_demand</i> and click **Update**. For example:

       ````json
	   "strategy": {
          "lifeCycle": "on_demand”,
       ````

   4. [Recycle](managed-instance/features/replacement-process) the stateful node to launch an on-demand instance.
   5. Wait until the new on-demand instance is running and healthy in the Spot console.
   6. When you [delete](managed-instance/features/managed-instance-actions?id=delete) the stateful node, select **Terminate VM** <i>no</i>.
   7. Make sure the stateful node <i>is not</i> running in the Spot console.
   8. In the AWS console, make sure the stateful node instance <i>is</i> running.
   9. In the Spot console, [import a stateful node](managed-instance/getting-started/join-an-existing-managed-instance).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-deletedeni">AWS: What happens if an elastic network interface (ENI) is deleted?</summary>

  <div style="padding-left:16px">

When an elastic network interface (ENI) is deleted, the stateful node tries to create a new ENI. If the stateful node can’t create a new ENI for the specific free IP, you will get a message that the ENI doesn’t exist. Elastigroup rolls back the node to a paused state.

When the IP is in use, the node is rolled back. You can see more information in the Spot console. Go to **Elastigroup** > **Stateful Nodes** and select the node. In the node:

* You can see a message with the details.
* On the Log tab, you can see an entry with the details.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-ippersist">AWS: What happens if a node has IP persistence and its security groups are updated?</summary>

  <div style="padding-left:16px">

If a stateful node has [IP persistence](managed-instance/features/network-persistence), the persistent elastic network interface (ENI) is set with the node’s current security groups. When the node resumes:

* If the ENI has security groups that aren’t in the node, the security nodes are removed from the ENI.
* If the group has security groups that aren’t in the ENI, the security nodes are added to the ENI.

 </div>

 </details>
 

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-publicip">AWS: Can I use a public IP if the node has private IP persistence?</summary>

  <div style="padding-left:16px">

   Depending on your setup, you can assign a public IP:

   * If the instance has [Elastic IP](managed-instance/features/network-persistence?id=public-ip-persistence), you can assign a public IP after it is launched.
  
   * You can assign a public IP before launching an instance, or set up the subnet for [automatically assigning public IPs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#vpc-public-ipv4-addresses) when launching a new instance.

   * If the instance has private IP persistence, you need to:
   
      <ol style="list-style-type: lower-alpha;">
      <li>In the AWS console, enable <a href="https://docs.aws.amazon.com/vpc/latest/userguide/subnet-public-ip.html">auto-assign IPv4</a>.</li>
      <li>In the Spot console, <a href="https://docs.spot.io/managed-instance/features/managed-instance-actions?id=pause">pause</a> the stateful node.</li>
      <li>Edit the stateful node > <b>Advanced</b> > <b>Public IP Assignment</b> and select <i>According to subnet default</i> or <i>Associate public IP</i>.</li>
      <li>In the AWS console, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/delete_eni.html">delete the ENI</a>.</li>
      <li>In the Spot console, <a href="https://docs.spot.io/managed-instance/features/managed-instance-actions?id=resume">resume</a> the stateful node. This will create a new ENI with the private IP from the IP pool and assign it with a public IP according to the subnet settings.</li>
     </ol>

 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-statichostname">AWS: Can I use a static hostname?</summary>

  <div style="padding-left:16px">

Normally, AWS automatically sets the hostname when the instance is launched. It’s based on the instance’s private IPv4 address.

You can set a custom hostname that will continue to be used during the recycle process:

1. Edit the hosts file and change the name permanently: `sudo gedit /etc/hostname /etc/hosts`
2. Update the CUSTOM_HOSTNAME:

    ````
    #!/bin/bash
     CUSTOM_HOSTNAME="my-custom-hostname"
     echo "preserve_hostname: true" > /etc/cloud/cloud.cfg.d/99_persist_hostname.cfg
     echo "$CUSTOM_HOSTNAME" > /etc/hostname
     sed -i "s/^127\.0\.0\.1.*/127.0.0.1 localhost $CUSTOM_HOSTNAME/" /etc/hosts
     hostnamectl set-hostname "$CUSTOM_HOSTNAME"
    ````

If you want to use the instance IPv4 address that the node was originally launched with:

1. In the metadata file, get the instance IP: `curl -s http://169.254.169.254/latest/meta-data/local-ipv4`
2. Make sure <b>Persist Private IP</b> is configured. The custom hostname should also persist during replacement because the hostname is connected to the persistent IP.

    <ol style="list-style-type: lower-alpha;">
    <li>Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b>.</li>
    <li>Click <b>Persistent Resources</b> > <b>Network</b>.</li>
    <li>Select <b>Persist Private IP</b> and enter the IP address.</li>
    </ol>

3. In the user data, update the script:

    <ol style="list-style-type: lower-alpha;">
    <li>Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b> > <b>Initialization and Termination</b>.</li>
    <li><p>Add this script to <b>User Data</b>:</p>

      ````
	    #!/bin/bash
       PRIVATE_IP=$(curl -s http://169.254.169.254/latest/meta-data/local-ipv4)
       AWS_HOSTNAME="ip-$(echo $PRIVATE_IP | tr '.' '-')"
       echo "preserve_hostname: true" > /etc/cloud/cloud.cfg.d/99_persist_hostname.cfg
       echo "$AWS_HOSTNAME" > /etc/hostname
       sed -i "s/^127\.0\.0\.1.*/127.0.0.1 localhost ${AWS_HOSTNAME}/" /etc/hosts
       hostnamectl set-hostname "$AWS_HOSTNAME"
    ````
    </li>
   </ol>

You can also persist the hostname for [RHEL 7, 8, and 9, and CentOS 7, 8, and 9](https://repost.aws/knowledge-center/linux-static-hostname-rhel7-centos7).

 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsn-stopped">AWS: Why am I getting an <i>Instance have been detected as stopped</i> error?</summary>

  <div style="padding-left:16px">

   You can see this error in the log:
   
   ````
   WARN, Instance: [i-01234567890abcdefg] have been detected as Stopped.
````

   It's possible to [stop an instance in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html), but Spot doesn't support the Stop action. This causes out-of-sync issues.

   Restart the instance in AWS, then the Elastigroup will sync again. Use [Pause/Resume](/managed-instance/features/managed-instance-actions?id=stateful-node-actions) instead of Stop.
   
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsn-stopped2">AWS: Why am I getting a <i>botocore.exceptions.ClientError</i> error?</summary>

  <div style="padding-left:16px">

   You may get this error:
   
   ````
   botocore.exceptions.ClientError: An error occurred (UnsupportedOperation) when calling the StopInstances operation: You can't stop the Spot Instance {Instance-ID} because it is associated with a one-time Spot Instance request. You can only stop Spot Instances associated with persistent Spot Instance requests.
````

   It's possible to [stop an instance in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html), but Spot doesn't support the Stop action.
   
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-bdm">AWS: Why am I getting a <i>Volume of size</i> (InvalidBlockDeviceMapping) error?</summary>

  <div style="padding-left:16px">

You get this message:

````
ERROR, Can't Spin Spot Instances: Code: InvalidBlockDeviceMapping, Message: Volume of size xx GB is smaller than snapshot 'snap-xxx', expect size >= xx GB"
````

If the current volume size is updated, it can cause a mismatch between the volume size and the AMI snapshot size.

Update the block device mapping configuration and increase the volume size to match the AMI snapshot size:

1. In the stateful node, go to **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**.
2. Update the group configuration and click **Update**.

   ````json
           "blockDeviceMappings": [
                {
                    "deviceName": "/dev/sda1",
                    "ebs": {
                        "deleteOnTermination": false,
                        "volumeSize": 1500,
                        "volumeType": "GP2"
                    }
                }
            ]
   ````

3. Start a [resume action](managed-instance/features/managed-instance-actions?id=resume).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-memutil">AWS: Why am I getting a <i>No data to display</i> message in the stateful node > Monitoring > Memory Utilization?</summary>

  <div style="padding-left:16px">

Memory utilization graphs require the [CloudWatch agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html). If you don’t have CloudWatch set up, you’ll get a message in the Spot console when you try to view the memory utilization for a stateful node.

You can set up [CloudWatch agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) and then [create](managed-instance/getting-started/create-a-new-managed-instance) or [import](managed-instance/getting-started/join-an-existing-managed-instance) a stateful node.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="increaseramcpu">Azure: Can I increase RAM or CPU for osDisk and dataDisk on a stateful node?</summary>

  <div style="padding-left:16px">

Yes, you can update the RAM and CPU for an osDisk and dataDisk on a stateful node:

**CPU**

You can change the osDisk size and dataDisk size used to launch VMs with this API call: https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeUpdate.

![update-osdisk-datadisk1](https://github.com/spotinst/help/assets/167069628/a5b8fdd9-7e62-460c-bdf3-d77d0f47df4c)

You can also [update the osDisk and dataDisk size](https://docs.spot.io/managed-instance/azure/features/persist-os-data-disks) in the stateful node’s JSON. Go to **Edit Node** > **Review** > **JSON**.

**RAM size**

You can only update the RAM size in the Azure portal or change the VM sizes in your configuration to have a higher RAM:
* https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series/
* https://learn.microsoft.com/en-us/answers/questions/679311/azure-vm-increase-decrease-ram-dinamically

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="increasedisk">Azure: Can I increase the disk size for stateful nodes?</summary>

  <div style="padding-left:16px">

Yes, you can increase the disk size for stateful nodes.

* If you have reattach persistance for OS disk:
   1. [Pause the stateful node](https://docs.spot.io/managed-instance/features/managed-instance-actions?id=pause) in the Spot console.
   2. Once the stateful node is paused, open the Azure Portal and click **Disks**.
   3. Click **Custom Disk Size**, update the disk size, and save the changes.
   4. [Change the Performance Tier](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-performance-tiers-portal#change-performance-tier).
   5. Resume the stateful node in the Spot console.

* If you have on-launch OS disk persistance:

   1. In the Azure portal, [take a snapshot of the OS disk](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk) running the stateful node (VM).
   2. [Create a new disk](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk#next-steps) from the snapshot and change the disk size.
   3. You might also need to [change the performance tier](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-performance-tiers-portal#change-the-performance-tier-of-an-existing-disk).
   4. In the Spot console, [pause the stateful node](managed-instance/features/managed-instance-actions?id=pause).
   5. Go to **Actions** > **Swap OS Disk**.
   6. Select the **Resource Group** and **New Disk Name**, and click **Update & Resume**.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="azurestatefulnode">Azure: Can I delete an Azure stateful node and manage it in the Azure console?</summary>

  <div style="padding-left:16px">

   1. Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b>.

   2. Go to <b>Review</b>, switch to <b>JSON review</b>, and select <b>Edit Mode</b>.

   3. Change `revertToSpot` to <i>never</i>:

      ````json
      {
       "statefulNode": {
         "name": "Spot Stateful Node",
         "region": "westus2",
         "resourceGroupName": "spotResourceGroup",
         "description": "This is my example stateful node",
         "strategy": {
           "fallbackToOd": true,
           "drainingTimeout": 120,
           "preferredLifecycle": "od",
           "revertToSpot": "never",
           "optimizationWindows": null,
      ````

   4. Add the `"preferredLifecycle": "od",` parameter:
   
      ````json
      {
       "statefulNode": {
         "name": "Spot Stateful Node",
         "region": "westus2",
         "resourceGroupName": "spotResourceGroup",
         "description": "This is my example stateful node",
         "strategy": {
           "fallbackToOd": true,
           "drainingTimeout": 120,
           "preferredLifecycle": "od",
           "revertToSpot": "never",
           "optimizationWindows": null,
      ````

   5. [Recycle the stateful node](https://docs.spot.io/managed-instance/azure/features/actions).
   6. Make sure the stateful node is not running on the Spot VM.
   7. Go to <b>Edit Node</b> and delete the node.

      <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">
   
   8. In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.
   9. Verify that the VM with the resources is running in Azure.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssnchangesub">Azure: Can I move stateful node resources to a new Azure subscription?</summary>

  <div style="padding-left:16px">

   You can change your existing subscription and move the resources to a new Azure subscription:

   1. Deallocate the running VMs:

       <ol style="list-style-type: lower-alpha;">
      <li>Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b>.</li>
      <li>Go to <b>Review</b>, switch to <b>JSON review</b>, and select <b>Edit Mode</b>.</li>
      <li><p>Change `revertToSpot` to <i>never</i>:</p>
        
         <pre><code>
      {
       "statefulNode": {
         "name": "Spot Stateful Node",
         "region": "westus2",
         "resourceGroupName": "spotResourceGroup",
         "description": "This is my example stateful node",
         "strategy": {
           "fallbackToOd": true,
           "drainingTimeout": 120,
           "preferredLifecycle": "od",
           "revertToSpot": "never",
           "optimizationWindows": null,
	  </code></pre>
      </li>
      <li><p>Add the `"preferredLifecycle": "od",` parameter:</p>
        
         <pre><code>
      {
       "statefulNode": {
         "name": "Spot Stateful Node",
         "region": "westus2",
         "resourceGroupName": "spotResourceGroup",
         "description": "This is my example stateful node",
         "strategy": {
           "fallbackToOd": true,
           "drainingTimeout": 120,
           "preferredLifecycle": "od",
           "revertToSpot": "never",
           "optimizationWindows": null,
         </code></pre>
	 
      </li>
      <li><a href="https://docs.spot.io/managed-instance/azure/features/actions">Recycle the stateful node</a>.</li>
      <li>Make sure the stateful node is not running on the Spot VM.</li>
      <li><p>Go to <b>Edit Node</b> and delete the node.</p>
         <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">
      </li>
      <li>In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.</li>
      <li>Verify that the VM with the resources is running in Azure.</li>
       </ol>
   2. [Move the Azure resources to a different subscription](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription).
   3. [Connect your Azure subscription](connect-your-cloud-provider/first-account/?id=connect-azure).
   4. [Import a stateful VM](managed-instance/azure/getting-started/import-stateful-node).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssnnotboot">Azure: Why isn’t my VM booting after recycling?</summary>

 <div style="padding-left:16px">

If the VM agent isn’t ready after recycling, it could be because the VM device name changed.

If you’re using a Linux storage device driver with several devices, the driver assigns major and minor numbers from the availability range to the device.

You should [troubleshoot Linux VM device name changes](https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/linux/troubleshoot-device-names-problems). For example, you can use device names that persist when rebooting:

* Filesystem label
* UUID
* Derived device path

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssnlrs">Azure: Why are my stateful nodes not importing/launching (LRS/ZRS)?</summary>

 <div style="padding-left:16px">

If your stateful nodes aren’t importing or launching, check the disk type and zone. If your disk type (storageAccountType) is:

* [Locally redundant storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy#locally-redundant-storage) (standard_LRS or premium_LRS), you must have a **zone** defined (it can’t be <i>null</i>).
* [Zone redundant storage for managed disks](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy#zone-redundant-storage) (standard_ZRS or premium_ZRS), the **zone** can be  <i>null</i>.

If you want to use a regional disk (**zone** = <i>null</i>), you need to use ZRS disks.

 </div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssnrevert">Azure: Why is my on-demand instance reverting to spot outside of my configured hours?</summary>

 <div style="padding-left:16px">

Let’s say you want your on-demand instances to revert to spot instances daily, Monday through Friday, between 9 AM and 8 PM. You need to set your [optimization hours](managed-instance/azure/getting-started/create-stateful-node?id=availability-settings) for each day between those hours. For example:

1. In the Spot console, go to **Elastigroup** > **Stateful Nodes** and select the node.
2. Click **Actions** > **Edit Configuration**.
3. Go to **Compute** > **Availability Settings**.
4. In **Continuous Optimization** > **Custom**, you need to set the timeframe for each day. For example, if you want your on-demand instances to revert to spot instances daily, Monday through Friday, between 9 AM and 8 PM, you need to select:

   * **From**: <i>Monday</i>, **start time**: <i>09:00</i>, **to**: <i>Monday</i>, **end time**: <i>20:00</i>.
   * **From**: <i>Tuesday</i>, **start time**: <i>09:00</i>, **to**: <i>Tuesday</i>, **end time**: <i>20:00</i>.
   * **From**: <i>Wednesday</i>, **start time**: <i>9:00</i>, **to**: <i>Wednesday</i>, **end time**: <i>20:00</i>.
   * **From**: <i>Thursday</i>, **start tim**e: <i>09:00</i>, **to**: <i>Thursday</i>, **end time**: <i>20:00</i>.
   * **From**: <i>Friday</i>, **start time**: <i>09:00</i>, **to**: <i>Friday</i>, **end time**: <i>20:00</i>.

   Keep in mind, if you select **From**: <i>Monday</i>, **start time**: <i>09:00</i>, **to**: <i>Friday</i>, **end time**: <i>20:00</i>, it will set <i>the entire time</i> between Monday at 9 AM all the way through Friday at 8 PM, <i>not daily</i> between 9 AM and 8 PM. This means that your on-demand instances can revert to spot instances past 8 PM on Mondays, Tuesdays, Wednesdays, and Thursdays.

 </div>

 </details>

<!----------------------------------cost intelligence---------------------------------->

## Cost Intelligence

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="cinotconnaws">AWS: Why do I have a <i>Not Connected</i> message for my AWS account?</summary>

 <div style="padding-left:16px">

If you are getting this message for your health check on the Cost Intelligence Administration page:

![faq-1](https://github.com/user-attachments/assets/6c19d832-8077-472a-90dc-08a4903d409e)

Review the [Cost Intelligence Policy](cost-intelligence/tutorials/cost-intelligence-policy/) documentation and ensure the Cloud Formation stack providing the ARN has not been changed and the permissions have not changed. Additionally, ensure no AWS Service Control Policies restrict access.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="cipartialcon">AWS: Why do I have a <i>Partially Connected</i> message in the health check for my AWS account?</summary>

 <div style="padding-left:16px">

If you are getting this message for your health check on the Cost Intelligence Administration page:

![faq-2](https://github.com/user-attachments/assets/6a972653-ed6c-4b82-954d-c19ca17f4d96) 

Review the [Cost Intelligence Policy](cost-intelligence/tutorials/cost-intelligence-policy/) documentation and ensure the permissions have not changed and that the required permissions are not missing. Additionally, ensure no AWS Service Control Policies restrict access. If nothing has changed, it is possible something else is blocking access (example: resource-level access controls) to the listed services for that account. 

</div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="cinotconnazure">Azure: Why do I have a <i>Not Connected</i> message for my Azure account?</summary>

If you are getting this message for your health check on the Cost Intelligence Administration page:

![faq-3](https://github.com/user-attachments/assets/9f8bbe01-8266-4e39-ba1a-d421d85efc2b)

The connected Azure App Registration or the App Secret Key may have expired. You need to update your Spot Account credentials using the [Spot API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure).

</div>

 </details>

<!----------------------------------eco---------------------------------->

## Eco

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecosavings">How are savings calculated when I purchase reserved instances?</summary>

  <div style="padding-left:16px">

   Eco gathers data about all of your instances before you are using reserved instances. Savings are calculated each month. This means that you are not charged at the purchasing moment, but for each month separately. The calculation of each purchase is multiplied by the number of instances. For example, Eco purchases one reserved instance at a price of $24 for a duration of one year (amounting to $2 per month). Running an on-demand instance would cost $3 per month. Therefore, Eco saves you $1 per month, and you are charged based on $1 savings each month.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecospot">Does Eco also recommend Spot instances in the projected savings?</summary>

  <div style="padding-left:16px">

   Eco is a tool for management and optimization of commitment discounts (reservations and savings plans). The projected savings by using Eco relate to commitments. You can use Eco for managing commitments in your organization, while using Elastigroup or Ocean to optimize the combined use of Spot and reserved instances in the workload.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoexistingri">If my management account already has reserved instances when I install Eco, how are the savings calculated?</summary>

  <div style="padding-left:16px">

   Eco charges only for the reserved instances that have a start date after Eco started.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoridiscounts">How does ECO consider reserved instance volume discounts?</summary>

  <div style="padding-left:16px">

   Reserved instance volume discounts drive the cost of reservations down. When Eco makes a large reserved instance purchase which generates the reserved instance volume discount, it is by design. Eco includes the cost reductions in the net savings calculations, which may impact your Eco fee.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecolease">What does the reservation end date mean for renewals?</summary>

  <div style="padding-left:16px">

When a reservation expires, Eco first makes sure a renewal is the right course of action. If so, expired coverage is replaced with the best commitment to provide a blend of flexibility and savings. When an expiration is renewed, a new lease ID is created. Depending on the situation, an expired reservation may be renewed under different parameters, so do not be concerned if you do not see an exact match.

 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecopolicy">AWS: Is there a best practice template for limiting a policy?</summary>

 <div style="padding-left:16px">

You can use the [AWS restricted Eco policy](https://github.com/spotinst/spotinst-examples/blob/master/Policies/AWS/Spot-AWS-Eco-Restricted-Full-Permission.json).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecosellfee">AWS: Does the pricing for Eco include the AWS charge for selling reserved instances in the marketplace?</summary>

  <div style="padding-left:16px">

   If there is a fee for selling on the marketplace, you pay AWS based on the current AWS selling fee. Eco pricing is based on the actual savings you achieve.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoconvri">AWS: If I have convertible AWS reserved instances, does the savings recommendation include the savings by exchanging these?</summary>

  <div style="padding-left:16px">

   Yes. Eco is not able to sell convertible reserved instances. It can only replace them with other reserved instances under AWS constraints. Therefore, Eco suggests how to manage your convertibles. Also, Eco may purchase convertibles for you.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econonus">AWS: Can I connect my bank account to the AWS marketplace if my company is not in the United States?</summary>

  <div style="padding-left:16px">

   Contact your account manager for more information.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecos3">AWS: Why does Eco need to sync my S3 bucket instead of just reading it?</summary>

  <div style="padding-left:16px">

Eco [syncs your S3 bucket](eco/tutorials/eco-policy/?id=s3) to Spot instead of reading the data each time from your S3 bucket. This improves response time and reduces your costs. Also, if you delete your S3 bucket, then Spot still has the historical data saved.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoarn">AWS: Why am I getting an <i>Invalid ARN</i> message?</summary>

  <div style="padding-left:16px">

   Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco and compare it to your management account resources. Make sure the CloudFormation stack providing the ARN has not been changed. Additionally, make sure no AWS Service Control Policies restrict access.

Contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econos3-1">AWS: Why am I getting a <i>No access to S3 bucket</i> message?</summary>

  <div style="padding-left:16px">

   There are insufficient permissions. Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco. Confirm that the S3 bucket still exists, bucket policies and Service Control policies have not changed, and the Cost and Usage report is still scheduled to create data within the bucket.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econos3-2">AWS: Why am I getting a <i>S3 bucket no longer exists</i> message?</summary>

  <div style="padding-left:16px">

   Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco. Confirm that the S3 bucket still exists, bucket policies and Service Control policies have not changed, and the Cost and Usage report is still scheduled to create data within the bucket.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econos3-3">AWS: Why am I getting a <i>No new data in S3 bucket for over 48 hours</i> message?</summary>

  <div style="padding-left:16px">

   Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco. Confirm that the Cost and Usage report is still scheduled to create data within the bucket.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econoce">AWS: Why am I getting a <i>No CE access</i> message?</summary>

  <div style="padding-left:16px">

Make sure the [Eco permissions policy](eco/tutorials/eco-policy/?id=account-billing-cost-explorer-cost-and-usage-report-invoicing-payments-and-taxes) includes reading Cost Explorer data.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econodataaccess">AWS: Why am I getting a <i>We were not able to access data in the S3 bucket</i> message?</summary>

  <div style="padding-left:16px">

This is normal if the AWS CUR was only recently configured. If your CUR was configured more than 48 hours ago, submit a [support ticket](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecofailure">AWS: Why am I getting a <i>Failure to retrieve data</i> message?</summary>

  <div style="padding-left:16px">

   If you get a `Failure to retrieve data from < bucket >. Last Successful sync is < insert last_cur_sync_timestamp >. Expecting parquet format.` message, review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econodataaws">AWS: Why don't I see data in the Eco Dashboard?</summary>

  <div style="padding-left:16px">

If you cannot see data in the Eco Dashboard, check if:

* 48 hours have passed since registration with Eco. Data appears for the first time 48 hours after registration.
* The S3 bucket name is missing. Verify that the bucket name you inserted during your registration to Eco appears in the AWS Cost and Usage report list.
* The IAMRole permissions may be missing or incorrect. Verify that your permissions are complete and the same as in the [Eco Policy](eco/tutorials/eco-policy/).

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecotenantid">Azure: Why I am getting an <i>Invalid credentials</i> (tenant ID doesn't match) message?</summary>

  <div style="padding-left:16px">

   If you get a `Tenant ID in request does not match tenant ID where Eco Azuer app was consented` message during setup, make sure to sign in to the Azure tenant that you would like to register for Eco.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoinvalidbilling">Azure: Why I am getting a billing permission message?</summary>

  <div style="padding-left:16px">

   If you get a `Permission is not valid, pleae update permissions as needed and try again` message during setup, make sure you have <i>billing account admin</i> access to Azure. Check your access:

* [Enterprise agreement](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/direct-ea-administration#add-another-enterprise-administrator)
* [Microsoft customer agreement](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-mca-roles)

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoreservation">Azure: Why I am getting a <i>Registration failure</i> (permission is not valid) message?</summary>

  <div style="padding-left:16px">

If you get a `Permission is not valid, pleae update permissions as needed and try again` message during setup, make sure you have <i>reservation admin</i> access to Azure. [Check your access](https://blog.hametbenoit.info/2022/08/03/azure-you-can-now-delegate-management-of-reservations/#.ZDmJ7OzMJf0).

 If you are not able to add reservation administrator permissions to your user, you might need to elevate the [global admin](https://learn.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) access first.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econodataaz">Azure: Why don't I see data in the Eco Dashboard?</summary>

  <div style="padding-left:16px">

   Contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoids">Azure: Where can I find my tenant ID and billing account ID?</summary>

  <div style="padding-left:16px">

You can get your [tenant ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant) and [billing ID](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/direct-ea-administration#manage-your-enrollment) from Azure.

 </div>

 </details>
