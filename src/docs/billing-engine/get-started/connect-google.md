# Connect Your Google Cloud Billing Account to Billing Engine 

The procedures on this page describe how to connect your Google Cloud Billing Account to Billing Engine.

1. Set up a service account and keys:

<ol style="list-style-type: lower-alpha;">
<li><a href="https://cloud.google.com/iam/docs/keys-create-delete">Create a Google Cloud Service account</a></li>
<li><a href="https://cloud.google.com/iam/docs/keys-create-delete">Create a Google Project</a></li>
<li><a href="https://cloud.google.com/iam/docs/keys-create-delete#creating">Create a Service Account Key</a></li>
</ol>

Make sure you select key type: **JSON**. Save the key in the JSON format.

2. Set up a [Google Cloud billing data export](https://cloud.google.com/billing/docs/how-to/export-data-bigquery) and save the:
* BigQuery Dataset ID
* BigQuery Table ID

3. Send these credentials to your Spot representative:

* Google Project ID.
* Service Account Key JSON.
* BigQuery Dataset ID
* BigQuery Table ID

After 24 hours, you will receive a confirmation that the Billing Engine processes have run and data will be present within the platform.
