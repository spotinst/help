# Overview

The Elastigroup Overview tab gives you quick access to insights and summary data about the group. You can obtain an overview of your current cost efficiency status, detailed Elastigroup information, and tracking of group analytics. 

To get to the Elastigroup Overview tab, complete the following steps: 

1. In the left main menu in the Spot console, click **Elastigroup** and click **Groups**. 
2. In the list of Elastigroups, click the Elastigroup Name you want to view. 

![overview-gcp-1](https://github.com/spotinst/help/assets/106514736/c3780ea5-840f-47b2-9bb0-73f749bf9423)

The Elastigroup’s page opens on the Overview tab with the group name at the top. 

The Overview page includes the following main areas: 

* Summary  
* Instance Count 
* Running VM Distribution 

## Summary  

The summary line provides insights on your group usage. The default display shows statistics from the first of the month to the current date. You can also see the numbers for the last seven days and the last 30 days.  

![overview-gcp-2](https://github.com/spotinst/help/assets/106514736/54f4a5da-e265-496b-8277-b8091e558133)

The following information is presented: 

* Running Instances: The number of instances running in the Elastigroup. 
* Hours: The total number of the instance’s running hours in the selected time range. 
* Potential Cost: Your estimated compute cost if you had run all on-demand instances in the selected time range. 
* Actual Cost: Your calculated compute cost for the selected time range using spot instances. 
* Saved: The amount of money (in USD) you saved during the selected time range. 
* Savings: Percent savings comparing your actual cost to your potential cost. 

### Elastigroup Info 

The Elastigroup Info area gives you a quick reference point for vital information about the group. 

![overview-gcp-3](https://github.com/spotinst/help/assets/106514736/538d9796-bd7c-4b4f-b2f9-3e002aa4c0e3)

The list of items that appear in this area may vary according to the specific features and integrations (such as load balancers) you have enabled in your Elastigroup configuration. The following information is displayed: 

* Group Name 
* Group ID 
* Description 
* Image 
* Allowed Instance Types 
* Creation Date 
* Network 
* Subnets 
* Zones 

### Instance Count 

This chart shows the number of active instances over time and enables you to see events that triggered a scale up or a scale down. 

![overview-gcp-4](https://github.com/spotinst/help/assets/106514736/46da7b5f-b055-4953-8876-5db5d6b11738)

## Running VM Distribution 

This graph illustrates the running VMs in a group, divided by the selected instance types and zones. It displays the breakdown according to the market. The combination of zone and instance type determines the price of the spot VM. 

![overview-gcp-5](https://github.com/spotinst/help/assets/106514736/d43e4559-a23a-4e75-b149-2a979e7e4fa6)

You can view the breakdown of VMs from all or only selected zones by selecting a zone in the dropdown menu. Hover over a segment in the chart to view additional information about the VMs from the selected instance type, including the breakdown of the number of VMs launched in each zone.  
