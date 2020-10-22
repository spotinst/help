# Update Spot Policy

## Introduction

While setting up your Spot Account – we use a cloud formation stack to register our IAM Role Policy in your AWS account. This Policy holds permissions that are needed for Spot's account to handle your AWS resources.

Refer the link below for the AWS ARN of your IAM role:
https://console.spotinst.com/#/settings/account/general

---

**Tip**:

It is important to keep this policy updated with the latest version listed here – [Spot Policy](administration/api/spot-policy-in-aws).

---

## Step 1: Log in to your AWS IAM Management Console

Log in to your AWS console and navigate to the IAM management console:

<img src="/elastigroup/_media/update-spot-policy_1.png" />

## Step 2: Locate your Spot Policy

Click Policies from the side menu:

<img src="/elastigroup/_media/update-spot-policy_2.png" />

Search for Spot policy and select it.

## Step 3: Edit the Policy

In the Policy screen – select the `Permissions` tab, view the JSON and click on `Edit Policy`:

<img src="/elastigroup/_media/update-spot-policy_3.png" />

You can now remove the JSON and replace it with the latest policy available.

## Step 4: Verify and Save

<img src="/elastigroup/_media/update-spot-policy_4.png" />
