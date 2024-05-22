<meta name=“robots” content=“noindex”>

#  Ocean EKS Cluster Right Sizing 

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization. 

Container resource requests, defined in a Kubernetes cluster, determine a pod’s allocation to a node. Incorrect CPU and memory requirements assumptions can incur unnecessary and costly cloud infrastructure waste. Ocean lets you access detailed right-sizing recommendations that fine-tune these resource requests based on the actual resource utilization of any running application over time. This way, you can define better resource requirements based on actual consumption to avoid over-provisioning or underutilizing a cluster and increase the cluster's efficiency. 

Ocean provides container-level right-sizing recommendations so you can focus on improving specific application resource requests and make impactful changes to resource utilization.  

Before you attempt to fine-tune your cluster resources according to Ocean's recommendation, make sure that you have the following: 

*  A Spot account. 
*  Metrics Server installed in your Kubernetes cluster. 
*  Ocean cluster managing your Kubernetes worker nodes. 
*  [Ocean Controller Version 2](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/) installed and running. From version 2.0.52 
*  To enable this feature, contact your support team via email or chat.  

