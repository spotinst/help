# Verification Providers

As part of the verification processes Ocean CD supports, credentials to the monitoring tools must be configured through the creation of the Verification Provider entity.

This page provides template examples of the required credentials and fields in order to enable Ocean CD to fetch data from your monitoring tool.   

## Supported Providers

Ocean CD supports the following providers:  

* Prometheus
* NewRelic  
* DataDog
* Cloudwatch

### Prometheus

```yaml
kind: verificationProvider
name: my-verification-provider
clusterIds:
  - cluster-name-1
  - cluster-name-2
prometheus:
  address: http://<svc name>.<ns name>.svc.cluster.local:<portnumber>
```  

### NewRelic

```yaml
kind: verificationProvider
name: my-verification-provider
clusters:
  - cluster-name-1
newRelic:
  personalApiKey: <personalApiKey-newrelic>
  accountId: <accountid-newrelic>
  region: "us"
```  

For more information on how to retrieve the data above, see the official NewRelic documentation: https://docs.newrelic.com/docs/accounts/accounts-billing/general-account-settings/intro-account-settings/.

### DataDog

```yaml
kind: verificationProvider
name: my-verification-provider
clusters:
  - cluster-name-1
datadog:
  address: https://api.datadoghq.com
  apiKey: <apiKey-datadog>
  appKey: <appKey-datadog>
```

For more information on how to retrieve the data above, see the official DataDog documentation: https://docs.datadoghq.com/account_management/api-app-keys/.

### Cloudwatch

```yaml
kind: verificationProvider
name: my-verification-provider
clusters:
  - cluster-name-1
cloudWatch:
  iamArn: arn:aws:iam::123456789012:role/MyRole
```

For more information on how to retrieve the data above, see the official CloudWatch documentation: https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html

## What’s next?

Take a look at our [features](https://docs.spot.io/ocean-cd/concepts-features/).  
