# Programmatic Users

Programmatic users are users defined to access the system through an API instead of the UI. All of the actions available in the UI are also available to programmatic users by means of API calls.

Programmatic user credentials are defined separately from UI user credentials. This enables us to know which type of user made a specific action. Like UI users, API users have definitions at the organization level and the account level. The organization level provides API access to actions operating on resources managed for the entire organization. The account level provides API access to resources managed in specific accounts.

The following rules apply to programmatic users:

- A programmatic user does not have access to the UI.
- Only an admin user can create a programmatic user.
- When you create a programmatic user, the system automatically creates a token for the user. The token is visible immediately.

## Add Programmatic User to Organization

Adding a programmatic user to an organization is similar to adding a UI user.

1. In the console, click the User icon and click Settings. Under the Organization tab, click Programmatic Users.
2. Click Add Programmatic User. Fill in the form with the Name, Description, Account Role, and Accounts. You can add one or multiple accounts.
3. When the token is generated, copy it and save it in a secure place.

## Add Programmatic User to Account

Adding a programmatic user to an account is similar to adding a UI user to an account.

1. In the console, click the User icon and click Settings. Under the Account tab, click Programmatic Users.
2. Click Add Programmatic User. Fill in the form with the Name, Description, and Account Role. If you choose a Policy Based account role, choose the applicable policies.
3. When the token is generated, copy it and save it in a secure place.

## Token for Programmatic User

Remember to keep your tokens secret and treat them just like passwords. The tokens act on your behalf when interacting with the API.

The following practices are recommended:

- Do not share your personal access tokens with anyone outside your organization.
- Do not hard-code tokens into your programs or scripts.
- Use tokens as environment variables.
