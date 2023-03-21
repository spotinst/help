# Ocean and Ocean CD Integration

Ocean and Ocean CD are fully integrated applications on the Spot platform. When you use Ocean, you will see Ocean CD’s Spot deployments, also known as CRDs, in any of the relevant Ocean tabs.

You can also use Ocean CD independently of Ocean.

## Update Ocean Controller’s Permission

To integrate Ocean and Ocean CD, the cluster’s owner needs to change its controller’s permissions in the following manner:  

1. Run the following command:

```
kubectl edit clusterrole spotinst-kubernetes-cluster-controller
```

2.  Append the permissions to the following:

```
- apiGroups:
  - spot.io
  - argoproj.io
  resources:
  - '*'
  verbs:
  - get
  - list
```

3. Restart your controller using the following command:  

```
kubectl rollout restart deployment spotinst-kubernetes-cluster-controller -n kube-system
```

## What’s Next?

Learn how to view your [detailed rollouts](ocean-cd/tutorials/view-rollouts/detailed-rollout).  
