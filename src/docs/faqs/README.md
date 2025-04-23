# Frequently Asked Questions

Find answers to common questions about Spot products:
* [General](faqs/?id=general)
* [Ocean](faqs/faqs-ocean)
* [Ocean for Apache Spark](faqs/faqs-ocean?id=ocean-for-apache-spark)
* [Elastigroup](faqs/faqs-eg)
* [Elastigroup stateful node](/faqs/faqs-eg?id=elastigroup-stateful-node)
* [Eco](faqs/faqs-finops?id=eco)

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

Savings in the Spot console (click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png"> > **Settings** > **Savings**) shows you how much you saved by using spot instances instead of on-demand instances:

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="AWSIAMprivs">AWS: What are the minimum permissions Spot needs to my AWS environment?</summary>

  <div style="padding-left:16px">

You can see the list of permissions required for Spot in [Sample AWS policies](https://github.com/spotinst/spotinst-examples/tree/master/Policies/AWS).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="dashboardnodata">Azure: Why isn’t the optimization dashboard showing data?</summary>

  <div style="padding-left:16px">

If data isn’t showing in the optimization dashboard, make sure you have:

* An Azure account connected to Spot with VMs running in Azure.
* A [custom role](connect-your-cloud-provider/first-account/azure?id=step-5-create-a-custom-role) and [assigned it in IAM](connect-your-cloud-provider/first-account/azure?id=step-6-assign-a-role).
* A [client secret in Spot](connect-your-cloud-provider/first-account/azure?id=step-4-create-certificates-and-secrets).
* The correct Azure [subscription ID and tenant ID](administration/organizations/?id=get-your-account-id).
* https://spot.io for the [redirect URI](https://learn.microsoft.com/en-us/entra/identity-platform/reply-url).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSOchangeprov">SSO: Can I change identity providers?</summary>

  <div style="padding-left:16px">

If you’re using the same email ID after the migration, you can update your identity provider:

1. Click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png"> > **Settings** > **Security** > **Identify Providers**.
2. Browse and upload a new metadata file (SAML doc).

If you use the same SAML configuration, existing user/token permissions will continue to work after changing identity providers.
   
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

 
