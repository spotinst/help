# Shared Image Galleries

This page describes how you can use images from Azure’s shared galleries in Spot configurations, and includes a procedure that allows sharing from cross-subscription galleries. For context, the page also includes a brief introduction to Azure shared galleries and, in particular, cross-subscription shared galleries.

## Shared Galleries

An Azure Compute Gallery (formerly known as Shared Image Gallery) enables Azure users to store and share resources, such as images.  

A gallery helps to build structure and organization of your images and simplifies custom image sharing across the organization. Custom images are like marketplace images, but you create them yourself. Images can be created from a VM, VHD, a snapshot, a managed image, or another image version.

With a gallery, you can share your images to everyone, or limit sharing to different users, service principals, or AD groups within your organization. Images can be replicated to multiple regions, for quicker scaling of your deployments. The Azure documentation describes in detail how to share a gallery.

## Cross-Subscription Shared Galleries

As mentioned above, you can share images and entire galleries with other users. This includes sharing to other subscriptions. This means that you can also use images from galleries that have been shared with you. Also in Spot, when you create or edit an Elastigroup configuration, you can use images in galleries from other subscriptions in your organization that have been shared. All of your Azure subscriptions must be connected to Spot.

## Prerequisites

Galleries from one or more other Azure subscriptions (belonging to the same Spot Organization) have been shared. (If you need to share a gallery, refer to the detailed steps in Share Using RBAC.)
In order to use galleries that are shared from other Azure subscriptions, the subscriptions must be connected to Spot.

## Use Shared Image in Spot

You can use the Spot console to access shared images in Elastigroup for stateless groups. Shared images for stateful nodes are available by API only.

To use a shared image in stateless groups, do the following:
1. When you are creating or editing aan stateless groups configuration, go to the Compute tab.

<img src="/elastigroup/_media/azure-shutdown-script-01.png" />

2. Choose Shared Image and choose the relevant item from each of the following dropdown lists:
   - Image Resource Group
   - Gallery Name
   - Image Name
   - Version



3. Continue with your configuration edits and then click Create or Update.

## Use the API

You can also use images from shared galleries when you use the Spot APIs to create an Elastigroup. The relevant Create APIs are:
- Create Stateless Group
- Create Stateful Node

In the JSON specification of the Elastigroup, fill in the parameters under:

`compute.launchSpecification.image.gallery`

## What’s Next?

Learn more about…???
