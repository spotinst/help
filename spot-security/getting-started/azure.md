# Onboard Azure Account

This procedure describes how to connect your Azure account to Spot Security.  

If you are using Spot Security for the first time, in the left main menu of the Spot console click **Spot Security**. Click **Start With 30 Days Free Trial**.  

If you already connected a cloud account(s) to Spot Security, in the left main menu of the Spot console, click **Spot Security** and **Administration**.  

1. Under the Cloud Accounts Tab, click **+ Cloud Account**.

<img src="/spot-security/_media/get-started-azure-1.png" />

2. Click **Azure**.

## Step 1: Connect your Azure Account

This step describes how to connect your Azure account to Spot Security.

1. Click **Log in to Azure Account**.

<img src="/spot-security/_media/get-started-azure-2.png" />

2. The Azure Management Console opens. Log in to your account with your Azure credentials.

3. When a green checkmark appears next to your cloud account name, click **Next**.

<img src="/spot-security/_media/get-started-azure-3.png" />

## Step 2:  Elevate Access to your Subscription ID

The following step describes how to assign a reader and Storage Blob Data Reader role to your Spot Application Registration subscription.  

### Step 2.1:  Assign Reader and Storage Blob Data Reader Role

<img src="/spot-security/_media/get-started-azure-4.png" />

1. Log in to your Azure account.
2. Under All Services, select **Subscriptions**. Select the subscription you would like to connect to Spot Security.
3. In the Subscription menu, select **Access Control (IAM)** and click **+ Add**.
4. Select **Add role assignment**.

<img src="/spot-security/_media/get-started-azure-5.png" />

5. Search and select Reader role from the list and click **Next**.

<img src="/spot-security/_media/get-started-azure-6.png" />

6. In the Members tab, the Assign access to option is set on **User, group or service principal** by default. If not, select **User, group or service principal**.  

<img src="/spot-security/_media/get-started-azure-7.png" />

7. In the Members option, click **+ Select Members**. In the right panel in the select field, search for and select **Spot Security App** and click **Select** at the bottom. You can add a brief description for traceability. Click **Next**.

<img src="/spot-security/_media/get-started-azure-8.png" />

8. Click **Review + Assign** and wait for the operation to complete successfully to assign Reader role to the Spot app registration.

<img src="/spot-security/_media/get-started-azure-9.png" />

9. Complete the same steps to also add the **Storage Blob Data Reader** role to the same app registration. Search for the **Storage Blob Data Reader** role and click **Next**.
10. By default, the **Assign access to** option is set on **User, group or service principal**. If not, select **User, group or service principal**.

<img src="/spot-security/_media/get-started-azure-10.png" />

11. In the Members option, click **+ Select Members**. In the right panel in the select field, search for and select **Spot Security App** and click **Select** at the bottom. You can add a brief description for traceability. Click **Next**.

<img src="/spot-security/_media/get-started-azure-11.png" />  

12. In the Conditions tab, click **Review + Assign**.

<img src="/spot-security/_media/get-started-azure-12.png" />

13. In the Review + assign tab, click **Review + Assign** and wait for the operation to complete successfully to assign Storage Blob Data Reader role to the Spot app registration.

<img src="/spot-security/_media/get-started-azure-13.png" />

14. Click the **Role Assignments** tab, and search for your new role assignment. The app should have both **Reader** and **Storage Blob Data Reader** role assigned. Click the app name to view its properties.

<img src="/spot-security/_media/get-started-azure-14.png" />

15. Copy the Object ID of the Application Service Principal and save it for the next step of onboarding.

<img src="/spot-security/_media/get-started-azure-15.png" />

### Step 2.2:  Enter the Service Principal Object ID

1. Return to the Spot Console and enter the Service Principal Object ID. Click **Validate**.

<img src="/spot-security/_media/get-started-azure-16.png" />

2. When the Service Principal Object ID is successfully validated, click **Next**.

## Step 3: Archive Activity Logs to a Storage Account

### Step 3.1:  Configure Export Activity Logs

<img src="/spot-security/_media/get-started-azure-17.png" />   

1. Log in to your Azure account.
2. Under All Services, select **Subscriptions**. Select the subscription you would like to onboard to Spot Security.

<img src="/spot-security/_media/get-started-azure-18.png" />   

3. In the Subscription menu, select **Activity log** and click **Export Activity Logs**.

<img src="/spot-security/_media/get-started-azure-19.png" />

4. Click **+ Add diagnostic setting**.
5. Create a storage account if a storage account for archiving activity logs doesn’t exist. Follow the steps provided here, https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal.

<img src="/spot-security/_media/get-started-azure-20.png" />

6. Enter a name in the Diagnostic setting name field.  
7. In the Categories menu, select **Administrative**.   
8. Select **Archive to a storage account**.  
9. In the Subscription drop-down menu, select your subscription name.  
10. In the Storage account drop-down menu, select the logs you want to archive and click **Save**.
11. Copy the Storage account name to provide in the next steps of the onboarding process.  

### Step 3.2: Enter Storage Account Name

1. Enter the storage account name copied in the previous step and click **Validate**.

<img src="/spot-security/_media/get-started-azure-21.png" />

2. When the storage account name is validated, click **Next**.  

## Step 4: Review and Finalize

1. Review the information and ensure all details are correct.

<img src="/spot-security/_media/get-started-azure-22.png" />  

2. Click **Finish Onboarding**.

## What's Next? 

Learn more about the [security features](spot-security/features/) in Spot Security.
