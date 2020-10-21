# CloudFormation Overview

AWS CloudFormation provides developers and systems administrators an easy way to create and manage a collection of related AWS resources while provisioning and updating those resources in an orderly and predictable fashion.

## Cloud Formation Custom Resources

Custom resources enable writing custom provisioning in AWS CloudFormation templates. To include resources that are not available as AWS CloudFormation resource types (see [AWS Resource and Property Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)), such as Spot Elastigroup, use the Custom Resource string.

Custom resources require one property: the service token, which specifies where AWS CloudFormation sends requests to, such as an Amazon SNS topic.

## AWS Lambda-Backed Custom Resources

When associating a Lambda function with a custom resource, the function is invoked whenever the custom resource is created, updated, or deleted. AWS CloudFormation calls a Lambda API to invoke the function and pass all the request data (such as the `request type` and `resource properties`) to the function.

## How does the Integration with Elastigroup work?

Spot uses `Custom::Resource` in your Cloud Formation templates which use a triggers AWS Lambda function to communicate with the Spot API.

This Lambda function is hosted by Spot and can be invoked by every Spot customer

<img src="/tools-and-provisioning/_media/AWS-lambda-function.png" />
