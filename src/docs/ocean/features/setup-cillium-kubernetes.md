# Utilize Cilium in Ocean Kubernetes Clusters

Cilium is an open-source, cloud-native solution that provides, secures, and observes network connectivity between workloads and can be used in Kubernetes clusters.

Generally, you run Cilium as a daemonset in a cluster.

Cilium-compatible nodes must launch with a `node.cilium.io/agent-not-ready=true:NoExecute` taint, so only the Cilium daemonset can be scheduled for the matching toleration. The Cilium daemonset pod executes its task on the node, and then automatically removes the taint so that workload pods can be scheduled on the node.

See [Cillium](https://cilium.io/)

Regarding Spot Ocean:

* Ocean autoscaler does not scale up explicitly for daemonsets.
* Normally, when you define a taint in a virtual node group, you add it to the `userData` via the Spot API and the Node Taints area in the Ocean console. Only the Cilium daemonset has the matching toleration to this taint, so Ocean will not scale up for the workload pods because they lack the matching toleration to the Cilium taint.

>Note: When the autoscaler decides which virtual node group to use for scale up for a pending pod, it considers the taints defined in the virtual node group Node Taints area of the Ocean console, but not the `userData`.

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">To set up Cillium for an Ocean Kubernetes cluster</summary>
 
   <div style="padding-left:16px">

* Add the taint to the virtual node group `userData` in the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) but leave the virtual node group Node Taints area in the Ocean console blank.

userData Example:
```
#!/bin/bash
set -o xtrace
/etc/eks/bootstrap.sh ${ClusterName} --register-with-taints node.cilium.io/agent-not-ready=true:NoExecute
```

The process is as follows:
1. Ocean scales up the node because pod X needs the node (not the daemonset).
2. The node will be created with the taint from the `userData`.
3. The daemonset will have a matching toleration so it can run on the node with the Cilium taint.
4. The daemonset will execute its task and then remove the Cilium taint from the node.
5. The scaled pod will run on the node.

   </div>
</details>

See also [Cilium Quick Installation](https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/#k8s-install-quick)



