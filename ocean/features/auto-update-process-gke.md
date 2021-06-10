# Auto-Update Process (Ocean GKE)

Auto-update is a process Ocean performs to ensure that your clusters and launch specifications always have an up-to-date configuration according to the respective GKE configuration in the control plane manager. In other words, configuration changes made on the GKE cluster or on node pools will be updated automatically to the Ocean configuration.

This feature provides a convenient user experience, allowing you to make quick updates to certain GKE parameters -- such as Kubernetes Version, NodeLocal DNSCaching, and others -- directly and only once, in your GKE console. Ocean’s auto-update process will capture the changes and automatically update the Ocean configuration.

## How It Works

The auto-update process runs once every 30 minutes and takes place as follows:

1. When an auto-update runs, Ocean checks for changes in certain fields of the GKE cluster configuration and each of the node pool configurations. The following fields are checked: Version and parts of the metadata (Kube-labels, Kube-env), the node pool’s source image, and the node pool’s ServiceAccount.
2. Changes to any of the above fields triggers an update of the Ocean cluster configuration and the relevant VNGs in the cluster. The information updated includes `metadata`, `sourceImage`, and `serviceAccount`.
3. The resulting changes to the Ocean cluster and VNG configurations become effective.

## Example Use Case

As an example, let’s say you have created an Ocean cluster with VNGs using the Spot console, and then you enabled the [NodeLocal DNSCache](https://cloud.google.com/kubernetes-engine/docs/how-to/nodelocal-dns-cache) using the GKE console. The following events take place:

1. GKE adds labels to the node pool metadata that allow the affinity of the `nodeLocal dns daemonSet` pods to be scheduled to the nodes.
2. Ocean’s auto-update process runs at its regular interval and discovers that there are changes in the GKE node pool configurations.
3. The Ocean managed VNGs are updated with the new labels to reflect the added NodeLocal DNSCache.
4. The changes become effective in Ocean, and the daemonset is scheduled as expected.

## What’s Next?

- Learn more about using [VNGs in Ocean](ocean/features/launch-specifications).
- Learn more about [Tips and Best Practices](ocean/tips-and-best-practices/) to make the most of your Ocean experience.
