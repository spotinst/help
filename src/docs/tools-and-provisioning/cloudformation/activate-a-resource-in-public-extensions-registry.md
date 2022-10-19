# Activate a Resource in Public Extensions Registry

This page describes how to activate a Spot resource in the AWS CloudFormation public extensions registry.

## Get Started

1. To activate a new public resource from the AWS console, do the following:
2. Navigate to CloudFormation under your AWS account and verify that you are in the correct AWS region.
   From the left sidebar, under CloudFormation registry, choose Public Extensions.

<img src="/tools-and-provisioning/_media/activate-resource-in-public-extensions-registry-01.png" />

3. In the Filter menu under Publisher, choose Third party, and search for “Spot” to find all our custom public resources. For example, look for Spot::Elastigroup::Group.

<img src="/tools-and-provisioning/_media/activate-resource-in-public-extensions-registry-02.png" />

4. Click the Spot::Elastigroup::Group link and choose Activate in the upper right corner of the Overview page.

<img src="/tools-and-provisioning/_media/activate-resource-in-public-extensions-registry-03.png" />

## Configuration

You will need to configure several items as described below.

1. If you do not want to use the default Extension Name, you can choose to override it and enter a different name.
2. Enter the required Execution role ARN for this public extension. (For creating the role ARN, see the procedure below.) This role must have a trust relationship established with CloudFormation, but does not need permissions to access resources in your account. Once this ARN is created, it can be reused to activate the public resource type in additional regions.
3. The remaining configuration items for logging and versioning can be left at their default settings. You’ll be able to modify them after activation if necessary.

<img src="/tools-and-provisioning/_media/activate-resource-in-public-extensions-registry-04.png" />

## Create Execution Role ARN

1. To create the required Execution role ARN navigate to IAM under your AWS account and click Roles. You may want to do this in another tab, so you can keep this one open.
2. Create a Role with “AWS service” as the trusted entity and select CloudFormation as the use-case.
3. When choosing which policies to attach the newly created role, select AWSDenyAll (The custom public type does not need to access any resources in your AWS account.)
4. After the role has been created, verify that its trust-relationship with CloudFormation service exactly matches the following:

```yaml
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "resources.cloudformation.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

5. Copy and paste the newly created role’s ARN into the Public extension configuration screen and click Activate.
6. You will now see “Spot::Elastigroup::Group” under Activated extensions. Your CloudFormation stacks can now refer to it as a native resource type.
7. If you or your organization uses multiple AWS regions, simply repeat the activation process in each specific region. Remember that you can use the same Execution role ARN across all regions.

## What’s Next?

- Learn more about the CloudFormation [template structure](tools-and-provisioning/cloudformation/template-structure/) and [tools](tools-and-provisioning/cloudformation/tools/) available.
- Try out one of the many example templates available.
