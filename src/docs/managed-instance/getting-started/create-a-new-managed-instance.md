# Create a New Managed Instance

This procedure describes how to create a new managed instance from scratch.

Running single instance workloads on Managed Instance will provide you with a simple and intuitive environment as well as additional visibility tailored to the stateful single-instance use case.

## Prerequisites

Before you can create a managed instance, you need to do the following:

- Ensure your AWS account is connected to your [Spot account](connect-your-cloud-provider/aws-account.md).
- Ensure your [Spot Policy](elastigroup/tutorials/elastigroup-tasks/update-spot-policy.md) is up to date.
- Memory utilization graphs require the Cloudwatch agent. For more information, see the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html).

## Get Started

1. To create a new Managed Instance from scratch, go to the Managed Instance dashboard on the Spot console and click New Instance on the top right.

<img src="/managed-instance/_media/gettingstarted-create-new-01.png" />

2. Mark the use case Create a New Managed Instance, as shown below, and click Select.

<img src="/managed-instance/_media/gettingstarted-create-new-02.png" width="400" height="319" />

3. Complete the steps in the Create Managed Instance wizard as described below.

## Step 1: Configuration Tab

1. Enter a name and a description for your Managed Instance:

<img src="/managed-instance/_media/gettingstarted-create-new-03.png" />

2. Select the Region and Availability Zones:

<img src="/managed-instance/_media/gettingstarted-create-new-04.png" />

3. Fill out Instance settings section.
4. Configure Network and Security settings such as VPC, Key Pair, Security Groups, Subnets and Instance Profile.
5. Choose the Product type and the AMI used to launch the instance. You can specify your our own AMI, or select one of the images suggested in the common images menu.
6. Select a Preferred Instance type. The instance type selected here will be the preferred type for Spot instances, and also used as an On-Demand type to fall back to in case no suitable Spot capacity is available.

<img src="/managed-instance/_media/gettingstarted-create-new-05.png" width="451" height="494" />

Once VPC, Subnets, Product, Image and Preferred Instance type are selected, Spot will automatically preselect optional similar Spot Markets to ensure optimized cost efficiency. The Spot Market Scoring Table on the right side will be populated:

<img src="/managed-instance/_media/gettingstarted-create-new-06.png" />

7. You can edit the additional Spot Market selection via the Spot Instance Types table below. The more instance types selected here, the higher the chance of finding the optimal spot instance to launch in terms of cost and availability.

<img src="/managed-instance/_media/gettingstarted-create-new-07.png" />

8. Fill in any User Data or Shutdown Scripts you would like to run upon instance launch or termination.
9. Shutdown Script requires an Agent to be installed via the User Data. Clicking on the “Add Agent installation to User Data” link will automatically add the required bash script to the User Data section.

<img src="/managed-instance/_media/gettingstarted-create-new-08.png" />

10. Add any custom Instance Tags by typing in the Key and Value and clicking “Add”:

<img src="/managed-instance/_media/gettingstarted-create-new-09.png" width="438" height="154" />

11. Fill out any additional settings such as detailed monitoring for Amazon CloudWatch, EBS optimization, Burstable CPU for T2 or 3 instances, IPv6 assignment and Public IP assignment.

<img src="/managed-instance/_media/gettingstarted-create-new-10.png" />

12. Click on Next to proceed to the Persistent Resources Tab.

## Step 2: Persistent Resources Tab

On this tab you choose which resources your Managed Instance will persist.

### Select Storage Persistence options.

The creation of a Managed Instance requires at least one of the following persistence options to be selected: Root, Data, or Private IP.

2. Root Volume Persistence is preselected by default, but can be toggled.
3. Choose Data Volume Persistence options. Data Volume Persistence comes in one of two methods:
   - Snapshots Backups: Incremental snapshots of the data volumes are continuously saved, and are restored upon instance replacement.
   - Re-Attach: Data volumes are kept through instance termination and are re-attached when a new instance is launched.

<img src="/managed-instance/_media/gettingstarted-create-new-11.png" />

### Proceed to Network Options.

Private IP can be persisted by maintaining the Instance's ENI across replacements. Optionally, specify a particular Private IP to maintain.

---

**Tip**:

Persisting Private IP will limit the Managed Instance to a single AZ.

---

Public IP can be persisted by selecting an Elastic IP.

<img src="/managed-instance/_media/gettingstarted-create-new-12.png" />

### Configure Load Balancing.

- You can set the Managed Instance to receive traffic from Route 53 or a Load Balancer.
- For Load Balancers, select your Elastic Load Balancer, ALB Target Group or MLB Target Set:

<img src="/managed-instance/_media/gettingstarted-create-new-13.png" />

- For Route 53 select your Hosted Zone, Record Sets and Public IP registration, then click “Add a Record”.

<img src="/managed-instance/_media/gettingstarted-create-new-14.png" />

### Configure Maintenance and Auto Healing options.

- The Maintenance Window will determine when a Managed Instance may perform proactive replacements, meant to adjust the instance type to your preference, or to revert back to Spot in case a fall-back to On-Demand was made.
- Auto Healing will perform replacements of instances deemed unhealthy according to the selected health check type.
- Grace Period is the time (in seconds) to allow an instance to fully boot and applications to start before the first health check.
- Unhealthy Duration is the amount of time (in seconds) that an instance deemed unhealthy will be kept before it is terminated and replaced with a new one.

<img src="/managed-instance/_media/gettingstarted-create-new-15.png" />

### Configure Scheduled Actions

- You can choose one of two options – predetermined Running hours, or custom scheduled actions.
  - With the “Run instance only during these hours” option, once you configure the time window the managed instance will be “Paused” outside of it. At the beginning of the next window, it will be automatically “Resumed” along with its persisted resources.

<img src="/managed-instance/_media/gettingstarted-create-new-16.png" />

- Alternatively you can schedule individual actions, with custom CRON expressions. The following actions are supported:
  - Pause
  - Resume
  - Recycle

<img src="/managed-instance/_media/gettingstarted-create-new-17.png" />

Click Next.

## Step 3: Review Tab

The review tab provides a quick summary of your configuration.

<img src="/managed-instance/_media/gettingstarted-create-new-18.png" />

In addition, you can view the full JSON file, and turn on Edit mode to edit it manually.

<img src="/managed-instance/_media/gettingstarted-create-new-19.png" />

When you are finished, click Create, and the new Managed Instance will launch.
