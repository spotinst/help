<meta name="robots" content="noindex">

# FAQs in progress

<!----------------------------------general---------------------------------->

## General
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="keepjenkinsalive">Can I keep Jenkins Agent alive after a job finishes?</summary>

  <div style="padding-left:16px">
  [old article](https://docs.spot.io/kb/keep-jenkins-agent)
  [zendesk](https://support.spot.io/hc/en-us/articles/15796192786973-Is-it-possible-to-keep-Jenkins-slave-alive-after-the-job-was-completed)

You can prevent an immediate termination of a specific spot instance that acted as an agent and carried out a certain Jenkins job. This can be useful if you want to:

* Start additional jobs immediately after
* Optimize resource utilization
* Debug or review logs

<i>Idle minutes before termination</i> defines how long the Spot plugin should wait before terminating an idle instance.

Increase the <i>Idle minutes before termination</i> in the [Spot Jenkins plugin](https://docs.spot.io/tools-and-provisioning/ci-cd/jenkins).

 </div>

 </details>

<!----------------------------------ocean---------------------------------->

## Ocean
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="spinspotinstances">Why can't I spin new spot instances (InsufficientInstanceCapacity)?</summary>

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

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ebsvolumeerror">Why am I getting instance launch failed because an EBS volume cannot be encrypted error?</summary>

<div style="padding-left:16px">

   [old article](https://docs.spot.io/kb/error-awsserviceroleforec2spot)   
   [zendesk](https://support.spot.io/hc/en-us/articles/12185509823517-Error-you-must-grant-the-AWSServiceRoleForEC2Spot-service-linked-role-access-to-any-custom-KMS-keys)
   
If you get this error:

<pre>Spot Bad Parameters: Spot Request id: Optional<instance ID>. Code: bad-parameters Message: <timestamp>: Instance launch failed because an EBS volume cannot be encrypted. If your launch specification includes an encrypted EBS volume, you must grant the AWSServiceRoleForEC2Spot service-linked role access to any custom KMS keys.</pre>

Then there are missing permissions in the KMS custom key. You can configure KMS keys:
* [From the same AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/create-encryption-key?id=create-encryption-key)
* [From a different AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/use-cross-account-kms-key-to-encrypt-ebs-volumes) (cross-account)

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="spotinstagentlogs">Can I disable Spotinst Agent logging?</summary>

  <div style="padding-left:16px">

   [old article](https://docs.spot.io/kb/spotinst-logs)   
   [zendesk](https://support.spot.io/hc/en-us/articles/16419891697821-Is-it-possible-to-disable-Spotinst-Agent-from-sending-logs-to-Syslog-Spotinst-Agent-logs-path)
   
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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="scalinglatency">Can I configure a scaling policy for the latency metric?</summary>

  <div style="padding-left:16px">

   [old article](https://docs.spot.io/kb/scaling-latency)   
   [zendesk](https://support.spot.io/hc/en-us/articles/12027911325853-EG-How-To-Configure-Scaling-Policy-For-The-Latency-Metric)
   
You can create a scaling policy for latency.

<img width=60% src="https://github.com/spotinst/help/assets/167069628/bc4be548-a0d1-4fb3-85dd-0a32853d99c1">

<font color="#7632FE"> where do you do this? this is what I found in the documentation:
1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies/Up Scaling Policies, click **Add Policy**.
https://docs.spot.io/elastigroup/features/scaling/simple-scaling-policies

ORRRRRR.............

1. In the Spot console, go to **Elastigroup** and click **Groups**.
2. Click on the name of the Elastigroup and click the Load Balancers tab.

https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/view-load-balancers?id=go-to-the-load-balancers-tab
</font>

3. Select these parameters:
    * **Auto Scale Based on**: <i>Other</i>
    * **Namespace**: <i>AWS/Application ELB</i>
    * **Metric Name**: <i>TargetResponseTime</i>
    * **Dimensions – Name**: <i>LoadBalancer</i>
    * **Dimensions – Value**: this is the ARN of the load balancer, for example: `loadbalancer/app/<load-balancer-name>/<xxxxxxxxxxx>`
<font color="#7632FE">I added loadbalancer to the dimensions value so it's more clear. is that okay?</font>

![scaling-latency3](https://github.com/spotinst/help/assets/167069628/e9de15c8-6714-4f8f-a458-d2b4e182cf03)

4. Click **Next**.
<font color="#7632FE">is that the last step? they don't need to do anything else?</font>

 </div>

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxx">Question?</summary>

  <div style="padding-left:16px">

body

 </div>

 </details>
