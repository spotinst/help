# Ansible

Ansible is an IT automation platform that makes it easier to deploy and maintain applications and systems. 

Use the Ansible integration to execute Ansible playbooks in a secure and centrally managed environment.

The integration between Spot Connect and Ansible enables you to: 

* Execute an Ansible playbook from your S3 bucket and collect logs. 
* Centrally manage the SSH keys used by Ansible to connect with target VMs to execute commands. 
* Monitor execution status and pair it with other integration actions that Spot Connect offers. For example, the execution status can be passed to a conditional node which branches out to either sending a Slack message or create a JIRA issue. 

## Configure Ansible in Spot Connect  

1. In the left main menu, click **Connect** and click **Settings**. 
2. Under the Integrations tab, select **Ansible**.  
3. Configure a new integration instance with the information below. 

Details needed to set up an Ansible instance in Spot Connect: 

|       Parameter               |                                                                                 Description                                                                             |      Required  |   |
|-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Integration Alias        |     Alias for Ansible integration instance                                                                                                                              |     True       |   |
|      SSH Private Key          |     Access to these resources needs to be granted by following the instructions below. A SSH private key that allows access to the managed nodes needs to be provided.  |     True       |   |
|      S3 Bucket with Playbook  |     S3 bucket with playbook directory                                                                                                                                   |     True       |   |
|      S3 Bucket for logs       |     Optional S3 bucket for execution logs. If not given, the logs will be uploaded to the same S3 bucket with the playbooks.                                            |     False      |   |
|      S3 Access Role           |     IAM role for bucket policy in target account                                                                                                                        |     True       |   |

Complete the following steps to configure the Ansible integration in Spot Connect: 

1. In the Ansible integration page, click **+ Add Integeration**. Enter the parameters, Integration Alias, SSH private key, S3 Bucket with Playbooks and S3 Bucket for Logs.

![ansible-1](https://github.com/spotinst/help/assets/106514736/5a204e0c-451a-4399-94bc-c5659dfb19e5)

2. Click **Add Instance**.

### No Existing S3 Bucket 

Complete the following steps in your AWS Account if you do not have an S3 bucket for Playbook created and get the desired parameters to insert in the Spot Connect console.  

1. Log in to the AWS Console. 
2. Go to S3 and click **Create Bucket**. 
3. Enter a name in the Bucket Name field and choose a region. 
4. Enable cross-account access to the S3 bucket.
   
![ansible-2](https://github.com/spotinst/help/assets/106514736/19aadd95-98d6-4b13-ba16-8cafae6dc1ba)

5. Click **Create bucket**. 
6. (Optional) Follow the previous steps again for creating S3 bucket for logs.

### Existing S3 Bucket 

Complete the following steps in your AWS account if you already have an S3 bucket with Ansible playbooks and the optional S3 bucket for log files, enable cross-account access.  

1. Log in to the AWS Console and click S3. 
2. Select your bucket. 
3. Click the **Permissions** tab, click **Edit** under Block public access (bucket settings).  

![ansible-3](https://github.com/spotinst/help/assets/106514736/b06bb697-27c4-40ce-b7a3-ebcced5f5cdc)

4. Enable cross-account access. 

![ansible-4](https://github.com/spotinst/help/assets/106514736/06c62824-668d-4349-b3fc-1c1a89461024)

5. Open the permissions for the selected S3 bucket and edit the bucket policy. 
6. Paste the bucket policy from below and update the Principal and Resource fields accordingly. The Principal value is the S3 Access Role copied from the previous step. 

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

![ansible-5](https://github.com/spotinst/help/assets/106514736/a6b88eb9-7336-4dfe-9c21-0af9ed8110e1)

A more restrictive policy for a separate S3 bucket with Ansible playbooks can be: 

![ansible-6](https://github.com/spotinst/help/assets/106514736/d51d1f71-1ce1-486a-b06a-f8313c0e5eb8)

Upload your playbook and inventory files in the S3 bucket for Playbook.  

![ansible-7](https://github.com/spotinst/help/assets/106514736/a281796d-3475-4908-9ff0-d73f07c8ba5d)

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Ansible Run Playbook](spot-connect/integrations/ansible?id=ansible-run-playbook)

### Ansible Run Playbook 

This action launches a playbook with Ansible. 

#### Input

|       Parameter            |                             Description                         |      Required  |   |
|----------------------------|:---------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias  |     Target account alias to be used to perform given operation  |     True       |   |
|      Playbook              |     Name of the playbook to execute                             |     True       |   |
|      Hosts                 |     List of hosts or a host inventory file                      |     True       |   |
|      User                  |     Ansible user id on the client machines                      |     True       |   |
|      Extra Args            |     Extra arguments to be passed to the playbook                |     True       |   |

#### Output

|       Parameter Name  |       Type  |                       Description                  |   |
|-----------------------|:-----------:|:--------------------------------------------------:|---|
|      task_arn         |     String  |     The ARN for the task running the job.          |   |
|      task_status      |     String  |     The task status when the action returns.       |   |
|      log_bucket       |     String  |     The S3 bucket in which the log will be saved.  |   |
|      log_key          |     String  |     The file name for the log.                     |   |
|                       |             |                                                    |   |

#### Action Example 

In the workflow builder, select the Ansible Run Playbook node from the workflow editor and click the node.  Complete the following information:  

* Ansible Instance: Select the configured Ansible Instance from the dropdown menu.  
* Target Account Alias: Enter the AWS account alias configured that has access to the S3 bucket containing the playbook. 
* Playbook: Enter the name of the playbook present in the S3 bucket configured during the Ansible instance creation. 
* Hosts: You can either enter the host name, or you can pass the name of inventory file present in the bucket.  
* User (optional): Specify the user that will be used for executing the command on managed node. 
* Extra Args (optional): Pass any additional arguments to the ansible-playbook command.

#### Input

![ansible-8](https://github.com/spotinst/help/assets/106514736/621723e8-10ea-4ca0-8196-94f183433227)
