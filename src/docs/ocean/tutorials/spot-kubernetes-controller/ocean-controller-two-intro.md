<meta name=“robots” content=“noindex”>

# Ocean Controller Version 2 

> **Note**:  For more information about Ocean Controller Version 2, contact your Customer Support representative.

The Ocean Controller is a powerful pod that resides inside your Kubernetes cluster, facilitating seamless integration with the Spot platform. By exporting essential resources to the Spot SaaS environment, the Controller empowers Ocean to autonomously manage, control, and optimize your infrastructure. With the Ocean Controller, you gain the ability to effortlessly harness the capabilities of the Spot platform while ensuring efficient infrastructure management.

Ocean comes with two replicas out-of-the-box. You can add further replicas as required. 

![Ocean-controller version-two](https://github.com/spotinst/help/assets/159915991/183feadc-f4a6-4108-9bb0-533a85a6e2e9)

The Ocean Controller offers the following functionality and benefits: 

*   Enhanced efficiency and performance through an event-driven system design. 

*   Out-of-the-box deployment in High Availability mode ensures continuous pod availability. This approach enables rapid scaling and prompt pod initiation. 

*   Establishes a binding between the Kubernetes cluster and the pertinent Ocean resources using the configured Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster. 

*   Resides within your Kubernetes cluster and actively listens for resource events. It seamlessly pushes modified resources to the Spot SaaS environment. The Spot SaaS environment houses a dedicated Ocean Autoscaler, which promptly scales your Kubernetes clusters in an optimized manner when triggered. 

*   Minimizes its footprint within the cluster, resulting in limited external network traffic when no changes occur. This attribute presents opportunities for cost savings. 

By installing Ocean Controller Version 2, you can effortlessly integrate Ocean with your Kubernetes cluster, leverage event-driven efficiency, ensure high availability, and optimize your infrastructure management. 

## Supported Operating Systems

Ocean Controller supports Linux OS only. 

>**Note**: Windows OS is not supported.

## Related Topics

[Install the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install)

[Update the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-update)

[Ocean Controller Permissions](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-permissions)

[Ocean Controller Proxy Settings](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-proxy)

[Ocean Controller Troubleshooting](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-ts)


