<meta name="robots" content="noindex">

#  Set up Ocean Commitments

Cloud service provider relevance: <font color="#FC01CC">Azure Kubernetes</font>

Before you can turn on commitments for your cluster or virtual node groups, you need to:

*  Purchase Azure commitments (refer to Azure)
*  [Get your Azure credentials](link)
*  [Connect Commitments to Spot Products](link)

Once you have your Azure credentials, you can turn on commitments via either the Spot console or the Spot API.

##  Get the Azure Credentials Required to Connect Commitments to Spot Products

Follow the instructions below while referring to the [Azure documentation](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate):

###  App Registration:

1. Log in to your Azure account.
2. Go to App Registration.
3. Create a new application registration.
4. Set the Redirect URI to `https://spot.io`

>**Note:** Spot requires this URI for authentication purposes.

5. Copy the following IDs (you will need them later on to connect to Spot):
   * Application (client) ID.
   * Directory (tenant) ID.

###  Certificates & Secrets

1.  In Azure, under the newly created application, click **Certificates & secrets**.
2.  Create a new client secret and set the expiration to **24 months**.
3.  Copy the following details (you will need them later on to connect to Spot):
    * Application secret expiration date.
    * Client secret value.


##  Connect Commitments to Spot Products

1.  Obtain the credentials from your Azure app. Refer to [Get the Azure Credentials Required to Connect Commitments to Spot Products]()
2.  Go to the virtual node group where you want to turn on the utilize RSs/SPs feature. This can be any of your virtual node groups or the virtual node group template. Ocean recommends enabling this feature on the virtual node group template so that it is applied to all your virtual node groups in the cluster. See [Manage AKS Virtual Node Groups](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks)
3.  In the Ocean autoscaler strategy area of the virtual node group, click **Add permissions**.

    <img src="https://docs.spot.io/ocean/_media/ocean-commitments.png” />
    
       
###  Step 1: App Registrations

1.  In Connect RIs/SPs to Spot wizard, step 1, create (register) a new Azure app or upgrade an existing one.

    Upgrade:

    <img src="https://docs.spot.io/managed-instance/_media/commitments_register-upgrade-app.png" />

    New:

    <img src="https://docs.spot.io/managed-instance/_media/commitments-register-new-app.png" />

3. Copy the following credentials from your Azure app and paste them into the fields:
   * Application (client) ID.
   * Directory (tenant) ID.

4.  Go to Step 2: Certificates and Secrets

###  Step 2: Certificates and Secrets


<img src="https://docs.spot.io/managed-instance/_media/commitments-certs-and-secrets.png" />
    
1. Copy the following credentials from your Azure app and paste them into the fields:
   * Application secret expiration date.
   * Client secret value. 

2.  Go to Step 3: Permissions assignment.

###  Step 3: Permissions Assignment


<img src="https://docs.spot.io/managed-instance/_media/commitments-permss-with-reader.png" />

>IMPORTANT:
>
>The first time you use commitments, you must add at least one permission at the tenant level so Spot can connect to Azure cluster environments.
These permissions give you access to all the resources under the same tenant. You need these permissions to turn on virtual node group-level commitments.
>
>In addition, you must add the custom reader role. This subscription role permission grants controlled access to Azure resources within a subscription and enables custom read-only visibility while preventing unauthorized modifications.
>
>If this step is unsuccessful, check your Azure environment.

1.  Select the permissions in accordance with those you purchased from Azure. By default, both RI and SP are selected.

2.  Use the following Azure PowerShell script to assign the Reservation Reader role at the tenant level with PowerShell:

```
Import-Module Az.Accounts
Import-Module Az.Resources

Connect-AzAccount -Tenant {TENANT_ID}

## Assign Reservation Reader role
New-AzRoleAssignment -Scope "/providers/Microsoft.Capacity" -ApplicationId {CLIENT_ID} -RoleDefinitionName "Reservations Reader"

## Assign Savings Plan Reader role (optional)
New-AzRoleAssignment -Scope "/providers/Microsoft.BillingBenefits" -ApplicationId {CLIENT_ID} -RoleDefinitionName "Savings plan Reader"
```

3. Required. Use the following Azure PowerShell script to assign the custom reader role:


```
# Replace with your principal's object ID (user, group, or service principal)principalId="<YOUR-PRINCIPAL-ID>"
 
# Replace with your custom role name (from your JSON)roleName="Custom Reader Role"
 
# Create the custom roleaz role definition create --role-definition custom-role.json
 
# Get all subscriptions and assign the rolefor sub in $(az account list --query "[].id" -o tsv); do  echo "Assigning role to subscription: $sub"  az role assignment create \    --assignee "$principalId" \    --role "$roleName" \    --scope "/subscriptions/$sub"done
 
for management groups use the following
 
# Set variablesprincipalId="<YOUR-PRINCIPAL-ID>"        # e.g. a service principal or user object IDroleName="Custom Reader Role"            # Must match "Name" in your JSON fileroleFile="custom-role.json"              # Your custom role definition JSON
 
# 1. Create the custom roleaz role definition create --role-definition "$roleFile"
 
# 2. List all management group IDs and assign role to eachfor mg in $(az account management-group list --query "[].name" -o tsv); do  echo "Assigning '$roleName' to principal at MG: $mg"
 
  az role assignment create \    --assignee "$principalId" \    --role "$roleName" \    --scope "/providers/Microsoft.Management/managementGroups/$mg"done

```

4.  Click **Test RIs/SPs to Spot Permissions** to verify that your permissions have been successfully granted.
   

##  Turn on Utilize Commitments for Virtual Node Groups from the Spot Console

1. Go to the virtual node group where you want to turn on the utilize RSs/SPs feature. This can be any of your virtual node groups or the virtual node group template. Ocean recommends enabling this feature on the virtual node group template so that it is applied to all your virtual node groups in the cluster. See [Manage AKS Virtual Node Groups](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks)
2. In the Ocean autoscaler strategy area, click **Utilize RIs/SPs**.

>**Important**: If the **Add permissions** link appears, and Utilize RIs/SPs is grayed, make sure you have completed the following tasks with no errors:
>
>  - [Get Your Azure Credentials](link)
>
>  - [Connect Commitments to Spot Products](link)


## Turn on Utilize Commitments for Cluster or Virtual Node Groups from the Spot API

You might need to distribute reservation instances/savings plans according to virtual node groups for several types of workloads on the same cluster.

in the Spot API, for virtual node groups/clusters, the `shouldUtilizeCommitments` attribute controls utilization commitments. 

When `True` (default), and there are free reserved instances / savings plans within the AWS account, Ocean will utilize them before launching spot instances. 
The initial virtual node group default value is inherited from the identical attribute at the cluster level. 

* [Create cluster](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterCreate) or [Update cluster](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterUpdate)  (under virtualNodeGroupTemplate > strategy)
* [Create virtual node group](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSVirtualNodeGroupCreate) or [Update virtual node group](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSVirtualNodeGroupUpdate) (under virtualNodeGroup > strategy)







