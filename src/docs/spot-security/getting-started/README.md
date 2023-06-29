<meta name="robots" content="noindex">

# Get Started

Spot Security aims to help your customers manage their cloud security posture by giving a 360 degree view of their most critical risks and anomalies, along with prioritized recommendations, guided remediation and compliance. In order to connect your cloud accounts to Spot Security, you need to first connect them on the Spot platform.

## Prerequisites
* An activated Spot account
* Cloud Account(s) onboarded on the Spot platform

## Get Started

1. [Connect your cloud accounts](connect-your-cloud-provider/first-account/) on Spot Security with an existing license or to start your 30 days free trial.

<img src="/spot-security/_media/getting-started-a.png" />

2. Go to Spot Security in the left menu and click Dashboard. You will then be prompted to choose a cloud provider. As of now, Spot Security only supports AWS.

<img src="/spot-security/_media/getting-started-b.png" />

## Step 1: Connect your AWS Account
In this step you will connect your AWS account to Spot Security.
1. Click Log in to AWS Account.

<img src="/spot-security/_media/getting-started-d1.png" width="350" height="350" />

2. The AWS management console opens and you can log in with your AWS credentials.
3. Logging into your AWS account will allow Spot Security to connect to your AWS account.

<img src="/spot-security/_media/getting-started-e1.png" width="400" height="350" />

4. When a green signal appears with your cloud account name next to it, click Next.

## Step 2: Set up CloudTrail

CloudTrail conducts a risk analysis of your assets in your AWS accounts.

### Step 2.1: Do you have a CloudTrail account?

You need to connect a CloudTrail account to your Spot Security account. If you have an account, complete the following steps:

### You have a CloudTrail account

1. If you have a CloudTrail account, choose Yes.

<img src="/spot-security/_media/getting-started-g1.png" width="350" height="360" />

2. If the selected account is centralized, choose Yes.
You can connect all of the dependent accounts in bulk if you have selected a centralized bucket. Select all the accounts you wish to onboard and click Next.

<img src="/spot-security/_media/getting-started-h1.png" />

3. If the selected account is not centralized, choose No and click Next.

### You do not have a CloudTrail account

1. If you don’t have a CloudTrail account, choose No and click Run Cloudformation Template which will help you set up CloudTrial.

<img src="/spot-security/_media/getting-started-i1.png" />

2. Click “Run CloudFormation Template” and a window will open which is connected to AWS with the cloud formation template path. AWS uses this path to create the CloudTrail and the stack creation is a four step process in the AWS console. The required details and permissions are automatically entered in the AWS form.

#### Create CloudFormation Stack

1. In the Prepare Template field, choose Template is ready, and click Next.  

<img src="/spot-security/_media/gs-cloudformation-stack-1.png" />

2. Enter a name for your CloudFormation Stack, and click Next.

<img src="/spot-security/_media/gs-cloudformation-stack-2.png" />

3. In the Stack Failure Options field, choose Roll back all stack resources, and click Next.

<img src="/spot-security/_media/gs-cloudformation-stack-3.png" />

4. You can now verify and/or edit the details. Click on “Create Stack” to create a CloudFormation stack for Spot Security.

<img src="/spot-security/_media/gs-cloudformation-stack-4.png" />

5. When the stack is created, you can see the stack that was created for Spot Security in the list of stacks.

<img src="/spot-security/_media/gs-cloudformation-stack-5.png" />

When this is complete, you can go back to the Spot Security onboarding process to complete the remaining steps.

### Step 2.2: Bucket Name and Region Validation

1. Enter the CloudTrail’s Bucket Name and Region, and click **Validate**.

<img src="/spot-security/_media/getting-started-j1.png" />

2. When it is validated by a green checkmark, click Next.

## Step 3: Review and Finalize

Review the information and ensure everything is correct. Click Finish Onboarding.

<img src="/spot-security/_media/getting-started-k1.png" width="750" height="600" />

## What's Next?

Learn more about the [security features](spot-security/features/) in Spot Security.
