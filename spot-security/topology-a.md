# Topology

Spot Security gives you easy visibility over your network topology with several types of views. A security issue in one resource can impact several other resources. The topology view lets you see the connections to other resources and gives insight into how extensive a security issue might be.

To view the topology, go to Spot Security in the left tree of the console and click Topology.

## Topology Views
The different topology views give you comprehensive visibility into the interconnections of your network, which help you understand the impact of various security risks.

To create a new service map, click + Create New Map.
Selecting the cloud provider and account will show you the available nodes. Among the available nodes, you can select the services, regions, VPCs and severity level; and the map will filter accordingly.

<img src="/spot-security/_media/topology-a.png" />

## Create a Service Map
A Service Map is the definition of instances that appear in your topology. The default service map includes most of the resources that are impacted by an affected resource. If you want to see a specific customization with a specific resource alone, then you can create a custom map.

When you create a service map, you choose the instances that will be the basis for the topology mapping.

To create a custom service map, do the following:
1. Click + Create New Map.
2. In the Choose Cloud Provider field, select the cloud provider (currently only AWS is the option).Mark the nodes to include, and click Create Service Map.
3. In the Select Account field, select the account. The Available Nodes section is activated.
4. Select the preferable nodes (i.e., instances) according to the service, region, VPC and severity level. If the list is long, you can use the filter to find a node.
5. When prompted, enter a name for the new service map and indicate whether it should be your new default.
<img src="/spot-security/_media/topology-b.png" />
6. Click save.

The new service map is added to the list of services on the Topology page.

## Use a Saved Service Map
To change the service map used in the topology, do the following:
1. In any of the topology views, click the down arrow or the current map name by Service Map.

Put picture here

2. In the dropdown, click the name of the new service map. A different topology map will appear showing the instances and relevant connections of the new map.

## What’s Next?
Learn more about the Events(link to the Events page) page, that provides information about all the events in your network.
