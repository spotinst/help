# Spot Security: Licensing Guide

## Subscription

Spot Security offers an all-inclusive subscription license to protect your public cloud infrastructure, currently supporting AWS and Microsoft Azure cloud assets with an agentless assessment. You can conduct continuous scanning of your assets for misconfigurations and threat detection along with assisted remediation, track compliance adherence to the top global standards, gain visibility into your inventory, and receive proactive security alerts. Each cloud asset shall be defined as a “**Node**”. 

Licensing on Spot Security uses an upfront service credits system, with one (1) service credit = one (1) US$. For each node, you are entitled to receive ninety-nine (99) service credits per year. You may purchase additional service credits during the subscription term. The cost of such additional service credits shall be agreed by both you and NetApp. 

Spot Security computes the consumption of the nodes and deducts such consumption from the customer’s Service Credits Bucket (as defined in an applicable order form) on an hourly basis, where each hour is equal to 0.0113 service credits. For example, for a consumption of ten hours of a compute instance (for example, AWS’ EC2 or Azure’s Virtual Machine), 0.113 service credits shall be deducted from the customer’s Service Credits Bucket. 

## Liscense Mangement 

You can view your license details in the License Management page. This page displays the license purchased and the active license usage. To view the page: 

1. In the main menu on the left, click **Security** and then click **Administration**.  
2. Click the **License Management** tab.  

![license-2](https://github.com/spotinst/help/assets/106514736/fa7cbfa4-9f2d-4cda-a317-da8eade8a5ac)

The Active License Usage bar displays the overall license consumption as a percentage as well as the number of nodes that were consumed. 

The left of the bar displays: 

* Type 
* License ID 
* Subscription Period 
* Number Nodes 


In the Active License Usage section you have the option to select the time range in the View by dropdown menu that will change the: 

* **Total Billable Assets**: This displays the average number of VMs that were used during the selected time period.  
* **The Daily Usage Line Graph**: This displays the count of VMs used in a particular day. 

Spot Security also sends you notifications regarding your usage in the following cases: 

* 30 days before the subscription expires, Spot Security displays a message at the top of every page. 
* The subscription period is over, but 30 days have not exceeded after the end of the period.  
* The subscription period is over, but 30 days have exceeded after the end of the period. 
* You reached the usage limit and 30 days have not exceeded since the last day of the limit.  
* You reached the usage limit and 30 days have exceeded since the last day of the limit. 

Additional asset types that Spot Security supports can be found [here](https://docs.spot.io/spot-security/security-matrix/).
