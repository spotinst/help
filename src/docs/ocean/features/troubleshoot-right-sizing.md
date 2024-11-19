# Automatic Right-Sizing-Troubleshooting

>**Note**: Spot only checks the healthiness of the VPA pods belonging to the Spot VPA Project, not the Native VPA one.

## Security Group not correctly configured

In this case, your pod may not be launched according to the values defined on the VPA.

To avoid this issue, ensure that your inbound rule for your node group's security group allows traffic to the Spot webhook listening port. This ensures smooth communication between the Kubernetes Server API and the webhook. 
See [Create a security group for your Amazon EC2 instance - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-security-group.html).

## VPA not reporting message appears at the top of the right-sizing page

![vpa-not-reporting](https://github.com/user-attachments/assets/ca3ca20c-afcc-484a-9462-0b86f43e9a57)

This may indicate that the VPA updater and admission controller pods are not reporting.

In this case, the right-sizing recommendations cannot be injected when a pod is launched, and you will not be able to attach a rule to a workload, which will move to the **Limited** status.

