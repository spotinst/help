# Spot PC Tutorial: Deploy Windows 365 Cloud PC

Deploying Windows 365 Cloud PC desktops with Spot PC takes three simple configuration workflows: [Connections](spot-pc/tutorials/deploy-windows-365-cloud-pc?id=create-connection), [Images](spot-pc/tutorials/deploy-windows-365-cloud-pc?id=create-image) and [Provisioning Policies](spot-pc/tutorials/deploy-windows-365-cloud-pc?id=create-provisioning-policy).

NOTE: This is the Windows 365 Cloud PC workflow, for Spot PC, [click here](spot-pc/tutorials/deploy-spot-pc).

## Create Connection

To begin this workflow navigate to _Config Actions > Create Connection_ from within the appropriate tenant.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-01.png" alt="Click to Enlarge" width="1000"> </a>

Creating the Connection is the first step towards adding a new (or additional) Windows 365 Cloud PC group. This Connection is analogous to the Spot Group for a Spot PC deployment.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-02.png" alt="Click to Enlarge" width="1000"> </a>

### Select

Select the site for the VM Image to be built (and to reside in) once completed. You can select from all available sites in the tenant.

### Choose Credentials

Enter a Domain Join admin account and password to facilitate the deployment of these Cloud PC desktops. A unique admin account (dedicated to Domain Join actions in Spot PC) for solely this purpose is recommended for security reasons.

### Connection Detail

Enter a name for this Connection.

### Review and Save Configuration

Review your selections, navigate to _previous_ steps to make changes.

### Health Check

Confirms the configuration is healthy.

## Create Image

To begin this workflow navigate to _Config Actions > Create Device Image_ from within the appropriate tenant.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-03.png" alt="Click to Enlarge" width="1000"> </a>

Creating a VM image is the second step towards adding a new (or additional) Windows 365 Cloud PC group. The image will then be assigned to the Windows 365 Connection created in the [next step](spot-pc/tutorials/deploy-windows-365-cloud-pc) of this process.

<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-04.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-04.png" alt="Click to Enlarge" width="1000"> </a>

### Enter Image Name

Enter a name for this image.

### Select Site

Select the site for the VM Image to be built (and to reside in) once completed. You can select from all available sites in the tenant.

### Version

Enter the version of this image for your own tracking and change control.

### Select Source Image

Select an image from the available list.

### Review and Create Device Image

Review your selections, navigate to _previous_ steps to make changes.

## Create Provisioning Policy

To begin this workflow navigate to _Config Actions > Create Provisioning Policy_ from within the appropriate tenant.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-05.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-05.png" alt="Click to Enlarge" width="1000"> </a>

Creating a Provisioning Policy is the third step towards adding a new (or additional) Windows 365 Cloud PC group. The Provisioning Policy associates the Connection with the Image and associates users to complete the Windows 365 Cloud PC creation process.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-06.png" target="_blank"><img src="/spot-pc/_media/tutorials-deploy-windows-365-cloud-pc-06.png" alt="Click to Enlarge" width="1000"> </a>

### Select Connection

Select the appropriate Connection.

### Select Device Image

Select the appropriate device image. Either a custom image (created above) or an Azure Gallery Image can be used.

### Select Group

Select the existing AD Security Group(s) which contain the users to be assigned to this spot group.

### Provisioning Policy Detail

Enter a policy name and description for your own future reference.

### Review and Save Provisioning Policy

Review your selections, navigate to _previous_ steps to make changes.

## What’s Next?

Use the [Operational Dashboards](spot-pc/features/spot-pc-console/tenant/) to monitor and support Spot PC.

Test the login as an end user, instructions for [Connecting to the Spot PC desktop is found here](spot-pc/tutorials/connect-to-desktop).

Manage which end users have access to this Spot Group. The guide for [managing users and groups is found here](spot-pc/tutorials/manage-users-and-groups).

Invite your co-workers to create their own Spot PC admin account(s). The guide for [managing admin accounts is found here](spot-pc/tutorials/manage-admins).

Edit the Windows 365 Cloud PC Connection. The guide for [editing Spot Groups is found here](spot-pc/tutorials/edit-spot-group).

Make changes to the image and deploy the new image to the Spot Group. The guide for [deploying image updates is found here](spot-pc/tutorials/deploy-image-update).

Create another tenant for a different customer or Azure AD tenant. The guide for [adding a new Tenant is found here](spot-pc/tutorials/add-tenant).
