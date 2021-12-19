<meta name="robots" content="noindex">

# Get Started with Spot Security

It is really easy to get started with Spot Security. All you need to do is connect your cloud provider. The procedures below describe how to connect your AWS account to Spot Security.

## Prerequisites
- An AWS account
- A Spot account activated

## Get Started

To get started with Spot Security you need to be signed in to the Spot console.
1. In the left menu tree of the console, click Spot Security. The introductory panel appears.

<img src="/spot-security/_media/getting-started-01.png" />

2. Click Continue. The Onboard page appears showing the four major onboarding steps. Complete each of these steps, which are described in detail below.

<img src="/spot-security/_media/getting-started-02.png" />

## Step 1: Log in to AWS Account
1. On the Onboard page, click Log in. The AWS Log in page appears in a separate tab.

<img src="/spot-security/_media/getting-started-03.png" />

2. Log in with your AWS credentials and go to the AWS Management Console.

<img src="/spot-security/_media/getting-started-04.png" />

## Step 2: Deploy CloudFormation Template
1. Go back to the Onboard tab in the Spot console.
2. Under Step 2, click Run Template.

<img src="/spot-security/_media/getting-started-05.png" />

   The AWS stack creation page will appear as shown below.

<img src="/spot-security/_media/getting-started-06.png" />

3. Click Next and go to the Stack Details page.

<img src="/spot-security/_media/getting-started-07.png" />

4. Specify your stack name and click Next. You will then go to the Configure Stack Options page.

<img src="/spot-security/_media/getting-started-08.png" />

5. Click Next and review the details.

<img src="/spot-security/_media/getting-started-09.png" />

6. After reviewing, click Create Stack.
7. The stack creation process begins. In the Events tab you can see the status of each action taking place in the process. Wait until the stack creation process completes.

<img src="/spot-security/_media/getting-started-10.png" />

## Step 3: Add your Bucket Information
1. Once the stack creation completes, go to the Outputs tab and copy the Bucket Name.
2. Go back to the Onboard page in the Spot console, and paste the Bucket Name in the Bucket Name field.

<img src="/spot-security/_media/getting-started-10a.png" />

Step 4: Validate your Onboarding

Click Validate Now under Step 4 in the Onboard page. When the validation completes, you will see a message indicating a successful validation. Now you can go to the Spot Security Dashboard in the Spot console.

<img src="/spot-security/_media/getting-started-11.png" />

## What's Next?

Learn more about the continuous [security features](spot-security/features/) in Spot Security.
