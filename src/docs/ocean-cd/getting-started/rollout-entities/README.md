# Rollout Entities

Ocean CD entities are YAML templates where you can set the rules of how the rollouts will run.  

The following sections provide a template and an explanation of each entity as well as its parameters descriptions.  

The entities are as follows:   

**Verification Provider**- The source from which data is being collected and analyzed during a rollout.

**Verification Template** - A set of metrics that need to be analyzed during the rollout, and the values that are considered successful or failed.

**Strategy** - A set of phases that define how a change in a SpotDeployment will roll out. Two strategy types are supported: Canary & Rolling Update.  

**RolloutSpec** - The definition of how to manage the rollout of a specific SpotDeployment or more.

> **Note**: The above SaaS entities should not be applied using the “kubectl commands”. They can be configured using either the Spot console, using [CLI](https://github.com/spotinst/spot-oceancd-cli#ocean-cd-entities), or using the Spot [API](https://docs.spot.io/api/#tag/Ocean-CD).

## What’s Next?

Learn more about the [features in your CD process](ocean-cd/concepts-features/).
