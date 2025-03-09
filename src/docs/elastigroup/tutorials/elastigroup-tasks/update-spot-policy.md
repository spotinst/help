# Update Spot Policy

When setting up your Spot account, we use a cloud formation stack to register our IAM role policy in your AWS account. This policy holds permissions that are needed for Spot's account to handle your AWS resources.

> **Tip**: It is important to keep the [Spot Policy](administration/api/spot-policy-in-aws) updated with the latest version.

To get AWS ARN of your IAM role:
1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Go to **General Details** > **My Spot Account** > **AWS ARND**.
   <details>
    <summary markdown="span">View image</summary>

     <img width="800" src="https://github.com/user-attachments/assets/7a2e125e-84af-4df5-8731-fc7b031e64f9" />

   </details>

## Update Your Spot Policy

1. Sign in to your [AWS IAM Management Console](https://docs.aws.amazon.com/signin/latest/userguide/how-to-sign-in.html).

2. Click **Policies** and find your Spot policy.
3. In Policy, select the `Permissions` tab, view the JSON, and click on `Edit Policy`.
   <details>
    <summary markdown="span">View image</summary>

   <img width=450 src="/elastigroup/_media/update-spot-policy_3.png" />

   </details>

4. Remove the JSON and replace it with the latest policy available.
5. Click **Validate Policy** and **Save**.
   <details>
    <summary markdown="span">View image</summary>

     <img width=450 src="/elastigroup/_media/update-spot-policy_4.png" />

   </details>
