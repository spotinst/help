# End-to-End Setup

This procedure provides a description of how to install the operator, create services and migrate your workloads with Ocean CD. You will be provided with an end-to-end  description of the flow in order to successfully perform your very first rollout using the Spot console.

## Prerequisites

* Install OLM:

  Run the command:

  `curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.20.0/install.sh | bash -s v0.20.0`
* Run Kubernetes cluster in Azure, Google, or Amazon
* Required level of permissions:
  - Admin on Spot Console
  - Approval to trigger a change in your deployment via your CI tool
* If you are using permit lists or tools like OPA, please permit the following images:
  - docker.io/spotinst/spot-oceancd-operator:$VERSION
  - docker.io/spotinst/spot-oceancd-operator-catalog:latest
  - docker.io/spotinst/spot-oceancd-operator-bundle:$VERSION
  - quay.io/operator-framework/olm
  - quay.io/operatorhubio/catalog:latest

## Step 1: Install the Operator

You need to install the operator in order to provide access to your cluster workload to Ocean CD.

_For demo purposes, the YAML method will be provided via the console._

1. Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

2. Complete the information:
* Cluster Identifier: This is a logical identifier for your cluster. You can choose any ID, and it is not coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. The cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces.
* Argo Rollout Installation: Ocean CD uses Argo rollouts as part of its engine. If Argo rollout is not installed, Ocean CD will install it (based on the selected option).

<img src="/ocean-cd/_media/getting-started-n02a.png" width="500" />

> **Tip**: The YAML is the provided default method.

3. Download the YAML and apply it into your kubernetes cluster.
kubectl apply -f <Name of the YAML>                 
If it is not specified in the command, the operator will be installed in the oceancd namespace. You can change it by running these commands:
          `kubectl create ns demo`
          `kubectl apply -f <Name of the YAML> -n demo`

When the process is complete and the operator pods are running, your cluster will automatically appear in the Cluster Settings section.

<img src="/ocean-cd/_media/getting-started-n04.png" />

> **Tip**: Once you have downloaded the YAML, the new row will remain with partial information for five minutes. If five minutes elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at another time, and the Ocean CD will display the new data accordingly.

The Ocean CD operator is now installed in your kubernetes cluster. In the next steps you will migrate your deployments to be managed by Ocean CD SaaS. You can find all of the existing deployments on the Workloads page and the Workload Migration wizard.  

## Step 2: Create Services

You will create the Canary and Stable services to expose and manage the traffic split between the canary and the stable replicasets.

_For demo purposes, there will be no use of a traffic manager. Copy the services template provided in our [Github Repository](https://github.com/spotinst/spot-oceancd-releases/blob/main/Quick%20Start%20%26%20Examples/Deployment.yaml):_

Stable

<img src="/ocean-cd/_media/getting-started-09.png" width="250" />

Canary

<img src="/ocean-cd/_media/getting-started-10.png" width="250" />

> **Note**: It is critical to apply the services into the same namespace as your SpotDeployment namespace.

Run the following command for applying the services:

`kubectl apply -f <Service YAML> -n demo`

## Step 3: Verification Creation (Optional)

Now that you have successfully created your services, you will be required to create the verifications template and provider which will be used as part of your rollout.

By creating such templates, you will be allowed to insert any data analysis you wish on either a background level or on a phase level.

Although this is an optional step, as a rollout may run without any verifications, it is very easy to set them u. All you have to do is to apply the templates via API

1. Verification template: The verification template is a verification key entity which associates your arguments, queries as well as the monitoring tool of your choice. Such entity is reusable and can be used and maintained over multiple services and clusters

Command:
`POST https://api.spotinst.io/ocean/cd/verificationTemplate`

Below is an example of the verification template.

```yaml
kind: verificationTemplate
name: My-first-verification
args:
- name: My-argument
metrics:
- name: My-first-metric
 interval: 5m
 initialDelay: 1m
 count: 10
 successCondition: result[0] <= 0.95
 failureCondition: result[0] >= 1.2
 failureLimit: 0
 inconclusiveLimit: 0
 consecutiveErrorLimit: 0
 provider:
   prometheus:
     query: My-query
```
​
The attributes of the verification template are described in the [Entities](ocean-cd/concepts-features/entities?id=verification-template) page.

2. Verification provider: The Ocean CD verification provider includes the credentials of the monitoring tool as well as the clusterID, for which you will make use of the credentials.

Command:
`POST https://api.spotinst.io/ocean/cd/verificationProvider`

Only one of each provider type can be set per cluster.

```yaml
kind: verificationProvider
name: My-verification-provider
clusterIds:
- cluster-name
datadog:
 address: address-name
 apiKey: apiKey-Credentials
 appKey: appKey-Credentials
```

The attributes of the verification provider are described in the [Entities](ocean-cd/concepts-features/entities?id=verification-provider) page.

## Step 4: Migrate Workloads

In this step you will migrate the chosen deployments to Spot deployments as well as create the necessary entities for the triggering of your rollouts.

_For demo purposes, the workload migration wizard in the console will be used._

1. Go to Spot’s [Github Repository](https://github.com/spotinst/spot-oceancd-releases/blob/main/Quick%20Start%20%26%20Examples/Deployment.yaml) and copy the deployment template provided.

<img src="/ocean-cd/_media/getting-started-11.png" width="250" />

2. Apply the deployment into your kubernetes cluster. Once applied, your deployment will instantly be displayed in the Workload Table in the UI.

3. Run the command:

  `kubectl apply -f <SpotDeployment YAML> -n demo`		

4. In the workloads table in the Workloads page, you will see when the deployment is mapped into the table.

5. Hover over the deployment’s name, and click Migrate.

<img src="/ocean-cd/_media/getting-started-15.png" />

6. The Workload Migration Flow provides an overview of the migration steps. Click Let’s Get Started.

<img src="/ocean-cd/_media/getting-started-n06a.png" />

7. Migrate your deployment into your SpotDeployment.

<img src="/ocean-cd/_media/getting-started-n061.png" />

8. Run the command:

  `kubectl apply -f <SpotDeployment YAML> -n demo`

9. Set the strategy.

Optional: To edit the provided template and create the strategy, click Next.

<img src="/ocean-cd/_media/getting-started-n08a.png" />

10. Click Next. Ocean CD will automatically create the entity. There is no need for manual input.

### Strategy example

```yaml
kind: Strategy
name: Strategy-OceanCD
canary:
 backgroundVerification:
   templateNames:
   - My-first-verification
 steps:
 - name: My-first-phase
   setWeight: 20
   verification:
     templateNames:
     - My-first-verification
   pause:
     duration: 5m
 - name: My-second-phase
   setWeight: 80
   verification:
     templateNames:
     - My-first-verification
   pause: {}
```

The attributes of a strategy are described in the [Entities](ocean-cd/concepts-features/entities?id=strategy) page.

### Edit and Create the RolloutSpec

Ocean CD Rollout spec connects the SpotDeployment, the desired strategy, traffic, and failure policy.

<img src="/ocean-cd/_media/getting-started-n09a.png" />

1. Enter your SpotDeployment Name.
2. Enter your spotDeployment Namespace. Only the ClusterID and the Strategy Name will be auto-filled. OceanCD will automatically create the entity. There is no need for manual input.

### Attributes of the RolloutSpec

RolloutSpec example

```yaml
kind: RolloutSpec
name: service-rolloutspec
spotDeployment:
 clusterId: string
 namespace: string
 name: string
strategy:
 name: service-rolloutspec
 args:
 - name: app
   value: service
   valueFrom:
     fieldRef:
       fieldPath: metadata.labels['app']
traffic:
 canaryService: canary
 stableService: stable
failurePolicy:
 action: abort
```

The attributes of the rolloutSpec in the [Entities](ocean-cd/concepts-features/entities?id=rolloutspec) page.

## Step 5: Trigger a Rollout

Now that the process is complete, you can change the pod spec template such as the image in your SpotDeployment YAML and run the following command:

`kubectl apply -f <SpotDeployment YAML> -n demo`

At this point, a new Canary rollout will be automatically initiated in the All Rollouts table. By clicking Rollout ID, you can go to the detailed rollout page to view and take action from the console.

## What’s Next?
- Learn how to migrate your workload via [API or CLI](ocean-cd/getting-started/migrate-using-api).
- Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
