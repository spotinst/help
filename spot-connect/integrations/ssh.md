# SSH Target 

Use this integration to run commands over SSH and log results and errors. 

SSH Targets in a Spot Connect workflow lets you: 

* Execute a command over SSH and collect logs. 

## Configure SSH Targets in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **SSH Targets**.   
3. Configure a new integration instance with the information below. 

Details needed to set up a SSH Target instance in Spot Connect: 

|       Parameter      |                               Description                           |      Required  |   |
|----------------------|:-------------------------------------------------------------------:|:--------------:|---|
|      Resource Alias  |     A name for the integration instance                             |     True       |   |
|      Hostname        |     Identifier for ssh target host such as hostname or public IPv4  |     True       |   |
|      Private Key     |     RSA key                                                         |     True       |   |

1. Click **Add Resource**. 
2. Enter an alias for the integration. 
3. Enter your hostname or public IPv4. 
4. Enter your private RSA key. 
5. Click **Add Resource**.

![ssh-target-2](https://github.com/spotinst/help/assets/106514736/faa89889-14b9-45fd-a9d3-37ffd5028bfa)

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [SSH Execute](spot-connect/integrations/ssh?id=ssh-execute) 

### SSH Execute 

Use this action node to execute an SSH command on any remote device and get results. 

#### Input 

|       Parameter       |                        Description                    |      Required  |   |
|-----------------------|:-----------------------------------------------------:|:--------------:|---|
|      SSH Instance     |     SSH Target integration instance                   |     True       |   |
|      SSH Command      |     SSH command to be executed                        |     True       |   |
|      Log Bucket Name  |     Name of S3 bucket to store logs                   |     True       |   |
|      User Name        |     Username against which command would be executed  |     True       |   |
|                       |                                                       |                |   |

#### Output

|       Parameter        |       Type  |                    Description                |   |
|------------------------|:-----------:|:---------------------------------------------:|---|
|      result            |     String  |     result from running the command           |   |
|      error             |     String  |     errors occurred when running the command  |   |
|      execution status  |     String  |     snippet execution status                  |   |

#### Action Example  

1. From the workflow builder in the left panel, drag and drop the SSH Execute action snippet on the workflow builder. Connect it with the trigger node.  
2. Select the SSH Execute action node and complete the following information:  
  * SSH Instance: Select an SSH Execute integration instance from the dropdown menu. 
  * SSH Command: Enter the SSH Command that you want to run.  
  * Log Bucket Name: Select Log Bucket Name from the dropdown menu to store error logs.  
  * User name: Enter the user name that will run the command. 

#### Input 

![ssh-target-2](https://github.com/spotinst/help/assets/106514736/89a8d7b2-51eb-4dfb-8ef1-9337e65e404f)

#### Output 

![ssh-target-3](https://github.com/spotinst/help/assets/106514736/4abc8039-c658-48c8-9cfe-bdaaf9ed937b)
