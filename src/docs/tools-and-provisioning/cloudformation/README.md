# CloudFormation Overview

AWS CloudFormation is an infrastructure automation tool that provisions cloud computing resources. By creating a stack template, you can be confident your AWS cloud resources are built in a consistent manner.

AWS CloudFormation provides developers and systems administrators an easy way to create and manage a collection of related AWS resources while provisioning and updating those resources in an orderly and predictable fashion.

CloudFormation stack templates can be stored in version control. You can keep your template updated as changes are made to your infrastructure. This provides your team with the ability to recreate your cloud infrastructure accurately anytime needed.

## Cloud Formation Custom Resources

Custom resources enable writing custom provisioning in AWS CloudFormation templates. To include resources that are not available as AWS CloudFormation resource types (see [AWS Resource and Property Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)), such as Spot Elastigroup, use the Custom Resource string.

Custom resources require one property, the service token, which specifies where AWS CloudFormation sends requests to, such as an Amazon SNS topic.

## Resource Creation Options

There are two options available for creating resources:

- AWS Lambda (See below for additional information.)
- CloudFormation Public Extensions Registry

This second option provides two important benefits:

- Installation is simplified, as it is no longer necessary to manually add Spot by NetApp’s custom private registry/resource type.
- Maintenance and version update overhead is greatly reduced so customers receive the latest Spot feature without delay.

This means that you can easily use CloudFormation to provision cloud infrastructure through Spot Elastigroup, helping you save more time and optimize your cloud cost and utilization.

For more information, see [Activate a Resource in CloudFormation Public Extensions Registry](tools-and-provisioning/cloudformation/activate-a-resource-in-public-extensions-registry).

## AWS Lambda-Backed Custom Resources

When associating a Lambda function with a custom resource, the function is invoked whenever the custom resource is created, updated, or deleted. AWS CloudFormation calls a Lambda API to invoke the function and pass all the request data (such as the `request type` and `resource properties`) to the function.

## How does the Integration with Elastigroup work?

Spot uses `Custom::Resource` in your Cloud Formation templates which triggers the AWS Lambda function to communicate with the Spot API.

This Lambda function is hosted by Spot and can be invoked by every Spot customer

<img src="/tools-and-provisioning/_media/AWS-lambda-function.png" />

## What's Next?

- [Activate a Resource in CloudFormation Public Extensions Registry](tools-and-provisioning/cloudformation/activate-a-resource-in-public-extensions-registry)
- [Get started](tools-and-provisioning/cloudformation/getting-started/) with AWS Lambda.
