# View Stateful Node Details

The Stateful Node Overview tab gives you quick access to insights and summary data about the node. You can obtain an overview of your current cost efficiency status and an overview of your persisted network and storage resources.

To get to the Stateful Node Overview tab, do the following:
1. In the Spot console, go to Elastigroup in the menu tree and click Stateful Nodes.
2. In the [list of stateful nodes](elastigroup/tutorials-azure/use-stateful-nodes/manage), click on a Node Name.

<img src="/elastigroup/_media/azure-view-stateful-node-details-01.png" />

The stateful node page opens with the Overview tab open and the node name at the top. The Overview page includes the following main areas:
- Node Summary
- Stateful Node Info
- Persisted Resources

## Node Summary

The Node Summary provides insights into your node usage. The default display shows statistics from the first of the month to the current date. You can also see the numbers for the last seven days and the last 30 days. The following information is presented:
- VM Size: The number of instances running in the Elastigroup.
- Hours: Number of hours the VM has been used.
- Potential Costs: The cost calculated if the VM had been on-demand.
- Actual Costs: The cost of the VM using spot VMs.
- OD Costs: The cost of on-demand VMs used. (This should be zero unless no spot VMs were available and fallback to OD was required.
- Saved: The amount of money saved using spot VMs.
- Savings Percentage: The cost of spot VMs per cost if all OD VMs were used.

## Stateful Node Info

This area gives you a quick point of reference for vital information about the stateful node.

<img src="/elastigroup/_media/azure-view-stateful-node-details-02.png" />

## Persisted Resources

This area provides a summary of your persisted resources. At the top, status icons indicate the activity status of the OS Disk, Data Disk, and Network.

### Network

The first table shows information about the network resources.

<img src="/elastigroup/_media/azure-view-stateful-node-details-03.png" />

### Storage

The second table shows information about the storage resources.

<img src="/elastigroup/_media/azure-view-stateful-node-details-04.png" />

## What’s Next?

Learn more about stateful node [Actions]().
