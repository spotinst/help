# Docker Swarm Integration

## What is Docker Swarm?

Docker Swarm is a clustering and scheduling tool for Docker containers. It turns a pool of Docker hosts into a single, virtual Docker host. Basically, you create a cluster of one or more Docker Engines called a swarm.

There are two types of nodes: Managers and Workers. The managers nodes handle cluster management tasks- they orchestrate and schedule containers. Worker nodes are also instances of Docker Engine whose sole purpose is to execute containers.

<img src="/elastigroup/_media/docker-swarmREADME_1.png" />

## Spot Integration with Docker Swarm

You can create your cluster of swarm easily through Spot Elastigroup. You will have to specify the Manager node (masterHost and the masterPort) and the nodes running on the Elastigroup will serve as workers. Our Docker Swarm integration is using the standard Docker api calls to trigger operations for instances. These operations include the Drain and Delete operations. When we detect that an instance is going to be terminated, we trigger the Drain operation and at last the Delete operation. Currently we support only HTTP method, without tls verification.

## Setting up Docker Swarm

When creating a new group, or when updating a group, you need to specify the Manager node by providing: masterHost (specifies the domain/ip of the docker masterHost), masterPort (specifies the port).

Expand the `Integrations` portion in the Compute tab and enable the Docker Swarm integration. Enter the Swarm Manager IP and Swarm Manager port:

<img src="/elastigroup/_media/docker-swarmREADME_2.png" />

You can also add the following arguments to the Elastigroup configuration with an API call to update the Elastigroup – Update API while using the following body (make sure to adjust the IP and Host):

```
{
  "group": {
    "thirdPartiesIntegration": {
      "dockerSwarm": {
        "masterHost": "54.202.20.14",
        "masterPort": 2375
      }
    }
  }
}
```

Another option is to use the Review Tab in the Elastigroup configuration and edit the JSON:

<img src="/elastigroup/_media/docker-swarmREADME_3.png" />

## User Data Script

The following script needs to be provided in the Elastigorup configuration in order to register the node as a worker and set its labels: (make sure to replace the script arguments)

### Example

```
#!/bin/bash
yum update -y
yum -y install jq
yum install docker -y
usermod -a -G docker ec2-user
cd /tmp
wget https://s3.amazonaws.com/spotinst-public/integrations/dockerSwarm/joinDockerSwarm.sh
chmod 777 joinDockerSwarm.sh
./joinDockerSwarm.sh <Swarm Token> <Swarm Manager IP> <Swarm Manager Port> <Swarm API Port> [<Label> <Label> …]
bash
```

In order to fill in the workerToken and the masterHost you should go inside the docker swarm primary node and write the below command:

```
docker swarm join-token worker
```
