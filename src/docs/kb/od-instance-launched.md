<meta name="“robots”" content="“noindex”">

# On-Demand Instance Launched When Spot Instances in Other Markets Are Available

## Question

Why is an on-demand instance launched instead of a spot instance even if a spot instance is available in the markets selected in the Elastigroup?

## Answer

<font color="#7632FE">are the 2 hyperlinks below correct?</font>

You can set [Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) for cluster orientation in Elastigroup. Despite this, Spot may prioritize a certain availability zone to maintain equal distribution. 

An [Elastigroup may have Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) set for cluster orientation, but the system sometimes prioritizes a certain availability zone to maintain equal distribution. When no spot instances are available, an on-demand instance spins up in the relevant availability zone. If it’s not possible to start an on-demand instance in the same market, it starts in a different market.

An on-demand instance may not start, for example, if it hits an AWS instance type limit. This is like an on-demand instance that didn’t launch successfully and was replaced with spot instances in a different market.
