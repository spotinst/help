<meta name=“robots” content=“noindex”>

#  Automatic Right-Sizing Recommendations and Rules (EKS and AKS)

This topic shows you how to view right-sizing recommendations for workloads and containers and work with right-sizing rules.

Before proceeding, see [Ocean EKS Cluster Automatic Right-Sizing](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab) for a full description of this Ocean feature.

To view your right-sizing recommendations and rules: 

1. In the left main menu, click **Ocean** > **Cloud Clusters**.
2. Select a cluster from the list of clusters.
3. Click the **Right Sizing** tab.  
4. Click **Advanced Optimization**. 

![right-sizing-workloads-opt-list-2](https://github.com/spotinst/help/assets/159915991/d119783f-015c-4b4a-9a1d-e559baea5a5f)

The Advanced Optimization tab contains these lists:  

*  Workloads Optimization List. 
*  Automation Rules List.

##  Workloads Optimization List 

This list displays:  

*  Your right-sizing recommendations per workload, and it lets you drill down to view your right-sizing recommendations per container. 
*  Recommendations for vCPU and memory right sizing per deployment. Recommended increases are shown with a green up arrow, and recommended decreases are shown with a red Down arrow.  
*  Optimized [Right Sizing rules]() that are attached to specific workloads.
*  Potential monthly max. savings if you adopt these recommendations.
*  Rules/Status: If the workload is [attached](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=attach-a-right-sizing-rule-to-one-or-more-workloads) to a right-sizing rule, the name of the rule appears. Hover over the rule name to see the workload status (pending or activated).

>**Notes**: If a workload is attached to an activated right-sizing rule, no vCPU / memory recommendations or Potential monthly max. savings are displayed for the workload because Ocean is already optimizing it.
>

To view a list of your potential savings and recommendations per container: 

*  Click on the down arrow to the left of a workload to drill down to the containers. For each container, you can then view the following: 

    *  vCPU Request: showing current and average utilization and a recommended increase or decrease for this resource (in vCPU units). If no changes are required, a Keep icon is displayed. 
    *  Memory Request: This shows current and Average utilization and a recommended increase or decrease for this resource (in MiB units). If no changes are required, a Keep icon is displayed. 
    *  Right-Sizing Recommendations: Show the recommended changes in vCPU and memory. Click on the Copy icon to save these changes for later. 

##  Automation Rules List 

This list displays your existing right-sizing rules.  
Each rule entry shows relevant information about the parameters that trigger the rule and its scheduling plan. 

##   Work with Right Sizing Rules 

You can create the right sizing rules and immediately attach them to specific workloads. Alternatively, you can create and save a rule and later attach it to one or more workloads. 
You can create right-sizing rules to trigger immediately after a specific set of requirements is met or at a specific time after the requirements are met. 

###   Create or Edit a Right-Sizing Rule 

To create/edit a right-sizing rule: 

1.   Click the **Advanced Optimization** tab if not already displayed.
2.   To create a new rule,	click **+ Add new rule** above the Automation Rules list.
     
     >**Note**: To edit an existing rule: To the right of the row for the rule in the Automation Rules list at the bottom of the tab, click **Edit Rule**. 

![rs-conf-auto-rule2](https://github.com/user-attachments/assets/fa96a30d-15ad-443a-b5a0-925edbbb98be)

<!--NEW SCREEN REQUIRED - NEW SCREEN REQUIRED -NEW SCREEN REQUIRED NEW SCREEN REQUIRED-->

3.   In the Configure Automation Rule dialog box, enter/edit the unique rule name.
4.   Select when to apply the recommendation by clicking the relevant radio button: 

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

###   Attach a Right-Sizing Rule to One or More Workloads 

To attach a rule to one or more workloads: 

>**Note**: You can only attach workloads that are not already attached to rules.

1.   Select one or more workloads in the Workloads Optimization list. 
2.   From the Actions drop-down menu above the table, click **Attach Rule**.

![right-sizing-attach-rule](https://github.com/spotinst/help/assets/159915991/dbc36aec-bc82-4b01-a75a-a6776970a785)

3.   You can attach a rule you already created or create a new rule from scratch:
      *   Existing rule: Click the **Select from existing rule** drop-down menu and then select a rule. 
      *   New rule: Click **Create new rule from scratch** (see [Create or Edit a Right-Sizing Rule]())
  
>**Note**: Once you create the rule, it will be attached to the workload(s) you selected at the start of this procedure. 

4.   Save and apply the rule. 

###   Detach a Right-Sizing Rule from One or More Workloads 

To detach a rule from one or more workloads: 

>**Note**: You can only detach workloads already attached to rules.

1.   Select workloads in the Workloads Optimization list.
2.   From the Actions drop-down menu above the list, click **Detach Rule**. 

###   Delete a Right-Sizing Rule 

To delete a right sizing rule: 

1.   To the right of the row for the rule in the list, click the wastebasket icon. 
2.   When the confirmation message appears, Click **Delete**, or **Cancel** (if you are unsure). 

>**Important**: You cannot restore a deleted right-sizing rule. In addition, a rule may be deleted only if it is no longer attached to a workload.



