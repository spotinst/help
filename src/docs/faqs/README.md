<meta name=“robots” content=“noindex”>

# Frequently Asked Questions

## General
 <details>
   <summary markdown="span">How are running hours calculated in the Spot console and AWS?</summary>

 Running hours are calculated from the moment an instance is launched until it is <i>detached</i> and not <i>terminated</i>. AWS calculates the entire lifetime of the instance.

Here are some reasons for large differences between the numbers in the Spot Console and AWS:
* Groups of instances with long draining periods
* Shutdown scripts with long grace periods

 </details>

## Ocean
 
 <details>
   <summary markdown="span">Why does Ocean fail to update instance types?</summary>

You cannot update the instance types in the default virtual node group. For example, it’s not supported to remove <i>m4.large</i> and <i>m5.large</i>, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> to the default virtual node group, and then update the cluster.

If you do, you’ll get this error:
<pre><code>
Launch spec ols-xxxxxxxx instance types are not a subset of ocean cluster
</code></pre>

Remove the instance types at the cluster level, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> instance types, and then update the cluster.

Instance types of the virtual node group are always a subset of the Ocean cluster.

 </details>

 <details>
   <summary markdown="span">How can I update the metadata in my cluster?</summary>

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
