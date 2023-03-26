# Install Terraform

## Terraform Providers

Spot has two Terraform provider versions:

- An official provider available for download from Hashicorp.
- Spot provider which can be found on the [Releases](https://github.com/spotinst/terraform-provider-spotinst/releases) page.

Both are fully maintained.

The reason that Spot manages two providers is that we want to allow our Terraform customers to receive our latest provider features sooner than they are provided directly from Hashicorp.

The installation can be done via:

- Hashicorp binaries
- Spot Resources

## Official Provider Installation: HashiCorp

Procedure:

1. Get the latest [Terraform binary](https://www.terraform.io/downloads.html) build.
2. Create a template.tf that includes the [Spot Provider Configuration](tools-and-provisioning/terraform/getting-started/configuration).
3. Run `terraform init`
   If command fails, continue below to manual installation.
4. The latest [Change Log](https://github.com/hashicorp/terraform-provider-spotinst/blob/master/CHANGELOG.md) release version of the Spot provider should be downloaded.
5. Visit the [Terraform Spot Provider](tools-and-provisioning/terraform/getting-started/install-terraform) documentation page for official provider documentation.

After running `terraform init`, the provider binary is located under

`.terraform/plugins/<platform>/terraform-provider-spotinst_v1.x.x`

## Official Provider Installation: From Spot Resources

We strive to always have the latest features available for our customers reflected on our official Terraform provider. Since cutting new releases for the official provider might take some time as it is not managed by Spot, we provide customers a download link for the latest official provider on the Installation Links page (change the binary version in the link to match yours). You can check the change log for the latest addition to the official Spot provider

### Manual Installation

Place the plugin executable (`terraform-provider-spotinst`) in one of the following locations depending on the host operating system:

**Windows systems** – create a file named `terraform.rc` in the sub-path `terraform.d/plugins` beneath your user's `Application Data` `%APPDATA%` directory:

`%APPDATA%/terraform.rc`

**Mac or Unix-like systems** – create a file named `.terraformrc` in your `home` directory:

`~/.terraformrc`

Edit the file and add the following content:

```
providers {
  spotinst = "/path/to/terraform-provider-spotinst"
}
```

Example:

```
providers {
  spotinst = "/Users/Spotinst/Terraform/terraform-provider-spotinst"
}
```

Running `terraform init` will search this directory for additional plugins during initialization phase.
