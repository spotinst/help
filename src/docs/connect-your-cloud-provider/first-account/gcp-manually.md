# Connect GCP Manually

This page describes the procedures for manually (i.e., using the GCP console) connecting your GCP account to Spot. The procedure assumes that you are following the instructions in the [onboarding wizard](connect-your-cloud-provider/first-account/), have already created your Spot organization, and selected GCP as your cloud provider. You are connecting a linked account, and are now at Step 3.1 as shown below.

## Step 3.1: Click Manually

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-001.png" width="500" />

## Step 3.2: GCP Login

Log in to the GCP account that you are connecting to Spot. Switch back to the wizard in Spot and click Next.

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-002.png" width="500" />

## Step 3.3: Create a new Service Account

In this step you create a service account that Spot will use to manage resources in your GCP account and assign it the role of Editor. Complete this step in the order of the bullets in the wizard.

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-003.png" width="500" />

1. In the GCP console, go to Service Accounts under the project you are connecting to. Click Create a Service Account.
2. Switch back to the Spot wizard and copy the service account name that has been generated, for example, Spotinst-role-ace 550cdfc7.
3. In GCP, paste the name into the Service Account Name and Service Account ID fields. Click Create.

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-004.png" width="500" />

4. Under Service Account Permissions, choose Editor in the Role dropdown list. This will give the account Editor permissions. Click Continue.

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-005.png" width="500" />

5. Go back to the wizard in Spot and click Next.

## Step 3.4: Create Service Key

In this step, you create a new service key and upload it to the service account you just created.

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-006.png" width="500" />

1. In GCP, navigate according to the path shown above.

<img src="/connect-your-cloud-provider/_media/connect-gcp-manually-007.png" width="500" />

2. Once you have created the key, drag and drop the JSON file to Spot, to the area indicated in the wizard.
3. In Spot, click Connect Account.

Spot will display a banner indicating that your GCP account has been connected successfully, and in the Dashboard, you will see important savings and optimization information about your account.

## What’s Next?

Learn how you can use Spot Insights & Recommendations in the [Dashboard](connect-your-cloud-provider/dashboard) and understand your Savings Potential analysis with immediate steps you can take.
