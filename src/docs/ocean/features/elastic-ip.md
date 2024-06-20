# Elastic IP

Platform relevance: <font color="#FC01CC">AWS Kubernetes</font>  

Typically the ingress and egress traffic management for containerized applications is defined and configured by mechanisms provided by the container orchestration system such as Kubernetes services and ingress controllers. However, some cases require traffic routed through the infrastructure, meaning the actual instances underneath the container cluster nodes. For example, there are cases when custom business logic must be applied on the ingress traffic before it reaches the application, and regular TCP load balancers cannot process that traffic.

In addition, specific use cases require the persistence of the IP address exposed to the end users, such as a permit list of addresses for use. In such cases, an elastic IP is used to persist the same public IP address for a specific instance over time. If an instance with an elastic IP goes down or is terminated, the same IP address is maintained for when another instance is started to replace the previous one.

Ocean enables you to assign an elastic IP pool to the instances created in a specific launch specification. Those instances have a pre-defined public IP so that the requests could be effectively routed and processed through them.

## How It Works

Launch specifications allow you to configure your workloads (i.e., instances and instance groups) on an Ocean cluster. Within the launch specification you can define the elastic IPs to be applied.

This is done by adding the elasticIpPool object and a tag selector (using a key and optionally a value), which all desired EIPs to use are tagged with. This way, there is no need to explicitly manage the Ocean's EIP address pool instead of managing it in AWS. All tagged EIP objects will automatically be assigned to instances provisioned by the Ocean launch specification.

```json
{
  "elasticIpPool": {
    "tagSelector": {
      "tagKey": "myEIPPoolTagKey",
      "tagValue": "myEIPPoolTagValue"
    }
  }
}
```

## When Scaling Up

The elastic IP should be assigned to the instance prior to scheduling pods on it. we recommend the following best practices:

- Ensure that user_data requires that an EIP is attached to the node.
- It is useful (not necessary) to add a health check in user data that will ensure EIP registration before the node attempts to perform tasks that require network connectivity.

## When Scaling Down

When scaling down, Ocean will remove the elastic IP address only after all pods are removed.

## What's Next?

- Learn more about Ocean [Launch Specifications](ocean/features/launch-specifications).
- Learn more about the Ocean [API for Launch Specifications](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate).
