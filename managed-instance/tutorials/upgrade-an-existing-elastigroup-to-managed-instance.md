# Upgrade an Elastigroup to Stateful Nodes

If you have an existing Elastigroup that manages a single stateful node, you can upgrade it to a Stateful Node.

## Prerequisites

Before you can create a stateful node, you need to do the following:

- Ensure your AWS account is connected to your [Spot account](connect-your-cloud-provider/aws-account).
- Ensure your [Spot Policy](elastigroup/tutorials/elastigroup-tasks/update-spot-policy) is up to date.
- Memory utilization graphs require the Cloudwatch agent. For more information, see the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html).

## Upgrade Your Elastigroup

1. Go to the dashboard of your stateful Elastigroup.
2. In the top right of the dashboard, click Upgrade to Stateful Node.

<img src="/managed-instance/_media/gettingstarted-upgrade-01.png" />

3. If you have additional stateful Elastigroups you would like to upgrade, repeat the procedure.
