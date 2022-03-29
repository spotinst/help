# Manage Stateful Nodes

Elastigroup enables you to see an overview of all your stateful nodes, get status at a glance, perform other tasks, and drill down to more detailed information when you need to.

To manage your stateful nodes in the Spot console, go to Elastigroup in the menu tree and click Stateful Nodes.

<img src="/elastigroup/_media/azure-manage-stateful-nodes-01a.png" />

## View List of Stateful Nodes

The list of stateful nodes gives you a quick view of your nodes and basic information including:
- Node Name: The user-given name of the node.
- ID: The unique identifier that Elastigroup assigned to the node upon creation.
- VM Name: The Azure VM name. Click the VM Name to load the Azure portal for this specific VM.
- Region: The Azure region where the node is located.
- Availability Zone: The Azure availability zone where the VM is located.
- VM Size: The VM size assigned to the node.
- Life Cycle: Spot or on-demand.
- Public IP: The public IP address which is assigned to the VM.
- Private IP: The private IP address which is assigned to the VM.
- Creation Date: The date the node was created.
- Status: The activity status of the node (e.g., Running, Paused).

## Filter Node List

If you have a long list of stateful nodes, you can use the filter above the list to find one or multiple nodes. Just enter a tag, an attribute, a keyword or simply a string of text into the filter box and type enter.

<img src="/elastigroup/_media/azure-manage-stateful-nodes-02.png" />

## View Node Details

To get detailed information, statistics, and operational information about a stateful node, click on the Node Name. This will open the Node Details page for that node which serves as your operational dashboard for the node.

## Use Node Actions

To perform one of the node actions, click on the Actions menu on the top right and click one of the actions. The actions available include:
- View Configuration
- Recycle
- Pause
- Resume
- Delete

<img src="/elastigroup/_media/azure-manage-stateful-nodes-03a.png" />

## What’s Next?

Learn more about the [Stateful Node Details](elastigroup/tutorials-azure/use-stateful-nodes/view-details) view.
