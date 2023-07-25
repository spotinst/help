# CloudFormation 

CloudFormation actions allow you to perform operations to manage your AWS resources. 

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* CloudFormation Filter Resources 
* CloudFormation Onboard Spot Eco 
* CloudFormation Onboard Spot User 
* CloudFormation Run Template 

### CloudFormation Filter Resources 

The action retrieves the resources for CloudFormation stack and returns a list matching the specified type. 

#### Input

Parameter | Description | Required
--------- | ----------- | --------
alias    | Target account alias to be used to perform given operation. | True
region_name | AWS region name  | True
stack    | Available CloudFormation Stacks | True
resource_type  | CloudFormation Resource like AWS::DynamodDB::Table  | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
resource_ids    | StringList  | IDs of filtered resources
execution_status | String   | Status of run (ie: S_OK / E_FAIL)

Input

![cloudformation-1](https://github.com/spotinst/help/assets/106514736/8a2032f2-79c1-4ee7-b6d9-ff7f9b0a57b1)

Output

![cloudformation-2](https://github.com/spotinst/help/assets/106514736/5e0aa53c-0bc0-4659-8abe-4979613c6bf1)

### CloudFormation Onboard Spot Eco

This action onboards an AWS account with Spot Eco. 

#### Input

Parameter | Description | Required
--------- | ----------- | --------
alias    | AWS target account for running the CloudFormation template | True
region_name | The region where CloudFormation stack deploys  | True
stack_name    | A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetical character and can't be longer than 128 characters. | True
permissions  | Level of permissions to be given to the new Spot Policy  | True
s3_bucket  | AWS S3 bucket where AWS Cost and Usage Report (CUR) is placed  | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
execution_status   | String  | Status of run (ie: S_OK / E_FAIL)
alias | String   | AWS target account
region_name | String   | Region where CloudFormation stack is deployed.
stack_id | String   | ID of deployed CloudFormation stack.

### Action Example 

Input 

![cloudformation-3](https://github.com/spotinst/help/assets/106514736/05697d69-3c34-4418-83dd-61961671231b)

Output 

![cloudformation-4](https://github.com/spotinst/help/assets/106514736/64cd4552-02e1-4a9a-af00-2d4faa69066a)

### CloudFormation Onboard Spot User 

This action connects an AWS account to Spot. 

Input 

|       Parameter       |                                                                        Description                                                                    |      Required  |   |   |
|-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|---|
|      alias            |     AWS target account for running the CloudFormation template                                                                                        |     True       |   |   |
|      name             |     Name of Spot StackSet                                                                                                                             |     True       |   |   |
|      permissions      |     Level of permissions to be given to the new Spot Policy                                                                                           |     True       |   |   |
|      org_unit_ids     |     The organization root ID or organizational unit (OU) IDs where StackSets deploy                                                                   |     True       |   |   |
|      region_name      |     Region where to deploy StackSet                                                                                                                   |     True       |   |   |
|      auto_deployment  |     Describes whether StackSets automatically deploy to Organization accounts that are added to the target organization or organizational unit (OU).  |     True       |   |   |
|      aws_account_ids  |     AWS account IDs under given OU where a StackSet will deploy
