<meta name="robots" content="noindex">

## Create Spot Group Workflow
Creating a Spot group is the second step towards adding a new (or additional) group of users and resources to an organization.  The image created in the [first step](spot-pc/tutorials/create-image/) of this process will be used.

Creating a Spot Group can be done from the _Config Actions_ menu, found when inside any tenant.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-create-spot-group-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-create-spot-group-01.png" alt="Click to Enlarge" width="500"> </a>

Clicking _Create_ will open the Create Spot Group workflow is displayed.

## Create Spot Group

### Enter Spot Group Name  
Enter a name and friendly name for the Spot Group.

### Enter Profile Path
Enter the path to the data volume that will host the company shared data and the users' personal data.

### Select Spot Group License
Select the type of user licensing to be used for this Spot Group.

Pooled users share a session host which personal users a dedicated session host when connecting. All users in a Spot Group must be the same user type.

Use the slider to define the total number of named licenses you with to assign to this Spot Group.  This should equal the total number of users you'll have accessing resources in this Spot Group.

### Select Site
Select the site into which you wish to deploy this Spot Group.

### Select Groups
Select the existing AD Security Group(s) which contain the users to be assigned to this spot group.  

### Select Image Set
Select the image set and image version that will be used to build session hosts for this Spot Group.

### Description
Enter a useful description of this Spot Group to help you and other Spot PC Admins identify this Spot Group, who it is for, and how it is unique.

Add notes to document any important information about this new image version. The goal is to write down how and why changes are being made for reference later by you or your colleagues.

### Review and Save Spot Group
Review your selections, navigate to _previous_ steps to make changes.

Once saved, the Spot PC automation engine will build and configure the environment to support this new Spot Group, the users and the session hosts.

## What’s Next?

Learn more about the [Image workflow](spot-pc/tutorials/create-image/) in the Spot PC console.
