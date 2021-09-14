# Import an Existing Azure Resource

You can join an existing Azure resource to Elastigroup by importing its configuration. This enables you to manage your resources completely in Elastigroup and enjoy all the optimization and cost benefits that Elastigroup provides.

You can import the following types of Azure resources:

- Scale Set
- Application Gateway
- Load Balancer (Standard)
- VM

## Prerequisites

To import an existing Azure resource, you must first complete the following:

- [Connect your Azure subscription](connect-your-cloud-provider/azure-account.md) to Spot.
- Have the relevant Azure resource up and running (e.g., Scale Set, Application Gateway, Load Balancer, VM).

## Get Started

1. In the left menu of the Spot console, click Elastigroup/Groups.
2. Click Create Elastigroup/Import.

<img src="/elastigroup/_media/azure-import-existing-resource-01.png" />

3. In the Import dialog, choose the type of Azure configuration to import.

<img src="/elastigroup/_media/azure-import-existing-resource-02a.png" width="307" height="302" />

4. Click Continue, and follow the relevant procedure below.
   - [Import Scale Set](elastigroup/azure/getting-started/import-an-existing-azure-resource?id=import-scale-set)
   - [Import Application Gateway](elastigroup/azure/getting-started/import-an-existing-azure-resource?id=import-application-gateway)
   - [Import Load Balancer (Standard)](elastigroup/azure/getting-started/import-an-existing-azure-resource?id=import-load-balancer)
   - [Import VM](elastigroup/azure/getting-started/import-an-existing-azure-resource?id=import-vm)

## Import Scale Set

In the Import dialog, complete the following:

1. Select a Resource Group.
2. Select a Scale Set.

<img src="/elastigroup/_media/azure-import-existing-resource-03.png" width="313" height="307" />

3. If the resource has a password associated with it in Azure, it cannot be passed to Elastigroup. You will be prompted for a password. You may enter the existing password or a new password.
4. Click Continue.
5. A summary of the configuration appears in the Review tab.
   - If you want to import the configuration as is, click Import.
   - If you would like to edit the configuration, click on the other tabs (General, Compute or Scaling) and edit the parameters as needed. Alternatively, you can click JSON and edit the configuration directly in JSON format. When you are finished reviewing and editing, click Import.

## Import Application Gateway

In the Import dialog, complete the following:

1. Select a Resource Group.
2. Select an Application Gateway.
3. Select a Backend Pool.

<img src="/elastigroup/_media/azure-import-existing-resource-04.png" width="313" height="369" />

4. If the resource has a password associated with it in Azure, it cannot be passed to Elastigroup. You will be prompted for a password. You may enter the existing password or a new password.
5. Click Continue.
6. A summary of the configuration appears in the Review tab.
   - If you want to import the configuration as is, click Import.
   - If you would like to edit the configuration, click on the other tabs (General, Compute or Scaling) and edit the parameters as needed. Alternatively, you can click JSON and edit the configuration directly in JSON format. When you are finished reviewing and editing, click Import.

## Import Load Balancer

In the Import dialog, complete the following:

1. Select a Resource Group.
2. Select a Load Balancer.
3. Select a Backend Pool.

<img src="/elastigroup/_media/azure-import-existing-resource-05a.png" width="307" height="380" />

4. If the resource has a password associated with it in Azure, it cannot be passed to Elastigroup. You will be prompted for a password. You may enter the existing password or a new password.
5. Click Continue.
6. A summary of the configuration appears in the Review tab.
   - If you want to import the configuration as is, click Import.
   - If you would like to edit the configuration, click on the other tabs (General, Compute or Scaling) and edit the parameters as needed. Alternatively, you can click JSON and edit the configuration directly in JSON format. When you are finished reviewing and editing, click Import.

## Import VM

In the Import dialog, complete the following:

1. Select a Resource Group.
2. Select a VM.

<img src="/elastigroup/_media/azure-import-existing-resource-06.png" width="311" height="302" />

3. If the resource has a password associated with it in Azure, it cannot be passed to Elastigroup. You will be prompted for a password. You may enter the existing password or a new password.
4. Click Continue.
5. A summary of the configuration appears in the Review tab.
   - If you want to import the configuration as is, click Import.
   - If you would like to edit the configuration, click on the other tabs (General, Compute or Scaling) and edit the parameters as needed. Alternatively, you can click JSON and edit the configuration directly in JSON format. When you are finished reviewing and editing, click Import.

## What’s Next?

Learn how to [create an Elastigroup for Azure from scratch](elastigroup/getting-started/create-an-elastigroup-for-azure.md).
