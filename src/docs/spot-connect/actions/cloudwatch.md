# CloudWatch 

CloudWatch is used to monitor AWS resources and use alarms, logs, and events to take automated action to reduce mean time to resolution.  

## Integration Actions  

You can add these actions in the Spot Connect workflow builder as part of your workflow: 

* [CloudWatch Create Rule](spot-connect/actions/cloudwatch?id=cloudwatch-create-rule) 
* [CloudWatch Update Target](spot-connect/actions/cloudwatch?id=cloudwatch-update-target) 

### CloudWatch Create Rule 

Use this action node to create a CloudWatch rule. 

#### Input

|       Parameter           |                                  Description                              |      Required  |   |
|---------------------------|:-------------------------------------------------------------------------:|:--------------:|---|
|      Rule Name            |     CloudWatch Rule Name                                                  |     True       |   |
|      Schedule Expression  |     Schedule expression, e.g., 'cron(0 20 * * ? *)' or 'rate(5 minutes)'  |     False      |   |
|      Event Pattern        |     Event pattern for the CloudWatch rule                                 |     False      |   |
|      State                |     Initial state of the CloudWatch rule                                  |     False      |   |
|      Description          |     A brief description of the CloudWatch rule                            |     False      |   |
|      IAM Role ARN         |     ARN of the IAM role associated with the CloudWatch rule               |     False      |   |
|      Region Name          |     AWS Region Name                                                       |     False      |   |

#### Output

| Parameter        | Type   | Description                         |
|------------------|--------|-------------------------------------|
| rule_arn         | String | ARN of the cloudwatch rule created. |
| execution_status | String | Status of run (ie: S_OK / E_FAIL)   |

#### Action Example 

#### Input

1. From the workflow builder in the left panel, drag and drop the CloudWatch Create Rule action node in the workflow builder. Connect it with the trigger.  
2. Click the action node.  
3. In the Target Account Alias drop-down menu, select a Target Account Alias. 
4. Create a CloudWatch Rule name.  
5. Optional inputs: 
    * Schedule Expression: Select an expression to self-trigger the rule. Use rate or Cron expressions.  
    * Event Pattern: Create an event pattern for the CloudWatch rule. 
    * State: Select a State. 
    * Description field: Enter a description. 
    * IAM Role ARN: Enter an IAM role associated with the CloudWatch rule. 
    * Region Name: Select a region. 
6. Click **Run Now** to execute the workflow.

![cloudwatch-1](https://github.com/spotinst/help/assets/106514736/b725b035-6a10-4a8c-967d-835319dc04dc)

#### Output

* rule_arn is the ARN of the created CloudWatch rule. 

![cloudwatch-2](https://github.com/spotinst/help/assets/106514736/d3e51e1f-e876-454c-84ec-936b61785d28)

### CloudWatch Update Target 

Use this action node to update CloudWatch target. 

#### Input

|       Parameter   |                       Description                   |      Required  |
|-------------------|:---------------------------------------------------:|:--------------:|
|      Rule Name    |     CloudWatch Rule Name                            |     True       |
|      Target ID    |     A unique Id for the target to be added/updated  |     True       |
|      Target ARN   |     ARN of the target to be added/updated           |     True       |
|      Region Name  |     AWS Region Name                                 |     False      |

#### Output

|       Parameter          |       Type   |                   Description              |
|--------------------------|:------------:|:------------------------------------------:|
|      rule_name           |     String   |     Name of CloudWatch rule                |
|      target_id           |     String   |     Unique Id of the target added/updated  |
|      failed_entry_count  |     Integer  |     Count of failed entries                |
|      failed_entries      |     Object   |     ID of failed target and error code     |
|      execution_status    |     String   |     Status of run (ie: S_OK / E_FAIL)      |

#### Action Example 

#### Input 

1. From the workflow builder in the left panel, drag and drop the CloudWatch Update Target action node in workflow builder. Connect it with the trigger.  
2. Click the action node.  
   * Target Account Alias: Select a target account alias. 
   * CloudWatch Rule Name: Provide a CloudWatch rule name. 
   * Target ID: Provide a unique ID for the target within the rule which can be used to reference the target.  
   * Target ARN: Provide an ARN of a target resource to update. 
   * Optional: Select a region. 
3. Click **Run Now** to execute the workflow.

![cloudwatch-3](https://github.com/spotinst/help/assets/106514736/e39bc9b9-c120-46c9-a43a-d1cd690289e4)

#### Output

* failed_entry_count is the number of requests failed.
* failed_entries provides the ID of the failed target and the error code.

![cloudwatch-4](https://github.com/spotinst/help/assets/106514736/5995aa27-1cf2-4ba0-ab1f-7f4ae2050a99)

