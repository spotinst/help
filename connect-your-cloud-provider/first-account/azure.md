# Connect Azure Subscription

This page describes the procedures for connecting your Microsoft Azure subscription to Spot. The procedure assumes that you are following the instructions in the [onboarding wizard](connect-your-cloud-provider/first-account/?id=connect-azure), have already created your Spot organization or new account, and selected Azure as your cloud provider. You are connecting a linked account, and are in Step 3 as shown below.

## Step 3: Connect your cloud account to Spot

> **Tip**: If this is the first account you are connecting, the step below will show as 3.2. If you are connecting an additional account, the step below is numbered 3.1. The examples in this procedure show as if you are connecting an additional account.

### Step 3.1: Log in to Azure

Log in to the Azure account you would like Spot to connect to then continue to the next step.

<img src="/connect-your-cloud-provider/_media/connect-azure-001.png" />

### Step 3.2: App Registration

In this step, you register Spot to Azure.

<img src="/connect-your-cloud-provider/_media/connect-azure-002.png" />

1. Go to Azure's Active Directory service.
2. Click on App registrations and click New Registration.

<img src="/connect-your-cloud-provider/_media/azure1-768x248.png" />

3. Give the application a name and add https://spot.io as the redirect URI.

<img src="/connect-your-cloud-provider/_media/azure2-1024x774.png" />

4. Once your application is ready, copy the Application ID and save it.
5. Return to the wizard in Spot and enter:
   - Application (client) ID
   - Directory (tenant) ID

Continue to the next step in the wizard.

### Step 3.3: Client Secret

In this step, you create the client secret to be used for authenticating Spot.

<img src="/connect-your-cloud-provider/_media/connect-azure-003.png" />

1. In the app registration you just created, click Certificates & Secrets.
2. Create a new client secret:

<img src="/connect-your-cloud-provider/_media/azure3-768x240.png" />

3. Enter a brief description of the secret and define a validity period that expires in 24 months:

<img src="/connect-your-cloud-provider/_media/azure4-768x424a.png" width="395" height="176" />

4. Copy the Secret Key and then return to Spot and paste it in the field in the wizard that says Client secret value. The key will not appear again after you leave the Key settings.

<img src="/connect-your-cloud-provider/_media/azure5-1024x631.png" />

Continue to the next step in the wizard.

### Step 3.4: Subscription

Enter the Subscription ID you would like to use for spot.io and then continue to the next step in the wizard.

<img src="/connect-your-cloud-provider/_media/connect-azure-004.png" />

### Step 3.5: Custom Role

In this step, you create a new custom role that Azure will use for Spot.

<img src="/connect-your-cloud-provider/_media/connect-azure-005.png" />

1. Under All Services, select Subscriptions. Choose the subscription you would like Spot to access.
2. In the Subscription menu, select Access Control (IAM).
3. Click Roles, Add, and Add Custom Role.
4. Select JSON.
5. Switch to the wizard in Spot and click Export JSON Policy. This will put the correct policy on the clipboard.
6. Return to the Azure console, paste in the policy, review, and click Create.

### Step 3.6: Role Assignment

In this step, you assign the role you created in the previous step and complete everything you need for the connection.

<img src="/connect-your-cloud-provider/_media/connect-azure-006.png" />

1. In Azure, Click Role Assignments, Add, and Add Role Assignment.
2. Enter the custom role created above.
3. Select the application you registered in Step 3.2.

> **Tip**: If your application does not appear in the Select autocomplete list, enter the application name there anyway.

4. In the wizard in Spot, click Connect Account.

Once the validation is complete, your Azure subscription will be connected and ready for optimization.

## What’s Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-aws).
- Learn how to [import existing Azure resources](elastigroup/tutorials-azure/getting-started/import-an-existing-azure-resource) such as a Scale Set, an Application Gateway, a Classic Load Balancer or a VM.
