# Create New User

Creating a new [user](administration/users-a/) consists of the following major steps:
1. Define user details
2. Choose Groups
3. Choose Permission Policies

Each of these is described below.

## Get Started

1. Go to the User icon in the Spot console and click Settings.

<img src="/administration/_media/create-new-user-01.png" width="381" height="258" />

2. Under Organization in the left menu, click Users, then on the right, click Create New User.

<img src="/administration/_media/create-new-user-02.png" />

The Create New User wizard appears and displays the User Details page.

## User Details

In the Create New User popup, complete the required information and then click Continue.
- User Name: The name of the user or application that will use Spot.
- User Type: Choose one of the following user types:
  - Console: The user is a person accessing the Spot console. If you choose this, enter the person’s Name and Email address.
  - Programmatic: The user is an application accessing Spot with the API. If you choose this, enter a Name and Description.

<img src="/administration/_media/create-new-user-03.png" />

## Groups

After you click Continue, you can associate the new user with one or more groups.

<img src="/administration/_media/create-new-user-04.png" />

If you don’t see the group you are looking for, use the search box to find it. The user will inherit the policies associated with the groups you select.

To find out more about groups, see [Groups](administration/groups/).

## Permission Policies

If you need the user to have policies that are not associated with the groups you choose, you can use this option to associate the required policies.

<img src="/administration/_media/create-new-user-05.png" />

1. Select the policy from the dropdown list.
2. If the policy you are looking for is on the account level, you must select the relevant account(s) from the list of accounts.

To learn more about policies, see [Permission Policies](administration/policies/).

## What’s Next?

Learn how to [edit user details](administration/users-a/edit-user-details).
