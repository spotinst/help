<meta name=“robots” content=“noindex”>

# Ocean | ECS | Unregistered Container Instances

## **Problem**

We often witness clients that are experiencing issues with their Ocean ECS clusters, in cases where they have unregistered container instances events.   
This behavior can be identified when you see that the newly launched container instance is not receiving a 'Container Instance ID' for a long period of time, up until eventually it is scaled down.  
In addition, it can be identified when the resource allocation of CPU & Memory is at a value of 0%, and we cannot determine the container instance's ECS status - 

![](https://support.spot.io/hc/article_attachments/12160552947229)

![](https://support.spot.io/hc/article_attachments/12160631369757)

## **Cause**

Registering a container instance with an ECS cluster means that you are telling the ECS service that a particular EC2 instance is available to run containers.

When you **register** a container instance, you are providing information to ECS about the EC2 instance, such as its IP address, the Docker daemon endpoint, etc. 

If a container instance is not able to register the cluster, traffic will not be able to be received, hence the whole functionality of the cluster will not function. 

There is limited visibility from our end to the client's environment in such cases (similar to Kubernetes unregistered nodes), however, we can use the following section in order to assist the client when troubleshooting this behavior. 

## **Solution**

There are a few possible reasons that a container instance is not being registered - 

1. **User-Data**  
There is mandatory user data configuration in terms of the syntax that should be configured in order that container instances will be able to register the cluster – 

**#!/bin/bash**

**echo ECS_CLUSTER=”****MyCluster****” >> /****etc****/****ecs****/****ecs.config**

Kindly make sure that this is configured + the dedicated “cluster name” is modified within it. 

2. **AMI**

ECS optimized, **Agent** (similar to the controller in k8s) is configured within the AMI.  
You need to make sure with the client that the AMI in the cluster configurations is **ECS Optimized** –   
Example –   


![](https://support.spot.io/hc/article_attachments/12160808447517)

3. **Security Group and specific Ports**

• **Port 22 (SSH):** This port is required if you want to connect to your container instances via Secure Shell (SSH) for troubleshooting or maintenance purposes.   
It is not directly related to ECS cluster registration, but it's commonly included for administrative access to the instances.

• **Port 2375 (TCP):** This port is used for the ECS container agent to communicate with the ECS control plane. It allows the agent to register the container instance with the cluster, send heartbeats, and receive instructions for task placement and management. 

• **Port 2376 (TCP):** This port is used for secure communication between the ECS container agent and the ECS control plane. It enables encrypted communication and is recommended for improved security when managing your ECS cluster. 

4. **IAM Role**

(Instance Profile) - The client has to configure an instance profile with relevant permissions –

![](https://support.spot.io/hc/article_attachments/12160887016989)

5. **IP**

Make sure with the customers that they configured Public IP/According to subnet, but verify that the user has NAT gateway.

Please note that when changing the configuration within the VNG, such as tags/user data, immediately there will be an override on the cluster's configuration.  
Therefore, if a user changes something within the VNG, it is important to verify that the configuration is compared.

In case the issue is not one of the previous reasons, then the issue probably derives from the customer’s end.  
Please share the following **ECS** documentation with the customers for further investigation from their side -   
[Troubleshooting AWS documentation](https://aws.amazon.com/premiumsupport/knowledge-center/ecs-instance-unable-join-cluster/)   
  

