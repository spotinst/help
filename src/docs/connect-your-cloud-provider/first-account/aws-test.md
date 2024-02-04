# Connect AWS Account- Draft 

This page describes the procedures for automatically and manually connecting your AWS account to Spot. You can also customize your account by selecting persmissions for specific Spot products and integrations with AWS.  

After signing up for Spot and creating your first Spot organization, you need to connect your Spot account to your AWS account. The following procedure describes how to connect a linked account.  

You can connect your account to AWS in two ways: 
* Connect manually 
* Connect automatically 

## Step 1.1: Connect Manually

1. After you have selected AWS as the [cloud provider](connect-your-cloud-provider/first-account/), select **Linked Account**.  

![connect-1st-cloud-account-1](https://github.com/spotinst/help/assets/106514736/4d5e4bbd-56b3-4ed0-9c6c-e377c4fcdb13)

2. Select **Manually**. 

![connect-aws-manually-001a](https://github.com/spotinst/help/assets/106514736/1dd881a2-9247-4497-ae3b-a46ccd7f5b4e)

### Step 1.2: GovCloud or China Account? 

Mark the relevant answer and click **Next**. 

 

 

Note: If your are connected to an AWS GovCloud or China account, you will not be able to customize your policy.  

## Step 3.4: AWS Login

Log in to the AWS account that you are connecting to Spot and click Next.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-003.png" width="500" />

## Step 3.5 Create IAM Policy

In this step you create the policy that the Spot role will use to manage resources in your AWS account. Complete this step in the order of the bullets in the wizard.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-004.png" width="500" />

1. In AWS, go to the IAM dashboard. In the sidebar on the left, click Policies.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-005.png" />

2. In the Policies page that opens, click Create Policy.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-006.png" />

3. In the Visual Editor page that opens, click the JSON tab.
4. Back in the Spot console, in the connection wizard, click View Policy at the bottom.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-007.png" width="500" />

5. When the policy appears in the Spot console, click the Copy button in the upper right.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-008.png" />

6. Switch back to the JSON tab in AWS, paste in the policy over any text that was there, and click Next: Tags at the bottom. Click Next: Review.                                                                                                                                                           

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-009.png" />

7. In the Review Policy page in the AWS console, add the name Spot-Policy for the policy and then click Create Policy.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-010.png" />

8. In the wizard in the Spot console, click Next.

## Step 3.6: Create IAM Role

In this step, you will create an IAM role for Spot and attach it to the policy that you just created. This will complete the connection of your AWS account to Spot. Complete this step in the order of the bullets in the wizard.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-0101.png" width="500" />

1. In the left sidebar of the AWS console, click Roles, and when the Roles page appears, click Create Role.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-012.png" />

2. In the Select Trusted Entity page, click AWS Account. On the same page, click Another AWS Account.
3. Go back to the wizard in the Spot console, copy the Account ID, 922761411349, and paste it in the Account ID field.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-013.png" width="500" />

4. Under Options, mark Require External ID.
5. Copy the external ID generated in the Spot wizard and paste it in the External ID field in the AWS page. Click Next.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-014.png" />

6. In the Add Permissions page, mark Spot-Policy (or the name of the policy you created in Step 3.5). Click Next.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-015.png" />

7. In the Name, Review, and Create page, enter the name Spot-Role in the Role Name field. Click Create Role.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-016.png" width="500" />

8. In the AWS console, on the Summary page for the role, copy the ARN.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-017.png" />

9. In the Spot console, paste the ARN in Step 3.6 of the wizard and click Connect. Then you will see the banner shown below and your AWS account will be linked to Spot.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-018.png" />

## What’s Next?

Learn how you can use Spot Insights & Recommendations in the [Dashboard](connect-your-cloud-provider/dashboard) and understand your Savings Potential analysis with immediate steps you can take.

