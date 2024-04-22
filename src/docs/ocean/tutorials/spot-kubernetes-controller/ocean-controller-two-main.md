<meta name=“robots” content=“noindex”>

# Ocean Controller Version 2 

> **Note**:  For more information about Ocean Controller Version 2, contact your Customer Support representative. 

The Ocean Controller is a pod that resides within your Kubernetes cluster, enabling the integration with the Spot platform 

 It exports relevant resources to the Spot SaaS environment, empowering Ocean to autonomously manage, control, and optimize your infrastructure. 

Ocean comes with two replicas Out-of-the-box. You can add further replicas as required. 

![Ocean-controller-Page-3 drawio](https://github.com/spotinst/help/assets/159915991/24230b21-89cc-4ebc-8e80-3b5b53663bcd)


The Ocean Controller offers the following functionality and benefits: 

*   Enhanced efficiency and performance through an event-driven system design. 

*   Out-of-the-box deployment in High Availability mode ensures continuous pod availability. This approach enables rapid scaling and prompt pod initiation. 

*   Establishes a binding between the Kubernetes cluster and the pertinent Ocean resources using the configured Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster. 

*   Resides within your Kubernetes cluster and actively listens for resource events. It seamlessly pushes modified resources to the Spot SaaS environment. The Spot SaaS environment houses a dedicated Ocean Autoscaler, which promptly scales your Kubernetes clusters in an optimized manner when triggered. 

*   Minimizes its footprint within the cluster, resulting in limited external network traffic when no changes occur. This attribute presents opportunities for cost savings. 

By installing the Ocean Controller, you can effortlessly integrate Ocean with your Kubernetes cluster, leverage event-driven efficiency, ensure high availability, and optimize your infrastructure management. 

## Supported Operating Systems

Ocean Controller supports Linux OS only. 

>**Note**: Windows OS is not supported. 
