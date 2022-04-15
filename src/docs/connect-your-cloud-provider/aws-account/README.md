# Connect your AWS Account to Spot

In this procedure, you will connect your cloud provider account to Spot in order to provide the Spot platform with a set of permissions to manage instances on your behalf.

Watch a step-by-step [video tutorial](https://youtu.be/csPmq3JZlgU/) on connecting your AWS account to Spot.

1. Log in to [Spot Console](http://console.spotinst.com/).
2. Select Amazon Web Services as the cloud provider in which your account resides.

<img src="/connect-your-cloud-provider/_media/welcome-to-spot-1024x341.png" />

> **Tip**: Prior to connecting your AWS account, you can access a demo system to get familiar with the dashboard. In the Spot Console, click Get a Console Walkthrough.

## Connect via Cloudformation
Step 1: Define if you are connecting in AWS China or AWS GovCloud.  
Step 2: Select `Log in` to open a new tab to login to the desired AWS account.  
Step 3: Select which Spot products you would like to include; [Elastigroup](elastigroup), [Ocean](ocean), [CloudAnalyzer](cloud-analyzer).
  For more details on setting up CloudAnalyzer or Eco please follow: [Connect Management Account](cloud-analyzer/getting-started/connect-master-payer-account-first-registration).  

> **Note**: Review [Spot Policy in AWS](administration/api/spot-policy-in-aws)

Step 4: Create the required IAM Role & Policy using CloudFormation. Select `Run Template` to open a new tab within AWS with an auto-generated Cloudformation template.
  Adjust the name of the CloudFormation stack and select next. Under capabilities mark the ‘I acknowledge that AWS CloudFormation might create IAM
  resources’ checkbox and click on the `Create` button. 
Step 5: Navigate to the outputs tab in the CloudFormation stack and copy;   
  - 'SpotinstRoleArn' to be entered in 'Elastigroup and Ocean RoleArn'  
  - 'SpotFinOpsRoleArn' to be entered in 'Cloud Analyzer RoleArn'


> **Note**: If only Elastigroup & Ocean is selected in Step 3 the ARN will automatically be passed to the Spot platform and step 5 is omitted.

> **Note**: The example below shows the form for a new Spot customer. If you have already connected Cloud Analyzer or Eco, the form will be shorter than the one below.

  
<img src="/connect-your-cloud-provider/_media/connect-aws-account-02a.png" />

## Connect Manually
Step 1: Define if you are connecting in AWS China or AWS GovCloud.  
Step 2: Select `Open` to open a new tab to login into the IAM console of the desired AWS account.  

> **Note**: Review [Spot Policy in AWS](administration/api/spot-policy-in-aws)

Step 3: From the AWS IAM console, click `Policies` on the sidebar, and select `Create Policy`. Switch to JSON tab. Navigate back to the Spot console and click  `View Policy` and copy or export the JSON policy. Paste the policy and click `Review Policy`. Provide the policy a name and click `Create Policy`.   
Step 4: From the AWS IAM console, click `Roles` on the sidebar, and select `Create Role`. Trusted entity type select `AWS account` and click `Another AWS account` and enter Account ID: **922761411349**  
Step 5: Click the `Require external ID` checkbox and enter the external ID presented in the Spot Console. When finished click `Next`.  
Step 6: Attach policy that was created in Step 3, then click `Next`.  
Step 7: Copy the IAM Role ARN from the role screen and paste it in the textbox in the Spot console, and click `Connect`.

  
<img src="/connect-your-cloud-provider/_media/connect-aws-account-manually.png" />

## What's Next?

- [Connect AWS Account with Terraform](connect-your-cloud-provider/aws-account/terraform)
- [Get started with Elastigroup](elastigroup/getting-started/).
- [Get Started with an Ocean cluster](ocean/getting-started/).
