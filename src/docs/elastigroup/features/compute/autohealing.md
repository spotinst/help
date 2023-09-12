# Autohealing

Autohealing enables you to select which health check service will be used to determine if an Instance needs to be replaced due to unhealthiness. If an instance fails the health check selected, it is automatically replaced with a new instance.

## Relevance

This tutorial is relevant for users of Elastigroup with AWS. For Elastigroup with Azure, see [Set Health Checks and Autohealing](elastigroup/tutorials-azure/set-health-checks-and-autohealing).

## Configure Autohealing Health Check Type

Autohealing is configurable as part of the `AUTO HEALING` settings in the Compute tab of the Creation Wizard.

<img src="/elastigroup/_media/compute-autohealing-01.png" />

Elastigroup supports the following Health Check types:

- None – No replacement will happen – Unhealthy instances will remain in the group.
- ELB – Amazon's Elastic Load Balancer (Classic load balancer) health check.
- TARGET_GROUP – AWS Application Load Balancer health check.
- EC2 – AWS EC2 Status check.
- [HCS](elastigroup/tools-integrations/custom-health-check-service) – Spot's health check.
- [ECS](elastigroup/tutorials/configure-health-checks-and-autohealing) – ECS Cluster Instance Health check.
- [K8S_NODE](elastigroup/tools-integrations/kubernetes-with-elastigroup/configure-autohealing-for-kubernetes) – Kubernetes Status check. Requires integration with a Kubernetes cluster.
- NOMAD_NODE – Nomad Status check. Requires integration with a Nomad cluster.
- [OpsWorks](elastigroup/tools-integrations/opsworks/opsworks-autohealing) – OpsWorks layer membership verification.

## Additional Health Check Settings

- Health Check Grace Period – Specify the time (in seconds) to allow an instance to boot and applications to fully start. As soon as an instance becomes Healthy the grace period is over and will not be referenced again. If an instance is unhealthy after the given grace period, it will be replaced with a new instance with a blue-green deployment approach.
- Unhealthy Duration – Specify the amount of time (in seconds) you want to keep existing instances that are deemed unhealthy before the instance is terminated and replaced with a new one. Only valid after an instance was healthy at least once.

> **Tip**: If during the configured grace period, a healthy instance becomes unhealthy, the autoscaler will not terminate the instance. Only after the grace period is over, the unhealthy duration period will begin, and the autoscaler will terminate the unhealthy instance.
