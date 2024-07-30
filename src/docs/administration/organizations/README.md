# Organizations and Accounts

When you set up your Spot account, you create an organization and one or more account entities. You will most likely need only one organization, but you can set up multiple organizations if required. Within an organization, you can define multiple accounts for different teams or projects with the organization. Each account can be set up to use any supported cloud service provider and cloud provider account.

<img src="/administration/_media/organizations-accounts-01.png" width="500" height="281" />

## Organization

When you register to Spot, the registration wizard automatically creates an organization. An organization holds your initial company account and is identified by name or by name and division (for example, <i>Spot</i> or <i>Spot-USA</i>).

The organization holds one or more Spot accounts which can be associated with your cloud account. The purpose of the organization is to help you manage in one place all of your settings across multiple accounts.

In the organization, you can define the following:

- User management to create, manage, delete, and associate users to accounts
- API tokens to generate and delete personal and temporary tokens
- MFA authentication to enable and disable two-factor authentication for your Spot users
- Identity provider (SAML) to connect your organization to an IDP, or use a custom SAML
- Billing to generate billing reports for your organization
- Spot plan to view your Spot plan and activate your prganization

## Get Your Organization ID

1. In the Spot console, click the user icon <img height="14" src="https://github.com/spotinst/help/src/docs/administration/_media/usericon.png">  > **Settings**.
2. You will be automatically presented with the General Details pane under Organization. Within the My Organization section you can find your Organization ID.

<img height="400" src="https://github.com/user-attachments/assets/b272be03-54ad-4e10-be08-01eb79d9e0ae">

## Linked Organizations

If you need multiple organizations, e.g., for multiple divisions or units in your company, you can create linked organizations which can share settings and configuration such as:

- Billing Information (can be separate if needed)
- Management Dashboards and Reports

## Add an Organization

<img src="/administration/_media/organizations-accounts-03.png" width="150" height="93" />

1. In the console, click the Organization and click Add Organization.
2. Enter the name of the new organization and click CREATE.
3. Switch to the new organization.
4. Choose a service provider and complete the corresponding wizard to connect the organization to the provider.

## Account

When you register to Spot, the registration wizard automatically creates an Account in your Organization. The account is a child entity of your organization. You can manage multiple accounts in which each account is connected to a different Cloud Provider Account. This allows you to manage multiple accounts and users under the same Organization.

A Spot Account is an equivalent to an AWS account, Azure subscription, or a GCP project.

In the Account, you can define the following:

- Cloud Provider Account – Connect your Spot account to your Cloud Provider account. (This is not mandatory. You can have an account that is not associated with a Cloud provider.)
- Attach Users – Attach existing users in your Organization to the account. Users must be created at the Organization level.
- Notifications – Define Email and Slack notifications for your Organization.

## Add an Account using the Console

<img src="/administration/_media/organizations-accounts-04.png" width="300" height="140" />

1. In the console, click the Account and click Add Account.
2. Enter the name of the new account and click CREATE.
3. Choose a service provider and complete the corresponding wizard to connect the account to the provider.

## Add an Account using the API

To add an account through the API, go to [Spot API – Create Account](https://docs.spot.io/api/#operation/OrganizationsAndAccountsCreateAccount).

## Get your Account ID

The Account ID is required for API and SDK interactions with the Elastigroup configuration.

1. Log in to the Organization and select the required Account.
2. In the console, click on the User icon and click Settings.
3. You will be automatically presented with the General Details pane under Organization. Within the My My Spot Account section, you can find your Spot Account ID.

<img src="/administration/_media/organizations-accounts-05.png" width="400" height="117" />

The Account ID is required for any API call or SDK call unless it is for the default Account.

## What’s Next
Learn how to [switch organizations](administration/organizations/switch-organization).
