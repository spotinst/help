<meta name="robots" content="noindex">

# FAQs in progress

<!----------------------------------general---------------------------------->

## General

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxx">?</summary>

  <div style="padding-left:16px">


 </div>

 </details>

<!----------------------------------ocean---------------------------------->

## Ocean

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanlaunchspec">Why am I getting the error: <i>when default launchSpec is used as a template only, can't raise target of Ocean</i>?</summary>

  <div style="padding-left:16px">

   When the <code>useAsTemplateOnly</code> parameter is <i>true</i>, you cannot edit the target capacity in the Ocean cluster configuration.
   
   <font color="#FC01CC">I need more info for this kb. Which API is this for? Where do I see this parameter? I can’t find it in the API documentation</font>
Keep  in mind that it may not be necessary to increase the target capacity. Instances will not be launched if the virtual node group is a template.
If you want to edit the target capacity, change the <b>useAsTemplateOnly</b> parameter to <i>false</i>.

<code>"useAsTemplateOnly": false,</code>

   <font color="#FC01CC">I need more info about target capacity--how much should I increase the target capacity? is the a recommendation or a max?
   if it's not necessary to increase the target capacity, what do I need to do? how do I know if I should increase it?

![oceanlaunchspec](https://github.com/user-attachments/assets/6e422a64-db48-4b43-90d0-d6b5ddc35464)
   
   I don’t see the userastemplateonly in https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate</font>
  

 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sscaledown">Can I stop Kubernetes workloads from scaling down in Ocean?</summary>

  <div style="padding-left:16px">

You can restrict specific pods from scaling down by configuring Ocean and Kubernetes. The instance will be replaced only if:
* It goes into an unhealthy state.
* Forced by a cloud provider interruption.

There are two options for restricting pods from scaling down:
* Kubernetes deployments/pods: spotinst.io/restrict-scale-down: true

  Use the <code>spotinst.io/restrict-scale-down</code> label set to <i>true</i> to block proactive scaling down for more efficient bin packing. This will leave the instance running as long as possible. It gets defined as a label in the pod's configuration. See [restrict scale down](ocean/features/labels-and-taints?id=spotinstiorestrict-scale-down).

* Virtual node group (VNG): restrict scale down (only available for AWS, ECS, and GKE)

  You can configure [Restrict Scale Down](ocean/features/vngs/attributes-and-actions-per-vng) at the VNG level so the nodes and pods within the VNG are not replaced or scaled down due to the auto scaler resource optimization.  Create a VNG, go to the Advanced tab, then select **Restrict Scale Down**.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8spvcerror">Why am I getting a <i>Kubernetes Autoscaler, Deadlock for Pod</i> error?</summary>

  <div style="padding-left:16px">

You get this error in the log:

<pre><code>Kubernetes Autoscaler, Deadlock for Pod: '{pod-name}' 
Can't scale up an Instance since PersistentVolumeClaim: 
'{PVC-name}' 
VolumeId: '{vol-name}' is already attached to an existing Instance: 
'{instance-ID}' Please consider using a new PersistentVolumeClaim or open a 
support ticket.
</code></pre>

This can happen when the pod has a claim for a specific volume owned by a different instance, and that instance does not have free space for the pod.

By freeing up space, the pod can be placed on its attached node and can use the volume it claimed.

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

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkgrouperror">Why am I getting a <i>group is in error state</i> message when I try to delete an Elastigroup Beanstalk from the Spot console?</summary>

  <div style="padding-left:16px">
If you get this message when you try to delete an Elastigroup Beanstalk from the Spot console:

<code>Group is in ERROR state and not in READY state, cannot delete it</code>

You need to put the group in maintenance mode and detach the remaining instances, then you can delete the Elastigroup. <font color="#7632FE">how do you put the group in maintenance mode and detach the remining instances? need instructions or links to instructions. is this relevant? https://docs.spot.io/elastigroup/tools-integrations/elastic-beanstalk/in-asg</font>

Keep in mind, you cannot delete a Beanstalk group if:
* The attached Beanstalk group was deleted. <font color="#7632FE">Is this accurate? An attached Beanstalk group was deleted. so you can’t delete a subgroup and then the parent group? Is that the case?</font>
* One of the resources was deleted, such as a security group or Elastic Beanstalk.

If you get an error, you can force delete the group by deselecting **Rollback beanstalk configuration**.
  
If you need to attach a Beanstalk environment, you can manually [rebuild your Beanstalk environment](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-management-rebuild.html).


 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egodlaunched">Why is an on-demand instance launched instead of a spot instance?</summary>

  <div style="padding-left:16px">
An on-demand instance may be launched instead of a spot instance even if a spot instance is available in the markets selected in the Elastigroup.

<font color="#7632FE">are the 2 hyperlinks below correct?</font>

You can set [Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) for cluster orientation in Elastigroup. Despite this, Spot may prioritize a certain availability zone to maintain equal distribution. 

An [Elastigroup may have Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) set for cluster orientation, but the system sometimes prioritizes a certain availability zone to maintain equal distribution. When no spot instances are available, an on-demand instance spins up in the relevant availability zone.

An on-demand instance may not start, for example, if it hits an AWS instance type limit. This is like an on-demand instance that didn’t launch successfully and was replaced with spot instances in a different market.

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egerrorpeers">Why am I getting a <i>"value" contains a conflict between peers</i> error?</summary>

  <div style="padding-left:16px">

When you import a new group to Elastigroup, you may get this error:
<pre>"value" contains a conflict between exclusive peers [resourceRequirements, spot]</pre>

This happens if the <code>resourceRequirements</code> value is <i>null</i>.

Remove the <i>resourceRequirements</i> field from the JSON file and reimport the group.

 </div>

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="azurestatefulnode">Can I delete an Azure stateful node and manage it in the Azure console?</summary>

  <div style="padding-left:16px">
   
1. Go to the stateful node in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b>.
2. Go to <b>Review</b>, switch to <b>JSON review<b>, and select <b>Edit Mode</b>.
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

5. Recycle the stateful node. <font color="#7632FE">How do you recycle?</font>
6. Make sure the stateful node is not running on the Spot VM. <font color="#7632FE">How do you check?</font>
7. Go to <b>Edit Node</b> and delete the node.

   <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">

   
8. In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.
9. Verify that the VM with the resources is running in Azure.

 </div>

 </details>
