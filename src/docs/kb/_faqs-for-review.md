<meta name="robots" content="noindex">

# FAQs for review

<!----------------------------------
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxxx">?</summary>

  <div style="padding-left:16px">

   text
   
 </div>

 </details>
 ---------------------------------->

<!----------------------------------where to put these?---------------------------------->

<!--## Where do these go?
 
<!----------------------------------general---------------------------------->

## General


<!----------------------------------ocean---------------------------------->

## Ocean
 
 


<!----------------------------------elastigroup---------------------------------->
## Elastigroup



<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

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
   2.	[Move the Azure resources to a different subscription](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription).
   3.	[Connect your Azure subscription](connect-your-cloud-provider/first-account/?id=connect-azure).
   4.	[Import a stateful VM](managed-instance/azure/getting-started/import-stateful-node).

 </div>

 </details>
