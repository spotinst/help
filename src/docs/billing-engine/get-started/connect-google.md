# Connect Google Cloud Billing Account

This topic describes how to connect your Google Cloud Billing Account to Billing Engine. 

## Prerequisites 

* Permissions to create Service Accounts. 
* **Billing Account Administrator** and **BigQuery User** permissions. These should be linked to a Google project containing a BigQuery dataset that Billing Engine needs to read your Google Cloud Billing data.

## Step 1: Log in to your Google Cloud Account 

1. In the Spot console, click **Billing Engine** > **Administration**. Enter an account name and click **Create Account**.
2. Select **Google Cloud** > **FinOps Products** > **Next**. 
3. Click **Log in to your Google Cloud Account** and log in.  

## Step 2: Create a Service Account 

Create a service account for Spot and grant it the Viewer role. This allows Spot to access and analyze cost and usage data in your Google Cloud account. 

<img width="819" alt="connect-gc-1" src="https://github.com/user-attachments/assets/b700e31b-68bc-4009-ac47-9972018299a5">

1. In the Spot console, copy the service account name, for example spotinst-role-79885e98. 
2. In the Google Cloud console, select the project you are connecting to and [create a service account](https://cloud.google.com/iam/docs/service-accounts-create). 
3. Paste the name you copied from the Spot console into **Service Account Name**. The service account ID is automatically created. Click **CREATE**. 
4. In [Service Account Permissions](https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role), select **Role:** _Viewer_. Click **DONE**. 

## Step 3: Create and Upload a Service Key

1. In the Google Cloud console, create a [service account key](https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role). 
2. Save the JSON with the service key.
3. Click **Upload Saved JSON File** and upload the service key. Click **Next**. 

## Step 4: Enter the BigQuery Dataset and Table ID

To connect the BigQuery data set and table:

1. Export your [Google Billing Data](https://cloud.google.com/billing/docs/how-to/export-data-bigquery) if you haven’t already exported your cloud billing data to BigQuery.
2. In the Google Cloud console, go to the [BigQuery](https://console.cloud.google.com/bigquery?_ga=2.3004535.613814368.1727093026-1117920196.1694069983&project=ocean-spark&ws=!1m0) page for your project.
3. Copy the BigQuery data set ID and table ID.
4. In the Billing Engine console, paste the data set ID and table ID.
5. Click **Connect Account**.

<img width="726" alt="connect-gc-2" src="https://github.com/user-attachments/assets/185b9c18-58eb-4ce6-b1bb-d48f7fbff647">

