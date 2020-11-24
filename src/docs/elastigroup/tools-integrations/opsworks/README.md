# OpsWorks Integration Setup

AWS OpsWorks is a configuration management service that uses Chef, an automation platform that treats server configurations as a code. OpsWorks uses Chef to automate how servers are configured, deployed and managed across your instances.

This procedure will cover the simple steps you need to perform in order to allow Spot Elastigroup to provision and manage the instances running in your Opsworks environment.

## Prerequisites

- An up-to-date [Spot Policy](administration/api/spot-policy-in-aws)
- A live Opsworks Stack and Layer with a running instance
- Cancel the [auto-healing feature](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autohealing.html) in OpsWorks.

## Step 1: Configure IAM Role for OpsWorks

In order to register your Spot instances into OpsWorks, you need to create an IAM role first and associate it with your Elastigroup. The IAM role will allow your Instances to perform operations and attach themselves to the OpsWorks stack.

1. Sign in to the AWS Management Console and open the [IAM console](https://console.aws.amazon.com/iam/).
2. In the navigation pane of the console, click Roles and search for aws-opsworks-ec2-role.
3. Click on the role name, and then in the Permissions tab click on `Attach Policy`.
4. Search for the policies AWSOpsWorksCMServiceRole, AWSOpsWorksInstanceRegistration and AWSOpsWorksRegisterCLI.
5. Click on the policies to select them and then click `Attach Policy`.

## Step 2: Open the Creation Wizard

Under Elastigroups, click Create Elastigroup, and choose `Opsworks` from the use-cases screen.

<img src="/elastigroup/_media/opsworks-integration-01.png" width="176" height="257" />

1. Select your Opsworks region, Stack type, Stack name and layer from the dropdown.
2. Select a running instance from your layer, which will be used to import the configurations into the Elastigroup.

<img src="/elastigroup/_media/opsworks-integration-02.png" width="443" height="231" />

## Step 3: Verify Configurations

The Creation Wizard imports the configuration of one of the instances in your stack. You can now review the configurations and modify them if needed:

- IAM Role that has been modified to include the permissions as stated in step 1.
- User-Data that will make sure to register the instance to Opsworks stack and layer.
- Autohealing is set to Opsworks. For more information refer to the Opsworks Autohealing page
- Under Integrations, Opsworks is preselected and includes the Opsworks stack type, Stack ID and layer ID.

After reviewing the configuration click create. Elastigroup will launch an instance and register it into the Opswork Layer.

That's It! Elastigroup is now managing and provisioning Spot instances for the Opsworks environment. You can review your instances in the Elastigroup management view along with their OpsWorks healthiness.

<img src="/elastigroup/_media/opsworks-integration-03.png" />

## Usage Notes and Tips

- For regional OpsWorks stacks, the Elastigroup must be in the same region and VPC as the stack.
- Do not change the instances hostname, as it is used to identify the instance in OpsWorks.
- Ensure that you have cancelled the auto-healing feature of OpsWorks. Failure to do so will cause the creation of new instances by OpsWorks once an Elastigroup terminates an instance (For scale down for example).
- The AMI used in the Elastigroup should have Python installed (part of OpsWorks requirements)
- The import process does not affect running instances. At this point, you can choose to terminate your original On-Demand instances.
