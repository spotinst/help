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
      <p><code>gcloud projects add-iam-policy-binding YOUR_MAIN_PROJECT_ID --member="user:YOUR_EMAIL" --role="roles/iam.organizationRoleAdmin"</code></p>
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
     # Ensures the script exits on error and fails on pipeline errors
     set -euo pipefail
   
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
     
       if ! "$cmd" "$@"; then
         log_error "$err_msg"
         exit 1
       else
         log_success "$success_msg"
       fi
     }
   
     echo "Fetching org ID..."
     ANALYSIS_ORG_ID="$(gcloud projects get-ancestors $(gcloud config get-value project --quiet) | awk '/TYPE: organization/{print id} {id=$2}')"
     SERVICE_ACCOUNT_ORG_ID="$ANALYSIS_ORG_ID"
   
     CURRENT_PROJECT_ID=$(gcloud config get-value project --quiet)
     ANALYSIS_PROJECTS=("$CURRENT_PROJECT_ID")
     SERVICE_ACCOUNT_PROJECT_LIST=("$CURRENT_PROJECT_ID")
   
     ANALYSIS_ORG_ROLES=("roles/billing.viewer" "roles/browser")
     ANALYSIS_EMAILS=("ross.hardin@flexera.com" "greg.kuderna@flexera.com")
     ANALYSIS_PROJECT_ROLE="roles/bigquery.dataViewer" 
     ANALYSIS_CUSTOM_ROLE_NAME="spot_read_only_custom_role"
     ANALYSIS_CUSTOM_ROLE_TITLE="Spot Read-Only Custom Role"
     ANALYSIS_CUSTOM_ROLE_DESCRIPTION="Spot Read-Only Permissions needed for programmatic visibility into commitment and cost data"
     ANALYSIS_CUSTOM_ROLE_PERMISSIONS="bigquery.capacityCommitments.get,bigquery.capacityCommitments.list,bigquery.jobs.listAll,cloudasset.assets.exportComputeCommitments,cloudasset.assets.listComputeCommitments,compute.commitments.get,compute.commitments.list,compute.instances.get,compute.instances.list,recommender.bigqueryCapacityCommitmentsInsights.get,recommender.bigqueryCapacityCommitmentsInsights.list,recommender.bigqueryCapacityCommitmentsRecommendations.get,recommender.bigqueryCapacityCommitmentsRecommendations.list,recommender.commitmentUtilizationInsights.get,recommender.commitmentUtilizationInsights.list,recommender.spendBasedCommitmentInsights.get,recommender.spendBasedCommitmentInsights.list,recommender.spendBasedCommitmentRecommendations.get,recommender.spendBasedCommitmentRecommendations.list,recommender.spendBasedCommitmentRecommenderConfig.get,recommender.usageCommitmentRecommendations.get,recommender.usageCommitmentRecommendations.list"
     SERVICE_ACCOUNT_PROJECT_ROLES=("roles/bigquery.dataViewer")
     SERVICE_ACCOUNT_NAME="spot-programmatic-access-sa" #between 6 and 30 characters
     SERVICE_ACCOUNT_DESCRIPTION="Spot Service Account created for Programmatic Access to Resources"
     SERVICE_ACCOUNT_DISPLAY_NAME="spot-programmatic-access-service-account"
     SERVICE_ACCOUNT_CUSTOM_ROLE_NAME="Spot_Programmatic_Access_Role"
     SERVICE_ACCOUNT_CUSTOM_ROLE_TITLE="Spot Programmatic Access Role"
     SERVICE_ACCOUNT_CUSTOM_ROLE_DESCRIPTION="Spot Custom Role for Programmatic Access"
     SERVICE_ACCOUNT_CUSTOM_ROLE_PERMISSIONS="monitoring.timeSeries.list,cloudquotas.quotas.get,cloudquotas.quotas.update,serviceusage.quotas.get,serviceusage.quotas.update,serviceusage.services.get,serviceusage.services.list"
   
     echo "Validating service account IAM roles..."
   
     for ROLE in "roles/bigquery.dataViewer" "roles/bigquery.jobUser" "roles/bigquery.readSessionUser"; do
       echo "Checking if $SERVICE_ACCOUNT_NAME has $ROLE..."
       if [[ -z $(gcloud projects get-iam-policy "$CURRENT_PROJECT_ID" \
             --flatten="bindings[].members" \
             --filter="bindings.members:serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com AND bindings.role:$ROLE" \
             --format="value(bindings.role)") ]]; then
         log_error "Service account does not have $ROLE"
         exit 1
       else
         log_success "Service account has $ROLE"
       fi
     done
   
     for ROLE in "${ANALYSIS_ORG_ROLES[@]}"; do
       for EMAIL in "${ANALYSIS_EMAILS[@]}"; do
         echo "Adding member: user:$EMAIL to role $ROLE ..."
         validate_command \
           "Failed to add user:$EMAIL to org role $ROLE" \
           "Added user:$EMAIL to org role $ROLE" \
           gcloud organizations add-iam-policy-binding $ANALYSIS_ORG_ID \
             --role=$ROLE \
             --member="user:$EMAIL"
       done
     done
   
     for PROJECT in "${ANALYSIS_PROJECTS[@]}"; do
       for EMAIL in "${ANALYSIS_EMAILS[@]}"; do
         echo "Adding user:$EMAIL to project role $ANALYSIS_PROJECT_ROLE in project $PROJECT..."
         validate_command \
           "Failed to add user:$EMAIL to project role" \
           "Added user:$EMAIL to project role in $PROJECT" \
           gcloud projects add-iam-policy-binding $PROJECT \
             --role=$ANALYSIS_PROJECT_ROLE \
             --member="user:$EMAIL"
       done
     done
   
     echo "Creating custom role $ANALYSIS_CUSTOM_ROLE_NAME..."
     validate_command \
       "Failed to create custom role" \
       "Created custom role $ANALYSIS_CUSTOM_ROLE_NAME" \
       gcloud iam roles create "$ANALYSIS_CUSTOM_ROLE_NAME" \
         --organization=$ANALYSIS_ORG_ID \
         --description="$ANALYSIS_CUSTOM_ROLE_DESCRIPTION" \
         --permissions="$ANALYSIS_CUSTOM_ROLE_PERMISSIONS" \
         --stage="GA" \
         --title="$ANALYSIS_CUSTOM_ROLE_TITLE"
   
     for EMAIL in "${ANALYSIS_EMAILS[@]}"; do
       echo "Granting custom role $ANALYSIS_CUSTOM_ROLE_NAME to $EMAIL..."
       validate_command \
         "Failed to grant custom role to $EMAIL" \
         "Granted custom role to $EMAIL" \
         gcloud organizations add-iam-policy-binding $ANALYSIS_ORG_ID \
           --member="user:$EMAIL" \
           --role="organizations/$ANALYSIS_ORG_ID/roles/$ANALYSIS_CUSTOM_ROLE_NAME"
     done
   
     # You will need roles/iam.serviceAccountCreator to create a service account
     # To Grant the service account access to the project, you need roles/resourcemanager.projectIamAdmin
   
     echo "Creating service account $SERVICE_ACCOUNT_NAME..."
     validate_command \
       "Failed to create service account" \
       "Created service account $SERVICE_ACCOUNT_NAME" \
       gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
         --description="$SERVICE_ACCOUNT_DESCRIPTION" \
         --display-name="$SERVICE_ACCOUNT_DISPLAY_NAME"
   
     for PROJECT in "${SERVICE_ACCOUNT_PROJECT_LIST[@]}"; do
       for ROLE in "${SERVICE_ACCOUNT_PROJECT_ROLES[@]}"; do
         echo "Adding member: serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com to role $ROLE ..."
         validate_command \
           "Failed to add service account to project role $ROLE" \
           "Added service account to project role $ROLE" \
           gcloud projects add-iam-policy-binding $PROJECT \
             --role="$ROLE" \
             --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com"
       done
     done
   
     echo "Creating custom org level role for service account..."
     validate_command \
       "Failed to create service account custom role" \
       "Created custom org level role $SERVICE_ACCOUNT_CUSTOM_ROLE_NAME" \
       gcloud iam roles create "$SERVICE_ACCOUNT_CUSTOM_ROLE_NAME" \
         --organization=$SERVICE_ACCOUNT_ORG_ID \
         --description="$SERVICE_ACCOUNT_CUSTOM_ROLE_DESCRIPTION" \
         --permissions="$SERVICE_ACCOUNT_CUSTOM_ROLE_PERMISSIONS" \
         --stage="GA" \
         --title="$SERVICE_ACCOUNT_CUSTOM_ROLE_TITLE"
   
     echo "Granting custom role to service account..."
     validate_command \
       "Failed to grant custom role to service account" \
       "Granted custom role to service account" \
       gcloud organizations add-iam-policy-binding $SERVICE_ACCOUNT_ORG_ID \
         --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com" \
         --role="organizations/$SERVICE_ACCOUNT_ORG_ID/roles/$SERVICE_ACCOUNT_CUSTOM_ROLE_NAME"
   
     # You will need roles/iam.serviceAccountAdmin to create this service account key...
     # Or a relevant custom role with iam.serviceAccountKeys.create
   
     echo "Creating service account key..."
     validate_command \
       "Failed to create service account key" \
       "Created service account key" \
       gcloud iam service-accounts keys create ~/my-sa-key.json \
         --iam-account="$SERVICE_ACCOUNT_NAME@$CURRENT_PROJECT_ID.iam.gserviceaccount.com"
   
     echo "Downloading service account key..."
     validate_command \
       "Failed to download service account key" \
       "Downloaded service account key" \
       cloudshell download my-sa-key.json
   
     echo "Removing local key file..."
     validate_command \
       "Failed to remove local key file" \
       "Removed local key file" \
       rm ~/my-sa-key.json
   
     echo "Onboarding script completed successfully."
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
