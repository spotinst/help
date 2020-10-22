# Install with Terraform

Spot provides a [Terraform Module](https://github.com/spotinst/terraform-spotinst-modules/tree/master/spotinst_ocean_controller) to install and manage the Kubernetes controller.

The module uses the official Kubernetes provider to provision the required cluster resources.

```json
provider "kubernetes" {
  // add your provider configs
}
module "spotinst_ocean_controller" {
  source = "github.com/spotinst/terraform-spotinst-modules//spotinst_ocean_controller

  spotinst_account = "act-123456"
  spotinst_token = "<my_token>"
  spotinst_cluster_identifier = ""
}
```
