# Connect your AWS Account

This document describes the requirements for Spot Eco to provide an estimated cost savings analysis using AWS and the connection process. 

## Prerequisites

Getting started with Eco on AWS usually requires read-only permissions to the Cost and Usage Reports, which are in the Management account, or in specially configured [member accounts](https://aws.amazon.com/about-aws/whats-new/2020/12/cost-and-usage-report-now-available-to-member-linked-accounts/). Choose one of the following methods:

- Read data from your Direct-to-AWS Management Account and connect as described below.
- Read data from a single AWS MSP/Reseller customer account and connect as described below.
- Read data for multiple AWS MSP/Reseller customer accounts, connect as described below, and follow the [MSP enrollment process](design-documents/msp/msp-enrollment).
- Read data for limited AWS MSP/Reseller customer accounts and connect as described in [Connect Account: Customer Working with MSP](eco/getting-started/connect-account-customer-working-with-msp).

## AWS Region

All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region. This includes generating the CUR file into a bucket in us-east-1. If there is a problem doing this, please contact Support. 

## Get Started

1. Log in to the Spot console.  

2. In the left main menu, click **Eco** and then **Amazon Web Services**. 

![connect-aws-1](https://github.com/spotinst/help/assets/106514736/a8c7e89b-9eba-4b45-9072-0f7173ddd9db)

## Step 1 

Log in to your AWS management account (or single, member account if you are an MSP end customer). 

## Step 2 

Set up Cost and Usage Reports as described below. 

1. Log in to [AWS](https://us-east-1.console.aws.amazon.com/costmanagement/home#/bcm-data-exports) and click **AWS Billing and Cost Management Data Exports**. 
2. To create a new export, click **Create**. 

![connect-aws-2](https://github.com/spotinst/help/assets/106514736/6d059a8f-2fc5-4964-97af-66c0902197fc)

3. Select **Legacy CUR export**. 

![connect-aws-3](https://github.com/spotinst/help/assets/106514736/4a7c2d5a-ea30-4d33-9176-f8905eab3bdf)

4. Enter a name for your CUR export. 
5. Complete the following information to export the configuration: 

![connect-aws-4](https://github.com/spotinst/help/assets/106514736/5d6413e9-f8fc-4fc9-8f4e-d624e51c05a4)

* Additional export details: Select **Include Resource IDs**. 
* Data refresh settings: **Select Refresh automatically**. 

![connect-aws-5](https://github.com/spotinst/help/assets/106514736/a8492fb2-0bc3-404b-be6c-f255b74b5e65)

* Report data time granularity: Select **Hourly**. 
* Report versioning: Select **Overwrite existing report**. 
* Report data integration: **Amazon Athena**. 

![connect-aws-6](https://github.com/spotinst/help/assets/106514736/b9613fb2-c1de-4433-99c7-64ea3aeb09d8)

6. If you have not previously set up a new Amazon S3 bucket for the CUR, click **Configure** under Data export storage settings. 
7. A S3 path prefix is required to create the report. 
8. Click **Create**. 

>**Note: Spot strongly recommends that you create both a new Amazon S3 bucket and a new Cost and Usage Reports if you do not have Athena already integrated. If you choose to use a pre-existing S3 bucket, the following Athena integration setup process using AWS CloudFormation removes any Amazon S3 events that your bucket might already have. 

9. In your AWS account, go to the Cost and Usage Reports page. 
10. Under **Delivery Options**, copy the S3 Bucket value. 

![connect-aws-7](https://github.com/spotinst/help/assets/106514736/48fd32b2-21d7-4b76-a926-a4bf3c8e82c3)

11. Return to your account in the Spot console and paste the name of the S3 bucket where the hourly cost and usage reports are stored. 

## Step 3 

You can open the linked CloudFormation Template in two ways: 

* Run Default Template Onboarding 
* Use Custom Template  

![connect-aws-8](https://github.com/spotinst/help/assets/106514736/a1bc4bfd-4d2a-46a4-bb76-5d1c9edf6d93)

### Run Default Template Onboarding 

Complete the following steps to run the default onboarding template:  

1. Mark the checkbox **I acknowledge that AWS CloudFormation might create IAM resources** and click **Create stack**. 

![connect-aws-9](https://github.com/spotinst/help/assets/106514736/8f4cf756-5b37-4430-b76d-40a8a295c750)

2. When the stack is created, copy the Spot Role ARN from the CloudFormation stack Outputs tab. 

![connect-aws-10](https://github.com/spotinst/help/assets/106514736/dcf65e99-eac1-4afd-8c36-5c3006eeb6a6)

3. Continue to Step 4.  

## Run Custom Template 

The custom template enables you to use custom cloud formation templates that are approved by our Spot Solutions Architect. 

![connect-aws-11](https://github.com/spotinst/help/assets/106514736/8e15c3ba-39fd-4327-b9b3-257c7c91f10a)

Complete the following steps: 

1. Copy the external ID. 
2. Log in to AWS, click Cloud Formation Services. 
3. Create a new resource standard.  
4. Click **Choose file** and copy the [template](https://docs.spot.io/eco/tutorials/eco-policy/create-eco-policy-with-cloudformation). 

![connect-aws-12](https://github.com/spotinst/help/assets/106514736/7777edde-0298-491a-88ee-65b598ac53b1)

5. Click **Next**. 

![connect-aws-13](https://github.com/spotinst/help/assets/106514736/4b9ff909-5f07-4bcb-81c9-bc2a92ebca76)

6. Enter the stack name, then click **Next**. 
7. On the Review and create page, mark the checkbox **I acknowledge that AWS CloudFormation might change IAM resources** and click **Submit**.  

![connect-aws-14](https://github.com/spotinst/help/assets/106514736/c0a3b874-9ceb-4424-ae28-5ead8a86d529)

You can view the creation process of the stack in the left panel.  

![connect-aws-15](https://github.com/spotinst/help/assets/106514736/a135d8cc-354e-4635-9199-7766cf4aafa0)

8. When the status changes to CREATE_COMPLETE, click the **Resources** tab, then the hyperlink in the Physical ID column you want to view. 

![connect-aws-16](https://github.com/spotinst/help/assets/106514736/4ebe5049-3577-402a-8378-ac9e8c5e4f82)

9. In the window of the Physical ID that opens, click the **Trust Relationships** tab, and then **Edit trust policy**.  

![connect-aws-17](https://github.com/spotinst/help/assets/106514736/b3cc8ce3-fb47-4985-ab24-1517f0dcb85c)

10. On the Edit Trust Policy Page, enter the AWS Account ID in the arn:aws:iam line and the External ID in the sts:ExternalID line.  The External ID is provided in Step 3 in the Run Custom Template section.  

![connect-aws-18](https://github.com/spotinst/help/assets/106514736/2c072444-66e9-4e9c-97e0-ceacb3d47126)

11. Click **Update policy**. 

![connect-aws-19](https://github.com/spotinst/help/assets/106514736/3d03eaf2-d92e-4dfb-849d-f9ae7839fabb)

## Step 4 

1. After the policy has been successfully updated, copy the ARN from the Physical ID information panel in Step 3.  
2. Return to the Spot console and paste it in the Role ARN field.    

![connect-aws-20](https://github.com/spotinst/help/assets/106514736/dae71fec-3bd2-43ea-8540-554d97210d84)

3. Click **Connect your AWS account to Eco**. 

Your organization is connected to Eco. The initial data processing takes up to 48 hours. You will be notified via email when your dashboards are ready. 

Optional: Eco can process historical AWS Cost and Usage Report files in the CSV format. If you have previous CUR files in a CSV format that you would like to add, please place them in the S3 bucket with the current CUR files generated from the setup. 

 
