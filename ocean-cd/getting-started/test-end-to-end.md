# End-to-End Setup  

This procedure describes how to install the operator, create services and Spot Deployments as well as your Ocean CD entities. This procedure provides end-to-end insights of the Ocean CD flow to successfully trigger your very first deployment.  

## Prerequisites

* Run the Kubernetes cluster in Azure, Google, or Amazon.
* If you are not already connected to Spot, follow the steps in the enablement process.
* Ocean CD’s [CLI tool](https://docs.spot.io/connect-your-cloud-provider/first-account/) is installed. If it is not installed, run the following command:  

`brew install spotinst/tap/oceancd
oceancd configure`

* If you are using permit lists or tools like OPA, permit the following images:  
  - docker.io/spotinst/spot-oceancd-operator:$VERSION
  - docker.io/spotinst/spot-oceancd-operator-catalog:latest
  - docker.io/spotinst/spot-oceancd-operator-bundle:$VERSION
  - quay.io/operator-framework/olm
  - quay.io/operatorhubio/catalog:latest

## Step 1: Install the Operator  

Install the operator to access your cluster workload to Ocean CD.  
_For demo purposes, the YAML method is provided in the console._

1. Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

2. Complete the information:
* **Cluster Identifier**: This is a logical identifier for your cluster that must be unique and have up to 30 alphanumeric characters without any spaces. You can choose any ID and it does not need to be coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean.
* [**Argo Rollout Installation**](ocean-cd/?id=argo-rollouts-as-an-engine): Ocean CD uses Argo rollouts as part of its engine. If Argo Rollout is not installed, Ocean CD will install it (based on the selected option).

3. Download the YAML and apply it to your Kubernetes cluster.

`kubectl apply -f <Name of the YAML>`

**If this is not specified in the command, the operator will be installed in the Ocean CD namespace.**

When the process is complete and the operator pods are running, your cluster appears in the Cluster Settings section.

<img src="/ocean-cd/_media/getting-started-n04.png" />

> **Tip**: Once you have downloaded the YAML, the new row remains with partial information for five minutes. If five minutes elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at a different time, and the Ocean CD displays the new data accordingly.

Once the OceanCD operator is installed you can create your Kubernetes entities: Services & SpotDeployment.

## Step 2: Create a Namespace and Services

Create a namespace to keep all the Kubernetes entities you create together.

1. Run the following command:

`kubectl create ns oceancd-workshop`

When a namespace is created, create the canary and stable services to expose and manage the traffic that is divided between the canary and the stable replicasets.

_For demo purposes, a traffic manager will not be used._

2. Copy and run the following YAML:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: rollouts-demo-stable
  namespace: oceancd-workshop
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```
---

```yaml
apiVersion: v1
kind: Service
metadata:
  name: rollouts-demo-canary
  namespace: oceancd-workshop
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

3. Copy and run the following command in your cluster :

      `kubectl apply -f <Service YAML>`   

## Step 3: Create a SpotDeployment

To trigger the OceanCD engine, you will be required to use our CRD called SpotDeployment.

1. Copy and run the following YAML file:

```yaml
apiVersion: spot.io/v1beta1
kind: SpotDeployment
metadata:
  name: nginx-deployment
  namespace: oceancd-workshop
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

**The difference between a deployment and a SpotDeployment is the API version and kind.**

2. Copy and run the following command in your cluster:  

`kubectl apply -f <SpotDeployment YAML>`  

Now that your SpotDeployment and services were created, the remaining step is to create the OceanCD entities. These will act as the rules for your canary deployment to follow.

## Step 4: Create Verification

This step focuses on the creation of the verification provider and verification template. These entities enable you to insert data analysis while your deployments run. These deployments can be from any of the supported monitoring tools by Spot.

### Install Prometheus

Prometheus is a monitoring tool that is capable of collecting and storing measurements as time-series data.

_For demo purposes, the Prometheus monitoring tool will be used._

The procedure below describes how to set Prometheus in your cluster. If it is already installed, you can skip to the creation of the verification provider entity itself.

1. Run the following command to deploy Prometheus:

```
kubectl create namespace prometheus
```

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

```
helm install prometheus prometheus-community/prometheus \
    --namespace prometheus \
    --set alertmanager.persistentVolume.storageClass="gp2" \
    --set server.persistentVolume.storageClass="gp2"
```

2. Make note of the Prometheus endpoint in helm response (this will be needed later) as follows:

The Prometheus server can be accessed via port 80 on the following DNS name from within your cluster:

Prometheus- server.prometheus.svc.cluster.local

3. The DNS name for the verification provider template updates within a number of seconds. Validate that the Prometheus components are deployed as expected by running the following command:

`kubectl get all -n prometheus`

4. The following response is displayed. All of the pods should be ready and available.

```
NAME                                                 READY   STATUS    RESTARTS   AGE

pod/prometheus-alertmanager-868f8db8c4-67j2x         2/2     Running   0          78s

pod/prometheus-kube-state-metrics-6df5d44568-c4tkn   1/1     Running   0          78s

pod/prometheus-node-exporter-dh6f4                   1/1     Running   0          78s

pod/prometheus-node-exporter-v8rd8                   1/1     Running   0          78s

pod/prometheus-node-exporter-vcbjq                   1/1     Running   0          78s

pod/prometheus-pushgateway-759689fbc6-hvjjm          1/1     Running   0          78s

pod/prometheus-server-546c64d959-qxbzd               2/2     Running   0          78s
```

```
NAME                                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE

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

5. When Prometheus is installed, you can create the verification provider. Set your credentials by copying and running the following YAML file:

apiVersion: `spot.io/v1beta1`

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
* **Insert the cluster ID you chose during the operator installation.**
* **Make sure the Prometheus address is correct. If you followed the Prometheus installation procedure, the address should be well configured**.

6. Run the following command in your terminal using the command-line interface:   

`oceancd apply -f <VP Yaml>`

The verification template entity enables you to build in the query you want to apply to your monitoring tool. In addition to the query, it is also a configuration of a set of rules that the verifications follow to determine whether a metric failed or was successful.  

7. Copy and run the following YAML file:

```yaml
kind: verificationTemplate
name: oceancd-workshop-vt
metrics:
- name: My-first-metric
  interval: 5s
  count: 10
  failureCondition: result[0] >= 100
  failureLimit: 5
  provider:
    prometheus:
      query: sum(container_cpu_usage_seconds_total{namespace="oceancd-workshop"})
```

8. Run the following command in your terminal using the command-line interface:

`oceancd apply -f <VT Yaml>`

## Step 5: Create a Strategy  

With this entity, you can set the rules of your canary deployment. This entity also enables you to configure pre-defined pauses, as well as the traffic percentage and any verifications created above that you might need.  

1. Copy and run the following YAML file:

apiVersion: `spot.io/v1beta1`

```yaml
kind: Strategy
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

2. Run the following command in your terminal using the command-line interface:
`oceancd apply -f <Strategy Yaml>`

## Step 6: Create a RolloutSpec  

The RolloutSpec entity connects between the Ocean CD entities that were previously set up (verifications and strategy) and the Kubernetes entities that were created in the previous steps (services and SpotDeployment).  

1. Copy and run the following YAML file:

apiVersion: `spot.io/v1beta1`

```yaml
kind: RolloutSpec
name: "OceanCD-Rolloutspec-1"
spotDeployment:  
  clusterId: "oceancd-demo"
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

2. Run the following command in your terminal using the command-line interface:

`oceancd apply -f <RolloutSpec Yaml>`

## Step 7: Trigger a Rollout

You can trigger your very first rollout. Change the pod spec template such as the image in your SpotDeployment yaml and run the following command:

`kubectl apply -f <SpotDeployment YAML>`  

A new canary rollout is initiated in the All Rollouts table. Click the Rollout ID of your deployment to view the detailed rollout page and take action from the console.

## Step 8: Integrate Ocean and Ocean CD (Optional)  

If you use Ocean, you need to integrate Ocean CD to your information in the console by using the integration method described in this page.  

## What’s Next?

* Learn how to migrate your workload using the [API or CLI](ocean-cd/getting-started/migrate-using-api).
* Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
