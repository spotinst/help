# Verification Template

The Verification Template includes a set of metrics that need to be analyzed during the rollout. It defines the provider the data is collected from, how to perform the analysis, its frequency, and the values that are considered successful or failed (and trigger a failure policy). The Verification Template may be parameterized with input values.

The template is reusable and can be used and maintained over multiple services and clusters. An example of a structure is as follows:

```yaml
kind: verificationTemplate
name: my-verification-template
args:
  - name: my-secret-name
    value: my-value
    secretKeyRef:
      name: string
      key: string
metrics:
  - name: cpu-usage
    interval: 5m
    initialDelay: 1m
    count: 10
    successCondition: result[0] <= 0.95
    failureCondition: result[0] >= 1.2
    failureLimit: 0
    consecutiveErrorLimit: 0
    provider:
      prometheus:
        query: sum(container_cpu_usage_seconds_total{namespace=\"demo\", endpoint=\"{{args.metric-name}}\"})
```

### Attributes

The attributes of a verification template are described below:

* Name: The name of the verification template. Must be unique.
* Arguments.Name: The name of the arguments set as part of your query.   
* Arguments.Value: Optional. This field should be used if you want the same value to be used for this specific verification template. For more argument value flexibility you can set the value as part of the RolloutSpec instead.
* Arguments.SecretKeyRef: Optional. This field should be used if you wish to set credentials as part of your arguments. A SecretKeyRef can only be set as part of a verification template.  
* Metrics.Name: The name of the metric you want to test.   
* Metric.Count: The number of times you want to run the measurement. If both interval and count are omitted, the effective count is 1.  
* Metric.Interval: The interval string (30s, 5m, 1h) between each verification measurement. If an interval is omitted, a single measurement is performed. An interval is required whenever the count is higher than 1.    
* Metrics.Failure.Condition: The expression that determines if a measurement is failed. This can not be configured together with the Metrics.Success.Condition.
* Metrics.Success.Condition: The expression that determines if a measurement is successful. This can not be configured together with the Metrics.Failure.Condition.  
* Metric.Failure.Limit: The maximum number of times the measurement is allowed to fail before the entire metric is considered failed. The default is 0.  
* Metric.Consecutive.Error.Limit: The maximum number of times the measurement is allowed to fail in succession before the metric is considered failed. The default is 4.
* Metric.Initial.Delay: The time it takes to start the metric measurements.
* Provider: The name of the monitoring tool you chose for the metric. Currently supported: Prometheus, NewRelic, DataDog, Cloudwatch, Web Analysis and Job Analysis. For more information see [Verification Providers](ocean-cd/getting-started/rollout-entities/verification-provider).

## What’s Next?

Learn about the [Canary Strategy](ocean-cd/getting-started/rollout-entities/canary-strategy).  
