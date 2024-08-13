# OpenShift

>**Note**: OpenShift integration is currently only supported for AWS.

Red Hat OpenShift is an open-source container application platform based on the Kubernetes container orchestrator for enterprise application development and deployment.
Ocean improves on the foundation of our tried-and-true Kubernetes Autoscaler and provides pod-driven autoscaling for Kubernetes clusters. Ocean adjusts infrastructure capacity and size to meet pod, container, and application needs and ensures that all pods in the cluster have a place and capacity to run. The icing on the cake is that beyond eliminating the overhead of maintaining and scaling the infrastructure, Ocean significantly reduces costs by reliably leveraging excess capacity and automatically bin-packing containers to ensure the most efficient use of infrastructure. Ocean recognizes when multiple containers should be placed on the same instance or when they should spread out across a group.
When adding a node to an OpenShift cluster, a Certificate Signing Request (CSR) is created and waits for approval before being added. Ocean supports this mechanism and will ensure that pending CSRs launched by Ocean will be approved (based on their identifier at the launch time) as part of its integration into the Kubernetes cluster infrastructure.

Ocean now officially supports OpenShift v3.11 and later, leveraging its security and management advantages. Using Ocean, OpenShift users can now enjoy the `Serverless Containers` experience.

## Related Topics

Learn how to migrate your OpenShift clusters to Ocean:

- [Create Ocean Cluster from OpenShift (v4.x)](ocean/tools-and-integrations/openshift/create-cluster-v4x)
- [Create Ocean Cluster from OpenShift (v3.11+)](ocean/tools-and-integrations/openshift/create-cluster-v311)
