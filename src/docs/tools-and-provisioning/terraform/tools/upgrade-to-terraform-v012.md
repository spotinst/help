# Upgrade to Terraform v0.12

## Introduction
This article discusses the latest Terraform v0.12 update and its effects on Spot users who are using the official Spot provider from HashiCorp.

## The Update

Terraform version 0.12 comes with several updates and changes to the syntax of Terraform configuration (\*.TF) files. You can read more about it in the [Change Log](https://github.com/hashicorp/terraform/blob/v0.12.6/CHANGELOG.md#0120-may-22-2019).

The official Spot Terraform provider has been updated to work with those changes, and also comes with backward compatibility with previous versions.

Follow according to your use case:

1. Upgrading from Terraform v0.11 to Terraform v0.12
2. Keep working with TF v0.11 and the latest provider

## Use Case 1: Upgrade from v0.11 to v0.12

In order to upgrade to TF v0.12, you can follow the Hashicorp [documentation](tools-and-provisioning/terraform/tools/upgrade-to-terraform-v012).
Once you have upgraded to TF v0.12, you will need to [Update your Configuration](https://www.terraform.io/upgrade-guides/0-12.html#upgrading-terraform-configuration) to the new schema. To that end, Terraform v0.12 includes a new [command](tools-and-provisioning/terraform/tools/upgrade-to-terraform-v012) that will read the configuration files for a module written for Terraform 0.11 and update them in-place to use the cleaner Terraform 0.12 syntax.

To use the command you need to:

- Run `terraform 0.12upgrade` within a fully-initialized working directory that contains the TF files.
- The command will prompt for confirmation. Confirm the changes and the `.tf` and `.tfvars` files in your current working directory will be rewritten.

- The output should appear as shown below:

<img src="/tools-and-provisioning/_media/upgrade to terraform v0.12_1.png" />

- When the updates are done, you can use your version control tool to review any proposed changes and then run `terraform plan` to see the effect of the changes that were made. In most cases, `terraform plan` should report that no changes are required because the updated configuration is equivalent to the previous one.

- Once you're happy with the updated configuration, commit it to version control in the usual way and `terraform apply` it with Terraform 0.12.

## Use Case 2: Stay with v0.11 and the Latest Provider

If you keep working with older versions of Terraform, running `terraform init` will still upgrade your Spot provider to the latest version.

The latest Spot provider version is compatible both with Terraform v0.12 and Terraform v0.11, and no further steps are required.
