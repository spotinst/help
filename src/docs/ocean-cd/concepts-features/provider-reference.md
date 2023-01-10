# Providers Reference

Ocean CD supports the configuration of a number of different providers through the creation of the Verification Template entity.

This page provides template examples for all of the providers and describes the way they are used in verification templates.  

Ocean CD supports Web Analysis and Job Analysis, although they are not considered as proper providers which should be set in verification providers entities. These should be configured only in the verification templates.

## Supported Providers

Ocean Cd supports the following providers:  

* Prometheus   
* NewRelic
* DataDog
* Cloudwatch
* Web Analysis
* Job Analysis

You can find further details on the parameters used by the providers in the [Entities](ocean-cd/concepts-features/entities) page.

### Prometheus

The Prometheus query in the verification template enables you to receive targeted data during your rollout.  

This template enables you to calculate the sum of the container CPU usage per seconds found in the demo namespace.

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
     query: sum(container_cpu_usage_seconds_total{namespace=\"demo\"})
```

## New Relic

The New Relic query in the verification template enables you to receive targeted data during your rollout.

This template enables you to collect the number of CPU requests when the app label equals the argument called metric-name.

```yaml
kind: "VerificationTemplate"
name: "newrelic"
args:
  - name: " metric-name "
metrics:
  - name: "cpu-utilization"
    interval: "1m"
    count: 3
    successCondition: "result.successRate <= 90"
    failureLimit: 3
    provider:
      newRelic:
        query: "SELECT latest(`k8s.container.cpuRequestedCores`) as successRate FROM Metric FACET `tags.app` WHERE `tags.app` = '{{ args. metric-name }}'\n"
```

## DataDog

The DataDog query in the verification template enables you to receive targeted data during your rollout.

This template enables you to collect the average of the running pods found in your demo namespace.

```yaml
kind: "VerificationTemplate"
name: "datadog"
metrics:
  - name: "error-rate"
    interval: "2s"
    count: 5
    successCondition: "result >= 0.01"
    failureLimit: 3
    provider:
      datadog:
        query: "avg:kubernetes.pods.running{kube_namespace:demo}\n"
```

## Cloudwatch

The Cloudwatch query in the verification template enables you to receive targeted data during your rollout. This is done by using metricDataQueries.  

This template enables you to perform a logical expression based on the healthy and unhealthy instances in your cluster.

Ocean CD supports the configuration of either Expressions or MetricStat in order to create the desired query.  

For additional details on the parameters below, see the [Ocean CD API documentation](https://docs.spot.io/api/#tag/Ocean-CD).  

```yaml
kind: "VerificationTemplate"
name: "cloudwatch"
metrics:
  - name: "error-rate"
    interval: "1m"
    count: 3
    successCondition: "all(result[0].Values, {# < 1})"
    failureLimit: 3
    provider:
      cloudWatch:
        metricDataQueries:
          - id: "healthy-rate"
            expression: "healthy/unhealthy"
            returnData: true
          - id: "unhealthy"
            metricStat:
              metric:
                dimensions:
                  - name: "LoadBalancerName"
                    value: "12334445678"
                metricName: "UnHealthyHostCount"
                namespace: "AWS/ELB"
              period: 300
              stat: "Average"
            returnData: false
          - id: "healthy"
            metricStat:
              metric:
                dimensions:
                  - name: "LoadBalancerName"
                    value: "12334445678"
                metricName: "HealthyHostCount"
                namespace: "AWS/ELB"
              period: 300
              stat: "Average"
            returnData: false
```

## Web-Analysis

A web analysis webhook can be configured in the verification template to receive targeted data during your rollout. This HTTP request is performed against the external service chosen by the user.  

This template enables you to perform a GET request to the mywebhook URL, which in turn returns a full JSON. Through the use of the jsonPath paramater, Ocean CD displays only the request data from the JSON in question.

```yaml
kind: "VerificationTemplate"
name: "webanalysis"
metrics:
 - name: "webanalysis"
   interval: "10s"
   count: 10
   successCondition: "result.ok && result.successPercent >= 0.90"
   provider:
     web:
       url: "https://mywebhook.com"
       jsonPath: "{$.data}"
       insecure: false
```

## Job-Analysis

A Job Analysis which will allow you to configure a Kubernetes Job at any given time during your rollout.

For additional details on the parameters below, see the Ocean CD API documentation.

```yaml
kind: "VerificationTemplate"
name: "jobanalysis"
metrics:
 - name: "jobanalysis"
   dryRun: false
   interval: "60s"
   count: 3
   provider:
     job:
       spec:
         backoffLimit: 3
         template:
           spec:
             containers:
               - command:
                   - "echo"
                   - "welcome to your rollout"
                 image: "public.ecr.aws/nginx/nginx:1.22"
                 name: "nginx"
             restartPolicy: "Never"
```

## What’s next?

Learn how to configure a panel with the [Traffic Manager Reference](ocean-cd/getting-started/traffic-manager-reference).  
