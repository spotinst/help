<meta name=“robots” content=“noindex”>

# Frequently Asked Questions

<!----------------------------------general---------------------------------->

## General
 <details style="background:#f2f2f2; padding:6 px; margin:10 px 0 px 0 px 0 px">
   <summary markdown="span" style="background:#f2f2f2">How are running hours calculated in the Spot console and AWS?</summary>

 Running hours are calculated from the moment an instance is launched until it is <i>detached</i> and not <i>terminated</i>. AWS calculates the entire lifetime of the instance.

Here are some reasons for large differences between the numbers in the Spot Console and AWS:
* Groups of instances with long draining periods
* Shutdown scripts with long grace periods

 </details>

<!----------------------------------ocean---------------------------------->

## Ocean
 
 <details style="background:#f2f2f2">
   <summary markdown="span" style="background:#f2f2f2">Why does Ocean fail to update instance types?</summary>

You cannot update the instance types in the default virtual node group. For example, it’s not supported to remove <i>m4.large</i> and <i>m5.large</i>, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> to the default virtual node group, and then update the cluster.

If you do, you’ll get this error:
<pre><code>
Launch spec ols-xxxxxxxx instance types are not a subset of ocean cluster
</code></pre>

Remove the instance types at the cluster level, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> instance types, and then update the cluster.

Instance types of the virtual node group are always a subset of the Ocean cluster.

 </details>


 <details style="background:#f2f2f2">
   <summary markdown="span" style="background:#f2f2f2">Why can't I spin new instances?</summary>
<span style="background:#f2f2f2">You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

<code>ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.`</code>

If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 ![cant-spin-instances-invalidsnapshot1](https://github.com/spotinst/help/assets/167069628/1010d3de-2932-4677-92ed-ed6c124fe9a6)

</span>
 </details>
 
 <details>
   <summary markdown="span">Can hostPort cause underutilized nodes?</summary>

If a node only has one task running, then it causes the node to be underutilized. Underutilized nodes should be bin-packed together if there are no constraints in the task/service definition.

Example service:

<pre class=lang-json"><code>"placementConstraints": [],
   "placementStrategy": [],
</code></pre>

The task definition doesn't have constraints to spread tasks across nodes.

<pre><code>
"placementConstraints": [
  {
  "type": "memberOf",
  "expression": "attribute:nd.type == default"
  }
  ],
</code></pre>

Check the **portMappings: hostPort** value in the task/service defintion.

Port mappings allow containers to access ports on the host container instances to send or receive traffic. This configuration can be found in the task definition. The hostPort value in port mapping is normally left blank or set to 0.

 </details>

 <details>
   <summary markdown="span">Can I include or exclude instance types in my Ocean cluster?</summary>

 You can include or exclude certain instance types in your Ocean cluster. Typically, you do it from the cluster configuration.
* **Blacklist**: instance types to block launching in the Ocean cluster. It cannot be used with a permit list.
* **Whitelist**: instance types allowed in the Ocean cluster. It cannot be used with a deny list.
* **Filtering**: list of filters. The instance types that match with all filters make up the Ocean's whitelist parameter. Filtering cannot be used with allow or block lists.

You can allow, [block](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types?id=opt-out-of-machine-types), or [filter](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types?id=select-instance-types-with-advanced-filters) instance types in the cluster configuration in <i>compute: instanceTypes</i> in the cluster’s JSON or using an API.

![exclude-instance-ocean1](https://github.com/spotinst/help/assets/167069628/be29e0f4-5a2c-4e46-a823-f72c218e0460)

 </details>

  <details>
   <summary markdown="span">Why am I getting an InvalidBlockDeviceMapping error?</summary>

You can get this error when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

<code>Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping</code>

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

Change the device name from <code>xvda</code> to <code>/dev/xvda</code> on the group's side. Go to **Actions** > **Edit Configuration** > **Review Tab** > **Switch to Json Edit format** > **Apply the changes and save**.

 </details>

  <details>
   <summary markdown="span">Why am I getting an import Fargate services error?</summary>

 When you import Fargate services with more than 5 security groups, you get an error: 

<code>Failed to import Fargate services into Ocean. Please verify Spot IAM policy has the right permissions and try again.</code>

In Spot, you see this warning:

<code>Fargate import failed for xxx-xxxxxx, due to Failed to import services, too many security groups. Import less services to this group (Group ID: xxxx-xxxxxx).</code>

 </details>

  <details>
   <summary markdown="span">Can I deploy AWS node termination handler on Spot nodes?</summary>
   
<a href="https://ec2spotworkshops.com/using_ec2_spot_instances_with_eks/070_selfmanagednodegroupswithspot/deployhandler.html">AWS node termination handler</a> is a DaemonSet pod that is deployed on each spot instance. It detects the instance termination notification signal so that there will be a graceful termination of any pod running on that node, drain from load balancers, and redeploy applications elsewhere in the cluster.

If not handled, the application code may not stop gracefully, take longer to recover full availability, or accidentally schedule work to nodes going down.

The workflow of the node termination handler DaemonSet is:
1. Identify that a spot instance is being reclaimed.
2. Use the 2-minute notification window to prepare the node for graceful termination.
3. Taint the node and cordon it off to prevent new pods from being placed.
4. Drain connections on the running pods.
5. Replace the pods on the remaining nodes to maintain the desired capacity.

Ocean does not conflict with aws-node-termination-handler. It is possible to install it, but using aws-node-termination-handler is not required. Ocean continuously analyzes how your containers use infrastructure, automatically scaling compute resources to maximize utilization and availability.
Ocean ensures that the cluster resources are utilized and scales down underutilized nodes to optimize maximal cost.
 
 </details>

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

 <details>
   <summary markdown="span">How can I update the instance metadata (IMDS) in my cluster?</summary>


1. Follow the [Ocean AWS Cluster Create](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Elastigroup AWS Create](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) API instructions and add this configuration for the cluster:
   <pre><code>
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

 </details>

 <details>
   <summary markdown="span">Why can't I spin new instances?</summary>

You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

<code>ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.`</code>

If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 ![cant-spin-instances-invalidsnapshot1](https://github.com/spotinst/help/assets/167069628/1010d3de-2932-4677-92ed-ed6c124fe9a6)

If you have another snapshot, then you can use that snapshot ID for the block device mapping. If not, you can remove the snapshot ID, and then the instance is launched using the AMI information.

* **Elastigroup**: on the Elastigroup you want to change, [open the creation wizard](https://docs.spot.io/elastigroup/features/compute/block-device-mapping?id=block-device-mapping) and update the snapshot ID.
  ![cant-spin-instances-invalidsnapshot2](https://github.com/spotinst/help/assets/167069628/1893d6e9-1d98-4ac5-81e6-1f1ce7ccef2f)

* **Ocean**: on the virtual node group you want to change, update the snapshot ID.
 ![cant-spin-instances-invalidsnapshot3](https://github.com/spotinst/help/assets/167069628/e4b1a3aa-8404-4877-afbc-50337d67953c)

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details>
   <summary markdown="span">How can I update the instance metadata (IMDS) in my cluster?</summary>

Instance metadata service (IMDS) is data about your instance that you can use to configure or manage the running instance or virtual machines. IMDS comes from the cloud providers. The metadata can include instance ID, IP address, security groups, and other configuration details.
Instance metadata service version 2 (IMDSv2) addresses security concerns and vulnerabilities from IMDSv1. IMDSv2 has more security measures to protect against potential exploitation and unauthorized access to instance metadata.

**Scenario 1: Ocean and Elastigroup**
You can define metadata for autoscaling groups in AWS that gets imported when you import the groups from AWS to Spot. You can manually configure them in Spot to use IMDSv2.

1. Follow the [Ocean AWS Cluster Create](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Elastigroup AWS Create](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) API instructions and add this configuration for the cluster:
   <pre><code>
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
   
 </details>
