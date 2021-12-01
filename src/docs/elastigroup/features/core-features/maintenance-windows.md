# Maintenance Windows

The Maintenance Window option provides several ways to control the process of gracefully replacing on-demand instances with spot instances in the Elastigroup. When the Elastigroup needs to launch a new instance, either due to scaling or a predicted spot instance preemption, if no spot instance is available the Elastigroup launches an on-demand instance to maintain the desired capacity. This process is known as _fallback to on-demand_. The maintenance window ensures that the Elastigroup replaces the on-demand instances with spot instances as soon as they become available, or alternatively, at predefined times selected by the user.

## Configuring the Maintenance Window

The maintenance window option can be found in the General tab of the creation wizard, under the Advanced section. The maintenance window options are described below.

### Once Available (Default)

Elastigroup continuously monitors for spot market availability. The Once Available option gracefully replaces on-demand instances in the Elastigroup with spot instances when one of the selected markets becomes available. This option ensures that the Elastigroup maximizes the savings opportunities available and is the recommended option for most use cases.

### Never

In the event of a fallback to on-demand, when the Elastigroup launches on-demand instances due to spot market non-availability, the on-demand instances in the Elastigroup will not be replaced with spot instances.

> **Tip**: In certain cases, the Never option may result in an Elastigroup running entirely on on-demand instances.

### Custom

The Custom option is used to limit the replacement of on-demand instances to specific time windows. Multiple maintenance time windows can be selected. Below is an example of a maintenance time window set for Saturdays, from 00:00 (UTC) to 04:00 (UTC).

<img src="/elastigroup/_media/corefeatures-maintenancewindow-01.png" />

## What's Next?

Learn more about [scheduling](elastigroup/features/core-features/scheduling).
