# Connect Azure Subscription

The procedures on this page describe how to connect your Microsoft Azure subscription to Spot by Netapp. The procedure assumes that you are following the instructions in the [onboarding wizard](connect-your-cloud-provider/first-account/?id=connect-azure), have already created your Spot organization or new account, and selected Azure as your cloud provider. 

## Step 1: Connect to your Spot Account  

1. Enter an account name and click **Next**. 
 
![connect-azure-sub-1](https://github.com/spotinst/help/assets/106514736/977a62e9-ed2a-4bc0-9da4-0a0794273a48)

2. Select **Microsoft Azure** as your cloud provider. 

## Step 2: Log in to your Azure Account 
 
Click **Log in to Azure Account** and continue to the next step. 

## Step 3: Create New Registration 
 
1. In the Azure console, type **App Registration** in the search bar and click the App Registrations result that appears.  

![connect-azure-sub-2](https://github.com/spotinst/help/assets/106514736/dadaf0c3-2539-4d5f-99a0-fabbc545102b)

2. Click the **+ New registration** tab.  
 
![connect-azure-sub-3](https://github.com/spotinst/help/assets/106514736/e1769ebf-888b-43ac-9e60-f1810ae343ba)

3. In the Register Application window that opens, enter a name for the application. 

4. In the Support account types section, select **Accounts in this organizational directory only (Spotinst only - Single tenant)**. 

5. In the Redirect URI dropdown menu, select **Web** and specify: https://spot.io. 
 
![connect-azure-sub-4](https://github.com/spotinst/help/assets/106514736/6e8198f9-cdd2-4cd4-8bee-c56bcb6241de)

6. In the Register an application window, enter the application you have just registered and copy the Application (client) ID and Directory (tenant) ID to provide in the next step. Click **Register**.

![connect-azure-sub-5](https://github.com/spotinst/help/assets/106514736/ec2b6c10-23b0-4bb4-8919-a2f1dce66ede)

7. Paste the Application (client) ID and Directory (tenant) ID in the fields respectively: 

![connect-azure-sub-6](https://github.com/spotinst/help/assets/106514736/5fad3158-3d39-4f94-8985-883f9e4595cd)

8. Click **Next**. 

## Step 4: Create Certificates and Secrets 
 
In the previous app registration that was created, create a client secret:  

1. In the left menu, click **Certificates & secrets**. 
2. Click the **Create secrets** tab and then **+ New client secret**. 
3. Copy the secret value. 
 
![connect-azure-sub-7](https://github.com/spotinst/help/assets/106514736/511bff26-1663-4b7d-82f2-31021dfb6e1e)

4. In the wizard in the Spot console, paste the secret value and click **Next**. 

![connect-azure-sub-8](https://github.com/spotinst/help/assets/106514736/333125ce-e84e-4ae7-8a44-d0cb0385df73)

5. Enter the Subscription ID you want to associate with spot.io and then continue to the next step in the Azure connection wizard. 
 
![connect-azure-sub-9](https://github.com/spotinst/help/assets/106514736/fb26789c-0d34-48fa-802c-6317509bda57)

## Step 5: Create a Custom Role 

1. In the Azure console, type **Subscriptions** in the search bar and click the **Subscriptions** result that appears. 
2. In the menu on the left side of the Subscriptions platform, click **Access Control (IAM)**.  
3. Click **+ Add** and then **Add custom role**.  

![connect-azure-sub-10](https://github.com/spotinst/help/assets/106514736/c63efd8e-9ab1-4e49-8970-86dbf680fca2) 
 
4. Select **Start from JSON** and upload the next [JSON policy](https://docs.spot.io/administration/api/spot-policy-in-azure?id=spot-policy-in-azure). 
 
![connect-azure-sub-11](https://github.com/spotinst/help/assets/106514736/e66c540c-4e9d-49b9-8209-5a9046c7faf6)

5. Click **Assignable scope** and select the relevant subscription. 

![connect-azure-sub-12](https://github.com/spotinst/help/assets/106514736/d99feaa4-2ad4-4cee-ae2d-e4bc82f97b6a) 

6. In the **Create a custom role** window, click **Review + create** and complete the custom role information. 

## Step 6: Assign a Role 

1. In the Access control (IAM) platform, click **+ Add** and then click **Add role assignment**. 
 
![connect-azure-sub-13](https://github.com/spotinst/help/assets/106514736/4ed79ac3-70e3-41bd-8587-a36a049552fd)

2. Click the **Role** tab and select the custom role you created in the previous steps. 
 
![connect-azure-sub-14](https://github.com/spotinst/help/assets/106514736/ada424da-c289-4ef7-b9bf-78e7d491bccf)

3. Click the **Members** tab and click **Select members**. 

![connect-azure-sub-15](https://github.com/spotinst/help/assets/106514736/ca963bc9-824a-42e6-b927-fe372597d65d)
 
4. Select the app registration that was created in the previous steps and click **Next**.  
5. In the Spot console, click **Connect Account**.  

![connect-azure-sub-16](https://github.com/spotinst/help/assets/106514736/9d8cf4f9-a9a4-4be8-844c-46843fb7a698)

When the validation is complete, your Azure subscription will be connected and ready for optimization. 
 
![connect-azure-sub-17](https://github.com/spotinst/help/assets/106514736/31fe6d4e-87f9-4d69-8916-95c7648bf00d)
 
## What’s Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-azure).
- Learn how to [import existing Azure resources](elastigroup/tutorials-azure/getting-started/import-an-existing-azure-resource) such as a Scale Set, an Application Gateway, a Classic Load Balancer or a VM.
