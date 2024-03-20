# Getting Started 

## Connect your AWS/Azure Account 

If you are a new Spot customer, follow the existing Spot organization creation process. After the Spot Organization has been created, you can begin adding cloud accounts. 

**NOTE**: Cost Intelligence only supports AWS and Azure accounts.

You can also switch accounts at the top right of the screen and click **+ Add Account**. 

If this is your first time setting up an account, complete the following steps.

1. To select the cloud provider, select the appropriate account to connect to Cost Intelligence.

<img width="447" alt="get-started-1" src="https://github.com/spotinst/help/assets/106514736/292568ff-b6d4-4ba4-8673-936e630a4393">

2. Select **Spot FinOps** to ensure the required workflow. 

<img width="472" alt="get-started-2" src="https://github.com/spotinst/help/assets/106514736/5a0e4666-2441-4e66-b0c5-b17093f5fff0">

3. Complete the following steps to finish credentialing the new Spot account and setting up the required IAM policies in the cloud provider. 

<img width="352" alt="get-started-3" src="https://github.com/spotinst/help/assets/106514736/d90ea173-7069-45cf-81cf-9acaa51ed2b9">


**NOTE**: Only AWS accounts are supported in the Spot console. Azure accounts can be registered using the API. Contact your support representative for assistance if needed. 

For help finalizing Azure accounts via API, complete the steps [here](cost-intelligence/tutorials/administration/).  

### Connect Existing Spot Account 

To register an existing Spot Account to Cost Intelligence complete the following steps:  

1. In the left main menu, click **Cost Intelligence** and click **Administration**. You will see a list of previously registered accounts for both the Cost Intelligence and Billing Engine products.  
2. In the top left of the page, click **+ Cloud Account** to register existing accounts.  
3. Click **No** to provide a new CUR file to Billing Engine. Billing Engine will be required to capture and process details for Cost Intelligence.  

<img width="443" alt="get-started-4" src="https://github.com/spotinst/help/assets/106514736/7f7ebafe-bd4f-43ba-9de8-b4b5abd82c9e">

4. Run the IAM Template. Your account is connected.

<img width="445" alt="get-started-5" src="https://github.com/spotinst/help/assets/106514736/66aeb71f-c59a-45ff-9949-6d4e297e7524">


 
