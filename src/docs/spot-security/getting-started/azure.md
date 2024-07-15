# Onboard Azure Account

If you are using Spot Security for the first time, in the left main menu of the Spot console click **Spot Security** > **Start With 30 Days Free Trial**.  

## Prerequisites 

Use the same service principal you created when you onboarded the Azure subscription to the Spot console for the Spot Security onboarding (based on individual subscriptions).

If you lost the service principal you used, you can access it in the Spot Accounts page. Select the account that you are onboarding by clicking the relevant client ID.

 <details>
   <summary markdown="span">View image</summary>
   
![get-started-azure-1](https://github.com/spotinst/help/assets/106514736/24567701-1bed-4790-a9b2-9c9f817a7bed)

 </details>

## Step 1: Connect your Azure Account

1. If you already connected cloud accounts to Spot, in the left main menu of the Spot console, click **Spot Security** > **Administration**.
2. Click **Cloud Account** > **Azure** > **Log in to Azure Account**.
3. Enter your Azure Management Console and click **Azure**.

## Step 2:  Elevate Access to your Subscription ID

### Step 2.1:  Assign Reader, Storage Blob Data Reader Role

 <details>
   <summary markdown="span">Assign a reader and storage blob data reader role to your Spot application registration subscription</summary>
   
   1. Log in to your Azure account.
   2. Under All Services, select **Subscriptions**. Select the subscription to connect to Spot Security.
   3. In the Subscription menu, select **Access Control (IAM)** and click **+ Add** > **Add role assignment**.
   4. Find and select the <i>Reader</i> role.
      
  <details>
       <summary markdown="span">View image</summary>
         <img alt="get-started-azure10" src="https://github.com/user-attachments/assets/59fcefee-e795-4d25-a0b5-7d11606c1873">
  </details>
  
  5. Click **Next**.
  6. On the Members tab:
     <ol style="list-style-type: lower-alpha;">
      <li>Make sure <b>Assign access to</b> is set to <i>User, group, or service principal</i>.</li>
      <li>Click <b>+ Select Members</b>.</li>
      <li>Find and select the Spot application that you used during spot onboarding and click <b>Select</b>.</li>
      <li>Click <b>Next</b>.</li>
     </ol>

  7. Click **Review + assign** and wait for it to assign the <i>Reader</i> role to the Spot app registration.

       <details>
       <summary markdown="span">View image</summary>
         <img alt="get-started-azure11" src="https://github.com/user-attachments/assets/a7ecacfc-d9d7-41b4-8090-0b1ebadcfaa4">
         
       </details>
  
  8. Repeat steps 3-7 for the <i>Storage Blob Data Reader</i> role.
     
  9. Click the Role Assignments tab, search for your service principal, and make sure the app has both <i>Reader</i> and <i>Storage Blob Data Reader</i> roles assigned.

     <details>
       <summary markdown="span">View image</summary>
         <img src="https://github.com/user-attachments/assets/9a71f311-2270-48f9-b679-fd9e6f75fcbc">
         
       </details>

  10. Click on the service principal and copy the <i>Object ID</i> of the Application Service Principal and save it for the next step of onboarding.

      <details>
        <summary markdown="span">View image</summary>
          <img src="https://github.com/user-attachments/assets/15cdaccd-2c9e-43df-a3c4-b9179b16cf0c">
          
        </details>

 </details>

### Step 2.2:  Enter the Service Principal Object ID

1. Go to the Spot console and enter the <i>Service Principal Object ID</i> and click **Validate**.

2. When the <i>Service Principal Object ID</i> is successfully validated, click **Next**.

## Step 3: Archive Activity Logs to a Storage Account

### Step 3.1:  Configure Export Activity Logs

1. Log in to your Azure account.
2. Under All Services, select **Subscriptions**. Select the subscription you would like to onboard to Spot Security.
3. Select **Activity log** > **Export Activity Logs** > **+ Add diagnostic setting**.

  <details>
    <summary markdown="span">View image</summary>
      <img src="https://github.com/user-attachments/assets/801fcb0e-8ea5-4f7c-860e-e5d51fc39e24">
          
   </details>

4. Enter a **Diagnostic setting name**.
5. Select **Categories** > **Administrative**.
6. Select **Archive to a storage account** and select the Subscription with the storage account. Make sure the service principal used for onboarding has access to the storage account.
7. Select the logs you want to archive from the **Storage Account**. [Create a storage account](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal) if needed.
8. Copy the Storage account name and save it for the next step of onboarding.
9. Click **Save**.  

### Step 3.2: Enter Storage Account Name

1. Go to the Spot console, enter the storage account name copied in the previous step and click **Validate**.
   
  <details>
    <summary markdown="span">View image</summary>
      <img src="https://github.com/user-attachments/assets/f33b100b-5a4d-4a7a-b383-63c707bc272d" />
          
   </details>

2. When the storage account name is validated, click **Next**.  

## Step 4: Review and Finalize

1. Review the information and ensure all details are correct.
  <details>
    <summary markdown="span">View image</summary>
      <img src="https://github.com/user-attachments/assets/1358628d-cf21-43df-adb8-31561c9177f7" />
      
   </details>

2. Click **Finish Onboarding**.
