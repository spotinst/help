<meta name=“robots” content=“noindex”>

#  Availability Zones Recommendations for AWS Ocean K8s

Availability Zones scores and recommendations assist you in making informed decisions when selecting the best availability Zones for launching instances. The data on the Recommendations tab for a cluster is based on the Availability Zones scores calculated by Ocean, considering both Cost and Spot market availability. 

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
The Recommendations Card displays scores ranging from 0 to 100. These scores include various factors, such as the cost of instances within the cluster and the conversion rate (the ratio of the interruptions to the number of instances managed in the same market).

###  High Score Availability Zones

The Recommendations Card directly recommends Availability Zones that can reduce costs and interruption rates. You can use the information provided to add or expand to more Availability Zones. Accordingly, a wider range of Spot Markets is included to enhance your options.

A star symbol next to an Availability Zone indicates it has a higher score than the average Virtual Node Group score for the month. So, although the Availability Zone is not currently configured, it has a higher score, indicating its potential benefits. You can expand or replace your Availability Zone offerings based on the star-marked recommendations. Expanding the options enables you to improve the results by having more choices and achieving a better balance between Spot Markets and ideal costs.

The recommendations are data-driven, considering instance interruptions and machine costs over time.

>**Note**: Only infrastructure costs are taken into account, not network costs.

