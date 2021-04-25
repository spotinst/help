# Troubleshoot Controller

If the banner below appears at the top of your Ocean dashboard, your Spot Controller is not reporting a heartbeat to the Ocean cluster.

To troubleshoot the issue, complete each step below until you find the issue.

## Step 1: Check the Configuration

Check the configuration of your configMap.yaml and ensure the parameters are set correctly.
In order to view the controller configmap currently applied to your cluster, run the following command:

`kubectl describe configmap spotinst-kubernetes-cluster-controller-config -n kube-system`

Controller ConfigMap template:

```YAML
kind: ConfigMap
apiVersion: v1
metadata:
 name: spotinst-kubernetes-cluster-controller-config
 namespace: kube-system
data:
 spotinst.token: <API_TOKEN>
 spotinst.account: <ACCOUNT_ID>
 spotinst.cluster-identifier: <CLUSTER_ID>
```

## Step 2: Is the Controller Running?

To see if the controller is running, run the following command on your kubectl enabled terminal:

`kubectl get pods -n kube-system | grep spotinst`

## Step 3: One Controller Pod in Cluster?

Ensure there is only one Spot controller pod in the cluster. If there is more than one, do the following:

1. Delete the old deployment using the command below.

`kubectl delete -f http://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller.yaml`

2. [Reinstall the controller](ocean/tutorials/spot-kubernetes-controller/).

## Step 4: Controller Running but not Responding?

If the controller pod appears to be running, but is not responding, do the following:

1. The controller needs DNS resolution. Ensure the DNS pods are not in a pending state.

`kubectl get pods -n kube-system`

2. If they are, check for the reason using the following command:

`kubectl describe pod 'dns-pod-name' -n kube-system`

3. Try restarting the controller pod.

## Step 5: Get Controller Logs

If the steps above do not solve your issue, get the controller logs using the steps below.

1. The following command displays current pods running in the kube-system. Get the spotinst-controller pod name from the output.

`kubectl get pods -n kube-system`

2. Log in to the controller using the following command:

`kubectl exec -ti spotinst-kubernetes-cluster-controller-68b75c4794-bkmm7 bash -n kube-system`

3. Change the path: `cd controller/log/spotinst`

4. To get the logs, run the command:

`cat spotinst-kubernetes-controller.log`

5. Contact Support in the online chat or by email.
