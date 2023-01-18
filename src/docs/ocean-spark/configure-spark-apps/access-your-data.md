# Access Your Data

This page shows how to run your own code and access data hosted in your cloud account. It assumes that you know how to [run a Spark application](ocean-spark/getting-started/?id=run-your-first-app) on Ocean for Apache Spark.
Specify data in your arguments
Suppose you want to run a word count application against files hosted in an S3 bucket.

The application file is hosted at s3a://my-example-bucket/word_count.py and takes two arguments, an input folder and an output folder.

Here’s the payload you would submit:

```yaml
curl -X POST \
  'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <your-spot-token>' \
  -d '{
  "jobId": "spark-pi",
  "configOverrides": {
    "type": "Scala",
    "sparkVersion": "3.2.1",
    "mainApplicationFile": "s3a://my-example-bucket/word_count.py",
    "image": "gcr.io/ocean-spark/spark:platform-3.2-latest",
    "arguments": ["s3a://my-example-bucket/input/*", "s3a://my-example-bucket/output"]
  }
}'
```

The application above will likely fail because the Spark pods do not have sufficient permissions to access the code and the data.

Below are two ways to grant the Spark pods access to your data.

## Grant permissions to node instances

Spark pods running in Kubernetes inherit the permissions of the nodes they run on. So a simple solution is to grant the Kubernetes nodes access to your data.

### AWS: Your data is in the same AWS account as the Ocean Spark cluster

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
  "Statement":
    [
      {
        "Effect": "Allow",
        "Action": ["s3:GetBucketLocation", "s3:ListAllMyBuckets"],
        "Resource": "arn:aws:s3:::*"
      },
      {
        "Effect": "Allow",
        "Action": "s3:*",
        "Resource":
          ["arn:aws:s3:::<bucket-name>", "arn:aws:s3:::<bucket-name>/*"]
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

> **Note**: If after modifying the instance profile used by the Ocean Spark VNGs, the Kubernetes nodes failed to launch and register with the cluster, you may need to modify your aws-auth config map. The new role should be added to the groups `system:bootstrappers` and `system:nodes`.

### AWS: Your data is in an AWS account other than the Ocean Spark cluster

> **Tip**: This section assumes you are familiar with the previous one, "Your data is in the same AWS account as the Ocean Spark cluster”. The previous section provides more detailed explanations and acts as a tutorial. This section assumes a good knowledge of AWS Identity and Access Management (IAM).

To allow the Kubernetes nodes and Spark pods to access your S3 buckets, complete the following steps:

1. Create an IAM role in the AWS account where the data resides ("data account”). Note down the instance profile associated with this IAM role.
2. Add the following policy to the IAM role to grant it data access.

```yaml
{
  "Version": "2012-10-17",
  "Statement":
    [
      {
        "Effect": "Allow",
        "Action": ["s3:*"],
        "Resource":
          [
            "arn:aws:s3:::<your data bucket>",
            "arn:aws:s3:::<your data bucket>/*"
          ]
      }
    ]
}
```

3. Create an IAM role in the AWS account where the Ocean Spark cluster resides ("cluster account”).
4. In the data account, authorize the cluster account IAM role to trust the data account IAM role. To do so, add the following to the data account IAM role’s trust policy:

```yaml
{
  "Version": "2012-10-17",
  "Statement":
    [
      {
        "Effect": "Allow",
        "Principal":
          {
            "AWS": "arn:aws:iam::<cluster account id>:role/<cluster account IAM role name>",
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
  "Statement":
    [
      {
        "Sid": "Stmt1487884001000",
        "Effect": "Allow",
        "Action": ["sts:AssumeRole"],
        "Resource":
          ["arn:aws:iam::<data account id>:role/<data account IAM role>"]
      }
    ]
}
```

6. From Spot console, configure the Virtual Node Group.
7. In the Spot console, configure the Virtual Node Group (VNG) of your Ocean Spark cluster to use the instance profile associated to the cluster account IAM role.
8. Eventually, modify the submission payload of your Spark application to assume the data account IAM role. To do so, merge the following JSON fragment into the configuration of your Spark application:

```yaml
{
  "hadoopConf":
    {
      "fs.s3a.stsAssumeRole.arn": "arn:aws:iam::<data account id>:role/<data account IAM role>",
      "fs.s3a.assumed.role.arn": "arn:aws:iam::<data account id>:role/<data account IAM role>",
      "fs.s3a.aws.credentials.provider": "org.apache.hadoop.fs.s3a.auth.AssumedRoleCredentialProvider",
      "fs.s3a.assumed.role.credentials.provider": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider,com.amazonaws.auth.EnvironmentVariableCredentialsProvider,com.amazonaws.auth.InstanceProfileCredentialsProvider",
    },
}
```

> **Note**: If after modifying the instance profile used by the Ocean Spark VNGs, the Kubernetes nodes failed to launch and register with the cluster, you may need to modify your aws-auth config map. The new role should be added to the groups `system:bootstrappers` and `system:nodes`.

### GCP

Find the service account used by GCE instances running as Kubernetes nodes. Depending on your setup, it can be the default Compute Engine service account, of the form

```
PROJECT_NUMBER-compute@developer.gserviceaccount.com
```

or another service account that you created yourself of the form

```
SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com
```

The default Compute Engine service account is used by default in a GKE cluster.
You can specify another service account for Spark applications in the settings of the [Virtual Node Group](ocean/features/launch-specifications) (VNGs) dedicated to Spark.

A quick way to find out the service account name is to run a Spark application accessing your data.
When the application fails, the authorization error in the driver log usually shows the service account name.

Once you have found the service account, grant it sufficient permissions using [IAM roles](https://cloud.google.com/iam/docs/overview). The list of IAM roles for GCS is available [here](https://cloud.google.com/storage/docs/access-control/iam-roles).

## Grant permissions using Kubernetes secrets

### AWS

Spark pods can impersonate an IAM user (AWS) when provided with the user’s credentials. This technique completely overrides the IAM role assumed by the Kubernetes nodes (see previous section, Granting permissions to node instances).

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
  "Statement":
    [
      {
        "Effect": "Allow",
        "Action": ["s3:GetBucketLocation", "s3:ListAllMyBuckets"],
        "Resource": "arn:aws:s3:::*"
      },
      {
        "Effect": "Allow",
        "Action": "s3:*",
        "Resource":
          ["arn:aws:s3:::<bucket-name>", "arn:aws:s3:::<bucket-name>/*"]
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

#### Create a Kubernetes secret that contains the access key

The [kubectl command](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) below generates a secret from the access key ID and the access key secret created in the previous steps:

```
kubectl create secret -n spark-apps generic data-access \
       --from-literal 'AWS_ACCESS_KEY_ID=<access-key-id>' \
       --from-literal 'AWS_SECRET_ACCESS_KEY=<access-key-secret>'
```

#### Configure Spark to use the Kubernetes secret

You can now modify the payload to launch the Spark application in order to reference the secret:

```bash
curl -X POST \
'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>' \
 -d '{
 "job-id": "spark-pi",
 "configOverrides": {
   "type": "Scala",
   "sparkVersion": "3.2.1",
   "image": "gcr.io/ocean-spark/spark:platform-3.2-latest",
   "mainApplicationFile": "s3a://my-example-bucket/word_count.py",
   "arguments": ["s3a://my-example-bucket/input/*", "s3a://my-example-bucket/output"],
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

### GCP

Create a service account in the GCP console, and grant it sufficient permissions using [IAM roles](https://cloud.google.com/iam/docs/overview). The list of IAM roles for GCS is [here](https://cloud.google.com/storage/docs/access-control/iam-roles).

This bash script will create an access key for the service account, and store it in a secret called `data-access` in the Kubernetes namespace `spark-apps` where Spark applications are run:

```
TMP_FILE=$(mktemp)
gcloud iam service-accounts keys create $TMP_FILE --iam-account <your-service-account>@<your-project>.iam.gserviceaccount.com
kubectl create secret -n spark-apps generic data-access --from-file=key.json=$TMP_FILE)
```

Modify the payload to launch the Spark application in order to reference the secret:

```bash
curl -X POST \
'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>' \
 -d '{
 "job-id": "spark-pi",
 "configOverrides": {
   "type": "Scala",
   "sparkVersion": "3.2.1",
   "image": "gcr.io/ocean-spark/spark:platform-3.2-latest",
   "mainApplicationFile": "s3a://my-example-bucket/word_count.py",
   "arguments": ["s3a://my-example-bucket/input/*", "s3a://my-example-bucket/output"],
   "driver": {
      "secrets": [
        {
          "name": "data-access",
          "path": "/mnt/secrets",
          "secretType": "GCPServiceAccount"
        }
      ]
    },
    "executor": {
      "secrets": [
        {
          "name": "data-access",
          "path": "/mnt/secrets",
          "secretType": "GCPServiceAccount"
        }
      ]
    }
  }
 }
}'
```

## Grant permissions with a custom Kubernetes service account (AWS only)

On EKS, [a Kubernetes service account can be associated with an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html).
The Ocean Spark API allows you to leverage this feature to grant your Spark applications data access in a secure way using service accounts.

This section explains the required steps:

1. Create an IAM OIDC provider for your cluster (one-time operation)
2. Create an IAM role and grant it access to your data
3. Create a Kubernetes service account in the EKS cluster
4. Associate the Kubernetes service account with the IAM role
5. Configure your Spark application to use the custom service account

#### Create an IAM OIDC provider for your cluster

> **Info**: This operation must be performed only once for every EKS cluster.

Please refer to [this page](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) of the AWS documentation.

#### Create and IAM role and grant it access to your data

- Create an IAM role in the AWS account. Note down the ARN of this role. In the rest of the document, the example ARN will be called `arn:aws:iam::111122223333:role/replace-me`.
- Add the following policy to the IAM role to grant it data access.

```yaml
{
  "Version": "2012-10-17",
  "Statement":
    [
      {
        "Effect": "Allow",
        "Action": ["s3:*"],
        "Resource":
          [
            "arn:aws:s3:::<your data bucket>",
            "arn:aws:s3:::<your data bucket>/*"
          ]
      }
    ]
}
```

#### Create a Kubernetes service account in the EKS cluster

```bash
kubectl create serviceaccount -n spark-apps data-writer
kubectl create rolebinding -n spark-apps data-writer-pod-manager-rb --role pod-manager --serviceaccount spark-apps:data-writer
```

The above bash snippet does the following:

- Create a service account `data-writer` (this is an example name) in namespace `spark-apps`, where the Spark applications live.
- Bind the Kubernetes role `pod-manager` to service account `data-writer`. This is required so that the Spark driver can interact with Kubernetes, requesting executor pods for example.

#### Associate the Kubernetes service account with the IAM role

To tell EKS to associate a Kubernetes service account with an IAM role, an annotation must be added to the service account.

```bash
kubectl annotate -n spark-apps serviceaccounts data-writer \
  eks.amazonaws.com/role-arn=arn:aws:iam::111122223333:role/replace-me
```

Continuing our example, the above snippet tells EKS to associate service account `data-writer` to IAM role `arn:aws:iam::111122223333:role/replace-me`. This is an example ARN and should be replaced with the ARN noted down in section "Create and IAM role and grant it access to your data".

#### Configure your Spark application to use the custom service account

Use the field `serviceAccountName` exposed by the Ocean Spark API to configure the Spark application to use service account `data-writer`.

Additionally, Hadoop (on which Spark relies to interacts with S3) must be configured to use the OIDC provider created in the first step of this section.
This is achieved by setting the Hadoop configuration `fs.s3a.aws.credentials.provider` to `com.amazonaws.auth.WebIdentityTokenCredentialsProvider`.

Here is a full example:

```bash
curl -X POST \
'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>' \
 -d '{
 "job-id": "spark-pi",
 "configOverrides": {
   "type": "Scala",
   "sparkVersion": "3.2.1",
   "image": "gcr.io/ocean-spark/spark:platform-3.2-latest",
   "mainApplicationFile": "s3a://my-example-bucket/word_count.py",
   "arguments": ["s3a://my-example-bucket/input/*", "s3a://my-example-bucket/output"],
   "serviceAccountName": "data-writer",
   "hadoopConf": {
      "fs.s3a.aws.credentials.provider": "com.amazonaws.auth.WebIdentityTokenCredentialsProvider"
   }
  }
 }
}'
```

## What's Next?

Learn how to [package Spark code](ocean-spark/configure-spark-apps/package-spark-code).
