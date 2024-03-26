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

    * Ocean supports Kubernetes pod topology spread constraints and automatically launches nodes while ensuring that the maximum skew is maintained. 
    * Maximum skew violation occurs when the maximum skew value exceeds the maximum allowed in the topology spread constraints.
  
## Mismatch of Taints and Tolerations 

### NoSchedule Taint 

This occurs when a VNG has one or more taints with the noSchedule effect, and the pod does not have a matching toleration.  
 
As shown in the example below, a pod that needs to use this VNG to scale up must have a matching toleration for this taint, to enable pod scheduling. 

![ocean-ts-taints-example-rs](https://github.com/spotinst/help/assets/159915991/cc2e3b87-1fda-47a0-aa39-dd1e22817d72)

On the other hand, if a VNG has no taint, but the pod has a random customized toleration, the VNG does not need to have a matching taint to schedule the pod. 
Taints only block pods from being scheduled if the pods do not tolerate the taint. 

## DaemonSets
Make sure your pod is not of type DaemonSets: 
   * Solution: For pods to leave the pending state, you need to apply additional workloads or perform a cluster roll. 
   * If you utilize GKE, you can contact Spot support to request changes in the behavior. For this option, the autoscaler considers the k8s built in labels defined within the “kube-labels” section under the metadata object. 

## Persistent Volumes
1. Make sure the volume exists in your cloud provider. 
2. Make sure the zone labels are part of your persistent volumes.  
3. Make sure the metadata labels of your persistent volumes are not missing.  
4. Do not use the same persistent volumes for different pods belonging to different AZs. 
5. Make sure the persistent volume configured for your pods is not already assigned to another node in which there is no free space.  
6. Make sure no instance types, labels or resource limits prevent scheduling a pod with a persistent volume. 
7. If the unscheduled pod has two PVCs, verify the Binding Mode for both. If one is waitForFirstConsumer and the other is Immediate, scheduling issues can occur. 
   * **WaitForFirstConsumer** delays the binding and provisioning of a PersistentVolume until a pod using the PersistentVolumeClaim is created. 
   * By default, the '**Immediate**' mode indicates that volume binding and 	dynamic provisioning occur after the PersistentVolumeClaim is 		created.  
   * If the Volume Binding Mode is Immediate, you must bind a PV to the PVC. 
