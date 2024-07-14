# Create an API Token

You can create permanent and temporary tokens:
* Permanent tokens can be either <i>personal</i> (the user is a person accessing the console) or <i>programmatic</i> (the user is an application accessing Spot with an API).
* Temporary tokens are created using the Spot API.

## Create a Permanent Token

You can only see tokens that you have permission to view. For example, only Organization Admins and users with <i>Delete Permanent Token</i> permissions can see other users’ tokens. Permissions are defined in the [permission policies](https://docs.spot.io/administration/policies/create-new-policy).

Only Organization Admins can create programmatic tokens.

1. Go to the User icon in the Spot console and click **Settings** > **API**.
2. Click **Permanent Tokens** > **Generate Token**.
3. Select <i>Personal</i> or <i>Programmatic</i>:
    * **Personal**: give your token a name and **click Generate**.
    * **Programmatic**: give your token a name and select the type of programmatic user, then click **Generate**. Only Organization Admins can create programmatic tokens.

!> Remember to keep your tokens secret. Treat them just like passwords. They act on your behalf when interacting with the API. Do not share your personal access tokens with anyone outside your organization. Do not hardcode them into your programs. Instead, use environment variables. Contact support if you're concerned your token has been compromised.

## Create a Temporary Token

1. Go to the User icon in the Spot console and click **Settings** > **API**.
2. Click **Temporary Token**.

## API Token from User Details Page

You can only see tokens that you have permission to view. For example, only Organization Admins and users with <i>Delete Permanent Token</i> permissions can see other users’ tokens. Permissions are defined in the [permission policies](https://docs.spot.io/administration/policies/create-new-policy).

1. Go to the User icon in the Spot console and click **Settings** > **Users**.
2. In the Users list, select your username.
3. Click **API Tokens**.
4. Give your token a name and click **Generate API Token**.

!> Remember to keep your tokens secret. Treat them just like passwords. They act on your behalf when interacting with the API. Do not share your personal access tokens with anyone outside your organization. Do not hardcode them into your programs. Instead, use environment variables. Contact support if you're concerned your token has been compromised.

## Delete a Token

Organization Admins and users with <i>Delete Permanent Token</i> permissions can see other users’ tokens. Permissions are defined in the [permission policies](https://docs.spot.io/administration/policies/create-new-policy).
