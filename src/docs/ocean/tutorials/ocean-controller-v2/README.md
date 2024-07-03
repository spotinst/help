# Ocean Controller Version 2 

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">GKE</font>, and <font color="#FC01CC">AKS</font> 

The Ocean Controller is a pod that resides inside your Kubernetes cluster, facilitating seamless integration with the Spot platform. By collecting metrics and events and reporting them to the Spot SaaS environment, the Controller empowers Ocean to manage, control, and optimize your infrastructure autonomously. With the Ocean Controller, you can effortlessly harness the capabilities of the Spot platform while ensuring efficient infrastructure management.

Ocean Controller Version 2 comes with two replicas out-of-the-box. You can add more replicas as required. 

![Ocean-controller-multiples](https://github.com/spotinst/help/assets/159915991/90e2a5ab-f724-4297-914a-186ef4e1b803)


The Ocean Controller offers the following functionality and benefits: 

*   Enhanced efficiency and performance through an event-driven system design. 

*   Out-of-the-box deployment in High Availability mode ensures continuous pod availability. This approach enables rapid scaling and prompt pod initiation. 

*   Establishes a binding between the Kubernetes cluster and the pertinent Ocean resources using the configured Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster. 

*   Resides within your Kubernetes cluster and actively listens for resource events. It seamlessly pushes modified resources to the Spot SaaS environment. The Spot SaaS environment houses a dedicated Ocean Autoscaler, which quickly scales your Kubernetes clusters optimally when triggered. 

*   Minimizes its footprint within the cluster, resulting in low external network traffic when no changes occur. This attribute presents opportunities for cost savings. 

By installing Ocean Controller Version 2, you can effortlessly integrate Ocean with your Kubernetes cluster, leverage event-driven efficiency, ensure high availability, and optimize your infrastructure management. 

The Ocean Controller pod can run on a Linux OS node only. 

>**Note**: The Ocean Controller pod cannot run on a Windows OS node.

## Related Topics

*  [Install the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install)
*  [Update the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-update)
*  [Ocean Controller Permissions](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-permissions)
*  [Ocean Controller Proxy Settings](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-proxy)
*  [Ocean Controller Troubleshooting](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-ts)
*  [Ocean Controller Version History](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/controller-version-two-hist)

