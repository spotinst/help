# Distribute Nodes by vCPU

The Spot team understands that one of your main concerns in running your applications is high availability (HA). Ocean provides several methods of distributing resources that contribute to HA, significantly reducing the chances of an interruption of service.

## Relevance

This page (specifically, the Nodes by vCPU feature) is relevant to users of Ocean for AWS (Kubernetes).

## Nodes by Count

When scaling up new nodes, Ocean’s default distribution method is to spread the nodes in different availability zones (AZs) by count. For example, if Ocean has determined that it can do the next scale up in two availability zones (AZs) and if there are five nodes in AZ A and three nodes in AZ B, Ocean will bring up the next node in AZ B. As Ocean strives to even out the count of nodes in each AZ, the risk of interruption is spread evenly among the AZs.

## Nodes by vCPU

Distribution of resources strictly by node count does not always lead to equal distribution of vCPU and can even lead to very large differences in vCPU between AZs. To minimize this risk and add another method of maintaining HA, Ocean enables you to choose distribution by vCPU.

In distribution by vCPU, Ocean also takes the number of vCPUs into account when scaling up. For example, if you have five small nodes in AZ A and three large nodes in AZ B, the next scale up would be a large node in AZ A. This would act to even out the vCPUs across the AZs (even though there are already more nodes by count in AZ A).

Distribution by vCPU also affects the spread by spot% feature (in case configured) that distributes resources across spot and on-demand (OD) nodes. In other words, configuring spread by vCPU has two effects:

- Ocean decides if the next scale-up will be on spot or OD by looking at the current vCPU on each instead of node count.

- Ocean decides which AZ to choose for scale-up based on the current vCPU in each, and not node count.

For the scale up, Ocean can only predict the size of node that will be used, so the goal is for a “best effort” distribution of vCPU.

## Set up in Ocean API

To define the cluster orientation for your Ocean cluster, you can use the [Create Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Update Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate) APIs.

Configure the following structure as your strategy:

```
strategy{
"spreadNodesBy": "vcpu"
}
```

Values for spreadNodesBy can be:

* vCPU
* Count

If no option is set, the default behavior is spread by count.

Once you have set to spread nodes by vCPU, the following Ocean functions will use this method:

* Scale up
* Spot percentage
* Scale per VNG
* Replacement process (out of strategy, auto-healing)

## What’s Next?

Learn how Ocean uses the [Headroom](ocean/features/headroom) feature to always be ready for rapid application scale-up.
