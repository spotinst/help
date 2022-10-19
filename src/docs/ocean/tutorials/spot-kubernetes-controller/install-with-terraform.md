# Install with Terraform

Spot provides a [Terraform Module](https://registry.terraform.io/modules/spotinst/ocean-controller/spotinst) to install and manage the [Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/). This module uses the official Kubernetes provider to provision all cluster resources required by the controller.

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

## What’s Next?

Learn more about [Proxy settings](ocean/tutorials/spot-kubernetes-controller/proxy-settings).
