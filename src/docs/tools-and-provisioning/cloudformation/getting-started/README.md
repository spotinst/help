# Get Started with CloudFormation

## Step 1. Generate Token

Generate a [Spot API Token](https://console.spotinst.com/settings/tokens/permanent).

## Step 2. Create and Manage Templates with Spot Lambda

For each custom resource created by Spot Lambda function, the following steps need to be configured:

1. Resource type – `“Custom::elasticgroup“`. For other Spotinst services, check the [Resource Type](tools-and-provisioning/cloudformation/getting-started/resource-types) in the resources section.
2. Service Token – Use Spotinst Lambda.

For example:

```
Arn:aws:lambda:REGION:178579023202:function:spotinst-cloudformation
```

For other regions, only change the region name as indicated in the above example.

1. Access Token – Use your Spot API access token.
2. Account ID – Your Spot account ID. If you have only one account in your organization, this is not mandatory.
