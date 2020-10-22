# Users and Roles

When you create a user, you must define a role in order to set the limitations of the specific user inside the account and organization.

## Organization Level

**Admin**

The Admin role enables the user full control and access on an organization level. Admins can add users, create new accounts and organizations, and have full access to all sub-accounts in the organization.

**User**

The User role can have editing and viewing rights, but is not able to make changes at the organization level.

<img src="/administration/_media/users-and-roles-01.png" />

## Account Level

When you create a new user or add an existing user to an account, you must assign one of the roles described below.

**Viewer**

This role allows read-only access. The user is able to view all data regarding the account's Elastigroups and relevant statistics, but is not able to apply any actions.

**Editor**

This role allows the user to modify and change settings within the Account. The Editor user has access that resembles the access given to an Admin, but Account and Organization management are not available to this role.

## Policy Based

This role enables you to assign a custom policy to a user. A policy can define user permissions per resource and per action. For more information about defining policies, see [Access Policies](administration/access-policies/).

<img src="/administration/_media/users-and-roles-02.png" width="300" height="332" />
