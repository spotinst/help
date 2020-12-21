# Set Health Checks

Spot offers an option for you to use our own custom Health Check Service (HCS) in your Elastigroup. For a feature description, see [Custom Health Check Service](elastigroup/tools-integrations/custom-health-check-service).

## Relevance

This tutorial is relevant for users of Elastigroup with AWS. For Elastigroup with Azure, see [Set Health Checks and Autohealing](elastigroup/tutorials/azure/set-health-checks-and-autohealing).

## Configure Elastigroup's Custom Health Checks

After setting up HCS in your VPC, you can reference it for the desired Elastigroup. To get started, enter the Management view of the desired Elastigroup and under the Actions menu select Set Health Check.

<img src="/elastigroup/_media/set-health-checks_1.png" />

The Health Check Service window will open. Set the following parameters:

- **Name**: Name your Health Check for convenience.
- **ProxyAddress**: The public host/IP of your selected instance you installed service on. This will be set like http://publicip
- **Protocol**: Which protocol will Spot use to check the healthiness of your instances. Supported for now are http / https.
- **Endpoint**: The path of the Health Check in each instance.
- **Interval**: The interval (in seconds) between the checks. Minimum of 10.
- **Timeout**: The timeout (in seconds) to wait for each instance to answer the check. If it did not answer, we mark this attempt as `unhealthy`
- **UnhealthyThreshold**: The number of consecutive failed health checks that must occur before declaring an instance `unhealthy`
- **HealthyThreshold**: The number of consecutive successful health checks that must occur before declaring an instance `healthy`

<img src="/elastigroup/_media/set-health-checks_2.png" />

Save the settings and make sure that the HCS is also being used in the [Auto-Healing](elastigroup/features/compute/autohealing) setting of the group.
