# Troubleshoot Unscheduled Pods 

We have provided this topic to help you troubleshoot issues with unscheduled pods in Kubernetes. 

A pod is unschedulable when it has been put into Kubernetes' scheduling queue but cannot be deployed to a node. 

The sections that follow deal with mismatch scenarios involving taints, labels, tolerations, and cluster configuration, as well as issues concerning daemonsets and persistent volumes. 

## Mismatch of Pod Labels and Cluster Configuration  

1. Make sure the labels set for the pods are not deprecated and that they are supported by Spot. Refer to the [Kubernetes documentation](https://kubernetes.io/docs/reference/labels-annotations-taints/) for your version.  
Solution: Remove any deprecated and unsupported labels.
2. Make sure that the instance types set in the cluster provide enough resources for the requests set in the pod metadata. 

3. Verify that the rules in the pod affinity and antiaffinity metadata are not identical. If they are identical, the pod will remain permanently in the pending state. A pod may not simultaneously ask for and block the same request. 

4. Make sure that the VNG is not missing the customized labels found in the node affinities / node selectors in the pod metadata.  

5. Make sure the ‘topologySpreadConstraint’ configuration for your pod does not violate the max skew.

 *  Ocean supports Kubernetes pod topology spread constraints and automatically launches nodes while ensuring that the maximum skew is maintained. 

 *  Maximum skew violation occurs when the maximum skew value exceeds the maximum allowed in the topology spread constraints.
  
## Mismatch of Taints and Tolerations 

### NoSchedule Taint 

This occurs when a VNG has one or more taints with the noSchedule effect, and the pod does not have a matching toleration.  
 
As shown in the example below, a pod that needs to use this VNG to scale up must have a matching toleration for this taint, to enable pod scheduling. 





