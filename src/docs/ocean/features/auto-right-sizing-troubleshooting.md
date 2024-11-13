# Automatic Right-Sizing-Troubleshooting

VPA message or error appears

* Ensure that your inbound rule for your node group's security group allows traffic to the Spot webhook listening port. This enables communication between the Kubernetes Server API and the webhook. See [Create a security group for your Amazon EC2 instance - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-security-group.html).
