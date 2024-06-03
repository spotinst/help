# Connect AWS Account 

Onboard your AWS account to the Billing Engine.

## Configure the Cost and Usage Report (CUR) using AWS Data Exports

Follow the instructions for [Creating a Legacy CUR Export](https://docs.aws.amazon.com/cur/latest/userguide/dataexports-create-legacy.html).
> **Note**: Make sure you configure these settings for **Data export delivery options**:
> * **Report data time granularity**: <i>Hourly</i> so that your CUR gets updated multiple times a day. This is critical for accurate data reporting.
> * **Report versioning**: <i>Create new report version</i> if you want to create a new report every time.
> * **Report Data integration**: <i>Amazon Redshift</i>, this is where AWS uploads your CUR data for analysis.
> * **Compression type**: <i>gzip</i>.

![data export delivery options](https://github.com/spotinst/help/blob/master/src/docs/billing-engine/_media/connect-aws-data-export-delivery.png)

## Add a New Spot Account

If you have a legacy CUR data export, connect your Spot account to the AWS Account.

1. Log in to the Spot Console and click **Billing Engine**.
2. Click **Add Account**.
3. Log in to your AWS account.
![log in to your AWS account](https://github.com/spotinst/help/blob/master/src/docs/billing-engine/_media/connect-aws-connect-spot1.png)
4. Enter the CUR information:
   <ol style="list-style-type: lower-alpha;">
      <li>**Bucket Name** is the S3 bucket the CUR is in.</li>
      <li>**Bucket Region** is the S3 bucket’s AWS region.</li>
      <li>**Bucket Prefix** is the prefix path to the CUR file. If you copy it from the AWS console, remove the CUR filename.</li>
  </ol>
  
  ![Enter the CUR information](https://github.com/spotinst/help/blob/master/src/docs/billing-engine/_media/connect-aws-connect-spot2.png)
  
5. Run the IAM tempate and **Connect Account**.
![Enter the CUR information](https://github.com/spotinst/help/blob/master/src/docs/billing-engine/_media/connect-aws-connect-spot3.png)

## Onboard an Existing Spot Account 

You can connect an existing AWS account to your new Billing Engine account by rerunning the IAM template.

1. Log in to your AWS account. 

![Log in to your AWS account](https://github.com/spotinst/help/blob/master/src/docs/billing-engine/_media/connect-aws-onboard1.png)

2. Select **Yes** to give Billing Engine access to a CUR and enter your CUR information.

![CUR](https://github.com/spotinst/help/blob/master/src/docs/billing-engine/_media/connect-aws-onboard2.png)

3. Run the IAM template and **Connect Account**.
