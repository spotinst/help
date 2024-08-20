<meta name="robots" content="noindex">

# FAQs in progress

<!----------------------------------general---------------------------------->

## General

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxx">?</summary>

  <div style="padding-left:16px">


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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxx">?</summary>

  <div style="padding-left:16px">


 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxx">?</summary>

  <div style="padding-left:16px">


 </div>

 </details>

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkgrouperror">Why am I getting a group is in error state message when I try to delete an Elastigroup Beanstalk from the Spot console?</summary>

  <div style="padding-left:16px">
If you get this message when you try to delete an Elastigroup Beanstalk from the Spot console:

<pre>Group is in ERROR state and not in READY state, cannot delete it</pre>

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

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="azurestatefulnode">Can I delete an Azure stateful node and manage it in the Azure console?</summary>

  <div style="padding-left:16px">
1. Go to the stateful node in the Spot console and click **Edit node**.
2. Go to **Review**, switch to **JSON review**, and select **Edit mode**.
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
7. Go to **Edit Node** and delete the node.

   <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">

   
8. In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.
9. Verify that the VM with the resources is running in Azure.

 </div>

 </details>
