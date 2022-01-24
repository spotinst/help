<meta name="robots" content="noindex">

# Market Scoring & Managing Interruptions

This article explains how Elastigroup manages the replacement of instances in spot markets with predicted interruptions to ensure that your workloads remain available, as well as how Elastigroup handles the process of ranking (scoring) spot instance markets.

## How Interruption Management Works

1. Elastigroup detects an unstable spot market, based on patterns in past interruptions and real-time market analytics.
2. If other spot markets are available, a new instance is launched in the least expensive market and the old instance is drained and terminated.
3. If other spot markets aren't available, Elastigroup activates the Fallback to On-Demand process in which an On-Demand instance is launched and the old instance is drained and terminated.

## Spot Instance Replacement

The flow chart below shows an overview of how the spot instance replacement takes place.

<img src="/elastigroup/_media/corefeatures-interruptions-01.png" width="448" height="507" />

## Fix Strategy

Elastigroup continuously monitors spot markets to identify available markets for workloads currently running on On-Demand instances. When a spot market becomes available, a new spot instance is launched and the old On-Demand instance is drained and terminated.

<img src="/elastigroup/_media/corefeatures-interruptions-02.png" />

## Spot Market Scoring

Spot markets are defined as the supply and demand for a specific instance type, at a specific spot price in a specific availability zone, for a specific product (Linux/Windows). Spot markets are ranked by Elastigroup based on real-time and historical data on availability and cost, enabling Elastigroup to predict interruptions to instances in a market in enough time to take appropriate action. This advance notification of upcoming interruptions is what triggers the spot instance replacement and ensures the continuous availability of your workloads.
