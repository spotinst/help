# Users

In Spot, a user is a person who accesses the Spot console to perform any action such as viewing information, producing reports, or creating and configuring spot clusters.

A user can also be an application that accesses Spot programmatically using the Spot APIs. Using CRUD actions in the APIs, programmatic users can perform all the same actions that console users do.

It is easy to create a new user with the creation wizard. The wizard includes the simple steps summarized below. For the detailed procedures, see [Create New User](administration/users-a/create-new-user).
1. Define the most basic user details such as user name and whether the user is a console or programmatic user.
2. Attach the user to one or more groups. This determines the Spot services the user is allowed to use and what kind of actions the user can perform.
3. Usually, a user gets all the required permissions from the groups. However, if a user needs permissions that are not included in policies inherited from the assigned groups, you can use Step 3 of the wizard to associate the user with additional policies.

If your organization is just starting to use Spot, you will not have any groups defined yet. So when you add new users using the wizard as described in the process above, you will not add the user to any group. Then, after you have added a number of users, you can use the [group creation wizard](administration/groups/create-new-group) to add the users to groups.
