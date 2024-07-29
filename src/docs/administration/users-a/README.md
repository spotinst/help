# Users

In Spot, a user is a person who accesses the Spot console to perform any action such as viewing information, producing reports, or creating and configuring spot clusters.

A user can also be an application that accesses Spot programmatically using the Spot APIs. Using CRUD actions in the APIs, programmatic users can perform all the same actions that console users do.

It is easy to [create a new user](administration/users-a/create-new-user) with the creation wizard:
1. Define the basic user details, such as user name and if the user is a console or programmatic user.
2. Attach the user to groups, which controls the Spot services the user is allowed to use and the kind of actions the user can perform.
3. If a user needs permissions that are not included in policies inherited from the assigned groups, you can use Step 3 of the wizard to associate the user with additional policies.

If your organization is just starting to use Spot, you will not have any groups defined yet. So when you add new users using the wizard, you will not add the user to any group. Then, after you have added a number of users, you can use the [create new group](administration/groups/create-new-group) wizard to add the users to groups.

From the list of users, you can:
* Export the list of users to a CSV
* View user details
* Click on a user to view more information and edit the user's:
    * [Groups](administration/groups/)
    * [Permission policies](administration/policies/)
    * [API tokens](administration/api/create-api-token)
* Remove a user from Spot by clicking on a user and then **Delete User** (keep in mind that when you delete a user, all API tokens associated with that user are also deleted)
