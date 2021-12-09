<meta name="robots" content="noindex">

# Spot PC: Getting Started

## Workflow Focused

Spot PC administration is designed around a few simple workflows. Understanding these primary workflows is fundamental to successfully administering Spot PC for your tenant(s).

### Org Onboarding Workflow

The first workflow is the onboarding workflow which builds and configures the base environment, network, AD integration and other deployment tasks.

**Connect Azure account > Authorize Spot PC > Select Azure region > Connect to active directory > Build environment**

<a href="https://docs.spot.io/spot-pc/_media/getting-started-01.png" target="_blank"><img src="/spot-pc/_media/getting-started-01.png" alt="Click to Enlarge" width="1000"> </a>

More detail is found in the [Onboarding Workflow](spot-pc/getting-started/onboarding-workflow) guide.

### VM Image Customization

The second is a VM image building workflow which simplifies the creation of Vm images. These images are used as the basis for all host VMs in Spot PC. All applications and customizations are applied to the images and then Spot PCs automation engine uses the images in the management of host VM instances.

**Select source image > Build temp VM > Customize temp VM > Capture temp VM as image > Assign new image to Spot Group**

<a href="https://docs.spot.io/spot-pc/_media/getting-started-02.png" target="_blank"><img src="/spot-pc/_media/getting-started-02.png" alt="Click to Enlarge" width="1000"> </a>

More detail is found in the [Create Image](spot-pc/tutorials/deploy-spot-pc?id=create-image) guide.

## Spot Group Creation Workflow

The second is the creation of the Spot Group which contains the users, resources and settings for a set of users with homogeneous desktop requirements.

<a href="https://docs.spot.io/spot-pc/_media/getting-started-04.png" target="_blank"><img src="/spot-pc/_media/getting-started-04.png" alt="Click to Enlarge" width="1000"> </a>

More detail is found in the [Create Spot Group](spot-pc/tutorials/deploy-spot-pc?id=create-spot-group) guide.

## Operational Dashboards

Spot PC is also built on the prioritization of actionable data. Within each Spot PC tenant there are several dashboards designed to simplify day-to-day operations. On each tab, live data steams to the screen and updates in realtime. Additional details about these users, machines and security items can be displayed by clicking the individual item from their dashboard. These dashboards include:
- Tenant [Overview](spot-pc/features/spot-pc-console/tenant/overview) Dashboard
- [User Sessions](spot-pc/features/spot-pc-console/tenant/user-sessions) Dashboard
- [Machines](spot-pc/features/spot-pc-console/tenant/machines) Dashboard
- [Data Volumes](spot-pc/features/spot-pc-console/tenant/data-volumes) Dashboard
- [Security](spot-pc/features/spot-pc-console/tenant/security) Dashboard
- [Logs](spot-pc/features/spot-pc-console/tenant/logs) Dashboard


<a href="https://docs.spot.io/spot-pc/_media/getting-started-03.png" target="_blank"><img src="/spot-pc/_media/getting-started-03.png" alt="Click to Enlarge" width="1000"> </a>

## What’s Next?

Learn more about [building VM images](spot-pc/tutorials/create-image) for Spot PC.
