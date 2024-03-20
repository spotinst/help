# End-to-End (CLI) Setup

This procedure describes how to install the operator manager, create services and Spot Deployments as well as your Ocean CD entities. This procedure provides end-to-end insights of the Ocean CD flow to successfully trigger your very first deployment.  

## Prerequisites

* Run the Kubernetes cluster in Azure, Google, or Amazon.
* If you are not already connected to Spot, follow the steps in the [enablement process](https://docs.spot.io/connect-your-cloud-provider/first-account/).
* An existing Spot API Token. If you don't have one, you can create one using [this tutorial].(https://docs.spot.io/administration/api/create-api-token?id=create-an-api-token).
* For MacOS users only: Ocean CD’s [CLI tool](https://github.com/spotinst/spot-oceancd-cli#installation) is installed. If it is not installed, run the following command:

`brew install spotinst/tap/oceancd`

`oceancd configure`

* For non MacOS users: use OceanCD’s [API](https://docs.spot.io/api/#tag/Ocean-CD).  
* Helm Installation. If not installed, you can use [this tutorial](https://helm.sh/docs/intro/install/).
* If you are using permit lists or tools like OPA, permit the following images:  
  - docker.io/spotinst/spot-oceancd-operator:$VERSION
  - docker.io/spotinst/spot-oceancd-operator-catalog:latest
  - docker.io/spotinst/spot-oceancd-operator-bundle:$VERSION
  - quay.io/operator-framework/olm
  - quay.io/operatorhubio/catalog:latest

## Step 1: Install the Operator Manager  

Install the operator manager to access your cluster workload to Ocean CD.  

1. In the left main menu, click **Ocean CD** and click **Settings**. 
2. Click **+ Add Cluster**. 

![end-to-end-cli-1](https://github.com/spotinst/help/assets/106514736/29db2cb1-b2ea-4a63-90e0-54380bb11ea2)

3. Complete the information:  

* **Cluster Identifier**: This is a logical identifier for your cluster that must be unique and have up to 30 alphanumeric characters without any spaces. You can choose any ID and it does not need to be coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean.  

* **Spot API Token**: This token is required for authentication and authorization of your API requests.  

4. Run the commands in your cluster: 

![end-to-end-cli-2](https://github.com/spotinst/help/assets/106514736/696d00d8-6d2c-4f7b-874d-61e02206136d)

When the process is complete and the operator pods are running, your cluster appears in the Cluster Settings section.

## Step 2: Create a Namespace and Service

Create a namespace to keep all the Kubernetes entities you create together. 

1. Run the following command: 

`kubectl create ns oceancd-workshop` 

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

## Step 4: Create Verification  

This step focuses on the creation of the verification provider and verification template. These entities enable you to insert data analysis while your deployments run. These deployments can be from any of the supported monitoring tools by Spot. For further information please see the [Verification Providers](ocean-cd/concepts-features/provider-reference) page.

### Install Prometheus

Prometheus is a monitoring tool that is capable of collecting and storing measurements as time-series data.  

The procedure below describes how to install Prometheus, when using an Amazon Kubernetes Cluster.

_If Prometheus is already installed in your cluster, you can skip to the creation of the verification provider entity itself_.

1. Run the following command to deploy Prometheus:

```yaml
kubectl create namespace prometheus
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus \
   --namespace prometheus \
   --set alertmanager.persistentVolume.storageClass="gp2" \
   --set server.persistentVolume.storageClass="gp2"
```

2. Make note of the Prometheus endpoint in the helm response (this is needed later) as follows:

> The Prometheus server can be accessed through port 80 on the following DNS name from your cluster:
`prometheus-server.prometheus.svc.cluster.local`

The DNS name for the verification provider template updates within a number of seconds.  

3. Validate that the Prometheus components are deployed as expected by running the following command:

`kubectl get all -n prometheus`

4. The following response is displayed. All of the pods should be ready and available.

```
NAME  
                                               READY   STATUS    RESTARTS   AGE
pod/prometheus-alertmanager-868f8db8c4-67j2x         2/2     Running   0          78s
pod/prometheus-kube-state-metrics-6df5d44568-c4tkn   1/1     Running   0          78s
pod/prometheus-node-exporter-dh6f4                   1/1     Running   0          78s
pod/prometheus-node-exporter-v8rd8                   1/1     Running   0          78s
pod/prometheus-node-exporter-vcbjq                   1/1     Running   0          78s
pod/prometheus-pushgateway-759689fbc6-hvjjm          1/1     Running   0          78s
pod/prometheus-server-546c64d959-qxbzd               2/2     Running   0          78s
```

```
NAME
                                   TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/prometheus-alertmanager         ClusterIP   10.100.38.47     <none>        80/TCP     78s
service/prometheus-kube-state-metrics   ClusterIP   10.100.165.139   <none>        8080/TCP   78s
service/prometheus-node-exporter        ClusterIP   None             <none>        9100/TCP   78s
service/prometheus-pushgateway          ClusterIP   10.100.150.237   <none>        9091/TCP   78s
service/prometheus-server               ClusterIP   10.100.209.224   <none>        80/TCP     78s
```

```
NAME                                      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE

daemonset.apps/prometheus-node-exporter   3         3         3       3            3           <none>          78s
```

```
NAME                                            READY   UP-TO-DATE   AVAILABLE   AGE

deployment.apps/prometheus-alertmanager         1/1     1            1           78s
deployment.apps/prometheus-kube-state-metrics   1/1     1            1           78s
deployment.apps/prometheus-pushgateway          1/1     1            1           78s
deployment.apps/prometheus-server               1/1     1            1           78s
```

```
NAME                                                       DESIRED   CURRENT   READY   AGE

replicaset.apps/prometheus-alertmanager-868f8db8c4         1         1         1       78s
replicaset.apps/prometheus-kube-state-metrics-6df5d44568   1         1         1       78s
replicaset.apps/prometheus-pushgateway-759689fbc6          1         1         1       78s
replicaset.apps/prometheus-server-546c64d959               1         1         1       78s
```

### Create a Verification Provider

1. When Prometheus is installed, you can create the verification provider. Set your address by copying and saving the following YAML file:

```yaml
kind: "VerificationProvider"
name: "prometheus-vp"
clusterIds:
 - "cluster-name"
prometheus:
 address: "http://prometheus-server.prometheus.svc.cluster.local:80"
```

**Note**:  
* If you did not follow the tutorial, the naming convention of the address should be:
`<svc name>.<ns name>.svc.cluster.local:portnumber`
* Replace “cluster-name” with the cluster ID you chose during the operator installation.

2. Copy and run the following command in your cluster:   

`oceancd apply -f <VP Yaml>`

### Create a Verification Template

The verification template entity enables you to build in the query you want to apply to your monitoring tool. In addition to the query, it is also a configuration of a set of rules that the verifications follow to determine whether a metric failed or was successful.  

1. Copy and save the following YAML file:

```yaml
kind: "verificationTemplate"
name: "oceancd-workshop-vt"
metrics:
- name: "my-first-metric"
  interval: "5s"
  count: 10
  failureCondition: "result[0] >= 100"
  failureLimit: 5
  provider:
    prometheus:
      query: sum(container_cpu_usage_seconds_total{namespace="oceancd-workshop"})
```

2. Copy and run the following command in your cluster:   

`oceancd apply -f <VT Yaml>`

## Step 5: Create a Strategy   

With this entity, you can set the rules of your canary deployment. It also enables you to configure pre-defined pauses, as well as the traffic percentage and include the verifications created above.   

1. Copy and save the following YAML file:

```yaml

kind: "Strategy"
name: "oceancd-workshop"
canary:  
  backgroundVerification:  
    templateNames:  
      - "oceancd-workshop-vt"
  steps:  
    - name: "My-first-phase"
      setWeight: 20
      verification:  
        templateNames:  
          - "oceancd-workshop-vt"
    - name: "second-phase"
      setWeight: 40
      verification:  
        templateNames:  
          - "oceancd-workshop-vt"
    - name: "third-phase"
      setWeight: 80
      verification:  
        templateNames:  
          - "oceancd-workshop-vt"
      pause:  
        duration: 1m
```

2. Copy and run the following command in your cluster:

`oceancd apply -f <Strategy Yaml>`

## Step 6: Create a RolloutSpec  

The RolloutSpec entity connects between the Ocean CD entities that were previously set up (verifications and strategy) and the Kubernetes entities that were created in the previous steps (services and SpotDeployment).  

1. Copy and save the following YAML file:

```yaml
kind: "RolloutSpec"
name: "OceanCD-Rolloutspec-1"
spotDeployment:  
 clusterId: "cluster-name"
 namespace: "oceancd-workshop"
 name: "nginx-deployment"
strategy:  
 name: "oceancd-workshop"
traffic:  
 canaryService: "rollouts-demo-canary"
 stableService: "rollouts-demo-stable"
failurePolicy:  
 action: abort
```

2. Replace “cluster-name” with the cluster ID you chose during the operator installation.

3. Copy and run the following command in your cluster:   

`oceancd apply -f <RolloutSpec Yaml>`

## Step 7: Trigger a Rollout

You can trigger your very first rollout. Change the pod spec template such as the image (for example, you may use: public.ecr.aws/nginx/nginx:latest) in your SpotDeployment yaml and run the following command:

`kubectl apply -f <SpotDeployment YAML>`

A new canary rollout is initiated in the [All Rollouts](ocean-cd/tutorials/view-rollouts/) table. Click the Rollout ID of your deployment to view the detailed rollout page and take action from the console.

## Step 8: Integrate Ocean and Ocean CD (Optional)  

If you use Ocean, you need to [integrate](ocean-cd/ocean-integration/) Ocean CD to your information in the console.  

## What’s Next?

Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
