Topology - Draft for Spot Security 

Spot Security gives you easy visibility over your network topology with several types of views. The topology view enables you to view the assets of your interest and determine potential attack paths for both AWS and Azure.  

 

To view the topology, in the left main menu, click Spot Security and then Topology. Click the Service Map tab. 

Topology Views 

The topology view gives you comprehensive visibility into the interconnections of your network, which help you understand the impact of various security risks and determine an attacker’s potential path to your individual assets. 

 

A topology map can be created for different cloud accounts, regions, virtual private clouds/virtual private networks, and nodes (i.e., assets). You can create a Topology service map  across the different asset types, regions, VPCs/VNets, and severity of risks. 

 

 

 

You can click on the arrow displayed on the right side to open the legends related to the topology map. 

 

 

The service map dropdown menu, along with a date filter, provides a 360-degree detailed view of the specific topology screen.  

 

 

 

 

The 360-degree view provides information based on the date and service map filter in the table underneath it. If you want to see a detailed 360-degree view, you can expand the table in the top right corner of the 360° detail view panel. 

 

 

 

 

The 360-degree view provides the following information: 

A list of security rules that have failed for the selected assets. 

A list of affected assets.  

A list of all the events occurring in the assets.  

A list of controls that have failed across different compliances. 

 

 

You can also choose a specific asset from the graph to see the individual asset’s 360-degree view. 

 

 

 

Click Failed Assets on any of the views (such as Security Rules or Compliance) to view a list of assets that have failed for a particular risk.  

 

 

 

Click an individual asset name to view the risk details of that asset. You can also see the steps to remediate the risk of that particular asset.  

Create a Service Map 

A Service Map shows how the different assets of your choice are interconnected in a network.  

 

To create a new Service Map, do the following: 

Click + Create New Map.  

In the Choose Cloud Provider field, select the cloud provider (AWS or Azure) and the account you want to create a service map for. 

 

 

Based on the account selected, a list of nodes or assets will be populated across different asset types, regions, VPCs/VNets, and risk severities. 

You can select any numbers of nodes to create a service map and save it under a specific name of your choice. You can also mark a new service map as default for each time you open the Topology view in the console.  

 

Click Save to view the service map. The new service map is also added to the list of services on the Topology page. 

 

Use a Saved Service Map 

To change the service map used in the topology view, complete the following steps: 

In any of the topology views, click the down arrow or the current map name by the Service Map. 
 

In the dropdown menu, click the name of the new service map. A different topology map opens that shows the instances and relevant connections of the new map. 

Users can also use the date filter to view the service maps and their 360- degree view on that particular date. 

 

Service Map List 

Click the service map list on the top right corner of the page to view the overall list of service maps that were created. You can perform the following actions on the service maps that were created:  

Delete a service map. 

Set it as default so that it appears as the default map in the Topology view. 

Rename the service map. 

Delete one or more nodes that were previously selected. 

 

You can also create a new service map from this view. 

 

What’s Next? 

View more information about all of the [events]  in your network. 


## What’s Next?
View more information about all of the [events](spot-security/features/events) in your network.
