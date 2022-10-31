<meta name="robots" content="noindex">

# Users

In Spot, a *user* is a person who accesses the Spot console to perform any action such as viewing information, producing reports, or creating and configuring spot clusters.

A user can also be an application that accesses Spot programmatically using the Spot APIs. Using CRUD actions via the APIs, programmatic users can perform all the same actions that console users do.

## How it works

We make it really easy for you to create a new user with the creation wizard. The wizard includes the simple steps summarized below. For the detailed procedures, see [Create New User](administration/users-a/create-new-user).
1. You define the most basic user details such as user name and whether the user is a console or programmatic user.
2. You attach the user to one or more groups. This will determine which Spot services the user is allowed to use and what kind of actions the user can perform.
3. Usually, a user will receive all the required permissions simply by assigning the user to one or more groups. However, if the user needs permissions that are not included in policies inherited from the assigned groups, you can use Step 3 of the wizard to associate the user with additional policies.

### Just starting with Spot

If your organization is just starting to use Spot, you will not have any groups defined yet. So when you add new users using the wizard as described in the process above, you will not add the user to any group. Then, after you have added a number of users, you can use the [group creation wizard](administration/groups/create-new-group) to add the users to groups.

### Modify User Information

Once you have created a user, you can go back at any time and [edit the user information](administration/groups/edit-group-details), change the groups the user belongs to, and change the policies associated with the user. You can also remove the user from the system.

## What’s Next?

Learn how to [create new users](administration/users-a/create-new-user) in Spot.
