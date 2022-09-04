# Spot Security: Licensing Guide

## 1.1 Subscription

Spot Security offers an all-inclusive subscription license to protect your AWS cloud assets via an agentless assessment. You can conduct continuous scanning of your assets with guided remediation, track compliance adherence to the top global standards, gain visibility into their inventory, and receive proactive security alerts for over 12 different assets.

Licensing on Spot Security uses an upfront service credit system with 1 Service Credits = USD 1 as part of the Subscription Fee, as the unit of measurement is called “nodes”. For each node, you are entitled to 99 service credits per year. You may purchase additional service credits during the subscription period, the cost of which will be co-termed.

A minimum bucket of 9900 service credits need to be purchased for a year and Spot Security will compute the consumption of the available nodes at the following rate:

<img src="/spot-security/_media/license.png" />

**Volume Price Break (VPB)**: Discount schedules are applicable based on quantity or the terms of purchased nodes. The pricing of the nodes reduces as more nodes are purchased. A similar discount is given if the same number of nodes is purchased for a period of two or three years.

## 1.2 Free Trial

There is a 30-day free trial with unlimited usage. Spot Security constrains the number of AWS accounts connected or assets onboarded during the trial period.

## 1.3 Workload Fluctuations

Spot Security nodes are licensed on the ‘honor system’ and it is a violation of Spot Security’s Terms of Use to use the features without purchasing a license for an adequate number of nodes.
* Consumption of nodes will be measured using a 30-day rolling average. To determine if you are within your licensed coverage, the rolling average is compared to the number of nodes in the license.
* Spot Security samples the number of protected nodes hourly, then creates a daily average based on these samples. The preceding 30 daily averages are averaged to determine the node consumption.  
* You will be notified of excess consumption and given a 30-day grace period to buy more nodes.
* If there is less than 30 days of data available, the average is calculated using the days available.
* Excess consumption can lead to the depletion of nodes before the subscription term ends.  

Spot Security has the right to shut down the security dashboard when the nodes have been completely consumed and the grace period has also ended.  
