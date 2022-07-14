# Connect AWS Manually

This page describes the procedures for manually (i.e., using the AWS console) connecting your AWS account to Spot. The procedure assumes that you are following the instructions in the [onboarding wizard](connect-your-cloud-provider/first-account/), have already created your Spot organization, and selected AWS as your cloud provider. You are connecting a linked account, and are now at Step 3.2 as shown below.

> **Tip**: If this is not the first account you are connecting to Spot, and you are now connecting an additional account, the step below is numbered 3.1.

## Step 3.2: Click Manually

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-001.png" width="500" />

## Step 3.3: GovCloud or China Account?

Mark your answer to the question and click Next.

<img src="/connect-your-cloud-provider/_media/connect-aws-manually-002.png" width="500" />

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
