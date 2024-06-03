# Connect AWS Account 

Onboard your AWS account to the Billing Engine.

## Configure the Cost and Usage Report (CUR) using AWS Data Exports

Follow the instructions for [Creating a Legacy CUR Export](https://docs.aws.amazon.com/cur/latest/userguide/dataexports-create-legacy.html).
> **Note**: Make sure you configure these settings for **Data export delivery options**:
> * **Report data time granularity**: <i>Hourly</i> so that your CUR gets updated multiple times a day. This is critical for accurate data reporting.
> * **Report versioning**: <i>Create new report version</i> if you want to create a new report every time.
> * **Report Data integration**: <i>Amazon Redshift</i>, this is where AWS uploads your CUR data for analysis.
> * **Compression type**: <i>gzip</i>.

<img width="350" alt="connect-aws-data-export-delivery" src="https://github.com/spotinst/help/assets/167069628/bbe56bf6-dbe5-48da-b589-5e31ec8fa961">

## Add a New Spot Account

If you have a <i>legacy CUR data export</i>, connect your Spot account to the AWS Account.

1. Log in to the Spot Console and click **Billing Engine**.
2. Click **Add Account**.
3. Log in to your AWS account.
   
![connect-aws-connect-spot1](https://github.com/spotinst/help/assets/167069628/5bcedf9e-b361-4909-a3f7-c278a532fdf4)

5. Enter the CUR information:
   <ol style="list-style-type: lower-alpha;">
      <li><b>Bucket Name</b> is the S3 bucket the CUR is in.</li>
      <li><b>Bucket Region</b> is the S3 bucket’s AWS region.</li>
      <li><b>Bucket Prefix is the prefix path to the CUR file. If you copy it from the AWS console, remove the CUR filename.</li>
  </ol>
  
  ![connect-aws-connect-spot2](https://github.com/spotinst/help/assets/167069628/b17b7763-7888-4a6f-8c00-67aa52f3f4b2)
  
5. Run the IAM tempate and **Connect Account**.
![connect-aws-connect-spot3](https://github.com/spotinst/help/assets/167069628/224935ab-d6af-4067-94c7-86eed0d84051)

## Onboard an Existing Spot Account 

You can connect an existing AWS account to your new Billing Engine account by rerunning the IAM template.

1. Log in to your AWS account. 

<img width="470" alt="connect-aws-onboard1" src="https://github.com/spotinst/help/assets/167069628/859b0710-d29e-4134-82e9-d6bfba10d0ff">

2. Select **Yes** to give Billing Engine access to a CUR and enter your CUR information.

![connect-aws-onboard2](https://github.com/spotinst/help/assets/167069628/47972b71-8a29-4480-b3d6-f96e96312aea)

3. Run the IAM template and **Connect Account**.
