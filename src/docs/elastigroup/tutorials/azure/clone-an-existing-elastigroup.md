# Clone an Existing Elastigroup

You can create a new Elastigroup in Spot by cloning an existing Elastigroup. The new group will have the same configuration as the existing group. The clone feature provides a convenient way to replicate the configuration of an existing group or, alternatively, to use the configuration as a template for creating a new group and modifying it to suit your needs.

## Prerequisites

Before starting this procedure, you must have:

- An [Azure subscription connected to Spot](connect-your-cloud-provider/azure-account)
- At least one [Elastigroup in your Spot account](elastigroup/getting-started/create-an-elastigroup-for-azure)

## Get Started

1. In the Spot console under Elastigroup, click Groups.
2. On the upper right of the Elastigroups page, click Create Elastigroup and choose Clone.

<img src="/elastigroup/_media/azure-clone-an-existing-eg-01.png" />

## Choose Elastigroup

1. In the Clone popup, complete the following:
   - Clone from: Choose Elastigroup.
   - Select an existing Elastigroup: Choose an Elastigroup from the dropdown list.

<img src="/elastigroup/_media/azure-clone-an-existing-eg-02.png" width="305" height="210" />

2. If the existing Elastigroup has a password configured, you will be prompted to enter a password. Enter the user credentials if prompted.
   - User Name: The administrator user name for the VMs in Azure. Cannot include reserved words.
   - Password: The administrator password to be used for the Azure VMs. The password may be Linux or Windows depending on the OS of the VM. The password you enter must comply with the relevant OS password rules.

<img src="/elastigroup/_media/azure-clone-an-existing-eg-03.png" width="295" height="176" />

3. Click Continue.

## Review

On the Review page, you can see all the configuration parameters that were copied directly from the existing Elastigroup.

<img src="/elastigroup/_media/azure-clone-an-existing-eg-04.png" width="311" height="336" />

After viewing the summary of the configuration, just click Create to produce an exact copy of the existing Elastigroup.

### Edit Configuration

If you would like to modify the configuration before creating the new Elastigroup, just click on one of the tabs above (e.g., General, Compute or Scaling) or on one of the Edit icons in the Review page. Alternatively, you can click on the JSON tab and make your modifications in the JSON view of the configuration.

## What’s Next?

Learn how to [import existing Azure resources](elastigroup/azure/getting-started/import-an-existing-azure-resource) such as a Scale Set, an Application Gateway, a Classic Load Balancer or a VM.
