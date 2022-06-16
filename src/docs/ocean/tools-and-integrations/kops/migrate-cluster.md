# Migrate a Cluster

## Prerequisites

- Ensure that you are in the correct cluster context for `kubectl`.
- If you are importing a cluster, the cluster name must be the same as the primary instance group name.
- Before doing a workload migration, ensure that there are no unscheduled pods. If there are unscheduled pods, the migration will stop.

## Option 1: Hybrid – Migrate Part of an Existing Cluster Managed by AWS Auto Scaling Groups to Ocean

This procedure requires `kops` version 1.15 or later.

This section describes how to perform a hybrid migration. This enables you to migrate only some or all of the worker instance groups, while leaving the primary nodes, and any remaining worker node groups to be managed in an AWS ASG.

1. Enable Spot support by toggling the feature flag on the management station where `kops` commands are run:

`export KOPS_FEATURE_FLAGS="+Spotinst,SpotinstOcean,SpotinstHybrid"`

2. Ensure that Spot environment variables are defined on the `kops` management server:

`SPOTINST_TOKEN and SPOTINST_ACCOUNT`

### Worker Node Migration

In the case of multiple worker node Instance Groups:

1. On your primary Instance Group, set the following labels:

`spotinst.io/ocean-default-launchspec: "true"`  
`spotinst.io/hybrid: "true" label`

Example:

```yaml
apiVersion: kops/v1alpha2
kind: InstanceGroup
metadata:
labels:
  kops.k8s.io/cluster: kops.k8s.com
  spotinst.io/hybrid: "true"
  spotinst.io/ocean-default-launchspec: "true"
name: nodes
spec:
```

2. Label the rest of the instance groups you want to migrate to Ocean with the label:
   `spotinst.io/hybrid: "true"`.

Example:

```yaml
apiVersion: kops/v1alpha2
kind: InstanceGroup
metadata:
  creationTimestamp: null
  labels:
    kops.k8s.io/cluster: kops.ek8s.com
    spotinst.io/hybrid: "true"
  name: nodes
spec:
```

3. Run `kops update`. `kops` will now identify and create the Ocean Cluster along with the Ocean launch specifications for each labeled instance group.
4. Workload Migration. Do one of the following:
   - [Spot Automated Workload Migration](ocean/tutorials/migrate-workload)
   - Gradually scale down your existing Auto Scaling Groups to zero. Ocean will automatically provision the required instances to ensure your pods are scheduled.
5. Clean up (optional):
   1. Delete imported Auto Scaling Groups.
   2. Delete all Launch Configurations.

## Option 2: Migrate Primary and Worker Nodes of an Existing Cluster Managed by AWS Auto Scaling Groups to Ocean

The migration of existing deployment will consist of two separate layers: primary nodes and worker nodes' Instance Group(s). Both will be imported.

1. Enable Spot support by toggling the feature flag. On the management station where `kops` commands are run:

`export KOPS_FEATURE_FLAGS="+Spotinst,SpotinstOcean"`

2. Ensure that Spot environment variables are defined on the `kops` management server:

- `SPOTINST_TOKEN`
- `SPOTINST_ACCOUNT`

### Worker Nodes

1. In a case of a single Instance Group there is no need to add any labels and you may skip this step. Set the Ocean default launch specification label: `spotinst.io/ocean-default-launchspec: true` on your primary Instance Group.

Example:

```yaml
apiVersion: kops/v1alpha2
kind: InstanceGroup
metadata:
labels:
  kops.k8s.io/cluster: kops.k8s.com
  spotinst.io/ocean-default-launchspec: "true"
name: nodes
spec:
```

3. Run `kops update`. `kops` will now identify and create the Ocean Cluster along with the Ocean launch specifications for each labeled instance group.
4. Workload Migration. Do one of the following:
   - [Spot Automated Workload Migration](ocean/tutorials/migrate-workload)
   - Gradually scale down your existing Auto Scaling Groups to zero. Ocean will automatically provision the required instances to ensure your pods are scheduled.
5. Clean up (optional):
   1. Delete imported Auto Scaling Groups.
   2. Delete all Launch Configurations.

   ## What's Next?

   Learn about [Metadata Labels](elastigroup/tutorials/amazon-ecs/metadata-labels).
