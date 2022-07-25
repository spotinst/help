<meta name="robots" content="noindex">

# Topology

Spot Security gives you easy visibility over your network topology with several types of views. Topology view enables you to view the assets of your interest and determine potential attack paths.

To view the topology, in the left menu of the Spot Security console, click Topology.

## Topology Views

Topology view gives you a comprehensive visibility into the interconnections of your network, which help you understand the impact of various security risks as well as determine an attacker’s potential path to your individual assets

A topology map can be created for different cloud accounts, regions, virtual private clouds, and nodes (i.e., assets). You can create a Topology service map of up to ten nodes across the different asset types, regions, VPCs, and severity of risks.

<img src="/spot-security/_media/topology-a.png" />

## Create a Service Map

A Service Map shows how the different assets of your choice are interconnected in a network.

To create a new Service Map, do the following:
1. Click + Create New Map.
2. In the Choose Cloud Provider field, select the cloud provider (currently only AWS) and the account you want to create a service map for.
3. Based on the account selected, a list of nodes or assets will be populated across different asset types, regions, VPCs, and risk severities.
4. You can select up to ten nodes to create a service map and save it under a specific name of your choice. You can also mark a new service map as default which will make it appear by default each time you open the Topology view on the product.

<img src="/spot-security/_media/topology-b.png" />

5. Click Save to view the service map.
6. The new service map is also added to the list of services on the Topology page.

### Use a Saved Service Map

To change the service map used in the topology, do the following:
1. In any of the topology views, click the down arrow or the current map name by Service Map.

<img src="/spot-security/_media/topology-c.png" />

2. In the dropdown, click the name of the new service map. A different topology map will appear showing the instances and relevant connections of the new map.

### Service Map List

Users can also view the overall list of service maps created by clicking on the service map list on the top right corner of the page. You can perform the following functions on the service maps previously created:
1. Delete a service map.
2. Set it as the default in the Topology view.
3. Remame the service map.
4. Delete one or more nodes there were previously selected.

You can also create a new service map from this view.

<img src="/spot-security/_media/topology-d.png" />

## What’s Next?
Learn more about the [Events](spot-security/features/events) page, that provides information about all the events in your network.
