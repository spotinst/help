<meta name="“robots”" content="“noindex”">

# Ocean | ECS | Failed to Import Fargate, Too Many Security Groups

## Problem

When you import Fargate services with more than 5 security groups, you get an error: 

`Failed to import Fargate services into Ocean. Please verify Spot IAM policy has the right permissions and try again.`

In Spot, you see this warning:

`Fargate import failed for xxx-xxxxxx, due to Failed to import services, too many security groups. Import less services to this group (Group ID: xxxx-xxxxxx).`

## Cause

You can have up to 5 security groups in each service according to this [article](https://spot.io/blog/import-ecs-fargate-into-spot-ocean/#:~:text=more%20than%20five-,security,-groups%20as%20only). This means that if more than 5 security groups are defined in one of the services, the import doesn’t succeed.

## Solution
Check the Ocean log to see if you see the error "too many security groups,” as it will get the same error.

Reimport Fargate services with less than 5 security groups and choose only one service at a time to import it successfully.
