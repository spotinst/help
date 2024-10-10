# Ocean Insights Data Integration

Ocean exports custom data files into one of Cost Intelligence’s S3 buckets daily. That data is then joined with the Billing Engine data to create a new dataset. Using that dataset, Cost Intelligence builds dashboards and charts.

## Prerequisites
* Connect to [Ocean Insights](ocean/getting-started/insights). 
* A Billing Engine account. 

## Request Integration and Export Data
To request the integration and export of data from Ocean to Cost Intelligence, contact Spot’s support team to enable the integration and turn on the data export to the designated S3 bucket.

When the integration is enabled, the data is automatically exported, joined, and synchronized in Cost Intelligence. A managed dashboard with pre-built charts, designed to utilize Ocean data, will be created. 

The integration exports data from Ocean to an S3 bucket and joins it with Billing Engine data to provide cost insights.

## Utilize the Ocean Data Set
You can create charts by configuring the data set options. When you create or edit a dashboard, you can choose the Ocean data set and you can create additional charts on other dashboards.

1. [Create or edit](cost-intelligence/tutorials/dashboard/) a dashboard.
2. Choose the Ocean dataset on the left panel. You can now view the collected and joined data to create that dataset. 
3. Create a chart. 

