# Auto-Update Process (Ocean GKE)

Ocean auto-updates to ensure that your clusters and virtual node groups (VNGs) always have an up-to-date configuration according to the respective GKE configuration in the control plane manager so that configuration changes made on the GKE cluster or node pools will be updated automatically to the Ocean configuration.

This feature provides a convenient user experience. It lets you quickly update specific GKE parameters, such as Kubernetes Version, NodeLocal DNSCaching, etc., directly and only once in your GKE console. 
Ocean’s auto-update process will capture the changes and automatically update the Ocean configuration.

##  Prerequisites

 * The console's cluster version and the default node pool version must be identical to apply auto-updates for custom and default Virtual Node Groups.

 * Do not delete the original node pool or change its name (to ensure upgrade synchronization). The original node pool can be drained from all nodes as long as it is preserved.

## How It Works

The auto-update process runs once every 30 minutes and takes place as follows:

1. When an auto-update runs, Ocean checks for changes in certain fields of the GKE cluster configuration and each of the node pool configurations. The following fields are checked: Version and parts of the metadata (Kube-labels, Kube-env), the node pool’s source image, and the node pool’s ServiceAccount.
2. Changes to any of the above fields trigger an update of the Ocean cluster configuration and the relevant VNGs in the cluster. The information updated includes `metadata`, `sourceImage`, and `serviceAccount`.
3. The resulting changes to the Ocean cluster and VNG configurations become effective.

## Example Scenario

As an example, let’s say you have created an Ocean cluster with VNGs using the Spot console, and then you enabled the [NodeLocal DNSCache](https://cloud.google.com/kubernetes-engine/docs/how-to/nodelocal-dns-cache) using the GKE console. The following events take place:

1. GKE adds labels to the node pool metadata that allow the affinity of the `nodeLocal dns daemonSet` pods to be scheduled to the nodes.
2. Ocean’s auto-update process runs at regular intervals and discovers changes in the GKE node pool configurations.
3. The Ocean-managed VNGs are updated with the new labels to reflect the added NodeLocal DNSCache.
4. The changes become effective in Ocean, and the daemonset is scheduled as expected.

## Manually trigger the Auto-Update Process

The auto-update process described above occurs every 30 minutes (by default). If you do not want to wait, use the [Reimport Cluster](https://docs.spot.io/api/#operation/reImportGke) in the Spot API to trigger the auto-update process manually.

Example:

1. Make a change in the GKE configuration.
2. Manually trigger the auto-update process. 
3. Manually trigger a roll.

You will immediately see your changes in the relevant Ocean cluster or Virtual Node Group configurations.

