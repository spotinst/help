# AWS Batch

[AWS Batch](https://aws.amazon.com/batch/) has quickly become one of the most sought after ways to run batch computing in the cloud. Powered by AWS ECS, AWS Batch provides scheduling and queuing capabilities that enable developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs. The service offers managed compute environments, provisioning and scheduling work for you.

When combined with Elastigroup, AWS Batch clusters inherit the full power of cost efficient spot instance management and scale.

<img src="/elastigroup/_media/aws-batch_1.jpg" />

## Components of AWS Batch

### Job

A unit of work, such as a shell script, linux executable or docker image that is submitted to the service. It runs as a containerized application with AWS ECS.

### Job Definitions

Specifications on how the jobs will run, such as CPU and memory requirements, IAM Role permissions, and container settings.

### Job Queues

Each job is submitted to a job queue. The queue ensures all tasks are held until compute capacity is ready to process the tasks. Priority can be assigned to each job queue to ensure sensitive tasks are processed ahead of general workloads.

### Compute Environment

The resources that comprise the AWS ECS cluster that will process each Batch job.

## The Power of Elastigroup

The following diagram illustrates how Spot scales an Elastigroup in accordance with the demands of batch jobs and their requirements.

<img src="/elastigroup/_media/aws-batch_2.png" />

- The Spot Autoscaler launches the best fit instances to support jobs requirements.
- Elastigroup continues to monitor jobs and resources.
- When jobs finish, Elastigroup will react and scale down the environment.

## Get Started

Go to Spot and simply enable the Elastigroup integration with AWS Batch.

## Existing Elastigroup

For an existing Elastigroup that already uses ECS, go to Edit Configuration and choose a batch queue:

<img src="/elastigroup/_media/aws-batch_3.png" width="384" height="191" />

View tasks pending in Elastgroup overview:

<img src="/elastigroup/_media/aws-batch_4.png" width="420" height="200" />

## New Elastigroup

For a new Elastigroup, open the creation wizard and choose the `Batch` use case:

<img src="/elastigroup/_media/aws-batch_5.png" />

On the General tab:

1. Fill out the Elastigroup name.
2. Choose your region.
3. Choose the AWS Batch created ECS cluster.
4. Choose the Batch Job Queues you wish to run on the Elastigroup.

<img src="/elastigroup/_media/aws-batch_6.png" />

Continue with the creation wizard and finalize any Elastigroup settings.

Once created, the magic will start and AWS Batch jobs will be handled by Elastigroup.
