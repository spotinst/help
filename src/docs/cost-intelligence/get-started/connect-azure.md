# Connect Your Azure Subscription to Cost Intelligence 

The procedures on this page describe how to connect your Microsoft Azure subscription to Cost Intelligence.  
 
## Prerequisites 

Permissions to create app registrations and assign subscription reader role in Azure. 
 
## Step 1: Connect to your Spot Account 

1. Enter an account name and click **Create Account**. 

   <details>
   <summary markdown="span">View image</summary>
    <img width=600 src="https://github.com/spotinst/help/assets/106514736/60985019-a37d-4faa-a24c-d2d15ffa77fe">

</details>

2. Select **Microsoft Azure** as your cloud provider.  
3. Select **FinOps Products** and click **Next**. 
4. Select **Cost Intelligence** and follow the steps to log in to Azure.

   <details>
   <summary markdown="span">View image</summary>
    <img width="600" src="https://github.com/spotinst/help/assets/106514736/c2b789c2-c93c-45a6-bb8e-e014bfff7ffd">

</details>

## Step 2: Log in to your Azure Account 

Click **Log in to Azure Account** and continue to the next step. 
 
 <details>
   <summary markdown="span">View image</summary>
<img width="450" src="https://github.com/spotinst/help/assets/106514736/ec3fe3e7-041b-4977-a676-4578703657fb">

</details>

## Step 3: Create New Registration 

1. In the Azure console, type **App Registration** in the search bar and click **App Registrations**.

   <details>
   <summary markdown="span">View image</summary>
    <img width=700 src="https://github.com/user-attachments/assets/9fde1ff6-ff5c-451f-84c6-134f1b7ede5a">

</details>

2. Click the **+ New registration** tab.

   <details>
   <summary markdown="span">View image</summary>
    <img width="550" src="https://github.com/user-attachments/assets/71012ad2-7a4d-47a5-9253-e1ac8aa06c51">

</details>

3. In the Register Application window that opens, enter a name for the application. 

4. In the Support account types section, select **Accounts in this organizational directory only (Spotinst only - Single tenant)**. 

5. In the Redirect URI dropdown menu, select **Web** and enter: [https://spot.io](https://spot.io/).

   <details>
   <summary markdown="span">View image</summary>
      <img width="800" src="https://github.com/user-attachments/assets/9e249697-a5cb-45bf-acf9-428378d8fbec">

</details>

6. In the Register an application window, enter the application you registered in the previous steps and copy the Application (client) ID and Directory (tenant) ID for the next step. Click **Register**.

   <details>
   <summary markdown="span">View image</summary>
      <img width="800" src="https://github.com/user-attachments/assets/afcff02b-3645-48fa-826e-d0f5737225e7">

</details>

7. Paste the **Application (client) ID** and **Directory (tenant) ID**.

   <details>
   <summary markdown="span">View image</summary>
      <img width="400" src="https://github.com/spotinst/help/assets/106514736/18d8d612-3fed-4759-9cfe-ac4836234da6">

</details>

## Step 4: Create Certificates and Secrets 

In the previous app registration that was created, complete the following steps to create a client secret: 
 
1. In the left menu, click **Certificates & secrets**. 
2. Click the **Create secrets** tab and then **+ New client secret**. 
3. Copy the secret value. 
 
   <details>
   <summary markdown="span">View image</summary>
      <img width="700" src="https://github.com/user-attachments/assets/4cc946a6-0e89-43e2-bac4-0f796b9a0fab">

      </details>

4. In the Cost Intelligence Wizard paste the application secret. 
5. Enter the Subscription ID you want to associate with Cost Intelligence. 
 
## Step 5: Assign a Role 

To assign a role:

1. In the Azure console, type **Subscriptions** in the search bar and click the subscription you want to connect to Cost Intelligence. 
2. In the menu on the left side of the Subscriptions platform, click **Access Control** (IAM). 
3. Click **Add/ Add role assignment**. 
4. Select the Reader role and click **Next**.

   **Note:** If you're adding Security Essentials, you also need to add the Azure Blob Data Reader role.

5. Click **+ Select Members**. 
6. In the right panel, search for and select the registered application created earlier. 
7. Click **Review + Assign**. 
8. In the Cost Intelligence wizard, click **Connect Account**. 

## Step 6

When the validation is complete, your Azure subscription will be connected to Cost Intelligence. 

 <details>
   <summary markdown="span">View image</summary>
<img width="550" alt="connect-azure-ci-4" src="https://github.com/spotinst/help/assets/106514736/25c5539a-8b0e-4886-9b56-cac5fe289c14">

</details>

### Connect an Existing Spot Account

You can connect an existing Spot Account (that is already connected to Azure for other Spot products) to Cost Intelligence for an Azure subscription by completing the following steps: 

1. In the left main menu, click **Cost Intelligence** and then **Administration**. A list of previously registered accounts for both the Cost Intelligence and Billing Engine products opens. 

2. Click **+ Cloud Account**. 
3. Click the Azure cloud provider you want to connect to your Spot account. 

   <details>
   <summary markdown="span">View image</summary>
    <img width="700" alt="connect-azure-ci-6" src="https://github.com/spotinst/help/assets/106514736/8787e44f-fa9e-464c-8bab-861cdc8a2fd4">

    </details>

4. Click the **Existing Spot Account** drop-down menu and select the Spot account you want to connect Cost Intelligence and click **Next**.

    **Note**: You can also [add Cost Intelligence to a pre-existing, unconnected Spot account](https://docs.spot.io/cost-intelligence/get-started/connect-azure?id=step-1-connect-to-your-spot-account).  
 
5. Add the Azure Reader Role to the connected app registration and click, **Connect Account**. 
 
   <details>
   <summary markdown="span">View image</summary>
    <img width=600 src="https://github.com/user-attachments/assets/5c71ed3a-b32c-48a5-bce4-ea9abfb8ebf0">

    </details>

When the validation is complete, your Azure subscription will be connected to Cost Intelligence. 

   <details>
   <summary markdown="span">View image</summary>
    <img width=500 src="https://github.com/user-attachments/assets/0f4407c3-b6fe-44b2-800d-dd50d9578380">
    
   </details>
