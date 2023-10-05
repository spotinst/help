# Troubleshoot Controller

If the banner below appears at the top of your Ocean dashboard, your Ocean Controller is not reporting a heartbeat to the Ocean cluster.

To troubleshoot the issue, complete each step below until you find the issue.

## Step 1: Check the Configuration

Check the configuration of your configMap.yaml and ensure that the spotinst.cluster-identifier is the same as "controllerClusterId" (Cluster Identifier) in the Ocean configuration.

In order to view the controller configmap currently applied to your cluster, run the following command:

`kubectl describe configmap spotinst-kubernetes-cluster-controller-config -n kube-system`

Controller ConfigMap template:

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: spotinst-kubernetes-cluster-controller-config
  namespace: kube-system
  data:
    spotinst.cluster-identifier: <CLUSTER_ID>
```

## Step 2: Are the account ID and token valid?

From the 1.0.66 controller version, the account and token was modified as secret in configMap.

1. To view the base 64 encoded secrets run the following command:

`kubectl get secret spotinst-kubernetes-cluster-controller -n kube-system -o yaml`

2. Ensure the encoded account and token values are correct and don’t have any trailing spaces or special characters.
3. To view the decoded account ID, run the following command (Ignore the % at the end of response):

`kubectl get secrets spotinst-kubernetes-cluster-controller -n kube-system --template={{.data.account}} | base64 --decode`

Example Response: `act-abc12def%`

4. Verify that your cluster is in the [same account](https://console.spotinst.com/settings/v2/organization/accounts).
5. To view the decoded token, run the following command (Ignore the % at the end of the response):

`kubectl get secrets spotinst-kubernetes-cluster-controller -n kube-system --template={{.data.token}} | base64 --decode`

Example Response:

`abcdef124567890ghijk123456789abcdfghijk123456bcdefjik12346890000%`

6. Verify that the token exists and that the user associated with token exists and can make Spot API calls to resources in the account where the cluster exists:
   [Permanent API Tokens](https://console.spotinst.com/settings/v2/tokens/permanent).

In case your account ID or token is incorrect or invalid, the controller pod will be in a Terminating/CrashLoopBackOff state and in the container logs (Refer Step 6) you will see an unauthorized response as shown below:

```
WARN   [DATE] [main] SpotinstApiService - Got status code different the SC_OK : 401 Body {  "request": {    "id": "123bc63bd-da6d-4f0e-aaeb-660edc1124",    "url": "/mcs/kubernetes/topology/autoScalerData?accountId=act-123bcdef&clusterIdentifier=test-&fastScale=false&kubernetesUniqueIdentifier=1b123abc-4a83-4d51-8536-64b402372ecb",    "method": "POST",    "timestamp": "DATE"  },  "response": {    "status": {      "code": 401,      "message": "Unauthorized"    }  }}
ERROR  [DATE] [main] PushAutoScalerDataCmd - Failed to push autoScaler data. Errors: null
ERROR  [DATE] [main] ControllerApplication - Failed to validate controller communication with spotinst API
```

## Step 3: Is the Controller Running?

To see if the controller is running, run the following command on your kubectl enabled terminal:

`kubectl get pods -n kube-system | grep spotinst`

## Step 4: One Controller Pod in Cluster?

Ensure there is only one Ocean Controller pod in the cluster. If there is more than one, do the following:

1. Delete the old deployment using the command below.

`kubectl delete -f http://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller.yaml`

2. [Reinstall the controller](ocean/tutorials/spot-kubernetes-controller/).

## Step 5: Controller Running but not Responding?

If the controller pod appears to be running, but is not responding, do the following:

1. The controller needs DNS resolution. Ensure the DNS pods are not in a pending state.

`kubectl get pods -n kube-system`

2. If they are, check for the reason using the following command:

`kubectl describe pod 'dns-pod-name' -n kube-system`

3. Try restarting the controller pod.

## Step 6: Get Controller Logs

If the steps above do not solve your issue, get the controller logs using the steps below.

1. The following command displays current pods running in the kube-system. Get the spotinst-controller pod name from the output.

`kubectl get pods -n kube-system`

2. Log in to the controller using the following command:

`kubectl exec -ti spotinst-kubernetes-cluster-controller-68b75c4794-bkmm7 bash -n kube-system`

3. Change the path: `cd controller/log/spotinst`

4. To get the logs, run the command:

`cat spotinst-kubernetes-controller.log`

5. Contact Support in the online chat or by email.

## What's Next?

- Learn how to [update the controller](ocean/tutorials/spot-kubernetes-controller/update-controller).
- Find out about the latest updates in [Controller Version History](ocean/tutorials/spot-kubernetes-controller/controller-version-history).
