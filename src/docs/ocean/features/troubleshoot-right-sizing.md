# Automatic Right-Sizing-Troubleshooting

## Pod is not launched according to values defined on a VPA

Ensure that your inbound rule for your node group's security group allows traffic to the Spot webhook listening port. 
This enables communication between the Kubernetes Server API and the webhook. 
See [Create a security group for your Amazon EC2 instance - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-security-group.html).

## VPA is not reporting

* If the VPA updater and admission controller pods are not reporting, the right-sizing recommendations cannot be injected when a pod is launched.
* In this case, you cannot attach a rule to a workload, which will move to the **Limited** status.
