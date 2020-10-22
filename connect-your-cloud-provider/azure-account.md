# Connect your Azure Account to Spot

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

## Step 4: Provide Permissions to the Active Directory Application

1. Now that you've created an Active Directory Application you'll provide it with Contributor permissions.
   Under All Services select Subscriptions. Choose the subscription you'd like to provide Spot with a role in.
   In the Subscription menu select Access Control (IAM). Click Add and under Role choose Contributor.
   Search for the name of the Active Directory Application you created in Step 1 and click Save.

---

**Note**: If your application doesn't appear in the Select autocomplete list enter the application name there anyway.

---

2. In the Role Assignment menu click on your application and copy the Object ID (aka subscription ID) and set it aside.

## Step 5: Open The Elastigroup Console

Go to [https://console.spotinst.com](console.spotinst.com), select Azure as your cloud provider and paste your Application ID, Application Key, Directory ID (a.k.a Tenant ID), and your Subscription ID into their respective fields. Validate your connection and save it.

You're all set! Your Azure account is now connected to Spot.

## What's Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-azure).
- Check out the [Elastigroup for Azure API](https://help.spot.io/spotinst-api/elastigroup/microsoft-azure/create/).
