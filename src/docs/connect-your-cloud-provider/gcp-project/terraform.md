# Connect your AWS Account with Terraform to Spot

In this procedure, you will connect an AWS account to Spot using a terraform module to provide the Spot platform with a set of permissions to manage instances on your behalf.

1. Log in to [Spot Console](http://console.spotinst.com/).
2. [Create an API Token](administration/api/create-api-token) that is personal with Org Admin permissions.
3. Define Google terraform provider with correct GCP credentials.
4. Create a resource to call the Spot [gcp-connect terraform module](https://registry.terraform.io/modules/spotinst/gcp-connect/spotinst/latest)
5. Run `terraform init`
6. Run `terraform plan` and `terraform apply`

### Example
```hcl
provider google {
  project = "Terraform-Test"
}
module "spotinst-gcp-connect" {
  source          = "spotinst/gcp-connect/spotinst"
  project         = "Terraform-Test"
  spotinst_token  = "redacted"
}
output "spot_account_id" {
  value = module.spotinst-gcp-connect.spot_account_id
}
```

Terraform module documentation: [aws-connect terraform module](https://registry.terraform.io/modules/spotinst/gcp-connect/spotinst/latest)

To report an issue or fork: [source code](https://github.com/spotinst/terraform-spotinst-gcp-connect)

> **Tip**: Prior to connecting your AWS account, you can access a demo system to get familiar with the dashboard. In the Spot Console, click Get a Console Walkthrough.

## What's Next?

- [Create your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-gcp).
- [Create your first Ocean Cluster with GKE](ocean/getting-started/gke).