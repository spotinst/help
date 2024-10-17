# Dashboards    

## Setting Default Dashboard for the Org  

Users with the Cost Intelligence Admin permissions can determine the organization’s default dashboard for all users.  The dashboard page has an action bar at the top that provides the options to edit, clone, create, delete, manage files, and select default dashboards.     

## Create a Dashboard  

Users with Cost Intelligence Administrator permissions or Creator Policy permissions can create new dashboards for Cost Intelligence. 

To create a dashboard:   

1. In the Dashboard page, click **Actions** > **+ Create**.    

![dashboard-7](https://github.com/user-attachments/assets/a4c06695-1f6b-497a-9311-3acae5d9197e)

2. Enter a name for the dashboard and click **Publish Dashboard**. This publishes the dashboard and makes it available to all users in the organization.

NOTE: If you do not publish the dashboard, the newly created dashboard will display as an empty dashboard in the list of available dashboards.  

## Set Default Dashboard for an Organization

Cost Intelligence Dashboards come with a default dashboard that is set for all users under an organization.  

Complete the following steps to set the default dashboard.

1. In the _Actions_ drop down menu, click **Select Default Dashboard**.
2. In the _Change Dashboard_ window, select the default dashboard you want to set.

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

NOTE: If you do not publish the dashboard, the newly cloned dashboard will display in the list of available dashboards.  

![dashboard-6](https://github.com/spotinst/help/assets/106514736/443f9293-861a-4ec1-943f-32d4f053099c)   

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

  
