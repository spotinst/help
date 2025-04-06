<meta name="robots" content="noindex">

# Cost Intelligence Dashboards    

You can set the organization's default dashboard for everyone in an organization if you have these permissions:

* Cost Intelligence Administrator
* Creator Policy 

The dashboard page has an action menu with options to edit, clone, create, delete, manage files, and select default dashboards.

When your account is successfully configured in Cost Intelligence, you can create dashboards and charts in the datasets. 

<details>
   <summary markdown="span">Click to view account types</summary>

* Billing - Created from the Billing Engine and is available when you connect a billing account to Billing Engine. Data is synced with Billing Engine once a day.

* Best Practice Check - Created from Cost Intelligence and is available when you onboard an account with inventory-related data. Provides data related to all best practice checks available for cost intelligence. 

    * AWS → Billing account and/or a linked account 
    * Azure → subscription

    
Note: This does not include data from Spot Security Risk Assessment checks.

* Inventory - Created from Cost Intelligence and is available when you onboard an account with inventory-related data. Provides high-level inventory-related data for onboarded accounts. 

    * AWS → Billing account and/or a linked account 
    * Azure → subscription
    

**Note**: This does not include data from Spot Security Inventory.

 </details>


## Create a Dashboard  

Users with Cost Intelligence Administrator permissions or Creator Policy permissions can create new dashboards for Cost Intelligence. 

To create a dashboard:   

1. In the Dashboard page, click **Actions** > **+ Create**.    

![dashboard-7](https://github.com/user-attachments/assets/a4c06695-1f6b-497a-9311-3acae5d9197e)

2. Enter a name for the dashboard and click **Publish Dashboard**. This publishes the dashboard and makes it available to all users in the organization.

**Note**: If you do not publish the dashboard, the newly created dashboard will display as an empty dashboard in the list of available dashboards.  

### Smart Analyzer

The Smart Analyzer feature connects your chart data to NetApp's ChatGPT models, enabling you to gain deeper insights into your data through natural language interactions. This feature allows you to ask questions and view the summary answer along with the underlying logic and methodology used to generate the analysis results.  

To analyze a chart:

1. Click the robot icon above the chart you want to analyze for detailed insights and automated recommendations.
2. In the <i>Smart Analyzer</i> window, you can:

![image](https://github.com/user-attachments/assets/06f259fd-9643-4736-9eef-a3d91cf6bc06)

* Select a question from the generated list based on the chart's data.
* Enter a question.

The Smart Analyzer is enabled for all users and applies to all relevant charts within the Cost Intelligence dashboard.  

The Smart Analyzer does not alter or modify datasets. It operates solely on the data provided in the dashboard charts. 

#### Data Protection 

Your data is strictly protected and siloed. It is important to note that the data used for analysis is not utilized to train the ChatGPT models. This ensures that your data remains confidential and is not used for purposes other than generating insights within the Smart Analyzer feature.

## Set Default Dashboard for an Organization

Cost Intelligence Dashboards come with a default dashboard that is set for all users under an organization.  

Complete the following steps to set the default dashboard.

1. In the <i>Actions</i> drop down menu, click **Select Default Dashboard**.
2. In the <i>Change Dashboard</i> window, select the default dashboard you want to set.

## Edit an Existing Dashboard    

Users with admin permissions can edit all organization-level dashboards that are not system-managed. If you want to modify a system-managed dashboard, you can clone and modify it.

![dashboard-4](https://github.com/spotinst/help/assets/106514736/72c9a54a-5292-47cd-b845-8097e802ad27)   

The Edit Dashboard is the interface where you can edit the organization-level dashboards, and it consists of the following sections (from the left to right):  

![dashboard-5](https://github.com/spotinst/help/assets/106514736/762309f4-7860-4eb3-b23d-c6e2f3c3ec56) 

* **Add description**: In this field, enter a description of the dashboard. This is the only place where the description is shown. Dashboard names do not need to be unique.  
* **The center panel**: The center panel is a canvas where you can place charts, panels, text, images, and filters. Anything placed within this canvas will be displayed in the final dashboard.  
* **Add Chart**: In this field, you can create a panel using the existing datasets. The composer bar contains various functionalities to help you build and customize the dashboard. You can add a chart, text, images, and page filters.   
* **Discard Dashboard**: To discard changes that you’ve made and have not saved/published yet, click **Discard Dashboard**.   
* **Publish Dashboard**: To publish changes to the dashboard, click **Publish Dashboard**.  
* **Data**: This drop-down menu lists previously built drag-and-drop panels and charts for each dataset that is available to the user. This is also a way to duplicate charts between dashboards. All charts are available here for that specific data set. Find the desired data set and chart, and drag it onto the canvas.  

## Clone a Dashboard   

Users with Cost Intelligence Administrator permissions or Creator Policy permissions can clone existing dashboards, including any system-managed dashboards. 

To clone a dashboard:   

1. In the Dashboard page, **Actions** > **Clone**.  
2. Modify the dashboard as desired.  
3. To finalize the cloned dashboard, enter a new name. Then click the **Publish Dashboard** button.   

**Note**: If you do not publish the dashboard, the newly cloned dashboard will display in the list of available dashboards.  
![dashboard-6](https://github.com/spotinst/help/assets/106514736/443f9293-861a-4ec1-943f-32d4f053099c)

## Managed Dashboards

Managed Dashboards are pre-built dashboards created by Cost Intelligence when data is available. These dashboards are designed to facilitate a quick start within the dashboards, focusing on specific use cases. They also serve as configuration references, enabling you to become familiar with them quickly.

* **Cost Intelligence**: Highlights broad cost and resource utilization using billing and inventory data.

* **Best Practice Checks**: Provides trend analysis across the best practices tool. You can visualize how the BPCs progress against various checks and potentially spot erratic resource behavior/utilization.

* **Compute**: Highlights compute-resource utilization and compute-focused best practice checks.

* **Inventory**: This dashboard provides a high-level overview of inventory utilization for both the current date and trends over time.

* **Resource Optimization**: Focuses on best practice checks to reduce costs by identifying underutilized or idle resources. 

* **Cost Intelligence Anomaly Metrics/Threshold Metrics**: Provides a suite of metrics to be utilized alongside CI Workflow Builder to create various alerts.

## Upload a CSV/Create a Dataset    

With Cost Intelligence Dashboards, you can upload your data directly into the product to create customized data views that enable you to make better decisions. 

To upload a CSV:    

1. In the Dashboard page, click **Actions** > **Manage Files**.  
2. Click **Create New Dataset +** to begin the process of uploading a CSV file and creating a new dataset. When the upload is completed, you can view information about the specific dataset and gather insights.

![dashboard-8](https://github.com/user-attachments/assets/910dc425-5e39-4b6f-9d73-06d064f1efce)

* You can rename the dataset. This page contains important metadata about it, such as its status, last load, number of columns, and number of records.  
* You can manage any changes made since the last save by discarding changes, saving changes, or even reloading the dataset by re-uploading the CSV file. 
* You can manage specific details of the uploaded dataset. You can:  
  - Determine if the column should be read and stored into the dataset.  
  - Determine if the column is to be used for building visualizations.   
  - Manage column name.  
  - Manage column type.  
  - Manage the display format, such as DateTime.  
  - Manage any unique transformations.    

You can also edit connections, join datasets, and more by clicking the menu icon next to the dataset name.  

![datasets-3](https://github.com/spotinst/help/assets/106514736/170e83b8-0e10-4982-a727-61934572eedb)   

## Manage Datasets  

To manage existing datasets, click **Actions** > **Manage Files**.  

You can refresh an existing dataset by editing and reuploading the file.

To edit a file, hover over the menu icon of the dataset name, and click **Edit**.

![dashboard-9](https://github.com/user-attachments/assets/baed5d91-9eb6-49f3-9cd5-ea4ba1241653)
  
To refresh an existing dataset, while editing the dataset, click **Reload Dataset** at the top right to reload the CSV file and refresh the data in the application. 

To delete a dataset, hover over the menu icon of the dataset name, and click **Delete**. **This action removes any charts from all dashboards that contain this dataset**. 

## Asset Groups

Asset groups are a set of defined filters that are automatically applied to different pages to view and manage data collectively. After you’ve set up an asset group, you can use it in [Billing Engine](billing-engine/), [Cost Intelligence](cost-intelligence/), and [Spot Security](spot-security/).

![dashboard-asset-group](https://github.com/user-attachments/assets/7546c0f8-1461-4dcf-afc5-a826531fa78f) 

The icons displayed next to **All Product Filters** indicate that the selected filters can be applied to the Cost Intelligence pages, Billing Engine pages, and Spot Security pages.

The assets you see in a group will be different if:

* The accounts have been onboarded to all or just some of the products. For example, you may have onboarded an account to Spot Security and Cost Intelligence but not to Billing Engine.

* The filters are available for that product. For example, in Spot Security, you can also filter services and regions. When you view that same asset group in Billing Engine or Cost Intelligence, which do not use the service and region filters, you will see all assets for the providers and accounts selected.

## Create an Asset Group

1. Go to **Cost Intelligence** > **Dashboard** > **Create Asset Group**.
2. Give the asset group a name (and mark as default asset group if needed).
3. Filter the cloud provider, account, service, and region.
4. You can edit the filters and then click **Save**.

## Edit or Delete an Asset Group

To edit an asset group, hover over a group in the list and click **Edit**.

To delete an asset group, hover over a group in the list and click **Edit** > **Delete Asset Group**.
  
