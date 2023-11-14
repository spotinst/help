# CloudFormation Templates

CloudFormation actions allow you to perform operations to manage your AWS resources. 

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow: 

* [CloudFormation Filter Resources](spot-connect/integrations/cloudformation?id=cloudformation-filter-resources) 
* [CloudFormation Onboard Spot Eco](spot-connect/integrations/cloudformation?id=cloudformation-onboard-spot-eco) 
* [CloudFormation Onboard Spot User](spot-connect/integrations/cloudformation?id=cloudformation-onboard-spot-user) 
* [CloudFormation Run Template](spot-connect/integrations/cloudformation?id=cloudformation-run-template) 

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

#### Action Example

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

#### Action Example 

Input 

![cloudformation-3](https://github.com/spotinst/help/assets/106514736/ec440116-ae45-4a25-9c9d-5539d68cf4c8)


Output 

![cloudformation-4](https://github.com/spotinst/help/assets/106514736/34c4ddf6-6d76-458b-9906-a2298f3ecd9d)

### CloudFormation Onboard Spot User 

This action connects an AWS account to Spot. 

#### Input 

|       Parameter       |                                                                        Description                                                                    |      Required  |   |
|-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      alias            |     AWS target account for running the CloudFormation template                                                                                        |     True       |   |
|      name             |     Name of Spot StackSet                                                                                                                             |     True       |   |
|      permissions      |     Level of permissions to be given to the new Spot Policy                                                                                           |     True       |   |
|      org_unit_ids     |     The organization root ID or organizational unit (OU) IDs where StackSets deploy                                                                   |     True       |   |
|      region_name      |     Region where to deploy StackSet                                                                                                                   |     True       |   |
|      auto_deployment  |     Describes whether StackSets automatically deploy to Organization accounts that are added to the target organization or organizational unit (OU).  |     True       |   |
|      aws_account_ids  |     AWS account IDs under given OU where a StackSet will deploy                                                                                       |     False      |   |

#### Output

|       Parameter         |                                                                            Type                                                                       |                 Description             |   |   |
|-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------:|---|---|
|      stack_set_id       |     String                                                                                                                                            |     ID of StackSet deployed             |   |   |
|      stack_instance_id  |     String                                                                                                                                            |     ID of stack instance                |   |   |
|      execution_status   |     String                                                                                                                                            |     Status of run (ie: S_OK / E_FAIL)   |   |   |

#### Action Example 

Input

![cloudformation-5](https://github.com/spotinst/help/assets/106514736/bc2f5f0f-f193-4182-b6db-befb8be11ddc)

Output

![cloudformation-6](https://github.com/spotinst/help/assets/106514736/fe2b5c4b-a808-4cd6-959d-919ab6c31d3d)

### CloudFormation Run Template 

The action runs a CloudFormation template. 

#### Input 

|       Parameter       |                                                                                     Description                                                                                |      Required  |   |   |
|-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|---|
|      alias            |     AWS target account for running the CloudFormation template.                                                                                                                |     True       |   |   |
|      stack_name       |     A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetical character and can't be longer than 128 characters.  |     True       |   |   |
|      integration_id   |     CloudFormation Template Resource integration ID                                                                                                                            |     False      |   |   |
|      template_url     |     URL to fetch CloudFormation template                                                                                                                                       |     False      |   |   |
|      parameters       |     CloudFormation template parameters                                                                                                                                         |     False      |   |   |
|      capabilities     |     Capabilities in order for CloudFormation to create the stack                                                                                                               |     False      |   |   |
#### Output

|       Parameter        |       Type  |                Description             |   |   |
|------------------------|:-----------:|:--------------------------------------:|---|---|
|      stack_id          |     String  |     ID of stack deployed               |   |   |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)  |   |   |

#### Action Example 

Input 

![cloudformation-7](https://github.com/spotinst/help/assets/106514736/9885b274-ff9d-4988-b7de-e8648008c827)

Output 

![cloudformation-8](https://github.com/spotinst/help/assets/106514736/ade956bd-2b4c-4e1c-b7f4-e1d9029010f8)
