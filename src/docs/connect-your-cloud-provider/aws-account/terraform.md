# Connect your AWS Account with Terraform to Spot

In this procedure, you will connect an AWS account to Spot using a terraform module to provide the Spot platform with a set of permissions to manage instances on your behalf.

1. Log in to [Spot Console](http://console.spotinst.com/).
2. [Create an API Token](administration/api/create-api-token) that is personal with Org Admin permissions.
3. Define AWS terraform provider with correct AWS credentials.
4. Create a resource to call the Spot [aws-connect terraform module](https://registry.terraform.io/modules/spotinst/aws-connect/spotinst/latest)
5. Run `terraform init`
6. Run `terraform plan` and `terraform apply`

### Example
```hcl
provider "aws" {
  profile = "Terraform-Example"
  region = "us-west-2"
}
module "spotinst-aws-connect" {
    source = "spotinst/aws-connect/spotinst"
    spotinst_token = "redacted"
}
output "spot_account_id" {
  value = module.spotinst-aws-connect.spot_account_id
}
```


Terraform module documentation: [aws-connect terraform module](https://registry.terraform.io/modules/spotinst/aws-connect/spotinst/latest)

To report an issue or fork: [source code](https://github.com/spotinst/terraform-spotinst-aws-connect)


> **Tip**: Prior to connecting your AWS account, you can access a demo system to get familiar with the dashboard. In the Spot Console, click Get a Console Walkthrough.

## What's Next?

- [Get started with Elastigroup](elastigroup/getting-started/).
- [Get Started with an Ocean cluster](ocean/getting-started/).