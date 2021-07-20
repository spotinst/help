# Connect your Azure Subscription to Spot

This procedure covers authenticating your Spot account with Azure, which gives Spot the necessary permissions to launch and manage Azure resources on your behalf.

## Prerequisites

- An activated Azure subscription
- A registered Spot account

## Step 1: Create an Active Directory Application

1. Log in to your Azure console and go to Azure's Active Directory service.
2. In Azure's Active Directory service click on App registrations.
3. Click New Registration.

<img src="/connect-your-cloud-provider/_media/azure1-768x248.png" />

4. Give the application a name and add `https://spot.io` as the redirect URI.

<img src="/connect-your-cloud-provider/_media/azure2-1024x774.png" />

5. Once your application is ready, copy the Application ID and save it.

## Step 2: Create a Key for the Application

1. Inside the created app registration, click Certificates & Secrets.
2. Create a new client secret:

<img src="/connect-your-cloud-provider/_media/azure3-768x240.png" />

3. Enter a brief description of the secret and define a validity period that includes a start date and end date:

<img src="/connect-your-cloud-provider/_media/azure4-768x424a.png" width="395" height="176" />

4. Make sure to copy the Secret Key and set it aside. It won't appear again after you leave the Key settings.

<img src="/connect-your-cloud-provider/_media/azure5-1024x631.png" />

## Step 3: Retrieve Your Directory ID

Under your Active Directory's main menu, go to Properties, copy the Directory ID (a.k.a Tenant ID), and set it aside.

<img src="/connect-your-cloud-provider/_media/azure6-1024x481.png" />

## Step 4: Enter your Information in the Spot Console

1. Go to the Spot [console](https://console.spotinst.com), select the desired account, and select Azure as your cloud provider.
2. Paste your Application ID (from Step 1), Directory ID (from Step 3), Application Key (from step 2), and your Subscription ID into their respective fields.
3. Select View and Copy Policy, and Copy Policy to clipboard.

## Step 5: Provide Permissions to the Active Directory Application

Now that you have created an Active Directory Application, you will create a custom role and attach it to the application.

1. Create a Custom Role

   - Under All Services, select Subscriptions. Choose the subscription you would Spot to access.
   - In the Subscription menu, select Access Control (IAM).
   - Click Roles, Add, and Add Custom Role.
   - Select JSON.
   - Copy and paste the Policy from Step 4. [Spot Policy in Azure](administration/api/spot-policy-in-azure)
   - Review and click Create.

2. Attach the Role
   - Click Role Assignments, Add, and Add Role Assignment.
   - Enter the custom role created above.
   - Enter and select the application created in Step 1.

> **Tip**: If your application does not appear in the Select autocomplete list, enter the application name there anyway.

## Step 6: Validate in Spot Console

Click connect to validate your connection and save it.

You're all set! Your Azure account is now connected to Spot.

## What's Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-azure).
- Learn how to [import existing Azure resources](elastigroup/azure/getting-started/import-an-existing-azure-resource.md) such as a Scale Set, an Application Gateway, a Classic Load Balancer or a VM.
- Check out the [Elastigroup for Azure API](https://help.spot.io/spotinst-api/elastigroup/microsoft-azure/create/).
