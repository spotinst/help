# Troubleshoot Cluster Deployment

This page describes a list of common issues specific to the cluster deployment phase that you could encounter and solutions to fix them.

## Ocean cluster is unreachable
### Identify the issue

In the Spot console, browse to the Ocean cluster list. Check if your cluster is marked as unreachable.

<img src="/ocean-spark/_media/troubleshoot-cluster-deployment-01.png" width="370" />

### Troubleshoot

- Ensure that the Ocean controller pod is running. Run ```kubectl get pods -n kube-system```. There should be a “spotinst-kubernetes-cluster-controller-...” pod in Running state.
- If the Ocean controller pod is in Pending state, ensure that there is a node in the cluster that can run the pod. Run ```kubectl get nodes```. There should be at least one node.
- If there are no nodes in the cluster, it is likely that EC2 instances can't join the cluster. See the corresponding section below.
- If the Ocean controller is in the Terminating/CrashLoopBackOff state, it means that the pod can't reach the Internet and call the Spot API at https://api.spotinst.io, or that the Spot credentials used by the Ocean controller are wrong. See the Ocean controller troubleshooting guide and the corresponding section below.

## EC2 instances can't join the cluster
### Identify the issue

1. List the EC2 instances in the AWS console of your AWS account.
2. Look for EC2 instances belonging to the EKS cluster. Their name usually contains the EKS cluster name as a prefix.
3. Tail the system log of the EC2 instance (under Actions > Monitor and troubleshoot > Get system log)
4. Look for any mentions of the words “eks”, “bootstrap”, “kubelet”.

### Troubleshoot

- If you find an access management error stating that the instance can't list EKS clusters, ensure that the cluster nodes assume an instance profile that grants them the required permissions.
- If the system log seems to be in progress (i.e., a command has just started, no success nor failure message), ensure that the cluster nodes can talk to each other and to the Kubernetes API. Check your configuration and ensure that:
  - Cluster nodes are in a security group that allows traffic within it.
  - The security group of the cluster nodes is allowed to reach the cluster security group.

## Ocean controller can’t reach the Internet
### Identify the issue

1. Tail the logs of the Ocean controller and look for any errors regarding connectivity:

```
kubectl logs -n kube-system -l 'k8s-app=spotinst-kubernetes-cluster-controller'
```

2. Run a pod on the same node as the Ocean controller pod, exec into it, and call the Spot API:

```
curl https://api.spotinst.io
```

### Troubleshoot

- Follow the Ocean controller troubleshooting guide.
- Ensure that the nodes within the cluster are in a security group granting them access to the Internet.
- If the cluster is in a private VPC, ensure it contains a NAT gateway to enable egress to the Internet.

## Ocean Spark cluster is in a degraded or progressing state
### Identify the issue

Go to the Ocean Spark cluster list and look for your Ocean Spark cluster.

<img src="/ocean-spark/_media/troubleshoot-cluster-deployment-02.png" width="300" />

### Troubleshoot

- Ensure that no Ocean Spark pod is stuck in a pending state with ```kubectl get pods -n spot-system```. If an Ocean Spark pod is stuck in pending, then the Ocean cluster probably can’t scale up. See the corresponding section below.
- Ensure that a load balancer can be created by Ocean Spark with ```kubectl get svc -n spot-system```. If this command shows a service whose EXTERNAL-IP is stuck in pending, this means that the load balancer can't be created. See the corresponding section below.

## Ocean-managed nodes can't join the cluster
### Identify the issue

1. Go to the Nodes tab in your cluster’s page in Ocean.
2. Look for nodes failing to join the cluster.

<img src="/ocean-spark/_media/troubleshoot-cluster-deployment-03.png" />

### Troubleshoot

- As a rule of thumb, ensure that your Virtual Node Groups (VNGs) are configured like the EKS-managed cluster nodes, i.e., they have the same security group and the same instance profile.
- Please refer to “EC2 instances can't join the cluster”. All instructions apply.

## Ocean Spark load balancer can’t be created
### Identify the issue

1. Run ```kubectl get svc -n spot-system```
2. If this command shows a service whose EXTERNAL-IP is stuck in pending, this means that the Ocean Spark load balancer can’t be created.

### Troubleshoot

- Ensure your VPC subnets have the proper tags to be discoverable by Kubernetes
  - On all subnets: ```kubernetes.io/cluster/<eks-cluster-name>: shared```
  - On public subnets: ```kubernetes.io/role/elb: 1```
- Ensure that the instance profile assumed by the cluster nodes grants them the permission to create a new security group within the VPC.

## Spark application can’t acquire executor pods
### Identify the issue

1. In the driver log of your Spark application, a message like this appears: ```Initial job has not accepted any resources. Check your cluster UI to ensure that workers are registered and have sufficient resources```
2. There are pending executor pods in the cluster: ```kubectl get pods -n spark-apps```

### Troubleshoot

- Ensure that all your Virtual Node Groups (VNGs) have access to the same subnets. This is required because Ocean Spark puts the driver and executors of a given Spark application in the same availability zone to reduce network costs.
- Have a look at the Ocean log tab of your cluster in the Ocean section of the Spot console. Look for messages stating why the cluster is not scaling up.

## Kubernetes logs in the Spot console cannot be displayed

### Identify the issue

The following message appears in the Kubernetes logs view in the application page.

```
An unexpected error happened while fetching the logs, please refresh the page.
```

### Troubleshoot

This issue is likely caused by restrictions on node-to-node communication over the network.
Please go to the "node-to-node communication not allowed" below. 

## Spark driver logs cannot be displayed although pod is running

* The following message appears in the Driver logs view in the application page.
```
The driver pod is not running yet, please wait a few seconds...
```
* Check whether the driver pod of the Spark application is running on the Kubernetes cluster with ```kubectl get pods -n spark-apps```. If it is running, driver logs should be available in the Driver logs view.

Optional check:
* Tail the logs of the driver pod with ```kubectl logs -n spark-apps <APP-ID>-driver```
* You may see name resolution errors like ```kubernetes.default.svc: Temporary failure in name resolution``` in the driver log. This would be a further indication that node-to-node communication is the culprit (see the troubleshoot section below).
* Not seeing name resolution errors in the driver log does not completely rule out node-to-node communication as the culprit however. It may be that a security group rule specifically allows DNS traffic (port 53), while other types of traffic are restricted.

### Troubleshoot

This issue is likely caused by restrictions on node-to-node communication over the network.
Please go to the "node-to-node communication not allowed" below. 

## Node-to-node communication not allowed

### Identify the issue

Ocean Spark pods must be able to communicate with one another and with Spark applications.
Any one of the following issues detailed above may be a sign that node-to-node communication is not configured properly:
* Kubernetes logs in the Spot console cannot be displayed
* Spark driver logs cannot be displayed although pod is running

### Troubleshoot

Ensure node-to-node communication is possible in the cluster.

The security group(s) used by the cluster nodes must contain an inbound rule like:

| Direction | Type        | Protocol | Port | Source / Destination |
| :-------- | :---------- | :------- | :--- | :------------------- |
| Inbound   | All traffic | All      | All  | Self                 |

## App submission by spark-operator fails

### Identify the issue

* Inspect the Kubernetes logs view of your Spark application in the Spot console
* In the Kubernetes logs view, the spark-operator reports that it can't submit the application because it fails to create a driver pod:
```
Exception in thread "main" io.fabric8.kubernetes.client.KubernetesClientException: Operation: [create]  for kind: [Pod]  with name: [null]  in namespace: [spark-apps]  failed.
```

**Explanation:** The spark-operator registers a [mutating admission webhook](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) to customize Spark pods at submission time (for example to mount volumes on old versions of Spark).
This means that when a pod is launched, Kubernetes requests the spark-operator webhook to give it an opportunity to mutate the pod.
As a result, if communication from the Kubernetes control plane to the nodes on port 443 is restricted, this request will fail.

### Troubleshoot

Ensure cluster-to-node communication is possible in the cluster.

The security group(s) used by the cluster nodes must contain an inbound rule allowing HTTPS traffic from the Kubernetes control plane:

| Direction | Type  | Protocol | Port | Source / Destination                 |
| :-------- | :---- | :------- | :--- | :----------------------------------- |
| Inbound   | HTTPS | TCP      | 443  | Cluster control plane security group |
