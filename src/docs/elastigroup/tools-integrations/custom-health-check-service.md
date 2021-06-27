# Custom Health Check Service

## Architecture

<img src="/elastigroup/_media/custom-health-check-service_1.png" />

The Health Check service will be installed on your VPC. You should open traffic from your Elastigroup to Spot Security Group and to one of your instances that will be assigned to a Security Group.

## How it Works

The Spot Health Check service will act as a proxy between Spot hosts and your
EC2 private instances in your VPC.
Spot will trigger the proxy service on each check. The proxy will communicate with your private instances in the VPC and will send the results to Spot.
When an instance is marked as unhealthy, and the Elastigroup Health Check type is set to `HCS`, Spot will replace it with a new instance according to the Elastigroup config.

## Follow these Steps to configure Spot Health Check

### Step 1

Create a Spot Elastigroup if you do not have one already.

### Step 2

Install the Spot Health Check Service on an instance ( we recommend a dedicated On-Demand instance) within your secured VPC.

1. Choose one of your instances that will act as the `proxy`, on which you should later install the docker.
2. Create a Security Group and attach it to the instance. This Security Group allows input traffic from Spot Health Check Service in `Port TCP 80` with Spot IP range permit listed as in the following link: [Spot Permit List IPs](administration/api/whitelist-ips)
3. SSH into your EC2 Instance and Install the Health Check service:
   a. Install Docker first.
   b. Run the following command to pull the docker image:

```
docker run -d --restart=always -p 80:80 --log-opt max-size=5m --log-opt max-file=10 spotinst/healthcheck:latest
```

Alternatively, you can configure use the following user data script to install docker and the HCS service:

```
#!/bin/bash sudo yum update -y sudo yum install -y docker sudo service docker start sudo usermod -a -G docker ec2-user sudo docker pull spotinst/healthcheck sudo docker run -d --restart=always -p 80:80 spotinst/healthcheck:latest
```

### Step 3

Set the Health Check configuration in the Elastigroup:

1. Go to your Elastigroup and click on the `Actions` menu at the top left. Click on `Set Health Check` from the menu:

<img src="/elastigroup/_media/custom-health-check-service_2.png" width="228" height="341" />

2. Define the Health Check properties:

<img src="/elastigroup/_media/custom-health-check-service_3.png" width="325" height="420" />

- **Name**: Name your Health Check for convenience.
- **ProxyAddress**: The public host/IP of your selected instance you installed service on in `section 2`. This will be set like http://publicip
- **Protocol**: Which protocol will Spot use to check the healthiness of your instances. Supported for now are: http / https.
- **Endpoint**: The path of the Health Check in each instance.
- **Interval**: The interval (in seconds) between the checks. Minimum of 10.
- **Timeout**: The timeout (in seconds) to wait for each instance to answer the check. If it did not answer, we mark this attempt as `unhealthy`
- **UnhealthyThreshold**: The number of consecutive failed health checks that must occur before declaring an instance `unhealthy`
- **HealthyThreshold**: The number of consecutive successful health checks that must occur before declaring an instance `healthy`

## Step 4

In the Compute part select `HCS` as HealthCheck Type.

1. Go to your Elastigroup and click on Actions > Edit Configuration.
2. On the Compute tab, in the Launch Specification section, under Auto Healing set the Auto Healing type to `HCS` and update the group.

> **Tip:** You can do steps 3 and 4 via our API. For more information go to the [API Reference](https://docs.spot.io/api/#tag/Health-Check-Service).

Now – the health check is running, and Spot's monitor service will send HCS requests according to the specified interval.
The healthiness should be available shortly through the Instances table list:

<img src="/elastigroup/_media/custom-health-check-service_4.png" />

In the case of an Instance failure – the HCS service will trigger a replacement operation to launch a new instance and terminate the unhealthy one.

<img src="/elastigroup/_media/custom-health-check-service_5.png" />
