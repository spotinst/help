<meta name=“robots” content=“noindex”>

#  Right Sizing Recommendations and Rules 

To view your right-sizing recommendations and rules:   

*  Under the Right Sizing tab, click **Advanced Optimization**. 

[placeholder]

The Advanced Optimization tab contains the following lists:  

*  Workloads Optimization List 
*  Automatic Right Sizing Rules List

##  Workloads Optimization List 

This list displays: 

* Your right-sizing recommendations per workload, and it lets you drill down to view your right-sizing recommendations per container. 
*  Recommendations for vCPU and memory right sizing per deployment. Recommended increases are shown with a green up arrow, and recommended decreases are shown with a red Down arrow.  
*  Optimized [Right Sizing rules]() that are attached to specific workloads.
*  Potential monthly max. savings if you adopt these recommendations.  

To view a list of your potential savings and recommendations per container: 

*  Click on a workload link to drill down to the containers. For each container, you can then view the following: 

    *  vCPU Request: showing current and average utilization and a recommended increase or decrease for this resource (in vCPU units). If no changes are required, a Keep icon is displayed. 

    *  Memory Request: This shows current and Average utilization and a recommended increase or decrease for this resource (in MiB units). If no changes are required, a Keep icon is displayed. 

    *  Right-Sizing Recommendations: Show the recommended changes in vCPU and memory. Click on the Copy icon to save these changes for later. 

##  Right Sizing Rules List 

This list displays your existing right-sizing rules.  

Each rule entry shows relevant information about the parameters that trigger the rule and its scheduling plan. 

##   Work with Right Sizing Rules 

You can create right sizing rules and immediately attach them to specific workloads. Alternatively, you can create and save a rule, and later attach the rule to one or more workloads. 

You can create right-sizing rules to trigger immediately after a specific set of requirements is met or at a specific time after the requirements are met. 

###   Create or Edit a Right-Sizing Rule 

To create/edit a right-sizing rule: 

1.   Click the **Advanced Optimization** tab, if not already displayed.
2.   To create a new rule,	click **+ Add new rule** at the top-right of the Advanced Optimization list.
     
     >**Note**: To edit an existing rule: To the right of the row for the rule in the Right Sizing Rules list at the bottom of the tab, click **Edit Rule**. 

[placeholder]

3.   In the Configure Automation Rule dialog box, enter/edit the unique rule name.

4.   Select when to apply the recommendation by clicking the relevant radio button: 

      *   **Once available**: The recommendation is applied immediately after it becomes available. 
      *   **At a specific time**: You select when to apply the recommendation after it becomes available.

  [placeholder]

5.   Select whether to turn on the **restart pods for relevant workloads** option. This option enables Ocean to restart pod batches sequentially according to recommendations.
6.   Click the **Set Min. CPU / Memory thresholds for workload** down arrow and then set the CPU and Memory percentage thresholds using the up/down arrows. This threshold is the difference between the current request and the recommendation for triggering a percentage change. 

[placeholder]

7.   Click the **Set recommendation ranges for CPU & Memory** down arrow and enter the minimum and maximum values for CPU requests (millicpu) and Memory requests (mib). 

[placeholder]

8.   Click the **Set overhead for workload** down arrow and use the up/down arrows to set the CPU and memory percentage overheads. An overhead specifies the percentage of extra resources to add to the new request recommendation.

[placeholder]

9.   After you save the rule, it appears in the area under the Workloads Optimization list. See [View Right-Sizing Recommendations and Rules]().

###   Attach a Right-Sizing Rule to One or More Workloads 

To attach a rule to one or more workloads: 

1.   Select one or more workloads in the Workloads Optimization list. 
2.   From the Actions drop-down menu above the table, click **Attach Rule**.

[placeholder]

3.   You can attach a rule you already created, or create a new rule from scratch:
      *   Existing rule: Click the **Select from existing rule** drop-down menu and then select a rule. 
      *   New rule: Click **Create new rule from scratch** (see [Create or Edit a Right-Sizing Rule]())
  
>** Note**: Once you create the rule, it will be attached to the workload(s) you selected at the start of this procedure. 

4.   Save and apply the rule. 

###   Detach a Right-Sizing Rule from One or More Workloads 

To detach a rule from one or more workloads: 

1.   Select workloads in the Workloads Optimization list.

2.   From the Actions drop-down menu above the list, click **Detach Rule**. 

###   Delete a Right-Sizing Rule 

To delete a right sizing rule: 

1.   To the right of the row for the rule in the list, click the wastebasket icon. 

2.   When the confirmation message appears, Click **Delete**, or Cancel (if you are unsure). 

>**Important**: You cannot restore a deleted right-sizing rule. 


