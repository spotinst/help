<meta name="robots" content="noindex">

# GC Access Roles and Permissions

You can get an initial analysis to see how much Eco GC can save you if you [connect your GC account](eco/getting-started/gettingstarted-gc) to Spot. For the initial analysis, you need to give Eco read-only permissions to your Google Cloud account. This gives the Eco cost specialists access to your cost and usage data so they can provide the analysis.

When you decide to onboard Eco, you'll need to update the roles and permissions.

## Initial Read-Only Permissions 

These roles and permissions are needed for Eco Google Cloud cost specialists to analyze your environment.

**Predefined IAM roles**

* Organization level
   * [roles/browser](https://cloud.google.com/resource-manager/docs/access-control-org#browser)
   * [roles/billing.viewer](https://cloud.google.com/billing/docs/how-to/billing-access#billing.viewer)

* Project level (in the project that has the Google Cloud BigQuery billing export)
   * [roles/bigquery.dataViewer](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataViewer)

**Custom analysis IAM role**

* Organization level
   * bigquery.capacityCommitments.get
   * bigquery.capacityCommitments.list
   * bigquery.jobs.listAll
   * cloudasset.assets.exportComputeCommitments
   * cloudasset.assets.listComputeCommitments
   * compute.commitments.get
   * compute.commitments.list
   * compute.instances.get
   * compute.instances.list
   * recommender.bigqueryCapacityCommitmentsInsights.get
   * recommender.bigqueryCapacityCommitmentsInsights.list
   * recommender.bigqueryCapacityCommitmentsRecommendations.get
   * recommender.bigqueryCapacityCommitmentsRecommendations.list
   * recommender.commitmentUtilizationInsights.get
   * recommender.commitmentUtilizationInsights.list
   * recommender.spendBasedCommitmentInsights.get
   * recommender.spendBasedCommitmentInsights.list
   * recommender.spendBasedCommitmentRecommendations.get
   * recommender.spendBasedCommitmentRecommendations.list
   * recommender.spendBasedCommitmentRecommenderConfig.get
   * recommender.usageCommitmentRecommendations.get
   * recommender.usageCommitmentRecommendations.list
 

## Roles and Permissions for Eco Google Cloud Dashboard

These roles and permissions are needed for Eco Google Cloud service account to ingest, process, and display your data on your personal Eco Google Cloud Dashboard.

**Predefined IAM roles**

* Project level (in the project that has the Google Cloud BigQuery billing export)
   * [roles/bigquery.dataViewer](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataViewer)
   * [roles/bigquery.jobUser](https://cloud.google.com/bigquery/docs/access-control#bigquery.jobUser)
   * [roles/bigquery.readSessionUser](https://cloud.google.com/bigquery/docs/access-control#bigquery.readSessionUser)

**Custom service account IAM role**

* Project level (in the project that has the Google Cloud BigQuery billing export)
   * monitoring.timeSeries.list
   * cloudquotas.quotas.get
   * cloudquotas.quotas.update
   * serviceusage.services.get
   * serviceusage.services.list
   * serviceusage.quotas.get
   * serviceusage.quotas.update
   * bigquery.jobs.create
   * bigquery.readsessions.create

## Full Roles and Permissions for Managing Your Environment

These roles and permissions are needed for Eco Google Cloud cost specialists to manage your environment.

**Predefined IAM roles**

* Organization level
   * [roles/viewer](https://cloud.google.com/iam/docs/understanding-roles#legacy-basic)
   * [roles/browser](https://cloud.google.com/resource-manager/docs/access-control-org#browser)
   * [roles/project.creator](https://cloud.google.com/iam/docs/understanding-roles#resourcemanager.projectCreator)
 
* Billing account level (on the billing account to be managed)
   * [roles/consumerprocurement.orderAdmin](https://cloud.google.com/marketplace/docs/access-control#consumerprocurement.orderAdmin)

**Custom full management IAM role**

* Organization level
   * bigquery.capacityCommitments.create
   * bigquery.capacityCommitments.delete
   * bigquery.capacityCommitments.get
   * bigquery.capacityCommitments.list
   * bigquery.capacityCommitments.update
   * cloudasset.assets.exportComputeCommitments
   * cloudasset.assets.listComputeCommitments
   * compute.commitments.create
   * compute.commitments.get
   * compute.commitments.list
   * compute.commitments.update
   * compute.commitments.updateReservations
   * recommender.bigqueryCapacityCommitmentsInsights.get
   * recommender.bigqueryCapacityCommitmentsInsights.list
   * recommender.bigqueryCapacityCommitmentsInsights.update
   * recommender.bigqueryCapacityCommitmentsRecommendations.get
   * recommender.bigqueryCapacityCommitmentsRecommendations.list
   * recommender.bigqueryCapacityCommitmentsRecommendations.update
   * recommender.commitmentUtilizationInsights.get
   * recommender.commitmentUtilizationInsights.list
   * recommender.commitmentUtilizationInsights.update
   * recommender.spendBasedCommitmentInsights.get
   * recommender.spendBasedCommitmentInsights.list
   * recommender.spendBasedCommitmentInsights.update
   * recommender.spendBasedCommitmentRecommendations.get
   * recommender.spendBasedCommitmentRecommendations.list
   * recommender.spendBasedCommitmentRecommendations.update
   * recommender.spendBasedCommitmentRecommenderConfig.get
   * recommender.spendBasedCommitmentRecommenderConfig.update
   * recommender.usageCommitmentRecommendations.get
   * recommender.usageCommitmentRecommendations.list
   * recommender.usageCommitmentRecommendations.update
