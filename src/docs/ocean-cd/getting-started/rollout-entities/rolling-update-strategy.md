# Rolling Update Strategy  

A rolling update strategy is the default Kubernetes deployment that replaces the existing version of pods with a new version, updating pods slowly one by one.

In this strategy, 100% of the traffic is exposed to the change at the beginning of the rollout and is not configurable on behalf of the users.  

Additional phases including multiple metrics that test the change may be added after the traffic change and may either be sequential or simultaneous.  

A strategy is reusable and can be used and maintained over multiple services and clusters.

The structure of a rolling update strategy is shown in the example below. You can use it as a template for creating your own strategy.   

```yaml
kind: strategy
name: my-strategy-template-rollingupdate
rolling:
 steps:
 - name: My-first-phase
   verification:
     templateNames:
     - my-verification-template
   pause:
     duration: 5m
 - name: My-second-phase
   verification:
     templateNames:
     - my-verification-template
   pause: {}  
```

### Attributes

The attributes of a strategy:

* Name: Name of the strategy. Must be unique and should not exceed 63 characters.
* Steps.Name: Optional. Name of the step.
* Step.Verification.Template.Names: The verification templates you can use in a phase.
* Steps.Pause: Optional. Pause set per phase.
* Steps.Pause.Duration: Optional. The time in seconds, minutes, or hours that you may pause the step. If undefined, a pause in the phase continues indefinitely.

## What's Next?

Learn how Ocean CD manages the [rollout of a new SpotDeployment update](ocean-cd/getting-started/rollout-entities/rolloutspec).
