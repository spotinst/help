<meta name=“robots” content=“noindex”>

# Ocean | ECS | Unregistered Container Instances

## **Problem**
Your newly launched Ocean ECS container instance:
* Has unregistered contain instance events
* Doesn’t have a Container Instance ID
* Is eventually scaled down
* CPU and memory resource allocations are 0%
* Status: Can’t determine

<img width="452" alt="unregistered-container-instance1" src="https://github.com/spotinst/help/assets/167069628/acd9d60a-4952-4955-b119-593ccfb9c067">

<img width="343" alt="unregistered-container-instance2" src="https://github.com/spotinst/help/assets/167069628/d7713e91-2850-48ee-9d1a-aa439dcf91d1">

## **Cause**

Registering a container instance with an ECS cluster means you are telling the ECS service that a specific EC2 instance is available to run containers. <font color="#FC01CC">You give information to ECS about the EC2 instance, such as its IP address, the docker daemon endpoint. ##is this part useful?##</font>

<font color="#FC01CC">If a container instance is not able to register the cluster, traffic is not received and the cluster does not function. ##what does this mean? what's the result if this happens##</font>


## **Solution**

There are a few possible reasons that a container instance is not being registered - 

* **User-Data**
  Make sure this code <font color="#FC01CC">is in ______ so ##where do they update this?##</font color> the container instances can register the cluster. Update the cluster name.
  
  #!/bin/bash
  
  echo ECS_CLUSTER="MyCluster" >> /etc/ecs/ecs.config

* **AMI**
  ECS is optimized and Agent (similar to the controller in Kubernetes) is configured in the AMI.
  
* **Security Group and specific Ports**
  * **Port 22 (SSH)** is required if you want to connect to your container instances using Secure Shell (SSH) for troubleshooting or maintenance.
    It is not directly related to ECS cluster registration, but it's commonly included for administrative access to the instances.
  * **Port 2375 (TCP)** is used for the ECS container agent to communicate with the ECS control plane. It allows the agent to register the container instance with the cluster, send heartbeats, and receive instructions for task placement and management.
  * **Port 2376 (TCP)** is used for secure communication between the ECS container agent and the ECS control plane. It enables encrypted communication and is recommended for improved security when managing your ECS cluster.

* **IAM Role**

  Configure an instance profile with relevant permissions.

  <img width="452" alt="unregistered-container-instance3" src="https://github.com/spotinst/help/assets/167069628/b51d91f7-c067-431f-94b5-64926a6e469c">

* **IP**
  Make sure you configured Public IP according to subnet, and have NAT gateway.
  If you change the configuration in the virtual node group, such as tags/user data, it immediately overrides the cluster's configuration.

  <img width="452" alt="unregistered-container-instance4" src="https://github.com/spotinst/help/assets/167069628/98a19d66-d218-41da-bb88-5a99220dcac3">


* [Troubleshooting AWS documentation](https://aws.amazon.com/premiumsupport/knowledge-center/ecs-instance-unable-join-cluster/)   
  

