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

3. Set description and expiration of never expired:

<img src="/connect-your-cloud-provider/_media/azure4-768x424.png" width="441" height="243" />

4. Make sure to copy the Secret Key and set it aside. It won't appear again after you leave the Key settings.

<img src="/connect-your-cloud-provider/_media/azure5-1024x631.png" />

## Step 3: Retrieve Your Directory ID

Under your Active Directory's main menu, go to Properties, copy the Directory ID (a.k.a Tenant ID), and set it aside.

<img src="/connect-your-cloud-provider/_media/azure6-1024x481.png" />

## Step 4: Open The Spot.io Console

* Go to the Spot [console](https://console.spotinst.com), select the desired account then select Azure as your cloud provider. 
* Paste your Application ID (From Step 1), Directory ID (From Step 3), Application Key (From step 2), and your Subscription ID into their respective fields.
* Select View and Copy Policy, Copy Policy to clipboard.


## Step 5: Provide Permissions to the Active Directory Application

Now that you've created an Active Directory Application you'll create a custom role and attach it to the Application.

1. Create a Custom Role
   * Under All Services select Subscriptions. Choose the subscription you'd like to provide Spot access
   * In the Subscription menu select Access Control (IAM)
   * Click Roles, Add, Add Custom Role
   * Select JSON
   * Copy and paste the Policy from Step 4. [Spot Policy in Azure](https://docs.spot.io/administration/api/spot-policy-in-azure) 
   * Review and Create

2. Attach the Role
   * Click Role Assignments, Add, Add Role Assignment
   * Enter the custom role created above
   * Enter and select the Application created in Step 1
  
---
**Note**: If your application doesn't appear in the Select autocomplete list enter the application name there anyway.
---   
  
## Step 6: Validate in Spot Console

Click connect to validate your connection and save it.

You're all set! Your Azure account is now connected to Spot.

## What's Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-azure).
- Check out the [Elastigroup for Azure API](https://help.spot.io/spotinst-api/elastigroup/microsoft-azure/create/).
