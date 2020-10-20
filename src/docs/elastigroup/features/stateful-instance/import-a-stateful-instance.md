# Import a Stateful Instance

The system allows you to import any instance from an AWS account to a stateful Spot instance managed by Elastigroup. The spot instance will have the same state as the original instance, this includes the root and data volumes and (optionally) the private IP of the original instance.

### Step 1: Open Stateful Import Window

1. In the console, click Create Elastigroup, and under the Use Cases tab, go down to Stateful Applications.

<img src="/elastigroup/_media/stateful-import-01.png" width="450" height="102" />

2. Click the application, Elastigroup or Managed Instance, to which your stateful instance will be imported.

<img src="/elastigroup/_media/stateful-import-02.png" width="300" height="231" />

### Step 2: Select the Instance to Import

Enter the region and the instance ID of the instance to import.

<img src="/elastigroup/_media/stateful-import-03.png" width="350" height="314" />

### Step 3: (Optional) Use the Same Private IP

Using the same Private IP as the original instance requires the original instance to be terminated. The termination can be done automatically with the launch of the Elastigroup. If you do not choose automatic termination, a prompt is presented during the Elastigroup initialization requesting to terminate the original instance in order to proceed.

## Alternative Procedure: Start From Scratch

Another way to import a stateful instance is to start from scratch using an empty Elastigroup template. Use the following procedure.

### Step 1: Open the Empty Template

1. In the console, click Create Elastigroup, and under the Use Cases tab, go down to Stateful Applications.

<img src="/elastigroup/_media/stateful-import-04.png" />

2. Click Start from Scratch. An empty Elastigroup template opens up.

<img src="/elastigroup/_media/stateful-import-05.png" />

### Step 2: Select the Instance to Import
1. In the bottom left, click Import.
2. Click Existing Stateful Instance.

<img src="/elastigroup/_media/stateful-import-06.png" width="150" height="249" />

3. Enter the instance information as described in Steps 2 and 3 of the procedure above.

## What’s Next?

Use the [Stateful Instance Actions](elastigroup/features/stateful-instance/stateful-instance-actions.md) menu to manage the new stateful instance on Elastigroup.
