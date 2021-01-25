# Connect your GCP Project to Spot

In order to allow Spot to manage GCP resources, it is necessary to authenticate Spot with a relevant GCP Project.

1. Log in to [Spot Console](http://console.spotinst.com/).
2. In the Welcome page, click Google Cloud Platform.

<img src="/connect-your-cloud-provider/_media/welcome-to-spot-1024x341.png" />

3. Choose one of the methods to connect your account, manual or automatic (via gcloud).

> **Tip**: In order for the connection with your GCP project to work, the Identity and Access Management (IAM) API should be enabled for the project. You may refer to [Enabling and Disabling Services](https://cloud.google.com/service-usage/docs/enable-disable) by Google Cloud to enable the IAM API for your project.

## Manual Method

### Step 1

Log in to the Google Cloud project you would like Spot to connect to. Use the button for quick navigation.

### Step 2

Navigate to Service Account and select your project.

### Step 3

Create a service account for Spot actions. Name it as described in the wizard:

On Spot Console:

<img src="/connect-your-cloud-provider/_media/gcp-step3.png" />

On GCP console:

<img src="/connect-your-cloud-provider/_media/gcp-step3-a.png" width="389" height="286" />

### Step 4

1. Grant your service account Editor permissions.

<img src="/connect-your-cloud-provider/_media/gcp-step4.png" width="403" height="312" />

2. Create a JSON key.

<img src="/connect-your-cloud-provider/_media/gcp-step4-a.png" width="327" height="140" />

3. Save the JSON file.

### Step 5

Upload a Service Account Key. Browse the JSON file previously created.

<img src="/connect-your-cloud-provider/_media/gcp-step5.png" />

Click Connect to finish the process.

We'll check connectivity to your GCP account, and you're all set to create your first Elastigroup!

## Automatic Method

### Prerequisites

- Have gcloud installed.
- Have permissions to create a service account.

### Step 1

Enter the GCP project ID you would like to connect.

<img src="/connect-your-cloud-provider/_media/gcp-automatic-step1.png" />

### Step 2

Copy the provided script and run it on a local terminal with gcloud available. The GCP_Project_ID parameter is replaced dynamically with the value provided in step 1.

<img src="/connect-your-cloud-provider/_media/gcp-automatic-step2.png" />

### Step 3

The script will output a `spotinst_key.json` file. Select it using the Browse button.

<img src="/connect-your-cloud-provider/_media/gcp-automatic-step3.png" />

Click on Connect to finish the process.
We'll check connectivity to your GCP account, and you're all set.

## What's Next?

[Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-gcp).
