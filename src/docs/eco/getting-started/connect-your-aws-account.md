# Connect your AWS Account

## Prerequisite

Getting started with Eco on AWS usually requires read-only permissions to the Cost and Usage Reports, which are located in the Management account. Choose one of the following methods:

- Read data from your Direct-to-AWS Management Account and connect as described below.
- Read data for all AWS MSP/Reseller customer accounts, connect as described below, and submit a support ticket.
- Read data for limited AWS MSP/Reseller customer accounts and submit a support ticket.
- Read data provided by CloudHealth and submit a support ticket.
- Read data from a member-account's Cost and Usage Report and submit a support ticket.

## AWS Region

All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region. (This includes generating the CUR file into a bucket in us-east-1.) If there is a problem doing this, please contact Support.

## Get Started

Once you log into the Spot Console, go to the Eco dashboard. You will see the following message:

<img src="/eco/_media/gettingstarted-aws-connect-01.png" width="300" height="212" />

Click Add Permissions to start the connection wizard.

<img src="/eco/_media/gettingstarted-aws-connect-02.png" />

From here, follow the steps on screen to connect your account.

## Step 1

Log in to your AWS management account.

## Step 2

Set up Cost and Usage Reports.

---

**Important**:

- If your account is not managed by an MSP, complete Step 2 and continue with the setup.
- If your Account is managed by an MSP, your MSP must set up the Cost and Usage reports as described [here](eco/getting-started/connect-account-customer-working-with-msp). Skip Steps 2 and 3 and continue with Step 4.

---

- To go to AWS Cost and Usage Report setup, click [here](https://console.aws.amazon.com/billing/home?#/reports).
- To create a new report, follow the illustrations below. Important guidelines:
  - Include Resource IDs under `Additional report details`
  - Enable Data refresh settings.
  - Time granularity Units should be Hourly.
  - Enable report data integration for Amazon Athena.
- Mark the checkboxes as shown below.

<img src="/eco/_media/gettingstarted-aws-connect-03.png" />

<img src="/eco/_media/gettingstarted-aws-connect-04.png" />

## Step 3

1. In your AWS account, go to the Cost and Usage Reports page.
2. Under Delivery Options, copy the S3 Bucket value.

<img src="/eco/_media/gettingstarted-aws-connect-05.png" width="450" height="126" />

3. Return to your account in the Spot Console and paste the name of the S3 bucket where the hourly cost and usage reports are stored.

## Step 4

Open the linked Cloudformation Template.

<img src="/eco/_media/gettingstarted-aws-connect-06.png" />

## Step 5

Mark the checkbox acknowledging that CloudFormation will create IAM resources, and hit create.

<img src="/eco/_media/gettingstarted-aws-connect-07.png" />

## Step 6

Once the stack is created, copy the Spot Role ARN from the CloudFormation stack Outputs tab.

<img src="/eco/_media/gettingstarted-aws-connect-08.png" width="546" height="484" />

Once your Organization is connected to Eco, initial data processing will take up to 48 hours. You will be notified via email when your dashboards are ready.
