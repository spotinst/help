# Frequently Asked Questions

<!----------------------------------general---------------------------------->

## General

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="genreg">AWS, Azure, GCP: What regions does Spot support for my cloud provider?</summary>

 <div style="padding-left:16px">

**AWS Regions**

us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, sa-east-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, ap-south-1, me-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-east-1, cn-north-1, cn-northwest-1, ap-northeast-3, af-south-1, eu-south-1, us-gov-east-1, us-gov-west-1, cn-north-1, cn-northwest-1.

Supported products: Eco, CloudAnalyzer, Ocean, Elastigroup.

>**Note**: For Eco and CloudAnalyzer only, the following China regions are not supported:
> - cn-north-1
> - cn-northwest-1

**Azure Regions**

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas ,us-gov-virginia , ,west-us, west-us-2, west-us-3.

Supported products: Ocean, Elastigroup.

**GCP Regions**

us-east1, us-east1, us-east1, us-east4, us-east4, us-east4, us-central1, us-central1, us-central1, us-central1, us-west1, us-west1, us-west1, europe-west4, europe-west4, europe-west4, europe-west1, europe-west1, europe-west1, europe-west3, europe-west3, europe-west3, europe-west2, europe-west2, europe-west2, asia-east1, asia-east1, asia-east1, asia-southeast1, asia-southeast1, asia-southeast1, asia-northeast1, asia-northeast1, asia-northeast1, asia-south1, asia-south1, asia-south1, australia-southeast1, australia-southeast1, australia-southeast1, southamerica-east1, southamerica-east1, southamerica-east1, asia-east2, asia-east2, asia-east2, asia-northeast2, asia-northeast2, asia-northeast2, europe-north1, europe-north1, europe-north1, europe-west6, europe-west6, europe-west6, northamerica-northeast1, northamerica-northeast1, northamerica-northeast1, us-west2, us-west2, us-west2.

Supported products: Ocean, Elastigroup.

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="genodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1.	If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2.	If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3.	If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4.	If there is any free compute service plan commitment, then the instance is a savings plan.
5.	Otherwise, the instance will run as a full-price on-demand instance.

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

* **iam:PassRole** is only required when you custom metrics. Ocean EKS does not require <i>iam:PassRole</i> in the Spot policy. However, if you use custom metrics, you need an account with this role configured for putting metric data into CloudWatch, which is in use by both Ocean (PublishOceanKubernetesCwMetricsExecutor ) and EG (ReportCWMetricsNewCmd).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="secretnotvalid">Azure: Why can my cluster not perform scaling actions (invalid client secret)?</summary>

  <div style="padding-left:16px">

You got this error in the logs, and it’s not possible for the cluster to perform any scaling actions:

<code>Invalid client secret provided. Ensure the secret being sent in the request is the client secret value, not the client secret ID, for a secret added to app</code>

In Azure Kubernetes Service (AKS), there are two kinds of secrets: <i>client secret ID</i> and <i>client secret value</i>.

Generate a new client secret <i>value</i> and [update it in the API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure).

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

   Single log out service ULRs are not supported. After logging in, users need to manually log out using the Spot console.
   
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

* <code>Automatic provisioning of user {name of user} to app Spotinst failed: Matching user not found.</code>
* <code>Automatic profile push of user {name of user} to app Spotinst failed: Error while trying to push profile update for {user email}: No user returned for user {user id}</code>

These internal logging errors occur because of a misconfiguration in the Okta SSO environment.
1.	Make sure edit is set up for provisioning:
    <ol style="list-style-type: lower-alpha;">
    <li>Go to Okta Admin Console and click <b>Applications</b> > <b>Spotinst</b> > <b>Provisioning</b> > <b>To App</b>.</li>
    <li>Click <b>Edit</b> and then <b>Enable</b> for <i>Create Users</i>, <i>Update User Attributes</i>, and <i>Deactivate Users</i>.</li>
    </ol>
 
2.	Check for failed tasks:
    <ol style="list-style-type: lower-alpha;">
    <li>Go to the Okta Admin Console and navigate to <b>Dashboard</b> > <b>Tasks</b>. Look for failed provisioning assignments under <b>Tasks</b>.</li>
    <li>If there are failed tasks for the users who were getting errors, retry the tasks by selecting the task and then clicking <b>Retry Selected</b>.</li>
    </ol>

    After retrying the failed tasks, the errors should be resolved and the users should have complete access to the Spotinst app after signing in using SSO. If there are no failed tasks associated with these users or if the issue isn’t resolved, unassign them.
   
3.	Unassign the users from the Spotinst app in Okta. Once unassigned, reassign these specific users to the Spotinst app.

 </div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-groupokta">SSO: How can I add a user to groups in an organization in Okta?</summary>

  <div style="padding-left:16px">

   You can add a user to one or many user groups in an [organization](/administration/sso-access-control/organization-level-sso?id=organization-and-user-group) in Okta spotinst application:
1.	Make sure [Okta SAML 2.0 authentication](/administration/identity-providers/okta-saml-authentication) is configured with Spot.
2.	Sign in to Okta Admin, go to **Directory** > **Profile Editor**, and select **Spotinst User**.
3.	Click **Add Attribute** and add a custom attribute:
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="jq">Can I use JQ to extract data from an API call?</summary>

  <div style="padding-left:16px">

   JQ is a tool that lets you extract, manipulate, and transform JSON data. You can use it extract data from an API call.

You can [download JQ](https://jqlang.github.io/jq/download/) and use the [online curl command line builder](https://curlbuilder.com/). Curl lets you interact with web services, APIs, and services using command line.

For curl, use this template:
<pre><code>curl -X GET '{URL}' \
-H 'Authorization: Bearer {TOKEN}' \
-H 'Content-Type: application/json'</code></pre>

For example:
* Get the value of the maximum number of instances set in an Elastigroup using CLI

    * Use this API:
      https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsListElastigroup
  
    * Enter this in JQ:  
      <pre><code>curl -X GET 'https://api.spotinst.io/aws/ec2/group/{groupID}' \
      -H 'Authorization: Bearer {token}' \
      -H 'Content-Type: application/json' | jq '.response.items[0].capacity.maximum'</code></pre>  
  
* Get the cluster-ocean id by cluster name

    * Use this API:
      https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterList

    * Enter this in JQ:  
      <pre><code>curl –X GET 'https://api.spotinst.io/ocean/aws/k8s/cluster?accountId={accountID}' \
      -H 'Authorization: Bearer {token}' \
      -H 'Content-Type: application/json' 
       | jq '.response.items[] | select(.controllerClusterId | contains("{cluster-name}")) | .id'
</code></pre>
   
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

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas ,us-gov-virginia , ,west-us, west-us-2, west-us-3.

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

      <code>"blockDeviceMappings": [
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
    ],</code>

   5. Click **Save**.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanvngfailedlaunchspec">AWS, Azure, GCP: Can I set the <i>spotPercentage</i> on both a cluster and a virtual node group at the same time?</summary>

  <div style="padding-left:16px">

No, you will get this error:
<code>Virtual Node Group configuration failed to update. Reason: Error while trying to create LaunchSpec. spotPercentage cannot be set on both ocean cluster and launch spec</code>

The parameter <i>spotPercentage</i> cannot be used for both a cluster and one of its virtual node groups at the same time. This is intentional. Either remove it from the  cluster or from the virtual node group.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oelasticsearch">AWS: Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) add this code to the JSON:
     <pre><code> "logging": {
       "export": {
         "s3": {
           "id": "di-123"
         }
       }
     }
   </pre></code>

 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1.	If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2.	If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3.	If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4.	If there is any free compute service plan commitment, then the instance is a savings plan.
5.	Otherwise, the instance will run as a full-price on-demand instance.

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
   <pre><code class="lang-json">
   "compute": {
    "launchSpecification": {
        "instanceMetadataOptions": {
            "httpTokens": "required",
            "httpPutResponseHopLimit": 12,
            "httpEndpoint": "enabled"
          }
      }
    }
   </code></pre>

2. Apply these changes to the currently running instances so the clusters are restarted and have the new definitions:
    * [Deploy an Elastigroup](https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup?id=deploy-an-elastigroup)
    * [Roll an Ocean cluster](https://docs.spot.io/ocean/features/roll-gen)

**Scenario 2: Stateful Node**

When a stateful managed node is imported from AWS, Spot creates an image from the snapshot. When an instance is recycled, the metadata configuration is deleted and changes to IMDSv1.

You can use your own AMI and configure IMDSv2 on it. All instances launched after recycling will have IMDSv2 by default.

1. Configure IMDSv2 on your AMI:
    * If create a new AMI, you can add IMDSv2 support using AWS CLI:
     <pre><code>
      aws ec2 register-image Let me know if there is anything else I can help you with.
      --name my-image \
      --root-device-name /dev/xvda \
      --block-device-mappings DeviceName=/dev/xvda,Ebs={SnapshotId=snap-0123456789example} \
      --imds-support v2.0
      </code></pre>

    * If you use an existing AMI, you can add IMDSv2 using AWS CLI:
      <pre><code>
      aws ec2 modify-image-attribute \
      --image-id ami-0123456789example \
      --imds-support v2.0
      </code></pre>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancudvng">GCP: Can I set up committed use discounts on virtual node groups?</summary>

  <div style="padding-left:16px">

You can set up committed use discounts (CUDs) for clusters in Ocean and groups in Elastigroup. It cannot be used for virtual node groups.

Set up committed use discounts for:
* [Ocean](ocean/features/committed-use-discount)
* [Elastigroup](elastigroup/features/gcp/commit-use-discount)

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanbootdisk">GCP: Why can’t I spin new instances (boot disk architecture)?</summary>

  <div style="padding-left:16px">

If Ocean isn’t launching a VM, you might get this log message:

```Can’t Spin Instance: Name: sin-abcd. Code: Error, Message: Invalid resource usage: 'Requested boot disk architecture (X86_64) is not compatible with machine type architecture (ARM64).'```

This can happen because Ocean doesn’t validate VM architecture for GCP. You can [troubleshoot this error](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-arm-vms#errors_when_updating_vms) in GCP.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanscaleup">GCP: Why am I getting a zone_resource_pool_exhausted (scale up) error?</summary>

  <div style="padding-left:16px">

You may get this log message when a VM is trying to scale up or launch VMs:

<pre><code>Can't Spin Instance: Name: abcde. Code: ZONE_RESOURCE_POOL_EXHAUSTED_WITH_DETAILS,
Message: The zone 123 does not have enough resources available to fulfill the request, '(resource type:compute)'.</code></pre>

This can happen if the specific VM family and size aren’t available for a certain zone at the moment. Elastigroup or Ocean will try to automatically spin up a different VM in a different zone to compensate.

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

<code>Can't Spin Spot Instances: Code: InsufficientInstanceCapacity, Message: We currently do not have sufficient m5.2xlarge capacity in the Availability Zone you requested (us-east-1a). Our system will be working on provisioning additional capacity. You can currently get m5.2xlarge capacity by not specifying an Availability Zone in your request or choosing us-east-1b, us-east-1c, us-east-1d, us-east-1f.</code>

Ocean is aware of a pending pod and is spinning up an instance. Based on your current instance market, Ocean chooses the instance type in a particular availability zone and attempts to scale up. If it fails due to a lack of capacity, the error message is shown in the console logs.

You can solve this by:
* Having many instance types so Ocean can choose the best available markets.
* Having multiple availability zones to provide more availability.
* For workloads that are not resilient to disruptions, configure the [on demand label](https://docs.spot.io/ocean/features/labels-and-taints?id=spotinstionode-lifecycle) <code>spotinst.io/node-lifecycle</code>.

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancantspin">ECS, EKS: Why can't I spin new instances (InvalidSnapshot.NotFound)?</summary>

  <div style="padding-left:16px">

You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

<code>ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.`</code>

If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 <img width="460" alt="cant-spin-instances-invalidsnapshot1" src="https://github.com/user-attachments/assets/6b828a90-314f-44e7-8508-077e5e392cb8">


If you have another snapshot, then you can use that snapshot ID for the block device mapping. If not, you can remove the snapshot ID, and then the instance is launched using the AMI information.

* **Elastigroup**: on the Elastigroup you want to change, [open the creation wizard](https://docs.spot.io/elastigroup/features/compute/block-device-mapping?id=block-device-mapping) and update the snapshot ID.
  <img width="467" alt="cant-spin-instances-invalidsnapshot2" src="https://github.com/user-attachments/assets/0d90513e-a6f3-478c-9b7f-a8bc2d07a798">


* **Ocean**: on the virtual node group you want to change, update the snapshot ID.
  <img width="588" alt="cant-spin-instances-invalidsnapshot3" src="https://github.com/user-attachments/assets/2cca9a9d-6123-4ddb-99b6-afe565304964">


 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxspot">ECS, EKS: Why can't I spin new spot instances (MaxSpotInstanceCountExceeded)?</summary>

  <div style="padding-left:16px">

   You can get this message if AWS's spot service limit is reached:
   
   <code>Can't Spin Spot Instances:Code: MaxSpotInstanceCountExceeded, Message: Max spot instance count exceeded</code>

You may also get an email from Spot: <i>Spot Proactive Monitoring | Max Spot Instance Count Exceeded</i>. This email includes instructions for opening a support request with AWS, such as the instance type and region that triggered the error.

You can read the AWS documentation on [spot instance quotas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html).

   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocinvalidblockdevicemapping">ECS, EKS: Why am I getting an InvalidBlockDeviceMapping error?</summary>

<div style="padding-left:16px">

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

<code>Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping</code>

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from <code>xvda</code> to <code>/dev/xvda</code> on the group's side. In the stateful node, go to **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**. Change the device name from <code>xvda</code> to <code>/dev/xvda</code> and click **Update**.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="importfargateerror">ECS: Why am I getting an import Fargate services error?</summary>

<div style="padding-left:16px">

When you import Fargate services with more than 5 security groups, you get an error: 

<code>Failed to import Fargate services into Ocean. Please verify Spot IAM policy has the right permissions and try again.</code>

In Spot, you see this warning:

<code>Fargate import failed for xxx-xxxxxx, due to Failed to import services, too many security groups. Import less services to this group (Group ID: xxxx-xxxxxx).</code>

You can have up to 5 security groups in each service according to this [article](https://spot.io/blog/import-ecs-fargate-into-spot-ocean/#:~:text=more%20than%20five-,security,-groups%20as%20only). This means that if more than 5 security groups are defined in one of the services, the import doesn’t succeed.

Check the Ocean log to see if you see the error <code>too many security groups</code>, as it will get the same error.

Reimport Fargate services with less than 5 security groups and choose only one service at a time to import it successfully.

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

   If your virtual node group or Elastigroup has more on-demand instances than defined, your extra instances are reverted to spot instances when they become available. This is called the fix strategy.

If you see this message in the log:

<pre><code>DEBUG, Replacement of type Out of strategy for instance i-xxx has been canceled. Reason for cancelation: Instance contains stand-alone tasks, and the group's configuration doesn't allow termination of stand-alone tasks.</code></pre>

It means that your strategy cannot be fixed and your spot instances cannot be reverted to spots. This is because you have standalone tasks in the instances, and the group's configuration can't stop standalone tasks. These instances cannot be scaled down by the autoscaler.

[Update the cluster](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterUpdate) to include <code>"shouldScaleDownNonServiceTasks": true</code>.

The standalone task and instance are terminated and are not redeployed in Elastigroup because they weren't created as part of a service.

See [What is Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_run_task.html).
   
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

       <pre><code>#!/bin/bash  
       echo ECS_CLUSTER="<font color="#FC01CC">MyCluster</font>" >> /etc/ecs/ecs.config</code></pre>
  
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="hostportunderutilized">ECS: Can hostPort cause underutilized nodes?</summary>

<div style="padding-left:16px">

If a node only has one task running, then it causes the node to be underutilized. Underutilized nodes should be bin-packed together if there are no constraints in the task/service definition.

Example service:

<pre><code class="lang-json">"placementConstraints": [],
   "placementStrategy": [],
</code></pre>

The task definition doesn't have constraints to spread tasks across nodes.

<pre><code class="lang-json">
"placementConstraints": [
  {
  "type": "memberOf",
  "expression": "attribute:nd.type == default"
  }
  ],
</code></pre>

Check the **portMappings: hostPort** value in the task/service defintion.

Port mappings allow containers to access ports on the host container instances to send or receive traffic. This configuration can be found in the task definition. The hostPort value in port mapping is normally left blank or set to 0.

Example:
<pre><code class="lang-json">
      "portMappings": [
            {
               "protocol": "tcp",
               "hostPort": 0,
               "containerPort": 443
</code></pre>

However, if the hostPort value equals the containerPort value, then each task needs its own container. Any pending tasks trigger a scale-up, and the number of launched instances is equal to the number of pending tasks. This leads to underutilized instances and higher costs.

You can have multiple containers defined in a single task definition. Check all the <i>portMappings</i> configurations for each container in the [task definition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PortMapping.html).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceandaemonsetpods">EKS: Why are DaemonSet pods not scheduled on all nodes in the cluster?</summary>

  <div style="padding-left:16px">

Your DaemonSet pods are only scheduled on one specific virtual node group, not on all the nodes in a virtual node group in cluster.

This can happen if you use taints on your pods in virtual node groups. You can either use taints on all your pods, or not use taints. You can't mix pods with taints and without taints.

Update your tolerances in the DaemonSet YAML so you can schedule DaemonSet pods on the nodes in virtual node groups with taints.

For example, you can update your [DaemonSet pod YAML](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) to include:

<pre><code>
   spec:
      tolerations:
      - key: dedicated
        operator: Equal
        value: statefulset
        effect: NoSchedule
</code></pre>


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

Change:

`client = session.client("ocean_aws")`

To:

`client = session.client("ocean_aws", log_level="debug")`

Then [create or update](https://github.com/spotinst/spotinst-sdk-python/blob/v2/docs/clients/ocean/ocean_aws_client.md#create_ocean_cluster) the cluster again.

 
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

<pre><code>/var/lib/cloud/instance/scripts/part-001: line 5: unexpected EOF while looking for matching `"'
   
/var/lib/cloud/instance/scripts/part-001: line 9: syntax error: unexpected end of file

Feb 01 14:03:05 cloud-init[2517]: util.py[WARNING]: Running module scripts-user (<module ‘cloudinit.config.cc_scripts_user' from '/usr/lib/python2.7/site-packages/cloudinit/config/cc_scripts_user.pyc'>) failed</pre></code>

Make sure:
1. The parameters are configured correctly (such as labels, AMI, IP, user data).
2. The user data script is executable and working properly.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocfailedupdate">GKE: Why am I getting a <i>Failed to update the group</i> (launchSpec) error?</summary>

  <div style="padding-left:16px">

If you update the Kubernetes version and pods launch with the old version, you may get these errors:

```ERROR, Failed to update the launchSpec ols-f775236b with the latest changes in GKE cluster tagging-stg-eu1-1. Reason: Node pool tagging-stg-eu1-1-pool does not exist.```

```ERROR, Failed to update the group with the latest changes in GKE cluster tagging-stg-eu1-1. Reason: Node pool tagging-stg-eu1-1-pool does not exist.```

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

```ERROR, Can't Spin Instance: Name: sin-xxxx. Code: Error, Message: [pd-standard] features and [instance_type: VIRTUAL_MACHINE family: COMPUTE_OPTIMIZED generation: GEN_3 cpu_vendor: INTEL architecture: X86_64 ] InstanceTaxonomies are not compatible for creating instance.```

[Compare the machine family](https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison) and PD-standard disk type to decide which is appropriate for your workload.

Contact support to decide on the selected instance type for launching and to remove the problematic instance type or family from the allowlist.


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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanlaunchspec">EKS, GKE: Why am I getting the error: <i>when default launchSpec is used as a template only, can't raise target of Ocean</i>?</summary>

  <div style="padding-left:16px">

   When the <code>useAsTemplateOnly</code> parameter is <i>true</i>, you cannot edit the target capacity in the Ocean cluster configuration.
   
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanssar">AKS, EKS, GKE: Should I get frequent <i>SelfSubjectAccessReview</i> requests after upgrading to Ocean Controller Version 2?</summary>

  <div style="padding-left:16px">


After you upgrade to Ocean Controller Version 2, you may get many SIEM alerts due to <i>SelfSubjectAccessReview</i> requests to your API server. This is expected behavior.

With the Version 2 Ocean Controller, Spot gets reports for any custom resource you gave it access to through the controller cluster role. For example, an Argo Rollouts custom resource or a VerticalPodAutoscaler for rightsizing. These require Spot to list the custom resources in the cluster and make sure there's read access. This happens when the  controller starts up and on a regular basis when it's running.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8spvcerror">AKS, EKS, GKE: Why am I getting a <i>Kubernetes Autoscaler, Deadlock for Pod</i> error?</summary>

  <div style="padding-left:16px">

You get this error in the log:

<code>Kubernetes Autoscaler, Deadlock for Pod: '{pod-name}' 
Can't scale up an Instance since PersistentVolumeClaim: 
'{PVC-name}' 
VolumeId: '{vol-name}' is already attached to an existing Instance: 
'{instance-ID}' Please consider using a new PersistentVolumeClaim or open a 
support ticket.
</code>

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

<code>spotinst.io/autoscaler-auto-config: "true"
spotinst.io/autoscaler-auto-headroom-percentage : {Value}
spotinst.io/ocean-default-launchspec: "true"</code>

Here's an example of a config file:

<code>apiVersion: kops.k8s.io/v1alpha2
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
minSize: 1</code>

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanfailinstancetypes">AKS, ECS, EKS, GKE: Why does Ocean fail to update instance types?</summary>

  <div style="padding-left:16px">

You cannot update the instance types in the default virtual node group. For example, it’s not supported to remove <i>m4.large</i> and <i>m5.large</i>, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> to the default virtual node group, and then update the cluster.

If you do, you’ll get this error:
<pre><code>
Launch spec ols-xxxxxxxx instance types are not a subset of ocean cluster
</code></pre>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sscaledown">AKS, ECS, EKS, GKE: Can I stop Kubernetes workloads from scaling down in Ocean?</summary>

  <div style="padding-left:16px">

You can restrict specific pods from scaling down by configuring Ocean and Kubernetes. The instance will be replaced only if:
* It goes into an unhealthy state.
* Forced by a cloud provider interruption.

There are two options for restricting pods from scaling down:
* Kubernetes deployments/pods: spotinst.io/restrict-scale-down: true

  Use the <code>spotinst.io/restrict-scale-down</code> label set to <i>true</i> to block proactive scaling down for more efficient bin packing. This will leave the instance running as long as possible. It gets defined as a label in the pod's configuration. See [restrict scale down](ocean/features/labels-and-taints?id=spotinstiorestrict-scale-down).

* Virtual node group (VNG): restrict scale down (only available for AWS, ECS, and GKE)

  You can configure [Restrict Scale Down](ocean/features/vngs/attributes-and-actions-per-vng) at the VNG level so the nodes and pods within the VNG are not replaced or scaled down due to the auto scaler resource optimization. Create a VNG, go to the Advanced tab, then select **Restrict Scale Down**.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanvmarch">AKS: Can I create VMs with specific architecture in Ocean AKS?</summary>

  <div style="padding-left:16px">

You may want to run workloads (pods) on VMs with a specified architecture.

For Ocean clusters (AWS), you can use an AMI with the required architecture. Update the AMI in the cluster or virtual node group (VNG) configuration to make sure the instances are launched according to the architecture specified in the AMI.

However, it’s not possible to do with Ocean AKS clusters because you cannot choose a particular image to run VMs when you create an AKS cluster.

1.	Create a new virtual node group in the Ocean AKS cluster and configure it manually or import the configuration of a node pool.
2.	Add vmSizes to the virtual node group JSON file.
    <pre><code>"vmSizes": {
        "filters": {
            "architectures": [
                 "x86_64"
            ],
            "series": []
                }
    }</code>
   </pre>
   
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


<!----------------------------------elastigroup---------------------------------->
## Elastigroup

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egreg">AWS, Azure, GCP:  What regions does Spot support for my cloud provider?</summary>

 <div style="padding-left:16px">

**AWS Regions**

us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, sa-east-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, ap-south-1, me-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-east-1, cn-north-1, cn-northwest-1, ap-northeast-3, af-south-1, eu-south-1, us-gov-east-1, us-gov-west-1, cn-north-1, cn-northwest-1.

**Azure Regions**

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas ,us-gov-virginia , ,west-us, west-us-2, west-us-3.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egelasticsearch">AWS: Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) add this code to the JSON:
     <pre><code> "logging": {
       "export": {
         "s3": {
           "id": "di-123"
         }
       }
     }
   </pre></code>

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egodresp">AWS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

  <div style="padding-left:16px">

   When is an on-demand (OD) instance a reserved instance (RI), savings plan (SP), or full-priced on demand?
   
   When launching an on-demand instance, you cannot specifically request it to run as a reserved instance or savings plan.

AWS decides according to:

1.	If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2.	If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3.	If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4.	If there is any free compute service plan commitment, then the instance is a savings plan.
5.	Otherwise, the instance will run as a full-price on-demand instance.

Throughout the lifetime of an instance, it can change its “price” whenever there’s any change in the commitments utilization rate. For example, if an instance is running as a full price on-demand instance, and another instance that was utilizing a compute savings plan commitment was terminated, the first instance will start utilizing this commitment if its hourly price rate has enough free space under this commitment. It might take a couple of minutes for this change to show, but since the billing is being calculated retroactively, in practice it’s starting to utilize the commitment right away.
   
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
   <pre><code class="lang-json">
   "compute": {
    "launchSpecification": {
        "instanceMetadataOptions": {
            "httpTokens": "required",
            "httpPutResponseHopLimit": 12,
            "httpEndpoint": "enabled"
          }
      }
    }
   </code></pre>

2. Apply these changes to the currently running instances so the clusters are restarted and have the new definitions:
    * [Deploy an Elastigroup](https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup?id=deploy-an-elastigroup)
    * [Roll an Ocean cluster](https://docs.spot.io/ocean/features/roll-gen)

**Scenario 2: Stateful Node**

When a stateful managed node is imported from AWS, Spot creates an image from the snapshot. When an instance is recycled, the metadata configuration is deleted and changes to IMDSv1.

You can use your own AMI and configure IMDSv2 on it. All instances launched after recycling will have IMDSv2 by default.

1. Configure IMDSv2 on your AMI:
    * If create a new AMI, you can add IMDSv2 support using AWS CLI:
     <pre><code>
      aws ec2 register-image Let me know if there is anything else I can help you with.
      --name my-image \
      --root-device-name /dev/xvda \
      --block-device-mappings DeviceName=/dev/xvda,Ebs={SnapshotId=snap-0123456789example} \
      --imds-support v2.0
      </code></pre>

    * If you use an existing AMI, you can add IMDSv2 using AWS CLI:
      <pre><code>
      aws ec2 modify-image-attribute \
      --image-id ami-0123456789example \
      --imds-support v2.0
      </code></pre>

2. In the Spot console, [create a stateful node](https://docs.spot.io/managed-instance/getting-started/create-a-new-managed-instance) with the custom AMI.

 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmemoryscalepolicy">AWS: How can I set a memory-based scaling policy in Elastigroup?</summary>

  <div style="padding-left:16px">

Scaling policies typically include CloudWatch metrics such as CPU utilization, network out, and latency.

You can configure a custom scaling policy that is based on another metric. For example, you may want to scale according to memory utilization.

1.	To set a simple scaling policy, revert the Elastigroup configurations to the legacy design:

    <ol style="list-style-type: lower-alpha;">
     <li>In the Spot console, go to <b>Elastigroup</b> > <b>Groups</b>, and click on the name of an Elastigroup.</li>
     <li>Go to <b>Actions</b> > <b>Edit Configuration</b>.</li>
     <li>Click <b>Revert to Legacy Design</b>.
     
     <img src="https://github.com/user-attachments/assets/edd8803d-a05b-4850-82e1-e87104006879" />
     </li>

    </ol>

2.	Click <b>Scaling</b> > <b>Simple Scaling Policies</b>.
3.	Select <b>Up Scaling Policies</b> or <b>Down Scaling Policies</b> and click <b>Add Policy</b>.
4.	Set these parameters:
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
    * **Dimensions – Value**: this is the ARN of the load balancer, for example: <code>loadbalancer/app/{load-balancer-name}/{xxxxxxxxxxx}</code>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egspinspotinstances">AWS: Why can't I spin new spot instances (InsufficientInstanceCapacity)?</summary>

  <div style="padding-left:16px">

This message is shown in the console logs if Ocean attempts to scale up a certain spot instance type in a particular availability zone. This happens because of a lack of capacity on the AWS side.

<code>Can't Spin Spot Instances: Code: InsufficientInstanceCapacity, Message: We currently do not have sufficient m5.2xlarge capacity in the Availability Zone you requested (us-east-1a). Our system will be working on provisioning additional capacity. You can currently get m5.2xlarge capacity by not specifying an Availability Zone in your request or choosing us-east-1b, us-east-1c, us-east-1d, us-east-1f.</code>

Ocean is aware of a pending pod and is spinning up an instance. Based on your current instance market, Ocean chooses the instance type in a particular availability zone and attempts to scale up. If it fails due to a lack of capacity, the error message is shown in the console logs.

You can solve this by:
* Having many instance types so Ocean can choose the best available markets.
* Having multiple availability zones to provide more availability.
* For workloads that are not resilient to disruptions, configure the [on demand label](https://docs.spot.io/ocean/features/labels-and-taints?id=spotinstionode-lifecycle) <code>spotinst.io/node-lifecycle</code>.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcantspin">AWS: Why can't I spin new instances (InvalidSnapshot.NotFound)?</summary>

<div style="padding-left:16px">

You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

<code>ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.`</code>

If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 <img width="460" alt="cant-spin-instances-invalidsnapshot1" src="https://github.com/user-attachments/assets/6b828a90-314f-44e7-8508-077e5e392cb8">


If you have another snapshot, then you can use that snapshot ID for the block device mapping. If not, you can remove the snapshot ID, and then the instance is launched using the AMI information.

* **Elastigroup**: on the Elastigroup you want to change, [open the creation wizard](https://docs.spot.io/elastigroup/features/compute/block-device-mapping?id=block-device-mapping) and update the snapshot ID.
  <img width="467" alt="cant-spin-instances-invalidsnapshot2" src="https://github.com/user-attachments/assets/0d90513e-a6f3-478c-9b7f-a8bc2d07a798">


* **Ocean**: on the virtual node group you want to change, update the snapshot ID.
  <img width="588" alt="cant-spin-instances-invalidsnapshot3" src="https://github.com/user-attachments/assets/2cca9a9d-6123-4ddb-99b6-afe565304964">

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmaxspot">AWS: Why can't I spin new spot instances (MaxSpotInstanceCountExceeded)?</summary>

  <div style="padding-left:16px">

   You can get this message if AWS's spot service limit is reached:
   
   <code>Can't Spin Spot Instances:Code: MaxSpotInstanceCountExceeded, Message: Max spot instance count exceeded</code>

You may also get an email from Spot: <i>Spot Proactive Monitoring | Max Spot Instance Count Exceeded</i>. This email includes instructions for opening a support request with AWS, such as the instance type and region that triggered the error.

You can read the AWS documentation on [spot instance quotas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html).

   
 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ebsvolumeerror">AWS: Why am I getting an <i>instance launch failed because an EBS volume cannot be encrypted</i> error?</summary>

<div style="padding-left:16px">

If you get this error:

<pre>Spot Bad Parameters: Spot Request id: Optional{instance ID}. Code: bad-parameters Message: <timestamp>: Instance launch failed because an EBS volume cannot be encrypted. If your launch specification includes an encrypted EBS volume, you must grant the AWSServiceRoleForEC2Spot service-linked role access to any custom KMS keys.</pre>

Then there are missing permissions in the KMS custom key. You can configure KMS keys:
* [From the same AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/create-encryption-key?id=create-encryption-key)
* [From a different AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/use-cross-account-kms-key-to-encrypt-ebs-volumes) (cross-account)

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egerrorpeers">AWS: Why am I getting a <i>"value" contains a conflict between peers</i> error?</summary>

  <div style="padding-left:16px">

When you import a new group to Elastigroup, you may get this error:
<code>"value" contains a conflict between exclusive peers [resourceRequirements, spot]</code>

This happens if the <code>resourceRequirements</code> value is <i>null</i>.

Remove the <i>resourceRequirements</i> field from the JSON file and reimport the group.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eginvalidblockdevicemapping">AWS: Why am I getting an InvalidBlockDeviceMapping error?</summary>

<div style="padding-left:16px">

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

<code>Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping</code>

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from <code>xvda</code> to <code>/dev/xvda</code> on the group's side. Go to **Actions** > **Edit Configuration** > **Review Tab** > **Switch to Json Edit format** > **Apply the changes and save**.

 </div>

 </details>

 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egimportvm">AWS: Why am I getting errors when I try to delete a Beanstalk group?</summary>

  <div style="padding-left:16px">

When you delete a Beanstalk group, make sure you deselect **Rollback beanstalk configuration**. If **Rollback beanstalk configuration** is selected, you <i>may</i> get ASG errors.

1. In the Spot console, go to **Elastigroup** > **Actions** > **Delete Group**.
2. Deselect **Rollback beanstalk configuration**.
3. Type the name of the group to confirm.
4. Click **Delete**.

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egimportvm">Azure: Why am I getting a <i>Failed to import virtual machine</i> or <i>The create/import has failed</i> message?</summary>

  <div style="padding-left:16px">

  You may get one of these error messages when you're trying to import VMs to Elastigroup:
  * <code>Failed to import virtual machine. Could not retrieve custom image.</code>
  * <code>The create/import has failed. The storage account https://`<storage-account>` that was defined for the boot diagnostic preferences was not found.”</code>

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

<pre><code>Invalid value for field 'resource.disks[0].initializeParams.diskSizeGb': '80'. Requested disk size cannot be smaller than the image size (100 GB)</code></pre>

You need to increase the disk size for the Elastigroup:

1. Go to the Elastigroup in the Spot console and click **Actions** > **Edit Configuration** > **Compute**.
2. Update **Boot Disk** > **Disk Size** to be bigger than the configured disk size for the image.
 
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcaleup">GCP: Why am I getting a zone_resource_pool_exhausted (scale up) error?</summary>

  <div style="padding-left:16px">

You may get this log message when a VM is trying to scale up or launch VMs:

<pre><code>Can't Spin Instance: Name: abcde. Code: ZONE_RESOURCE_POOL_EXHAUSTED_WITH_DETAILS,
Message: The zone 123 does not have enough resources available to fulfill the request, '(resource type:compute)'.</code></pre>

This can happen if the specific VM family and size aren’t available for a certain zone at the moment. Elastigroup or Ocean will try to automatically spin up a different VM in a different zone to compensate.

   </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egelasticsearch">Integration: Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) add this code to the JSON:
     <pre><code> "logging": {
       "export": {
         "s3": {
           "id": "di-123"
         }
       }
     }
   </pre></code>

 </div>

 </details>

 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="spotinstagentlogs">Integration: Can I disable Spotinst Agent logging?</summary>

  <div style="padding-left:16px">

You can run this script to stop Spotinst-Agent from sending logs to syslog:
<pre>
 <code>

sed -i 's/[Service]/[Service]\nStandardOutput=null\nStandardError=null/g' /lib/systemd/system/spotinst-agent.service
systemctl daemon-reload
systemctl restart spotinst-agent
 
  </code>
 
 </pre>

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

Increase the <i>Idle minutes before termination</i> in the [Spot Jenkins plugin](https://docs.spot.io/tools-and-provisioning/ci-cd/jenkins).

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

<code>Group is in ERROR state and not in READY state, cannot delete it</code>

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

australia-central, australia-central-2, australia-east, australia-south-east, brazil-south, canada-central, canada-east, central-india, central-us, east-asia, east-us, east-us-2, france-central, france-south, germany-central, germany-north, germany-north-east, germany-west-central, japan-east, japan-west, korea-central, korea-south, north-central-us, north-europe, norway-east, norway-west, south-africa-north, south-africa-west, south-central-us, south-east-asia, south-india, switzerland-north, switzerland-west, uae-central, uae-north, uk-south, uk-west, west-central-us, west-europe, west-india, us-gov-arizona, us-gov-texas ,us-gov-virginia , ,west-us, west-us-2, west-us-3.

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

1.	If the market matches a free zonal reserved instance commitment, then the instance is a reserved instance.
2.	If the market matches a free regional reserved instance commitment, then the instance is a reserved instance.
3.	If the market matches a free EC2 instance savings plan commitment, then the instance is a savings plan.
4.	If there is any free compute service plan commitment, then the instance is a savings plan.
5.	Otherwise, the instance will run as a full-price on-demand instance.

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
   <pre><code class="lang-json">
   "compute": {
    "launchSpecification": {
        "instanceMetadataOptions": {
            "httpTokens": "required",
            "httpPutResponseHopLimit": 12,
            "httpEndpoint": "enabled"
          }
      }
    }
   </code></pre>

2. Apply these changes to the currently running instances so the clusters are restarted and have the new definitions:
    * [Deploy an Elastigroup](https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup?id=deploy-an-elastigroup)
    * [Roll an Ocean cluster](https://docs.spot.io/ocean/features/roll-gen)

**Scenario 2: Stateful Node**

When a stateful managed node is imported from AWS, Spot creates an image from the snapshot. When an instance is recycled, the metadata configuration is deleted and changes to IMDSv1.

You can use your own AMI and configure IMDSv2 on it. All instances launched after recycling will have IMDSv2 by default.

1. Configure IMDSv2 on your AMI:
    * If create a new AMI, you can add IMDSv2 support using AWS CLI:
     <pre><code>
      aws ec2 register-image Let me know if there is anything else I can help you with.
      --name my-image \
      --root-device-name /dev/xvda \
      --block-device-mappings DeviceName=/dev/xvda,Ebs={SnapshotId=snap-0123456789example} \
      --imds-support v2.0
      </code></pre>

    * If you use an existing AMI, you can add IMDSv2 using AWS CLI:
      <pre><code>
      aws ec2 modify-image-attribute \
      --image-id ami-0123456789example \
      --imds-support v2.0
      </code></pre>

2. In the Spot console, [create a stateful node](https://docs.spot.io/managed-instance/getting-started/create-a-new-managed-instance) with the custom AMI.
   
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-statichostname">AWS: Can I use a static hostname?</summary>

  <div style="padding-left:16px">

Normally, AWS automatically sets the hostname when the instance is launched. It’s based on the instance’s private IPv4 address.

You can set a custom hostname that will continue to be used during the recycle process:

1.	Edit the hosts file and change the name permanently: `sudo gedit /etc/hostname /etc/hosts`
2.	Update the CUSTOM_HOSTNAME:

    <pre><code>#!/bin/bash
     CUSTOM_HOSTNAME="my-custom-hostname"
     echo "preserve_hostname: true" > /etc/cloud/cloud.cfg.d/99_persist_hostname.cfg
     echo "$CUSTOM_HOSTNAME" > /etc/hostname
     sed -i "s/^127\.0\.0\.1.*/127.0.0.1 localhost $CUSTOM_HOSTNAME/" /etc/hosts
     hostnamectl set-hostname "$CUSTOM_HOSTNAME"</code></pre>

If you want to use the instance IPv4 address that the node was originally launched with:

1.	In the metadata file, get the instance IP: `curl -s http://169.254.169.254/latest/meta-data/local-ipv4`
2.	Make sure <b>Persist Private IP</b> is configured. The custom hostname should also persist during replacement because the hostname is connected to the persistent IP.

    <ol style="list-style-type: lower-alpha;">
    <li>Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b>.</li>
    <li>Click <b>Persistent Resources</b> > <b>Network</b>.</li>
    <li>Select <b>Persist Private IP</b> and enter the IP address.</li>
    </ol>

3. In the user data, update the script:

    <ol style="list-style-type: lower-alpha;">
    <li>Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b> > <b>Initialization and Termination</b>.</li>
    <li><p>Add this script to <b>User Data</b>:</p>
      <pre><code>#!/bin/bash
       PRIVATE_IP=$(curl -s http://169.254.169.254/latest/meta-data/local-ipv4)
       AWS_HOSTNAME="ip-$(echo $PRIVATE_IP | tr '.' '-')"
       echo "preserve_hostname: true" > /etc/cloud/cloud.cfg.d/99_persist_hostname.cfg
       echo "$AWS_HOSTNAME" > /etc/hostname
       sed -i "s/^127\.0\.0\.1.*/127.0.0.1 localhost ${AWS_HOSTNAME}/" /etc/hosts
       hostnamectl set-hostname "$AWS_HOSTNAME"</code></pre></li>
   </ol>

You can also persist the hostname for [RHEL 7, 8, and 9, and CentOS 7, 8, and 9](https://repost.aws/knowledge-center/linux-static-hostname-rhel7-centos7).

 </div>

 </details>
 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsn-stopped">AWS: Why am I getting an <i>Instance have been detected as stopped</i> error?</summary>

  <div style="padding-left:16px">

   You can see this error in the log:
   <code>08/20/2023, 5:36 AM, WARN, Instance: [i-01234567890abcdefg] have been detected as Stopped.</code>

   It's possible to [stop an instance in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html), but Spot doesn't support the Stop action. This causes out-of-sync issues.

   Restart the instance in AWS, then the Elastigroup will sync again. Use [Pause/Resume](/managed-instance/features/managed-instance-actions?id=stateful-node-actions) instead of Stop.
   
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsn-stopped2">AWS: Why am I getting a <i>botocore.exceptions.ClientError</i> error?</summary>

  <div style="padding-left:16px">

   You may get this error:
   <code>botocore.exceptions.ClientError: An error occurred (UnsupportedOperation) when calling the StopInstances operation: You can't stop the Spot Instance '<Instance-ID>' because it is associated with a one-time Spot Instance request. You can only stop Spot Instances associated with persistent Spot Instance requests.</code>

   It's possible to [stop an instance in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html), but Spot doesn't support the Stop action.
   
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-bdm">AWS: Why am I getting a <i>Volume of size</i> (InvalidBlockDeviceMapping) error?</summary>

  <div style="padding-left:16px">

You get this message:

<code>ERROR, Can't Spin Spot Instances: Code: InvalidBlockDeviceMapping, Message: Volume of size xx GB is smaller than snapshot 'snap-xxx', expect size >= xx GB"</code>

If the current volume size is updated, it can cause a mismatch between the volume size and the AMI snapshot size.

Update the block device mapping configuration and increase the volume size to match the AMI snapshot size:

1. In the stateful node, go to **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**.
2. Update the group configuration and click **Update**.

   <pre><code>"blockDeviceMappings": [
                {
                    "deviceName": "/dev/sda1",
                    "ebs": {
                        "deleteOnTermination": false,
                        "volumeSize": 1500,
                        "volumeType": "GP2"
                    }
                }
            ]
   </code></pre>

3. Start a [resume action](managed-instance/features/managed-instance-actions?id=resume).

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

   4. Add the `"preferredLifecycle": "od",` parameter:
   
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

   5. [Recycle the stateful node](https://docs.spot.io/managed-instance/azure/features/actions).
   6. Make sure the stateful node is not running on the Spot VM.
   7. Go to <b>Edit Node</b> and delete the node.

      <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">
   
   8. In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.
   9. Verify that the VM with the resources is running in Azure.

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
