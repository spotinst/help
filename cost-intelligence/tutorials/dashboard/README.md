# Dashboards    

## Setting Default Dashboard for the Org  

Users with the Cost Intelligence Admin permissions can determine the organization’s default dashboard for all users.  The dashboard page has an action bar at the top that provides the options to edit, clone, create, delete, manage files, and select default dashboards.     

## Create a New Dashboard  

Users with the correct permissions will have the ability to create new dashboards for Cost Intelligence. 

Complete the following steps to create a new dashboard.   

1. In the Dashboard page, at the top right of the page, click **+ Create**.    

![dashboard-3](https://github.com/spotinst/help/assets/106514736/8c947153-d95b-49e9-9e98-6323d4005800) 

2. Modify the dashboard as desired.  
3. To finalize the dashboard, enter a new name.   
4. Click **Publish Dashboard**. This publishes the dashboard and makes it available to all users in the organization.     

NOTE: If you do not publish the dashboard, the newly created dashboard will display in the list of available dashboards as an empty dashboard.    

## Setting Default Dashboard for an Organization

Cost Intelligence Dashboards come with a default dashboard that is set for all users under an organization.  

Complete the following steps to set the default dashboard.

1. In the left main tree, click **Cost Intelligence** and click **Dashboard**.   
2. In the Change Dashboard drop-down menu, select the dashboard you want to set as the default.  

![dashboard-1](https://github.com/spotinst/help/assets/106514736/724f724f-5013-49bf-8e76-0b6388fb3669) 

3. In the action bar, click **Select Default Dashboard**, and confirm the action. The selected dashboard is the default dashboard for all the users in this organization.    

![dashboard-2](https://github.com/spotinst/help/assets/106514736/ac8a9589-4eb3-48b7-b1f3-764759296286)  

## Edit an Existing Dashboard    

Users with the correct permissions will have the ability to edit all organization-level dashboards that are not system managed dashboards. If you want to modify a system managed dashboard, you can clone it and modify it.  

![dashboard-4](https://github.com/spotinst/help/assets/106514736/72c9a54a-5292-47cd-b845-8097e802ad27)   

The Edit Dashboard is the interface where you can edit the organization-level dashboards and it consists of the following sections (from the left to right):  

![dashboard-5](https://github.com/spotinst/help/assets/106514736/762309f4-7860-4eb3-b23d-c6e2f3c3ec56) 

* **Add description**: In this field you set a description of the dashboard. This is the only place that description is shown. Dashboard names do not need to be unique.  
* **The center panel**: The center panel is a canvas where you can place charts, panels, text, images, and filters. Anything placed within this canvas will be displayed in the final dashboard.  
* **Add Chart**: In this field you can build and add a new panel from scratch using the existing datasets. The composer bar contains a variety of functionalities to help build and customize the dashboard. You can add a new chart, a new text element, images, and page filters.   
* **Discard Dashboard**: To discard changes that you’ve made and have not saved/published yet, click Discard Dashboard.   
* **Publish Dashboard**: To publish any changes to the dashboard, click Publish Dashboard.  
* **Data**: This drop-down menu lists previously built drag-and-drop panels and charts for each dataset that is available to the user.    

This is also a way to duplicate charts between dashboards. All charts are available here for that specific data set. Find the desired data set and chart, and drag it onto the canvas.  

## Clone a Dashboard   

Users with permissions will have the ability to clone existing dashboards, including any system managed dashboards. 

Complete the following steps to clone a dashboard.   

1. In the Dashboard page, click **Clone** in the action bar.  
2. Modify the dashboard as desired.  
3. To finalize the cloned dashboard, enter a new name. Then click the **Publish Dashboard** button.   

NOTE: If you do not publish the dashboard, the newly cloned dashboard will display in the list of available dashboards.  

![dashboard-6](https://github.com/spotinst/help/assets/106514736/443f9293-861a-4ec1-943f-32d4f053099c)   

## Uploading a CSV/Create a Dataset    

With Cost Intelligence Dashboards, you can upload your data directly into the product to create customized data views that enable you to make better decisions. Complete the following steps to upload a CSV.    

1. In the Dashboard page, click **Manage Files** in the action bar.  
2. Click **Create New Dataset +** to begin the process of uploading a CSV file and creating a new dataset.  

![datasets-1](https://github.com/spotinst/help/assets/106514736/9aa8bcaa-ee99-4792-8027-9dc19999b4e8) 

3. When the upload has been completed, you’ll see a page similar to the page displayed below. It provides information regarding the specific dataset, enabling you to gather insights.     

![datasets-2](https://github.com/spotinst/help/assets/106514736/34a2d45c-c669-48fe-b1a0-a87cd3d80fd2) 

* You can rename the dataset. You’ll also find important metadata regarding this dataset here, such as status, last load, number of columns, number of records.  
* You can manage any changes made since the last save by discarding changes, saving changes, or even reloading the dataset by re-uploading the CSV file. 
* You can manage specific details of the uploaded dataset. You can:  
  - Determine if the column should be read and stored into the dataset.  
  - Determine if the column is to be used for building visualizations.   
  - Manage column name.  
  - Manage column type.  
  - Manage the display format, such as DateTime.  
  - Manage any unique transformations.    

You can perform additional dataset functions such as editing connections, joining datasets, etc by clicking the following icon.   

![datasets-3](https://github.com/spotinst/help/assets/106514736/170e83b8-0e10-4982-a727-61934572eedb)   

## Managing Datasets  

To manage existing datasets, click the **Manage Files** page via the Dashboard action bar.  

You can quickly determine which datasets are active and being utilized vs datasets that are still in draft. You can also refresh an existing dataset by editing a dataset and simply reuploading the file.  

![datasets-4](https://github.com/spotinst/help/assets/106514736/3f94acd9-7c77-443d-9a15-a7caac69aca3) 

To edit a file, hover over the three dots icon to open a sub menu and select **Edit**.  

![datasets-5](https://github.com/spotinst/help/assets/106514736/4d1af696-2634-4eae-9ec3-16eb3d8c377c) 
  
To refresh an existing dataset, while editing the dataset, click **Reload Dataset** (#2 in the image above) to go through the process of reloading the CSV file and refreshing the data in the application. 

To delete a dataset, hover over the icon of three dots on the Manage Files page and select the delete option. **This action removes any charts from all dashboards that contain this dataset**. 

## Joining Data Sets  

Cost Intelligence dashboards enable you to connect two datasets, granting you flexibility to create charts according to your specific requirements. 

To connect a CSV based dataset to an existing dataset, complete the following steps: 

1. In the Edit Dataset page, click the icon of three dots to open a menu and select **Join to Another Data Source**.  

![datasets-3](https://github.com/spotinst/help/assets/106514736/6737aad2-f308-4421-98a1-f923076cbfb5) 

This opens a new modal that lists existing datasets (both user-generated, and system generated) that you can join with. Select the dataset you want to connect to.    

![datasets-6](https://github.com/spotinst/help/assets/106514736/f0371615-2e7d-4c7a-8174-0221d4b9dfd6)   

You can choose how you want to join your data together by linking specific columns together for each dataset.    

![datasets-7](https://github.com/spotinst/help/assets/106514736/5e2ba217-8ad2-472e-bec2-0b936fe68e77) 

The Edit Dataset page will then be updated to display the joined relationship.    

![datasets-8](https://github.com/spotinst/help/assets/106514736/799004c9-34ae-489e-9cbc-f19a44f69546) 

  
