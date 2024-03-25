# Connect Your Azure Subscription to Cost Intelligence 

The procedures on this page describe how to connect your Microsoft Azure subscription to Cost Intelligence.  
 
## Prerequisites 

Permissions to create app registrations and assign subscription reader role in Azure. 
 
## Step 1: Connect to your Spot Account 

1. Enter an account name and click **Create Account**. 

![connect-azure-ci-1](https://github.com/spotinst/help/assets/106514736/60985019-a37d-4faa-a24c-d2d15ffa77fe)

2. Select **Microsoft Azure** as your cloud provider.  
3. Select **FinOps Products** and click **Next**. 
4. Select **Billing Engine** and follow the steps to log in to Azure. 
 
<img width="985" alt="connect-azure-ci-2" src="https://github.com/spotinst/help/assets/106514736/c2b789c2-c93c-45a6-bb8e-e014bfff7ffd"> 

## Step 2: Log in to your Azure Account 

Click **Log in to Azure Account** and continue to the next step. 
 
![connect-azure-ci-5](https://github.com/spotinst/help/assets/106514736/ec3fe3e7-041b-4977-a676-4578703657fb)

## Step 3: Create New Registration 

1. In the Azure console, type **App Registration** in the search bar and click the App Registrations result that appears. 

![connect-azure-sub-2](https://github.com/spotinst/help/assets/106514736/e2031758-598c-4dce-8e85-6f8ccf154dff)

2. Click the **+ New registration** tab. 

![connect-azure-sub-3](https://github.com/spotinst/help/assets/106514736/ba0ba8ba-1963-4528-85da-782af25a2aab)

3. In the Register Application window that opens, enter a name for the application. 

4. In the Support account types section, select **Accounts in this organizational directory only (Spotinst only - Single tenant)**. 

5. In the Redirect URI dropdown menu, select **Web** and specify: [https://spot.io](https://spot.io/). 

![connect-azure-sub-4](https://github.com/spotinst/help/assets/106514736/da85920e-bc96-4bbe-87ec-b934c885d17a)

6. In the Register an application window, enter the application you registered in the previous steps and copy the Application (client) ID and Directory (tenant) ID to provide in the next step. Click **Register**. 

![connect-azure-sub-5](https://github.com/spotinst/help/assets/106514736/92b86d65-3f90-4ffc-ac25-54a8cc4f2ed2)

7. Paste the Application (client) ID and Directory (tenant) ID in the fields respectively: 

<img width="533" alt="connect-azure-ci-3" src="https://github.com/spotinst/help/assets/106514736/18d8d612-3fed-4759-9cfe-ac4836234da6">

## Step 4: Create Certificates and Secrets 

In the previous app registration that was created, complete the following steps to create a client secret: 
 
1. In the left menu, click **Certificates & secrets**. 
2. Click the **Create secrets** tab and then **+ New client secret**. 
3. Copy the secret value. 
 
![connect-azure-sub-7](https://github.com/spotinst/help/assets/106514736/58a09f6a-ceec-46c9-a3f1-d10a51ca5439)

4. In the Cost Intelligence Wizard paste the application secret. 
5. Enter the Subscription ID you want to associate with Cost Intelligence. 
 
## Step 5: Assign a Role 

1. In the Azure console, type **Subscriptions** in the search bar and click the Subscription you want to connect to Cost Intelligence in the result that appears. 
2. In the menu on the left side of the Subscriptions platform, click **Access Control** (IAM). 
3. Click **Add/ Add role assignment**. 
4. Select the Reader role. 
5. Click **Next**. 
6. Click **+ Select Members**. 
7. In the right panel, search for and select the registered application created earlier. 
8. Click **Review + Assign**. 
9. In the Cost Intelligence Wizard, click **Connect Account**. 

**When the validation is complete, your Azure subscription will be connected to Cost Intelligence**. 
 
<img width="853" alt="connect-azure-ci-4" src="https://github.com/spotinst/help/assets/106514736/25c5539a-8b0e-4886-9b56-cac5fe289c14">


 
