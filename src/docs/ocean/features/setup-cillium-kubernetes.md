# Utilize Cilium in Ocean Kubernetes Clusters

Cilium is an open-source, cloud-native solution that provides, secures, and observes network connectivity between workloads, and can be used in Kubernetes clusters.

Generally, you run cilium as a daemonset in a cluster.

Cilium-compatible nodes must launch with a taint (node.cilium.io/agent-not-ready=true:NoExecute), so that only the Cilium daemonset can be scheduled for the matching toleration. The Cilium daemonset pod executes its task on the node, and then automatically removes the taint so that workload pods can be scheduled on the node.

See [Cillium](https://cilium.io/)

Regarding Spot Ocean:

* Ocean autoscaler does not scale up explicitly for daemonsets.
* Normally, when you define a taint in a virtual node group, you add it to the `userData` via the Spot API, and the Node Taints area in the Ocean console. Note that only the Cilium daemonset has the matching toleration to this taint, so Ocean will not scale up for the workload pods because they don't have the matching toleration to the Cilium taint.

>Note: When the autoscaler decides which virtual node group to use for scale up for a pending pod, it considers the taints defined in the virtual node group Node Taints area of the Ocean console, but not the userData.

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">To set up Cillium for an Ocean Kubernetes cluster</summary>
 
   <div style="padding-left:16px">

* Add the taint to the virtual node group userData in the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate). Leave the virtual node group Taints area in the Ocean console blank.

User data Example:
```
#!/bin/bash
set -o xtrace
/etc/eks/bootstrap.sh ${ClusterName} --register-with-taints node.cilium.io/agent-not-ready=true:NoExecute
```

* Ocean scales up the node because pod X needs the node (not the daemonet).
* The node will be created with the taint from the user data.
* The daemonset will have a matching toleration so it can run on the node with the Cilium taint.
* The daemonset will execute its task and then remove the Cilium taint from the node.
* The scaled pod will run on the node.

   </div>
</details>

See also [Cilium Quick Installation](https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/#k8s-install-quick)



