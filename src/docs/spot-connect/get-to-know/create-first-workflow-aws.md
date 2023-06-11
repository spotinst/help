# Create your first workflow - AWS Integration

You can shut down an EC2 instance with a specific name. The following procedure is an example of creating a workflow that shuts down an EC2 instance.  

## Configure the Integrations

Use the integration to execute AWS API calls in Spot Connect workflows.

1. In the left main menu, click **Connect** and **Integrations**.
2. Under Cloud Services, click **AWS**.
3. Click **Add Account**.

<img src="/spot-connect/_media/create-wrkflw-aws-1.png" width="450" height="350" />

4. Enter the Custom Name for the AWS account
5. Set the Preferred Region and click **Next**.
6. Click **Log in to AWS Account**. The AWS console opens. Log in to your account.  
7. Click **Run Template**. The Quick create stack window opens. This is the Cloudformation template to create a stack.

<img src="/spot-connect/_media/create-wrkflw-aws-2.png" />

8. In the Stack name field, enter the Stack name. This is required.
9. Verify the PolicySelection input field.
10. You can specify a custom AWS Security Policy for the AWS account. If you already have a policy, copy and paste the ARN.  

For non-critical test accounts, the PowerUserAccess managed policy is set by default. 	This unlocks the full functionality of the Spot Connect platform.

* The Spot Connect Account ID and External ID fields are automatically entered and can be left in their default state.
* AWS CloudFormation may create IAM resources.

11. Click Create stack.  
12. Wait for the stack creation to complete. When it is complete, select the output tab and copy the value of the AssumeRoleArn Key.
13. Go back to the Spot Connect console and click **Next**.  
14. Paste the value of the AssumeRoleArn copied from the output of the stack and click **Add Account**.

## Create the Workflow

Create the workflow using the AWS node.

1. Click + on the left panel and click **Core**.
2. Drag and drop the JSONPath node onto the canvas.
3. In the left main menu, click **Connect** and **Workflows**.
4. Click **New Workflow**.
5. Enter a workflow name. Workflow names cannot start with “aws”, “amazon”, or “amz”.
6. Select **Manual** and click **Create Workflow**.
7. In the left panel, click the settings icon.

<img src="/spot-connect/_media/create-wrkflw-spot-6.png" />

8. In the Description field, enter a workflow description.
9. Find the AWS EC2 instance with a specific name by completing the following steps:
  a. Click + on the left panel and click **Core**.
  b. Drag and drop the AWS node onto the canvas.
  c. Manually connect the Manual Trigger node with the AWS node.
  d. Hover over the AWS node, click the edit icon and change the name of the AWS node to: Describe EC2 Instance.

### Configure the Describe EC2 Instance Node

1. Select the AWS node, and the input configuration panel opens.
2. Above the alias field, click the settings icon and select **Set value now**.
3. From the alias dropdown menu, select the AWS integration alias created above.
4. Above the region_name field, click the settings icon and select **Set value now**.
5. From the region-name dropdown menu, select the region.
6. In the Service field, select **AWS Service**.
7. In the Operation field, select [DescribeInstances](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2/client/describe_instances.html#). The following fields open: Optional, Name, and Value.  
8. In the Optional field, click **+ Add Filters**.  
9. In the Name field, enter tag:Name and click **Add Value**.
10. In the value field, enter the name of the EC2 instance you want to stop and click **Save**.
11. Click **Save Workflow** at the top to save the new workflow version.

## Shutdown the EC2 Instance  

1. Click **+** on the left panel and click **Core**.  
2. Drag and drop the AWS node onto the canvas.
3. Manually connect the previous Describe EC2 Instance AWS node with the new AWS node.
4. Change the name of the new AWS node to: Shutdown EC2 Instance.

### Configure the Shutdown EC2 Instance node

1. Select the AWS node, and the input configuration panel opens.
2. Above the alias field, click the settings icon and select **Set value now**.

<img src="/spot-connect/_media/create-wrkflw-aws-3.png" />

3. From the dropdown menu, select the AWS integration alias created above.
4. Above the region_name field, click the settings icon and select **Set value now**.
5. From the region-name dropdown menu, select the region.
6. In the Service field, select the **AWS Service**.
7. In the Operation field, select [StopInstances](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2/client/stop_instances.html#).
8. Above the InstanceIds field, click the settings icon and select **Set value from the previous step**.
9. Select the Describe EC2 instance node from the dropdown menu.

<img src="/spot-connect/_media/create-wrkflw-aws-4.png" />

10. From the dropdown menu in the Previous step Output, select **output**.  
11. In the output, click **Configure**, that opens a modal with the JSON Schema of the response output of the EC2 described action.
12. Select **InstanceId**.

<img src="/spot-connect/_media/create-wrkflw-aws-5.png" />

13. Click **Save Output**.
14. Click **Save Workflow** at the top to save the new workflow version.  

## Manually Run the Workflow

You can manually run the workflow that you constructed in the steps above.

1. In the workflow builder, click **Run Now**. A new browser opens that displays the execution steps of the workflow.
2. Refresh the browser to see the updated step statuses.

<img src="/spot-connect/_media/create-wrkflw-aws-7.png" />

## View Executions

You can view the executions you created in the Execution Detail page after you have successfully run your workflow.

In the left main menu, click **Connect** and **Executions**. This page gives a general overview of an execution. You can review each step individually by clicking on the step.

<img src="/spot-connect/_media/create-wrkflw-aws-8.png" />

## Confirm Shutdown

After the execution of the workflow, you can view the status of your EC2 instance in the AWS console to see that it has shut down. You can see that the EC2 instance with the name “demo-spotconnect” state changed to Stopped.

<img src="/spot-connect/_media/create-wrkflw-aws-9.png" />

## What's next?

Learn how to [create your first workflow with Spot](spot-connect/get-to-know/create-first-workflow-spot).
