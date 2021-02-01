# Introduction to Elastic Beanstalk

## What is Elastic Beanstalk?

AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.

To begin, simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.

## Elastic Beanstalk Architecture

Elastic Beanstalk automatically provisions the resources required to run application deployment. AWS resources created for an environment include Route53 entry, an Elastic Load Balancer (ELB), an Auto Scaling Group (ASG), and one or more instances.

Once configured, the Beanstalk environment is highly dependent on its provisioned resources which are used for scaling and load balancing purposes.

<img src="/elastigroup/_media/elastic-beanstalkREADME_1.png" />

## How does the Integration Work?

Due to the fact that the Elastic Beanstalk environment is dependent on its provisioned resources (i.e., CloudFormation, ELB and ASG), it is necessary to keep those in place and integrate only with the underlying ASG.

Elastic Beanstalk uses several strategies for rolling deployments: `All at once`, `Rolling`, `Rolling with additional batch`, `Immutable`.

Depending on the Deployment Policy configured in the Elastic Beanstalk environment, Elastigroup will identify it and use one of the following approaches to manage the cluster: in-ASG or Independent Elastigroup.

| **Elastic Beanstalk Deployment Policy** | **Spot Integration Method** |
| --------------------------------------- | --------------------------- |
| `All at once`                           | in-ASG                      |
| `Rolling`                               | in-ASG                      |
| `Rolling with additional batch`         | Independent Elastigroup     |
| `Immutable`                             | Independent Elastigroup     |

Single-instance environments will be integrated with Independent Elastigroup method, regardless of the deployment policy.

To learn more about Elastic Beanstalk deployment methods, see the following AWS documentation: [Deployment Policies and Settings](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html)

We recommend using a deployment policy that is supported by the in-ASG approach whenever possible.

> **Tip**: Before starting, verify that the most up-to-date [Spot IAM policy](administration/api/spot-policy-in-aws) is configured in your AWS account.

## What's Next?

The following sections explain how each integration mode works to help you better understand the concepts behind Elastigroup for Elastic Beanstalk as well as debugging in case of a potential failure in the setup and scale process.

- [In-ASG integration](elastigroup/tools-integrations/elastic-beanstalk/in-asg). This is the recommended approach whenever possible.
- [Independent Elastigroup integration](elastigroup/tools-integrations/elastic-beanstalk/independent-elastigroup-integration).
