# Organizations and Accounts

When you set up your Spot account, you create an organization and one or more account entities. You can set up multiple organizations if required. Within an organization, you can define multiple accounts for different teams or projects in the organization. Each account can be set up to use any supported cloud service provider and cloud service provider account.

## Organization

When you register to Spot, the registration wizard automatically creates an organization. The name of the organization is the company name entered in the sign up form.

The organization holds one or more Spot accounts which can be associated with your cloud service provider account. An organization helps you manage all your settings across multiple accounts in one place.

You can:

- Manage users to create, delete, and associate users with accounts
- Use API tokens to generate and delete personal and temporary tokens
- Enable and disable two-factor authentication for your Spot users
- Connect your organization to an identity provider (IDP), or use a custom SAML
- Generate billing reports for your organization
- View your Spot plan and activate your organization

## Get Your Organization ID

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Go to **General Details** > **My Organization** > **Organization ID**.
   <details>
    <summary markdown="span">View image</summary>

     <img height="400" src="https://github.com/user-attachments/assets/faae59f5-123a-41a2-bd31-c2be6c471856" />

   </details>

## Linked Organizations

If you need multiple organizations, for example, for multiple divisions or units in your company, you can create linked organizations which can share settings and configuration such as:

- Billing information (can be separate if needed)
- Management dashboards and reports

## Add an Organization

1. In the console, click the organization and click **Add Organization**.

   <details>
    <summary markdown="span">View image</summary>

     <img width="300" src="https://github.com/user-attachments/assets/2682ac3c-8580-4c25-a869-911765f699a6" />

   </details>

2. Enter a name for the new organization and click **Create**.
3. Switch to the new organization.
4. Choose a cloud service provider and complete the wizard to connect the organization to the provider.

## Switch Organizations

If your user is mapped to more than one organization, you can easily switch from one organization to another:

1. In the Spot console, click the organization.
   
   <details>
    <summary markdown="span">View image</summary>

     <img width="300" src="https://github.com/user-attachments/assets/2682ac3c-8580-4c25-a869-911765f699a6" />

   </details>
   
3. Search for and select the name of the organization to switch to.

   <details>
    <summary markdown="span">View image</summary>

     <img width="300" src="https://github.com/user-attachments/assets/6afad223-581c-4121-9066-adc0755fa560" />
   </details>
   

## Account

When you register to Spot, the registration wizard automatically creates an account in your organization. The account is a child entity of your organization. You can manage multiple accounts in which each account is connected to a different cloud provider account. This allows you to manage multiple accounts and users under the same organization.

A Spot account is an equivalent to an AWS account, Azure subscription, or a GCP project.

In the account, you can:

- Connect a cloud provider account to your Spot account. This is not required. You can have an account that is not associated with a cloud provider.
- Attach existing users in your organization to the account. Users must be created at the organization level.
- Define email and Slack notifications for your organization.

## Add an Account Using the Spot Console

1. In the Spot console, click the account and click **Add Account**.
   
   <details>
    <summary markdown="span">View image</summary>

     <img width="300" src="https://github.com/user-attachments/assets/6439e166-20c9-4c9d-bc8f-9607ae31b36e" />


   </details>

2. Enter a name for the new account and click **Create**.
3. Choose a service provider and complete the wizard to connect the account to the provider.

## Add an Account Using the API

To add an account through the API, go to [Spot API – Create Account](https://docs.spot.io/api/#operation/OrganizationsAndAccountsCreateAccount).

## Get Your Account ID

The Account ID is required for API and SDK interactions with the account-level Spot products (such as Elastigroup, Ocean), unless it's for the default account.

1. In the Spot console, select the organization and account.
2. Click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
3. Go to **General Details** > **My Spot Account** > **Cloud Account ID**.
   
   <details>
    <summary markdown="span">View image</summary>

      <img width="400" src="https://github.com/user-attachments/assets/9a0378a6-248b-4d06-a3cc-1351386d2a37" />

   </details>

## Audit Events

You can view an audit list of events in your accounts. The Audit page shows a list of events and enables tracking and visibility of actions on your resources. You can see these details for each event:
- Event timestamp
- Event type, such as update, create, detach instances, deploy instances
- Resources type, such as Elastigroup, Ocean
- Resource ID
- User name
- View the payload

Access the Audit page:
1. In the Spot console, select the organization and account.
2. Click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings** > **Audit**.
