# Configure Intelligent Traffic Flow

This page describes the procedures to configure Intelligent Traffic Flow (ITF).

## Prerequisite

- ITF requires the most up-to-date [Spot policies](administration/api/spot-policy-in-aws).
- An Application Load Balancer (ALB) should be created in AWS including listeners and rules.

## Get Started

To enable ITF or edit your ITF settings, go to the Incoming Traffic Balancing settings in the [Networking](elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch?id=step-3-networking) tab. You can do this either when you are setting up a new Elastigroup or when you are editing an existing Elastigroup.

<img src="/elastigroup/_media/intelligent-traffic-flow-enable-or-edit-itf-01.png" />

Click Intelligent Traffic, and then complete the steps for setting up ITF.

## Step 1. Application Load Balancer

Choose an application load balancer from the drop down list. Then the appropriate listeners and rules will appear according to the load balancer you chose.

<img src="/elastigroup/_media/intelligent-traffic-flow-enable-or-edit-itf-02.png" width="593" height="143" />

## Step 2. Listener Rules

For each listener displayed, mark the rules that you would like Elastigroup to manage. You can choose rules:

- From multiple listeners.
- Only for the type Forward.

Elastigroup assigns its target groups and weights, but does not change the stickiness, other conditions, or additional actions configured. See the example below.

<img src="/elastigroup/_media/intelligent-traffic-flow-enable-or-edit-itf-03.png" />

## Step 3. Target Group Creation Settings

Complete the settings below for target group creation:

- Protocol: Choose HTTP or HTTPS.
- Port: The port the load balancer uses when performing health checks on targets. The values can be between 1-65535. For HTTP, the default is 80. For HTTPS, the default is 443.
- Protocol Version:
  - HTTP1
  - HTTP2
  - gRPC
- Health Check Protocol: The protocol the load balancer uses when performing health checks on targets. Can be HTTP or HTTPs.
- Health Check Path: The destination for health checks on the targets. If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (/path?query). The default is /. If the protocol version is gRPC, specify the path of a custom health check method with the format /Package.Class/method. The path must start with “/”.

<img src="/elastigroup/_media/intelligent-traffic-flow-enable-or-edit-itf-04.png" width="406" height="234" />

## Advanced Health Check Settings

If you would like to configure the advanced health check settings, click the arrow to open this section. Otherwise, the default settings will be used.

- Port: The port the load balancer uses when performing health checks on targets. Choose Traffic Port or Override.
  - Port Number: If you chose Override, enter a port number between 1-65535.
- Healthy Threshold: The number of consecutive successful health checks required before considering an unhealthy target healthy. The default threshold is five. Valid values are 2 - 10.
- Unhealthy Threshold: The number of consecutive failed health checks required before considering a target unhealthy. The default value is two. Valid values are 2 - 10.
- Timeout: The amount of time, in seconds, during which no response from a target means a failed health check. The default value is five. Valid values are 2 - 120.
- Interval: The approximate amount of time, in seconds, between health checks of an individual target. The default value is 30. Valid values are 5 - 300.
- Success Codes: If the protocol version is HTTP1 or HTTP2, then the default is 200, and valid values are 200-499. If the protocol version is gRCP, then the default is 12, and valid values are 0-99.

## Autohealing

After you complete the Advanced Health Check Settings, continue to the [Autohealing](elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch?id=autohealing) section and click the arrow to open the Autohealing configuration. In this section, you must define the minimum healthiness parameter, which is important for the migration process.

## What’s Next?

Learn more about how the [Migration Process](elastigroup/features/intelligent-traffic-flow/migration-process) works.
