<meta name="robots" content="noindex">

# Delete an Azure Stateful Node and Make It Run on Azure End

## Introduction

You can move a stateful node back to Azure and manage it in the Azure console.

## Instructions
1. Go to the stateful node in the Spot console and click **Edit node**.
2. Go to **Review**, switch to **JSON review**, and select **Edit mode**.
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

5. Recycle the stateful node. <font color="#7632FE">How do you recycle?</font>
6. Make sure the stateful node is not running on the Spot VM. <font color="#7632FE">How do you check?</font>
7. Go to **Edit Node** and delete the node.

   <img width="275" alt="delete-azure-stateful1" src="https://github.com/spotinst/help/assets/167069628/2c4635fe-6ce2-40c3-aded-7170c4a93f1f">

   
8. In the Delete Stateful Node window, make sure to deselect all the options because you need the VM to run on the Azure side.
9. Verify that the VM with the resources is running in Azure.
