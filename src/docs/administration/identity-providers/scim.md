# SCIM Integration

Set up and use the system for cross-domain identity management (SCIM) integration for Spot in Okta. SCIM integration lets you automate user provisioning, updates, and deactivation.

You can manage user lifecycle events between Okta and Spot seamlessly. This automation helps maintain accurate user data and reduces administrative overhead.

## Prerequisites
* Admin access to your Okta organization.
* Admin access to your Spot organization.
* A [permanent access token](https://docs.spot.io/administration/api/create-api-token).

## Step 1: Add Spot to Okta

1. Sign in to your Okta admin dashboard.
2. Go to **Applications** > **Add Application**.
3. Search for <i>Spotinst</i> and click **Add Integration**.

    <details>
   <summary markdown="span">View image</summary>

    <img alt="scim1" src="https://github.com/user-attachments/assets/7f2c1ee9-cb5b-442a-b680-569b505fef50">

    </details>

## Step 2: Configure Spot

1. After adding the application, go to **Provisioning** > **Configure API Integration**.
2. Select **Enable API Integration**.
3. Enter the [permanent access token](https://docs.spot.io/administration/api/create-api-token) from Spot.
4. Click **Test API Credentials** to make sure it’s working and then click **Save**.
   
    <details>
   <summary markdown="span">View image</summary>
      
   <img alt="scim2" src="https://github.com/user-attachments/assets/fc8cae93-8796-4fd1-bb6f-e67a638eb49d">
    </details>

## Step 3: Enable SCIM Provisioning Features

1. On the Provisioning tab, turn these on:
     * **Create Users** lets Okta create users in Spot.
     * **Deactivate Users** lets Okta deactivate users in Spot.

2. Click **Save**.

## Step 4: Assign Users to the Spot by NetApp App

1. Go to the Assignments tab.
2. Click **Assign** and select **Assign to People**.
3. Select the users to provision in Spot:
     * <i>Viewer</i> role assigns the user a viewer policy for each account in the organization.
     * <i>Editor</i> role assigns the user as an organization admin.     * 
4. Click **Assign**.

    <details>
   <summary markdown="span">View image</summary>
   
   <img alt="scim3" src="https://github.com/user-attachments/assets/4b146b19-1b6d-4e22-b25b-90d87b440835">
    </details>

## Step 5: Verify User Provisioning

1. In the Spot console, go to **Settings** > **Organization** > **Users**.
2. Verify that the users assigned in Okta are showing correctly in Spot.
    <details>
   <summary markdown="span">View image</summary>

   <img alt="scim4" src="https://github.com/user-attachments/assets/21ecaf2e-fc5c-4296-9c01-c8b6ae6195dd">

    </details>


## Troubleshooting

* **API Credentials Error**: Ensure that the SCIM API credentials are correct and have the necessary permissions.
* **User Provisioning Issues**: Check the Okta logs for any errors related to user provisioning. Ensure that the users have the required attributes filled out in Okta.
