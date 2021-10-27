<meta name="robots" content="noindex">

# Topology

Spot Security gives you easy visibility over your network topology with several types of views. A security issue in one resource can impact several other resources. The topology view lets you see the connections to other resources and gives insight about how extensive a security issue might be.

To view the topology, go to Spot Security in the left tree of the console and click Topology.

## Topology Views

The different topology views give you comprehensive visibility into the interconnections of your network, which help you to understand the impacts of various security risks.

### Logical View

This is the default view when you come into the Topology feature. The Logical View shows instances within their subnets and regions. Each instance indicates its type, e.g., EC2 or RDS. The arrows indicate potential connections between the instances within the subnets.

You can search by a particular resource using node name, connection, hostname, database, type, port, or username, and the map will filter accordingly.

<img src="/spot-security/_media/features-topology-01.png" />

### Network View

The Network View also shows instances. In addition, it shows the directional connections across subnets and regions including the port numbers and the bandwidth of each connection.

<img src="/spot-security/_media/features-topology-02.png" />

### Policy View

This view shows how different policies connect to each other. This provides insights into the interconnections of different entities such as policy statements, file systems, roles, and administrators.

<img src="/spot-security/_media/features-topology-03.png" />

## Create a Service Map

A Service Map is the definition of instances that appear in your topology. The default service map includes most of the resources that are impacted by an affected resource. If you want to see a specific customization with a specific resource alone, then you can create a custom map.

When you create a service map, you choose the instances that will be the basis for the topology mapping.

To create a custom service map, do the following:
1. Create a New Service Map. The Create a Custom Service Map opens with a list of nodes (i.e., instances) for you to choose from. If the list is long, you can use the filter to find a node.
2. Mark the nodes to include, and click Create Service Map.

<img src="/spot-security/_media/features-topology-04.png" />

3. When prompted, enter a name for the new service map and indicate whether it should be your new default.

<img src="/spot-security/_media/features-topology-05.png" />

4. Click save.

The new service map is added to the list of services on the Topology page.

## Use a Saved Service Map

To change the service map used in the topology, do the following:
1. In any of the topology views, click the down arrow or the current map name by Service Map.

<img src="/spot-security/_media/features-topology-06.png" />

2. In the dropdown, click the name of the new service map. A different topology map will appear showing the instances and relevant connections of the new map.

## What’s Next?

Learn more about the [Events](spot-security/features/events) page, that provides information about all the events in your network.
