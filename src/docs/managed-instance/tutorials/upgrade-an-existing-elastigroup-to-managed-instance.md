# Upgrade an Existing Elastigroup to Managed Instance

This procedure describes how to upgrade an existing Elastigroup to a managed instance.

Running single instance workloads on Managed Instance will provide you with a simple and intuitive environment as well as additional visibility tailored to the stateful single-instance use case. If you have an existing Elastigroup that manages a single stateful instance, you can upgrade it to a Managed Instance.

## Prerequisites

Before you can create a managed instance, you need to do the following:

- Ensure your AWS account is connected to your [Spot account](connect-your-cloud-provider/aws-account.md).
- Ensure your [Spot Policy](elastigroup/tutorials/elastigroup-tasks/update-spot-policy.md) is up to date.
- Memory utilization graphs require the Cloudwatch agent. For more information, see the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html).

## Upgrade Your Elastigroup

1. Go to the dashboard of your stateful Elastigroup.
2. In the top right of the dashboard, click Upgrade to Managed Instance.

<img src="/managed-instance/_media/gettingstarted-upgrade-01.png" />

3. If you have additional stateful Elastigroups you would like to upgrade, repeat the procedure.
