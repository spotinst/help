# Override Strategy

When you change the strategy in the RolloutSpec, this change is implemented for all subsequent rollouts. If you wish to change the strategy for a specific rollout only, Ocean CD provides a method to do so. Once the rollout is completed, subsequent rollouts will revert to the strategy that is saved in the RolloutSpec. If you need a permanent change to the strategy, then you will need to use the usual method of changing the strategy in the RolloutSpec.

## Set Strategy for Specific Rollout

To set a strategy for a specific rollout, add a new annotation to your SpotDeployment:  

`oceancd.spot.io/strategy: <Strategy Name>`

If the annotation is in the SpotDeployment, the strategy set in the SpotDeployment is the strategy Ocean CD uses for upcoming rollouts.  

<img src="/ocean-cd/_media/override-strategy-1.png" />

To override successfully, use an existing strategy.  

## Status Indication

The Spot console updates the success or failure of the process.  

The success of an override is displayed as shown below:

<img src="/ocean-cd/_media/override-strategy-2.png" />

The failure of an override is displayed as shown below:

<img src="/ocean-cd/_media/override-strategy-3.png" />

## What’s Next

Learn how to use the Provider's reference (link).  
