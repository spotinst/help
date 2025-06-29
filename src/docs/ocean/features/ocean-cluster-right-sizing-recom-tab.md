#  Automatic Right-Sizing Recommendations and Rules

Cloud service provider relevance: <font color="#FC01CC">EKS</font> and <font color="#FC01CC">AKS</font>

This topic shows you how to view right-sizing recommendations for workloads and containers and work with right-sizing rules.

Before you begin, see [Ocean Cluster Automatic Right-Sizing](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab) for a full description of this Ocean feature.

To view your right-sizing recommendations and rules: 

1. In the left main menu, click **Ocean** > **Cloud Clusters**.
2. Select a cluster from the list of clusters.
3. Click **Right Sizing > Advanced Optimization**. 

The Advanced Optimization tab contains these lists:  

*  Workloads Optimization List. 
*  Automation Rules List.

Your workload optimization activities impact the status of the workloads in the [Right Sizing Savings panel](ocean/features/ocean-cluster-right-sizing-tab?id=right-sizing-savings-panel)

##  Workloads Optimization List 

<img width="1000" src="https://github.com/user-attachments/assets/a6070749-5c8f-4871-b4ff-2c3faccc5755" />

This list displays your right-sizing recommendations per workload and lets you drill down per container.
*  [Right Sizing rules](ocean/features/ocean-cluster-right-sizing-recom-tab?id=automation-rules-list) that are attached to specific workloads.
*  Workload optimization status: If the workload is [attached](ocean/features/ocean-cluster-right-sizing-recom-tab?id=attach-a-right-sizing-rule-to-one-or-more-workloads) to a right-sizing rule, the name of the rule appears under the **Rules** column. The rule can have one of the following workload (colored) optimization statuses:
   *  Green (Optimized): Workload is fully optimized, and no action is required.
   *  Orange (Limited): Ocean applied recommendations to the workload, but there are limitations due to overhead, HPA, etc.
   *  Blue (Pending): Rule has been attached to the workload but is out of schedule.
   *  Red (Not Optimized): Issues due to user configuration, for example, thresholds or exclude preliminary recommendations.
   *  Gray (Rollback): Ocean rolled back to the original deployment request and suspended the workload's attachment to the rule.
   *  Brown (Not Attached): The Workload is not optimized.
*  Workload type and names.
*  vCPU and memory right sizing recommendations per deployment. Recommended increases are shown with a green up arrow, and recommended decreases are shown with a red down arrow.  
*  HPA: If the workload is configured with HPA, **ON** appears under the HPA column. Hover over the entry for information about the specific HPA trigger (CPU/Memory/other).
*  Potential maximum monthly savings if you adopt the recommendations.

> **Notes**:
> - Hover over the Limited and Not optimized statuses to view more details in a tooltip.
> - There are no vCPU / memory recommendations or Potential monthly max if a workload is fully optimized. Savings are displayed for the workload because Ocean is already optimizing it.
>  
> - If the <img height="20" src="https://github.com/user-attachments/assets/6160df45-992e-41a8-bcc2-5af1bee732ff" /> button appears on the right of the screen, workloads were moved to rollback status. See [Acknowledge a Workload Rollback](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=acknowledge-a-workload-rollback)
  
> If a message about VPA not reporting is displayed:
> - You cannot attach rules to workloads.
> - If at least 1 rule was previously attached to a workload, the workload is not optimized due to the missing VPA installation in the cluster.

The graphical display above the list shows the breakdown of these workload optimization statuses.

To view a list of your potential savings and recommendations per container: 

*  Click on the down arrow to the left of a workload to drill down to the containers. For each container, you can then view the following: 

    *  vCPU Request: showing current and average utilization, and a recommended increase or decrease for this resource (in vCPU units). If no changes are required, a Keep icon is displayed. 
    *  Memory Request: This shows current and Average utilization, and a recommended increase or decrease for this resource (in MiB units). If no changes are required, a Keep icon is displayed. 
    *  Right-Sizing Recommendations: Show the recommended changes in vCPU and memory. Click on the Copy icon to save these changes for later. 

##  Automation Rules List 

![automation-rules-e](https://github.com/user-attachments/assets/f128606b-a91d-4935-a36a-c3c4984287b8)

This list displays your existing right-sizing rules.  
Each rule entry shows relevant information about the parameters that trigger the rule and its scheduling plan. 

##  Work with Right Sizing Rules 

You can create right-sizing rules to trigger immediately after a specific set of requirements is met or at a specific time after the requirements are met. 

###   Create or Edit a Right-Sizing Rule 

To create or edit a right-sizing rule: 

1.   Click the **Advanced Optimization** tab, if it is not already displayed.
2.   To create a new rule, click **+ Add new rule** above the rules list (or edit an existing rule).

     <img width="500" src="https://github.com/user-attachments/assets/44cf0e73-8bd0-4dbe-b383-a28abf6c31cc" />

3.   In the Configure automation rule dialog box, enter/edit a unique rule name.
4.   Select when to apply the recommendation: 

      *   **Once available**: Apply the recommendation immediately when it becomes available. 
      *   **Specific time**: Apply the recommendation at a specific time after it becomes available.

          <br>
          <img width="500" src="https://github.com/user-attachments/assets/31f94101-ee02-4cc4-b699-a81eb2130400" />

5. Turn on **Exclude preliminary recommendation** if you want to suppress recommendations as long as the workload has preliminary status (4 days).
6. Select one of the **Pod modification methods**:
   * Update workloads live.
   * Restart all attached workloads.
   * Restart all attached workloads with more than 1 replica only.
   * Update workloads on recreation without triggering a restart.

    >**Note**: if you have Kubernetes 1.33 or above, Ocean can (in most cases) automatically apply the recommendations without having to restart pods. For feature limitations, see the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/resize-container-resources/#limitations).
   
7. Set the recommendation baseline (right-sizing percentile) for the workload to calculate the vCPU and memory recommendations.
The lower the percentile, the stronger the recommendations. By default, both vCPU and memory use the 85th percentile.

>**Important:** Changing the percentiles will impact any recommendations that were already applied (this may take a few minutes to update) and will also override the values set at cluster level (for this workload).

8. Click **Set the resources percentage change to apply the recommendation** (CPU and memory percentage thresholds). This is the minimum percentage change from the current request for applying a recommendation. If the right-sizing recommendation exceeds the percentage threshold for either resource (CPU or memory), it will be applied to both resources, and the resulting status will be **fully optimized**. We do this because the original purpose of the threshold is to prevent unnecessary pod deletion. However, if we need to delete a pod and relaunch a new one for one resource, we do the same for the other. 
9. Click **Set recommendation ranges for resources**, and enter the upper and lower boundary values for CPU (millicpu) and memory (MiB) requests to apply a recommendation. By default, the minimum values are 10 millicpu for CPU and 32 MiB for memory; no lower values will be accepted.
   * If a recommendation is above the set boundaries, automatic right-sizing will apply the recommendation using the maximum value configured in the rule.
   * If a recommendation is below the set boundaries, automatic right-sizing will apply the recommendation using the minimum value configured in the rule.
11. Click **Set overhead for resources**, and set the CPU and memory percentage overhead. An overhead specifies the percentage of extra resources to add to the new request recommendation.
12. Ocean supports automatic right-sizing for workloads associated with HPA. Click **Apply HPA on associated workload** to enable.

13. Turn on **Auto-attach** if you want to automatically attach rules to workloads based on selected criteria.
     *  In the Auto-attach area, select required namespaces and / or labels.
   
        <img width="500" src="https://github.com/user-attachments/assets/95b7724c-4be7-4da4-86df-45b9b3d5d466" />

12. A saved rule appears in the area under the [Workloads Optimization list](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=workloads-optimization-list).

    > **Notes**:
    > - Default values for Overhead and Automation Threshold are **10%** and **5%** respectively.
    > - The **10%** default overhead is calculated within the recommendation itself.
    > - Threshold value is only used for down-sizing cases

###   Attach a Right-Sizing Rule to One or More Workloads

Options:

* Auto-attach: Turn on auto-attach and let Ocean automatically attach rules to workloads based on selected criteria. See [Create or Edit a Right-Sizing Rule](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=create-or-edit-a-right-sizing-rule).
>**Note**: Auto-attach attaches rules to existing and newly-added workloads.
  
* Manual attach: Manually attach a specific right-sizing rule to one or more workloads.


To manually attach a rule:

1.   Select one or more workloads in the Workloads Optimization list. 
2.   From the Actions drop-down menu above the table, click **Attach Rule**.

     ![attach-rule-to-workload](https://github.com/user-attachments/assets/be315afa-0ef8-4d30-b1f3-422e8caf8633)

3.   You can either attach an existing rule or create a new rule from scratch (a new rule will be attached to the workload(s) you selected earlier):

      *   Click the **Select from existing rule** drop-down menu and then select a rule. 
      *   Click **Create new rule from scratch** (see [Create or Edit a Right-Sizing Rule](ocean/features/ocean-cluster-right-sizing-recom-tab?id=create-or-edit-a-right-sizing-rule))
  
4.   Save and apply the rule. 

###   Detach a Right-Sizing Rule from One or More Workloads 

To detach a rule from one or more workloads: 

1.   Select workloads in the Workloads Optimization list.
2.   From the Actions drop-down menu above the list, click **Detach Rule**.

>**Important**: If you encounter Kubernetes issues, we recommend detaching workloads from rules and rolling them in your cluster.

###   Delete a Right-Sizing Rule 

To delete a right-sizing rule: 

1.   To the right of the row for the rule in the list, click the wastebasket icon. 
2.   When the confirmation message appears, click **Delete**, or **Cancel** (if you are unsure). 

>**Important**: You cannot restore a deleted right-sizing rule. In addition, a rule may be deleted only if it is no longer attached to a workload.

### Acknowledge a Workload Rollback

If a workload encounters an OOM error, Ocean rolls back to the original deployment request and suspends the workload's attachment to the rule. The workload moves to **rollback** status. When at least one workload has rollback status, the <img height="20" src="https://github.com/user-attachments/assets/6160df45-992e-41a8-bcc2-5af1bee732ff" /> button appears at the top-right of the screen. 

To acknowledge a workload rollback:

1. Click **Acknowledge Rollback** to view all the workloads with the rollback status.

 <img width="700" src="https://github.com/user-attachments/assets/310675c3-29eb-4259-b886-d89a2683292a" />

* The rollback list includes the following information:
   * Workload Name.
   * Namespace.
   * CPU Update in vCPUs (before and after rollback).
   * Memory Update in MiBs (before and after update).
   * Rollback Time: In format MM/DD/YYYY HH:MM:SS AM/PM

2. Select the checkboxes for the required workloads.
3. Click **I Acknowledge the Rollback**.

The workloads are displayed in the [Workloads Optimization List](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=workloads-optimization-list) without any attached rules. Before attaching a rule to a rolled-back workload, first fix the issue.

### Set the vCPU/Memory Percentiles at Cluster Level

These are the global percentile settings at the cluster level and apply to all workloads in the cluster.

Any percentile change you make for a specific workload in a right-sizing rule overrides the setting at cluster level.

To change the settings:

1. Click **Cluster Settings** above the [workloads optimization list](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=workloads-optimization-list).
 
2. Click **vCPU** or **Memory** as required (vCPU is shown in the example).

   <img width="500" src="https://github.com/user-attachments/assets/59b2e755-04d8-4967-9b39-9fc0904e5231" />

3. Change the current value(s) and save.

## Best Practices

These are the right-sizing best practices:

* Workload limits should not have the same values as requests.
* If you set overheads for resources, start with a relatively high overhead (20%) and decrease it with time.
* If you set boundaries (recommendation ranges for resources), avoid applying the same rule to all workloads. All services have different purposes.

## Related Topics

* [Right-Sizing Troubleshooting](https://docs.spot.io/ocean/features/troubleshoot-right-sizing)
* [Automatic Right-Sizing -Introduction](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab)

