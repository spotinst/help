# Ansible

Ansible is an IT automation platform that enables that makes it easier to deploy and maintain applications and systems.  

The integration between Spot Cpnnect and Ansible enables you to: 

* Execute an Ansible playbook from your S3 bucket and collect logs. 
* Centrally manage the SSH keys used by Ansible to connect with target VMs to execute commands. 
* Monitor execution status and pair it with other integration actions that Spot Connect offers. For example, the execution status can be passed to a conditional node which branches out to either sending a Slack message or create a JIRA issue. 

## Configure Ansible in Spot Connect  

1. In the left main menu, click **Connect** and click **Settings**. 
2. Under the Integrations tab, select **Ansible**.  
3. Configure a new integration instance with the information below. 

Details needed to set up an Ansible instance in Spot Connect: 

|       Parameter         |                                                                                 Description                                                                             |      Required  |   |
|-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Integration Alias  |     Alias for Ansible integration instance                                                                                                                              |     True       |   |
|      SSH Private Key    |     Access to these resources needs to be granted by following the instructions below. A SSH private key that allows access to the managed nodes needs to be provided.  |     True       |   |
|      Playbooks          |     S3 bucket with playbook directory                                                                                                                                   |     True       |   |
|      Logs               |     S3 bucket for execution logs                                                                                                                                        |     True       |   |
|      S3 Access Role     |     IAM role for bucket policy in target account                                                                                                                        |     True       |   |

Complete the following steps to configure the Ansible integration in Spot Connect: 

1. In the Ansible integration page, click **+ Add Integeration**. Enter the parameters, Integration Alias, SSH private key, Playbooks, Logs, and S3 Access Role.

![ansible-1](https://github.com/spotinst/help/assets/106514736/3412eeb1-537f-4ed5-8b84-26928205b59c)

2. Click **Add Instance**.

Complete the following steps in your AWS Account and get the desired parameters to insert in the Spot Connect console. 

1. Log in to the AWS Console. 
2. Enable cross-account access to the S3 bucket with Ansible playbooks and the optional S3 bucket for log files.   

![ansible-2](https://github.com/spotinst/help/assets/106514736/2db4f247-23b5-41dc-b1e9-011c0b060508)

3. Open the permissions for the selected S3 bucket and edit the bucket policy. 
4. Paste the bucket policy from below and update the Principal and Resource fields accordingly. The Principal value is the S3 Access Role copied from the step above.

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

![ansible-3](https://github.com/spotinst/help/assets/106514736/f75f22e1-3182-439d-b1e2-37ad716535f2)
 

A more restrictive policy for a separate S3 bucket with Ansible playbooks can be: 

![ansible-4](https://github.com/spotinst/help/assets/106514736/0524c3f6-9b0f-44ad-8539-2596040ad5ff)


## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* Ansible Run Playbook

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

|       Parameter Name  |       Type  |                      Description                  |   |
|-----------------------|:-----------:|:-------------------------------------------------:|---|
|      task_arn         |     String  |     The ARN for the task running the job.         |   |
|      task_status      |     String  |     The task status when the action returns.      |   |
|      log_bucket       |     String  |     The S3 bucket in which the log will be saved  |   |
|      log_key          |     String  |     The file name for the log                     |   |

#### Action Example 

Select Ansible Run Playbook node from the workflow editor and click the node.  Complete the following information:  

* Ansible Instance: Select the configured Ansible Instance from the dropdown menu. 
* Target Account Alias: Enter the AWS account alias configured that has access to the S3 bucket containing the playbook. 
* Playbook: Enter the name of the playbook present in the S3 bucket configured during the Ansible instance creation. 
* Hosts: You can either enter the host name, or you can pass the name of inventory file present in the bucket. 
* User: Specify the user that will be used for executing the command on managed node. 
  Pass any additional arguments to the ansible-playbook command. 
