# Trigger Rollouts with ConfigMap

Ocean CD enables you to update SpotDeployments and trigger rollouts accordingly through the change of a ConfigMap.  

This feature is designed for users or processes that deploy new versions through the use of ConfigMap, instead of applying changes directly to their SpotDeployment manifest.  

This tutorial describes how to use the feature together with Ocean CD:  

1. Create and apply a ConfigMap YAML in your cluster. An example of a manifest:  

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myconfigmap
  namespace: mynamespace
data:
  example: firstconfigmap
```

2. Refer your ConfigMap to your SpotDeployment using the Volumes Object and apply the change into your cluster. An example of a referral:  

```yaml
apiVersion: spot.io/v1beta1
kind: SpotDeployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
  annotations:
    oceancd.spot.io/configmaps.mode: "auto"
spec:
  replicas: 5
  progressDeadlineSeconds: 600
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
        image: nginx:1.21.0
        ports:
        - containerPort: 8080
        volumeMounts:
        - name: config-volume
          mountPath: /etc/config
      volumes:
        - name: config-volume
          configMap:
            name: myconfigmap
```

**Note**: The annotation added to the example is compulsory. It ensures that the ConfigMap feature described above is enabled.   

3. Ensure that the connection between the ConfigMap and your SpotDeployment was performed in your terminal using the following command:  

`kubectl describe configmap myconfigmap -n mynamespace`

The following output is displayed:

```
Name:        myconfigmap

Namespace:    mynamespace

Labels:       < none >

Annotations:  oceancd.spot.io/broadcasting: true

              oceancd.spot.io/dataSum: 559375aefe071e1a5620f90ebb3a5ef1c4239f0af7f31f512ec2a5259e18a986

              oceancd.spot.io/spotdeployment. nginx-deployment: true
```

The annotations and how they work:

* Oceancd.spot.io/broadcasting: Whether or not you want the ConfigMap to be connected to the SpotDeployment. If you want your ConfigMap to not trigger a rollout upon changes, momentarily or for a longer period, set this to false.  

* Oceancd.spot.io/dataSum: An internal hash number depicting the difference between two ConfigMap versions.  

* Oceancd.spot.io/spotdeployment.nginx-deployment: An additional annotation added in case more than one SpotDeployment is related to your ConfigMap. This gives you the flexibility to disconnect specific SpotDeployments partially from the ConfigMap.

4. Update your ConfigMap YAML, apply it in your cluster, and monitor your newly triggered rollout.

## What's Next?

Learn how to [create multiple SpotDeployments per rolloutSpec](ocean-cd/concepts-features/trigger-configmap).
