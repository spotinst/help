# Availability Zone Scores 

Availability zone scores and recommendations assist you in making informed decisions when choosing the best availability zones to launch instances at. The data on the recommendation page is based on availability zone scores calculated by Elastigroup, taking both Cost and Spot markets availability into account. To ensure tailor-made data is displayed, the data comprising the availability zone scores is directly related to the allowed instance types configured in your group.  

Complete the following steps to access the Availability Zone Recommendations page: 

1. Log in to the Spot console and on the left main menu, click **Elastigroup**. 
2. Click **Groups** and then click the **Recommendations** tab. 

![az-score](https://github.com/spotinst/help/assets/106514736/064ca0e3-06ff-4a0f-a718-974bc74612ac)

The Recommendations tab consists of a dashboard with two panels:

* Recommendations Card
* Score Graph

## Recommendations Card 

![az-score-1](https://github.com/spotinst/help/assets/106514736/e2f1cd6d-5ebe-4d2b-9895-b9368ddc965f)

The **Recommendations** Card displays scores that range from 0 to 100. These scores consist of various factors, such as the cost of instances within the group and the conversion rate (the ratio of the interruptions to the number of instances managed in the same market).  

### High Score Availability Zones  

The Recommendations page provides a direct recommendation of the availability zones that can potentially reduce costs and interruption rates. You can use the information provided to add availability zones, expand to more availability zones and according to that, a wider range of Spot Markets is included to enhance your options.  

A star symbol next to an availability zone indicates it has a higher score than the average group score for the month. This means that although the availability zone is not currently configured, it has a higher score, indicating its potential benefits. You can expand your availability zone offerings or even replace them based on the star-marked recommendations. Expanding the options enables you to improve the results by having more choices and achieving a better balance between Spot Markets and ideal costs. 

The recommendations are data-driven, considering instance interruptions and machine costs over time. 

Add, edit or change configured availability zones directly from the page according to the recommendation by completing the following steps:  

1. Click **+ Add to Configuration**. 
2. The Update Configured availability zone(s) window that opens enables you to edit, add, and change the configured availability zones and subnets.  

### The Average Monthly Score Breakdown

![az-score-2](https://github.com/spotinst/help/assets/106514736/2f752bdd-0056-49ad-b644-9167a8b0e3b3)

The Average Monthly Score Breakdown is relative to the Spot market’s set within the group and is based on data from the past month. The scores consider the relevant instance types selected in the group when calculating the recommendation score for the availability zone. 

## Score Graph  

The Availability Zone Score graph summarizes the data from the last 30 days. Configured availability zones are represented by a straight line, while non-configured availability zones are represented by dashed lines. Hover over a specific day in the graph to view the scores of the availability zones.  

You can edit the graph presentation. Click a line of a configured availability zone or a non-configured availability zone to remove it from the graph or click an availability zone presented above the graph to return it to the graph.  

**Note**: Scores may differ when navigating between different groups because it is calculated according to the relevant source resource types.  

 

 
