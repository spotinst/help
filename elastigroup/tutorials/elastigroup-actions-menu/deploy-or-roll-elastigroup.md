# Deploy or Roll Elastigroup

This tutorial covers executing a Blue/Green deployment for an Elastigroup. Deployments can be performed from the [Spot Console](http://console.spotinst.com/) by selecting Deploy under the Actions menu in the Management view of the desired Elastigroup.

<img src="/elastigroup/_media/deploy-or-roll-elastigroup_1.png" />

Using the Deploy option you are able to initiate a Deployment or review previous Deployments.

<img src="/elastigroup/_media/deploy-or-roll-elastigroup_2.png" />

To start a new Deployment simply click the “Deploy” button

<img src="/elastigroup/_media/deploy-or-roll-elastigroup_3.png" />

When a deployment process is running, no update can be applied to the group (i.e., capacity update).

You can now set the deployment parameters:

- **Batch Size** – The size of each Batch in the deployment as a percentage of the total number of instances in the group, meaning a group with 20% will have 5 separate batches.
- **Grace Period** – The limit of time to wait for an instance to be deemed healthy according to the health check setting before the deployment starts the next batch.

If there is no “Health check” setting set in the Elastigroup, each batch will wait for entire grace period to end.

This will trigger a Blue/Green deployment. Elastigroup spins up new instances (green) into your cluster, and monitors their status using the configured “health check” (EC2, ELB, MLB). Once the instances are registered as healthy the old instances (Blue) will be scaled down. This process is split into configurable portions each representing a Batch.

<img src="/elastigroup/_media/deploy-or-roll-elastigroup_4.png" />

## When should I roll my Group?

A roll is required once the update may affect the instance configuration, specifically, while modifying the following parameters:

- **General Tab**
  - Advanced:
    - Cluster orientation
    - Strategy (Spot Instances Percentage, OnDemandCount, utilizeReservedInstances)
- **Compute Tab**:
  - Availability Zones
  - On-Demand Type
  - Spot Types
  - Launch Specification (Image, Security Group, Key Pair, Tags)
  - Additional Configurations:
    - IAM Role
    - EBSOptimized
    - Detailed monitoring
    - Tenancy
    - User Data
    - Signal and Signal Timeout
  - Stateful:
    - Assign specific Private IPs only

## Behavior Notes

- One failed batch is enough to fail the deployment. Make sure you provide ample “Grace Period” for the instances to become healthy.
- Your Elastigroup won't perform new rolls or any scale down activities until the failed roll will be completely stopped or resolved.
- Scaling behaviour – The scaling down policy will be suspended until the deployment is finished. We have created this mechanism to allow you scaling up in case needed and avoid losing servers at the same time.

## Roll Failure

There are several reasons why a roll may fail. Some of the more common issues are:

- A problematic version of your application (new AMI, or codebase).
- The Roll grace period was too short.
- A blue-green deployment will fail if more than 50% of the instances in a specific batch are unhealthy after the grace period.

## Troubleshooting Roll Failure

If a deployment fails the instance remain running for troubleshooting. Some instances in the Elastigroup may have the old configuration, while the rest may have the new configuration. To fix the failed roll, _stop_ and _Detach_ the old/new instances. Update the Elastigroup configuration and _re-deploy_ to apply the configuration updates.

Elastigroup won't perform new rolls or any scale down activities until the failed roll is completely stopped or resolved.
