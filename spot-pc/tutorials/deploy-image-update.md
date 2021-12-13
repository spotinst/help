<meta name="robots" content="noindex">

# Spot PC Tutorial: Deploy Spot PC Image Update

## Azure Virtual Desktop (AVD) Process
Spot PC uses machine images to automatically build VMs to support the user desktops.

Spot PC admins can change the image used for this automated process from the _Config Actions > Spot Group > Update_ menu on any tenant page.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-01.png" alt="Click to Enlarge" width="1000"> </a>

The update Spot Group workflow allows the admin to select the Spot Group, Image and Release Method of the update.

### Creating a New Image Version

A new version of an existing image can be created from with an Image Set.

To begin the process of creating a new Image version:

- Navigate to the desired tenant
- Open the _Config Actions_ menu, open _Images_ and select _List_
- Click to open the desired Image Set
- Click _+ Add New Version"
- The _New Image Set_ workflow has steps
  - Image set version <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-01.png" alt="Click to Enlarge" width="400"> </a>
  - Select Image Source
  - Add Notes and Save



Follow the workflow covering the same data as the [Creating a New Image Set](spot-pc/tutorials/deploy-spot-pc?id=creating-a-new-image-set) workflow but entering an incremented version number.

## Windows 365 Cloud PC Process
Windows 365 uses VM images to automatically build VMs to support the user desktops.

The image used for this process is set by [editing](spot-pc/tutorials/edit-w365)  the Provisioning Policy and (on step 3) selecting a different Image.  

## What’s Next?

Learn more about editing a [Spot Group](spot-pc/tutorials/edit-spot-group) or [Windows 365 Provisioning Policy](spot-pc/tutorials/edit-w365).
