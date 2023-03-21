# Rollout Entities

Ocean CD entities are YAML templates where you can set the rules of how the rollouts will run.  

The following sections provide a template and an explanation of each entity as well as its parameters descriptions.  

The entities are as follows:   

**Verification Provider**- The source from which data is being collected and analyzed during a rollout.

**Verification Template** - A set of metrics that need to be analyzed during the rollout, and the values that are considered successful or failed.

**Strategy** - A set of phases that define how a change in a SpotDeployment will roll out. Two strategy types are supported: Canary & Rolling Update.  

**RolloutSpec** - The definition of how to manage the rollout of a specific SpotDeployment or more.

## What’s Next?

Learn more about the [features in your CD process]((https://docs.spot.io/ocean-cd/concepts-features/).
