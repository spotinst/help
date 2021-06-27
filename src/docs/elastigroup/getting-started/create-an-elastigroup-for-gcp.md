# Create an Elastigroup for GCP

This tutorial covers the creation of a Load Balanced Elastigroup from scratch. To learn more, read about how Elastigroup works with [GCP Load Balancers and Backend Services](elastigroup/features/gcp/gcp-load-balancers-backend-services).

## Get Started

<img src="/elastigroup/_media/gettingstarted-eg-gcp-01.png" />

The creation template is available under `Use Cases` in the Creation Wizard:

1. In the [Spot Console](https://console.spotinst.com/), on the lefthand menu, select Elastigroups.
2. Click the `Create Elastigroup` button on the top right.
3. Choose the `Load Balancing` use case:

The creation wizard will assist you with creating an Elastigroup with all the required resources.

## Step 1: General Settings

### Elastigroup Details

1. Enter a name for the group (required).
2. Enter a group Description (optional).

### Strategy

1. Select the percentage of Preemptible instances in the Elastigroup. The remaining percentage will be On-Demand instances.
2. Alternatively, define the exact number of On-Demand instances required in the Elastigroup.

### Capacity

- Target is the number of instances the Elastigroup should maintain.
- The Minimum and Maximum are the boundaries within which the Elastigroup can scale.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-02.png" />

## Step 2: Compute Settings

### Regions & Zones

1. Select your desired zones according to region. Clicking on region will open its zones.
2. You can add multiple zones and regions to the group.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-03.png" />

### Network Settings

1. Select your desired Network and Subnets to run your Elastigroup in.
2. (Optional) Select your desired Service Account.
3. (Optional) Check the `Add Ephemeral Public IP` checkbox if you wish to assign an Ephemeral Public IP.
4. (Optional) Add network tags, you can add multiple tags.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-04.png" />

### Instances

1. The available vCPU/Memory configuration are linked to the CPU platforms in each zone.
2. Elastigroup uses the default CPU platform to maximize availability.
3. Select your desired instances types, one-by-one. For each one you'll see the details of the type in terms of vCPUs and Memory (GB), as well as the estimated cost per month.
4. If you wish to size the instance type yourself – choose the `Custom Instance` and set the vCPU and Memory bars accordingly. For more on custom instance size specifications, see the [GCP documentation](https://cloud.google.com/compute/docs/machine-types).

### Fallback to On-demand

1. The Fallback mechanism ensures no outage will occur when no preemptible market is available.
2. In a scale-up operation – if we can't get an available preemptible market we would fallback to an on-demand instance, according to your selected instance type.
3. Set `Allow fall back to on-demand` checkbox to activate the fallback to OD.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-05.png" />

### Launch Specification

1. Specify your settings for instance launch.
2. Choose OS image from `Common Images` list or browse for your custom image.
3. Set disk type and size.
4. You can also add a startup script which will be executed every time your instance boots up.
5. Startup scripts can perform many actions, such as installing software, performing updates, turning on services, and any other tasks defined in the script. You can use startup scripts in order to easily and programmatically customize your virtual machine instances, including on new instances at creation time.

### Backend Services

1. In order to add a Backend Service click on the `Add` button.
2. Set your required backend service Type (Load Balancer): Global / Regional.
   - For Global choose the backend service from the list.
   - For Regional choose the Scheme Type and than the backend service from the list.
3. You can add named ports, e.g.:
   - Name: `HTTPS`
   - Ports: `[443, 8443]`

### Integrations

Setup an integration from the list of available integrations:

Docker Swarm:

1. Click on Docker Swarm button, and set integration properties.
2. Set docker swarm properties to connect: Swarm Manager IP + Swarm Port.
3. Click on `Test Connectivity` to validate integration is working properly.
4. Learn more about our integration with [Docker Swarm](elastigroup/tools-integrations/docker-swarm/).

<img src="/elastigroup/_media/gettingstarted-eg-gcp-06.png" />

### Labels

1. Expand the section by clicking the arrow on the right.
2. Add labels to your Elastigroup by setting key and value, and click on Add.

### Metadata

1. Expand the section by clicking the arrow on the right.
2. Add GCP custom metadata to the instances.

## Step 3: Scaling Settings (Optional)

Optionally, create up-scaling or down-scaling Policies. For more information, see [Scaling Policies for Elastigroup GCP](elastigroup/features/gcp/scaling-policies-for-gcp-elastigroup).

To create a policy (up scaling or down scaling) perform following steps:

1. Click on 'Add Policy'.
2. Set policy name.
3. Set source by picking from list: Spot Spectrum / GCP Stackdriver
4. Set or choose required namespace according to source
5. Set scale based on values:Choose Trigger, Behavior and Dimensions.
6. Set Duration to determine amount of tests (and duration between them) to activate the policy.
7. Action Type will be `Add` on up scaling and `Remove` on down scaling policies. You need to set the number of instances.
8. Cool-down: Wait Period is the time (in seconds) that all scaling activities will be suspended after the scaling policy is triggered.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-07.png" />

## Step 4: Review and Create

The Review tab contains a summary of your Elastigroup configuration, and you have the option to go back to any of the previous steps and change the settings.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-08.png" />

You can optionally view the group configuration in JSON format, and edit it directly by switching on `Edit mode`.

<img src="/elastigroup/_media/gettingstarted-eg-gcp-09.png" />

All that's left to do is review your settings and launch your Elastigroup!
