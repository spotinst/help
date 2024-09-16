# Policy Engine

The Policy Engine feature is a powerful tool that is designed to enhance the security of your cloud infrastructure by detecting various types of access to assets. It helps identify external, internal, and public access, ensuring proper access control and minimizing potential security risks. Additionally, the Policy Engine can provide input to optimize the IAM Policy attached to your assets. 

## Policy Engine Maps 

The Policy Engine Maps includes the following features:  

* Finding access 
* Optimize policies. 

## View Policy Engine 

To view the policy engine for your organization, complete the following steps: 

1. In the left main menu in the Spot console, click **Spot Security** and **Topology**. 
2. Select the **Policy Engine Map** tab.

## Create Policy Engine Maps 

To create a new Policy Engine Map: 

1. In the left main menu in the Spot console, click **Spot Security** and **Topology**. 
2. Click the **Policy Engine Map** tab. 
3. In the top right click **Actions**, then **+ Create New Policy Engine Map**. 
4. Select the type of map you want to create: **Finding Access** or **Optimize Policies**. 

![policy-engine-a](https://github.com/spotinst/help/assets/106514736/c62ed9d1-2761-4f5c-b61c-7ab74171a7a2)

5. Select a cloud provider and the account you want to create a policy engine map for. 

6. The asset type and the region (and Access Type if you selected **Finding Access**) are automatically selected, and you can change them. 
7. Click **Save Changes** and enter a name to save it. You can also mark a new policy engine map as default for the Policy Engine Map view in the console. 

### Find Access 

The Finding Access feature assists you in identifying access permissions and allows you to view data related to who can perform which actions on specific assets. 

For instance, if you created a map that includes all S3 buckets associated with a particular AWS account and you want to determine which buckets a specific user can perform the "deleteobject" action on, or which AWS accounts have "deleteobject" access using an assumed role.  

To see who can perform an action on a specific asset, you can use the access map, table, and filters. The table has five sections: 

* Users: Displays which users have access to a particular asset. 
* Groups: Shows which groups have access to a specific asset. 
* Asset: Indicates which other assets can access the selected asset. 
* Accounts: Provides information on which accounts have access to the asset. 
* Others: Highlights any SAML or public access permissions associated with the asset.   

Each tab in the table provides detailed information on: 

- Who (name, account, type) can perform which action (action, effect) 
- On what asset (asset type, asset account, asset name) 
- Can access via user role or direct policy 

![policy-engine-b](https://github.com/spotinst/help/assets/106514736/c9562f62-0394-491d-a737-f01e1863db8c)

You can view the whole table, or you can use filters on each of the columns. To filter, click the filter icon at the top right. For example, if you want to delete an object, complete the following parameters:  

* In the Who section of the filter, in the Type Field, enter **user**. 
* In the Name field, enter a name. 
* In the On What section of the filter, in the Asset Name field, you can see whether the user can perform the action on any asset or not.  
* In the Can Perform section of the field, in the Action Name field, select **deleteobject**. 

![policy-engine-c](https://github.com/spotinst/help/assets/106514736/74f90440-ee20-48ab-844f-1cffb4f5ee5e)

You can use the filter to refine the table data and identify the users who have the ability to perform actions such as "getobject" and more. The filters allow you to gain insights into the specific users with the desired access permissions. 

<details>
   <summary markdown="span">View image</summary>

![policy-engine-d](https://github.com/spotinst/help/assets/106514736/9f53a7c3-ebc7-4568-b45f-e29070f64935)

</details>

You can also filter the table by clicking the assets in the map. 

### Optimize Policies  

The Optimize Policies feature employs intelligent algorithms to identify where policies can be optimized by identifying and removing duplicates, identifying excessive permissions. Resolving the highlighted insights helps maintain policy clarity, reduce complexity, and ensure consistent and effective access controls. 

#### View the Policy Map 

To use the optimized policy map, go to any policy map you created in the [Create Policy Engine Maps](spot-security/features/policy-engine?id=create-policy-engine-maps) step. Double-click each asset to open the related policy.  

#### Optimize IAM User Policies 

After you create a map for the IAM User in the Create page, the map and table will be displayed.   

If you created maps for multiple IAM users, double-click on the IAM users that you want to optimize and open the table view. The table view shows the recommendations for all the duplicate permissions and excessive permissions for the IAM User. 

<details>
   <summary markdown="span">View image</summary>

![policy-engine-e](https://github.com/spotinst/help/assets/106514736/87b9c2dd-cefa-4d16-860f-28914e871967)

</details>

To get instructions on how to optimize the policy, click **View Optimized Policy**.  

To prepare an additional policy when a new policy is created, you can detach all your existing policies and attach the new policy to the IAM user, which will move it towards the lowest access level. 

If you created multiple maps, you can select saved maps from the drop-down menu. 

<details>
   <summary markdown="span">View image</summary>

![policy-engine-g](https://github.com/spotinst/help/assets/106514736/8d15138d-2642-4704-93f2-0c066a385967) 

</details>

A policy engine map can be created for different cloud accounts, regions and asset types. You can go back to a previous date to view the past status, search for specific asset names using the search keyword option as well as zoom in and out using the + and - icons. 

## Manage Policy Engine Maps 

To view the complete list of the policy engine maps that have been created:   

1. In the Topology page, click the **Policy Engine Map** tab. 
2. In the top right corner click **Actions**, then **+ Manage Policy Engine Map** list. 

![policy-engine-h](https://github.com/spotinst/help/assets/106514736/0e7e6f4c-34fe-4d40-a619-e7c70483a0e5) 

In this page you can: 

* **Set a default map**: You can set any map as the default that opens when the page loads. 
* **Edit a map**: You can click the name of a Policy Engine Map that leads to the edit page where you can change the name of the map or remove assets. 
* **Delete a map**: You can select maps using the check box and click the **Delete Policy Engine Map** to delete a map.

