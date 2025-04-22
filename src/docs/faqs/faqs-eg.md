# FAQs - Elastigroup

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eglogfiles">AWS, Azure, GCP: Why can I only see some of the logs in the Spot console?</summary>

  <div style="padding-left:16px">

The log file shows up to 1,000 items at a time.

In the Spot console, try filtering on a shorter date range, a severity, or a specific resource.

You can also [export the logs to an S3 bucket](elastigroup/tools-integrations/s3logintegration).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ocautotag">AWS: What does autoTag in CloudFormation do?</summary>

  <div style="padding-left:16px">

When you use autoTag in CloudFormation, Spot adds these tracking tags to instances provisioned as part of the custom resource:

* `spotinst:aws:cloudformation:logical-id`
* `spotinst:aws:cloudformation:stack-name`
* `spotinst:aws:cloudformation:stack-id`

You can see examples of autotagging in:

* [Ocean](tools-and-provisioning/cloudformation/template-structure/parameters?id=request-json-example-adding-auto-tags-to-a-kubernetes-ocean-cluster)
* [Elastigroup](tools-and-provisioning/cloudformation/template-structure/parameters?id=request-json-example-adding-auto-tags-to-elastigroup)

   </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmonitortags">AWS: Can I monitor detached instances using tags?</summary>

<div style="padding-left:16px">

You can monitor your detached instances using tags. When an instance gets detached, Spot tags it with:

`Key: spotinst:aws:ec2:state`

`Value: detached`

For a spot instance, the spot request is tagged. For an on-demand instance, the instance is tagged.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eg2min">AWS: Why doesn’t Spot gracefully terminate instances if AWS gives a 2-minute termination notice?</summary>

  <div style="padding-left:16px">

AWS has a 2-minute warning before terminating spot instances. In reality, the warning doesn’t always give you the full 2 minutes. Sometimes, it can be as short as a few seconds.

When AWS terminates an instance, the machine status is updated regardless of the notification. Elastigroup and Ocean monitor the instance's status and can immediately launch a replacement spot instance. For this to happen, capacity must be available in the AWS market. Spot can’t always run the shutdown script in time due to capacity.

You can get higher availability by including:

* More instance types and availability zones for the group/cluster
* Fallback to on-demand

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egssh">AWS: Why can’t I connect to an instance in Spot using SSH?</summary>

  <div style="padding-left:16px">

It’s possible that you can connect to your AWS instance using SSH but not your Spot instance, even with the same VPC, subnet, security group, and AMI.

One of the reasons this can happen is if you’re using enhanced networking and aren’t using the default eth0 predictable network interface name. If your Linux distribution supports predictable network names, this could be a name like ens5. For more information, expand the RHEL, SUSE, and CentOS section in [Enable enhanced networking on your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking-ena.html#enabling_enhanced_networking).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="eglockedautohealing">AWS: Does autohealing work on locked instances?</summary>

  <div style="padding-left:16px">

You can [lock](elastigroup/features/core-features/instance-actions?id=lock-an-instance) specific instances to prevent them from being scaled down during autoscaling. Instance protection doesn’t work on unhealthy instances. The unhealthy instance handler starts a replacement as a part of the [autohealing](elastigroup/features/compute/autohealing) process, which tries to detach the instance. The detach instances command doesn’t take instance protection into account.

   </div>

 </details>
 
   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egcustomproxy">AWS: Can I use a custom proxy client for Spot health check service?</summary>

  <div style="padding-left:16px">

Yes, you can make changes to how the proxy agent works.

The Spot [health check service](elastigroup/tools-integrations/custom-health-check-service) is a proxy between Spot hosts and your EC2 private instances in your VPC. Spot triggers the proxy service on each check. The proxy communicates with your private instances in the VPC and sends the results to Spot. When an instance is marked as unhealthy, and the Elastigroup Health Check type is set to HCS, Spot replaces it with a new instance according to the Elastigroup config.

You can create a custom proxy agent based on the [Spot health check service API](https://github.com/spotinst/spotinst-hcs-openapi).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egoutofstrategy">AWS: Why am I getting an <i>Out Of Strategy - On Demand No Replacement Will Be Created</i> message?</summary>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egunsupportedop">AWS: Why can’t I spin new instances (UnsupportedOperation)?</summary>

  <div style="padding-left:16px">

You can get this message when the group or cluster is scaling up instances:

````
Can't spin spot instance: Code: UnsupportedOperation, Message: The instance configuration for this AWS Marketplace product is not supported. Please see the AWS Marketplace site for more information about supported instance types, regions, and operating systems.
````

This typically happens if the group/cluster AMI product doesn’t support specific instance types in the group/cluster instance list.

1. Identify the AMI:

   * [Search AWS Marketplace for the AMI ID](https://aws.amazon.com/marketplace/search/results?ref_=nav_search_box&searchTerms=ami).
   * **Elastigroup**: in the Spot console, go to **Elastigroup** > **Groups** > select the group > **Group Information** and click **Details** > **productCodeId**.
   * **Ocean**: in the Spot console, go to **Ocean** > **Cloud Clusters** > select the cluster > **Actions** > **Edit Cluster** > **Compute** > **Instance specifications** > **View AMI details** > **productCodeId**.

2. [Troubleshoot AWS Marketplace AMIs](https://repost.aws/knowledge-center/ami-marketplace-troubleshoot). For example, check the instance types, regions, and availability zones. You can compare the instance types in AWS with the Spot console:

   * **Elastigroup**: in the Spot console, go to **Elastigroup** > **Groups** > select the group > **Compute** > **Instance types**.
   * **Ocean**: in the Spot console, go to **Ocean** > **Cloud Clusters** > select the cluster > **Actions** > **Edit Cluster** > **Compute** > **Instance types**.
   
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsnvol">AWS: Can I increase the volume size of a stateful instance?</summary>

  <div style="padding-left:16px">

If you have a stateful Elastigroup with root or data volume persistence, you can increase the root or data volume size. Make sure the new volume is greater or equal to the existing volume size:

* In the [AWS console](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-modify-volume.html), modify the volume. The new increased volume will show in the stateful instance.
* In the Spot console, configure [block device mapping](elastigroup/features/compute/block-device-mapping) to override the size of the root or data volumes (if you are using [snapshot backups](elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch?id=select-storage-persistence-options)). Then, [recycle](managed-instance/features/replacement-process?id=recycle) the stateful instance.

   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsnrevert">AWS: Is a stateful Elastigroup affected by the <i>revert to preferred</i> process?</summary>

  <div style="padding-left:16px">

[Revert to preferred/reserved](elastigroup/features/core-features/market-scoring-managing-interruptions?id=revert-to-preferred-spot) do not work for stateful groups because the processes require recycling, which causes downtime.

You can configure a [maintenance window](elastigroup/features/core-features/maintenance-windows) to control replacing on-demand instances with spot instances.

   </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egdelinstance">AWS: Can I delete a stateful instance from Spot and manage it in AWS?</summary>

  <div style="padding-left:16px">

You can remove your stateful instance from Elastigroup and manage it only in AWS:

1. In the Spot console, go to **Elastigroup** > **Groups** and select the stateful group.
2. Click **Actions** > **Edit Configuration** > **Instance Type**.
3. Go to **Advanced** and change **Spot vs On-Demand Spot Percentage** to <i>0%</i>.
4. Click **Next** > **Review** > **Update**.
5. Select the stateful group and go to the Instances tab.
6. Select the managed instance and click **Actions** > **Recycle**. This will launch an on-demand instance.
7. Once the new on-demand instance is running, select the stateful group.
8. Click **Actions** > **Edit Configuration**.
9. Go to the Review tab > **JSON** > **Edit Mode**.
10. Change all persistence options to <i>false</i> and click **Update**. For example:

     ````json
           "persistence": {
             "shouldPersistBlockDevices": false,
             "shouldPersistRootDevice": false,
             "shouldPersistPrivateIp": false
           }
     ````

11. Select the stateful group, and go to the Instance tab.
12. Select the instance, then click **Actions** > **Detach**. Make sure:

    <ol style="list-style-type: lower-alpha;">
    <li><b>Terminate Instances</b> <i>is not</i> selected.</li>
    <li><b>Decrement Group’s Capacity</b> <i>is</i> selected.</li>
    </ol>

The on-demand instance is detached from the Elastigroup and you can manage it in AWS. You can choose to delete the Elastigroup if it’s not needed.

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

   * `Failed to import virtual machine. Could not retrieve custom image.`
   * `The create/import has failed. The storage account https://{storage-account} that was defined for the boot diagnostic preferences was not found.”`

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egtfupdate">Integration: How can I update Terraform provider to the latest version?</summary>

   <div style="padding-left:16px">

You can:

* [Download the Spot provider plugin](tools-and-provisioning/terraform/getting-started/install-terraform) and update it.
* [Update the plugin from Terraform](tools-and-provisioning/terraform/getting-started/install-terraform#update-terraform-provider).

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="emrscaling">Integration: Why aren't my existing scaling policies imported with the EMR cluster?</summary>

  <div style="padding-left:16px">

Elastigroup has its own scaling and manages the instance groups. [Clone and wrap](elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes) don’t actually import the cluster:

* <i>Clone</i>: Elastigroup copies the configuration of an existing environment (including terminated environments) and creates a new cluster with this configuration.
* <i>Wrap</i>: Elastigroup manages scaling of only the task nodes of an existing EMR cluster.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="integrationemr">Integration: Why should I use on-demand for EMR core node and spot for task nodes?</summary>

  <div style="padding-left:16px">

If a core instance is terminated, the group is permanently deleted. Core and masters are essential for the group to work well in [EMR](elastigroup/tools-integrations/elastic-mapreduce/). As a result, it’s better to use on-demand instances for core nodes.

Task nodes can be replaced frequently as part of different instance groups, so it’s better to use spot instances for task nodes.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egssndelinstance">AWS: Can I delete a stateful node from Spot and manage it in AWS?</summary>

  <div style="padding-left:16px">

You can remove your stateful instance from Elastigroup and manage it only in AWS:

1. In the Spot console, go to **Elastigroup** > **Stateful Nodes** and select the stateful node.
2. Click **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**.
3. Change **lifeCycle** to <i>on_demand</i> and click **Update**. For example:
   
     ````json
           "strategy": {
            "lifeCycle": "on_demand",
     ````

4. Select the stateful node and click **Actions** > **Recycle**. This will launch an on-demand node.
5. Once the new on-demand instance is running, select the stateful node.
6. Click **Actions** > **Edit Configuration**.
7. Go to the Review tab > **JSON** > **Edit Mode**.
8. Use the API to delete the stateful node. Make sure to change **shouldTerminateInstance** to <i>false</i> if you want to keep the instance.
   >**Note**: If you don’t select false, the instance will be terminated, and the node will be deleted.

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
