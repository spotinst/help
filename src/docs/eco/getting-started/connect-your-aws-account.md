# Connect Your AWS Account

If you have an Ocean or Elastigroup account, connect Eco for AWS to your existing Spot account. Eco, Ocean, and Elastigroup are integrated to maximize the usage of spot EC2 instances when commitment management is enabled.

The initial data processing takes up to 48 hours. You'll get an email when your dashboards are ready. 

Eco can process historical AWS Cost and Usage Report files in a CSV file. If you have previous CUR files in a CSV format that you would like to add, place them in the S3 bucket with the current CUR files generated from the setup.

>Note:
>
>If you have limited AWS MSP/Reseller customer accounts, [retrieve your billing information](eco/getting-started/connect-account-customer-working-with-msp).

## Prerequisites

Getting started with Eco on AWS usually requires read-only permissions to the Cost and Usage Reports, which are in the Management account, or in specially configured [member accounts](https://aws.amazon.com/about-aws/whats-new/2020/12/cost-and-usage-report-now-available-to-member-linked-accounts/).

You can choose between:

- Read data from your Direct-to-AWS Management Account
- Read data from a single AWS MSP/Reseller customer account
- Read data for multiple AWS MSP/Reseller customer accounts, you'll also need to [enroll your reports](design-documents/msp/msp-enrollment).

## AWS Region

All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region. This includes generating the CUR file into a bucket in `us-east-1`. If you have trouble, contact Support. 

## Get Started

1. In the Spot console, go to **Eco** > **Amazon Web Services**. 

     <details>
    <summary markdown="span">View image</summary>

    <img height="450" src="https://github.com/spotinst/help/assets/106514736/a8c7e89b-9eba-4b45-9072-0f7173ddd9db" />

  </details>

2. Sign in to your AWS management account (or single, member account if you are an MSP end customer).
3. [Set up Cost and Usage Reports in AWS](https://docs.aws.amazon.com/cur/latest/userguide/dataexports-create-legacy.html). Make sure to select:
    * Additional export details > **Include Resource IDs**.
    * Data refresh settings > **Refresh automatically**.
    * Report data time granularity > **Hourly**.
    * Report versioning > **Overwrite existing report**.
    * Report data integration > **Amazon Athena**.

   >Note: You should create both a new Amazon S3 bucket and a new Cost and Usage Reports if you do not have Athena already integrated. If you choose to use a existing S3 bucket, the Athena integration setup process using AWS CloudFormation removes any Amazon S3 events that your bucket might already have.

4. In your AWS account, go to the Cost and Usage Reports page > **Delivery Options** and copy the S3 bucket value. 

     <details>
    <summary markdown="span">View image</summary>

    <img src="https://github.com/spotinst/help/assets/106514736/48fd32b2-21d7-4b76-a926-a4bf3c8e82c3" />

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
        <summary markdown="span">How to use custom templates</summary>

        You can use custom CloudFormation templates approved by our Spot solutions architect.
  
        ![connect-aws-11](https://github.com/spotinst/help/assets/106514736/8e15c3ba-39fd-4327-b9b3-257c7c91f10a)

        1. Copy the external ID. 
        2. Open the [AWS CloudFormation console](https://console.aws.amazon.com/cloudformation).
        3. Create a new resource standard.  
        4. Click **Choose file** and copy the [template](eco/tutorials/eco-policy/create-eco-policy-with-cloudformation). 

           ![connect-aws-12](https://github.com/spotinst/help/assets/106514736/7777edde-0298-491a-88ee-65b598ac53b1)

        5. Click **Next**. 

           ![connect-aws-13](https://github.com/spotinst/help/assets/106514736/4b9ff909-5f07-4bcb-81c9-bc2a92ebca76)

        6. Enter the stack name and click **Next**. 
        7. On the Review and create page, select **I acknowledge that AWS CloudFormation might change IAM resources** and click **Submit**.  

           ![connect-aws-14](https://github.com/spotinst/help/assets/106514736/c0a3b874-9ceb-4424-ae28-5ead8a86d529)

           You can see the creation process of the stack in the left panel.  

           ![connect-aws-15](https://github.com/spotinst/help/assets/106514736/a135d8cc-354e-4635-9199-7766cf4aafa0)

        8. When the status changes to `create_complete`, go to the Resources tab, then the hyperlink in the Physical ID column you want to view. 

           ![connect-aws-16](https://github.com/spotinst/help/assets/106514736/4ebe5049-3577-402a-8378-ac9e8c5e4f82)

        9. In the window of the Physical ID, go to the Trust Relationships tab, and then **Edit trust policy**.  

           ![connect-aws-17](https://github.com/spotinst/help/assets/106514736/b3cc8ce3-fb47-4985-ab24-1517f0dcb85c)

        10. On the Edit Trust Policy page, enter the AWS Account ID in the `arn:aws:iam` line and the External ID in the `sts:ExternalID` line. The External ID is provided in Step 3 in the Run Custom Template section.  

            ![connect-aws-18](https://github.com/spotinst/help/assets/106514736/ec618e34-a56f-4764-8a2c-587ffef3f6a7)

        11. Click **Update policy**. 

            ![connect-aws-19](https://github.com/spotinst/help/assets/106514736/3d03eaf2-d92e-4dfb-849d-f9ae7839fabb)


    </details>


7. After the policy is updated, copy the ARN from the Physical ID information panel in Step 3.
8. In the Spot console, paste the **Role ARN**.
9. Click **Connect your AWS account to Eco**.

    Your organization is connected to Eco. The initial data processing takes up to 48 hours. You'll get an email when your dashboards are ready.

10. If you have multiple AWS MSP/Reseller customer accounts, [enroll your reports](design-documents/msp/msp-enrollment).
