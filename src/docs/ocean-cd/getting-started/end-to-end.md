# End-to-End Installation

This procedure provides a description of how to install the operator, create services and migrate your workloads with Ocean CD. You will be provided with an end-to-end description of the flow in order to successfully perform your very first rollout using the Spot console.

## Prerequisites

* Install OLM:

  Run the command

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

_For demo purposes, the YAML method will be provided via the UI._

1. Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

2. Complete the information:
* Cluster Identifier: This is a logical identifier for your cluster. You can choose any ID, and it is not coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. The cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces.
* Argo Rollout Installation: Ocean CD uses Argo rollouts as part of its engine. If Argo rollout is not installed, Ocean CD will install it (based on the selected option).

<img src="/ocean-cd/_media/getting-started-n02a.png" width="100" />

Note: The YAML is the provided default method.

3. Download the YAML and apply it into your kubernetes cluster.
kubectl apply -f <Name of the YAML>                 
If it is not specified in the command, the operator will be installed in the oceancd namespace. You can change it by running these commands:
          `kubectl create ns demo`
          `kubectl apply -f <Name of the YAML> -n demo`

When the process is complete and the operator pods are running, your cluster will automatically appear in the Cluster Settings section.

<img src="/ocean-cd/_media/getting-started-n04.png" />

Tip: Once you have downloaded the YAML, the new row will remain with partial information for five minutes. If five minutes elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at another time, and the Ocean CD will display the new data accordingly.

The OceanCD operator is now installed in your kubernetes cluster. In the next steps you will migrate your deployments to be managed by Ocean CD SaaS. You can find all of the existing deployments on the Workloads page and the Workload Migration wizard.  

## Step 2: Create Services

You will create the Canary and Stable services to expose and manage the traffic split between the canary and the stable replicasets.

_For demo purposes, there will be no use of a traffic manager. Copy the services template provided in our [Github Repository](https://github.com/spotinst/spot-oceancd-releases/blob/main/Quick%20Start%20%26%20Examples/Deployment.yaml):_

Stable

<img src="/ocean-cd/_media/getting-started-09.png" width="300" />

Canary

<img src="/ocean-cd/_media/getting-started-10.png" width="300" />

Note: It is critical to apply the services into the same namespace as your SpotDeployment namespace.

Run the following command for applying the services:

`kubectl apply -f <Service YAML> -n demo`

## Step 3: Migrate Workloads
In this step you will migrate the chosen deployments to Spot deployments as well as create the necessary entities for the triggering of your rollouts.

_For demo purposes, the workload migration wizard found in the UI will be used._

1. Go to Spot’s [Github Repository](https://github.com/spotinst/spot-oceancd-releases/blob/main/Quick%20Start%20%26%20Examples/Deployment.yaml) and copy the deployment template provided.

<img src="/ocean-cd/_media/getting-started-11.png" width="300" />

2. Apply the deployment into your kubernetes cluster. Once applied, your deployment will instantly be displayed in the Workload Table in the UI.

3. Run the command

  `kubectl apply -f <SpotDeployment YAML> -n demo`		

4. In the workloads table in the Workloads page, you will see when the deployment is mapped into the table.

5. Hover over the deployment’s name, and click Migrate.

<img src="/ocean-cd/_media/getting-started-15.png" />

6. The Workload Migration Flow provides an overview of the migration steps. Click Let’s Get Started.

<img src="/ocean-cd/_media/getting-started-n06.png" />

7. Migrate your deployment into your SpotDeployment.

<img src="/ocean-cd/_media/getting-started-12.png" />

8. Run the command

  `kubectl apply -f <SpotDeployment YAML> -n demo`

9. Set the strategy.

Optional: To edit the provided template and create the strategy, click Next.

<img src="/ocean-cd/_media/getting-started-n08.png" />

10. Click Next. OceanCD will automatically create the entity. There is no need for manual input.

### Attributes of the Strategy

Strategy example

<img src="/ocean-cd/_media/getting-started-13.png" />

The attributes of the strategy in the example above are as follows:
* Name: The name of the strategy must be unique.
* Phase name: The name of the step is optional.
* Steps.setWeight: Weight percentage of the step. The weight can not be less than or equal to the one set in the previous step. The total of the weights must not exceed 100 percent. If total weights are less than 100 percent, Ocean CD will add on to the last phase until the total equals 100 percent.

Optional action: Pause. Add a predefined 'Pause' by entering duration in 's', 'm' or 'h'. Alternatively, you can leave it empty by using '{}', which will require an explicit user approval before promoting to the next phase (or roll back).

### Edit and Create the RolloutSpec
Ocean CD Rollout spec connects the SpotDeployment, the desired strategy, traffic, and failure policy.

<img src="/ocean-cd/_media/getting-started-n09.png" />

1. Enter your SpotDeployment Name.
2. Enter your spotDeployment Namespace. Only the ClusterID and the Strategy Name will be auto-filled. OceanCD will automatically create the entity. There is no need for manual input.

### Attributes of the RolloutSpec

RolloutSpec example

<img src="/ocean-cd/_media/getting-started-14.png" />

The attributes of the rolloutSpec in the example above are as follows:

* Name: The name of the rolloutSpec must be unique.
* SpotDeployment.ClusterId: The cluster name. This is not the Ocean Cluster Identifier, and the name should be unique to Ocean CD.
* SpotDeployment.Namespace: The Cluster namespace.
* SpotDeployment.Name: The CRD name.
* Strategy.name: The name of the strategy. You can use a strategy that has already been created and you do not need to create a new one.
* Traffic: The kubernetes services or optional traffic manager you have chosen. The syntax needed for each traffic may be found in our Git.
* FailurePolicy: The automatic action(s) OceanCD performs in the case of a failure.

The process is complete. You can change the pod template in your SpotDeployment yaml. Once applied to the cluster, a new Canary rollout will be initiated in the All Rollouts table. By clicking Rollout ID you will be navigated to the detailed rollout page to view and take action from the UI.

## What’s Next?
- Learn how to migrate your workload via [API or CLI](ocean-cd/getting-started/migrate-using-api).
- Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
