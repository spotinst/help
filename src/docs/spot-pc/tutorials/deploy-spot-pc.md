# Spot PC Tutorial: Deploy Spot PC Workflow

Deploying Spot PC desktops with Spot PC takes two simple configuration workflows: [Create Image](spot-pc/tutorials/deploy-spot-pc?id=create-image) and [Create Spot Group](spot-pc/tutorials/deploy-spot-pc?id=create-spot-group)

NOTE: This is the Spot PC workflow, for Windows 365 Cloud PC, [click here](spot-pc/tutorials/deploy-windows-365-cloud-pc).

## Create Image

Creating a VM image is the first step towards adding a new (or additional) group of users and resources to an organization. The image will then be assigned to the Spot Group created in the [next step](spot-pc/tutorials/deploy-spot-pc?id=create-spot-group) of this process.

VM images for Spot PC are contained within Image Sets. Each new iteration of an image is represented within Spot PC as an Image with an incremented version number, all contained within a single Image Set. Then, an Image Set is assigned to a Spot Group, linking that image (and version) to that Spot Group. With this linkage intact, Spot PC optimization can automate the creation, deletion and availability of Spot PC session hosts for end users in real-time. Rolling out changes to the session host(s) is also simplified, once the new image version is created and tested, the Spot Group can be linked with the new image version and automation handles a seamless cutover to the new image.

### Create and Update Images Video

A walkthrough of the create image and update image functionality is detailed here:

<iframe src="https://www.youtube-nocookie.com/embed/RnXXJ-XJE7U?vq=hd1080&modestbranding=1&rel=0&theme=light&color=white" height="480" frameborder="0"></iframe>

### Creating a New Image Set

New image sets can be created based off of an Azure Marketplace Image.

To begin the process of creating a new Image Set and Image version 0.0.0:

- Navigate to the desired tenant
- Open the _Config Actions_ menu, open _Images_ and select _Create_
- The _New Image Set_ workflow has four steps
  <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-spot-pc-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-spot-pc-01.png" alt="Click to Enlarge" width="1000"> </a>

#### Select Site

Select the site for the temporary VM to be built and for the final VM image to reside in. You can select from all available sites in the tenant or a _Global_ option.

The _Global_ option will add the image to the Azure Shared Image Gallery and replicate the image across multiple Azure regions. <br>
NOTE: Due to replication time, the global image set won't be immediately available for customization. Please expect approximately 20 minutes of delay once the global image is saved.

#### Select Image Source

The drop down for _Image Source_ is populated from Azure Marketplace, with filters applied to narrow the list to images relevant to Spot PC.

Depending on your use case, select the appropriate version of Windows.
If unsure, Spot PC recommends:

Pooled Spot Group

- office-365-win10-21h2-avd-m365
- office-365-win11-21h2-avd-m365
- Windows-10-win10-21h2-avd

Personal Spot Group

- Windows-10-win10-21h2-ent

#### Image Name and Description

Enter a name and description for this Image Set. Choose the name and description that will help you find and organize Image sets.

The description can be edited later if needed.

#### Add Notes and Save

Review your selections, navigate to _previous_ steps to make changes.

Add notes to document any important information about this image set and the 0.0.0 version. The goal is to write down how and why changes are being made for reference later by you or your colleagues.

To customize the image, create a new version (e.g. 0.0.1) following [these instructions](spot-pc/tutorials/deploy-image-update?id=creating-a-new-image-version).

## Create Spot Group

### Create Spot Group Workflow

Creating a Spot group is the second step towards adding a new (or additional) group of users and resources to an organization. The image created in the [first step](spot-pc/tutorials/deploy-spot-pc?id=create-image) of this process will be used.

Creating a Spot Group can be done from the _Config Actions_ menu, found when inside any tenant.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-create-spot-group-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-create-spot-group-01.png" alt="Click to Enlarge" width="1000"> </a>

Clicking _Create_ will open the Create Spot Group workflow.

### Create Spot Group

### Create and Update Spot Group Video

A walkthrough of the create Spot Group and update Spot Group functionality is detailed here:

<iframe src="https://www.youtube-nocookie.com/embed/VcXmX0UDURU?vq=hd1080&modestbranding=1&rel=0&theme=light&color=white" height="480" frameborder="0"></iframe>

#### Enter Spot Group Name

Enter a name and friendly name for the Spot Group.

#### Enter Profile Path

Enter the path to the data volume that will host the company shared data and the users' personal data.

#### Select Spot Group License

Select the type and quantity of licenses for this Spot Group. This determines the size and quantity of session hosts as well as the maximum number of users with access to these resources.

Pooled users share a session host while personal users a dedicated session host when connecting. All users in a Spot Group must be the same user type.

Use the slider to define the total number of named licenses you wish to assign to this Spot Group. This should equal the total number of users you'll have accessing resources in this Spot Group.

#### Select Site

Select the site into which you wish to deploy this Spot Group.

#### Select Groups

Select one or more AD Security Groups. The members of the group(s) will be provisioned with Spot PC resources and have access to the resources for this Spot Group. Users can be added to (or removed from) this Spot Group by managing their membership in the AD Security Group in their domain.

#### Select Image Set

Select the image set and image version that will be used to build session hosts for this Spot Group.

#### Description

Enter a useful description of this Spot Group to help you and other Spot PC Admins identify this Spot Group, who it is for, and how it is unique.

Add notes to document any important information about this new image version. The goal is to write down how and why changes are being made for reference later by you or your colleagues.

#### Review and Save Spot Group

Review your selections, navigate to _previous_ steps to make changes.

Once saved, the Spot PC automation engine will build and configure the environment to support this new Spot Group, the users and the session hosts.

## What’s Next?

Once the Spot Group is deployed, there are several next steps you can explore.

Use the [Operational Dashboards](spot-pc/features/spot-pc-console/tenant/) to monitor and support Spot PC.

Test the login as an end user, instructions for [Connecting to the Spot PC desktop are found here](spot-pc/tutorials/connect-to-desktop).

Manage which end users have access to this Spot Group. The guide for [managing users and groups is found here](spot-pc/tutorials/manage-users-and-groups).

Invite your co-workers to create their own Spot PC admin account(s). The guide for [managing admin accounts is found here](spot-pc/tutorials/manage-admins).

Edit the Spot Group to make granular changes to how it works. The guide for [editing Spot Groups is found here](spot-pc/tutorials/edit-spot-group).

Make changes to the image and deploy the new image to the Spot Group. The guide for [deploying image updates is found here](spot-pc/tutorials/deploy-image-update).

Create another tenant for a different customer or Azure AD tenant. The guide for [adding a new Tenant is found here](spot-pc/tutorials/add-tenant).
