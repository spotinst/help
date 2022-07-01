# Create Encryption Key

## Introduction

AWS Key Management Service (KMS) is a service that makes it easy for you to create and control the encryption keys used to encrypt your data. You can easily use encrypted volumes with spot instances provisioned by Spot. In order for Spot to be able to utilize your encrypted volumes, you need to grant permissions to access the custom KMS used to encrypt the volumes.

### How to use custom keys with Spot?

Using custom keys requires adjusting the custom keys permissions to include the spot required roles.

## Step 1: Login to your AWS KMS Console

Login to your AWS console and navigate to the Key Management Service (KMS) console.

<img src="/elastigroup/_media/create-encryption-key_1.png" />

## Step 2: Click on Customer Managed Keys

<img src="/elastigroup/_media/create-encryption-key_2.png" />

## Step 3: Click on the custom Key ID you want to encrypt your volumes with

<img src="/elastigroup/_media/create-encryption-key_3.png" />

## Step 4: Scroll down to Key Users

<img src="/elastigroup/_media/create-encryption-key_4.png" />

You should add two roles to this custom key:

- **AWSServiceRoleForEC2Spot** (Linked-Service role that AWS creates automatically for each account)
- **Spot cross-account IAM role** (The one you created when entering credentials to Spot)

You can find your Spot cross-account IAM role in the Spot settings under the Account menu available via this link: https://console.spotinst.com/#/settings/account/general

<img src="/elastigroup/_media/create-encryption-key_5.png" />

## Step 5: Configuring the Key in the Elastigroup Block Device Mapping

You can add the required key to the Elastigroup block device mapping configuration. For more information see [Block Device Mapping](elastigroup/features/compute/block-device-mapping).

Adding the following:

**kmsKeyId** – String – ID for a user managed CMK under which the EBS Volume is encrypted

### Example 1:

```
"blockDeviceMappings": [
   {
     "deviceName": "/dev/sdf",
     "ebs": {
       "encrypted": true,
       "kmsKeyId": "bajkadk-12345-1234-1234-1234567",
       "volumeSize": 20
     }
   }
 ]
```

### Example 2:

In case you have a snapshot which is encrypted by the Custom KMS key:

```

"blockDeviceMappings": [
    {
      "deviceName": "/dev/xvdb",
      "ebs": {
        "deleteOnTermination": false,
        "encrypted": true,
        "snapshotId": "snap-90gh20c09281b1234",
        "volumeType": "gp2"
      }
    }
  ]
```
