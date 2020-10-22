# Update the Controller

In this tutorial, you will learn how to update the Spot controller in your Kubernetes cluster.

## Option 1: Kubernetes Version before 1.9

If you are using a K8s version before 1.9, run the following command:

`kubectl apply -f http://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller.yaml`

## Option 2: Kubernetes Version 1.9 and Later

If you are using K8's version 1.9 and later, you will need to install the GA version of the controller.

1. Before upgrading the latest GA controller version, you must delete any non-GA version controllers. To do this, collect the details of all of the Spot deployments:

`kubectl get deploy --namespace kube-system`

2. Based on the output, you will need to delete all of the Spot deployments. See the example below:

`kubectl delete deployment spotinst-kubernetes-cluster-controller -n kube-system`

3. Install the latest GA controller version:

`kubectl apply -f https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-ga.yaml`

If the controller is already installed, this action will start a roll in the cluster, which will launch a new pod and terminate the old one. When the controller is booting up, it prints the version in the log.

## Controller Auto-Update

The Spot Kubernetes Controller supports auto-update. Meaning, when a new version of the controller is available, it will automatically be updated. By default, the auto-update is enabled.

Automatic updates for the Spot Controller are supported from Kubernetes version 1.12. If you are using an earlier version and would like to enjoy the auto-update feature, upgrade to a later version.

As a best-practice, we highly recommend leaving Auto-Update enabled due to the fact that the update procedure is silent and requires no downtime. In addition, every controller version update improves stability and performance, collects new metrics, and supports new K8s versions.

If you wish to disable the auto-update, do the following:

1. Edit your Spot controller configMap.yaml file (spotinst-kubernetes-cluster-controller-config), as shown [here](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl).

2. Add the following line to the file, under the `data` section:

`disable-auto-update: "true"`

3. Apply the changes using the following command:

`kubectl apply -f configMap.yaml`
