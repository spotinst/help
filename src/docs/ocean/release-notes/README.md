# Ocean Release Notes

## Features and Enhancements

* **OCN-001**: As of **May 1, 2024**, **Ocean Controller Version 2** for **AWS K8s** is officially released, bringing a host of new features and enhancements to streamline your operations:
  *  With Ocean Controller Version 2, you can expect enhanced efficiency and performance thanks to its innovative event-driven system design. This intelligent architecture ensures your cluster operates at peak performance, delivering optimal results with every interaction.

  *  One of the standout features of Ocean Controller Version 2 is its out-of-the-box Leader Election mode, which guarantees continuous pod availability and uninterrupted operations to keep your cluster running smoothly, even in the face of unexpected events.

  *  Ocean Controller Version 2 establishes a secure binding between your Kubernetes cluster and the relevant Ocean resources. By configuring your Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster, you can easily manage and monitor your resources.

  *  Ocean Controller Version 2 resides within your Kubernetes cluster, actively listening for resource events. This intelligent system seamlessly pushes modified resources to the Spot SaaS environment, ensuring your cluster is always updated with the latest changes.

  *  Not only does Ocean Controller Version 2 offer unparalleled functionality, but it also boasts a minimal footprint within your cluster. This means external network traffic is low when no changes occur, presenting exciting cost-saving opportunities. 

>**IMPORTANT:** Please note that **Ocean Controller Version 1** will reach End-Of-Life on **November 1, 2024**. To take advantage of the benefits offered by **Ocean Controller Version 2** and receive uninterrupted service and support, please upgrade to Version 2 at your earliest convenience.
[Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)


* **OCN-002: May 1, 2024:**
Spot has introduced a new Ocean label, `spotinst.io/azure-premium-storage,` injected on every node in a node pool that supports premium storage. Once you define this label on a workload requiring premium storage, the pods can be provisioned on the most appropriate nodes (for the workload). [Learn More...](https://docs.spot.io/ocean/features/labels-and-taints) (edited)

* **OCN-003: May 16, 2024:** 
Ocean now offers the ability to schedule cluster and Virtual Node Group (VNG) rolls for AKS. You have the flexibility to roll immediately or plan a maintenance window on a weekly or monthly basis during non-peak hours to upgrade or update your clusters or VNGs. You can set up roll schedules using either the [Spot API](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterUpdate) through the "Create Cluster" or "Update Cluster" endpoints using a cron expression, or through the Ocean Console Cloud Cluster's "Roll" tab.
[Learn more...](https://docs.spot.io/ocean/features/roll?id=rolls)


* **OCN-004: May 16, 2024:** 
Ocean has introduced an update to manage and optimize AKS Private Clusters. Ocean now supports any AKS private cluster configuration, as long as the Ocean Controller can establish outbound communication with the Spot SaaS control plane.
[Learn more…](https://docs.spot.io/ocean/getting-started/aks/?id=what-to-do-about-aks-private-clusters)


* **OCN-005: May 16, 2024:** [Ocean Documentation Update]: 
This topic explains how to manage Virtual Node Groups (VNGs) when upgrading the Kubernetes (K8s) version for your clusters. The recommended approach is to automatically upgrade the control plane to the latest K8s version while keeping the data plane's VNGs running on a minor K8s version until fully validating them for the latest K8s version.
[Learn more…](https://docs.spot.io/ocean/tips-and-best-practices/vng-minor-versions?id=configure-a-minor-k8s-version-for-a-virtual-node-group)












