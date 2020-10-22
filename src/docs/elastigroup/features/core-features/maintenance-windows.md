# Maintenance Windows

The Maintenance Window option provides several ways to control the process of gracefully replacing On-Demand instances with spot Instances in the Elastigroup. When the Elastigroup needs to launch a new instance, either due to scaling or a predicted Spot instance preemption, if no spot instance is available the Elastigroup launches an On-Demand instance to maintain the desired capacity. This process is known as Fallback to On-Demand. The Maintenance Window ensures that the Elastigroup replaces the On-Demand instances with Spot instances as soon as they're available, or alternatively at predefined times selected by the user.

## Configuring the Maintenance Window

The Maintenance Window option can be found in the Creation Wizard, in the General tab, under the Advanced section. The Maintenance Window options are described below.

### Once Available (Default)

Elastigroup continuously monitors for Spot market availability. The Once Available option gracefully replaces On-Demand instances in the Elastigroup with spot instances when one of the selected markets becomes available. This option ensures that the Elastigroup maximizes the savings opportunities available and is the recommended option for most use cases.

### Never

In the event of a fallback to On-Demand, when the Elastigroup launches On-Demand instances due to no spot market availability, the On-Demand instances in the Elastigroup will not be replaced with spot instances.

---

**Note**: In certain cases, the Never option may result in an Elastigroup running entirely on On-Demand instances.

---

## Custom

The Custom option is used to limit the replacement of On-Demand instances to specific time windows. Multiple maintenance time windows can be selected. Here's an example of a maintenance time window set for Saturdays, from 00:00 (UTC) to 04:00 (UTC).

<img src="/elastigroup/_media/corefeatures-maintenancewindow-01.png" />
