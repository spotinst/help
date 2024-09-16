# View Application Details

To drill down into the details about your Ocean for Apache Spark application, start with the Overview tab, which gives you quick access to insights and summary data about the application. You can obtain an overview of your current cost, efficiency status, app metrics, and access to logs. You can view more details about the app in additional tabs including its [configuration](ocean-spark/product-tour/view-application-details?id=view-configuration) and a listing of [Spark issues](ocean-spark/product-tour/view-application-details?id=view-spark-issues).

To get to the App Overview tab, do the following:

1. In the Spot console, go to Ocean for Spark in the menu tree and click Applications.
2. In the [list of applications](ocean-spark/product-tour/monitor-applications), click an app name.

<img src="/ocean-spark/_media/view-app-details-01.png" />

The App page opens with the Overview tab open and the app name at the top. Next to the App name, a status icon indicates the App status.

The App Overview includes the following main areas:

- Metrics
- App Info
- Logs

## Metrics

Application Metrics is a summary line providing data about your app usage. The following information is presented:

- Cloud Compute Cost: The cloud provider’s compute costs incurred by this application.
- Core Hours: The core resources used by the application. This metric is calculated as the sum over each container (driver or executor) of its uptime duration multiplied by the number of cores allocated to it.
- Data Read: Amount of data read by this application.
- Data Written: Amount of data written by this application.
- Duration: Amount of time this application has run.
- Efficiency Score: The fraction of the time that Spark executor cores are running Spark tasks.

## App Info

The App Info area gives you a quick point of reference for vital information about the application.

<img src="/ocean-spark/_media/view-app-details-02.png" />

You can edit the App Name by clicking the edit icon by the name.

## Insights

The Insights area gives information about the resource usage of the application
over time. The first tab shows executor CPU usage, broken down by categories
(CPU, I/O, shuffle, GC, Spark internals). This graph aligns with a timeline of
your Spark jobs and stages, so that it's easy to correlate CPU metrics with the
code of your Spark application.

<img src="/ocean-spark/_media/view-app-details-04.png" />

The second tab provides a report of the memory usage of your spark executors
over the application's job and stages timeline. On the left hand side, you can
see the peak memory usage over the total available physical memory for each
executor, broken down by category (JVM, Python, Other). This graph helps
you tune your container memory sizes - so that memory usage stays in the 70-90%
range. Click the executor list to view detailed memory usage for that executor
in the bottom graph.

> **Note:** The memory usage depicted in this graph is different from the memory reported in the Spark UI.
>
> The graphs in this tab report the Resident Set Size (RSS) memory used by Spark and its child processes.
> RSS (Resident Set Size) refers to the amount of physical memory (RAM) that a process is currently using. This
> memory is what a process needs to quickly perform its operations without having to swap data in and out of
> disk storage, which is much slower.
>
> In the context of Apache Spark, the processTreeRSS metric is broken down into three categories: Java, Python,
> and Other (like R). This is because Spark applications can run tasks using different programming languages,
> and each of these languages manages memory in its own way.
>
> RSS is a measure of all the memory used by a process, while on-heap and off-heap memory are specific types of
> memory used within that process. RSS also includes other memory types like the program's code, stack
> memory, mapped memory, shared libraries, etc.

<img src="/ocean-spark/_media/view-app-details-05.png" />

## Logs

You can view the Driver Logs or the Kubernetes Logs while the application is running. You can also download the logs once the application has finished running.

> **Tip**: If you want to change the severity level of your Driver logs, you can do this easily from your Spark application code, for example by setting `sc.setLogLevel("DEBUG")`.

## View Configuration

To view the configuration, click the Configuration tab.

## View Spark Issues

Click the Spark Issues tab to see a list of all the issues with error messages. Click on an issue to expand the card and view more detailed information about the error or warning.

<img src="/ocean-spark/_media/view-app-details-03.png" />

## What’s Next?

Learn more about [monitoring jobs](ocean-spark/product-tour/monitor-jobs).
