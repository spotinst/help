<meta name="“robots”" content="“noindex”">

# HostPort Configuration in ECS Workloads Causes Underutilized Nodes

## **Introduction**

If a node only has one task running, then it causes the node to be underutilized. Underutilized nodes should be bin-packed together if there are no constraints in the task/service definition.

Example service:

````json
"placementConstraints": [],
   "placementStrategy": [],
````

The task definition doesn't have constraints to spread tasks across nodes.

````json
"placementConstraints": [
  {
  "type": "memberOf",
  "expression": "attribute:nd.type == default"
  }
  ],
````

## Instructions

Check the **portMappings: hostPort** value in teh task/service defintion.

Port mappings allow containers to access ports on the host container instances to send or receive traffic. This configuration can be found in the task definition. The hostPort value in port mapping is normally left blank or set to 0.

Example:
````json
      "portMappings": [
            {
               "protocol": "tcp",
               "hostPort": 0,
               "containerPort": 443
````

However, if the hostPort value equals the containerPort value, then each task needs its own container. Any pending tasks trigger a scale-up, and the number of launched instances is equal to the number of pending tasks. This leads to underutilized instances and higher costs.

You can have multiple containers defined in a single task definition. Check all the <i>portMappings</i> configurations for each container in the [task definition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PortMapping.html).
