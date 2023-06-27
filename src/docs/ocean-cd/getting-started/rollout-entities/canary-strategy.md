# Canary Strategy

A canary strategy is a deployment that allows you to roll out releases to a predefined traffic weight.

In this strategy, each phase can include the percentage of traffic (users) that are exposed to the change. Each phase can also include multiple metrics that test the change, effect the rollout progress, or build in breaks (Pause).  

A strategy is reusable and can be used and maintained over multiple services and clusters.

The structure of a canary strategy is shown in the example below. You can use it as a template for creating your own strategy.  

```yaml
kind: Strategy
name: my-strategy-template
canary:
 backgroundVerification:
   templateNames:
   - my-verification-template
 steps:
 - name: My-first-phase
   setWeight: 20
   verification:
     templateNames:
     - my-verification-template
   pause:
     duration: 5m
 - name: My-second-phase
   setWeight: 80
   verification:
     templateNames:
     - my-verification-template
   pause: {}
```

### Attributes

The attributes of a strategy:

* Name: Name of the strategy. Must be unique and should not exceed 63 characters.
* Background.Verification.Template.Names: The verification templates you can run throughout the rollout without being dedicated to one phase only. For more information see the verifications.
* Steps.Name: Optional. Name of the step.
* Steps.Set.Weight: The weight percentage of the step. Weight cannot be less than or equal to the weight set in the previous step. The total of the weight must not exceed 100. If the total weight is less than 100, Ocean CD adds on to the last phase until the total equals 100.  
* Step.Verification.Template.Names: The verification templates you can use in a phase.
* Steps.Pause: Optional. Pause set per phase.
* Steps.Pause.Duration: Optional. The time in seconds, minutes, or hours that you may pause the step. If undefined, a pause in the phase continues indefinitely.

## What’s Next?

Learn how to [roll an update strategy](ocean-cd/getting-started/rollout-entities/rolloutspec).  
