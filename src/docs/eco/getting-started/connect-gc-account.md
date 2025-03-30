# Connect Your Google Cloud Organization 

## Prerequisites

* Registered Spot account

* You’ll need these permissions for the Google Cloud account:
   
   * `roles/iam.organizationRoleAdmin` to create and manage roles at the organization level.
   * `roles/iam.serviceAccountCreator` to create service accounts.
   * `roles/iam.serviceAccountAdmin` to manage service accounts.
   * `roles/resourcemanager.projectIamAdmin` to manage IAM policies for projects.

## Connect Your Google Cloud Account

1. In the Spot console, go to Eco and select **Google Cloud** > **Log in to your Google Cloud account**. After you sign in to Google Cloud, keep that browser tab open, then in the Spot console, click **Next**.

2. If you don’t already have projects and datasets for your Cloud billing data, pricing, and recommendations, you can set them up:
    * [Export Cloud billing and pricing data to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery)
    * [Export recommendations to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery)

3. Create a service account and grant permissions to your Google Cloud environment:

    <ol style="list-style-type: lower-alpha;">
    <li>Open Cloud Shell.</li>
    <li><p>Set the project property in the core section to your project ID. This makes the project the default project, where the service account is bound. Make sure your data exports to this account.</p>
    <p>For example, <code>gcloud config set project YOUR_MAIN_PROJECT_ID</code>.</p></li>
    <li><p>Grant permissions to your account by running these commands in Cloud Shell:</p>
     <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/iam.organizationRoleAdmin"</code></p>
     <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/iam.serviceAccountCreator"</code></p>
     <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/iam.serviceAccountAdmin"</code></p>
     <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/resourcemanager.projectIamAdmin"</code></p></li>


    <li><p>Create a file in Cloud Shell using a text editor, such as nano or vi. For example: <code>nano setup_gcloud_iam_roles_and_service_accounts.sh</code>.</p>
    <p>Copy this script and paste it into the file you just created:</p>
       <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
     <summary markdown="span"; font-weight:600">Script</summary>

    <div style="padding-left:16px">

     ````script
     ANALYSIS_ORG_ID="$(gcloud projects get-ancestors ingresruletesting | awk '/TYPE: organization/{print id} {id=$2}')"
     SERVICE_ACCOUNT_ORG_ID="$(gcloud projects get-ancestors ingresruletesting | awk '/TYPE: organization/{print id} {id=$2}')"
     ANALYSIS_PROJECTS=("$(gcloud config get-value project --quiet)")
     SERVICE_ACCOUNT_PROJECT_LIST=("$(gcloud config get-value project --quiet)")
     ANALYSIS_ORG_ROLES=("roles/billing.viewer" "roles/browser")
     ANALYSIS_EMAILS=("rhardin@netapp.com" "gkuderna@netapp.com" "antevans@netapp.com")
     ANALYSIS_PROJECT_ROLE="roles/bigquery.dataViewer"
     ANALYSIS_CUSTOM_ROLE_NAME="spot-read-only-custom-role"
     ANALYSIS_CUSTOM_ROLE_TITLE="Spot Read-Only Custom Role"
     ANALYSIS_CUSTOM_ROLE_DESCRIPTION="Spot Read-Only Permissions needed for programmatic visibility into commitment and cost data"
     ANALYSIS_CUSTOM_ROLE_PERMISSIONS="bigquery.capacityCommitments.get,bigquery.capacityCommitments.list,bigquery.jobs.listAll,cloudasset.assets.exportComputeCommitments,cloudasset.assets.listComputeCommitments,compute.commitments.get,compute.commitments.list,compute.instances.get,compute.instances.list,recommender.bigqueryCapacityCommitmentsInsights.get,recommender.bigqueryCapacityCommitmentsInsights.list,recommender.bigqueryCapacityCommitmentsRecommendations.get,recommender.bigqueryCapacityCommitmentsRecommendations.list,recommender.commitmentUtilizationInsights.get,recommender.commitmentUtilizationInsights.list,recommender.spendBasedCommitmentInsights.get,recommender.spendBasedCommitmentInsights.list,recommender.spendBasedCommitmentRecommendations.get,recommender.spendBasedCommitmentRecommendations.list,recommender.spendBasedCommitmentRecommenderConfig.get,recommender.usageCommitmentRecommendations.get,recommender.usageCommitmentRecommendations.list"
     SERVICE_ACCOUNT_PROJECT_ROLES=("roles/bigquery.dataViewer")
     CURRENT_PROJECT_ID=$(gcloud config get-value project --quiet)
     SERVICE_ACCOUNT_NAME="spot-programmatic-access-sa" #between 6 and 30 characters
     SERVICE_ACCOUNT_DESCRIPTION="Spot Service Account created for Programmatic Access to Resources"
     SERVICE_ACCOUNT_DISPLAY_NAME="spot-programmatic-access-service-account"
     SERVICE_ACCOUNT_CUSTOM_ROLE_NAME="Spot_Programmatic_Access_Role"
     SERVICE_ACCOUNT_CUSTOM_ROLE_TITLE="Spot Programmatic Access Role"
     SERVICE_ACCOUNT_CUSTOM_ROLE_DESCRIPTION="Spot Custom Role for Programmatic Access"
     SERVICE_ACCOUNT_CUSTOM_ROLE_PERMISSIONS="monitoring.timeSeries.list,cloudquotas.quotas.get,cloudquotas.quotas.update,serviceusage.quotas.get,serviceusage.quotas.update,serviceusage.services.get,serviceusage.services.list"
     # Define organization roles needed for analysis.
     for ROLE in "${ANALYSIS_ORG_ROLES[@]}"; do
       for EMAIL in "${ANALYSIS_EMAILS[@]}"; do
         echo "Adding member: user:$EMAIL to role $ROLE ..."
         gcloud organizations add-iam-policy-binding $ANALYSIS_ORG_ID --role=$ROLE --member="user:$EMAIL"
       done
     done
     # Define the project role for BigQuery data viewing.
     for PROJECT in "${ANALYSIS_PROJECTS[@]}"; do
       for EMAIL in "${ANALYSIS_EMAILS[@]}"; do
         echo "Adding member: user:$EMAIL to role $ANALYSIS_PROJECT_ROLE in project $PROJECT ..."
         gcloud ANALYSIS_PROJECTS add-iam-policy-binding $PROJECT --role=$ANALYSIS_PROJECT_ROLE --member="user:$EMAIL"
       done
     done
     # Create a custom role with the defined permissions at the organization level.
     gcloud iam roles create "$ANALYSIS_CUSTOM_ROLE_NAME" --organization=$ANALYSIS_ORG_ID --description="$ANALYSIS_CUSTOM_ROLE_DESCRIPTION" --permissions="$ANALYSIS_CUSTOM_ROLE_PERMISSIONS" --stage="GA" --title="$ANALYSIS_CUSTOM_ROLE_TITLE"
     # Assign the custom role permissions to our team members at the organization level.
     for EMAIL in "${ANALYSIS_EMAILS[@]}"; do
       gcloud organizations add-iam-policy-binding $ANALYSIS_ORG_ID --member="user:$EMAIL" --role="organizations/$ANALYSIS_ORG_ID/roles/$ANALYSIS_CUSTOM_ROLE_NAME"
     done
     # Create the service account on the designated project.
     gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME --description="$SERVICE_ACCOUNT_DESCRIPTION" --display-name="$SERVICE_ACCOUNT_DISPLAY_NAME"
     # Assign BigQuery data viewer permissions to the service account for each project that contains billing data.
     for PROJECT in "${SERVICE_ACCOUNT_PROJECT_LIST[@]}"; do
       for ROLE in "${SERVICE_ACCOUNT_PROJECT_ROLES[@]}"; do
         echo "Adding member: serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com to role $ROLE ..."
         gcloud projects add-iam-policy-binding $PROJECT --role=$ROLE --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com"
       done
     done
     # Create a custom role at the organization level that will be assigned to the service account.
     gcloud iam roles create "$SERVICE_ACCOUNT_CUSTOM_ROLE_NAME" --organization=$SERVICE_ACCOUNT_ORG_ID --description="$SERVICE_ACCOUNT_CUSTOM_ROLE_DESCRIPTION" --permissions="$SERVICE_ACCOUNT_CUSTOM_ROLE_PERMISSIONS" --stage="GA" --title="$SERVICE_ACCOUNT_CUSTOM_ROLE_TITLE"
     # Assign the custom role to the service account at the organization level.
     gcloud organizations add-iam-policy-binding $SERVICE_ACCOUNT_ORG_ID --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com" --role="organizations/$SERVICE_ACCOUNT_ORG_ID/roles/$SERVICE_ACCOUNT_CUSTOM_ROLE_NAME"
     # Create an API key for the service account, download the key .json file, and save it to the current Cloud Shell instance.
     gcloud iam service-accounts keys create ~/spot-programmatic-access-sa-key.json --iam-account="$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com"
     # Attempt to download the key from the Cloud Shell instance to your local machine through the browser.
     cloudshell download spot-programmatic-access-sa-key.json
     ````

    </div>
    </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
     <summary markdown="span"; font-weight:600">What the script does</summary>

    <div style="padding-left:16px">
    The script automates setting up IAM roles and service accounts in Google Cloud for programmatic access and analysis:
      
     * Retrieves organization IDs and project IDs for the GCP projects.
     * Assigns predefined roles to specific email addresses for both organizational and project-level access.
     * Creates a custom IAM role with specific permissions for data visibility and analysis.
     * Sets up a service account with a custom role and permissions for programmatic access to resources.
     * Generates and downloads a service account key for use in automated processes.

    </div>
    </details>
   </li>

    <li>Save and close the file you just created with the script. If you’re using nano, <b>Ctrl+O</b> > <b>Enter</b> > <b>Ctrl+X</b>.</li>

    <li>Make the script executable by running this command: <code>chmod +x setup_gcloud_iam_roles_and_service_accounts.sh</code>.</li>

    <li>Run the script: <code>./setup_gcloud_iam_roles_and_service_accounts.sh</code>.</li>

    <li>Click <b>Download</b> to save the service account key to your default downloads folder.</li>
    </ol>

4. Click **Upload Saved JSON File**, browse to find your service key: `spot-programmatic-access-sa-key.json` and click **Next**.
5. Enter your [BigQuery dataset and table IDs](https://cloud.google.com/bigquery/docs/listing-datasets) and click **Next**.
6. Click **Connect to Eco**. It can take a few hours for your data to show up in the dashboard.
