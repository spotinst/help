# Spot PC Tutorial: Edit Spot Group

Editing a Spot Group is a similar workflow to the [Create Spot Group](spot-pc/tutorials/deploy-spot-pc?id=create-spot-group) workflow but with a couple additional options. 
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-01.png" alt="Click to Enlarge" width="1000"> </a>

## Select Spot Group

Select the Spot Group to edit.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-02.png" alt="Click to Enlarge" width="1000"> </a>

## Edit Configurations

Optional edit the Name, Description and/or Profile Path of the Spot Group.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-03.png" alt="Click to Enlarge" width="1000"> </a>

## Update License Quantity

Select the type and quantity of licenses for this Spot Group. This determines the size and quantity of session hosts as well as the maximum number of users with access to these resources.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-04.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-04.png" alt="Click to Enlarge" width="1000"> </a>

## Choose Groups

Select one or more AD Security Groups. The members of the group(s) will be provisioned with Spot PC resources and have access to the resources for this Spot Group. Users can be added to (or removed from) this Spot Group by managing their membership in the AD Security Group in their domain.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-05.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-05.png" alt="Click to Enlarge" width="1000"> </a>

## Logoff Settings

Define the duration for both the _Active idle_ and _Disconnect idle_ settings for this Spot Group. For more details on this, see the [Understanding User Sessions and Inactivity Timeouts](spot-pc/tutorials/connect-to-desktop?id=understanding-user-sessions-and-inactivity-timeouts) article.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-06.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-06.png" alt="Click to Enlarge" width="1000"> </a>

## Set Custom Properties

Enable/disable custom RDP settings.

Supported RDP Settings:

- **Disk drives** - Drive/storage redirection: Redirect all disk drives, including drives that are connected later
- **Printers** - Printer redirection: The printers on the local computer are available in the remote session
- **Audio output** - Audio output location: Determines whether the local or remote machine plays audio.
- **Devices** - Plug and play device redirection: Redirect all supported devices, including ones that are connected later
- **Com ports** - COM ports redirection: COM ports on the local computer are available in the remote session
- **Smart cards** - mart card redirection: The smart card device on the local computer is available in the remote session
- **Full screen** mode - Determines whether the remote session window appears full screen when you launch the connection.
- **USB devices** - USB redirection: Redirect all USB devices that are not already redirected by another high-level redirection
- **Clipboard** - Clipboard redirection: Clipboard on local computer is available in remote session.
- **Audio input** - Microphone redirection: Local microphone is redirected to remote desktop.
- **Cameras** - Camera redirection: Redirect all cameras
- **Multi monitor** - Determines whether the remote session will use one or multiple displays from the local computer.

More details can be found in [Microsoft's KB](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/rdp-files?context=%2fazure%2fvirtual-desktop%2fcontext%2fcontext#device-redirection).
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-07.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-07.png" alt="Click to Enlarge" width="1000"> </a>

## Review and Save Configurations

Review your selections, navigate to _previous_ steps to make changes.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-edit-spot-group-08.png" target="_blank"><img src="/spot-pc/_media/tutorials-edit-spot-group-08.png" alt="Click to Enlarge" width="1000"> </a>

## What’s Next?

Learn more about [connecting to the Spot PC desktop](spot-pc/tutorials/connect-to-desktop) as an end user.
