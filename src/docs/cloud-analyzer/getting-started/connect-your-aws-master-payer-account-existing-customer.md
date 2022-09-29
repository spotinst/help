# Connect Management Account: Existing Customer

Use the procedure on this page if you are an existing Spot customer and want to connect your AWS Cost and Usage Reports to start using Cloud Analyzer. If you are a new customer and are connecting to Spot for the first time, use the following procedure: [Connect your AWS Management Account: First Registration](cloud-analyzer/getting-started/connect-master-payer-account-first-registration).

## Prerequisites

- Organization administration permissions in Cloud Analyzer are required to register an organization to Cloud Analyzer.
- Getting started with Cloud Analyzer on AWS requires read-only permissions to the Cost and Usage Reports, which are located in the Management account.

## AWS Region

We recommend that you perform all actions in this procedure in the us-east-1 (Northern Virginia) AWS region. This includes generating the CUR file into a bucket in us-east-1.

Additional regions supported in this procedure appear in the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions). Use only regions where the Opt-in Status is "Not required".

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-00.png" width="498" height="154" />

If there is a problem completing this step, please contact Support.

## Get Started

1. Once you log into the Spot Console, go to the Cloud Analyzer Cost Analysis dashboard. You will see the following message:

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-01.png" width="300" height="212" />

2. Click Add Permissions to start the connection wizard.

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-02.png" />

3. From here, follow the steps on screen to connect your account.

## Step 1

Log in to your AWS Management account.

## Step 2

Ensure that IAM user and role access to the Billing and Cost Management console is activated according to the instructions in the [AWS procedure](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html#ControllingAccessWebsite-Activate).

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-02a.png" />

## Step 3

Set up Cost and Usage Reports.

- To go to AWS Cost and Usage Report setup, click [here](https://console.aws.amazon.com/billing/home?#/reports).
- To create a new report, follow the illustrations below. Important guidelines:
  - Include Resource IDs under Additional Report Details
  - Enable Data refresh settings.
  - Time granularity Units should be Hourly.
  - Enable report data integration for Amazon Athena.
  - The prefix should not have a duplicate “/.” (directorypath/my-cur is better than directorypath//my-cur)

Mark the checkboxes as shown below.

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-03.png" />

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-04.png" />

## Step 4

1. In your AWS account, go to the Cost and Usage Reports page.
2. Under Delivery Options, copy the S3 Bucket value.

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-05.png" />

3. Return to your account in the Spot Console and paste the name of the S3 bucket where the hourly cost and usage reports are stored.

## Step 5

Open the linked Cloudformation Template.

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-06.png" />

## Step 6

Mark the checkbox acknowledging that CloudFormation will create IAM resources, and hit create.

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-07.png" />

## Step 7

Once the stack is created, copy the Spot Role ARN from the CloudFormation stack Outputs tab.

<img src="/cloud-analyzer/_media/gettingstarted-connect-master-existing-08.png" width="450" height="371" />

Once your Organization is connected to the Spot Cloud Analyzer, initial data processing will take up to 72 hours. You will be notified via email when your dashboards are ready.
