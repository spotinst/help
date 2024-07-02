<meta name="“robots”" content="“noindex”">

# Error - You Must Grant the AWSServiceRoleForEC2Spot Service-Linked Role Access to Any Custom KMS Keys

## Problem

You get this error:

`Spot Bad Parameters: Spot Request id: Optional<instance ID>. Code: bad-parameters Message: <timestamp>: Instance launch failed because an EBS volume cannot be encrypted. If your launch specification includes an encrypted EBS volume, you must grant the AWSServiceRoleForEC2Spot service-linked role access to any custom KMS keys.`

## Cause
Missing permissions in the KMS custom key.

## Solution
You can configure KMS keys from the same AWS account or a different AWS account:
* [KMS key from the same AWS account](https:/docs.spot.io/elastigroup/tutorials/elastigroup-tasks/create-encryption-key?id=create-encryption-key)
* [KMS key from a different AWS account](https:/docs.spot.io/elastigroup/tutorials/elastigroup-tasks/use-cross-account-kms-key-to-encrypt-ebs-volumes) (cross-account)
