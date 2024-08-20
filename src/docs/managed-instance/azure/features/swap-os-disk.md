# Swap OS Disk for Stateful Nodes 

You can swap the OS disk (operating system disk) of Stateful Nodes with OS persistence.  

In addition, you can choose either to terminate the old disk or keep it. If you terminate the OS disk, it won't be managed by Spot and will remain in your Azure account. You can also configure a timeframe to keep the old disk in your Azure account before termination.  

This document describes how to swap the OS disk for stateful nodes using the Spot console. 

## Prerequisites 

* Stateful Node is ready according to the following criteria: 
  - OS persistence is ON. 
  - It is in a paused state. 

* A valid disk exists with the following criteria: 
  - It has the same OS as the stateful node.  
  - Is not attached to any VM. 
  - All disk parameters are supported by the stateful node. 
  - It matches the regional and zonal configuration of the stateful node. 

## Swap OS Disk 

1.In the left main menu, click **Elastigroup** and then **Stateful Nodes**.  

![os-disk-azure-1](https://github.com/spotinst/help/assets/106514736/9967ee93-8b71-4160-92b7-ac3758db48eb)

2. In the Stateful Nodes page, click a stateful node in a paused status. 

![os-disk-azure-2](https://github.com/spotinst/help/assets/106514736/f0283e3c-6610-475b-907c-414dbdbc1d45)

3. In the stateful node’s details page click **Actions** and select **Swap OS disk**.  

![os-disk-azure-3](https://github.com/spotinst/help/assets/106514736/a2a0b325-86aa-409a-88ec-5d8465fce123)

4. In the Swap OS Disk window, select the resource group and enter a new disk name.  
5. Select if you would like to keep the old OS disk or terminate it. If you choose to terminate the old OS disk, specify the number of hours to keep it.  
6. Click **Update** or **Update and resume**.  
  * **Update**: to change the configuration of the stateful node. 
  * **Update and resume**: to resume the stateful node with one click.
