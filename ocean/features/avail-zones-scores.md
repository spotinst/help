<meta name=“robots” content=“noindex”>

#  Availability Zones Recommendations for EKS
Availability Zones scores and recommendations help you make informed decisions when selecting the best availability Zones for launching instances. The data on the Recommendations tab for a cluster is based on the Availability Zones scores calculated by Ocean, considering both Cost and Spot market availability. 

The Availability Zones scores data directly relates to the allowed instance types configured in your Virtual Node Group to ensure that customized data is displayed.

To access the Ocean Availability Zones Recommendations:

1.  In the left main menu, click **Ocean** and click **Cloud Clusters**.
2.  Select a cluster from the list of clusters.
3.  Click the **Recommendations tab**.
4.  Select a Virtual Node Group.

The Recommendations tab consists of a dashboard with two panels:
*  Recommendations Card
*  Score Graph 

##  Recommendations Card

![az-rec-taba](https://github.com/spotinst/help/assets/159915991/7e1d2fd2-8c14-4814-a3ee-651866762592)

The Recommendations Card displays scores ranging from 0 to 100. These scores include various factors, such as the cost of instances within the cluster and the conversion rate (the ratio of the interruptions to the number of instances managed in the same market).

###  High Score Availability Zones

The Recommendations Card directly recommends Availability Zones that can reduce costs and interruption rates. You can use the information provided to add or expand to more Availability Zones, enhancing your options with a wider range of Spot Markets.

A star symbol next to an Availability Zone indicates it has a higher score than the average Virtual Node Group score for the month. So, although the Availability Zone is not currently configured, it has a higher score, indicating its potential benefits. You can expand or replace your Availability Zone offerings based on the star-marked recommendations. Expanding the options enables you to improve the results by having more choices and achieving a better balance between Spot Markets and ideal costs.

The recommendations are data-driven, considering instance interruptions and machine costs over time.

>**Note**: Only infrastructure costs are considered, not network costs.

###  Average Monthly Score Breakdown

The Average Monthly Score Breakdown is relative to the Spot market’s set within the cluster and is based on data collected from the past month. The scores consider the relevant instance types selected in the group when calculating the recommendation score for the Availability Zones.

>**Tip**: Click **How is it calculated** on the Recommendations Card to view the details of the Avg. Monthly Score calculation.

##  Score Graph

![az-recommend-tab](https://github.com/spotinst/help/assets/159915991/0e761f12-135d-415c-8c91-eb131d212696)

The Availability Zone Score graph summarizes the data from the last 30 days. A straight line represents a configured Availability Zone, while a dashed line represents a non-configured Availability Zone. 

Hover over a specific day in the graph to view the scores of the Availability Zones.

To manipulate the score graph:

*  Click on a zone indicator in the legend at the top of the score graph, for example, us-east-ia  in the example above, to remove the curve from the score graph. Click it again to return the curve to the score graph. 

>**Note**: Scores may differ when navigating between Virtual Node Groups because they are calculated according to the relevant source resource types.

##  Configure Your Availability Zones Recommendations

To configure your Availability Zones recommendations:

1.  In the Availability Zones Recommendations tab, Recommendations Card, click **+ Add to Configuration**.

The Update Configured AZ(s) dialog box lets you edit, add, and change the configured Availability Zones and subnets based on your configured and recommended Availability Zones.

![az-conf-nonconf-edit](https://github.com/spotinst/help/assets/159915991/34f49210-a6fb-4ae4-8d75-edf46c71684e)

The currently configured Availability Zones are pre-selected.

>**NOTE**: Availability Zones may appear gray, indicating no available subnets.

>**IMPORTANT**: If the subnets are not set on the [Virtual Node Group](https://docs.spot.io/ocean/tutorials/manage-virtual-node-groups) ('subnets' = null) but are taken from the Virtual Node Group template (default VNG), an information banner will appear in the dialog box to inform you that updating will override the Virtual Node Group Template configuration, and will affect all the custom Virtual Node Groups with ‘subnets’ = null.

![az-vng-message](https://github.com/spotinst/help/assets/159915991/b51b8833-cb28-40ed-8df4-090558487d7a)

2.  Edit your Availablity Zones and accept your recommendations as required.

>**Note**: You can replace a single Availability Zone without adding one.

**Important**:   Make sure that a PVC or any other component can run in the new Availability Zone before replacing the current Availability Zone.

3.  Click **Update**. The updated configuration appears in the Recommendations tab dshboards.




