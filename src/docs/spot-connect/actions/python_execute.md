# Python Exec 

Python Exec enables you to check out a python-based code repo from GitHub/ Bitbucket and execute a designated script in a repo within a Docker container running on your target AWS account, in a safe and secure manner. 

Python Exec is built using the native AWS Lambda support for container images. Instead of an AWS base image for python, a standard Spot Connect base image is used to execute the desired script. You may also choose to override the Spot Connect base image with another custom-built Docker image of their choice, hosted within their AWS ECR repository. 

Python Exec provides a clean and sanitized environment, with sufficient air gap, to check out any GitHub/Bitbucket repo for repetitive tasks. The script you want to run, along with arguments (optional), may be specified as an action node parameter while building a workflow. 

Python Exec can be effectively used where you: 

* have a set of automation scripts located in a source code repository which needs to be run on a scheduled basis. 
* want to perform an operation on your target account in a safe and secure manner using Python-based scripts. 
* already have built a script with a specific functionality in mind and you want to execute this script by importing the code base during run-time and cleaning up once the job is complete.

## Configure Python Execute in Spot Connect 

Follow the configuration steps that need to be completed before using the `Python Execute` action node. 

### Configure AWS Target Account 

Follow [the instructions](https://docs.spot.io/spot-connect/integrations/aws) to configure the target AWS account where you want to execute the `Python Execute` action. 

### Configure GitHub Cloud or Bitbucket Cloud 

Follow [the instructions](https://docs.spot.io/spot-connect/integrations/git) to configure the preferred script execution account and repository on either GitHub Cloud or Bitbucket Cloud. 

### Configure Target Role IAM Permissions 

Configure your target account with necessary permissions and trust. 

