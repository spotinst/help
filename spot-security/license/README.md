# Spot Security: Licensing Guide

## Subscription

Spot Security offers an all-inclusive subscription license to protect your public cloud infrastructure, currently supporting AWS and Microsoft Azure cloud assets with an agentless assessment. You can conduct continuous scanning of your assets for misconfigurations and threat detection along with assisted remediation, track compliance adherence to the top global standards, gain visibility into your inventory, and receive proactive security alerts. Each cloud asset shall be defined as a “Node”. 

Licensing on Spot Security uses an upfront service credits system, with one (1) service credit = one (1) US$. For each node, you are entitled to receive ninety-nine (99) service credits per year. You may purchase additional service credits during the subscription term. The cost of such additional service credits shall be agreed by both you and NetApp. 

Spot Security computes the consumption of the nodes and deducts such consumption from the customer’s Service Credits Bucket (as defined in an applicable order form) on an hourly basis, where each hour is equal to 0.0113 service credits. For example, for a consumption of ten hours of a compute instance (for example, AWS’ EC2 or Azure’s Virtual Machine), 0.113 service credits shall be deducted from the customer’s Service Credits Bucket. 

## Liscense Mangement 

You can view your license details in the License Management page. This page displays the license and the active liscene usage. Complete the following steps to view the page:  

1. In the main menu on the left, click **Security** and then **Administration**.  
2. Click the **License Management** tab.  

![license-1](https://github.com/spotinst/help/assets/106514736/af5c92bb-454c-4c12-b998-8605c39a50db)

You can also view the: 

* Type 
* License ID 
* Subscription Period 
* Number Nodes 

In the Active Lisence Usage section below you can see a graph of the overall lisence consumption as a percentage as well as the number of nodes that were consumed. You can also see the total billable assets for the selected time period.   

You can select the time range in the View by dropdown menu that displays the average number of assets that were used and daily usage of assets for the selected timeline. 

Spot Security sends notifications with messages in the following cases: 
* 30days before the subscription expires, Spot Security displays a message in a banner on top of every page. 
* The subscription period is over, but 30 days have not exceeded after the end of the period.  
* The subscription period is over, but 30 days have exceeded after the end of the period. 
* You reached the usage limit and 30 days have not exceeded since the last day of the limit.  
* You reached the usage limit and 30 days have exceeded since the last day of the limit.

Additional asset types that Spot Security supports can be found [here](https://docs.spot.io/spot-security/security-matrix/).
