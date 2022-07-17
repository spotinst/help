# Import an Existing AWS Stateful Node

This procedure describes how to import a stateful nodes from AWS to your account in Spot. This will enable you to have full control of your stateful node directly in Spot and take advantage of all of the optimization features available in Spot.

Running single node workloads on Stateful Nodes will provide you with a simple and intuitive environment as well as additional visibility tailored to the stateful single-instance use case. If you have stateful single-instance workloads in AWS, you can import them to the Spot environment using the procedure below.

## Prerequisites

Before you can create a stateful node, you need to do the following:

- Ensure your AWS account is connected to your [Spot account](connect-your-cloud-provider/aws-account).
- Ensure your [Spot Policy](elastigroup/tutorials/elastigroup-tasks/update-spot-policy) is up to date.
- Memory utilization graphs require the Cloudwatch agent. For more information, see the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html).

## Import your Stateful Node

1. To import your stateful single node from AWS, go to the Stateful Node dashboard on the Spot Console and click New Instance on the top right.

<img src="/managed-instance-a/_media/create-new-a.png" />

2. When the New Stateful Node form appears, mark the use case Create a New Stateful Node from an existing one.

<img src="/managed-instance/_media/create-new-b.png" />

3. Complete the information in the form as described below.

   - Region. Select the correct region from the list.
   - Instance ID. Enter the ID of the AWS instance to import.
   - Use the same Private IP. Choose this if you want the private IP in Spot to be the same as the one you used in AWS. When you choose this option, the existing instance in AWS will be terminated automatically after the migration is completed.
   - Use a new Private ID. Choose this if you want the private IP in Spot to be different from the one you used in AWS. An available IP will be chosen from the subnet.
   - Terminate existing instance. When you mark this option, the existing AWS instance will be terminated automatically after Spot has completed creation of the imported image.

4. Click Select.
