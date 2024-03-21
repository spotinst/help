# Connect Your Azure Subscription to Cost Intelligence 

The procedures on this page describe how to connect your Microsoft Azure subscription to Cost Intelligence.  
 
## Prerequisites 

Permissions to create app registrations and assign subscription reader role in Azure. 
 
## Step 1: Connect to your Spot Account 

1. Enter an account name and click **Create Account**. 

 
 
 
 

2. Select **Microsoft Azure** as your cloud provider.  
3. Select **FinOps Products** and click **Next**. 
4. Select **Billing Engine** and follow the steps to log in to Azure. 
 
 
 
 

## Step 2: Log in to your Azure Account 

Click **Log in to Azure Account** and continue to the next step. 
 
 

## Step 3: Create New Registration 

In the Azure console, type **App Registration** in the search bar and click the App Registrations result that appears. 

connect-azure-sub-2 

2. Click the **+ New registration** tab. 

connect-azure-sub-3 
 

In the Register Application window that opens, enter a name for the application. 

In the Support account types section, select Accounts in this organizational directory only (Spotinst only - Single tenant). 

In the Redirect URI dropdown menu, select Web and specify: https://spot.io. 

connect-azure-sub-4 

In the Register an application window, enter the application you registered in the previous steps and copy the Application (client) ID and Directory (tenant) ID to provide in the next step. Click Register. 

connect-azure-sub-5 

Paste the Application (client) ID and Directory (tenant) ID in the fields respectively: 
 
 
Step 4: Create Certificates and Secrets 

In the previous app registration that was created, complete the following steps to create a client secret: 
 
1. In the left menu, click Certificates & secrets. 

2. Click the Create secrets tab and then + New client secret. 
3. Copy the secret value. 
 
 

4. In the Cost Intelligence Wizard paste the application secret. 
5. Enter the Subscription ID you want to associate with Cost Intelligence. 

 
Step 5: Assign a Role 

In the Azure console, type Subscriptions in the search bar and click the Subscription you want to connect to Cost Intelligence in the result that appears. 

In the menu on the left side of the Subscriptions platform, click Access Control (IAM). 

Click Add/ Add role assignment. 

Select the Reader role. 

Click Next. 

Click + Select Members. 

In the right pane, search for and select the registered application created earlier. 

Click Review + Assign. 

In the Cost Intelligence Wizard, click Connect Account. 

 
When the validation is complete, your Azure subscription will be connected to Cost Intelligence. 
 
 

 
