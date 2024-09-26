# Create a Stateful Node with Application Persistency

This topic describes how to create a stateful node with application persistence using a date and time Python script in the Spot API.

Application persistency adds a layer of persistence by saving the application's memory, allowing seamless resumption upon replacing the instance, that utilizes Spot instances. It integrates with S3 and Elastic File System (EFS), and periodically takes memory snapshots to resume where it left off. Application persistence offers cost efficiency by minimizing downtime costs and provides enhanced flexibility.

## Prerequisites
* AMI with LINUX OS
* Spot account with valid permissions
* Spot token
* S3 bucket or EFS
* Security Group with an inbound rule for port 9527. If you want to connect to the instance, additionally enable the SSH port (22).
* Python scripts.

## Step 1: Configure Application Persistency

Run the following API command using Postman:

METHOD: `POST`

PATH: `https://api.spotinst.io/aws/ec2/applicationPersistency/config?accountId={{account_id}}` 

**Make sure to enter your account ID.** 

BODY (JSON):

```
 {
  "config": {
      "name": "BI",
      "runCmd": "python3 /home/ec2-user/myapp/print_datetime_app.py",
      "snapshotDestination": "<YOUR_S3_BUCKET_NAME>",
      "snapshotScheduler": "*/3 * * * *",
      "externalFiles": ["/home/ec2-user/myapp/datetime_log.txt"]
  }
}
```

You will receive your new application ID (apc-123456789) in Postman’s output. Save it for later use. 

Example of Postman’s response:

 
Open image-20240602-093621.png
image-20240602-093621.png
 

**Body Explanation**

* RunCmd: The cmd to run the app, including the full path of the exec file. 
* SnapshotDestination: The name of the S3 bucket or the ID of the EFS (if you are using EFS, provide the EFS ID).
* SnapshotScheduler: The cron expression for the frequency of the snapshots. 
* ExternalFiles (optional): A list of files you want to save, including the full path of the file. 

> **Note**: The snapshot will fail if the files do not exist on the path you provided. Make sure the path is correct and the files exist. 
It is recommended to use absolute paths in your script.

Body example with ExternalFiles:

```
    {  
      "name": "BI",
      "runCmd": "python3 /home/ec2-user/myapp/print_datetime_app.py",
      "snapshotDestination": "<YOUR_S3_BUCKET_NAME>",
      "snapshotScheduler": "*/3 * * * *",
      "externalFiles": ["/home/ec2-user/file1", "/home/ec2-user/myapp/datetime_log.txt"]
    }
```

## Step 2: Create an IAM Role

To run stateful nodes with application persistency, you need to create a custom IAM role with the necessary permissions to perform process-related actions.

### Step 2.1: Create the Policy
1. Log in to your AWS account and click **Identity and Access Management (IAM)**.
2. Click **Policies** > **Create Policy**. 

Open image-20240603-094445.png
image-20240603-094445.png

3. In the policy creation wizard, change the display to JSON view and copy the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "ec2:DetachVolume",
        "ec2:AttachVolume",
        "ec2:DescribeInstances",
        "ec2:DeleteSnapshot",
        "ec2:CreateImage",
        "s3:ListBucket",
        "ec2:DescribeSnapshots",
        "ec2:CreateVolume",
        "ec2:DescribeSpotPriceHistory",
        "s3:PutObject",
        "s3:GetObject",
        "ec2:CreateSnapshots",
        "ec2:DescribeVolumes",
        "ec2:CreateSnapshot",
        "pricing:*",
        "s3:DeleteObject",
        "ec2:DescribeTags"
      ],
      "Resource": "*"
    }
  ]
}
```

4. Paste the policy in the policy editor and save the changes.

### Step 2.2: Create the Role
1. In your AWS account, click **Identity and Access Management (IAM)**.
2. Click **Roles** > **Create Role**. 

Open image-20240603-094022.png
image-20240603-094022.png

3. Select **AWS service**, and in the _Service or use case_ field, select **EC2**.
4. Select the policy you created in the previous step.

Open image-20240603-095110.png
image-20240603-095110.png

5. Enter a name for your role and click **Create Role**.

Open image-20240603-095227.png
image-20240603-095227.png

6. Copy the ARN. This is the ID for the stateful node.

Open image-20240603-095344.png
image-20240603-095344.png

## Step 3: Create a Stateful Node (API) (Optional)

If you do not have an existing stateful node, run the following command in the Spot API to create a stateful node or follow [these steps](https://docs.spot.io/managed-instance/getting-started/create-a-new-managed-instance). 

METHOD: `POST`

PATH: `https://api.spotinst.io/aws/ec2/managedInstance`

BODY(JSON): 

```json
{
   "managedInstance":{
      "name":"<YOUR_SSN_NAME>",
      "region":"<REGION>",
      "strategy":{
         "revertToSpot":{
            "performAt":"always"
         }
      },
      "persistence":{
         "persistPrivateIp":true,
         "persistRootDevice":false,
         "blockDevicesMode":null,
         "persistApplication":true,
         "applicationPersistencyConfig":[
            "apc-123456789"
         ]
      },
      "healthCheck":{
         "type":"EC2",
         "autoHealing":true,
         "gracePeriod":120,
         "unhealthyDuration":120
      },
      "compute":{
         "subnetIds":[
            "subnet-123456789"
         ],
         "vpcId":"vpc-123456789",
         "launchSpecification":{
            "instanceTypes":{
               "preferredType":"t2.medium",
               "types":[
                  "t3a.medium",
                  "m3.large",
                  "t2.medium",
                  "m1.large",
                  "t3.medium"
               ]
            },
            "securityGroupIds":[
               "sg-123456789"
            ],
            "iamRole":{
               "name":null,
               "YOUR_INSTANCE_PROFILE_ARN"
            },
            "imageId":"ami-123456789",
            "keyPair":"<YOUR_KEY_PAIR>",
            "tags":[
               {
                  "tagKey":"creator",
                  "tagValue":"<YOUR_EMAIL>"
               }
            ],
            "userData":"<YOUR_ENCODED_USER_DATA>",
            "shutdownScript":null,
            "networkInterfaces":[
               {
                  "deviceIndex":0,
                  "associateIpv6Address":false
               }
            ],
            "creditSpecification":{
               "cpuCredits":"standard"
            }
         },
         "privateIp":null,
         "product":"Linux/UNIX"
      },
      "integrations":{
      },
      "scheduling":{
      }
   }
}
```

## Step 4: Connect Application Persistency 

To attach application persistency to a stateful node, follow these steps:

1. Edit an existing or newly created stateful node using the API call in step 3 by adding the new section to the configuration:

```
   "persistApplication":true,
         "applicationPersistencyConfig":[
            "apc-123456789"
         ]
``` 

2. Insert the ID assigned to the application persistence configuration in the `apc-123456789` parameter.
3. Run the command in the Spot API. 

