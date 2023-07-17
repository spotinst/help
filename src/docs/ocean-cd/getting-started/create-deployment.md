# Create Spot Deployment

SpotDeployment is the Ocean CD custom resource (CRD) that provides advanced deployment capabilities of workloads in Kubernetes.  

The SpotDeployment CRD replaces the standard Kubernetes deployment so Ocean CD can manage it using progressive deployment strategies.

There are two ways of creating SpotDeployments:

* Migrating a SpotDeployment from a Deployment YAML.
* Creating a SpotDeployment from scratch.

## Option 1: Migrate your SpotDeployment

In order to migrate a SpotDeployment complete the following steps:  

1. Copy the deployment.  

2. Change the apiVersion and kind.  

3. Apply your SpotDeployment using the command:

`kubectl apply -f <SD YAML> -n <namespace>`.

<img src="/ocean-cd/_media/migrate-api-1.png" />

If your deployment contains the strategy object supported by Kubernetes, the migration to SpotDeployment will not succeed. Remove the deployment accordingly before creating the changes.

## Option 2: Create your SpotDeployment

In order to create a SpotDeployment from scratch complete the following steps:

1. Copy the SpotDeployment template below.
2. Apply your SpotDeployment using the command:

`kubectl apply -f <SD YAML> -n <namespace>`

```yaml
apiVersion: spot.io/v1beta1
kind: SpotDeployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
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
        image: nginx:1.21.0
        ports:
        - containerPort: 8080
```

## What’s Next?

Learn how to [create Ocean CD entities](ocean-cd/getting-started/rollout-entities/).  
