# Configuration

## Provider Configuration

For Terraform to work with Spot, configure the Spot provider and create an AWS group.

```
# Configure the Spot provider
provider "spotinst" {
token         = "${var.spotinst_token}"
account       = "${var.spotinst_account}"
}

# Create an AWS group
resource "spotinst_aws_group" "foo" {
...
}
```

Provide the required Spot Token [Personal Access Token](https://console.spotinst.com/#/settings/tokens/permanent) and Spot [Account ID](https://console.spotinst.com/#/settings/account/general).

1. Create a new Spot resource.
2. If you don't mention the account ID, resources will be created in the default Spot account.
3. Once everything is setup correctly, execute your Terraform file and apply the changes. An API call to Spot will be triggered, and create an Elastigroup.
