# View Stateful Node Details

The Stateful Node Overview tab gives you quick access to insights and summary data about the node. You can obtain an overview of your current cost efficiency status and an overview of your persisted network and storage resources.

To get to the Stateful Node Overview tab, do the following:
1. In the Spot console, go to Elastigroup in the menu tree and click Stateful Nodes.
2. In the [list of stateful nodes](managed-instance/azure/tutorials/manage), click on a Node Name.

<img src="/elastigroup/_media/azure-view-stateful-node-details-01a.png" />

The stateful node page opens with the Overview tab open and the node name at the top. The node status is indicated next to the name and can be one of the statuses shown in the key below.

<img src="/elastigroup/_media/azure-view-stateful-node-details-001.png" />

The Overview page includes the following main areas:
- Node Summary
- Stateful Node Info
- Persisted Resources

## Node Summary

The Node Summary provides insights into your node usage. The default display shows statistics from the first of the month to the current date. You can also see the statistics for the last seven days and the last 30 days.

<img src="/elastigroup/_media/azure-view-stateful-node-details-002.png" />

The following information is presented:
- VM Size: The VM size assigned to the node. An icon to the left indicates the VM life cycle. Green is a spot VM and blue is on demand.
- Hours: Number of hours the VM has been used.
- Potential Costs: The cost calculated if the VM had been on-demand.
- Actual Costs: The cost of the VM using spot VMs.
- OD Costs: The cost of on-demand VMs used. (This should be zero unless no spot VMs were available and fallback to OD was required.)
- Saved: The amount of money saved using spot VMs.
- Savings Percentage: Percentage of savings when using spot VMs as compared to potential cost if all OD VMs had been used.

## Stateful Node Info

This area gives you a quick point of reference for vital information about the stateful node.

<img src="/elastigroup/_media/azure-view-stateful-node-details-02.png" />

- VM Name: The Azure VM name. You can click the VM Name to load the Azure portal for this specific VM.
- Node ID: The identifier assigned to the node by Spot.
- Description: User given description when the node is created.
- VM Image: The image defined on the node. Will not be displayed when the node is defined with OS persistence.
- Region: The region defined on the node.
- Availability Zones: The Azure availability zones defined on the node.
- VNet Resource Group: Resource group defined on the virtual network of the node.
- Virtual Network: The virtual network of the primary network interface.
- Subnet: The subnet name defined for the primary network interface.
- Spot VM Sizes: The list of spot VM sizes defined on the node.
- On-demand VM Sizes: The list of on-demand VM sizes defined on the node.

## Persisted Resources

This area provides a summary of the persisted resources on the node. At the top, status icons indicate the type of persistence on the node.
- Green: Persistency defined
- Gray: Persistency not defined

### Network

When the node is in Paused state, the tables are not displayed. The first table shows information about the network interfaces attached to the node.

<img src="/elastigroup/_media/azure-view-stateful-node-details-03.png" />

### Storage

The second table shows information about the storage resources.

<img src="/elastigroup/_media/azure-view-stateful-node-details-04.png" />

## What’s Next?

Learn more about stateful node [Actions](managed-instance/azure/features/actions).
