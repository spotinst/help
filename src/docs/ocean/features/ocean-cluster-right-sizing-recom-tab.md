<meta name=“robots” content=“noindex”>

#  Automatic Right-Sizing Recommendations and Rules

Cloud service provider relevance: <font color="#FC01CC">EKS</font> and <font color="#FC01CC">AKS</font>

This topic shows you how to view right-sizing recommendations for workloads and containers and work with right-sizing rules.

Before you begin, see [Ocean EKS Cluster Automatic Right-Sizing](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab) for a full description of this Ocean feature.

To view your right-sizing recommendations and rules: 

1. In the left main menu, click **Ocean** > **Cloud Clusters**.
2. Select a cluster from the list of clusters.
3. Click the **Right Sizing** tab.  
4. Click **Advanced Optimization**. 

The Advanced Optimization tab contains these lists:  

*  Workloads Optimization List. 
*  Automation Rules List.

Your workload optimization activities impact the status of the workloads in the [Right Sizing Savings panel](ocean/features/ocean-cluster-right-sizing-tab?id=right-sizing-savings-panel)

##  Workloads Optimization List 

![table-advanced-optimization](https://github.com/user-attachments/assets/9543bf13-9f96-450b-b892-758e264c46e9)

This list displays:  

*  Your right-sizing recommendations per workload, and it lets you drill down to view your right-sizing recommendations per container. 
*  Recommendations for vCPU and memory right sizing per deployment. Recommended increases are shown with a green up arrow, and recommended decreases are shown with a red Down arrow.  
*  [Right Sizing rules]() that are attached to specific workloads.
*  Workload Status: If the workload is [attached](ocean/features/ocean-cluster-right-sizing-recom-tab?id=attach-a-right-sizing-rule-to-one-or-more-workloads) to a right-sizing rule, the name of the rule appears. The rule has one of the following workload (colored) optimization statuses:
   *  Green: The Workload is fully optimized, and no action is required.
   *  Orange: The Workload has optimization limitations (constrained by settings). 
   *  Gray: The rule for the workload has been attached but is out of schedule.
 * Potential monthly max. Savings if you adopt these recommendations.

   > **Notes**:
   > - Red status: The Workload is not optimized.
   > - Orange or gray status: Hover over the workload optimization status to view more details in a tooltip.
   > - There are no vCPU / memory recommendations or Potential monthly max if a workload is fully optimized. Savings are displayed for the workload because Ocean is already optimizing it.

The graphical display above the list shows the breakdown of these workload optimization statuses.

To view a list of your potential savings and recommendations per container: 

*  Click on the down arrow to the left of a workload to drill down to the containers. For each container, you can then view the following: 

    *  vCPU Request: showing current and average utilization and a recommended increase or decrease for this resource (in vCPU units). If no changes are required, a Keep icon is displayed. 
    *  Memory Request: This shows current and Average utilization and a recommended increase or decrease for this resource (in MiB units). If no changes are required, a Keep icon is displayed. 
    *  Right-Sizing Recommendations: Show the recommended changes in vCPU and memory. Click on the Copy icon to save these changes for later. 

##  Automation Rules List 

![automation-rules](https://github.com/user-attachments/assets/8289d519-7ae1-4bbf-a2ef-e66cfaa39946)

This list displays your existing right-sizing rules.  
Each rule entry shows relevant information about the parameters that trigger the rule and its scheduling plan. 

##  Work with Right Sizing Rules 

You can create the right sizing rules and immediately attach them to specific workloads. Alternatively, you can create and save a rule and later attach it to one or more workloads. 
You can create right-sizing rules to trigger immediately after a specific set of requirements is met or at a specific time after the requirements are met. 

###   Create or Edit a Right-Sizing Rule 

To create/edit a right-sizing rule: 

1.   Click the **Advanced Optimization** tab if not already displayed.
2.   To create a new rule, click **+ Add new rule** above the Automation Rules list (or to edit an existing rule, click the pencil icon in the rule).

![rs-conf-auto-rule2](https://github.com/user-attachments/assets/fa96a30d-15ad-443a-b5a0-925edbbb98be)

3.   In the Configure Automation Rule dialog box, enter/edit the unique rule name.
4.   Select when to apply the recommendation by selecting one of the following options: 

      *   **Once available**: The recommendation is applied immediately after it becomes available. 
      *   **At a specific time**: You select when to apply the recommendation after it becomes available.

![rs-time-settings](https://github.com/user-attachments/assets/aca5e891-e382-4863-aa4e-7972c4f362df)

5. Turn on **Exclude preliminary recommendation** if you want to suppress recommendations as long as the workload is considered preliminary.
6. Select one of the **Restart replicas** options:
   * All manifests.
   * Manifests with more than 1 replica only.
   * No restart.
7. Click the **Set the resources percentage change** down arrow to apply the recommendation, and set the CPU and Memory percentage thresholds. This is the minimum percentage change from the current request for applying a recommendation.
8. Click the **Set recommendation ranges for resources** down arrow and enter the upper and lower boundary values for CPU (millicpu) and Memory (mib) requests for applying a recommendation.
9. Click the **Set overhead for resources** down arrow and set the CPU and memory percentage overheads. An overhead specifies the percentage of extra resources to add to the new request recommendation.
10. After you save the rule, it appears in the area under the [Workloads Optimization list](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=workloads-optimization-list).

    > **Notes**:
    > - Default values for Overhead and Automation Threshold are **10%** and **5%** respectively.
    > - The **10%** default overhead is calculated within the recommendation itself.
    > - Threshold value is only used for down-sizing cases

###   Attach a Right-Sizing Rule to One or More Workloads 

To attach a rule to one or more workloads: 

1.   Select one or more workloads in the Workloads Optimization list. 
2.   From the Actions drop-down menu above the table, click **Attach Rule**.

![right-sizing-attach-rule](https://github.com/spotinst/help/assets/159915991/dbc36aec-bc82-4b01-a75a-a6776970a785)

3.   You can either attach an existing or new rule you create from scratch (a new rule will be attached to the workload(s) you selected earlier):

      *   Click the **Select from existing rule** drop-down menu and then select a rule. 
      *   Click **Create new rule from scratch** (see [Create or Edit a Right-Sizing Rule](ocean/features/ocean-cluster-right-sizing-recom-tab?id=create-or-edit-a-right-sizing-rule))
  
4.   Save and apply the rule. 

###   Detach a Right-Sizing Rule from One or More Workloads 

To detach a rule from one or more workloads: 

1.   Select workloads in the Workloads Optimization list.
2.   From the Actions drop-down menu above the list, click **Detach Rule**.

>**Important**: If you encounter any Kubernetes issues, we recommend detaching workloads from rules and rolling them in your cluster.

###   Delete a Right-Sizing Rule 

To delete a right sizing rule: 

1.   To the right of the row for the rule in the list, click the wastebasket icon. 
2.   When the confirmation message appears, Click **Delete**, or **Cancel** (if you are unsure). 

>**Important**: You cannot restore a deleted right-sizing rule. In addition, a rule may be deleted only if it is no longer attached to a workload.

<!-- # Best Practices

These are the Right-Sizing Best Practices:

* Ensure more than one replica for the Admission Controller and VPA.
* Limits (percentage thresholds) should not have the same values as requests.
* If you set overheads for resources, Start with a relatively high overhead (20%) and decrease it with time.
* Install the Spot VPA project. Then restart pods, and then restart policies and flags.
* If you set boundaries (recommendation ranges for resources), do not apply the rule to all workloads. All services have different purposes.

