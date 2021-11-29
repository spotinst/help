# Monitor Jobs

Ocean for Apache Spark (also referred to as Ocean Spark) defines “jobs” as a logical grouping of applications. You decide on this grouping by providing a job identifier (job-id) when you submit a Spark application to our REST API.

The Jobs section of the console gives you an overview of all your Spark jobs so you can see the status at a glance of the most recent execution of the job, and drill down to more detailed information.

To monitor your jobs in the Spot console, go to Ocean for Spark in the menu tree and click Jobs.

<img src="/ocean-spark/_media/monitor-jobs-01.png" />

## View Job List

The list of Ocean Spark jobs gives you a quick view of your jobs and basic information including:

- Job Info
  - Job: Name of the job. Click here to see job details.
  - Cluster: Cluster that the job belongs to.
- Last Application Info
  - Application: Name or the app.
  - Status
  - Started at
  - Duration
  - User
  - Cloud Cost: These are the cloud provider costs incurred by the application. This information becomes available within the hour after the application finishes. The computation takes into account whether your application was running on spot or on-demand nodes.

## Filter Job List

If you want to monitor a specific subset of jobs, use the filters at the top to create a shortened list.

## View Job Details

To get detailed information, metrics, and operational information about a job, click the job name. This will open the [Job details page](ocean-spark/product-tour/view-job-details) for that job which serves as your operational dashboard for the job.

## What’s Next?

Learn more about [viewing job details](ocean-spark/product-tour/view-job-details).
