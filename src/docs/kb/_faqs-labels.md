<meta name="robots" content="noindex">

# Frequently Asked Questions

<!----------------------------------general---------------------------------->

## General

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="genodresp">AKS, ECS, EKS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="secretnotvalid">Azure: Why can my cluster not perform scaling actions (invalid client secret)?</summary>

  <div style="padding-left:16px">

You got this error in the logs, and it’s not possible for the cluster to perform any scaling actions:

<code>Invalid client secret provided. Ensure the secret being sent in the request is the client secret value, not the client secret ID, for a secret added to app</code>

In Azure Kubernetes Service (AKS), there are two kinds of secrets: <i>client secret ID</i> and <i>client secret value</i>.

Generate a new client secret <i>value</i> and [update it in the API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure).

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

<!----------------------------------ocean---------------------------------->

## Ocean

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanodresp">ECS, EKS: Why is my on-demand instance utilized as a reserved instance/savings plan?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceantokens">AKS, EKS, GKE: What are the minimum permissions needed for a programmatic token for creating an Ocean cluster controller?</summary>

  <div style="padding-left:16px">

   You can use a programmatic token for creating Ocean cluster controllers. The benefit of programmatic tokens is they aren't linked to a specific user. If the user is deleted, it doesn't affect the Ocean controller. This helps prevent interruptions and heartbeat issues.

   At minimum, the token must have **account viewer** [permissions](/administration/policies/). Viewer permission is the only permission required for a cluster controller to operate. Cluster controllers don't manage resources in Ocean, the autoscaler does. If you want this same programmatic user to manage other resources in your cluster, additional permission policies are required.

For a network client, only the **account viewer** permission is required for the client to operate.
   
 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanfailinstancetypes">AKS, ECS, EKS, GCP: Why does Ocean fail to update instance types?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanssar">Should I get frequent <i>SelfSubjectAccessReview</i> requests after upgrading to Ocean Controller Version 2?</summary>

  <div style="padding-left:16px">


After you upgrade to Ocean Controller Version 2, you may get many SIEM alerts due to <i>SelfSubjectAccessReview</i> requests to your API server. This is expected behavior.

With the Version 2 Ocean Controller, Spot gets reports for any custom resource you gave it access to through the controller cluster role. For example, an Argo Rollouts custom resource or a VerticalPodAutoscaler for rightsizing. These require Spot to list the custom resources in the cluster and make sure there's read access. This happens when the  controller starts up and on a regular basis when it's running.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocinvalidblockdevicemapping">ECS, EKS: Why am I getting an InvalidBlockDeviceMapping error?</summary>

<div style="padding-left:16px">

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

<code>Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping</code>

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from <code>xvda</code> to <code>/dev/xvda</code> on the group's side. Go to **Actions** > **Edit Configuration** > **Review Tab** > **Switch to Json Edit format** > **Apply the changes and save**.

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


<!----------------------------------elastigroup---------------------------------->
## Elastigroup

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eginvalidblockdevicemapping">ECS, EKS: Why am I getting an InvalidBlockDeviceMapping error?</summary>

<div style="padding-left:16px">

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

<code>Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping</code>

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from <code>xvda</code> to <code>/dev/xvda</code> on the group's side. Go to **Actions** > **Edit Configuration** > **Review Tab** > **Switch to Json Edit format** > **Apply the changes and save**.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ebsvolumeerror">AWS: Why am I getting instance launch failed because an EBS volume cannot be encrypted error?</summary>

<div style="padding-left:16px">

If you get this error:

<pre>Spot Bad Parameters: Spot Request id: Optional<instance ID>. Code: bad-parameters Message: <timestamp>: Instance launch failed because an EBS volume cannot be encrypted. If your launch specification includes an encrypted EBS volume, you must grant the AWSServiceRoleForEC2Spot service-linked role access to any custom KMS keys.</pre>

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

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

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

Yes, you can increase the disk size for stateful nodes:
1. [Pause the stateful node](https://docs.spot.io/managed-instance/features/managed-instance-actions?id=pause) in the Spot console.
2. Once the stateful node is paused, open the Azure Portal and click **Disks**.
3. Click **Custom Disk Size**, update the disk size, and save the changes.
4. [Change the Performance Tier](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-performance-tiers-portal#change-performance-tier).
5. Resume the stateful node in the Spot console.

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
