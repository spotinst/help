# Update the Controller

In this tutorial, you will learn how to update the Ocean Controller in your Kubernetes cluster.

## Prerequisites

1. Before upgrading the latest controller version, you must delete any non-GA version controllers. To do this, collect the details of all of the Spot deployments:

`kubectl get deploy --namespace kube-system`

2. Based on the output, you will need to delete all of the Spot deployments. See the example below:

`kubectl delete deployment spotinst-kubernetes-cluster-controller -n kube-system`

## Install the Latest Version

To install the latest controller version, run the following command:

`kubectl apply -f https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-ga.yaml`

If the controller is already installed, this action will start a roll in the cluster, which will launch a new pod and terminate the old one. When the controller boots up, it will print the version in the log.

## Controller Auto-Update

The Ocean Controller supports auto-update. When a new version of the controller is available, it will automatically be updated. By default, the auto-update is enabled.

As a best-practice, we highly recommend leaving Auto-Update enabled due to the fact that the update procedure is silent and requires no downtime. In addition, every controller version update improves stability and performance, collects new metrics, and supports new K8s versions.

The configurations of the controller deployment and the clusterRole it is bound to are overwritten by the default configuration Spot provides during the auto-update process. If manual changes are needed (e.g., to add labels or adjust permission rules), you must disable Auto-Update in order to persist those changes.

### Disable Auto-Update

If you wish to disable the auto-update, do the following:

1. Edit your Ocean Controller configMap.yaml file (spotinst-kubernetes-cluster-controller-config), as shown [here](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl.md).
2. Add the following line to the file, under the data section:

`disable-auto-update: "true"`

3. Apply the changes using the following command:

`kubectl apply -f configMap.yaml`

4. Restart the controller pod in order to load the new changes:

`kubectl -n kube-system delete pod <controller_pod_name>`

### Troubleshooting

The process of pushing a new controller version involves a change in the end user environment, and therefore, is monitored by the Spot team. The upgrade is pushed gradually over a period of up to several days.

If any of the conditions below apply at the time of a new version push, the auto-update process will stop in order to prevent any unexpected behavior, and the controller will remain in its current version:

- The currently running controller is not reporting back to SaaS.
- The cluster is in its scheduled shutdown hours.
- The controller application was installed with a different name than the name provided out of the box.

If an auto-update stopped before completion, a banner will appear in the console with the message below and the latest version number to be installed.

<img src="/ocean/_media/tutorials-update-the-controller-01.png" />

You can update the controller manually as described in the [procedure above](ocean/tutorials/spot-kubernetes-controller/update-controller?id=install-the-latest-version).

## What’s Next?

Learn more about [troubleshooting the controller](ocean/troubleshooting/troubleshoot-controller).
