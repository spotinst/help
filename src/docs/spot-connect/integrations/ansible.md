# Ansible

Use the Ansible integration to execute Ansible playbooks in a secure and centrally managed environment where your team workload can be orchestrated seamlessly. 

Ansible creates ad-hoc mechanisms to manage secrets, pass data, collect logs, and manage users where the playbooks are developed. 

The integration between Spot Cpnnect and Ansible enables you to: 

* Execute an Ansible playbook from your S3 bucket and collect logs. 
* Centrally manage the SSH keys used by Ansible to connect with target VMs to execute commands. 
* Monitor execution status and pair it with other integration actions that Spot Connect offers. For example, the execution status can be passed to a conditional node which branches out to either sending a Slack message or create a JIRA issue. 

## Configure Ansible in Spot Connect  

1. In the left main menu, click **Connect** and click **Settings**. 
2. Under the Integrations tab, select **Ansible**.  
3. Configure a new integration instance with the information below. 

Details needed to set up an Ansible instance in Spot Connect: 

|       Parameter                                                                  |                                                                                 Description                                                                             |      Required  |   |
|----------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Playbooks (S3 bucket with playbooks directory)                              |     The Ansible directory hierarchy is expected to be available in an S3 bucket with Ansible playbooks.                                                                 |     True       |   |
|      S3 Access Role (Spot Connect IAM role for bucket policy in target account)  |     To enable cross-account access to the S3 bucket.                                                                                                                    |     True       |   |
|      Logs (S3 bucket for execution logs)                                         |     The output of a run will be uploaded to the same bucket, or an optional S3 bucket for log files.                                                                    |     False      |   |
|      SSH Private Key (Ansible Controller Private ssh key)                        |     Access to these resources needs to be granted by following the instructions below. A SSH private key that allows access to the managed nodes needs to be provided.  |     True       |   |

Complete the steps below in your AWS Account and get the desired parameters to enter in the Spot Connect console: 

1. Log in to the [AWS console](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin). 
2. Enable cross-account access to the S3 bucket with Ansible playbooks and the optional S3 bucket for log files. 

 

Open the permissions for the selected S3 bucket and edit the bucket policy. 

Paste the bucket policy from below and update the Principal and Resource fields accordingly. The principal value is the S3 Access Role copied from the previous step.  

```yaml
{
    "Version": "2012-10-17",
    "Id": "Policy1603211524665",
    "Statement": [
        {
            "Sid": "Stmt1603211514142",
            "Effect": "Allow",
            "Principal": {
                "AWS": REPLACE THIS WITH S3 ACCESS ROLE
            },
            "Action": [
                "s3:GetObject",
                "s3:PutObjectAcl",
                "s3:ListBucket",
                "s3:PutObject"
            ],
            "Resource": [
            REPLACE THIS WITH YOUR S3 BUCKET ARN
            Example-
                "arn:aws:s3:::YOUR S3 BUCKET NAME",
                "arn:aws:s3:::YOUR S3 BUCKET NAME/*"
            ]
        }
    ]
}
``` 

The policy for a single bucket or the optional S3 bucket for log files should be: 


 
A more restrictive policy for a separate S3 bucket with Ansible playbooks can be: 
