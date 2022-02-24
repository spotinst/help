<meta name="robots" content="noindex">

# Create New Permission Policy

When you create a [permission policy](administration/policies/), you can define the policy type and choose the services and actions that will be included. The detailed procedures are described below.

## Get Started
1. Go to the User icon in the Spot console and click Settings.

<img src="/administration/_media/create-new-user-01.png" width="381" height="258" />

2. Under Organization in the left menu, click Permission Policies, then on the right, click Create New Policy.

<img src="/administration/_media/create-policy-01.png" />

The Create New Policy wizard appears.

## Create New Policy
1. Enter a name for the policy.
2. Enter a few words describing the purpose of the policy.

<img src="/administration/_media/create-policy-02.png" />

3. Under Permission Management, choose the type of policy to create. There are two types of policies:
   - Account: These permissions relate to products and services that have resources at the account level. You will select the relevant accounts separately for each user or group once you attach the policy to them.
   - Organization: The permissions relate to products and services that have resources at the organization level.

Once a policy has been created, you will not be able to change the policy type.

### Service

A service can allow use of a particular product within the Spot Suite, such as Ocean or Elastigroup. It could also provide a specific function such as Setup.

Choose the relevant service (e.g., Ocean, Elastigroup, or Setup) for the policy.

<img src="/administration/_media/create-policy-03.png" width="421" height="101" />

### Actions

Once you choose a service, the service will appear below with its set of standard Create, Update, and Delete actions that are granted with the service.

<img src="/administration/_media/create-policy-04.png" width="406" height="166" />

### Manual Edit

If you do not want to allow all of the actions included in the standard set of actions, click Manual Edit. Then you can unmark the actions that will not be allowed.

If you need more granular control of the actions to be allowed, click one of the arrows. For example, when you click the arrow by Create, you will then see a list of individual Create actions allowed for this service.

Unmark any actions that will not be allowed.

Below is an example of the individual Create actions for the Elastigroup service. Since the Delete action is unmarked, this policy will not allow the users to delete anything in Elastigroup.

<img src="/administration/_media/create-policy-05.png" />

### Effect

You can control the logic used to allow and deny actions.
- Allow: Means that actions marked are allowed. Any unmarked items will not be allowed. This is the default behavior for defining a service.
- Deny: Means that actions marked are denied. Any unmarked items will not be denied.

## Add Permissions

To add more permissions, click Add Permissions by the plus sign at the bottom. This enables you to add additional services and their related actions.

## Remove

To remove a service and all of its corresponding actions, click the Trash icon on the right.

## Edit the JSON

You also have the option to edit the JSON format. Do the following:
1. By Services and permissions, click JSON.
2. Click Edit Mode, and edit the file as required.

<img src="/administration/_media/create-policy-06.png" />

## What’s New?

Learn how to [edit a permission policy](administration/policies/edit-policy-details) once you have created it.
