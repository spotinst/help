# Connect Azure Subscription

The procedures on this page describe how to connect your Microsoft Azure subscription to Spot. The procedure assumes that you are following the instructions in the [onboarding wizard](connect-your-cloud-provider/first-account/?id=connect-azure), have already created your Spot organization or new account, and selected Azure as your cloud provider. 

## Step 1: Log in to your Azure Account 
 
Click **Log in to Azure Account** and continue to the next step. 

## Step 2: Create New Registration 
 
1. In the Azure console, type **App Registration** in the search bar and click the App Registrations result that appears.  

   <img width="600" src="https://github.com/spotinst/help/assets/106514736/dadaf0c3-2539-4d5f-99a0-fabbc545102b" />

2. Click the **+ New registration** tab.  
 
   <img width="600" src="https://github.com/spotinst/help/assets/106514736/e1769ebf-888b-43ac-9e60-f1810ae343ba" />

3. In the Register Application window that opens, enter a name for the application. 

4. In the Support account types section, select **Accounts in this organizational directory only (Spotinst only - Single tenant)**. 

5. In the Redirect URI dropdown menu, select **Web** and specify: https://spot.io. 
 
   <img width="600" src="https://github.com/user-attachments/assets/8c1b4153-a694-4cb3-9a97-2084fb47ed69" />

6. In the Register an application window, enter the application you have just registered and copy the Application (client) ID and Directory (tenant) ID to provide in the next step. Click **Register**.

   <img width="600" src="https://github.com/user-attachments/assets/7ec3b929-9f12-493b-bc19-87cc71ece184" />

7. Paste the Application (client) ID and Directory (tenant) ID: 

   <img width="600" src="https://github.com/user-attachments/assets/3fe64c55-11e0-4de9-a157-571c934de805" />

8. Click **Next**. 

## Step 3: Create Certificates and Secrets 
 
In the previous app registration that was created, create a client secret:  

1. In the left menu, click **Certificates & secrets**. 
2. Click the **Create secrets** tab and then **+ New client secret**. 
3. Copy the secret value and the expiration date.
 
   <img width="800" src="https://github.com/user-attachments/assets/649a5fba-fb59-47e3-9bc8-22c31784fc15" />


4. In the wizard in the Spot console, paste the secret value and expiration date, then click **Next**. 

    <img width="600" src="https://github.com/user-attachments/assets/81ac2ce4-f982-4f49-b672-d07cc54de4ee" />

5. Enter the Subscription ID you want to associate with spot.io, and then continue to the next step in the Azure connection wizard. 
 
    <img width="600" src="https://github.com/user-attachments/assets/72916622-65e3-4f04-a9d1-c02fc5b66e52" />

## Step 4: Create a Custom Role 

1. In the Azure console, type **Subscriptions** in the search bar and click the **Subscriptions** result that appears. 
2. In the menu on the left side of the Subscriptions platform, click **Access Control (IAM)**.  
3. Click **+ Add** and then **Add custom role**.  

    ![connect-azure-sub-10](https://github.com/spotinst/help/assets/106514736/c63efd8e-9ab1-4e49-8970-86dbf680fca2) 
 
4. Select **Start from JSON** and upload the next [JSON policy](https://docs.spot.io/administration/api/spot-policy-in-azure?id=spot-policy-in-azure). 
 
   ![connect-azure-sub-11](https://github.com/spotinst/help/assets/106514736/e66c540c-4e9d-49b9-8209-5a9046c7faf6)

5. Click **Assignable scope** and select the relevant subscription. 

   ![connect-azure-sub-12](https://github.com/spotinst/help/assets/106514736/d99feaa4-2ad4-4cee-ae2d-e4bc82f97b6a) 

6. In the **Create a custom role** window, click **Review + create** and complete the custom role information. 

## Step 5: Assign a Role 

1. In the Access control (IAM) platform, click **+ Add** and then click **Add role assignment**. 
 
   ![connect-azure-sub-13](https://github.com/spotinst/help/assets/106514736/4ed79ac3-70e3-41bd-8587-a36a049552fd)

2. Click the **Role** tab and select the custom role you created in the previous steps. 
 
   ![connect-azure-sub-14](https://github.com/spotinst/help/assets/106514736/ada424da-c289-4ef7-b9bf-78e7d491bccf)

3. Click the **Members** tab and click **Select members**. 

   <img width="600" src="https://github.com/user-attachments/assets/29131f2d-5f05-43dd-aa88-b256c2060691" />

 
4. Select the app registration that was created in the previous steps and click **Next**.  
5. In the Spot console, click **Connect Account**.  

   <img width="600" src="https://github.com/user-attachments/assets/7abc3a72-f8f1-4a57-b8a7-ec4b3d6be654" />


When the validation is complete, your Azure subscription will be connected and ready for optimization. 
 
