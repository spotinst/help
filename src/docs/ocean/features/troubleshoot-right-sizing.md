# Automatic Right-Sizing-Troubleshooting

Cloud service provider relevance: <font color="#FC01CC">EKS</font>, <font color="#FC01CC">AKS</font>, and  <font color="#FC01CC">GKE</font>.

## VPA not reporting message appears at the top of the right-sizing page

![vpa-not-reporting](https://github.com/user-attachments/assets/ca3ca20c-afcc-484a-9462-0b86f43e9a57)

This may indicate that the VPA updater and admission controller pods are not reporting.

In this case, the right-sizing recommendations cannot be injected when a pod is launched, and you will not be able to attach a rule to a workload, which will move to the **Limited** status.

>**Note**:
> - Spot checks the health of the VPA pods belonging to the Spot Ocean VPA Project.
> - For the Native VPA project, health checks are performed as long as the deployment's name is not changed.

## Security Group not correctly configured

In this case, your pod may not be launched according to the values defined on the VPA.

To avoid this issue, ensure that your inbound rule for your node group's security group allows traffic to the Spot webhook listening port. This ensures smooth communication between the Kubernetes Server API and the webhook. 
See [Create a security group for your Amazon EC2 instance - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-security-group.html).
