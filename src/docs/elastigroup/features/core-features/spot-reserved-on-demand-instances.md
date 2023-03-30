# On-Demand, Spot & Reserved Instances

This article briefly describes the most common pricing models on AWS, but all cloud providers offer the same three pricing models with varying conditions. Elastigroup utilizes these pricing models to ensure that your computing cluster is always cost-optimized. To learn more about your cloud provider's pricing, visit their website.

## On-Demand Instances

In the On-Demand pricing model, users pay only for the instances they run. This is the standard pricing model for all cloud providers and the base price for all discounted models.

## Spot Instances

AWS provide their spare compute capacity, known as Spot Instances, at a heavily reduced price, which varies based on supply and demand, but may be interrupted should the capacity be needed for Reserved or On-Demand computing. Spot Instance pricing can be up to 80% less than On-Demand pricing.

## Reserved Instances

AWS offers a discount of 31-75% in exchange for a long-term commitment. The exact discount depends on the length of commitment (1 or 3 years), the amount paid up-front, and whether you would like to be able to change the instance reserved for you.

## Utilize Commitment Plans 

Elastigroup assists in optimizing the utilization of account commitment plans to ensure minimal waste. The Utilize Commitment Plans feature enables Elastigroup to check On-demand instances to ensure there aren’t any vacant savings plans or reserved instances that match instance types defined in its configuration.  
Note: The default behavior of this feature is to utilize commitment plans associated to the connected cloud account. If you want to enable cross-account utilization, contact our support team.  

## What's Next?

- Get started and [launch your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-aws).
- Learn more about [how Spot works](elastigroup/features/core-features/market-scoring-managing-interruptions).
