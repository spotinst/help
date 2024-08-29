<meta name="robots" content="noindex">

# Troubleshoot InvalidBlockDeviceMapping Error

## Problem

Troubleshoot error:

`Can't Spin Spot Instance: Code: InvalidBlockDeviceMapping, Message: The device 'xvda' is used in more than one block-device mapping`

## Cause

This happens when the group's device name (for Block Device Mapping) and the AMI's device name do not match:

* AMI - "deviceName": "xvda"
* Group's configuration - "deviceName": "/dev/xvda"

## Solution
Change the device name from `xvda` to `/dev/xvda` on the group's side. Go to **Actions** > **Edit Configuration** > **Review Tab** > **Switch to Json Edit format** > **Apply the changes and save**.
