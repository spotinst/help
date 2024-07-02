<meta name="“robots”" content="“noindex”">

# Elastigroup | Beanstalk | Group is in ERROR state and not in READY state, cannot delete it

## Introduction

When you try to delete an Elastigroup Beanstalk from the Spot console, you get this message:

`Group is in ERROR state and not in READY state, cannot delete it`

## Instructions

You need to put the group in maintenance mode and detach the remaining instances, then you can delete the Elastigroup. <font color="#7632FE">how do you put the group in maintenance mode and detach the remining instances? need instructions or links to instructions. is this relevant? https://docs.spot.io/elastigroup/tools-integrations/elastic-beanstalk/in-asg</font>

Keep in mind, you cannot delete a Beanstalk group if:
* The attached Beanstalk group was deleted. <font color="#7632FE">Is this accurate? An attached Beanstalk group was deleted. so you can’t delete a subgroup and then the parent group? Is that the case?</font>
* One of the resources was deleted, such as a security group or Elastic Beanstalk.

If you get an error, you can force delete the group by deselecting **Rollback beanstalk configuration**.
  
If you need to attach a Beanstalk environment, you can manually [rebuild your Beanstalk environment](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-management-rebuild.html).
