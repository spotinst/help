# Override Strategy

When you change the strategy as part of the RolloutSpec, the change is implemented for all subsequent rollouts. However, there may be times when you want to momentarily override your strategy, to test a new one without having to change the rolloutSpec you have already created.  

OceanCD provides a method to do so by adding an annotation to your SpotDeployment manifest. As long as the annotation exists, the overridden strategy is used as part of your rollouts.  

Note: If the strategy that was added as a part of the annotation does not exist, the one set as part of the RolloutSpec will be used.

## Set Strategy for Specific Rollout

To set a strategy for a specific rollout, add a new annotation to your SpotDeployment:  

`oceancd.spot.io/strategy: <Strategy Name>`

```yaml
apiVersion: spot.io/v1beta1
kind: SpotDeployment
metadata:
  name: nginx-deployment
  namespace: oceancd-workshop
  labels:
    app: nginx
  annotations:
    oceancd.spot.io/strategy: newstrategy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: public.ecr.aws/nginx/nginx:1.22
        ports:
        - containerPort: 8080
```

To override successfully, use an existing strategy.  

## Status Indication

The Spot console updates the success or failure of the process.  

The success of an override is displayed in the Spot console. In the Detailed Rollout page, click Rollout details.

The failure of an override is displayed as shown below:

<img src="/ocean-cd/_media/override-strategy-3.png" />

## What’s Next

Learn how to use the [provider's reference](ocean-cd/concepts-features/provider-reference.md).  
