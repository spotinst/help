<meta name="robots" content="noindex">

# Create Cluster Roll

In this tutorial, we will cover how to initiate a Roll Cluster deployment for ECS integrated Elastigroup.

Prior to this feature, every time you needed to perform infrastructure changes which required a deployment roll, (Modify AMI, User-Data, Security-Group, Private IP, etc.) you were required to perform actions such as disabling the autoscaler, and manually detaching the instances in the Elastigroup.

Using Cluster roll, you can now roll your ECS cluster (all instances belonging to the EG) with a single click, in order to replace instances in a blue-green manner. The process takes into consideration the actual tasks which are currently running in the cluster, and freezing any auto-scaling related activity, until it is completed.

## Step 1: Create Cluster Roll

On the top right corner, select `Actions` and then choose `Create Cluster Roll`

<img src="/elastigroup/_media/create-cluster-roll_1.png" />

In the pop-up window, select the batch size which will be rolled at the same time. The value is percentage of the cluster's size.

<img src="/elastigroup/_media/create-cluster-roll_2.png" />

## Step 2: Monitor Cluster Roll

After initiating the cluster roll, you can monitor and follow the process in real-time, as well as viewing previous roll processes made.

Under `Deployments` tab, you will see the details of the Cluster Roll you created in step 1.

<img src="/elastigroup/_media/create-cluster-roll_3.png" />

The batches are stated on the right side, as general details such as the operationID are displayed on the right, for extra visibility and control over the process.

Below you can see the table of previous roll processes performed in the cluster

<img src="/elastigroup/_media/create-cluster-roll_4.png" />

The status column informs regarding the end result of the roll action.
