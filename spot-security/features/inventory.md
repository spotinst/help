<meta name="robots" content="noindex">

# Inventory

Spot Security provides a list of all supported assets within your cloud network. Analytics are provided to help increase your visibility. 

To view the assets, click **Spot Security** in the left main menu and click **Inventory**. 

The default filter or preset on this page is the same filter or preset that you chose on the dashboard. You can change the filters or choose a different preset from the list of presets. 

You can select the date to see inventory for a particular date. 

The inventory page is divided into two parts: 

* Overview 
* All Assets 

## Overview 

The Overview page consists of 4 sections: 

* Summary 
* Asset Trend 
* Asset Count 
* Asset Distribution Table 

The Summary section provides the following information: 

* **Total Asset**: The number of assets Spot Security detected. 
* **At Risk**:  The number of assets with at least one failing security rule. 
* **No Risk**: The number of assets with zero failing security rules. 
* **Assets Turned Risky**: The number of assets that have transitionsed from the status of No Risk to At Risk in the last 24 hours. 
* **New Assets Onboarded**: The number of new assets that have onboarded in the last 24 hours. 
* **Assets With Threats**:  The number of assets with at least one threat. 
* **Assets With Anomalies**: The number of assets with at least one anomaly. 
* **High Risk Assets**: The number of assets with at least one failing high security rule. 

![inventory-01](https://github.com/spotinst/help/assets/106514736/a5241145-05e8-45e0-b5cc-3d11b5b3e21d)

### Asset Trend

The Asset Trend graph provides the trend information according to the criteria in the following colums: Assets Scanned, At Risk and No Risk. You can view the trend of the past 7 days, 14 days or 30 days. 

<img width="1461" alt="inventory-02" src="https://github.com/spotinst/help/assets/106514736/1b7c89ef-7a3b-4e2b-9528-1d56122461c6">

### Asset Count

The Asset Count graph provides the asset count grouped by the criteria in the following columns: Region, Account Name, Asset Type, Cloud.  The count is distributed by assets at risk and assets that are at no risk. 

![inventory-03](https://github.com/spotinst/help/assets/106514736/b02b0855-5082-4149-8efa-9f19c2b98bd8)

### Asset Distribution

The asset distribution table provides a summary of assets ditstributed by the following columns: Asset Type, Cloud, Region, Account Name, and Asset Attribute. Each of the tables provides you with the information of total assets, their distribution across assets at risk and no risk, the number of assets with events, anomalies and threats. 

<img width="728" alt="inventory-04" src="https://github.com/spotinst/help/assets/106514736/4b6527cf-61ec-4720-a7d5-8119ddd48f7c">

## All Assets 

The All Assets tab provides a list of assets based on the date selected and the defined preset. For each asset, you can see the following information: 

* Asset Name 
* Asset ID 
* Asset Type such as EC2 
* Asset Attribute such as Instance, Security Group  
* Region 
* Cloud Account Name 
* Count and Severity for Failing Rules 
* Status 
* Events, Anomaly and Threats Count 
* Tags 
* VPC/VNet if relevant 
* Cloud Account ID 

![inventory-05](https://github.com/spotinst/help/assets/106514736/dfbf2a4e-33f5-4340-b3a1-89f3e7075829)

You can search for specific assets in the table by entering the asset name and asset ID. In addition, you can apply filters to view assets detected within the past 24 hours, as well as those that have recently transitioned to a risky state in the past 24 hours. 

![inventory-06](https://github.com/spotinst/help/assets/106514736/1a3cdc87-6571-4284-a973-3907f24d3462) 

You can also click the export icon to export the table.  

## What’s Next?
Learn more about Spot Security [compliance](spot-security/features/compliance) with global security standards.
