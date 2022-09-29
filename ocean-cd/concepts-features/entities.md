# Entities

For each deployment, Ocean CD makes use of a strategy and a rolloutSpec. You will use these entities to configure the specific behavior of the deployment.

In addition, you can optionally include verifications in a deployment by defining the verification entities: verification template and verification provider. These entities are described in detail below.

## Strategy

An Ocean CD strategy includes a definition of phases and verifications that manage the way your workload changes are exposed in the desired cluster and namespace. A strategy is reusable and can be used and maintained over multiple services and clusters.

Whenever your workload is applied to the cluster, Ocean CD uses the strategy as part of the rolloutSpec logic to run the CD process.  

### Example Structure

The structure of a strategy is shown in the example below, which you may use as a template for creating your own strategy. Additional examples of a strategy and all the entities are shown on the Ocean CD public repository.

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

The attributes of a strategy are described below.
- Name: Name of the strategy. Must be unique and should not exceed 63 characters.
- Backgroundverification.templateNames: The verification templates you can use in the background.
- Steps.name: Optional. Name of the step.
- Steps.setWeight: Weight percentage of the step. A weight cannot be less than or equal to the weight set in the previous step. The total of the weights must not exceed 100. If the total weights are less than 100, Ocean CD will add on to the last phase until the total equals 100.
- Step.verification.templateNames: The verification templates you can use within a phase
- Steps.pause: Optional. Pause to be set per phase.
- Steps.pause.duration: Optional. The time in seconds, minutes, or hours that you may pause the step. If undefined, a pause in the phase will continue indefinitely..

## RolloutSpec

The Ocean CD rollout specification includes the CD process description for the selected workload. The rolloutSpec is a key entity which associates all of the basic elements:
- The SpotDeployment
- The argument values set in your verification template. For more information, see Verifications(link to page.
- The strategy to assign the SpotDeployment
- The traffic objects that, together with the strategy, run the rollout process
- Failure policy, in case something is not working as expected according to the strategy. For more information, see Verifications(link to page.

> **Tip**: A rolloutSpec is applicable only to the cluster it is in. It cannot be used in other clusters.

Whenever a workload is applied to the cluster, Ocean CD will use the rolloutSpec logic you defined for that workload to run the CD process.

### Example Structure

The structure of a rolloutSpec is shown in the example below (and in the public repository), which you may use as a template for creating your own rolloutSpec.

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
​
The attributes of a rolloutSpec are described below.
- Name: Name of the rolloutSpec. Must be unique.
- SpotDeployment.ClusterId: Cluster Name. This is not the Ocean Cluster Identifier. The name must be unique to Ocean CD.
- SpotDeployment.Namespace: Cluster Namespace
- SpotDeployment.Name: CRD Name
- Strategy.name: Name of the Strategy. You may use an already created strategy and do not need to create a new one.
- Strategy.args: The value of the argument set in your verification template. It can either be set as static or as a reference.
- Traffic: Kubernetes services or optional traffic manager (link) you have chosen.
- FailurePolicy: The automatic action(s) OceanCD performs in case of a failure.

You can create your rolloutSpec (link to Getting Started) either in the Spot console or by using the Ocean CD API.

## Verification Template

The Ocean CD verification template includes the metrics you wish to perform while your rollout is in progress. The verification template is a key verification entity which associates your arguments, queries, the monitoring tool of your choice. Such an entity is reusable and can be used and maintained over multiple services and clusters.

### Example Structure

```yaml
kind: verificationTemplate
name: My-first-verification
args:
- name: My-argument
metrics:
- name: My-first-metric
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
     query: My-query
```

### Attributes

The attributes of a  verification template are described below.
- Name: Name of the verification template. Must be unique.
- Arguments.Name: Name of the arguments you wish to insert.
- Metrics.Name: Name of the metric you wish to test.
- Metric.Count: The number of times you wish to run the measurement. If both interval and count are omitted, the effective count is 1.
- Metric.Interval: The interval string (30s, 5m, 1h) between each verification measurement. If Interval is omitted, a single measurement is performed. Interval is required whenever the count is higher than 1.
- Metrics.FailureCondition: The expression which determines if a measurement is considered failed.
- Metrics.SuccessCondition: The expression which determines if a measurement is considered successful.
- Metric.FailureLimit: The maximum number of times the measurement is allowed to fail before the entire metric is considered failed.  Default is 0.
- Metric.consecutiveErrorLimit: The maximum number of times the measurement is allowed to fail in succession before the metric is considered failed. Default is 4.
- Metric.initialDelay: The time to wait before starting the metric measurements.
- Metric.Inconclusive: The maximum number of times the measurement is allowed to measure Inconclusive before the entire metric is considered Inconclusive. Default is 0. For more information, see Verifications(link to page.
- Provider: The name of the monitoring tool you have chosen for the metric. Currently supported: Prometheus, NewRelic, DataDog, Cloudwatch, and Web Analysis.

## Verification Provider

The Ocean CD verification provider includes the credentials of the monitoring tool as well as the clusterID of the cluster for which you will use the credentials. Only one of each provider type can be set per cluster.

### Example Structure

```yaml
kind: verificationProvider
name: My-verification-provider
clusterIds:
- cluster-name
datadog:
 address: address-name
 apiKey: apiKey-Credentials
 appKey: appKey-Credentials
```

### Attributes

The attributes of a verification provider are described below.
- Name: Name of the verification provider. Must be unique.
- ClusterID: Name of the cluster for which you are setting the credentials.
- Provider: The type of provider. Currently supported: DataDog, Prometheus, NewRelic and Cloudwatch
- Provider.Credentials: Credentials belonging to the provider you have chosen.

## What’s Next?

Learn more about integrating [verifications](ocean-cd/concepts-features/verifications) into your CD process.
