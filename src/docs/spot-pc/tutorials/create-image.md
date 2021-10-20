<meta name="robots" content="noindex">

## Create Image Workflow

VM images for Spot PC are contained within Image Sets.  Each new iteration of an image is represented within Spot PC as an Image with an incremented version number, all contained within a single Image Set. Then, an Image Set is assigned to a Spot Group, linking that image (and version) to that Spot Group.  With this linkage intact, Spot PC optimization can automation the creation, deletion and availability of Spot PC session hosts for end users in real-time.  Rolling out changes to the session host(s) is also simplified, once the new image version is created and tested, the Spot Group can be linked with the new image version and automation handles a seamless cutover to the new image.

## Creating a New Image Set
New image sets can be created based off of an Azure Marketplace Image.  

To begin the process of creating a new Image Set and Image version 0.0.0:
* Navigate to the desired tenant
* Open the _Config Actions_ menu, open _Images_ and select _Create_
* The _New Image Set_ workflow has four steps

### Select Site
A location for the VM Image to be built and to reside once completed must be selected.  You can select form all available sites in the tenant or a _Global_ option.  

The _Global_ option will add the image to the Azure Shared Image Gallery and replicate the image across multiple Azure regions. <br>
NOTE: Due to replication time, the global image set won't be immediately available for customization.  Please expect approximately 20 minutes of delay once the global image is saved.

### Select Image Source
The drop down for _Image Source_ is populated from Azure Marketplace, with filters applied to narrow the list to images relevant to Spot PC.  

Depending on your use case, select the appropriate version of Windows.
If unsure, Spot PC recommends:
* Pooled Spot Group
 * office-365-21h1-evd-o365pp
 * office365-win11-21h2-avd-m365
 * windows-10-s1h1-evd
*  Personal Spot Group
 * windows-10-21-h1-ent

### Image Name and Description
Enter a name and description for this Image Set.  Choose the name and description that will help you find and organize Image sets.  

The description can be edited later if needed.

### Add Notes and Save

Review your selections, navigate to _previous_ steps to make changes.  

Add notes to document any important information about this image set and the 0.0 version.  The goal is to write down how and why changes are being made for reference later by you or your colleagues.

## Creating a New Image Version
A new version of an existing image can be created from with an Image Set.

To begin the process of creating a new Image version:
* Navigate to the desired tenant
* Open the _Config Actions_ menu, open _Images_ and select _List_
* Click to open the desired Image Set
* Click _+ Add New Version"
* The _New Image Set_ workflow has five steps

### Image Set Version
Enter the new version number for this image.

### Select Site
A location for the VM Image to be built and to reside once completed must be selected.  You can select form all available sites in the tenant or a _Global_ option.  

The _Global_ option will add the image to the Azure Shared Image Gallery and replicate the image across multiple Azure regions. <br>
NOTE: Due to replication time, the global image set won't be immediately available for customization.  Please expect approximately 20 minutes of delay once the global image is saved.

### Select Image Source
The drop down for _Image Source_ is populated from Azure Marketplace, with filters applied to narrow the list to images relevant to Spot PC.  

Depending on your use case, select the appropriate version of Windows.
If unsure, Spot PC recommends:
* Pooled Spot Group
 * office-365-21h1-evd-o365pp
 * office365-win11-21h2-avd-m365
 * windows-10-s1h1-evd
*  Personal Spot Group
 * windows-10-21-h1-ent

### Set User Status

### Add Notes and Save


## What’s Next?

Learn more about the [Image workflow](spot-pc/tutorials/create-image/) in the Spot PC Console.
