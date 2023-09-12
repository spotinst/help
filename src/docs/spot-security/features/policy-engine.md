# Policy Engine

The Policy Engine feature is a powerful tool that is designed to enhance the security of your cloud infrastructure by detecting various types of access to assets. It helps identify external, internal, and public access, ensuring proper access control and minimizing potential security risks. Additionally, the Policy Engine can detect duplicates within an IAM policy or between IAM policies, streamlining policy management and maintaining policy consistency.

## View Policy Engine

To view the policy engine for your organisation complete the following steps:

1. In the left main menu in the Spot console, click **Spot Security** and **Topology**.
2. Select the **Policy Engine Map** tab.

## Policy Engine Maps

The Policy Engine Maps feature allows you to view two types of maps: an Access Map and a Duplicate Map.

### Access Map

The Access Map provides a comprehensive scan of your IAM policies and access configurations to identify external, internal, and public access. Its goal is to ensure that your cloud assets are properly protected and accessed only by authorized entities.  

<img src="/spot-security/_media/policy-engine-1.png" />

To explore the Access Map, double-click each asset to open the related policy. Double-clicking a policy displays its statements and provides policy information, such as the policy resource, policy action, and the account details.

### Duplicate Map  

The Duplicate Map feature employs intelligent algorithms to identify duplicates within a single IAM policy or between IAM policies. Resolving duplicate policies helps maintain policy clarity, reduces complexity, and ensures consistent and effective access controls.

<img src="/spot-security/_media/policy-engine-2.png" />

To explore the Duplicate Map, double-click each asset to open the related policy. Each policy may appear multiple times depending on the amount of statements that have duplicates. Double-clicking on a policy reveals all duplicate nodes. By hovering over each duplicate, you can view common elements in policy action, policy resource, and policy condition.  

If you created multiple maps, you can select any of the saved maps from the dropdown menu.

<img src="/spot-security/_media/policy-engine-3.png" />

A policy engine map can be created for different cloud accounts, regions and asset types.You can go back to a previous date to view the past status, search for specific asset names using the search keyword option as well as zoom in and out using the + and - icons.

## Create Policy Engine Maps

To create a new Policy Engine Map, complete the following steps:

1. In the left main menu in the Spot console, click **Spot Security** and **Topology**.
2. Click the **Policy Engine Map** tab.
3. In the top right corner click **Actions**, then **+ Create New Policy Engine Map**.
4. Select the type of map to be created: **Finding Access** or **Finding Duplicate Permission**.  
5. In the Choose Cloud Provider field, select a cloud provider.   
6. In the Select Account field, select the account you want to create a policy engine map for. Based on the selections, a list of assets is generated in the Asset Type and Region fields.  
7. For the Finding Access permissions, select the Access Type as one of the following: External Account, Internal Account and Public Account.  

<img src="/spot-security/_media/policy-engine-4.png" />

8. Click **Save Changes** and save it under a specific name of your choice. You can also mark a new policy engine map as default for the Policy Engine Map view in the console.  

<img src="/spot-security/_media/policy-engine-5.png" />

## Manage Policy Engine Maps

You can view the complete list of the policy engine maps that have been created by completing the following steps:

1. In the **Topology page**, click the **Policy Engine Map** tab.
2. In the top right corner click **Actions**, then **+ Manage Policy Engine Map List**.

<img src="/spot-security/_media/policy-engine-6.png" />  

In this page you can:

* **Set a default map**: You can set any map as the default that opens when the page loads.
* **Edit a map**: You can click the name of a Policy Engine Map that leads to the edit page where you can change the name of the map or remove assets.
* **Delete a map**: You can select maps using the check box and click the **Delete Policy Engine Map** to delete any map.

## What’s Next?

View more information about all of the [events](spot-security/features/events) in your network.
