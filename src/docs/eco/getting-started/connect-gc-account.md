# Connect Your Google Cloud Organization

## Prerequisites

* Registered Spot account

* You’ll need these permissions for the Google Cloud account:
   * `roles/iam.organizationRoleAdmin` to create and manage roles at the organization level.
   * `roles/iam.serviceAccountCreator` to create service accounts.
   * `roles/iam.serviceAccountAdmin` to manage service accounts.
   * `roles/resourcemanager.projectIamAdmin` to manage IAM policies for projects.

## Connect Your Google Cloud Account

1. In the Spot console, go to Eco and select **Google Cloud** &gt; **Log in to your Google Cloud account**. After you sign in to Google Cloud, keep that browser tab open, then in the Spot console, click **Next**.
2. If you don’t already have projects and datasets for your Cloud billing data, pricing, and recommendations, you can set them up:
   * [Export Cloud billing and pricing data to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery)
   * [Export recommendations to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery) 
3. Create a service account and grant permissions to your Google Cloud environment:
   <ol style="list-style-type: lower-alpha;">
    <li>
      <a href="https://cloud.google.com/shell/docs/using-cloud-shell">Open Cloud Shell.</a>
    </li>
    <li>
      <p><a href="https://cloud.google.com/sdk/gcloud/reference/config/set?id=examples#:~:text=gcloud_command%2Dline_tool_preferences.-,EXAMPLES,-To%20set%20the">Set the project property in the core section to your project ID</a>. This makes the project the default project, where the service account is bound. Make sure your data exports to this account.</p>
      <p>For example, <code>gcloud config set project YOUR_MAIN_PROJECT_ID</code>.</p>
    </li>
    <li>
      <p>Grant permissions to your account by running these commands in Cloud Shell:</p>
      <p><code>gcloud organizations add-iam-policy-binding YOUR_ORGANIZATION_ID --member="user:YOUR_EMAIL" --role="roles/iam.organizationRoleAdmin"</code></p>
      <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/iam.serviceAccountCreator"</code></p>
      <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/iam.serviceAccountAdmin"</code></p>
      <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/resourcemanager.projectIamAdmin"</code></p>
    </li>
    <li>
      <p>Create a file in Cloud Shell using a text editor, such as nano or vi. For example: <code>nano setup_gcloud_iam_roles_and_service_accounts.sh</code>.</p>
      <p>Copy this script and paste it into the file you just created:</p>

      <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
        <summary markdown="span"; font-weight:600" >View the script</summary>

   <div style="padding-left:16px">

     ````     
    set -uo pipefail
    
    FAILED=0
    log_error() {
      echo "ERROR: $1" >&2
    }
    
    log_success() {
      echo "SUCCESS: $1"
    }
    
    validate_command() {
      local err_msg="$1"
      local success_msg="$2"
      local cmd="$3"
      shift 3
    
      echo "Running: $cmd $*"
    ````

   </div>
   </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
        <summary markdown="span"; font-weight:600" >What the script does</summary>

   <div style="padding-left:16px">

   The script automates setting up IAM roles and service accounts in Google Cloud for programmatic access and analysis:
     * Retrieves organization IDs and project IDs for the GC projects.
     * Assigns predefined roles to specific email addresses for both organizational and project-level access.
     * Creates a custom IAM role with specific permissions for data visibility and analysis.
     * Sets up a service account with a custom role and permissions for programmatic access to resources.
     * Generates and downloads a service account key for use in automated processes.

   </div>
   </details>
    </li>
    <li>Save and close the file you just created with the script. If you’re using nano, <b>Ctrl+O</b> &gt; <b>Enter</b> &gt; <b>Ctrl+X</b>.</li>
    <li>Make the script executable by running this command: <code>chmod +x setup_gcloud_iam_roles_and_service_accounts.sh</code>.</li>
    <li>Run the script: <code>./setup_gcloud_iam_roles_and_service_accounts.sh</code>.</li>
    <li>Click <b>Download</b> to save the service account key to your default downloads folder.</li>
   </ol>

4. Click **Upload Saved JSON File**, browse to find your service key: `spot-programmatic-access-sa-key.json` and click **Next**.
5. Enter your [BigQuery dataset and table IDs](https://cloud.google.com/bigquery/docs/listing-datasets) and click **Next**.
6. Click **Connect to Eco**. It can take a few hours for your data to show up in the dashboard.
