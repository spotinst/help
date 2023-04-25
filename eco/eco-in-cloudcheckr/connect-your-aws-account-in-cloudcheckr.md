<meta name="robots" content="noindex">

# Connect your AWS Account in CloudCheckr

This page describes how to connect your AWS account in CloudCheckr.
## Prerequisite

A formal agreement with CloudCheckr is required prior to enabling the feature.

Getting started with Eco on AWS requires read-only permissions to the Cost and Usage Reports, which are located in the Management account, or in specially configured [member accounts](https://aws.amazon.com/about-aws/whats-new/2020/12/cost-and-usage-report-now-available-to-member-linked-accounts/).

Eco will read data from your Direct-to-AWS Management Account and connect as described below.
## AWS Region

All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region. (This includes generating the CUR file into a bucket in us-east-1.) If there is a problem doing this, please contact Support.

## Get Started

Once you have access to the Eco setup wizard. You will see the following message:

<img src="/eco/_media/gettingstarted-aws-connect-01.png" width="300" height="212" />

Click Add Permissions to start the connection wizard.

<img src="/eco/_media/gettingstarted-aws-connect-02.png" />

From here, follow the steps on screen to connect your account.

## Step 1

Log in to your AWS management account (or single, member account if you are an MSP end customer).

## Step 2

Set up Cost and Usage Reports as described below.

1. To go to AWS Cost and Usage Report setup, click [here](https://console.aws.amazon.com/billing/home?#/reports).
2. To create a new report, follow the illustrations below. Important guidelines:
   - Include Resource IDs under `Additional report details`
   - Enable Data refresh settings.
   - Time granularity Units should be Hourly.
   - Enable report data integration for Amazon Athena.

3. Mark the checkboxes as shown below.

> **Note**: We strongly recommend that you create both a new Amazon S3 bucket and a new Cost and Usage Reports if you do not have Athena already integrated. The following setup process removes any Amazon S3 events that your bucket might already have, which can negatively affect any existing event-based processes that you have for an existing AWS CUR.

<img src="/eco/_media/gettingstarted-aws-connect-11.png" width="450" height="600" />

<img src="/eco/_media/gettingstarted-aws-connect-12.png" width="450" height="600" />

> **Note**: An administrator of your account or your organization may have restricted your user's right to define the CUR, and this should be addressed with the administrator. For example, if you see errors stating that you cannot perform the 'putReportDefinition' operation, you will need to address this with your administrator.

## Step 3

1. In your AWS account, go to the Cost and Usage Reports page.
2. Under Delivery Options, copy the S3 Bucket value.

<img src="/eco/_media/gettingstarted-aws-connect-05.png" width="450" height="126" />

3. Return to your account in CloudCheckr and paste the name of the S3 bucket where the hourly cost and usage reports are stored.

## Step 4

Open the linked Cloudformation Template.

<img src="/eco/_media/gettingstarted-aws-connect-06.png" />

## Step 5

Mark the checkbox acknowledging that CloudFormation will create IAM resources, and hit create.

<img src="/eco/_media/gettingstarted-aws-connect-07.png" />

## Step 6

Once the stack is created, copy the Spot Role ARN from the CloudFormation stack Outputs tab.

<img src="/eco/_media/gettingstarted-aws-connect-08.png" width="546" height="484" />

Once your Organization is connected to Eco, initial data processing will take up to 48 hours.

## What’s Next?

Learn how to [view your savings](eco/eco-in-cloudcheckr/view-savings-in-dashboard) in the dashboard.
