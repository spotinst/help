# Connect Account: Customer Working with AWS MSP

If more than one of your AWS accounts is managed by an MSP and you do not have access to the billing file, the MSP must complete the procedures in this article in order to retrieve the billing information. This procedure enables Eco to access your billing file and provide you with visibility into your cloud expenditures.

If you only have a single, member account to connect, then perform the steps in [Connect your AWS Account](eco/getting-started/connect-your-aws-account).

## Access to Cost and Usage Data

Eco needs to access the Cost and Usage data in your AWS account. To set this up, choose one of the following methods:

- [Option 1: Cost And Usage Report Extraction](eco/getting-started/connect-account-customer-working-with-msp?id=option-1-cost-and-usage-report-extraction). This method uses native AWS tools to allow Eco access to Cost and Usage data for agreed-upon accounts.
- [Option 2: Alternative Cost and Usage Generator](eco/getting-started/connect-account-customer-working-with-msp?id=option-2-alternative-cost-and-usage-generator). With this method, a partner can use its own tools to allow Eco access to agreed-upon accounts, as long as the the partner meets Spot requirements. For example, a partner may use CloudHealth to generate the files in the manner required for Spot.

## Option 1: Cost And Usage Report Extraction

There are three major steps to configuring the CUR Extraction:

1. Set up Cost and Usage Reports: This should be done from a root user account.
2. Link your Cost and Usage Report with Athena.
3. Set up the Cost and Usage Extractor.

#### Procedure Notes

- AWS Region. All actions in this procedure should be made in the US-East-1 (Northern Virginia) AWS region.
- IAM Role. The IAM role should be the one of the end-customer management account.

### Step 1: Set Up Cost And Usage Reports

1. Log in to your root AWS account, and go to [AWS Cost and Usage Reports](https://console.aws.amazon.com/billing/home?#/reports).
2. Click Create Report.
3. Under the first menu, Report Content, do the following:
   1. For the report name, enter (i.e., paste) the following: `spotinst-cur-report`. You must use the same name for the S3 bucket name.
   2. Check the box that says `Include resource IDs`.
   3. Click Next.
4. Under the second menu, Delivery Options, do the following:
   1. Under S3 Bucket, click Configure, then do the following:
      1. For the name for the S3 bucket that CUR reports will be dumped into, paste in the following: `spotinst-cur-report`. This name must be the same as the report name that you entered previously.
      2. Only change the bucket's region if necessary.
      3. Click Next.
      4. Check the box that says `I have confirmed that this policy is correct`.
      5. Click Save.
   2. Under Report Path Prefix, enter `spotinst_eco`.
   3. Under Time Granularity, enter Hourly.
   4. Under Enable report data integration for, check the box that says `Amazon Athena`.
   5. Click `next`.
5. The review screen should appear as shown below.

<img src="/eco/_media/gettingstarted-aws-connect-msp-01.png" />

6. Scroll all the way down and click Review and Complete.

### Step 2: Link Your Cost And Usage Report With Athena

It will take 24 hours for AWS to start dropping reports into the S3 bucket you chose. Before proceeding with this step, click [here: Cost and Usage Reports](https://console.aws.amazon.com/billing/home?region=us-east-1#/reports) and make sure that `Data last refreshed` has a date and doesn't say `N/A`. Here's what it should look like:

<img src="/eco/_media/gettingstarted-aws-connect-msp-03.png" />

1. Click [here: S3 Buckets](https://console.aws.amazon.com/s3/home?region=us-east-1), go to the S3 bucket you chose and navigate to: spotinst_eco/spotinst-cur-report
2. Click on the file called `crawler-cfn.yml`.
3. Download the file and contact your Spot sales representative. (If you do not have a sales representative, contact Spot Support.) Please include the following in your email:
   - The crawler file
   - AWS account number of MSP
   - Account ID of the customer's management account
   - CUR bucket name
   - Stack name
   - Prefix
   - The customer's Spot OrgIDs

Continue with the steps below.

4. Copy the `Object Url` at the bottom as shown in the image below.

<img src="/eco/_media/gettingstarted-aws-connect-msp-04.png" width="512" height="494" />

5. Click [here: Create Stack](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/template) and paste that object url into the field `Amazon S3 URL` as shown in the image below.

<img src="/eco/_media/gettingstarted-aws-connect-msp-05.png" />

6. Click Next.
7. Enter `SpotEcoStack` for the Stack Name and click Next.
8. Scroll all the way down and click Next again.
9. Scroll all the way down, and under the Capabilities section, mark the box that says `I acknowledge that AWS CloudFormation might create IAM resources.`
10. Click Create Stack.
11. Click [here: AWS Glue Crawlers](https://console.aws.amazon.com/glue/home?region=us-east-1#catalog:tab=crawlers), and find the crawler you just created. The name will appear as follows: `AWSCURCrawler-[name of your cur report]`. Click on the crawler to bring up its properties.
12. Click Edit.
13. On the left side of the screen, click Schedule.
14. In the Frequency dropdown box, choose Daily.
15. For Start Hour (UTC), choose 00, and for Start Minute, choose 00.
16. Click Next, click Next again, scroll down, and click Finish.

Once you have sent the crawler.yml file, it may take up to 48 hours before you receive the link you need for Step 3.

### Step 3: Set Up Cost And Usage Extractor

1. Log into your AWS account, then click on the link provided by Spot.
2. On the CloudFormation page, click Next at the bottom right.
3. Some of the parameters have been filled in already. Do not change them. Fill in the following parameters:
   - Account List: You may leave this blank, but if you would like to send Cost and Usage reports only for certain account numbers, enter them into this field separated by commas. Do not add spaces.
   - Stack Name: You can set this to a name you like.
   - CURBucketName: Set this to the name of the S3 bucket that you chose in the previous steps for Cost and Usage Reports to write to.
4. Click Next. Scroll all the way down and click Next again.
5. Scroll all the way down and under the Capabilities section, check the box that says `I acknowledge that AWS CloudFormation might create IAM resources.`
6. The Review screen should appear as follows:

<img src="/eco/_media/gettingstarted-aws-connect-msp-06.png" />

7. Click Create Stack.

## Option 2: Alternative Cost and Usage Generator

Typically, this method requires coordination between the end-customer and the administrator of the tool creating their version of the Cost and Usage Report (CUR) as a CSV gzip export.

It is important to determine how you wish Eco to operate. If RI sharing is not turned on, Eco will need one Spot organization per linked account, meaning either one CUR per linked-account or one exported CSV gzip (defined below) per organization. 

If the customer has RI sharing turned on specifically for the group of linked accounts, and is okay with Cost Specialists managing it cross-account, then one exported CSV gzip (below) per organization is fine.

### Responsibilities

- The _Partner_ (AWS MSP, Management Account Admin, or Admin of the CUR-generating tool) is responsible for CUR generation in the proper format.
- The _End Customer_ and the _Partner_ will agree on a target S3 bucket to locate their version of the CUR.
- The _End Customer_ and the _Partner_ will agree on the method of providing the Partner access to the target bucket.
- The _Partner_ will deliver the export files to the target bucket.
- The _End Customer_ will provide Eco an ARN with access to the exported CUR and generate a support ticket, requesting to handoff the following information to Spot Finops technical support:

1. The bucket name where the exported CUR is located.
2. The role ARN necessary to download the exported CUR.

### Requirements

After a sync with the specified files, the following folders and files should exist under the target bucket:

- `cur_data`, recognizable in the format: `[eco_s3_bucket]/RawCURReports/cur/[account]/yyyymmdd-yyyymmdd/[assembly_id]/[cur_data]`

  Ideally, the data should be organized according to the schema below.

- A manifest file, recognizable with the format: `[eco_s3_bucket]/manifests/yyyymmdd-yyyymmdd/[report_id]-Manifest.json`

Once the files exist in the correct format, you will need to configure the account as in the steps for [Connecting to a Management Account](eco/getting-started/connect-your-aws-account). However, do the following:

1. Get the S3 bucket name and the Role ARN as described in Step 3 and Step 6 of the procedure.
2. Copy the bucket name and role ARN into a support ticket along with the following message:

   "I am requesting a manual onboarding of an account per the instructions in [Connect Account: Customer Working with MSP](https://docs.spot.io/eco/getting-started/connect-account-customer-working-with-msp)."

You do not need to complete the enrollment process through the UI and can cancel out of that.

Please allow up to 24 business hours for us to complete this process and the standard 48 hours for the data to show in the UI.

### Ideal Eco Schema

The following is an example of an ideal Eco schema.

```json
{
  "columns": [
    { "column_name": "bill_bill_type", "data_type": "string" },
    { "column_name": "bill_billing_entity", "data_type": "string" },
    { "column_name": "bill_billing_period_end_date", "data_type": "timestamp" },
    {
      "column_name": "bill_billing_period_start_date",
      "data_type": "timestamp"
    },
    { "column_name": "bill_invoice_id", "data_type": "string" },
    { "column_name": "bill_payer_account_id", "data_type": "string" },
    { "column_name": "identity_time_interval", "data_type": "string" },
    { "column_name": "line_item_availability_zone", "data_type": "string" },
    { "column_name": "line_item_blended_cost", "data_type": "double" },
    { "column_name": "line_item_blended_rate", "data_type": "string" },
    { "column_name": "line_item_currency_code", "data_type": "string" },
    { "column_name": "line_item_legal_entity", "data_type": "string" },
    { "column_name": "line_item_line_item_description", "data_type": "string" },
    { "column_name": "line_item_line_item_type", "data_type": "string" },
    { "column_name": "line_item_normalization_factor", "data_type": "double" },
    {
      "column_name": "line_item_normalized_usage_amount",
      "data_type": "double"
    },
    { "column_name": "line_item_operation", "data_type": "string" },
    { "column_name": "line_item_product_code", "data_type": "string" },
    { "column_name": "line_item_resource_id", "data_type": "string" },
    { "column_name": "line_item_tax_type", "data_type": "string" },
    { "column_name": "line_item_unblended_cost", "data_type": "double" },
    { "column_name": "line_item_unblended_rate", "data_type": "string" },
    { "column_name": "line_item_usage_account_id", "data_type": "string" },
    { "column_name": "line_item_usage_amount", "data_type": "double" },
    { "column_name": "line_item_usage_end_date", "data_type": "timestamp" },
    { "column_name": "line_item_usage_start_date", "data_type": "timestamp" },
    { "column_name": "line_item_usage_type", "data_type": "string" },
    { "column_name": "pricing_lease_contract_length", "data_type": "string" },
    { "column_name": "pricing_offering_class", "data_type": "string" },
    { "column_name": "pricing_public_on_demand_cost", "data_type": "double" },
    { "column_name": "pricing_public_on_demand_rate", "data_type": "string" },
    { "column_name": "pricing_purchase_option", "data_type": "string" },
    { "column_name": "pricing_rate_id", "data_type": "string" },
    { "column_name": "pricing_term", "data_type": "string" },
    { "column_name": "pricing_unit", "data_type": "string" },
    { "column_name": "product_account_assistance", "data_type": "string" },
    { "column_name": "product_activity_type", "data_type": "string" },
    { "column_name": "product_alarm_type", "data_type": "string" },
    { "column_name": "product_architectural_review", "data_type": "string" },
    { "column_name": "product_architecture_support", "data_type": "string" },
    { "column_name": "product_attachment_type", "data_type": "string" },
    { "column_name": "product_availability_zone", "data_type": "string" },
    { "column_name": "product_availability", "data_type": "string" },
    { "column_name": "product_best_practices", "data_type": "string" },
    { "column_name": "product_broker_engine", "data_type": "string" },
    { "column_name": "product_bundle", "data_type": "string" },
    { "column_name": "product_cache_engine", "data_type": "string" },
    { "column_name": "product_cache_memory_size_gb", "data_type": "string" },
    { "column_name": "product_calling_type", "data_type": "string" },
    { "column_name": "product_capacitystatus", "data_type": "string" },
    {
      "column_name": "product_case_severityresponse_times",
      "data_type": "string"
    },
    { "column_name": "product_category", "data_type": "string" },
    { "column_name": "product_classification_type", "data_type": "string" },
    { "column_name": "product_clock_speed", "data_type": "string" },
    { "column_name": "product_comments", "data_type": "string" },
    { "column_name": "product_compute_family", "data_type": "string" },
    { "column_name": "product_compute_type", "data_type": "string" },
    { "column_name": "product_content_source", "data_type": "string" },
    { "column_name": "product_content_type", "data_type": "string" },
    { "column_name": "product_country", "data_type": "string" },
    { "column_name": "product_counts_against_quota", "data_type": "string" },
    { "column_name": "product_cputype", "data_type": "string" },
    { "column_name": "product_current_generation", "data_type": "string" },
    {
      "column_name": "product_customer_service_and_communities",
      "data_type": "string"
    },
    { "column_name": "product_data_transfer_quota", "data_type": "string" },
    { "column_name": "product_database_edition", "data_type": "string" },
    { "column_name": "product_database_engine", "data_type": "string" },
    {
      "column_name": "product_dedicated_ebs_throughput",
      "data_type": "string"
    },
    { "column_name": "product_deployment_option", "data_type": "string" },
    { "column_name": "product_description", "data_type": "string" },
    { "column_name": "product_direct_connect_location", "data_type": "string" },
    { "column_name": "product_directory_size", "data_type": "string" },
    {
      "column_name": "product_directory_type_description",
      "data_type": "string"
    },
    { "column_name": "product_directory_type", "data_type": "string" },
    { "column_name": "product_durability", "data_type": "string" },
    { "column_name": "product_ecu", "data_type": "string" },
    { "column_name": "product_edition", "data_type": "string" },
    { "column_name": "product_endpoint_type", "data_type": "string" },
    { "column_name": "product_engine_code", "data_type": "string" },
    {
      "column_name": "product_enhanced_networking_support",
      "data_type": "string"
    },
    {
      "column_name": "product_enhanced_networking_supported",
      "data_type": "string"
    },
    { "column_name": "product_event_type", "data_type": "string" },
    { "column_name": "product_execution_frequency", "data_type": "string" },
    { "column_name": "product_execution_location", "data_type": "string" },
    { "column_name": "product_fee_code", "data_type": "string" },
    { "column_name": "product_fee_description", "data_type": "string" },
    { "column_name": "product_free_overage", "data_type": "string" },
    { "column_name": "product_free_query_types", "data_type": "string" },
    { "column_name": "product_free_tier", "data_type": "string" },
    { "column_name": "product_free_trial", "data_type": "string" },
    { "column_name": "product_free_usage_included", "data_type": "string" },
    { "column_name": "product_frequency_mode", "data_type": "string" },
    { "column_name": "product_from_location_type", "data_type": "string" },
    { "column_name": "product_from_location", "data_type": "string" },
    { "column_name": "product_georegioncode", "data_type": "string" },
    { "column_name": "product_gpu_memory", "data_type": "string" },
    { "column_name": "product_gpu", "data_type": "string" },
    { "column_name": "product_graphqloperation", "data_type": "string" },
    { "column_name": "product_group_description", "data_type": "string" },
    { "column_name": "product_group", "data_type": "string" },
    { "column_name": "product_included_services", "data_type": "string" },
    { "column_name": "product_input_mode", "data_type": "string" },
    { "column_name": "product_instance_capacity_large", "data_type": "string" },
    {
      "column_name": "product_instance_capacity_xlarge",
      "data_type": "string"
    },
    {
      "column_name": "product_instance_capacity10xlarge",
      "data_type": "string"
    },
    {
      "column_name": "product_instance_capacity16xlarge",
      "data_type": "string"
    },
    {
      "column_name": "product_instance_capacity2xlarge",
      "data_type": "string"
    },
    {
      "column_name": "product_instance_capacity4xlarge",
      "data_type": "string"
    },
    {
      "column_name": "product_instance_capacity8xlarge",
      "data_type": "string"
    },
    { "column_name": "product_instance_family", "data_type": "string" },
    { "column_name": "product_instance_function", "data_type": "string" },
    { "column_name": "product_instance_type_family", "data_type": "string" },
    { "column_name": "product_instance_type", "data_type": "string" },
    { "column_name": "product_instance", "data_type": "string" },
    { "column_name": "product_intel_avx_available", "data_type": "string" },
    { "column_name": "product_intel_avx2_available", "data_type": "string" },
    { "column_name": "product_intel_turbo_available", "data_type": "string" },
    { "column_name": "product_io", "data_type": "string" },
    { "column_name": "product_jobnshipp", "data_type": "string" },
    { "column_name": "product_launch_support", "data_type": "string" },
    { "column_name": "product_license_model", "data_type": "string" },
    { "column_name": "product_license_type", "data_type": "string" },
    { "column_name": "product_license", "data_type": "string" },
    { "column_name": "product_line_type", "data_type": "string" },
    { "column_name": "product_location_type", "data_type": "string" },
    { "column_name": "product_location", "data_type": "string" },
    { "column_name": "product_logs_source", "data_type": "string" },
    { "column_name": "product_logs_type", "data_type": "string" },
    { "column_name": "product_mailbox_storage", "data_type": "string" },
    {
      "column_name": "product_max_iops_burst_performance",
      "data_type": "string"
    },
    { "column_name": "product_max_iopsvolume", "data_type": "string" },
    { "column_name": "product_max_throughputvolume", "data_type": "string" },
    { "column_name": "product_max_volume_size", "data_type": "string" },
    { "column_name": "product_maximum_capacity", "data_type": "string" },
    {
      "column_name": "product_maximum_extended_storage",
      "data_type": "string"
    },
    { "column_name": "product_maximum_storage_volume", "data_type": "string" },
    { "column_name": "product_memory_gib", "data_type": "string" },
    { "column_name": "product_memory", "data_type": "string" },
    { "column_name": "product_memorytype", "data_type": "string" },
    {
      "column_name": "product_message_delivery_frequency",
      "data_type": "string"
    },
    { "column_name": "product_message_delivery_order", "data_type": "string" },
    { "column_name": "product_min_volume_size", "data_type": "string" },
    { "column_name": "product_minimum_storage_volume", "data_type": "string" },
    { "column_name": "product_network_performance", "data_type": "string" },
    {
      "column_name": "product_normalization_size_factor",
      "data_type": "string"
    },
    { "column_name": "product_offer", "data_type": "string" },
    { "column_name": "product_operating_system", "data_type": "string" },
    { "column_name": "product_operation", "data_type": "string" },
    { "column_name": "product_operations_support", "data_type": "string" },
    { "column_name": "product_origin", "data_type": "string" },
    { "column_name": "product_os_license_model", "data_type": "string" },
    { "column_name": "product_output_mode", "data_type": "string" },
    { "column_name": "product_overage_type", "data_type": "string" },
    { "column_name": "product_physical_cores", "data_type": "string" },
    { "column_name": "product_physical_cpu", "data_type": "string" },
    { "column_name": "product_physical_gpu", "data_type": "string" },
    { "column_name": "product_physical_processor", "data_type": "string" },
    { "column_name": "product_plan_type", "data_type": "string" },
    { "column_name": "product_port_speed", "data_type": "string" },
    { "column_name": "product_pre_installed_sw", "data_type": "string" },
    { "column_name": "product_proactive_guidance", "data_type": "string" },
    { "column_name": "product_processor_architecture", "data_type": "string" },
    { "column_name": "product_processor_features", "data_type": "string" },
    { "column_name": "product_product_family", "data_type": "string" },
    { "column_name": "product_product_name", "data_type": "string" },
    {
      "column_name": "product_programmatic_case_management",
      "data_type": "string"
    },
    { "column_name": "product_protocol", "data_type": "string" },
    { "column_name": "product_provisioned", "data_type": "string" },
    { "column_name": "product_queue_type", "data_type": "string" },
    { "column_name": "product_recipient", "data_type": "string" },
    { "column_name": "product_region", "data_type": "string" },
    { "column_name": "product_release_type", "data_type": "string" },
    { "column_name": "product_request_description", "data_type": "string" },
    { "column_name": "product_request_type", "data_type": "string" },
    { "column_name": "product_resource_endpoint", "data_type": "string" },
    { "column_name": "product_resource_type", "data_type": "string" },
    { "column_name": "product_rootvolume", "data_type": "string" },
    { "column_name": "product_routing_target", "data_type": "string" },
    { "column_name": "product_routing_type", "data_type": "string" },
    { "column_name": "product_running_mode", "data_type": "string" },
    { "column_name": "product_servicecode", "data_type": "string" },
    { "column_name": "product_servicename", "data_type": "string" },
    { "column_name": "product_sku", "data_type": "string" },
    { "column_name": "product_snowball_type", "data_type": "string" },
    { "column_name": "product_software_included", "data_type": "string" },
    { "column_name": "product_software_type", "data_type": "string" },
    {
      "column_name": "product_standard_storage_retention_included",
      "data_type": "string"
    },
    { "column_name": "product_steps", "data_type": "string" },
    { "column_name": "product_storage_class", "data_type": "string" },
    { "column_name": "product_storage_description", "data_type": "string" },
    { "column_name": "product_storage_family", "data_type": "string" },
    { "column_name": "product_storage_media", "data_type": "string" },
    { "column_name": "product_storage_type", "data_type": "string" },
    { "column_name": "product_storage", "data_type": "string" },
    { "column_name": "product_subscription_type", "data_type": "string" },
    { "column_name": "product_supported_modes", "data_type": "string" },
    { "column_name": "product_technical_support", "data_type": "string" },
    { "column_name": "product_tenancy", "data_type": "string" },
    {
      "column_name": "product_thirdparty_software_support",
      "data_type": "string"
    },
    { "column_name": "product_throughput_class", "data_type": "string" },
    { "column_name": "product_tiertype", "data_type": "string" },
    { "column_name": "product_to_location_type", "data_type": "string" },
    { "column_name": "product_to_location", "data_type": "string" },
    { "column_name": "product_training", "data_type": "string" },
    { "column_name": "product_transcoding_result", "data_type": "string" },
    { "column_name": "product_transfer_type", "data_type": "string" },
    { "column_name": "product_type", "data_type": "string" },
    { "column_name": "product_usage_family", "data_type": "string" },
    { "column_name": "product_usagetype", "data_type": "string" },
    { "column_name": "product_uservolume", "data_type": "string" },
    { "column_name": "product_vcpu", "data_type": "string" },
    { "column_name": "product_version", "data_type": "string" },
    { "column_name": "product_video_memory_gib", "data_type": "string" },
    { "column_name": "product_video_resolution", "data_type": "string" },
    { "column_name": "product_virtual_interface_type", "data_type": "string" },
    { "column_name": "product_volume_type", "data_type": "string" },
    { "column_name": "product_who_can_open_cases", "data_type": "string" },
    { "column_name": "product_with_active_users", "data_type": "string" },
    {
      "column_name": "reservation_amortized_upfront_cost_for_usage",
      "data_type": "double"
    },
    {
      "column_name": "reservation_amortized_upfront_fee_for_billing_period",
      "data_type": "double"
    },
    { "column_name": "reservation_availability_zone", "data_type": "string" },
    { "column_name": "reservation_effective_cost", "data_type": "double" },
    { "column_name": "reservation_end_time", "data_type": "string" },
    { "column_name": "reservation_modification_status", "data_type": "string" },
    {
      "column_name": "reservation_normalized_units_per_reservation",
      "data_type": "string"
    },
    {
      "column_name": "reservation_number_of_reservations",
      "data_type": "string"
    },
    {
      "column_name": "reservation_recurring_fee_for_usage",
      "data_type": "double"
    },
    { "column_name": "reservation_reservation_a_r_n", "data_type": "string" },
    { "column_name": "reservation_start_time", "data_type": "string" },
    { "column_name": "reservation_subscription_id", "data_type": "string" },
    {
      "column_name": "reservation_total_reserved_normalized_units",
      "data_type": "string"
    },
    {
      "column_name": "reservation_total_reserved_units",
      "data_type": "string"
    },
    {
      "column_name": "reservation_units_per_reservation",
      "data_type": "string"
    },
    {
      "column_name": "reservation_unused_amortized_upfront_fee_for_billing_period",
      "data_type": "double"
    },
    {
      "column_name": "reservation_unused_normalized_unit_quantity",
      "data_type": "double"
    },
    { "column_name": "reservation_unused_quantity", "data_type": "double" },
    {
      "column_name": "reservation_unused_recurring_fee",
      "data_type": "double"
    },
    { "column_name": "reservation_upfront_value", "data_type": "double" },
    {
      "column_name": "resource_tags_aws_autoscaling_group_name",
      "data_type": "string"
    },
    {
      "column_name": "resource_tags_aws_cloudformation_logical_id",
      "data_type": "string"
    },
    {
      "column_name": "resource_tags_aws_cloudformation_stack_id",
      "data_type": "string"
    },
    {
      "column_name": "resource_tags_aws_cloudformation_stack_name",
      "data_type": "string"
    },
    { "column_name": "resource_tags_aws_created_by", "data_type": "string" },
    { "column_name": "identity_line_item_id", "data_type": "string" }
  ]
}
```
