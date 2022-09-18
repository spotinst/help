<meta name="robots" content="noindex">

# View Settings

The Settings view includes tabs that display information about the rollout spec, the strategies, and a view of the clusters that have the Ocean CD Operator installed.

## Rollout Spec

When you click Settings in the left Ocean CD menu, the default view is Rollout Specs. If the list of rollout specs is long, use the filter tool to find the specifications you are looking for.

<img src="/ocean-cd/_media/tutorials-settings-01a.png" />

The following information is displayed in the list of rollout specs:
- Name: Name that identifies the YAML specification. You can click the name to see the rollout details in YAML format.
- Last updated: The date and time that the rollout spec was updated last.
- Cluster: The name of the cluster in which the rollout takes place.
- Namespace: The name of namespace in which the rollout takes place
- SpotDeployment: The name of the spot deployment making use of the rollout spec and strategy configured.
- Strategy: The strategy (i.e., rollout method) used for the rollout spec. You can click the name to see the strategy details in YAML format. It is possible to override the strategy (on a one-time basis) by using the Strategy argument in the SpotDeplyment. In this case, the new strategy name will appear in the Rollouts table.
- Failure policy: Automatic failure policy supported by Ocean CD. This parameter is optional. Should you wish to trigger manual failure policies, you can leave the field blank.
- Traffic Manager: If no traffic manager is configured, Ocean CD will use the default of Kubernetes traffic methods based on replicas.

## Strategy

The Strategy tab provides an overview of the phases and traffic splits you have chosen.

<img src="/ocean-cd/_media/tutorials-settings-04.png" />

The following information is displayed:
- Name: Name that identifies the YAML specification. You can click the name to see the strategy details in YAML format.
- Last updated: The date and time that the strategy was updated last.
- Type: The deployment strategy Ocean CD is using.
- Phases: A scale like design will show you the steps configured as well as the parameters themselves. When you hover over a point, you can see the duration of each phase (if you configured a duration) and the traffic split.

## Clusters

The Clusters tab provides an overview of the clusters in which the Ocean CD Operator is installed.

<img src="/ocean-cd/_media/tutorials-settings-05.png" />

Each cluster is represented as a new row in the table and includes the following information:
- Names: The name (cluster Identifier) you have provided.
- Last Heartbeat: Date and time of the last heartbeat sent by the controller.
- Cloud Service Provider: Your cloud provider of the underlying infrastructure.
- Kubernetes: Orchestrator and version.
- Controller: The names of the pod and node on which the controller is installed and the version of the controller.

## What’s Next?

Learn more about [viewing the rollouts](ocean-cd/tutorials/view-rollouts/).
