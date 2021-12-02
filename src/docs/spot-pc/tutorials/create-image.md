<meta name="robots" content="noindex">

# Create Image for Spot PC Workflow

NOTE: The following workflow is for images to be used to deploy _Spot PC_ desktops.  To create an image for _Windows 365 Cloud PC_ desktops, see below.

Creating a VM image is the first step towards adding a new (or additional) group of users and resources to an organization.  The image will then be assigned to the Spot Group created in the [next step](spot-pc/tutorials/create-spot-group) of this process.

VM images for Spot PC are contained within Image Sets. Each new iteration of an image is represented within Spot PC as an Image with an incremented version number, all contained within a single Image Set. Then, an Image Set is assigned to a Spot Group, linking that image (and version) to that Spot Group. With this linkage intact, Spot PC optimization can automation the creation, deletion and availability of Spot PC session hosts for end users in real-time. Rolling out changes to the session host(s) is also simplified, once the new image version is created and tested, the Spot Group can be linked with the new image version and automation handles a seamless cutover to the new image.

## Creating a New Image Set

New image sets can be created based off of an Azure Marketplace Image.

To begin the process of creating a new Image Set and Image version 0.0.0:

- Navigate to the desired tenant
- Open the _Config Actions_ menu, open _Images_ and select _Create_
- The _New Image Set_ workflow has four steps

### Select Site

Select the site for the VM Image to be built (and to reside in) once completed You can select from all available sites in the tenant or a _Global_ option.

The _Global_ option will add the image to the Azure Shared Image Gallery and replicate the image across multiple Azure regions. <br>
NOTE: Due to replication time, the global image set won't be immediately available for customization. Please expect approximately 20 minutes of delay once the global image is saved.

### Select Image Source

The drop down for _Image Source_ is populated from Azure Marketplace, with filters applied to narrow the list to images relevant to Spot PC.

Depending on your use case, select the appropriate version of Windows.
If unsure, Spot PC recommends:

- Pooled Spot Group
- office-365-21h1-evd-o365pp
- office365-win11-21h2-avd-m365
- windows-10-s1h1-evd
- Personal Spot Group
- windows-10-21-h1-ent

### Image Name and Description

Enter a name and description for this Image Set. Choose the name and description that will help you find and organize Image sets.

The description can be edited later if needed.

### Add Notes and Save

Review your selections, navigate to _previous_ steps to make changes.

Add notes to document any important information about this image set and the 0.0.0 version. The goal is to write down how and why changes are being made for reference later by you or your colleagues.

## Creating a New Image Version

A new version of an existing image can be created from with an Image Set.

To begin the process of creating a new Image version:

- Navigate to the desired tenant
- Open the _Config Actions_ menu, open _Images_ and select _List_
- Click to open the desired Image Set
- Click \_+ Add New Version"
- The _New Image Set_ workflow has five steps

### Image Set Version

Enter the new version number for this image.

### Select Site

A location for the VM Image to be built and to reside once completed must be selected. You can select form all available sites in the tenant or a _Global_ option.

The _Global_ option will add the image to the Azure Shared Image Gallery and replicate the image across multiple Azure regions. <br>
NOTE: Due to replication time, the global image set won't be immediately available for customization. Please expect approximately 20 minutes of delay once the global image is saved.

### Select Image Source

The drop down for _Image Source_ is populated from Azure Marketplace, with filters applied to narrow the list to images relevant to Spot PC.

Depending on your use case, select the appropriate version of Windows.
Spot PC can support any Windows 10/11 Enterprise image available in the Azure Image Gallery, pooled users will require an image with "multi-session" support. If unsure, Spot PC recommends:

Pooled Userd Spot Group
* office-365-21h1-evd-o365pp
* office365-win11-21h2-avd-m365
* windows-10-21h1-evd
Personal Users Spot Group
* windows-10-21-h1-ent

### Add Notes and Save

Review your selections, navigate to _previous_ steps to make changes.

Add notes to document any important information about this new image version. The goal is to write down how and why changes are being made for reference later by you or your colleagues.

# Create Image for Windows 365 Cloud PC Workflow

NOTE: The following workflow is for images to be used to deploy _Windows 365 Cloud PC_ desktops.  To create an image for _Spot PC_ desktops, see above.

To begin this workflow navigate to _Config Actions > Create Device Image_ from within the appropriate tenant.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-create-image-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-create-image-01.png" alt="Click to Enlarge" width="500"> </a>

Creating a VM image is the first step towards adding a new (or additional) group of users and resources to an organization.  The image will then be assigned to the Windows 365 Connection created in the [next step](spot-pc/tutorials/deploy-windows-365-cloud-pc) of this process.

<a href="https://docs.spot.io/spot-pc/_media/tutorials-create-image-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-create-image-02.png" alt="Click to Enlarge" width="500"> </a>

## Enter Image Name
Enter a name for this image.

## Select Site
Select the site for the VM Image to be built (and to reside in) once completed. You can select from all available sites in the tenant.

## Version
Enter the version of this image for your own tracking and change control.

## Select Source Image
Select an image from the available list.

## Review and Create Device Image
Review your selections, navigate to _previous_ steps to make changes.

## What’s Next?

For Spot PC deployments, learn how to [create a Spot Group](spot-pc/tutorials/create-spot-group) and assign the image to the Spot Group in the Spot PC console.

or

For Windows 365 Cloud PC deployments, learn how to [create Windows 365 Cloud PC](spot-pc/tutorials/deploy-windows-365-cloud-pc) desktops and assign the image the Spot PC console.
