# Use Cross-Account KMS Key to Encrypt EBS Volumes

## Introduction

[KMS Keys](elastigroup/tutorials/elastigroup-tasks/create-encryption-key) are fine as long as you are using a single AWS account. What if you need to use volumes from different accounts?

Let's start with a few assumptions:

- You've done the key creation as specified in [Create Encryption Key](elastigroup/tutorials/elastigroup-tasks/create-encryption-key).
- Account actKey will represent the account that holds the KMS key.
- Account actInst will represent the account that will run the Instances.
- Key and Instances must be in the same region

## Step 1: Create a Key

1. Create KMS key in account _actKey_
2. Add Account _actInst_ account number in External Accounts inside the key properties and save the changes:

<img src="/elastigroup/_media/use-cross-account-kms-key-to-encrypt-ebs-volumes_1.png" />

3. Switch to policy view inside the key properties, and remove the following condition, save the changes:

<img src="/elastigroup/_media/use-cross-account-kms-key-to-encrypt-ebs-volumes_2.png" />

4. Save the key ARN:

<img src="/elastigroup/_media/use-cross-account-kms-key-to-encrypt-ebs-volumes_3.png" />

## Step 2: Create Policy

Create a policy in account actInst, inserting the following JSON (please remember to change the Key ARN):

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowUseOfTheKey",
            "Effect": "Allow",
            "Action": [
                "kms:Encrypt",
                "kms:Decrypt",
                "kms:ReEncrypt*",
                "kms:GenerateDataKey*",
                "kms:DescribeKey"
            ],
            "Resource": [
                ""
            ]
        },
        {
            "Sid": "AllowAttachmentOfPersistentResources",
            "Effect": "Allow",
            "Action": [
                "kms:CreateGrant",
                "kms:ListGrants",
                "kms:RevokeGrant"
            ],
            "Resource": [
                ""
            ]
        }
    ]
}

```

## Step 3: Finish Up

The next steps will be performed in account actInst using AWS CLI, please note the user that your AWS CLI is configured with.

1. Attach the policy you created, to the user from the previous step:

<img src="/elastigroup/_media/use-cross-account-kms-key-to-encrypt-ebs-volumes_4.png" />

2. Copy Spot Role ARN (Can be found in the spot console, after clicking on the person icon on the top right corner):

<img src="/elastigroup/_media/use-cross-account-kms-key-to-encrypt-ebs-volumes_5.png" />

3. Run the following command in a terminal (grant for the Spot role):

```
aws kms create-grant --key-id <KMS KEY ARN> --grantee-principal <SPOT ROLE ARN> --operations "Encrypt" "Decrypt" "RetireGrant" "DescribeKey" "GenerateDataKey" "GenerateDataKeyWithoutPlaintext" "ReEncryptFrom" "ReEncryptTo" "CreateGrant" --name spotinst-grant

```

4. Look for AWSServiceRoleForEC2Spot role and copy its ARN:

<img src="/elastigroup/_media/use-cross-account-kms-key-to-encrypt-ebs-volumes_6.png" />

5. Run the following command in terminal (grant for the spot instances role):

```
aws kms create-grant --key-id <KMS KEY ARN> --grantee-principal <AWSServiceRoleForEC2Spot ARN> --operations "Encrypt" "Decrypt" "RetireGrant" "DescribeKey" "GenerateDataKey" "GenerateDataKeyWithoutPlaintext" "ReEncryptFrom" "ReEncryptTo" "CreateGrant" --name spot-grant
```

That's it! You can now add your KMS key-id to the BDM section in Elastigroup's configuration:

```
"blockDeviceMappings": [
   {
     "deviceName": "/dev/sdf",
     "ebs": {
       "encrypted": true,
       "kmsKeyId": "",
       "volumeSize": 20
     }
   }
 ]
```
