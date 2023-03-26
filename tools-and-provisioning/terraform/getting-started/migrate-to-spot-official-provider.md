# Migrate to Spot Official Provider

## Introduction

This post describes how to migrate your current Terraform file structure to support the structure of the latest Spot Provider version. These steps support a single or multiple Elastigroups resources import. The current implementation of Terraform import can only import resources into the [state](https://www.terraform.io/docs/state/). It does not generate configuration. A future version of Terraform will also generate configuration. Make sure to save a copy of your current `*.tf file` and `terraform.tfstate` before starting.

## Step 1: Prepare Your Resources

Create a new folder containing the following files:

- `*.tf`– a file which contains an empty Elastigroup resource, i.e:

```
provider "spotinst" {
  token = "xxxxxxxxxxxxxxxxxxxxxxx"
  account = "act-1exxxx40"
}

resource "spotinst_elastigroup_aws" "TFtest1" {}
```

The Provider can also be added as described [here](tools-and-provisioning/terraform/getting-started/install-terraform).

- `terraform.tfstate`– a file which contains the following skeleton:

```
{
"version": 3,
"terraform_version": "0.11.4",
"serial": 1,
"lineage": "same as on old provider",
"modules": [
   {
        "path": [
        "root"
        ],
        "outputs": {},
        "resources": {
          "spotinst_elastigroup_aws.<name of the resource>-IMPORT": {
           "type": "spotinst_elastigroup_aws",
           "depends_on": [],
           "primary": {
            "id": "<group-id>",
            "attributes": {}
           }
         }
       }
     }
  ]
}
```

## Step 2: Migrate Your Current Resource

1. Open the terminal and run `terraform init` in order to download the official Spot provider to the same folder from the previous step.
2. Execute the following command:

```
terraform import spotinst_elastigroup_aws.<name of the resource> <group-id>
```

3. The updated `terraform.tfstate` should now contain your desired elastigroups in addition to the previous resource with the `-IMPORT` suffix.

Remove the resource with the `-IMPORT` suffix.

---

**Important:**
You must delete the `-IMPORT` resource to prevent your Elastigroup from being destroyed.

---

4. Perform a `terraform plan` to ensure the state file has changed successfully. You are supposed to see a log of the changes.

These changes will be addressed in the next step.

## Step 3: Convert Your Schema

1. Migrate the previous tf.file to your empty `spotinst_elastigroup_aws` resource (created as part of step 1) and convert its schema to be aligned with the new provider.
   You can use our [special post](https://spot.io/news/2018-08-21/terrafrom-elastigroup-configuration-review/) on how to view ElastiGroup configuration as Terraform.  
   More examples provided here:
   https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws.html

2. Occasionally perform `terraform plan` to verify which fields need to be modified on the schema without actually changing the group via the Spot API.

> **Note**: Do not run `terraform apply` until you fully migrate the Terraform schema to the new provider.

3. Perform `terraform apply` to successfully apply your changes.
