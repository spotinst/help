# CI Dashboards Data Joins

This document describes how to perform data joins within Cost Intelligence dashboards. The join data feature enables users to create a new dataset from multiple data sources. The joins can be made with datasets that have at least one column in common. In the example below, Cost Intelligence has joined Spot data set with the Datadog dataset where the join is made on the organization ID. 

## Dashboard Data Joins 

Complete the following steps: 

1. In the left main menu, click **Cost Intelligence**. The Dashboard page opens. 

![ci-dshb-data-joins-1](https://github.com/spotinst/help/assets/106514736/4d78b66e-db8e-42f7-aa60-5d4df85824a6)

2. To upload a dataset to be joined, click **Actions** and **Manage Files** in the drop-down menu. 
 
![ci-dshb-data-joins-2](https://github.com/spotinst/help/assets/106514736/119a7360-f083-4329-a3ba-af88d188e3e8)

3. Click **Create New Dataset**. 

![ci-dshb-data-joins-3](https://github.com/spotinst/help/assets/106514736/2b07b37b-d479-4a42-9cf5-d50356c4691f)
 
4. Choose a csv file to join. When the csv file is uploaded, the next screen shows the column names and the column type. 

![ci-dshb-data-joins-4](https://github.com/spotinst/help/assets/106514736/76502f6a-4f0f-485a-98eb-0687c8820832)

5. Click the ⋮ icon on the dataset name to be joined and select **Join to another data source**. Select the data source and dataset to be joined. 

6. Select the **Join Type** based on the outcome required and the key. The key in the dropdown should be the common column between the two datasets for the join to work.  

![ci-dshb-data-joins-5](https://github.com/spotinst/help/assets/106514736/c715e5ab-0f45-44e8-a184-3b18457c4edb)

7. Click **Save**. 

## Load Dataset 

The join type indicates how the newly created dataset will appear. The following join types are supported: 

* Left Join - Uses rows of data from the left table and the matching rows from the right table. 
* Full Join - Uses all records in all joined tables. 
* Inner Join - Uses only the rows of data that are common in the joined data. Rows that have no commonality between datasets are excluded. 
* Right Join - Same as the left join, it uses rows of data from the right table and the matching rows from the left table. 

![ci-dshb-data-joins-6](https://github.com/spotinst/help/assets/106514736/68fb7ad4-bf40-473e-8319-ac8ef0d71ec7)

1. Click **Load Dataset**. 

![ci-dshb-data-joins-7](https://github.com/spotinst/help/assets/106514736/0fd48179-8929-4188-8c60-5b23ad8637a8)

2. Click the **Design** tab to view the structure of the data and how the joins are made. 

![ci-dshb-data-joins-8](https://github.com/spotinst/help/assets/106514736/8acb5ac3-e799-4619-8538-6005fb7a28fc)

3. Once the dataset has finished loading, click **Back to Datasets** on the newly joined dataset is now available. You can now utilize this dataset to create and enhance new and existing Dashboards. 

## Appendix: Common Billing Data Columns to Join 

Cost Intelligence and Billing Engine data follows the [FinOps Foundation’s FOCUS v1.0 spec](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/tree/v1.0-preview-cr) where applicable. Below are key examples of data formats and likely columns to join on. 

**Date Formats**: All dates are represented in UTC (Coordinated Universal Time) in ISO 8601 standard format ('YYYY-MM-DDTHH:mm:ssZ'). 

 
| Column Name         | Description                                                                                                                                                                                                                                                     | Format                 |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| BillingPeriodStart  | Billing Period Start represents the start date and time of the billing period. This differs from ChargePeriodStart, as it represents the start of the full billing period and is unrelated to the day the usage row is published.                               | UTC Date Time Format.  |
| BillingPeriodEnd    | Billing Period End represents the start date and time of the billing period. This differs from ChargePeriodEnd, as it represents the end of the full billing period and is unrelated to the day the usage row is published.                                     | UTC Date Time Format.  |
| ChargePeriodStart   | Charge Period Start represents the start date and time of the charge period. This differs from BillingPeriodStart as it should align with the date that the charges are published to the usage row.                                                             | UTC Date Time Format.  |
| ChargePeriodEnd     | Charge Period End represents the end date and time of the charge period. This differs from BillingPeriodEnd as it should align with the date that the charges are published to the usage row.                                                                   | UTC Date Time Format.  |
| Region              | A Region is a provider assigned identifier for an isolated geographic area where a resource is provisioned in, or a service is provided from. Region is commonly used for scenarios like analyzing cost and unit prices based on where resources are deployed.  | String Format          |

* SKU ID 
* Provider Tags 
* Resource Type 
