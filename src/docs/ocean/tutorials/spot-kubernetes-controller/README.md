# Ocean Controller Version 1

>**IMPORTANT NOTICE**: Ocean Controller Version 1 is now deprecated for **<font color="#FC01CC">AWS Kubernetes</font>** (from November 1, 2024), for **<font color="#FC01CC">GKE</font>** (from December 18, 2024), and for **<font color="#FC01CC">AKS</font>** (from January 1, 2025) . This means that Version 1 will not support new features, and any unexpected behaviors or security issues identified after this date will not be addressed. We recommend upgrading to Ocean Controller Version 2.0 for the best performance and support.    [Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)    

The Ocean Controller is a pod that resides within your Kubernetes cluster, enabling the integration with the Spot platform. The Controller collects metrics and events that are pushed via a secured link to the Spot SaaS platform to support capacity scaling activities and other functions of the Spot Kubernetes integration. The Ocean Controller is able to run on ARM64 as well as x86 based architectures.

## High Availability

Because the Ocean Controller is critical to the operation of an Ocean cluster, high availability is essential. When the Controller pod is installed, it is marked with the [highest available scheduling priority](https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/), i.e., `priorityClassName` for the pod is set to `system-cluster-critical`. This ensures that if the pod ever goes into a pending status, the Kubernetes scheduler will give it the highest priority available for rescheduling, thus ensuring business continuity.

## Install the Controller

There are several ways to install the Controller. Choose one of the procedures below:

- [Install Controller with Kubectl](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl)
- [Install Controller with Terraform](ocean/tutorials/spot-kubernetes-controller/install-with-terraform)
- [Install Controller with Helm](ocean/tutorials/spot-kubernetes-controller/install-with-helm)

>**Important**: When installing, the recommendation is to generate a programmatic (API) token not associated with a user account. This ensures that the token will not be deleted when the user account is deleted, in which case the Ocean Controller would not function.

Installation of the Ocean Controller is governed by Flexera’s end user license agreement (“EULA”), which can be found at https://www.flexera.com/legal.

By installing the Ocean Controller, you accept and approve the EULA.

## Troubleshoot the Controller

If you need to troubleshoot an issue with the controller, go to the [Troubleshooting](ocean/troubleshooting/troubleshoot-controller) page.

## Supported Operating Systems

The Ocean Controller can run on a number of Linux distributions, including container-optimized operating systems such as Bottlerocket OS, Container Optimized OS, and RancherOS.

## Seamless Operation with Kubernetes API

The Ocean Controller is designed for seamless operation with the Kubernetes API, ensuring the smooth flow of requests between the components at all times. The controller is capable of sending two queries per second (QPS) to the Kubernetes API with a maximum of two concurrent queries. The concurrency maximum ensures that the Controller cannot overload the Kubernetes API.

## What’s Next?

Find out about the latest updates in [Controller Version History](ocean/tutorials/spot-kubernetes-controller/controller-version-history).
