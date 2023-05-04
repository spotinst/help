# Multiple SpotDeployments per RolloutSpec

Multiple SpotDeployments Per RollouSpec provide flexibility when configuring the RolloutSpec entity.  This feature enables you to set as many clusters and namespaces as needed as part of one RolloutSpec.   

Multiple SpotDeployments enable all of the configured SpotDeployments to use strategies and arguments as well as failure policies.  

The following tutorial explains how to use the feature in the Spot console:

1. In the RolloutSpec CRUD entity, click the Use multiple Spotdeployment toggle to enable the feature.

<img src="/ocean-cd/_media/multiple-1.png" />

2. Add as many workloads as needed. For each cluster and namespace, a multiple selection of SpotDeployments is provided.  

<img src="/ocean-cd/_media/multiple-2.png" />

**Note**: If the Multiple SpotDeployments Per RollouSpec feature is enabled, no traffic managers can be set.  

Ensure that each of the chosen SpotDeployments are being exposed with different Kubernetes services.

Two SpotDeployments may not be exposed to the same Kubernetes service.

## What's Next?

Get to know [Ocean Cd](ocean-cd/get-to-know-ocean-cd/).
