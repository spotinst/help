# Amazon Web Services

Execute AWS API calls from within Spot Connect Workflows.

AWS API calls are hard to read, understand and use. Spot’s goal is to help you connect individual API calls as a node in Spot Connect workflows. With this integration you can call any AWS service.  

The AWS integration in a Spot Connect workflow enables you to use any AWS service and all available operations for the selected service.

## Configure AWS in Spot Connect

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under Cloud Services, click **AWS** and click **Add Account**. An Add Account window opens.

<img src="/spot-connect/_media/aws-integration-1.png" />

### Step 1: Name and Region for the AWS Account

In the Custom Name field, enter a name for the integration and select the default AWS region for the account. Click **Next**.

### Step 2: Connect Your AWS Account

1. Click Log in to AWS Account link. The AWS console opens in a separate tab in your browser.  
2. Log into the AWS account you want to integrate with Spot Connect.   

<img src="/spot-connect/_media/aws-integration-2.png" />

3. When you are logged in to the AWS Console, return to the Spot Connect tab and click **Next**.

### Step 3: Choose Method to Set up AWS AssumeRole

There are two ways to create an IAM role in your AWS account that enable Spot Connect to integrate with your AWS resources:

* Automatically, using a CloudFormation stack that creates the roles and policies for you.
* Manually, using IAM and finer-grained access controls.

#### Automatic Setup

Select **Automatically** and click **Next**.  

<img src="/spot-connect/_media/aws-integration-3.png" />

#### Manual Setup  

Two options:  

* Create a new role that grants [Power User Access](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/PowerUserAccess.html) to the Spot Connect integration.  
* Update an existing Spot Onboarding role you might have created when integrating other Spot services.  

1. Select a role and click on the View & Run Template link. This will open another browser tab to the AWS Console to the CloudFormation Quick create stack page.

<img src="/spot-connect/_media/aws-integration-4.png" />

2. Scroll to the bottom of the page, read the alert text in the blue box, and check the **I acknowledge that AWS CloudFormation might create IAM resources** box.  
3. Click **Create Stack**. CloudFormation may take several seconds to several minutes to complete the stack creation process.
