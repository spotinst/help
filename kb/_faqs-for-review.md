<meta name="robots" content="noindex">

# FAQs for review

<!---------------------------------- <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxxx">?</summary>

  <div style="padding-left:16px">

   text
   
 </div>

 </details>
 ---------------------------------->

<!----------------------------------where to put these?---------------------------------->

## Where do these go?

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="elasticsearch">Can Elasticsearch integrate with Spot?</summary>

  <div style="padding-left:16px">

   You can stream Elastigroup logs to an AWS S3 bucket. Then, you can configure Elasticsearch and Kibana to collect logs from the S3 bucket:
   * [Ocean](/ocean/features/log-integration-with-s3)
   * [Elastigroup](url) <font color="#FC01CC">broken url: Note: The above document addresses the integration of Ocean with S3, but is also available for Elastigroup as well: https://spotinst.com/blog/elasticsearch-on-spot-instances-step-by-step/ </font>

   <font color="#FC01CC">Here's how to use Spot Connect to integrate Elasticsearch. is it relevant? https://docs.spot.io/spot-connect/integrations/elasticsearch </font>

 </div>

 </details>

 
<!----------------------------------general---------------------------------->

## General

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="jq">Can I use JQ to extract data from an API call?</summary>

  <div style="padding-left:16px">

<font color="#FC01CC">check this whole answer really well. not sure about the content</font>
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="AWSIAM">Can I remove permissions from the Spot IAM policy?</summary>

  <div style="padding-left:16px">

You can choose to remove some of these permissions from the [Spot IAM policy](/administration/api/spot-policy-in-aws):

* **iam:PutRolePolicy** is not required as it is only used if the instance profile itself needs to create inline policies.

* **iam:CreateServiceLinkedRole** is only needed for an initial spot request, then it can be removed. This means it's only required to create the first spot instance in your account. After creating an Ocean or Elastigroup and launching a Spot instance through Spot, you can remove this permission from the policy.

* **iam:AddRoleToInstanceProfile** is generally not required. It is only used to change the role associated with an instance profile and is required for Beanstalk.

* **iam:PassRole** is only required when you custom metrics. Ocean EKS does not require <i>iam:PassRole</i> in the Spot policy. However, if you use custom metrics, you need an account with this role configured for putting metric data into CloudWatch, which is in use by both Ocean (PublishOceanKubernetesCwMetricsExecutor ) and EG (ReportCWMetricsNewCmd).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSOaddlattributes">SSO: What additional attributes (if any) does the application need from the assertion?</summary>

  <div style="padding-left:16px">

There are a number of <a href="/administration/sso-access-control">attributes that can be sent</a>. These are the default and required attributes:

<font color="#FC01CC">I don't see in the documentation what attributes can be sent. is this the correct link?</font>

* Relay State
* Email
* FirstName
* LastName
  
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-metadata">SSO: Where can I find the application SAML metadata in XML format?</summary>

  <div style="padding-left:16px">

   <font color="#FC01CC">is this for the customer or internal? should I keep this question or delete it? If keep, then need to say who to send it to...</font>
   
   You can download the SAML metadata file from your IDP. Send it to _____ to complete the integration.
   
The SAML metadata file is generated by the customer from the IDP, and it needs to be downloaded and added to our console to complete the integration.


 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSO-oktaerror">SSO: Why am I getting a user provisioning error in Okta?</summary>

  <div style="padding-left:16px">

You cannot sign in to your Spot org due to a user provisioning error in your Okta SSO environment. For example, you're getting one of these errors:

*	<code>Automatic provisioning of user {name of user} to app Spotinst failed: Matching user not found.</code>
* <code>Automatic profile push of user {name of user} to app Spotinst failed: Error while trying to push profile update for {user email}: No user returned for user {user id}</code>

When either of these errors occurs, you see in the Kibana log:
<code>Unhandled Exception! Need to investigate the request</code>
</code>{org id} and "SSO" in logstash-ums*</code>

These internal logging errors occur because of a misconfiguration in the Okta SSO environment.
1.	Make sure edit is set up for provisioning:
    <ol style="list-style-type: lower-alpha;">
    <li>Go to Okta Admin Console and click <b>Applications</b> > <b>Spotinst</b> > <b>Provisioning</b> > <b>To App</b>.</li>
    <li>Click <b>Edit</b> and then <b>Enable</b> for <i>Create Users</i>, <i>Update User Attributes</i>, and <i>Deactivate Users</i>.</li>
    </ol>
 
2.	Check for failed tasks:
    <ol style="list-style-type: lower-alpha;">
    <li>Go to the Okta Admin Console and navigate to <b>Dashboard</b> > <b>Tasks</b>. Look for failed provisioning assignments under <b>Tasks</b>.</li>
    <li>If there are failed tasks for the users who were getting errors, retry the tasks by selecting the task and then clicking <b>Retry Selected</b>b>.</li>
    </ol>

    After retrying the failed tasks, the errors should be resolved and the users should have complete access to the Spotinst app after signing in using SSO. If there are no failed tasks associated with these users or if the issue isn’t resolved, unassign them.
   
3.	Unassign the users from the Spotinst app in Okta. Once unassigned, reassign these specific users to the Spotinst app.

<font color="#FC01CC">should I include these links?
* https://support.okta.com/help/s/article/DocuSign-Provisioning-Error-Error-while-trying-to-push-profile-update-forXXXXX-Username-and-email-combination-already-exists-for-this-account?language=en_US
* https://help.okta.com/en-us/Content/Topics/Provisioning/lcm/troubleshooting.htm
* https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SCIM.htm
* https://stackoverflowteams.com/c/spotinst/questions/595?rq=1</font>

 </div>

 </details>

<!----------------------------------ocean---------------------------------->

## Ocean

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunregcontainer">Why are my container instances unregistered?</summary>

  <div style="padding-left:16px">

Your container instances may be unregistered if the newly launched Ocean ECS container instance:

* Has unregistered contain instance events
* Doesn’t have a Container Instance ID
* Is eventually scaled down
* CPU and memory resource allocations are 0%
* Status: Can’t determine

<img alt="unregistered-container-instance1" src="https://github.com/spotinst/help/assets/167069628/acd9d60a-4952-4955-b119-593ccfb9c067">

    

<img alt="unregistered-container-instance2" src="https://github.com/spotinst/help/assets/167069628/d7713e91-2850-48ee-9d1a-aa439dcf91d1">

Registering a container instance with an ECS cluster means you are telling the ECS service that a specific EC2 instance is available to run containers. <font color="#7632FE">You give information to ECS about the EC2 instance, such as its IP address, the docker daemon endpoint. ##is this part useful?##</font>

<font color="#FC01CC">If a container instance is not able to register the cluster, traffic is not received and the cluster does not function. ##what does this mean? what's the result if this happens##</font>

* **User data**
  
  Make sure this code <font color="#FC01CC">is in ______ so ##where do they update this?##</font> the container instances can register the cluster. Update the cluster name.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sheadroom">Can I configure automatic headroom using Kubernetes Operations (kOps)?</summary>

  <div style="padding-left:16px">

You can configure [automatic headroom](ocean/features/headroom) using kOps at the cluster level, not at a virtual node level. Add these [metadata labels](/ocean/tools-and-integrations/kops/metadata-labels):

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

<font color="#FC01CC">is that specifically with **kops** that you can't do it at the vng level? because in the help:
https://docs.spot.io/ocean/features/headroom?id=automatic-headroom-per-virtual-node-group
Automatic Headroom per Virtual Node Group
It is possible to define automatic headroom per virtual node group (VNG). The calculation of the automatic headroom in the VNG is the same as the calculation for the cluster as described above. This means that Ocean takes all of the workloads that run on a given VNG and calculates the headroom for that VNG using the same method it would for calculating headroom for the cluster.

The automatic headroom and the headroom per VNG are calculated independently. Therefore, there is a possibility that the headroom per cluster and per VNG will save headroom for the same workload. In order to avoid this situation, you should set the headroom only at VNG level.</font>

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunauthorized">Why am I getting a <i>You must be logged in to the server (unauthorized)</i> error when creating an EKS cluster?</summary>

  <div style="padding-left:16px">

   When you create an Ocean EKS cluster, you may get this error when in step 4 (run 'kubectl get svc'):
   <code>You must be logged in to the server (Unauthorized).</code>

   This can happen:
   * When an Amazon EKS cluster is created, the IAM entity (user or role) that creates the cluster is added to the Kubernetes RBAC authorization table as the administrator. Initially, only that IAM user can make calls to the Kubernetes API server using kubectl. The user trying to run the 'kubectl get svc' command has no permission at all. You need to [add access to other AWS users](https://stackoverflow.com/questions/50791303/kubectl-error-you-must-be-logged-in-to-the-server-unauthorized-when-accessing).<font color="#FC01CC">should we link to stackoverflow or to an AWS page?</font>
   * If you're using a different IAM account for AWS CLI than the IAM account you used for the CloudFormation template when you created the EKS in the AWS console. Run 'aws configure' and switch the AWS CLI to use the same IAM account that was used for the CloudFormation template when you created the EKS.
   
 </div>

 </details>
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceansnapshotid">Why am I getting a <i>snapshotId cannot be modified on the root device</i> error?</summary>

  <div style="padding-left:16px">

   If you get a `snapshotId cannot be modified on the root device` error:

   1. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
   2. On the Virtual Nodes Groups tab, select the virtual node group.<font color="#FC01CC">I don't see the blockDeviceMappings when I edit a cluster, only for vng</font>
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

<font color="#FC01CC">cluster:
   1. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster or virtual node group.</font><font color="#purple">I don't see the blockDeviceMappings when I edit a cluster, only for vng</font>
   <font color="#FC01CC">2. Click **Actions** > **Edit**.
   3. On the Review tab, click **JSON** > **Edit Mode**.</font> 
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanlaunchspec">Why am I getting the error: <i>when default launchSpec is used as a template only, can't raise target of Ocean</i>?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sreadiness">Why am I getting an <i>exit code 137</i> error?</summary>

  <div style="padding-left:16px">

Your liveness probe failed, and you’re getting exit code 137. <font color="#FC01CC">liveliness or readiness probe failed?</font>

Controller pod error:
<code>Warning Unhealthy 3m44s (x273 over 78m) kubelet Readiness probe failed: Get http://172.16.6.53:4401/healthcheck: dial tcp 172.16.6.53:4401: connect: connection refused</code> <font color="#FC01CC">is all this okay to include? or do I need to anonymize the urls?</font>

Exit code from controller logs:
<pre><code>INFO [2024-01-03 19:10:31,863] [main] PushAutoScalerDataCmd - Pushing autoScaler data

command terminated with exit code 137</code></pre>

The liveness probe failed error typically happens when a node is overcommitted, and the controller pod does not respond to the check at the right time.
Exit code 137 usually means out-of-memory issues.vlivelness or readiness?</font>

**Liveness probe failure** <font color="#FC01CC">include these links? livelness or readiness?</font>

•	Define readiness probes: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes
•	Kubernetes readiness probe failed error: https://stackoverflow.com/questions/48540929/kubernetes-readiness-probe-failed-error

**Exit code 137** <font color="#FC01CC">include these links?</font>
What Is Exit Code 137? https://foxutech.medium.com/how-to-fix-exit-code-137-kubernetes-memory-issues-c3a40f89c90d#:~:text=A%20137%20code%20is%20issued,encounter%20a%20137%20exit%20code


<code>Kubernetes Autoscaler, Deadlock for Pod: '{pod-name}' 
Can't scale up an Instance since PersistentVolumeClaim: 
'{PVC-name}' 
VolumeId: '{vol-name}' is already attached to an existing Instance: 
'{instance-ID}' Please consider using a new PersistentVolumeClaim or open a 
support ticket.
</code>

This can happen when the pod has a claim for a specific volume owned by a different instance, and that instance does not have free space for the pod.

By freeing up space, the pod can be placed on its attached node and can use the volume it claimed.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxpods">I got a <i>Maximum Pods configuration reached</i> message, how do I troubleshoot?</summary>

  <div style="padding-left:16px">

   If you get a `Maximum Pods configuration reached` message for a node in the console:
   * It usually means that you reached the EKS [maximum pod limit](https://github.com/awslabs/amazon-eks-ami/blob/master/files/eni-max-pods.txt). For example, the EKS maximum pod limitation for r4.large is 29.<font color="#FC01CC">broken link..is one of these correct?
     https://github.com/awslabs/amazon-eks-ami/blob/main/templates/shared/runtime/eni-max-pods.txt
     https://github.com/awslabs/amazon-eks-ami/blob/main/nodeadm/internal/kubelet/eni-max-pods.txt
     </font>
     You can [increase the EKS maximum pods](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-increases-pods-per-node-limits/) in AWS.<font color="#FC01CC">should I include the stackoverflow in addition? https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-eks#:~:text=For%20t3.,22%20pods%20in%20your%20cluster</font>
     
   * If the node has less pods than the EKS maximum pod limit, then it's likely the **max-pods** limit set at the user data level in the Ocean configuration. Increase this limit for the user data in Ocean and roll the cluster.<font color="#FC01CC">how do they do this? is this relevant: https://docs.spot.io/ocean/features/roll</font>
   If you continue to get this error, roll the cluster again and disable **Respect Pod Disruption Budget (PDB)**. You can also manually terminate the node.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanhpa">Can I check Ocean EKS clusters' horizontal pod autoscaling (HPA) policy?</summary>

  <div style="padding-left:16px">

   Ocean doesn't actually have a horizontal pod autoscaling (HPA) policy. The HPA is essentially operating on the Kubernetes side so Ocean itself doesn't have an HPA.

The cluster autoscaler only takes care of provisioning the required number of nodes. There might still be inefficiencies within the cluster, such as nodes scheduled to pods that do not provide the required computing resources. This can be addressed by other [Kubernetes scaling mechanisms](https://spot.io/resources/kubernetes-autoscaling/kubernetes-cluster-autoscaler-features-limitations-and-comparisons-to-ocean-by-spot/), such as horizontal pod autoscaler (HPA) and vertical pod autoscaler (VPA).

Essentially, if the load increases on your cluster, then Kubernetes will create more replicas, and Ocean will launch nodes for the new pods. Kubernetes HPA will create pods and Ocean will launch new nodes for pods to be scheduled.
   
 </div>

 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancost">Why is the cost analysis in the Ocean dashboard unusually high for yesterday?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancooldowneval">What's the difference between cooldown period and evaluation period?</summary>

  <div style="padding-left:16px">

Whenever Spot performs a scaling action, there is a cooldown period during which no further scaling action takes place. After the cooldown period, another scaling action can take place if required.

**Cooldown Period**

The cooldown period is the amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.

For example, if scaling policy A has cooldown set to 60 seconds and a scale-down is triggered, then new scale-downs cannot start because of policy A for the next minute. New policies cannot go into effect while policy A is in cooldown.

Cooldown period is the amount of time, in seconds, that Ocean must wait between scaling actions.

**Evaluation Period**

The specific number of evaluation periods before a scale-down action takes place. Each cycle is one minute. Evaluation period is the length of time to collect and evaluate the metric.

> **Note**: The evaluation period is calculated based on cooldown plus 3 minutes of padding due to delay in Cloudwatch metrics. So if the cooldown is set to 300 seconds, the evaluation period is 8 minutes (3 minutes + 5 cooldown).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanallocationutilization">What's the difference between allocation and utilization for Ocean right sizing?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunnamedvng">Why is my instance in an unnamed virtual node group?</summary>

  <div style="padding-left:16px">

A node is running in an Ocean cluster and is an unnamed virtual node group.

<img width="900" src="https://github.com/user-attachments/assets/5e581d00-b1c8-4bdb-8e89-c19ef79ad1f1">

This can happen if your virtual node group was deleted in Terraform. When you delete a virtual node group in Terraform, the `delete_nodes` needs to be manually set to <i>true</i> in the [Terraform registry](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#delete_nodes). If it's not set to <i>true</i>, the node will keep running and not be in a virtual node group.

 </div>
 
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceandisconnectcluster">How can I disconnect a cluster from Ocean?</summary>

  <div style="padding-left:16px">

   You can safely disconnect Ocean from an existing EKS Cluster:

1. Increase the number of instances in the ASG attached to the EKS cluster. This way, the pods that run on the nodes managed by Spot will be able to reschedule on the new instances and avoid downtime.
2. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
3. Click **Actions** > **Edit Cluster**.
4. On the Review tab, click **JSON** > **Edit Mode**.
5. Change **capacity** > **target** to <i>0</i>.<font color="#FC01CC"> is this accurate? if target is 0, then do the min and max also need to be changed? it was: In order to update the capacity navigate to Actions --> Edit cluster --> Review tab --> Toggle to JSON --> Edit mode --> Update capacity to '0' --> Update.</font>

   <img width="144" alt="oceandisconnectcluster" src="https://github.com/user-attachments/assets/ec722def-980f-4754-ab0d-b2751bf67a81">

   The instances managed by Ocean will be detached and the pods will be rescheduled on the new instances launched by AWS ASG.
6. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
7. Click **Actions** > **Delete**.

<font color="#FC01CC">this was also in the article, what do I need to change to make this FAQ generic?

The above information is a guide to disconnecting an EKS cluster but the same method can apply on other services(ECS/Kops) and other cloud providers(Azure/GCP).</font>
 
 </div>

 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanhelm">Can I manage my Kubernetes cluster deployment using Helm charts?</summary>

  <div style="padding-left:16px">

  You can manage your Kubernetes cluster deployment using Helm charts. You can can also [update the Ocean controller version](/tutorials/spot-kubernetes-controller/install-with-helm) using Helm charts.

The Helm chart YAML file has a version that points to a specific app version in the relevant [Spotinst repository](https://github.com/spotinst/spotinst-kubernetes-helm-charts/blob/master/charts/spotinst-kubernetes-cluster-controller/Chart.yaml). Every version in the repository is compatible with a [specific controller version](https://artifacthub.io/packages/helm/spotinst/spotinst-kubernetes-cluster-controller). 
   
 </div>

 </details>

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkvariables">Is maintenance mode needed when I add Beanstalk environment variables?</summary>

  <div style="padding-left:16px">

Beanstalk [environment variables](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html) are part of the application managed on the Beanstalk side, independently from the Elastigroup. Variables are automatically picked by instances that Spotinst launches into the environment.

Add variables in the [Elastic Beanstalk console](https://console.aws.amazon.com/elasticbeanstalk). Go to **Beanstalk configuration** > **software settings**. Maintenance mode is not required as this change does not affect the infrastructure.

 </div>
 
 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkgrouperror">Why am I getting a <i>group is in error state</i> message when I try to delete an Elastigroup Beanstalk from the Spot console?</summary>

  <div style="padding-left:16px">

If you get this message when you try to delete an Elastigroup Beanstalk from the Spot console:

<code>Group is in ERROR state and not in READY state, cannot delete it</code>

You need to put the group in maintenance mode and detach the remaining instances, then you can delete the Elastigroup. <font color="#FC01CC">how do you put the group in maintenance mode and detach the remining instances? need instructions or links to instructions. is this relevant? https://docs.spot.io/elastigroup/tools-integrations/elastic-beanstalk/in-asg</font>

Keep in mind, you cannot delete a Beanstalk group if:
* The attached Beanstalk group was deleted. <font color="#FC01CC">Is this accurate? An attached Beanstalk group was deleted. so you can’t delete a subgroup and then the parent group? Is that the case?</font>
* One of the resources was deleted, such as a security group or Elastic Beanstalk.

If you get an error, you can force delete the group by deselecting **Rollback beanstalk configuration**.
  
If you need to attach a Beanstalk environment, you can manually [rebuild your Beanstalk environment](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-management-rebuild.html).


 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egodlaunched">Why is an on-demand instance launched instead of a spot instance?</summary>

  <div style="padding-left:16px">

An on-demand instance may be launched instead of a spot instance even if a spot instance is available in the markets selected in the Elastigroup.

<font color="#FC01CC">are the 2 hyperlinks below correct?</font>

You can set [Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) for cluster orientation in Elastigroup. Despite this, Spot may prioritize a certain availability zone to maintain equal distribution. 

An [Elastigroup may have Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) set for cluster orientation, but the system sometimes prioritizes a certain availability zone to maintain equal distribution. When no spot instances are available, an on-demand instance spins up in the relevant availability zone.

An on-demand instance may not start, for example, if it hits an AWS instance type limit. This is like an on-demand instance that didn’t launch successfully and was replaced with spot instances in a different market.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmemoryscalepolicy">How can I set a memory-based scaling policy in Elastigroup?</summary>

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

The next steps are intuitive and should be configured according to the customer's considerations.
<font color="#FC01CC">what are the next steps? should I delete this line?</font>

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egscalingRIs">If <i>Utilize Reserved Instances</i> is enabled, what is the scaling behavior?</summary>

  <div style="padding-left:16px">

By default, Elastigroup monitors the status of your account's reservations and acts accordingly at the launch time of an on-demand instance. When an on-demand instance is scaled up, if the account has an available reservation to use in the specific market (instance type + availability zone), Elastigroup will utilize it and will use the reserved instance payment method.

If **Utilize Reserved Instances** is enabled, it automatically triggers constant attempts to revert the group's instances to on demand (reserved instance) if there are available reservations. It triggers a replacement for all instances, even spot, and uses your account's available reservations. The priority of launching instances in this group is:
1. It will see if there is an option to launch an reserved instance instance
2. If it cannot, it will launch a spot instance.
3. If a spot instance is unavailable for any reason, an on-demand instance will be launched based on the fallback to on-demand configuration.

 </div>
 
 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egnomad">How is Nomad integrated with Elastigroup?</summary>

  <div style="padding-left:16px">

Nomad is an open-source system by Hashicorp. It is used to easily manage containerized applications across multiple hosts.

Nomad groups your containers into logical units, called jobs, to simplify management and discovery. It provides deployment scheduling, workload, resource usage optimization, and easy scaling. Its workload management, scalability, and flexibility are simple and lightweight to use.

Nomad and Kubernetes are popular container orchestration platforms for managing and scaling containerized applications. However, they have different design philosophies and features.

<img width=700 src="https://github.com/user-attachments/assets/e1ea38cb-33a5-447f-9556-3c5f23b0e03d" >

With the Nomad integration, you can easily set up a new group by adding the required user data script and providing the Nomad lead master-server IP and primary host and port.

Add <i>setup data dir</i> to your AMI. Replace `<NomadServerElasticIP>` with the Elastic IP of the master:

<pre><code># Setup data dir
data_dir = "/tmp/client1"
# Enable the client
client {
    enabled = true
    servers = ["<NomadServerElasticIP>"]
}</code></pre>
 
<b>Create an Elastigroup with Nomad:</b>

1.	Create a new Elastigroup for [AWS](/elastigroup/getting-started/create-an-elastigroup-for-aws), [Azure](/elastigroup/getting-started/create-an-elastigroup-for-azure), or [GCP](/elastigroup/getting-started/create-an-elastigroup-for-gcp).

2.	On the Compute tab, go to <b>Additional Configurations</b>, add this user data script:

    <pre><code>#!/bin/bash
    export INSTANCE_ID=`curl -s http://169.254.169.254/latest/meta-data/instance-id` <font color="#FC01CC">keep the url as is?</font>
    sudo nomad agent -config client.hcl -node $INSTANCE_ID &</code></pre>

3.	On the Compute tab, go to <b>3rd party integration</b> and select <b>Nomad</b>.
4.	Enter your <b>Nomad Master Host</b> and <b>Port</b>.
5.	Click <b>Validate</b> to make sure the connection is successful.
6.	Create the Elastigroup. <font color="#FC01CC">Click Next how do they create the elastigroup?</font>

<b>More about Nomad</b>
* [Nomad autoscaling](/elastigroup/tools-integrations/nomad/)
* [Set up Nomad](/elastigroup/tools-integrations/nomad/set-up-nomad-on-elastigroup)
* [Configure Nomad autoscaler](/elastigroup/tools-integrations/nomad/configure-nomad-autoscaler)
* [Down scaling](/elastigroup/tools-integrations/nomad/?id=down-scaling)


 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egimportvm">Why am I getting a <i>Failed to import virtual machine</i> or <i>The create/import has failed</i> message?</summary>

  <div style="padding-left:16px">

  You may get one of these error messages when you're trying to import VMs to Elastigroup:
  * <code>Failed to import virtual machine. Could not retrieve custom image.</code>
  * <code>The create/import has failed. The storage account https://`<storage-account>` that was defined for the boot diagnostic preferences was not found.”</code>

This can happen when the image or storage account does not exist in the Azure portal. Elastigroup validates the resources configured in the VM before importing to make sure the import process will not fail.

**Failed to import virtual machine**
One of the resources checked is the image, which is taken from the VM JSON configuration file.

If you get the `Failed to import virtual machine. Could not retrieve custom image.` message, it means that Elastigroup couldn't find the custom image configured.
 
Find the name of the image in the Azure console. Go to **VM details** > **JSON view** > **imageReference**. Verify that this image also exists in ______________?

<font color="#FC01CC">this is from the original kb article:
For example - we could see that the machine was configured with the image in the following URL:
/subscriptions/390bd210-33e0-4b8f-b7d6-764938e92b79/resourceGroups/MavericksTechLab_RG/providers/Microsoft.Compute/images/MavericksTechLab-IMG
When we checked the Azure portal, we could not find this image.

............where's the URL from? Spot or Azure? I don't understand where they look to compare the values....
</font>

**The create/import has failed**
The storage account `<Service account>` that was defined for the boot diagnostic preferences was not found.

Before starting the import process, Elastigroup verifies that the service account configured exists in the subscription.

This error means that Elastigroup didn't find a valid storage account in the subscription.

Find the storage account URL in the Azure console. Go to **VM details** > **JSON view** > **diagnosticsProfile**. Verify that this URL is also in ______________?

<font color="#FC01CC">this is from the original kb article:
You can verify it on your end as well by checking if the URL of the storage account is valid -
You can find the URL by navigating to Azure console --> VM details --> JSON view  --> diagnosticsProfile.

............how do they verify it on their end? Spot or Azure? I don't understand where they look to compare the values....
</font>

 </div>

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="azurestatefulnode">Can I delete an Azure stateful node and manage it in the Azure console?</summary>

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

5. Recycle the stateful node. <font color="#FC01CC">How do you recycle?</font>
6. Make sure the stateful node is not running on the Spot VM. <font color="#FC01CC">How do you check?</font>
7. Go to <b>Edit Node</b> and delete the node.

   <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">
   
8. In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.
9. Verify that the VM with the resources is running in Azure.

 </div>

 </details>
