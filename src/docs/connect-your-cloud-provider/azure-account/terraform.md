# Connect your AWS Account with Terraform to Spot

In this procedure, you will connect an AWS account to Spot using a terraform module to provide the Spot platform with a set of permissions to manage instances on your behalf.

1. Log in to [Spot Console](http://console.spotinst.com/).
2. [Create an API Token](administration/api/create-api-token) that is personal with Org Admin permissions.
3. Define Azure and Azure AD terraform provider with correct Azure details.
4. Create a resource to call the Spot [azure-connect terraform module](https://registry.terraform.io/modules/spotinst/azure-connect/spotinst/latest)
5. Run `terraform init`
6. Run `terraform plan` and `terraform apply`

### Example
```hcl
provider "azurerm" {
  subscription_id = "redacted"
  features {}
}
provider "azuread" {
  tenant_id = "redacted"
}
module "spotinst-azure-connect" {
  source  = "spotinst/azure-connect/spotinst"
}
output "spot_account_id" {
  value = module.spotinst-azure-connect.spot_account_id
}
```

Terraform module documentation: [aws-connect terraform module](https://registry.terraform.io/modules/spotinst/azure-connect/spotinst/latest)

To report an issue or fork: [source code](https://github.com/spotinst/terraform-spotinst-azure-connect)

> **Tip**: Prior to connecting your AWS account, you can access a demo system to get familiar with the dashboard. In the Spot Console, click Get a Console Walkthrough.

## What's Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-azure).
- Learn how to [import existing Azure resources](elastigroup/azure/getting-started/import-an-existing-azure-resource.md) such as a Scale Set, an Application Gateway, a Classic Load Balancer or a VM.
- Check out the [Elastigroup for Azure API](https://help.spot.io/spotinst-api/elastigroup/microsoft-azure/create/).
