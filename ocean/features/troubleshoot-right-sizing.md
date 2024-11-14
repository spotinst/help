# Automatic Right-Sizing-Troubleshooting

## Communication issues between the Kuberneres Server API and the Spot webhook

The Spot webhook defines new requests for pods, and without this communication, the pods will be scheduled with incorrect requests regarding rightsizing recommendations.

Ensure that your inbound rule for your node group's security group allows traffic to the Spot webhook listening port. 
This enables communication between the Kubernetes Server API and the webhook. 
See [Create a security group for your Amazon EC2 instance - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-security-group.html).
