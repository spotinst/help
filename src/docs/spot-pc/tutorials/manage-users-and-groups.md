<meta name="robots" content="noindex">

# Spot PC Tutorial: Manage Users and Groups

Spot PC is built to manage access to resources (desktops) based on the AD security groups of the tenant's company.  AD Security group membership is not managed from within the Spot PC console to minimize security exposure of the customer's AD environment.  Therefore adding/removing users from Spot Groups must be performed on the tenant's AD configuration.

## Azure Virtual Desktop (AVD) Process
When creating or editing a Spot Group, the admin can specify the groups(s) associated with that Spot Group and all members of those groups will be automatically granted access to Spot PC resources.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-manage-users-and-groups-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-manage-users-and-groups-01.png" alt="Click to Enlarge" width="1000"> </a>

## Windows 365 Cloud PC Process
When creating or editing a Windows 365 Provisioning Policy, the admin can specify the groups(s) associated with that policy and all members of those groups will be automatically granted access to the Cloud PC resources.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-manage-users-and-groups-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-manage-users-and-groups-02.png" alt="Click to Enlarge" width="1000"> </a>

## What’s Next?

Invite your co-workers to create their own Spot PC admin account(s). The guide for [managing admin accounts is found here](spot-pc/tutorials/manage-admins).
