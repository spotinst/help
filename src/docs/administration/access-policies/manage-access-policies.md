<meta name="robots" content="noindex">

# Manage Access Policies

This article describes how to do the following:

- Create an Access Policy
- View the List of Access Policies
- Assign an Access Policy to a User
- Edit an Access Policy
- Delete an Access Policy

## Create an Access Policy

1. In the console, click the User icon and click Settings. Under the Account tab, click Access Policies.
2. Click ADD POLICY and enter a unique name for the policy and a brief description.
3. Choose the service and the actions that the policy applies to and click Add. The JSON code for the policy statements will appear in the window below.
4. (Optional) You may repeat step 3 multiple times to add all the statements you need. Each time you click ADD, an additional statement is added to the JSON code.
5. (Optional) Edit the JSON code as required.
6. Validate the JSON code and click Create.

## View the List of Access Policies

In the console, click the User icon and click Settings. Under the Account tab, click Access Policies.

<img src="/administration/_media/manage-access-policies-01.png" />

For each policy in the list, you can see the Policy Name, Description, Affected Users (i.e., users who have this policy assigned to them) and Last Modified date. Under Actions there are options to edit or delete the policy.

## Assign an Access Policy to a User

1. In the console, click the User icon and click Settings. Under the Account tab, select either Users or Programmatic Users. The relevant list of users will appear.
2. Click for the user you want to edit.
3. For Account Role, choose Policy Based.
4. In the Policies list, add or change the relevant policies for the user.

<img src="/administration/_media/manage-access-policies-02.png" width="300" height="184" />

## Edit an Access Policy

To make changes to an existing access policy, do the following:

1. In the console, click the User icon and click Settings. Under the Account tab, click Access Policies.
2. Click the Pencil icon on the policy you want to edit.
3. Make your changes, validate the changes, and click Update.

<img src="/administration/_media/manage-access-policies-03.png" width="300" height="398" />

## Delete an Access Policy

1. In the console, click the User icon and click Settings. Under the Account tab, click Access Policies.
2. Verify under Affected Users that there are no users attached to the policy. If there are, you will need to remove the policy from each of the users listed before you can delete.
3. Click Trash icon on the policy you want to delete.
