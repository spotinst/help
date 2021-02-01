# WordPress on Spot: Step-by-Step Guide

## Introduction

This step-by-step guide will help you get a website up and running with WordPress on Spot Instances. The WordPress Website will be installed on an auto-scale Elastigroup. You will go through configuring and launching an EC2 Spot instance, getting your WordPress username and password, and logging into your WordPress admin portal.

## Prerequisite

Before starting this tutorial, make sure to have an account in Spot with valid credentials.

## Step 1: Create Elastigroup

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_1.png" />

Select an appropriate use case for your Elastigroup and click on `Launch` – This should take care of some initial settings for you. Select the 'Empty template' option:

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_2.png" />

Your Elastigroup's general information.

- **Name** – Choose a name for your Elastigroup (We encourage our clients to name their Elastigroup's based on the specific workload it will manage).
- **Region** – Choose in which region this Elastigroup will be running.
- **Description** – Define any additional description for your Elastigroup.

### Capacity

Setting the desired capacity of the Elastigroup.

- **Target** – Number of running instances/vCPU weight in your Elastigroup
- **Minimum** – In the case of a 'scale down' policy action, this is the minimum number of running instances/vCPU weight in the group.
- **Maximum** – In the case of a 'scale up' policy action, this is the maximum number of running instances/vCPU weight in the group.

### Compute Tab

This is where we can set up the Compute related specification, including Network and the launch configuration.

- **VPC** – Choose your VPC network
- **Product** – Select your OS, if you're unsure please choose `Linux/UNIX`. Please note that if you have both EC2-Classic and VPC networks enabled in your account, you must explicitly choose it in this field as `Amazon VPC`
- **On-Demand Type** – Choose your default On-Demand instance type. This will also allow Elastigroup to benchmark the best Spot types based on price and performance. This will also be the instance type that will be used in case `Fallback to On-Demand` option is enabled in the Strategy tab.

After setting the VPC you can move on to selecting the AZ's you would like to use.

- **Availability Zones** – Select in which availability zones you would like to launch your instances. You can select one or more AZs for your Elastigroup.

> **Tip**: It is recommended to choose as many AZs as possible, it will enable higher diversity and available markets for our algorithm to bid on.

- **Selecting subnets** – Select the desired subnet in each availability zone.

### Spot Types

Select the Spot instance types within your Elastigroup. After selecting your desired spot types you will also see the SpotMarket Scoring – giving you a notion of how the markets are going top behave- the higher the score the better!

> **Tip**: It is recommended to **choose as many instance types as possible**, it will enable higher diversity and available markets for our algorithm to bid on.

- **Image** – Log in to your AWS account, and go to AMI marketplace. Choose the following AMI, and paste the specific ID for your region:

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_3.png" />

- **Security Group** – specify one or more security groups to associate with the instances launched in this Elastigroup.
- **Key Pair** – Specify the name of the key pair to associate with your instances.
- **Tags** – Assign tags consisting of a case-sensitive key-value pair.

### Scaling

You can add scaling policies to your group to help you adjust computing capacity based on increasing load or quiet hours. You can set as many policies as you like to guarantee the group capacity changes according to your needs. You can add as many scaling rules as you wish. We use CloudWatch metrics for scaling rules.

## Step 2: Test your Environment

1. Once your instance is running, you can now test your WordPress website. Find the Public IP for your instance under 'instances' in your Elastigroup:

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_4.png" />

2. Copy the Public IPinto a new tab in your web browser, and you should see a Hello World blog page appear.

## Step 3: Make Changes to your Website

Now that you have your WordPress site up and running, it's time to log into its administration page so you can customize your site. To find your password, please follow the steps below:

1. Switch back to your EC2 management console in your web browser. Select WordPress instance, and click the Actions button. In the drop down menu, select Instance Setting, and choose Get System Log.

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_5.png" />

2. In the system log window, scroll through to the bottom to find the password that's surrounded by hash marks.

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_6.png" />

3. Now that you have your password, switch back to the tab that you used to access the WordPress Hello World page. Add /admin to the end of the URL so it looks something like 54.192.32.144/admin. Hit enter. Enter the Username user and the Password that you read from the log file.

<img src="/elastigroup/_media/wordpress-on-spot-step-by-step-guide_7.png" width="300" height="354" />

Congratulations! You now have your WordPress site up and running. You can now manage, customise, and configure it as you like.

## What's Next?

Learn about advanced Elastigroup configurations in the Compute Concepts section.
Check out the tutorials for other Elastigroup supported workloads and integrations.
