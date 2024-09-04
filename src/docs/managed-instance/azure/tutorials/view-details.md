# Stateful Node Details

The Stateful Nodes Overview provides access to key information and summary data about a node. It offers insights into cost efficiency, as well as details about persisted network and storage resources. 

## Stateful Nodes Overview
The Stateful Node Overview tab gives you quick access to insights and summary data about the node. You can obtain an overview of your current cost efficiency status and an overview of your persisted network and storage resources.

To get to the Stateful Node Overview tab:

1. In the Spot console, click **Elastigroup** in the left main menu and click **Stateful Nodes**.
2. In the [list of stateful nodes](managed-instance/azure/tutorials/manage), click a Node Name.

<img width="944" alt="azure-view-stateful-node-details-01a" src="https://github.com/spotinst/help/assets/106514736/12e274e3-0350-44a7-b40e-cf9241357ebf">

The node status is indicated next to the name and can be one of the statuses shown in the key below.

![azure-view-stateful-node-details-001](https://github.com/spotinst/help/assets/106514736/55155909-f7a0-4ebc-8f0d-2a41d887ec2e)

### Node Summary

The Node Summary provides insights into your node usage and displays two panels. 

The top panel shows statistics from the first of the month to the current date. You can also see the statistics for the last seven and 30 days.

<img width="1091" alt="azure-view-stateful-node-details-002" src="https://github.com/spotinst/help/assets/106514736/df7fa0a8-c526-4359-b2fa-80cf751c1853">

The following information is presented in the widgets:

* VM Size: The VM size assigned to the node. An icon to the left indicates the VM life cycle. Green is a spot VM and blue is On-demand.
* Hours: Number of hours the VM has been used.
* Potential Costs: The cost calculated if the VM had been on-demand.
* Actual Costs: The cost of the VM using spot VMs.
* OD Costs: The cost of on-demand VMs used. (This should be zero unless no spot VMs were available and fallback to OD was required.)
* Saved: The amount of money saved using spot VMs.
* Savings Percentage: The percentage of savings when using spot VMs compared to the potential cost if all OD VMs had been used.

The lower panel of the node summary gives you a quick reference point for vital information about the stateful node.

![azure-view-stateful-node-details-02](https://github.com/spotinst/help/assets/106514736/74c018f9-153b-498d-9d56-360cb0f647ed)

* VM Name: The Azure VM name. Click the VM Name to load the Azure portal for this specific VM.
* Node ID: The identifier assigned to the node by Spot.
* VM Resource Group: The resource group of the VM. 
* Description: The description you provided when the node was created.
* Region: The region defined on the node.
* VM Image: The image defined on the node. It will not be displayed when the node is defined with OS persistence.
* Availability Zones: The Azure availability zones that are defined on the node.
* Creation Date: The date the node was created. 
* VNet Resource Group: Resource group defined on the virtual network of the node.
* Virtual Network: The virtual network of the primary network interface.
* Subnet: The subnet name defined for the primary network interface.
* Spot VM Sizes: The list of spot VM sizes defined on the node.
* On-demand VM Sizes: The list of On-demand VM sizes defined on the node.

### Persisted Resources

This area provides a summary of the node's persisted resources. At the top, status icons indicate the node's type of persistence.

* Green: Persistency defined
* Gray: Persistency not defined

This panel displays two lists:

#### Network

The tables are not displayed when the node is in a Paused state. The first table shows information about the network interfaces attached to the node.

<img width="900" alt="azure-view-stateful-node-details-03" src="https://github.com/spotinst/help/assets/106514736/b07195d9-a343-4b55-8539-8193d08564ee">

#### Storage

The second table shows information about the storage resources.

<img width="1034" alt="azure-view-stateful-node-details-04" src="https://github.com/spotinst/help/assets/106514736/9920bf60-b3fa-44e4-b5e3-4b12a7a814b4">

### Node Activity

The node activity bar records the activity in the stateful node in the selected time range at the top right. 

![activity-log-s-node](https://github.com/user-attachments/assets/6776f575-fe69-4895-b6c7-b111f4e9c98f)

Click **Details** below a specific state to view the following:

* Paused- When the stateful node is paused, you can view the actions that occurred on that node until it was paused. You can see the attached or detached disks and the network interface. 
* Recycled- In a recycled stateful node, you can view the history of actions, such as paused and resumed actions. 
* Resume- Continues the stateful node using a new VM and the persisted resources. 
* Import- You can view the steps of the import process of a stateful node. 
* Stopped- You can view the stopped VM. It might take a few minutes for the stateful node to appear as stopped. 

If an error occurs, the stateful node transitions into an error state. The information of the failed activity will appear in the activity’s details. 

To view scheduled activities, click **Scheduled Activities**. 

To create a new activity, click **Schedule New Activity**.

## Monitoring

The Monitoring tab provides information regarding the utilization of your stateful node. The monitoring information enables you to optimize resource allocation (right sizing), identify performance, and manage costs effectively. You can view customized graphs that display historical data of CPU and memory utilization for the last hour, day, week, or 14 days.

![azure-manage-stateful-monitor](https://github.com/spotinst/help/assets/106514736/ed0a00c0-4048-49a4-b509-6d0540c61010)


## Costs

The cost breakdown data provides a comprehensive overview of your stateful node’s costs. It is available through both the console and the API. 

![azure-view-stateful-node-details-05](https://github.com/spotinst/help/assets/106514736/3103b23b-a8c6-42c8-8aa9-80480d0e493a)

#### Daily Spend Breakdown

The compute lifecycle shows how much your compute cost was on each day of the selected time period. Each bar is broken down by spot, on-demand, and reserved instance cost for that day. The All Resources data display showcases the cost breakdown of compute, storage, and network resources. It presents the information in a stacked bar chart format.

Hovering over a specific bar in the chart displays the following information:

* Date (format: mm/dd)
* Compute daily spend
* Network daily spend
* Storage daily spend
* Total spend for all resources

#### Summary

The doughnut chart summarizes overall costs within the selected time range.

Hovering over a certain section in the chart displays the following information:

* Spot
* OD (On-Demand)
* Network
* Storage
