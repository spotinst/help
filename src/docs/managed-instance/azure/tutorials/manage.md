# Manage Stateful Nodes

Elastigroup enables you to see an overview of all your stateful nodes, get status at a glance, perform tasks such as importing and creating new stateful nodes, and drill down to more detailed information when you need to.

To manage your stateful nodes, in the Spot console, click **Elastigroup** and click **Stateful Nodes**.

![azure-manage-stateful-1](https://github.com/user-attachments/assets/a55cf8c2-61b8-42d3-bf07-2531f367e9f8)

## View List of Stateful Nodes

The list of stateful nodes gives you a quick view of your nodes and basic information including:

* Node Name: The name you entered for the node.
* ID: The unique identifier that Elastigroup assigned to the node upon creation.
* VM Name: The name you created for the virtual machine. 
* Region: The region you defined for the node.
* Availability Zone: The Azure availability zone where the virtual machine is located.
* VM Size: The list of the virtual machine sizes defined on the node.
* Life Cycle: The lifecycle of the virtual machine, On-demand or Spot.
* Creation Date: The date the node was created.
* Status: The activity status of the node (e.g., Running, Paused).
* Public IP: The public IP address assigned to the virtual machine.
* Private IP: The private IP address assigned to the virtual machine.
* Last Update: The date and time of the last update of the node. 
* Instance Type: The instance type of the stateful node.
* Launched at: When the node was launched.

## Filter Node List

If you have a number of stateful nodes, you can use the filter above the list to find one or multiple nodes. Enter a tag, a node attribute, a keyword or simply a string of text into the filter box and type enter.

<img src="/elastigroup/_media/azure-manage-stateful-nodes-02.png" />

## View Node Details

Click the node name to view detailed information, statistics, and operational information about a stateful node. This will open the Node Details page for that node, which will serve as your operational dashboard for the node.

## Create Node

You can do the following from the dropdown menu:

* Create a node.
* Import an existing VM from Azure.  

<img src="/elastigroup/_media/azure-manage-stateful-edit-5.png" width="300"/>

## Use Node Actions

To perform one of the [node actions](managed-instance/azure/features/actions), click the Actions menu on the top right and click one of the actions. The actions available include:
- View Configuration
- Recycle
- Pause
- Resume
- Delete

<img src="/elastigroup/_media/azure-manage-stateful-edit-6.png" />

## Export Data

Click **Export List** to view the list of stateful nodes in CSV format. 

## Edit Node Configuration

When the node status is either Running or Paused, you can edit the node’s configuration in the creation wizard.  

Hover over the relevant row of the node you want to configure in the table and click **Edit**.

<img src="/elastigroup/_media/azure-manage-stateful-edit-1.png" />

If you are on the Overview page, click **Edit Node**.

<img src="/elastigroup/_media/azure-manage-stateful-edit-2.png" />

On the Review page you can edit directly in the JSON configuration. 

1. Click **JSON** and click **Edit Mode**.  

<img src="/elastigroup/_media/azure-manage-stateful-edit-4.png" />

2. Make your changes in the JSON configuration and click **Update**.

Your changes to the configuration are saved and applied to the stateful node. Changes that affect the virtual machine directly (e.g., selected availability zones or virtual machine sizes) will be reflected only when the next virtual machine is launched. In order to make the changes take effect immediately, a [Recycle](managed-instance/azure/features/actions?id=recycle) action is required on the stateful node.

The following parameters cannot be edited and are not included in the JSON configuration that is editable:

`id`<br>
`region`<br>
`resourceGroupName`<br>
`compute.os`

> Note: You can edit a node only when it is in a Running or Paused state.
