# Connect AWS Account 

This section is to help you onboard your AWS account to the Billing Engine. 

**If you are connecting an Azure or Google Cloud Account, please create a support ticket.**

## New Spot Account 

### Configure the CUR 

To begin using the Billing Engine, you need to configure the AWS Cost and Usage Report (CUR).  

1. Log into your AWS Management Console. 
2. From the menu bar, click your account name, and select **My Billing Dashboard**. 
The Billing & Cost Management Dashboard opens. 
3. From the dashboard, click **Cost & Usage Reports**. The AWS Cost and Usage Reports page opens. 

![connect-aws-1](https://github.com/spotinst/help/assets/106514736/fba29253-0476-47f6-97f5-8f280506e4d4)

4. Click Create report. The Report content page opens. 
5. Create a report name. 
6. Select the Include resource IDs checkbox, so that your report will include all the IDs from your individual resources. 

Notice that the **Automatically refresh your Cost & Usage Report** checkbox is selected by default. This option allows AWS to refresh the CUR and upload a new report to your S3 bucket any time it detects billing charges from closed months. 

The following window displays:  

![connect-aws-2](https://github.com/spotinst/help/assets/106514736/d2331a9b-7ff0-49c0-9ad6-aa33ca6c5ab3)

### Configure S3 Bucket 

To store your AWS Cost and Usage Reports, you will need to create a dedicated s3 bucket. 

1. On the bottom of the Report content page, click **Next**. The Delivery options page opens. 

![connect-aws-3](https://github.com/spotinst/help/assets/106514736/cbdb9722-248c-46bb-b8dd-070ea5a2e480)

2. Click **Configure**. The Configure S3 Bucket wizard opens. 

![connect-aws-4](https://github.com/spotinst/help/assets/106514736/c823fb95-00f8-49d6-9d70-7c9d5b0cd098)

3. Create a name for your new S3 bucket. 
4. From the drop-down menu, select the region that you want to associate with your bucket. 
5. Click **Next**. The Verify Policy page of the wizard opens. AWS provides you with the default S3 bucket policy. 
6. Select the **I have confirmed that this policy is correct** checkbox and click Save. 

![connect-aws-5](https://github.com/spotinst/help/assets/106514736/dd5da467-fd1b-4fd0-999b-558205724e79)

### Configure Remaining Delivery Options 

1. In the Report path prefix field, type **CUR**. 
2. Under Time granularity, select **Hourly** so that your CUR gets updated multiple times a day. This is critical for accurate data reporting. 
3. Under Report versioning, select whether you want AWS to overwrite the previous version or deliver a new report. 
4. Under Enable report data integration for, select **Amazon Redshift** as your resource. This is where AWS uploads your CUR data for further analysis. 

**Note**: AWS automatically selects GZIP as your compression type and CSV/TXT as your file format. 

![connect-aws-6](https://github.com/spotinst/help/assets/106514736/7da88d0a-9a82-43c4-9b37-38cafdddd316)

5. On the bottom of the Delivery options page, click **Next**. The Review page opens. 

### Review Report Settings 

![connect-aws-7](https://github.com/spotinst/help/assets/106514736/d1e9c460-e5a1-4e23-bca2-75e07e8f4c24)

1. Under Report content, ensure that you included Resource IDs and opted in for the Data Refresh settings. 
2. Scroll down to the Delivery options and ensure that you selected: 

* hourly as the time granularity 
* Redshift for data integration 
* GZIP for compression type 
* text/csv for file format 

3. When you are finished defining your settings, click **Review and Complete**. A message indicates that AWS successfully created the CUR and will deliver it to your S3 bucket within the next 24 hours. Your new report is also included in the list. 

![connect-aws-8](https://github.com/spotinst/help/assets/106514736/50a785f9-d458-4e60-8b4b-40ea5a649aba)

### Spot AWS Account Wizard 

Now that your account is configured to produce Cost and Usage Reports, let’s connect your Spot account to your AWS Instance using the AWS Onboarding Wizard. 

1. Log into your AWS Account. 

![connect-aws-9](https://github.com/spotinst/help/assets/106514736/4eb78e64-5bb4-4fae-b260-e1ad416ce2ec)

2. Provide your CUR information. As you are a new Spot user, select **Yes** and enter the details below. 

![connect-aws-10](https://github.com/spotinst/help/assets/106514736/adb5d51f-3735-4396-9e44-9adfe0a2bdde)

3. Run the IAM template and **Connect Account**. 

![connect-aws-11](https://github.com/spotinst/help/assets/106514736/56f31c8b-6891-49fb-8657-5de67f8cb663)

4. Your account is connected.

### Existing Spot Customers 

To connect an existing AWS account to your new Billing Engine account, you need to rerun the IAM template.  

1. Select **No** to provide a new CUR. 

![connect-aws-12](https://github.com/spotinst/help/assets/106514736/1b369430-a3ea-42e4-80a0-5dfbbc23e3bb)

2. Run the IAM Template. 

![connect-aws-13](https://github.com/spotinst/help/assets/106514736/497bf140-abcc-4f5d-ac09-6ad18c76ba5f)

3. Your account is connected.

