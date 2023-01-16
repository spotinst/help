# Entities

For each deployment, Ocean CD uses four distinct entities in order to carry out the rollout of your choice. These include a Verification Provider, Verification Template, Strategy and RolloutSpec.  

This page describes the meaning of these entities, and explains the signification of each parameter.

## Verification Provider  

The Ocean CD Verification Provider enables you to configure the credentials of the chosen monitoring tool.  
The Verification Provider is reusable and can be used and maintained over multiple services and clusters. An example of a structure is as follows:  

```yaml
kind: verificationProvider
name: My-verification-provider
clusterIds:
- cluster-name
prometheus:
 address: address-name
```

### Attributes

The attributes of a verification provider are described below.

* Name: The name of the verification provider. Must be unique.
* Cluster ID: The list of the clusters that use these credentials.
* Provider: The provider type Ocean CD offers. Currently supported: DataDog, Prometheus, NewRelic and Cloudwatch.
* Provider.Credentials: Credentials belonging to the provider you have chosen.

**If you use Cloudwatch and Gitops tools, you need to disregard the changes to Argo’s service account. Ocean CD updates the service account in question with the ARN provided**.

## Verification Template   

The Ocean CD Verification Template enables you to set the rules of your verifications. It acts as a key verification entity that associates your arguments, queries, and the monitoring tool of your choice. The template is reusable and can be used and maintained over multiple services and clusters. An example of a structure is as follows:

```yaml
kind: verificationTemplate
name: prometheus
args:
- name: metric-name
metrics:
- name: cpu-usage
 interval: 5m
 initialDelay: 1m
 count: 10
 successCondition: result[0] <= 0.95
 failureCondition: result[0] >= 1.2
 failureLimit: 0
 inconclusiveLimit: 0
 consecutiveErrorLimit: 0
 provider:
   prometheus:
     query: sum(container_cpu_usage_seconds_total{namespace=\"demo\", endpoint=\"{{args.metric-name}}\"})
```

### Attributes
The attributes of a verification template are described below.

* Name: The name of the verification template. Must be unique.
* arguments.Name: The name of the arguments only. An argument allows you to configure into the query a static or dynamic reference. The value of each argument is configured in the [rolloutspec](ocean-cd/concepts-features/entities?id=rolloutspec).  
* metrics.Name: The name of the metric you want to test.
* metric.Count: The number of times you want to run the measurement. If both interval and count are omitted, the effective count is 1.  
* metric.Interval: The interval string (30s, 5m, 1h) between each verification measurement. If an interval is omitted, a single measurement is performed. An interval is required whenever the count is higher than 1.  
* metrics.Failure.Condition: The expression which determines if a measurement is failed.
* metrics.Success.Condition: The expression which determines if a measurement is successful.  
* metric.Failure.Limit: The maximum number of times the measurement is allowed to fail before the entire metric is considered failed. The default is 0.  
* metric.Consecutive.Error.Limit: The maximum number of times the measurement is allowed to fail in succession before the metric is considered failed. The default is 4.
* metric.Initial.Delay: The time it takes to start the metric measurements.
* metric.Inconclusive: The maximum number of times the measurement is allowed to measure inconclusive before the entire metric is considered inconclusive. The default is 0. For more information, see [verifications](ocean-cd/concepts-features/verifications).
* Provider: The name of the monitoring tool you have chosen for the metric. Currently supported: Prometheus, NewRelic, DataDog, Cloudwatch, Web Analysis and Job Analysis. For more information see the providers reference page.

## Strategy

An Ocean CD strategy enables you to configure a definition of phases and verifications that manage the way your workload changes are exposed in the desired cluster and namespace. A strategy is reusable and can be used and maintained over multiple services and clusters.

The structure of a strategy is shown in the example below. You can use it as a template for creating your own strategy.   

```yaml
kind: Strategy
name: Strategy-OceanCD
canary:
 backgroundVerification:
   templateNames:
   - My-first-verification
 steps:
 - name: My-first-phase
   setWeight: 20
   verification:
     templateNames:
     - My-first-verification
   pause:
     duration: 5m
 - name: My-second-phase
   setWeight: 80
   verification:
     templateNames:
     - My-first-verification
   pause: {}
```

### Attributes

The attributes of a strategy:

* Name: Name of the strategy. Must be unique and should not exceed 63 characters.
* background.Verification.Template.Names: The verification templates you can run throughout the rollout without being dedicated to one phase only. For more information see the verifications.
* steps.Name: Optional. Name of the step.
* steps.Set.Weight: The weight percentage of the step. Weight cannot be less than or equal to the weight set in the previous step. The total of the weight must not exceed 100. If the total weight is less than 100, Ocean CD adds on to the last phase until the total equals 100.  
* step.Verification.Template.Names: The verification templates you can use within a phase.
* steps.Pause: Optional. Pause to be set per phase.
* steps.Pause.Duration: Optional. The time in seconds, minutes, or hours that you may pause the step. If undefined, a pause in the phase continues indefinitely.

## RolloutSpec

The Ocean CD rollout specification includes the CD process description for the chosen workload. The rolloutSpec is a key entity that associates all of the basic elements:

* The Spot Deployment.
* The values of the argument set in your verification template. For more information, see Verifications.
* The strategy to assign the Spot Deployment.
* The traffic objects that, together with the strategy, run the rollout process.
* Failure policy, in case something is not working as expected according to the strategy. For more information, see the Verifications page.

> Tip: A rolloutSpec is applicable only to the cluster it is in. It cannot be used in other clusters.

Whenever a workload is applied to the cluster, Ocean CD uses the rolloutSpec logic you defined for that workload to run the CD process.  

The structure of a rolloutSpec is shown in the example below (and in the [public repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples)), which you
can use as a template for creating your own rolloutSpec:

```yaml
kind: RolloutSpec
name: service-rolloutspec
spotDeployment:
 clusterId: string
 namespace: string
 name: string
strategy:
 name: service-rolloutspec
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
* spot.Deployment.Cluster Id: Cluster Name. This is not the Ocean Cluster Identifier. The name must be unique to Ocean CD.
* spot.Deployment.Namespace: Cluster Namespace
* spot.Deployment.Name: CRD Name
* strategy.Name: The name of the strategy. You can use a strategy that was already created and you do not need to create a new one.
* strategy.Args.Name: The name of the argument set in your verification template.
* strategy.Args.Value: The static value you wish to provide to your argument.
* strategy.Args.Value From FieldRef.fieldPath: The dynamic value you want to provide your argument with. You can either have a dynamic or a static value per argument name.  
* Traffic: Kubernetes services or optional [traffic manager](ocean-cd/getting-started/traffic-manager-reference) you have chosen.  
* failure.Policy: The automatic action/s Ocean CD performs in the case of a failure. Ocean CD supports Abort, Pause and Promote. For more details see the verifications page.

You can create your [rolloutSpec](ocean-cd/getting-started/) either in the Spot console or by using the Ocean CD API.

## What’s Next?

Learn more about integrating [verifications](ocean-cd/concepts-features/verifications) into your CD process.
