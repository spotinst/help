# Verification Provider

Verification Provider is the source (data provider and cluster) of the data that is collected and analyzed during a rollout.  

Ocean CD supports a number of different providers such as Prometheus, DataDog, NewRelic and CloudWatch.

The Verification Provider is reusable and can be used and maintained over multiple services and clusters. An example of a structure is as follows:

```yaml
kind: verificationProvider
name: my-verification-provider
clusterIds:
  - cluster-name-1
  - cluster-name-2
prometheus:
  address: http://<svc name>.<ns name>.svc.cluster.local:<portnumber>
```

### Attributes

The attributes of a verification provider are described below.

* Name: The name of the verification provider. Must be unique.
* Cluster ID: The list of the clusters that use these credentials.
* Provider: The provider type Ocean CD offers. Currently supported: DataDog, Prometheus, NewRelic and Cloudwatch.
* Provider.Credentials: Credentials that belong to the provider you have chosen.

**If you use Cloudwatch and Gitops tools, you need to disregard the changes to Argo’s service account. Ocean CD updates the service account in question with the ARN provided**.

## Whats Next?  

Learn about the [verification template](ocean-cd/getting-started/rollout-entities/verification-template).   
