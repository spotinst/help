<meta name="robots" content="noindex">

# Topology

Spot Security gives you easy visibility over your network topology with several types of views. The topology view enables you to view the assets of your interest and determine potential attack paths.

To view the topology, in the left menu of the Spot Security console, click Topology.

## Topology Views

The topology view gives you a comprehensive visibility into the interconnections of your network, which help you understand the impact of various security risks as well as determine an attacker’s potential path to your individual assets.

A topology map can be created for different cloud accounts, regions, virtual private clouds, and nodes (i.e., assets). You can create a Topology service map of up to ten nodes across the different asset types, regions, VPCs, and severity of risks.

<img src="/spot-security/_media/topology-1.png" />

### 360-degree View

The service map dropdown menu, along with a date filter, provides a 360-degree detailed view of the specific topology screen.

The 360-degree view provides the following information based on the date and service map filter in the table below:

* A list of security rules that have failed for the selected assets.
* A list of affected assets.
* A list of all the events occurring in the assets.
* A list of controls that have failed across different compliances.

<img src="/spot-security/_media/topology-2.png" />

You can also choose a specific asset from the table to see its 360-degree view.

<img src="/spot-security/_media/topology-3.png" />

If you want to see a detailed 360-degree view, you can expand the table in the top right corner of the 360° detail View panel.

<img src="/spot-security/_media/topology-4.png" />

In addition, if you click Failed Assets on any of the views (such as Security Rules or Compliance), this will give you a list of assets that have failed for that particular risk.

<img src="/spot-security/_media/topology-5.png" />

Clicking on an individual asset name enables you to [view the risk details](spot-security/features/analyze-risks/view-risk-details) of that asset. You can also see the steps to remediate the risk of that particular asset.

## Create a Service Map

A Service Map shows how the different assets of your choice are interconnected in a network.

To create a new Service Map, do the following:
1. Click + Create New Map.
2. In the Choose Cloud Provider field, select the cloud provider (currently only AWS) and the account you want to create a service map for.
3. Based on the account selected, a list of nodes or assets will be populated across different asset types, regions, VPCs, and risk severities.
4. You can select up to ten nodes to create a service map and save it under a specific name of your choice. You can also mark a new service map as default which will make it appear by default each time you open the Topology view in the console.

<img src="/spot-security/_media/topology-f.png" width="388"/>

5. Click Save to view the service map.
The new service map is also added to the list of services on the Topology page.

### Use a Saved Service Map

To change the service map used in the topology view, do the following:
1. In any of the topology views, click the down arrow or the current map name by the Service Map.

<img src="/spot-security/_media/topology-c.png" />

2. In the dropdown menu, click the name of the new service map. A different topology map will appear showing the instances and relevant connections of the new map.
3. Users can also use the date filter to view the service maps and their 360- degree view on that particular date.

<img src="/spot-security/_media/topology-8.png" />

### Service Map List

Users can also view the overall list of service maps created by clicking on the service map list on the top right corner of the page. You can perform the following functions on the service maps previously created:
1. Delete a service map.
2. Set it as default so that it appears as the default map in the Topology view.
3. Remame the service map.
4. Delete one or more nodes that were previously selected.

You can also create a new service map from this view.

<img src="/spot-security/_media/topology-d.png" />

## What’s Next?
View more information about all of the [events](spot-security/features/events) in your network.
