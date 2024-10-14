# Security Dashboard

The Security Dashboard gives you a high-level summary of your cloud security posture. It also provides quick access to more detailed information and remediation actions.

The dashboard includes:

* Prioritized risk analysis
* Prioritized vulnerabilities
* Most common alerts
* Risks over time

You can get to the dashboard by clicking **Spot Security** > **Dashboard**. 

## Security Summary

You can see your main security statistics:
* Identified Risks: The total number of misconfigurations currently in your environment based on the filters you’ve selected. Click **View All Risks** to see a detailed list of all the misconfigurations.
* Security Rules Passed: The total number of security rules passed for all your assets.
* Resources Scanned: Under Identified Risks, Spot displays the date and time of the last scan.
* Risk Across Regions: The map shows the number of misconfigurations in each region where you have resources. Hover over the circle charts to see the number of low, medium, and high risks.
* Breakdown by Severity: A color key shows the total number of risks per severity level including high, medium, and low.

 <details>
   <summary markdown="span">View image</summary>

   <img width=450 src="https://github.com/user-attachments/assets/5447810e-da9c-4ccc-8d1b-be23fdfed8ed">

   </details>

## Filters and Asset Groups

You can use asset groups to filter findings for specific crown jewels, teams, or production accounts. After you’ve set up an asset group, you can use it in [Billing Engine](billing-engine/), [Cost Intelligence](cost-intelligence/), and [Spot Security](spot-security/).

Keep in mind, the assets you see in a group will be different if:

The accounts have been onboarded to all or just some of the products. For example, you may have onboarded an account to Spot Security and Cost Intelligence but not to Billing Engine.

The filters are available for that product. For example, in Spot Security, you can also filter on services and regions. When you view that same asset group in Billing Engine or Cost Intelligence, which do not use the service and region filters, you will see all assets for the providers and accounts selected.

To edit an asset group, hover over a group in the list and click **Edit** <img height=14 src="https://github.com/user-attachments/assets/63025d14-99a6-4e5d-9601-6beb1fce7792">.

To delete an asset group, hover over a group in the list and click **Edit** <img height=14 src="https://github.com/user-attachments/assets/63025d14-99a6-4e5d-9601-6beb1fce7792"> > **Delete Asset Group**.

 <details>
   <summary markdown="span">View image</summary>

   <img width=250 src="https://github.com/user-attachments/assets/cc60b0dc-5544-44ae-8812-2a2dda3d3ac0">

</details>

### Create an Asset Group

1. Go to **Spot Security** > **Dashboard**.
2. Filter on the cloud provider, account, service, and region, then click **Create Asset Group**.
3. Give the asset group a name (and mark as default asset group if needed).
4. You can edit the filters and then click **Save**.

## Prioritized Risk Analysis

Spot Security helps you prioritize risks by providing the prioritized actionable insights. The risks are sorted according to priorities, starting from 1 to 100 by default. Spot Security considers the asset status (internet facing), asset type, severity of the security rule, blast radius and access type (external access, public access) to calculate the priority. You can accept the risks using the Suppress action, and you will be presented with the next set of priorities. You can also filter the table, customize its columns, and export the table to a CSV file.  

 <details>
   <summary markdown="span">View image</summary>

   <img width=900 src="https://github.com/user-attachments/assets/50c7a07b-da01-4f1e-a3d3-1d4515095b6c">


   </details>

## Prioritized Vulnerability

The Prioritized Vulnerabilities table shows the vulnerability findings based on their priorities, ranging from 1 to 100 by default. Spot Security considers multiple criteria to provide you with a contextual ranking for the common vulnerabilities and exposures (CVE) and the asset. This lets you identify and address the most critical vulnerabilities first.

 <details>
   <summary markdown="span">View image</summary>

  <img src="https://github.com/spotinst/help/assets/106514736/cb2872db-e221-469e-a92d-658feacd6e88">

  </details>

Click the number of the Total Findings column of a vulnerability to view additional information, such as the OS, packages.

 <details>
   <summary markdown="span">View image</summary>

   <img src="https://github.com/spotinst/help/assets/106514736/d75dbf9d-44f0-472a-87c2-b615497082d6">

   </details>

## Most Prevalent Alerts

The shows the most common alerts detected in your environment. You can export the complete list of alerts.  

 <details>
   <summary markdown="span">View image</summary>

   <img src="/spot-security/_media/dashboard-2.png" />

   </details>

## View Trends

You can see the risk trends over time. The line represents the number of resources scanned. The bars show the number of risks per time block and are broken down in colors by severity.

 <details>
   <summary markdown="span">View image</summary>

   <img src="/spot-security/_media/spot-security-dashboard-e.png" />

   </details>
