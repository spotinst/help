# Edit User Details

Once you have [created a new user](administration/users-a/create-new-user), you can easily modify the user details whenever you choose.

## Get Started

1. Go to the User icon in the Spot console and click Settings.

<img src="/administration/_media/create-new-user-01.png" width="381" height="258" />

2. Under Organization in the left menu, click Users, then in the Name column on the left, click the name of a user. If you don’t see the name of the user you want to edit in the Name column, use the search box above to find the user’s name.

<img src="/administration/_media/edit-user-details-01.png" />

## User Details

The User Details page appears with a summary line of information about the user at the top. Below that are tabs with information about the user’s groups, policies, and API tokens.

<img src="/administration/_media/edit-user-details-02.png" />

### User Details Summary Line

The following user details are displayed:
- User Name
- Type
- Email (only for console users)
- Description (only for programmatic users)
- User ID

### Manage Groups

The Groups tab shows a listing of the groups the user belongs to. For each group, the table also shows all the policies associated with that group.

For each group, two policies are shown in the table, and the number of additional policies are indicated with a plus sign, e.g., +5 in the example below. To see a listing of the additional policies, click on the number by the plus sign.

<img src="/administration/_media/edit-user-details-03.png" />

To add or remove groups associated with the user, do the following:
1. Above the table on the right, click Manage.
2. In the Manage Groups popup, mark or unmark groups as needed, then click Update.

<img src="/administration/_media/edit-user-details-04.png" width="370" height="169" />

### Manage Policies

Under the Policies tab is a listing of policies associated with the user. For each policy, the table shows the policy Type and all the user’s Accounts that include the policy.

<img src="/administration/_media/edit-user-details-05.png" />

If you need to associate additional policies with the user, do the following:
1. Above the table on the right, click Manage.
2. Select the name of the policy from the dropdown list. Note that the dropdown list doesn’t include the policies the user inherited from the groups. If you wish to remove an ‘inherited’ policy, you must un-assign the user from the group or remove the policy from the group itself.
3. If the policy is at account level, you need to select at least one account to associate with this policy.

<img src="/administration/_media/edit-user-details-06.png" width="300" height="160" />

In addition, you can review existing policies and detach any policy you no longer need.
### Manage API Tokens

Under the API Tokens tab is a listing of all the tokens the user has. The listing also shows the last four digits of each token and the creation date.

#### Add a token:
1. Click Generate API Token.
2. Enter a name for your token and click Generate.
3. After the token is generated, copy your full token to a safe location and click Done.

#### Delete a token:
1. In the list of API tokens, select the row of the token to delete. The row turns blue and a Trash icon appears on the right.
2. Click the Trash icon.
3. In the popup that appears, confirm that you want to delete the token.

## Remove User

To remove a user from Spot, do the following:
1. In the upper right of the User Details page, click Remove User.
2. In the popup that appears, confirm that you want to remove the user from Spot.

<img src="/administration/_media/edit-user-details-07.png" width="243" height="97" />

**All API tokens associated with the user will also be deleted**.

## What’s Next?

Learn more about using [Groups](administration/groups/) in Spot administration.
