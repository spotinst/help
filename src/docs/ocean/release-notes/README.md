<meta name=“robots” content=“noindex”>

# Ocean Release Notes

## Features and Enhancements

* **OCN-001**: As of **May 1, 2024**, **Ocean Controller Version 2** for **AWS K8s** is officially released, bringing a host of new features and enhancements to streamline your operations:
  *  With Ocean Controller Version 2, you can expect enhanced efficiency and performance thanks to its innovative event-driven system design. This intelligent architecture ensures your cluster operates at peak performance, delivering optimal results with every interaction.

  *  One of the standout features of Ocean Controller Version 2 is its out-of-the-box Leader Election mode, guaranteeing continuous pod availability and uninterrupted operations, to keep your cluster running smoothly, even in the face of unexpected events.

  *  Ocean Controller Version 2 establishes a secure binding between your Kubernetes cluster and the relevant Ocean resources. By configuring your Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster, you can easily manage and monitor your resources.

  *  Ocean Controller Version 2 resides within your Kubernetes cluster, actively listening for resource events. This intelligent system seamlessly pushes modified resources to the Spot SaaS environment, ensuring your cluster is always updated with the latest changes.

  *  Not only does Ocean Controller Version 2 offer unparalleled functionality, but it also boasts a minimal footprint within your cluster. This means external network traffic is low when no changes occur, presenting exciting cost-saving opportunities. 

>**IMPORTANT:** Please note that **Ocean Controller Version 1** will reach End-Of-Life on **November 1, 2024**. To take advantage of the benefits offered by **Ocean Controller Version 2** and receive uninterrupted service and support, please upgrade to Version 2 at your earliest convenience.
[Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/readme)


* **OCN-002: May 1, 2024:**
Spot has introduced a new Ocean label, `spotinst.io/azure-premium-storage,` which is injected on every node in a node pool that supports premium storage. Once you define this label on a workload that requires premium storage, the pods can be provisioned on the most appropriate nodes for the workload. [Learn More...](https://docs.spot.io/ocean/features/labels-and-taints) (edited) 









