# Connect Account: Customer Working With MSP

If your account is managed by an MSP and you don't have access to the billing file, the MSP must complete the procedure in this article in order to retrieve the billing information. This procedure enables Cloud Analyzer to access your billing file and provide you with visibility into your cloud expenditures.

## Cost And Usage Report Extraction Setup

There are three major steps to configuring the CUR Extraction:

1. Set up Cost and Usage Reports: This should be done from a root user account.
2. Link your Cost and Usage Report with Athena.
3. Set up the Cost and Usage Extractor.

### Procedure Notes

- AWS Region. All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region.
- IAM Role. The IAM role should be the one of the end-customer management account.

## Step 1: Set Up Cost And Usage Reports

1. Log in to your root AWS account, then click [here](https://console.aws.amazon.com/billing/home#/reports).
2. Click Create Report.
3. Under the first menu, Report Content, do the following:
   1. For the report name, enter (i.e., paste) the following: `spotinst-cur-report`. You must use the same name for the S3 bucket name.
   2. Check the box that says `Include resource IDs`.
   3. Click Next.
4. Under the second menu, Delivery Options, do the following:
   1. Under S3 Bucket, click Configure, then do the following:
      1. For the name for the S3 bucket that CUR reports will be dumped into, paste in the following: `spotinst-cur-report`. This name must be the same as the report name that you entered previously.
      2. Only change the bucket's region if necessary.
      3. Click Next.
      4. Check the box that says `I have confirmed that this policy is correct`.
      5. Click Save.
   2. Under Report Path Prefix, enter `spotinst_eco`.
   3. Under Time Granularity, enter Hourly.
   4. Under Enable report data integration for, check the box that says `Amazon Athena`.
   5. Click `next`.
   6. The review screen should appear as shown below.

<img src="/cloud-analyzer/_media/gettingstarted-connect-msp-01.png" />

<img src="/cloud-analyzer/_media/gettingstarted-connect-msp-02.png" />

7.  Scroll all the way down and click Review and Complete.

## Step 2: Link Your Cost And Usage Report With Athena

It will take 24 hours for AWS to start dropping reports into the S3 bucket you chose. Before proceeding with this step, click here and make sure that `Data last refreshed` has a date and doesn't say `N/A`. Here's what it should look like:

<img src="/cloud-analyzer/_media/gettingstarted-connect-msp-03.png" />

1. Click here, go to the S3 bucket you chose and navigate to: spotinst_eco/spotinst-cur-report
2. Click on the file called `crawler-cfn.yml`.
3. Download the file and contact your Spot sales representative. (If you do not have a sales representative, contact Spot Support.) Please include the following in your email:
   - The crawler file
   - AWS account number of MSP
   - Account ID of the customer's management account
   - CUR bucket name
   - Stack name
   - Prefix
   - The customer's Spot OrgIDs

Continue with the steps below.

4. Copy the `Object Url` at the bottom as shown in the image below.

<img src="/cloud-analyzer/_media/gettingstarted-connect-msp-04.png" />

5. Click here and paste that object url into the field `Amazon S3 URL` as shown in the image below.

<img src="/cloud-analyzer/_media/gettingstarted-connect-msp-05.png" />

6. Click Next.
7. Enter `Spot Eco Stack` and click Next.
8. Scroll all the way down and click Next again.
9. Scroll all the way down, and under the Capabilities section, mark the box that says `I acknowledge that AWS CloudFormation might create IAM resources`.
10. Click Create Stack.
11. Click [here](https://console.aws.amazon.com/glue/home?region=us-east-1#catalog:tab=crawlers), and find the crawler you just created. The name will appear as follows: `AWSCURCrawler-[name of your cur report]`. Click on the crawler to bring up its properties.
12. Click Edit.
13. On the left side of the screen, click Schedule.
14. In the Frequency dropdown box, choose Daily.
15. For Start Hour (UTC), choose 00, and for Start Minute, choose 00.
16. Click Next, click Next again, scroll down, and click Finish.

Once you have sent the crawler.yml file, it may take up to 72 hours before you receive the link you need for Step 3.

## Step 3: Set Up Cost And Usage Extractor

1. Log into your AWS account, then click on the link provided by Spot.
2. On the CloudFormation page, click Next at the bottom right.
3. Some of the parameters have been filled in already. Do not change them. Fill in the following parameters:
   - Account List: You may leave this blank, but if you would like to send Cost and Usage reports only for certain account numbers, enter them into this field separated by commas. Do not add spaces.
   - Stack Name: You can set this to a name you like.
   - CURBucketName: Set this to the name of the S3 bucket that you chose in the previous steps for Cost and Usage Reports to write to.
4. Click Next. Scroll all the way down and click Next again.
5. Scroll all the way down and under the Capabilities section, check the box that says `I acknowledge that AWS CloudFormation might create IAM resources.`
6. The Review screen should appear as follows:

<img src="/cloud-analyzer/_media/gettingstarted-connect-msp-06.png" />

7. Click Create Stack.
