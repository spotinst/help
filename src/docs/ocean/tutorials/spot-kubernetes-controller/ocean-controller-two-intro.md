<meta name=“robots” content=“noindex”>

# Ocean Controller Version 2 

The Ocean Controller is a pod that resides inside your Kubernetes cluster, facilitating seamless integration with the Spot platform. By collecting metrics and events and reporting them to the Spot SaaS environment, the Controller empowers Ocean to autonomously manage, control, and optimize your infrastructure. With the Ocean Controller, you gain the ability to effortlessly harness the capabilities of the Spot platform while ensuring efficient infrastructure management.

Ocean Controller Version 2 comes with two replicas out-of-the-box. You can add further replicas as required. 

![Ocean-controller-multiples](https://github.com/spotinst/help/assets/159915991/42ff4102-589b-40bd-8293-723114ca8718)

The Ocean Controller offers the following functionality and benefits: 

*   Enhanced efficiency and performance through an event-driven system design. 

*   Out-of-the-box deployment in High Availability mode ensures continuous pod availability. This approach enables rapid scaling and prompt pod initiation. 

*   Establishes a binding between the Kubernetes cluster and the pertinent Ocean resources using the configured Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster. 

*   Resides within your Kubernetes cluster and actively listens for resource events. It seamlessly pushes modified resources to the Spot SaaS environment. The Spot SaaS environment houses a dedicated Ocean Autoscaler, which promptly scales your Kubernetes clusters optimally when triggered. 

*   Minimizes its footprint within the cluster, resulting in low external network traffic when no changes occur. This attribute presents opportunities for cost savings. 

By installing Ocean Controller Version 2, you can effortlessly integrate Ocean with your Kubernetes cluster, leverage event-driven efficiency, ensure high availability, and optimize your infrastructure management. 

Ocean Controller supports Linux OS only. 

>**Note**: Windows OS is not supported.

## Ocean Controller Version 2 Limitations

Ocean Controller Version 2 handles start-up taints differently. In Ocean Controller Version 1, start-up taints were not supported. In Ocean Controller Version 2, the Controller actively removes unknown taints other than those listed below. This change was implemented to enhance the scale-up process, making it more accurate and faster.

 * "node.kubernetes.io/"
 * "node-role.kubernetes.io/"
 * "node.cloudprovider.kubernetes.io/"
 * "kubernetes.azure.com/"
 * "cloud.google.com/"
 * "cni.istio.io/"
 * "ebs.csi.aws.com/"
 * "efs.csi.aws.com/"
 * "node.cilium.io/"

When Ocean encounters unknown (custom taints) not predefined on the Virtual Node Group, the Controller removes them. This action is crucial for preventing scaling issues when scaling up nodes for specific pods. If the Virtual Node Group lacks these taints, the Ocean Autoscaler will still try to simulate the pods on the nodes, but without the taints, the pods won't be able to be scheduled on those nodes. Consequently, the Controller's default behavior is to remove unknown custom taints to ensure smooth scaling operations.

## Related Topics

*  [Install the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install)
*  [Update the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-update)
*  [Ocean Controller Permissions](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-permissions)
*  [Ocean Controller Proxy Settings](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-proxy)
*  [Ocean Controller Troubleshooting](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-ts)
*  [Ocean Controller Version History](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/controller-version-two-hist)


