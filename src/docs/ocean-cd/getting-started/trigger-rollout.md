# Trigger a Rollout

To trigger your rollout, follow the tutorial below:  

1. Make one or more changes to the SpotDeployment.Spec object of the SpotDeployment created

2. Apply it accordingly by running the following command:

```
kubectl apply –f <SD YAML> -n <namespace>
```

Both actions instantly trigger a rollout, which you can see in the Spot console.

## What's Next?

View examples of [traffic managers](ocean-cd/getting-started/traffic-manager-reference) and [verification providers](ocean-cd/concepts-features/provider-reference).  
