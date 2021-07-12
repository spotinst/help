# Install with Terraform

Spot provides a [Terraform Module](https://github.com/spotinst/terraform-spotinst-ocean-controller) to install and manage the Ocean Controller. This module uses the official Kubernetes provider to provision all cluster resources required by the controller.

## Usage Example

```hcl
provider "kubernetes" {
  config_path = "~/.kube/config"
}

module "ocean-controller" {
  source = "spotinst/ocean-controller/spotinst"

  # Credentials.
  spotinst_token   = "redacted"
  spotinst_account = "redacted"

  # Configuration.
  cluster_identifier = "example"
}
```
