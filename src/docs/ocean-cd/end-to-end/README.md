# End-to-End Setup 

This procedure describes how to install the Ocean CD operator and the entities using the Spot console’s QuickStart guide. This procedure describes how to set up the necessary components to quickly deploy your first rollout using the Spot console.  

## Prerequisites 

* A Kubernetes cluster running (cloud agnostic) 
* At least one worker node running 

## Step 1: Install the Operator Manager 

Install the operator manager to connect your cluster to Ocean CD. 

In the left main menu, click **Ocean CD** and then click **Settings**. If you are connecting your first Ocean CD cluster, complete the following steps: 

1. Click **+ Add Cluster**.   

![end-to-end-ui-1](https://github.com/spotinst/help/assets/106514736/fa6de04c-474c-46c4-994e-c9b150119896)

2. Complete the following information: 

* Cluster Identifier: This is a logical identifier for your cluster that must be unique and have up to 30 alphanumeric characters without any spaces. You can choose any ID and it does not need to be coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. 

* Spot API Token: This token is required for authentication and authorization of your API requests. 

3. Run the following command:  

```
helm repo add oceancd https://charts.oceancd.io 

helm repo update 

helm install my-release oceancd/spot-oceancd-operator \ 
  --namespace oceancd \ 
  --create-namespace \ 
  --set token= \ 
  --set clusterId= \
```
 
When the Ocean CD operator is installed, you can create your Kubernetes entities: Services and SpotDeployment.  

## Step 2: Create a Namespace and Service 

When a namespace is created, create the canary and stable services to expose and manage the traffic that is divided between the canary and stable replicasets. 

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
2. In the Spot Deployment step, select your existing cluster ID, Spot Deployment and namespace.  
3. In the Verification Provider step, enter the information of your chosen provider. The quick start panel automatically populates YAML templates for all the Ocean CD entities required to support a canary deployment in seconds. 

![end-to-end-ui-2](https://github.com/spotinst/help/assets/106514736/3465677e-22b1-476a-a10f-b7121dc750e1)

4. Click **Create Resources** and review the Ocean CD entities in the Settings tab.

<img width="1413" alt="end-to-end-ui-3" src="https://github.com/spotinst/help/assets/106514736/5c80e0c0-1d3a-4d85-bf3b-f86d063efbc1">

Learn more about [Ocean CD entities](ocean-cd/getting-started/rollout-entities/).

## Step 5: Trigger a Rollout

You can trigger your very first rollout. Change the pod spec template such as the image (for example: public.ecr.aws/nginx/nginx:latest) in your SpotDeployment yaml and run the following command:

`kubectl apply -f <SpotDeployment YAML>`

A new canary rollout is initiated in the [All Rollouts](ocean-cd/tutorials/view-rollouts/) table. Click the Rollout ID of your deployment to view the detailed rollout page and take action from the console.

## What’s Next?

Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/).

Ready to start using more advanced verifications and features? Check Spot's [hands-on Ocean CD workshop](https://www.spotk8s.com/oceancd.html).
