# Spot PC Tutorial: Deploy Spot PC Image Update

## Azure Virtual Desktop (AVD) Process

Spot PC uses machine images to automatically build VMs to support the user desktops.

Spot PC admins can change the image used for this automated process from the _Config Actions > Spot Group > Update_ menu on any tenant page.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-01.png" alt="Click to Enlarge" width="1000"> </a>

The update Spot Group workflow allows the admin to select the Spot Group, Image and Release Method of the update.


### Updating to a new Image Version Video
A walkthrough of the update Spot Group (deploy a new image) functionality is detailed here:

<iframe src="https://www.youtube-nocookie.com/embed/6TyltoaL288?vq=hd1080&modestbranding=1&rel=0&theme=light&color=white" height="480" frameborder="0"></iframe>

### Creating a New Image Version

A new version of an existing image can be created from within an Image Set.

To begin the process of creating a new Image version, navigate to the desired tenant:

- Open the _Config Actions_ menu, open _Images_ and select _List_
- Click to open the desired Image Set
- Click _\+ Add New Version_
- Image set version - enter an appropriate version number for this image version in the format of x.x.x <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-02.png" alt="Click to Enlarge" width="1000"> </a>
- Select Image Source - Select the source of this new image version <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-03.png" alt="Click to Enlarge" width="1000"> </a>
- Add Notes and Save - Add any relevant notes to document what is changed in this new image version. <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-04.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-04.png" alt="Click to Enlarge" width="1000"> </a>
- After approximitly 20 minutes, a temporary VM will be created, you can then _connect_ to the VM and make any changes such as adding applications and adjusting settings.<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-07.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-07.png" alt="Click to Enlarge" width="1000"> </a>
- Once the temporary VM is configured to meet requirements, the _Seal Image_ link will sysprep the VM and create an image for Spot PC to use. This process usually takes less than 5 minutes. <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-08.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-08.png" alt="Click to Enlarge" width="1000"> </a>

### Updating the Spot Group with the New Image version

Once the _Seal Image_ process has completed, this version can be used in the existing Spot Group through the _Update Spot Group_ workflow.

To begin the process of deploying the new image version, navigate to the desired tenant:
- Open the _Config Actions_ menu, open _Spot Group_ and select _Update_
- Select Spot Group - Select the desired Spot Group to update <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-09.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-09.png" alt="Click to Enlarge" width="1000"> </a>
- Select Image Set - Select the desired version for this Spot Group <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-10.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-10.png" alt="Click to Enlarge" width="1000"> </a>
- Select Release Method - The release method determins how the exisitng VMs are replaced.  The _Opportunistic_ method will replace sessions hosts that are not in use, and route new logins to the new VMs.  Over time the old version will cycle out until all VMs are based on the new image version.  The _Immediate_ and _Scheduled_ options operate in the same way, only the timing of the action varies.  In both cases, the new VMs are created, and once available, all new user session will be routed to the new VMs.  All active users are then notified to sign out and then reconnect to get the new VM version.  Users are given a 5 minute warning and then signed out automatically.  <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-11.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-11.png" alt="Click to Enlarge" width="1000"> </a>
- Review and Update Spot Group - Simply confirm your selections and finish the workflow <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-12.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-12.png" alt="Click to Enlarge" width="1000"> </a>

## Windows 365 Cloud PC Process

Windows 365 uses VM images to automatically build VMs to support the user desktops.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-05.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-05.png" alt="Click to Enlarge" width="1000"> </a>

The image used for this process is set by [editing](spot-pc/tutorials/edit-w365) the Provisioning Policy and (on step 3) selecting a different Image.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-image-06.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-image-06.png" alt="Click to Enlarge" width="1000"> </a>

## What’s Next?

Learn more about editing a [Spot Group](spot-pc/tutorials/edit-spot-group) or [Windows 365 Provisioning Policy](spot-pc/tutorials/edit-w365).
