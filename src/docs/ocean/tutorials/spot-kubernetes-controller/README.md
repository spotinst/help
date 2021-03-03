# Spot Kubernetes Controller

The Spot Controller is a pod that resides within your Kubernetes cluster, enabling the integration with the Spot platform. The Controller collects metrics and events that are pushed via a secured link to the Spot SaaS platform to support capacity scaling activities and other functions of the Spot Kubernetes integration. The Spot Controller is able to run on ARM64 as well as x86 based architectures.

## Controller High Availability

Because the Spot Controller is critical to the operation of an Ocean cluster, high availability is essential. When the Controller pod is installed, it is marked with the [highest available scheduling priority](https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/), i.e., `priorityClassName` for the pod is set to `system-node-critical`. This ensures that if the pod ever goes into a pending status, the Kubernetes scheduler will give it the highest priority available for rescheduling, thus ensuring business continuity.

## Install the Controller

There are several ways to install the Controller. Choose one of the procedures below:

- [Install Controller with Kubectl](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl)
- [Install Controller with Terraform](ocean/tutorials/spot-kubernetes-controller/install-with-terraform)
- [Install Controller with Helm](ocean/tutorials/spot-kubernetes-controller/install-with-helm)

## Supported Operating Systems

The Spot Kubernetes Controller can run on a number of Linux distributions, including container-optimized operating systems such as AWS Bottlerocket, GCP Container Optimized OS, and RancherOS.

## What’s Next?

Find out about the latest updates in [Controller Version History](ocean/tutorials/spot-kubernetes-controller/controller-version-history).
