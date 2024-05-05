# Connect Azure Subscription Using Azure CLI 

The [Azure CLI onboarding tool](https://spot.io/blog/spot-azure-cli-onboarding-tool/) allows you to add multiple subscriptions to Cost Intelligence at the same time. The script can be run using Azure Cloud Shell or Azure CLI. This procedure describes how to use Azure Cloud Shell. 

## Prerequisites 

* Permissions to create app registrations and assign subscription reader role in Azure. 
* An Azure account with at least one active subscription. 
* Create a Permanent Spot token. 

## Connect Using Azure CLI 

1. In the Azure console, click **Cloud Shell**. 

![azure-cli-1](https://github.com/spotinst/help/assets/106514736/f3c301a6-0461-4715-89a0-d9ab78836c91)

2. Click [repo](https://github.com/spotinst/spotinst-examples/tree/master/Utilities/AzureOnboardingCLI) and clone it. 
`git clone https://github.com/spotinst/spotinst-examples.git` 

3. To open the spotinst-examples/Utilities/AzureOnboardingCLI folder, run this command: 
`cd spotinst-examples/Utilities/AzureOnboardingCLI` 

4. Run the command to install the modules: 
`pip install -r ./requirements.txt` 
 
5. Run a script to onboard subscriptions to Spot. You can use one of these examples or a custom script: 

* Onboard all subscriptions in the tenant to the Spot core and Cost Intelligence products.  Create all required Azure resources including the service principal and custom role. 

**Example**: 
`python azure-automatic-role-assignment.py --token nev3XXXXXXXXXXX --products "core cost-intelligence"` 

* Onboard only a single subscription to Cost Intelligence, using an existing app registration/service principal. 

**Example**: 
`python azure-automatic-role-assignment.py --token nev3XXXXXXXXXXX --subscription "12345678-aaaa-bbbb-cccc-12345678912 --products "cost-intelligence" –appRegistrationId` 

* Onboard a single subscription to all Spot products, but do not create any resources in your Azure account. 

**Example**: 
`python azure-automatic-role-assignment.py --token nev3XXXXXXXXXXX --products "core cost-intelligence" –appRegistrationId "7577XXXXXXXXXXX" --clientSecret "aRi8XXXXXXXXXXX" --skipResourceCreation` 

* If you would like to run a custom script, you can use these flags: 

  * --token (required): this is the Spot API token. 

  * --subscription (optional): the Azure subscription ID that you want to onboard. If this flag is not used, the script will retrieve all subscriptions for the tenant, processing them one at a time. 

  * --products (optional): the Spot products to onboard (core and cost-intelligence). 
Specify the products in any order, separated by a space. For example: 

    * --products "core" 
      Onboard the core set of Spot products such as Elastigroup, Ocean. This is the default value. 

    * --products "core cost-intelligence" 
      Onboard both core and Cost Intelligence. 

    * --products "cost-intelligence" 
      Onboard only Cost Intelligence. 

Each product has its own permission requirements: 

| Spot Product                       | Role Required                                                                          |   |
|------------------------------------|----------------------------------------------------------------------------------------|---|
| Core (such as Elastigroup, Ocean)  | [Custom](https://spotinst-public.s3.amazonaws.com/assets/azure/custom_role_file.json)  |   |
| Cost Intelligence                  | Azure built-in reader role                                                             |   |

  * --customRoleName (optional): the name of the custom role for the Spot core product. 

  * --customRoleJsonPath (optional): the local path to the role definition. You can use a local role definition file instead of the default custom role required by the Spot core product. If this flag is not used, the default role is applied. 

  * --appRegistrationId (optional): if an Azure app registration already exists, you can use it here. If this flag is not used, a new app registration and service principal will be created. 

  * --clientSecret (optional): you can use an existing secret assigned to the app registration/service principal. If this flag is not used, a new client secret will be added to the service principal. 

  * --skipResourceCreation (optional): you can use the script to only create and set up Spot accounts without making any changes to your Azure account. You need to create the required Azure resources. This can include the app registration, required roles, and role assignments for the service principal in the appropriate subscription scopes. 
You must use **--appRegistrationId** and **--clientSecret** with this parameter. 

Once finished, you receive a summary of subscriptions that were successfully connected to Spot. 

![azure-cli-2](https://github.com/spotinst/help/assets/106514736/a19b9f11-ea4e-4ab3-919b-b86162facef3)

You can view the connected subscriptions in the Cost Intelligence Administration page. 

![azure-cli-3](https://github.com/spotinst/help/assets/106514736/5d2a2ba1-a33b-4e45-8dc3-b9a1362a5335)
