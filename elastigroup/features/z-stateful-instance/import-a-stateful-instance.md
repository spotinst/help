<meta name="robots" content="noindex">

# Import a Stateful Instance

You can import an instance from your AWS account to a stateful spot instance managed by Elastigroup. The spot instance will have the same state as the original instance. This includes the root and data volumes and, optionally, the private IP of the original instance.

## Prerequisites

- A Spot account connected to your AWS account
- A running instance in your AWS account

## Get Started

1. In the left menu of the Spot console, click Elastigroup/Groups, and click Create Elastigroup.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-01.png" />

2. In the Use Cases page, go down to Empty Template and click Start from Scratch.

<img src="/elastigroup/_media/stateful-import-01a.png" />

3. When the empty Elastigroup template opens up, click Import and choose Existing Stateful Instance.

<img src="/elastigroup/_media/stateful-import-02a.png" width="170" height="275" />

> Tip: Instead of steps 2 and 3 above, in the Use Cases tab you can go down to Stateful Applications and click Go to Elastigroup.

## Choose the Stateful Instance

Complete the information in the Stateful Instance popup as described below, and click Select.

<img src="/elastigroup/_media/stateful-import-03a.png" width="439" height="236" />

- Region: Choose the AWS region of the instance to import.
- Instance ID: Enter the AWS Instance ID of the instance to import.
- Use the same Private IP: Mark this if you would like to use the same private IP.
  - Terminate Instance Automatically: Using the same Private IP as the original instance requires the original instance to be terminated. The termination can be done automatically with the launch of the Elastigroup. If you do not choose automatic termination, you will be prompted during the Elastigroup initialization to terminate the original instance.

## Review Configuration

After completing the Stateful Instance information, the Review tab appears. Review the parameters and click Create.

<img src="/elastigroup/_media/stateful-import-04a.png" width="383" height="566" />

## What's Next?

Learn how to:

- Change the instance state using [Stateful Instance Actions](elastigroup/features/stateful-instance/stateful-instance-actions).
- [Edit a Stateful Instance](elastigroup/features/stateful-instance/edit-a-stateful-instance) configuration.
