# End-to-End Setup- Spot  

This procedure describes how to install the Ocean CD operator and the entities using the Spot console’s QuickStart guide. This procedure describes how to set up the necessary components to quickly deploy your first rollout using the Spot console. 

## Prerequisites 

* A Kubernetes cluster running (cloud agnostic) 
* At least one worker node running 

## Step 1: Install the Operator 

Install the operator to connect your cluster to Ocean CD. 

**OLM allows Ocean CD to deploy Spot's operator and provides a declarative way to manage and upgrade Ocean CD components.** 

1. In the left main menu, click Ocean CD and then click Quick start. If you are connecting your first Ocean CD cluster, complete the following steps: 

<img src="/ocean-cd/_media/end-to-end-1.png" width="500"/>

* **Cluster Identifier**: This is a logical identifier for your cluster that must be unique and have up to 30 alphanumeric characters without any spaces. You can choose any ID and it does not need to be coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. 

8 **Argo Rollout Installation**: Ocean CD uses Argo rollouts as an underlying engine to facilitate rollouts and is required to trigger rollouts. 

2. Download the YAML and apply it to your Kubernetes cluster. 

`kubectl apply -f <Name of the YAML>` 

When the process is complete and the operator pods are running, your cluster appears in the Cluster Settings section. 

<img src="/ocean-cd/_media/getting-started-n04.png" />  

**Tip**: Once you have downloaded the YAML, the new row remains with partial information for five minutes. If five minutes elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at a different time, and the Ocean CD displays the new data accordingly. 

Once the Ocean CD operator is installed you can create your Kubernetes entities: Services and SpotDeployment. 

## Step 2: Create a Namespace and Service 

When a namespace is created, create the canary and stable services to expose and manage the traffic that is divided between the canary and the stable replicasets. 

_For demo purposes, a traffic manager will not be used._ 

1. Copy and save the following YAML files. Each YAML is dedicated to one service:

```yaml
apiVersion: "v1"
kind: "Service"
metadata:
  name: "rollouts-demo-stable"
  namespace: "oceancd-workshop"
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

```yaml
apiVersion: "v1"
kind: "Service"
metadata:
  name: "rollouts-demo-canary"
  namespace: "oceancd-workshop"
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

2. Run the following command in your cluster for each of your services:

`kubectl apply -f <Service YAML>`

## Step 3: Create a SpotDeployment

To trigger the Ocean CD engine, you are required to use our CRD called SpotDeployment. The difference between a deployment and a SpotDeployment is the API version and kind.

1. Copy and save the following YAML file:

```yaml
apiVersion: "spot.io/v1beta1"
kind: "SpotDeployment"
metadata:
  name: "nginx-deployment"
  namespace: "oceancd-workshop"
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
          image: public.ecr.aws/nginx/nginx:1.22
          ports:
            - containerPort: 8080
```

2. Copy and run the following command in your cluster:

`kubectl apply -f <SpotDeployment YAML>`

After the SpotDeployment and services are created, the remaining steps are to create the Ocean CD entities that act as the rules for your canary deployment to follow.

## Step 4: Create your Ocean CD Resources using the Ocean CD Quick Start

1. In the Ocean CD menu, click **Quick start**. 
2. Select your existing cluster ID, Spot Deployment and Verification Provider (optional). The quick start panel automatically populates YAML templates for all the Ocean CD entities required to support a canary deployment in seconds.

<img width="1226" alt="end-to-end-ui-2" src="https://github.com/spotinst/help/assets/106514736/02e6c72a-43b0-4b26-a57a-997b7260d38c">

3. Click **Create Resources** and review the Ocean CD entities in the Settings tab.

<img width="1413" alt="end-to-end-ui-3" src="https://github.com/spotinst/help/assets/106514736/92d2ae03-e8b0-435e-a09d-69160296fe5b">

Learn more about [Ocean CD entities](ocean-cd/getting-started/rollout-entities/).

## Step 5: Trigger a Rollout

You can trigger your very first rollout. Change the pod spec template such as the image (for example, you may use: public.ecr.aws/nginx/nginx:latest) in your SpotDeployment yaml and run the following command:

`kubectl apply -f <SpotDeployment YAML>`

A new canary rollout is initiated in the [All Rollouts](ocean-cd/tutorials/view-rollouts/) table. Click the Rollout ID of your deployment to view the detailed rollout page and take action from the console.

## What’s Next?

Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/)

Ready to start using more advanced verifications and features? Check our our [hands-on Ocean CD workshop](https://www.spotk8s.com/oceancd.html).
