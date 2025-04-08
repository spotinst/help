# Connect Your AWS Account to Eco

If you have an Ocean or Elastigroup account, you can connect Eco for AWS to your existing Spot account. Eco, Ocean, and Elastigroup are integrated to maximize the usage of spot EC2 instances when commitment management is enabled.

The initial data processing takes up to 48 hours. You'll get an email when your dashboards are ready. 

Eco can process historical AWS Cost and Usage Report files in a CSV file. If you have previous CUR files in a CSV format that you would like to add, place them in the S3 bucket with the current CUR files generated from the setup.

>Note:
>
>If you have limited AWS MSP/reseller customer accounts, [retrieve your billing information](eco/getting-started/connect-account-customer-working-with-msp).

## Prerequisites

Getting started with Eco on AWS usually requires read-only permissions to the Cost and Usage Reports, which are in the Management account, or in specially configured [member accounts](https://aws.amazon.com/about-aws/whats-new/2020/12/cost-and-usage-report-now-available-to-member-linked-accounts/).

You can choose between reading data from:

- Your Direct-to-AWS management account
- A single AWS MSP/reseller customer account
- Multiple AWS MSP/reseller customer accounts (you'll also need to [enroll your reports](design-documents/msp/msp-enrollment))

## AWS Region

All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region. This includes generating the CUR file into a bucket in `us-east-1`. If you have trouble, contact Support. 

## Get Started

1. In the Spot console, go to **Eco** > **Amazon Web Services**. 
2. Sign in to your AWS management account (or single, member account if you are an MSP end customer).
3. [Set up Cost and Usage Reports in AWS](https://docs.aws.amazon.com/cur/latest/userguide/dataexports-create-legacy.html). Make sure to select:
    * Additional export details > **Include Resource IDs**.
    * Data refresh settings > **Refresh automatically**.
    * Report data time granularity > **Hourly**.
    * Report versioning > **Overwrite existing report**.
    * Report data integration > **Amazon Athena**.

   >**Note**: You should create both a new Amazon S3 bucket and a new Cost and Usage Reports if you do not have Athena already integrated. If you choose to use a existing S3 bucket, the Athena integration setup process using AWS CloudFormation removes any Amazon S3 events that your bucket might already have.

4. In your AWS account, go to the Cost and Usage Reports page > **Delivery Options** and copy the S3 bucket value. 

     <details>
    <summary markdown="span">View image</summary>

    <img src="https://github.com/user-attachments/assets/eff9cb72-c538-4fe4-88d5-bb9ecc1051ef">

  </details>

5. In the Spot console, paste the name of the S3 bucket where the hourly cost and usage reports are stored. 

6. Open the linked CloudFormation template:

   * **Run Default Template Onboarding**

       1. Select **I acknowledge that AWS CloudFormation might create IAM resources** and click **Create stack**.
       2. When the stack is created, copy the Spot Role ARN from the CloudFormation stack Outputs tab. 

           <details>
           <summary markdown="span">View image</summary>

           <img src="https://github.com/spotinst/help/assets/106514736/dcf65e99-eac1-4afd-8c36-5c3006eeb6a6" />

        </details>


   * **Use Custom Template**

      <details>
        <summary markdown="span">How to use a custom template</summary>

        You can use a custom CloudFormation template approved by our Spot solutions architect.
  
        1. In the Spot console, copy the external ID.
        2. Open the [AWS CloudFormation console](https://console.aws.amazon.com/cloudformation).
        3. Create a new resource standard.
        4. Click **Choose file**, copy the [template](eco/tutorials/eco-policy/create-eco-policy-with-cloudformation), and click **Next**.
        5. Enter the stack name and click **Next**.
        6. In Capabilities, select **I acknowledge that AWS CloudFormation might change IAM resources** and click **Submit**.
        7. You can see the stack creation process in the left panel. When the status changes to `create_complete`, go to the Resources tab, and click on the Physical ID you want to view.
        8. In Physical ID, go to the Trust Relationships tab and click **Edit trust policy**.
        9. In Edit Trust Policy, enter the AWS Account ID in the `arn:aws:iam` line and the External ID in the `sts:ExternalID` line, then click **Update policy**.

    </details>

7. After the policy is updated, copy the ARN from the Physical ID.
8. In the Spot console, paste the **Role ARN**.
9. Click **Connect your AWS account to Eco**.

    Your organization is connected to Eco. The initial data processing takes up to 48 hours. You'll get an email when your dashboards are ready.

10. If you have multiple AWS MSP/Reseller customer accounts, [enroll your reports](design-documents/msp/msp-enrollment).
