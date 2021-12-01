# Monitor Applications

Ocean for Apache Spark (also referred to as Ocean Spark) enables you to see an overview of all your Spark applications, get status at a glance, drill down to more detailed application information, and kill your application when you need to.

To monitor your applications in the Spot console, go to Ocean for Spark in the menu tree and click Applications.

<img src="/ocean-spark/_media/ocean-spark-monitor-applications-01.png" />

## View Application List

The list of Ocean Spark applications gives you a quick view of your applications and basic information including:

- Application: The name of the application and under it the name of the job it belongs to. To see more details about the application or the job, click on the application or job name.
- Cluster: The Ocean Spark cluster where the application is running. To see more information about the cluster, click on the cluster name.
- Started at: Start date and time.
- Duration: Amount of time of the application run.
- User: Name of the user running the application.
- Cores: Number of Spark cores currently allocated to a running application, counting both the cores allocated to the Spark driver and cores allocated to Spark executors.
- Core Hours: The total core resources used by the application. This metric is calculated as the sum over each container (driver or executor) of its uptime duration multiplied by the number of cores allocated to it.
- Cloud Cost: The cloud cost of the app incurred so far. This metric is updated each hour, so it may not be available for recent applications.
- Action: If you want to stop the application, click Kill.

## Filter Application List

If you want to monitor a specific subset of applications, use the filters at the top to create a shortened list.

## View Application Details

To get detailed information, metrics, and operational information about an application, click the application name. This will open the [Application Overview](ocean-spark/product-tour/view-application-details) tab for that application which serves as your operational dashboard for the application.

## What’s Next?

Learn more about how you can see [detailed application information](ocean-spark/product-tour/view-application-details).
