<meta name="robots" content="noindex">

# Getting Started

## Workflow Focused

Spot PC administration is designed around a few simple workflows.

### Org Onboarding Workflow

The first workflow is the onboarding workflow which builds and configures the base environment, network, AD integration and other deployment tasks.

**Connect Azure account > Authorize Spot PC > Select Azure region > Connect to active directory > Build environment**

<a href="https://docs.spot.io/spot-pc/_media/getting-started-01.png" target="_blank"><img src="/spot-pc/_media/getting-started-01.png" alt="Click to Enlarge" width="500"> </a>

### VM Image Customization

The second is a VM image building workflow which simplifies the creation of Vm images. These images are used as the basis for all host VMs in Spot PC. All applications and customizations are applied to the images and then Spot PCs automation engine uses the images in the management of host VM instances.

**Select source image > Build temp VM > Customize temp VM > Capture temp VM as image > Assign new image to Spot Group**

<a href="https://docs.spot.io/spot-pc/_media/getting-started-02.png" target="_blank"><img src="/spot-pc/_media/getting-started-02.png" alt="Click to Enlarge" width="500"> </a>

## Spot Group Creation Workflow

The second is the creation of the Spot Group which contains the users, resources and settings for a set of users with homogeneous desktop requirements.

<a href="https://docs.spot.io/spot-pc/_media/getting-started-04.png" target="_blank"><img src="/spot-pc/_media/getting-started-04.png" alt="Click to Enlarge" width="500"> </a>

## Operational Dashboards

Spot PC is also built on the prioritization of actionable data. Within each Spot PC tenant there are three dashboards designed to simplify day-to-day operations: _User Sessions, Machines and Security_. On each tab, live data steams to the screen and updates in realtime. Additional details about these users, machines and security items can be displayed by clicking the individual item from their dashboard.

<a href="https://docs.spot.io/spot-pc/_media/getting-started-03.png" target="_blank"><img src="/spot-pc/_media/getting-started-03.png" alt="Click to Enlarge" width="500"> </a>

## What’s Next?

Learn more about [building VM images](spot-pc/tutorials/create-image) for Spot PC.
