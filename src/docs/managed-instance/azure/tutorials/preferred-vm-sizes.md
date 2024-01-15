# Preferred Spot VM Size for Stateful Nodes 
  
Preferred Spot VM sizes enable you to set priority tiers on the Stateful Node configured VM sizes. VM sizes that are selected as preferred will be prioritized over other types and will be used whenever possible. In cases that any of the preferred VM sizes are not available, the stateful node will use other types that are selected in the group. 
 
## Configure Preferred Spot VM Sizes in Stateful Nodes 

1. In the left main menu, click **Elastigroup** and then **Stateful Nodes**.  
2. Select a stateful node. The stateful node’s details page opens.  

![preferred-vm-size-1](https://github.com/spotinst/help/assets/106514736/b77a44e9-a1d2-438f-a115-5c5786b5d9bc)

3. On the Stateful Node page, click **Edit Node**. 
4. Click the **Compute** tab. Under VM Sizes, click **Spot** and then **Preferred** to select the preferred VM sizes. For example: 

![preffered-vm-size-2](https://github.com/spotinst/help/assets/106514736/eb12f225-4eb7-4240-b2a6-84e8b8151b11)

## What’s Next? 

Learn how to view your [stateful node’s information](managed-instance/azure/tutorials/view-details).  
