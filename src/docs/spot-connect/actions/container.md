# Container

Use the Container node for running a script that is packaged in a container to remediate an incident. To do so, you need to create an ECR that contains a docker image.  

Many scripts (e.g., Bash, Python scripts) and code in containers are used when remediating problems in the infrastructure. This integration supports executing these scripts in Spot’s workflows and connects these scripts to other services available in Spot Connect.  

**Note**: The container images used in this action node need to be set up according to https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/ .  

Additionally, the target account role needs to have its Trust Relationships updated to allow access to the AWS lambda service, and an updated Condition clause as shown.   

The Container integration enables you to:  

* Configure a container registry.  
* Pick a Docker image and version that is available in the registry.  
* Pass any input to the Docker image in a text box. The input is directly passed as input when running the container.  
* Enter resource requirements for the container  
* CPU (specified in CPU units).   
* MEM (specified in MB)  

## Container Node   

#### Input 

|       Parameter             |                                  Description                             |      Required  | 
|-----------------------------|:------------------------------------------------------------------------:|:--------------:| 
|       Target Account Alias  |     Select a Target account alias to be used to perform given operation  |     True       | 
|      Repository             |     ECR repository with container images                                 |     True       | 
|      Container image        |     Container image digest                                               |     True       | 
|      Entry Point            |     Entry point to application, e.g., path to execute                    |     False      | 
|      Command                |     List of command line arguments                                       |     False      | 
|      Working directory      |     Alternative working directory                                        |     False      | 
|      Memory Size            |     Request memory for lambda execution (> 128M)                         |     False      | 
|      Timeout                |     Reduce execution timeout if different from the default 15 minutes    |     False      | 
|      S3 bucket              |     S3 bucket for storing output                                         |     False      |  

#### Output  

|       Parameter  |       Type  |                         Description                    | 
|------------------|:-----------:|:------------------------------------------------------:| 
|      output      |     String  |     Output from container image                        | 
|      log         |     String  |     Log output from customer lambda invocation         | 
|      bucket      |     String  |     S3 bucket for output if specified                  | 
|      key         |     String  |     S3 object key for output if bucket was specified   | 
  

#### Action Example

Input 

![container-1](https://github.com/spotinst/help/assets/106514736/77878156-c36b-4113-abb6-feec73f01ff4)

Output

![container-2](https://github.com/spotinst/help/assets/106514736/0c21e723-e6c4-41ce-b0b6-ad025567b50a)
