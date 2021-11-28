# Access Your Data

This page shows how to run your own code and access data hosted in your cloud account. It assumes that you know how to [run a Spark application](ocean-spark/getting-started/?id=run-your-first-app) on Ocean for Apache Spark.
Specify data in your arguments
Suppose you want to run a word count application against files hosted in an S3 bucket.

The application file is hosted at s3a://my-example-bucket/word_count.py and takes two arguments, an input folder and an output folder.

Here’s the payload you would submit:

```yaml
curl -X POST \
  https://api.spotinst.io/ocean/spark/cluster/osc-e4089a00/app \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 4536dc4418995c553df9c0c0e1d31866453bcec3df0f31f97003926d67ff1e00

' \
  -d '{
  "job-id": "spark-pi",
  "configOverrides": {
    "type": "Scala",
    "sparkVersion": "3.2.0",
    "mainApplicationFile": "s3a://my-example-bucket/word_count.py",
    "arguments": [“s3a://my-example-bucket/input/*”, “s3a://my-example-bucket/output”]
  }
}'
```

The application above will likely fail because the Spark pods do not have sufficient permissions to access the code and the data.

Below are two ways to grant the Spark pods access to your data.

## Grant permissions to node instances

Spark pods running in Kubernetes inherit the permissions of the nodes they run on. So a simple solution is to grant the Kubernetes nodes access to your data.

### Your data is in the same AWS account as the Ocean Spark cluster

To allow the Kubernetes nodes and Spark pods to access your S3 buckets, complete the following steps:
1. Create a data access policy for your S3 buckets.
2. Create an IAM role and attach the data access policy to it.
3. Configure the Ocean [Virtual Node Group](ocean/features/launch-specifications) of your Ocean Spark cluster to use the IAM role.

To create a policy for your cluster nodes:
Sign in to the [IAM console](https://console.aws.amazon.com/iam/) with a user having administrator permissions.
1. In the navigation pane, choose Policies.
2. In the content pane, choose Create policy.
3. Choose the JSON tab and define the policy. An example of policy for Kubernetes nodes could be:

```yaml
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Action": [
               "s3:GetBucketLocation",
               "s3:ListAllMyBuckets"
           ],
           "Resource": "arn:aws:s3:::*"
       },
       {
           "Effect": "Allow",
           "Action": "s3:*",
           "Resource": [
               "arn:aws:s3:::<bucket-name>",
               "arn:aws:s3:::<bucket-name>/*"
           ]
       }
   ]
}
```

Now create an IAM role and attach the policy to it:
1. Sign in to the AWS Management Console and open the IAM console.
2. In the navigation pane, choose Roles and then click Create role.
3. Select AWS service as the type of trusted entities, and the EC2. Click Next: Permissions
4. Search for the policy you created above and mark it.
5. Click Next as many times as needed, choose a name for the IAM role, and create it.

Finally, configure the Ocean Virtual Node Group (VNG) of your Ocean Spark cluster to use the IAM role:
1. Sign in to the AWS Management Console and open the IAM console.
2. In the navigation pane, choose Roles
3. Search the roles you created above and open it.
4. Collect the name of the instance profile you associated with the role.

<img src="/ocean-spark/_media/configure-spark-apps-access-your-data-01.png" width="710" height="195" />

5. In the [Spot console](https://console.spotinst.com/), navigate to the [configuration of the VNG](ocean/tutorials/manage-virtual-node-groups?id=view-vngs) used in your Ocean Spark cluster.
6. Configure the VNG to use the instance profile that you noted down above

<img src="/ocean-spark/_media/configure-spark-apps-access-your-data-02.png" width="508" height="636" />

The Spark application will now be able to access the S3 bucket specified in the IAM policy you created.

### Your data is in an AWS account other than the Ocean Spark cluster

> **Tip**: This section assumes you are familiar with the previous one, “Your data is in the same AWS account as the Ocean Spark cluster”. The previous section provides more detailed explanations and acts as a tutorial. This section assumes a good knowledge of AWS Identity and Access Management (IAM).

To allow the Kubernetes nodes and Spark pods to access your S3 buckets, complete the following steps:
1. Create an IAM role in the AWS account where the data resides (“data account”). Note down the instance profile associated with this IAM role.
2. Add the following policy to the IAM role to grant it data access.

```yaml
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::<your data bucket>",
                "arn:aws:s3:::<your data bucket>/*",
            ]
        }
    ]
}
```

3. Create an IAM role in the AWS account where the Ocean Spark cluster resides (“cluster account”).
4. In the data account, authorize the cluster account IAM role to trust the data account IAM role. To do so, add the following to the data account IAM role’s trust policy:

```yaml
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<cluster account id>:role/<cluster account IAM role name>"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

5. Conversely, in the cluster account, grant the cluster account IAM role the ability to assume the data account IAM role.

```yaml
 {
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "Stmt1487884001000",
          "Effect": "Allow",
          "Action": [
              "sts:AssumeRole"
          ],
          "Resource": [
              "arn:aws:iam::<data account id>:role/<data account IAM role>"
          ]
      }
  ]
}
```

6. From Spot console, configure the Virtual Node Group.
7. In the Spot console, configure the Virtual Node Group (VNG) of your Ocean Spark cluster to use the instance profile associated to the cluster account IAM role.
8. Eventually, modify the submission payload of your Spark application to assume the data account IAM role. To do so, merge the following JSON fragment into the configuration of your Spark application:

```yaml
{
  "hadoopConf": {
    "fs.s3a.stsAssumeRole.arn": "arn:aws:iam::<data account id>:role/<data account IAM role>",
    "fs.s3a.assumed.role.arn": "arn:aws:iam::<data account id>:role/<data account IAM role>",
    "fs.s3a.aws.credentials.provider": "org.apache.hadoop.fs.s3a.auth.AssumedRoleCredentialProvider",
    "fs.s3a.assumed.role.credentials.provider": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider,com.amazonaws.auth.EnvironmentVariableCredentialsProvider,com.amazonaws.auth.InstanceProfileCredentialsProvider"
  }
}
```

## Grant permissions using Kubernetes secrets

Spark pods can impersonate an IAM user (AWS) when provided with the user’s credentials. This technique completely overrides the IAM role assumed by the Kubernetes nodes (see previous section, “Granting permissions to node instances”).

To protect those credentials, you will store them in Kubernetes secrets and configure Spark to mount those secrets into all the driver and executor pods as [environment variables](ocean-spark/configure-spark-apps/secrets-environment-variables).

To let your Spark pods access your S3 buckets, complete the following steps:
1. Create a data access policy for your S3 buckets.
2. Create a user that is granted the data access policy.
3. Create an access key for the user.
4. Create a Kubernetes secret that contains the access key.
5. Configure Spark to use the Kubernetes secret.

Create a policy for your cluster nodes:
1. Sign in to the [IAM console](https://console.aws.amazon.com/iam/) with a user having administrator permissions.
2. In the navigation pane, choose Policies.
3. In the content pane, choose Create policy.
4. Choose the JSON tab and define the policy. An example of policy for cluster nodes could be:

```yaml
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Action": [
               "s3:GetBucketLocation",
               "s3:ListAllMyBuckets"
           ],
           "Resource": "arn:aws:s3:::*"
       },
       {
           "Effect": "Allow",
           "Action": "s3:*",
           "Resource": [
               "arn:aws:s3:::<bucket-name>",
               "arn:aws:s3:::<bucket-name>/*"
           ]
       }
   ]
}
```

Create a user having the data access policy:
1. Sign in to the AWS Management Console and open the IAM console .
2. In the navigation pane, choose Users, and click Add User.
3. Give it a name and check "Programmatic access".
4. Click "Attach existing policies directly" and attach the policy you just created.
5. Complete the user creation process.

A user with the correct policy is now created.

Create an access key for the user:
1. Sign in to the AWS Management Console and open the IAM console.
2. In the navigation pane, choose Users, and click on the user you just created.
3. Go to the "Security credentials" tab and click "Create access key".
4. Note down the access key ID and the access key secret.

### Create a Kubernetes secret that contains the access key:

The [kubectl command](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) below generates a secret from the access key ID and the access key secret created in the previous steps:

```
kubectl create secret -n spark-apps generic data-access \
       --from-literal 'AWS_ACCESS_KEY_ID=<access-key-id>' \
       --from-literal 'AWS_SECRET_ACCESS_KEY=<access-key-secret>'
```

### Configure Spark to use the Kubernetes secret

You can now modify the payload to launch the Spark application in order to reference the secret:

```yaml
curl -X POST \
 https://api.spotinst.io/ocean/spark/cluster/osc-e4089a00/app \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer 4536dc4418995c553df9c0c0e1d31866453bcec3df0f31f97003926d67ff1e00

' \
 -d '{
 "job-id": "spark-pi",
 "configOverrides": {
   "type": "Scala",
   "sparkVersion": "3.2.0",
   "mainApplicationFile": "s3a://my-example-bucket/word_count.py",
   "arguments": [“s3a://my-example-bucket/input/*”, “s3a://my-example-bucket/output”],
"driver": {
      "envSecretKeyRefs": {
        "AWS_ACCESS_KEY_ID": {
          "name": "data-access",
          "key": "AWS_ACCESS_KEY_ID"
        },
        "AWS_SECRET_ACCESS_KEY": {
          "name": "data-access",
          "key": "AWS_SECRET_ACCESS_KEY"
        }
      }
    },
    "executor": {
      "envSecretKeyRefs": {
        "AWS_ACCESS_KEY_ID": {
          "name": "data-access",
          "key": "AWS_ACCESS_KEY_ID"
        },
        "AWS_SECRET_ACCESS_KEY": {
          "name": "data-access",
          "key": "AWS_SECRET_ACCESS_KEY"
        }
      }
    }
  }
 }
}'
```

## What's Next?

Learn how to [package Spark code](ocean-spark/configure-spark-apps/package-spark-code).
