# Metadata Labels

Spot supports metadata labels to be configured by using the Spot instance group to configure various Ocean settings. All labels marked with `*` must be configured on the same instance group that contains `spotinst.io/ocean-default-launchspec: "true"`. Below is a list of supported metadata labels and the default values.

| Label                                                   | Description                                                                                                          | Default |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| spotinst.io/spot-percentage \*                          | Specify the percentage of Spot instances that should spin up from the target capacity.                               | 100     |
| spotinst.io/utilize-reserved-instances \*               | Specify whether reserved instances should be utilized.                                                               | true    |
| spotinst.io/utilize-commitments \*                      | Specify whether reserved instance commitments should be utilized.                                                     | none    |
| spotinst.io/fallback-to-ondemand \*                     | Specify whether fallback to on-demand instances should be enabled.                                                   | true    |
| spotinst.io/grace-period \*                             | Specify a period of time, in seconds, that Ocean should wait before applying instance health checks.                 | none    |
| spotinst.io/ocean-default-launchspec                    | Specify whether to use the InstanceGroup's spec as the default Launch Spec for the Ocean cluster.                    | none    |
| spotinst.io/ocean-instance-types \*                     | Specify desired node type for the VNG                                                                                | none    |
| spotinst.io/ocean-instance-types-whitelist \*           | Specify whether to permit list specific instance types.                                                              | none    |
| spotinst.io/ocean-instance-types-blacklist \*           | Specify whether to deny list specific instance types.                                                                | none    |
| spotinst.io/autoscaler-disabled \*                      | Specify whether the auto scaler should be disabled.                                                                  | false   |
| spotinst.io/autoscaler-default-node-labels              | Specify whether default node labels should be set for the auto scaler.                                               | false   |
| spotinst.io/autoscaler-auto-config                      | Specify whether headroom resources should be automatically configured and optimized.                                  | true   |
| spotinst.io/autoscaler-auto-headroom-percentage         | Specify the auto headroom percentage (a number in the range [0, 200]) which controls the percentage of headroom.      | none   |
| spotinst.io/autoscaler-headroom-cpu-per-unit            | Specify the number of CPUs to allocate for headroom. CPUs are denoted in millicores, where 1000 millicores = 1 vCPU. | none    |
| spotinst.io/autoscaler-headroom-gpu-per-unit            | Specify the number of GPUs to allocate for headroom.                                                                 | none    |
| spotinst.io/autoscaler-headroom-mem-per-unit            | Specify the amount of memory (MB) to allocate for headroom.                                                          | none    |
| spotinst.io/autoscaler-headroom-num-of-units            | Specify the number of units to retain as headroom, where each unit has the defined CPU and memory.                   | none    |
| spotinst.io/autoscaler-cooldown \*                      | Specify a period of time, in seconds, that Ocean should wait between scaling actions.                                | 300     |
| spotinst.io/autoscaler-scale-down-max-percentage \*     | Specify the maximum scale down percentage.                                                                           | none    |
| spotinst.io/autoscaler-scale-down-evaluation-periods \* | Specify the number of evaluation periods that should accumulate before a scale down action takes place.              | 5       |
| spotinst.io/autoscaler-resource-limits-max-vcpu         | Specify the maximum number of virtual CPUs that can be allocated to the cluster.                                     | none    |
| spotinst.io/autoscaler-resource-limits-max-memory       | Specify the maximum amount of total physical memory (in GiB units) that can be allocated to the cluster.              | none    |
| spotinst.io/restrict-scale-down                         | Specify whether the scale-down activities should be restricted.                                                      | none    |

## Example

```yaml
apiVersion: kops/v1alpha2
kind: InstanceGroup
metadata:
labels:
  kops.k8s.io/cluster: kops.k8s.com
  spotinst.io/ocean-default-launchspec: "true"
  spotinst.io/fallback-to-ondemand: "false"
  spotinst.io/utilize-reserved-instances: "false"
  spotinst.io/autoscaler-disabled: "true"
  spotinst.io/autoscaler-default-node-labels: "true"
  spotinst.io/autoscaler-headroom-cpu-per-unit: "250"
  spotinst.io/autoscaler-headroom-mem-per-unit: "1000"
  spotinst.io/autoscaler-headroom-num-of-units: "5"
name: nodes
spec:
```

## What's Next?

Learn about [OpenShift](ocean/tools-and-integrations/openshift).
