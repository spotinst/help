# Connect Your Azure Subscription to Cost Intelligence 

The procedures on this page describe how to connect your Microsoft Azure subscription to Cost Intelligence.  
 
## Prerequisites 

Permissions to create app registrations and assign subscription reader role in Azure. 
 
## Step 1: Connect to your Spot Account 

1. Enter an account name and click **Create Account**. 

![connect-azure-ci-1](https://github.com/spotinst/help/assets/106514736/60985019-a37d-4faa-a24c-d2d15ffa77fe)

2. Select **Microsoft Azure** as your cloud provider.  
3. Select **FinOps Products** and click **Next**. 
4. Select **Cost Intelligence** and follow the steps to log in to Azure. 
 
<img width="985" alt="connect-azure-ci-2" src="https://github.com/spotinst/help/assets/106514736/c2b789c2-c93c-45a6-bb8e-e014bfff7ffd"> 

## Step 2: Log in to your Azure Account 

Click **Log in to Azure Account** and continue to the next step. 
 
![connect-azure-ci-5](https://github.com/spotinst/help/assets/106514736/ec3fe3e7-041b-4977-a676-4578703657fb)

## Step 3: Create New Registration 

1. In the Azure console, type **App Registration** in the search bar and click **App Registrations**. 

![connect-azure-sub-2](https://github.com/spotinst/help/assets/106514736/e2031758-598c-4dce-8e85-6f8ccf154dff)

2. Click the **+ New registration** tab. 

![connect-azure-sub-3](https://github.com/spotinst/help/assets/106514736/ba0ba8ba-1963-4528-85da-782af25a2aab)

3. In the Register Application window that opens, enter a name for the application. 

4. In the Support account types section, select **Accounts in this organizational directory only (Spotinst only - Single tenant)**. 

5. In the Redirect URI dropdown menu, select **Web** and enter: [https://spot.io](https://spot.io/). 

![connect-azure-sub-4](https://github.com/spotinst/help/assets/106514736/da85920e-bc96-4bbe-87ec-b934c885d17a)

6. In the Register an application window, enter the application you registered in the previous steps and copy the Application (client) ID and Directory (tenant) ID for the next step. Click **Register**. 

![connect-azure-sub-5](https://github.com/spotinst/help/assets/106514736/92b86d65-3f90-4ffc-ac25-54a8cc4f2ed2)

7. Paste the **Application (client) ID** and **Directory (tenant) ID**. 

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

To assign a role, complete the following steps:

1. In the Azure console, type **Subscriptions** in the search bar and click the subscription you want to connect to Cost Intelligence. 
2. In the menu on the left side of the Subscriptions platform, click **Access Control** (IAM). 
3. Click **Add/ Add role assignment**. 
4. Select the Reader role and click **Next**. 
5. Click **+ Select Members**. 
6. In the right panel, search for and select the registered application created earlier. 
7. Click **Review + Assign**. 
8. In the Cost Intelligence wizard, click **Connect Account**. 

## Step 6

When the validation is complete, your Azure subscription will be connected to Cost Intelligence. 
 
<img width="853" alt="connect-azure-ci-4" src="https://github.com/spotinst/help/assets/106514736/25c5539a-8b0e-4886-9b56-cac5fe289c14">

### Connect an Existing Spot Account

You can connect an existing Spot Account (that is already connected to Azure for other Spot products) to Cost Intelligence for an Azure subscription by completing the following steps: 

1. In the left main menu, click **Cost Intelligence** and then **Administration**. A list of previously registered accounts for both the Cost Intelligence and Billing Engine products opens. 

2. Click **+ Cloud Account**. 
3. Click the Azure cloud provider you want to connect to your Spot account. 

<img width="823" alt="connect-azure-ci-6" src="https://github.com/spotinst/help/assets/106514736/8787e44f-fa9e-464c-8bab-861cdc8a2fd4">

4. Click the **Existing Spot Account** drop-down menu and select the Spot account you want to connect Cost Intelligence and click **Next**.

**Note**: You can also add Cost Intelligence to a pre-existing, unconnected Spot account.  
 
5. Add the Azure Reader Role to the connected app registration and click, **Connect Account**. 
 
![connect-azure-ci-7](https://github.com/spotinst/help/assets/106514736/1ef5f7d8-6da7-4a20-be78-3d6f84e52087)

When the validation is complete, your Azure subscription will be connected to Cost Intelligence. 

![connect-azure-ci-8](https://github.com/spotinst/help/assets/106514736/2a795df2-1c55-4a8d-9ee7-168733f7be93)

*
