# AZ Scores 

AZ scores and recommendations assist you in making informed decisions when choosing the best AZs to launch instances at. The data on the recommendation page is based on AZ scores calculated by Elastigroup, taking both Cost and Spot markets availability into account. To ensure tailor-made data is displayed, the data comprising the AZ scores is directly related to the allowed instance types configured in your group.  

Complete the following steps to access the AZ Recommendations page: 

1. Log in to the Spot Console and on the left main menu, click **Elastigroup**. 
2. Click **Groups** and then click the **Recommendations** tab. 

![az-score](https://github.com/spotinst/help/assets/106514736/6fcb6b1a-7c9b-4580-971c-bb18ff53c098)

## Recommendations  

The **Recommendations** tab displays scores that range from 0 to 100. These scores consist of various factors, such as the cost of instances within the group and the conversion rate (the ratio of the interruptions to the number of instances managed in the same market).  

### High Score AZs  

The Recommendations page presents you with a direct recommendation of the AZs that can potentially reduce costs and interruption rates. You can use the information provided to add AZs, expand to more AZs and according to that, a wider range of Spot Markets is included to enhance your options.  

A star symbol next to an AZ indicates it has a higher score than the average group score for the month. This means that although the AZ is not currently configured, it has a higher score, indicating its potential benefits. You have the option to expand your AZ offerings or even replace them based on the star-marked recommendations. Expanding the options enables you to improve the results by having more choices and achieving a better balance between Spot Markets and ideal costs. 

The recommendations are data-driven, considering instance interruptions and machine costs over time. 

Add, edit or change configured AZs directly from the page according to the recommendation by completing the following steps:  

1. Click **+ Add to Configuration**. 
2. The _Update Configured AZ(s)_ window that opens enables you to edit, add and change the configured AZs and subnets.  

## Average Monthly Score Breakdown 

The Average Monthly Score Breakdown is relative to the Spot market’s set within the group and is based on data from the past month. The scores consider the relevant instance types selected in the group when calculating the recommendation score for the AZ. 

## Availability Zone Score 

The Availability Zone Score graph summarizes the data from the last 30 days. Configured AZs are represented by a straight line, while non-configured AZs are represented by dashed lines. Hover over a specific day in the graph to view the scores of the AZs.  

You can edit the graph presentation. Click a line of a configured AZ or a non-configured AZ to remove it from the graph or click an AZ presented above the graph to return it to the graph.  

**Note**: Scores may differ when navigating between different groups due to the fact that it is calculated according to the relevant source resource types.  

 

 
