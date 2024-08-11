# Users

In Spot, a user is a person who accesses the Spot console to perform any action such as viewing information, producing reports, or creating and configuring spot clusters.

A user can also be an application that accesses Spot programmatically using the Spot APIs. Using CRUD actions in the APIs, programmatic users can perform all the same actions that console users do.

If your organization is just starting to use Spot, you will not have any groups defined yet. So when you add new users using the wizard, you will not add the user to any group. Then, after you have added a number of users, you can use the [create new group](administration/groups/create-new-group) wizard to add the users to groups.

From the list of users, you can:
* [Create a user](administration/users-a/?id=create-a-user)
* Export the list of users to a CSV
* View user details
* Click on a user to view more information and edit the user's:
    * [Groups](administration/groups/)
    * [Permission policies](administration/policies/)
    * [API tokens](administration/api/create-api-token)
* Remove a user from Spot by clicking on a user and then **Delete User** (keep in mind that when you delete a user, all API tokens associated with that user are also deleted)

## Create User

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Click **Organization** > **Users** > **Create New User**.
4. Select the **Access Type**:
   - **Console** if the user is a person who uses the Spot console. Console users can also use the Spot API. Enter the person’s **Name** and **Email address**.
   - **Programmatic** if the user is an application that only uses the Spot API. Enter a **Name** (and **Description**).
6. Click **Continue**.
7. Search for and select the [groups](administration/groups/) to associate with the user. The user will inherit the policies associated with the groups you select.
8. Click **Next**.
9. If the user needs additional permissions that are not associated with the groups, associate the user with additional [policies](administration/policies/):
      <ol style="list-style-type: lower-alpha;">
        <li>Select the <b>Policy</b>.</li>
        <li>If the policy you are looking for is on the account level, select the <b>Accounts</b>.</li>
    </ol>
10. Click **Create User**.

## Reset Password

1. In the Spot console, go to the user icon and click **Settings**.
2. Click the Security tab and update your password.

> **Tip**: SAML or SSO users who want to create an API Token will have to reset their password first.

### Password Constraints

Your password must have at least eight characters and contain at least:

- One digit
- One uppercase character
- One lowercase character
- One special character

