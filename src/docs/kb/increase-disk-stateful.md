<meta name="robots" content="noindex">

# Azure | Stateful | Increase Disk Size for Stateful Nodes

## Instructions

1. [Pause the stateful node](https://docs.spot.io/managed-instance/features/managed-instance-actions?id=pause) in the Spot console.
2. Once the stateful node is paused, open the Azure Portal and click **Disks**.
3. Click **Custom Disk Size**, update the disk size, and save the changes.
4. You may need to [change the Performance Tier](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-performance-tiers-portal).  <font color="#7632FE">What do they need to change on the performance tier? and where do they do it? is the link correct?</font>
5. Resume the stateful node in the Spot console.
