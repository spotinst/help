# Ocean Controller

The Ocean Controller is a pod that resides within your Kubernetes cluster, enabling the integration with the Spot platform. The Controller collects metrics and events that are pushed via a secured link to the Spot SaaS platform to support capacity scaling activities and other functions of the Spot Kubernetes integration. The Ocean Controller is able to run on ARM64 as well as x86 based architectures.

## High Availability

Because the Ocean Controller is critical to the operation of an Ocean cluster, high availability is essential. When the Controller pod is installed, it is marked with the [highest available scheduling priority](https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/), i.e., `priorityClassName` for the pod is set to `system-node-critical`. This ensures that if the pod ever goes into a pending status, the Kubernetes scheduler will give it the highest priority available for rescheduling, thus ensuring business continuity.

## Install the Controller

There are several ways to install the Controller. Choose one of the procedures below:

- [Install Controller with Kubectl](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl)
- [Install Controller with Terraform](ocean/tutorials/spot-kubernetes-controller/install-with-terraform)
- [Install Controller with Helm](ocean/tutorials/spot-kubernetes-controller/install-with-helm)

Installation of the Ocean Controller is governed by NetApp’s end user license agreement (“EULA”), which can be found at: [Sales Terms and Conditions | NetApp](https://www.netapp.com/how-to-buy/sales-terms-and-conditions/).

By installing the Ocean Controller, you accept and approve the EULA.

## Troubleshoot the Controller

If you need to troubleshoot an issue with the controller, go to the [Troubleshooting](ocean/troubleshooting/troubleshoot-controller) page.

## Supported Operating Systems

The Ocean Controller can run on a number of Linux distributions, including container-optimized operating systems such as Bottlerocket OS, Container Optimized OS, and RancherOS.

## Seamless Operation with Kubernetes API

The Ocean Controller is designed for seamless operation with the Kubernetes API, ensuring the smooth flow of requests between the components at all times. The controller is capable of sending two queries per second (QPS) to the Kubernetes API with a maximum of two concurrent queries. The concurrency maximum ensures that the Controller cannot overload the Kubernetes API.

## What’s Next?

Find out about the latest updates in [Controller Version History](ocean/tutorials/spot-kubernetes-controller/controller-version-history).
