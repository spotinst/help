<meta name="robots" content="noindex">

# Dashboard

The Billing Engine Dashboard page provides insights into various cost metrics, including the total cost to providers and cost breakdowns by different categories during a time period of your choice.

To get started, go to the Spot console and click **Billing Engine** > **Dashboard**.

This dashboard presents data taken from the cloud service providers.

The data on the page is summarized by cloud service provider. If you have multiple accounts connected to Spot, choose the cloud service provider you want to see (AWS, Azure, or GCP).

![dashboard-1](https://github.com/user-attachments/assets/c8ac1f2e-a1cf-40f8-b677-1090c2541821)
 
## What can you do in the dashboard?
* View a high-level summary of cost data upon your first entry to the Billing Engine console. 
* Focus on a provider and specific sub-accounts.
* [Filter](billing-engine/tutorials/dashboard/?id=filters) data.
* Create [asset groups](billing-engine/tutorials/dashboard/?id=asset-groups).

### Filters 

You can edit, add, and remove filters in a chart. 

![dashboard-2](https://github.com/user-attachments/assets/fb93341d-e9a0-4159-9fb9-4f36170891a0)

To filter a chart: 

1. Click the filter icon at the top right of the chart.
2. Select the filter to apply to the chart. 
3. Click **Apply**.  

#### Add, Edit or Remove Filters

To add filters to the chart, hover over the filter icon and click **Add Filter**. Select the filter.  

To edit the filters, hover over the filter icon and click the menu icon at the top right of the filter window.  Click **Edit** and enter the columns and parameters of the filter. 

To remove filters in the chart, hover over the filter icon and click the menu icon at the top right of the filter window.  Click **Remove**. This removes the filters from the chart. 

### Asset Groups

Asset groups are a set of defined filters that are automatically applied to different pages to view and manage data collectively. After you’ve set up an asset group, you can use it in [Billing Engine](https://docs.spot.io/billing-engine/), [Cost Intelligence](https://docs.spot.io/cost-intelligence/), and [Spot Security](https://docs.spot.io/spot-security/).

![dashboard-3](https://github.com/user-attachments/assets/e4b39816-0337-4e9b-b798-de7c3308eea4)

The icons displayed next to **All Product Filters** indicate that the selected filters can be applied to the Cost Intelligence pages, Billing Engine pages, and Spot Security pages.

The assets you see in a group will be different if:

* The accounts have been onboarded to all or just some of the products. For example, you may have onboarded an account to Spot Security and Cost Intelligence but not to Billing Engine.

* The filters are available for that product. For example, in Spot Security, you can also filter services and regions. When you view that same asset group in Billing Engine or Cost Intelligence, which do not use the service and region filters, you will see all assets for the providers and accounts selected.

#### Create an Asset Group

1. Go to **Billing Engine** > **Dashboard** > **Create Asset Group**.
2. Give the asset group a name (and mark as default asset group if needed).
3. Filter the cloud provider, account, service, and region.
4. You can edit the filters and then click **Save**.

#### Edit or Delete an Asset Group

To edit an asset group, hover over a group in the list and click **Edit**.

To delete an asset group, hover over a group in the list and click **Edit** > **Delete Asset Group**.

