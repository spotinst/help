# RolloutSpec

RolloutSpec is the definition of how Ocean CD should manage the rollout of a new SpotDeployment update.
Whenever a SpotDeployment is applied to the cluster with a change in its pod spec, Ocean CD deploys it according to its RolloutSpec.

The RolloutSpec definition includes the managed SpotDeployments, its target environments, what deployment strategy to use, unique traffic definitions and a policy in the case of a failure.

Whenever a workload is applied to the cluster, Ocean CD uses the rolloutSpec logic you defined for that workload to run the CD process.

The structure of a rolloutSpec is shown in the example below (and in the [public repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples)), which you can use as a template for creating your own rolloutSpec:

```yaml
kind: RolloutSpec
name: my-rolloutspec-template
spotDeployment:
 clusterId: string
 namespace: string
 name: string
strategy:
 name: my-strategy-template
 args:
 - name: app
   value: service
   valueFrom:
     fieldRef:
       fieldPath: metadata.labels['app']
traffic:
 canaryService: canary
 stableService: stable
failurePolicy:
 action: abort
```

### Attributes   

The attributes of a rolloutSpec are described below.

* Name: The name of the rolloutSpec. Must be unique.
* Spot.Deployment.Cluster Id: Cluster Name. This is not the Ocean Cluster Identifier. The name must be unique to Ocean CD.
* Spot.Deployment.Namespace: Cluster Namespace
* Spot.Deployment.Name: CRD Name
* Strategy.Name: The name of the strategy. You can use a strategy that was already created if you dont want to create a new one.
* Strategy.Args.Name: Optional. The name of the argument set in your verification template. **The Argument value must only be set if it is not provided as part of the verification template**.
* Strategy.Args.Value: Optional. The static value you wish to provide to your argument.  
  - Note: This is required only if the value was not set as part of the verification template.
* Strategy.Args.Value From FieldRef.fieldPath: Optional. The dynamic value you want to provide your argument with. You can either have a dynamic or a static value per argument name, but not both.  
  - Note: This is required only if the value was not set as part of the verification template.   
* Traffic: Kubernetes services or optional traffic manager (link) you have chosen.  
* Failure.Policy: The automatic action or actions Ocean CD performs in the case of a failure. Ocean CD supports Abort, Pause and Promote. For more details see the verifications page.  

## What's Next?

Learn how to [trigger a rollout](ocean-cd/getting-started/trigger-rollout).
