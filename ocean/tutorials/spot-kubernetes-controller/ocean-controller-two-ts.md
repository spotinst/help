# Troubleshoot the Ocean Controller Version 2

This topic is intended to help you troubleshoot your Ocean Controller Version 2. 

If you still encounter issues, contact Support via [online chat or email](https://spot.io/support/). 

##  Upgrade from Ocean Controller Version 1 to Version 2

###  "Helm command not found" Log During Installation Via Script

The script installation of Ocean Controller Version 2.0 is based on Helm. 

To resolve this issue, ensure Helm is installed on your machine before starting the installation process. 

You can install Helm by running `install helm—https://helm.sh/docs/intro/install​`.

###  Helm Install Fails with Parse Error 

Helm install fails with parse error at `(ocean-kubernetes-controller/templates/_helpers.tpl:320): unclosed acti`
To resolve this issue, Ensure the `helm` version is **3.12.0** or above. If not, update helm and try again.

###  "Metrics server already installed" Log After Using Helm to Install the Controller

This issue occurs because the **metric server** is already installed in your cluster. By default, the Helm Chart for the Ocean Controller installs the metric-server as a dependency. 

The metric server is a pod that helps Ocean collect data related to the memory and CPU usage of all the pods in the cluster, and is used for the Ocean Right Sizing feature.

To resolve this issue, add `--set metrics-server.deployChart=false` to the helm install command.

###  "Different controller versions detected. Please remove the old version controller. Old version controller pod(s)" Log in Your Ocean Cluster

This log message appears when the old (Version 1) and new (Version 2) Ocean Controllers run concurrently in your Kubernetes cluster. 

The Version 2 Ocean Controller pod will not perform actions until the Version 1 Ocean Controller pod is deleted. This approach prevents conflicts between the two Ocean Controllers, each having different behaviors.

To resolve this issue, remove the Ocean Controller Version 1 replicas. 

## Ocean Controller for **AWS K8s** Does Not Report Heartbeat to Ocean Cluster

If your Ocean Controller for **AWS K8s** is not reporting a heartbeat to the Ocean cluster, use this troubleshooter to resolve the issue. Complete each step according to the sequence.

### Step 1: Check the Configuration 

Check the configuration of your `configMap.yaml` and ensure that the `spotinst.cluster-identifier` is the same as `controllerClusterId` (Cluster Identifier) in the Ocean configuration. 

To view the controller configmap currently applied to your cluster, run the following command: 

```bash
kubectl describe configmap ocean-controller-ocean-kubernetes-controller -n spot-system 
```

Controller ConfigMap template:

```yaml
kind: ConfigMap 
apiVersion: v1 
metadata: 
  name: ocean-controller-ocean-kubernetes-controller-config 
  namespace: spot-system 
  data:spotinst.cluster-identifier: "<controllerClusterId>"
```

### Step 2: Are the Account ID and Token valid? 

1.  To view the base64 encoded secrets run the following command: 

```yaml
kubectl get secret ocean-controller-ocean-kubernetes-controller -n spot-system -o yaml 
```

2.  Ensure the encoded account and token values are correct and do not have any trailing spaces or special characters. 

3.  To view the decoded account ID, run the following command (Ignore the % at the end of response): 

```bash
kubectl get secrets ocean-controller-ocean-kubernetes-controller -n spot-system --template={{.data.account}} | base64 --decode
```


Example Response: 
```bash
act-abc12def% 
```

4.  Verify that your cluster is in the [same account](https://console.spotinst.com/settings/v2/organization/accounts). 

5.  To view the decoded token, run the following command (Ignore the % at the end of the response): 

```bash
kubectl get secrets ocean-controller-ocean-kubernetes-controller -n spot-system --template={{.data.token}} | base64 --decode
```
Example Response: 
```bash
abcdef124567890ghijk123456789abcdfghijk123456bcdefjik12346890000% 
```
6. Verify that the token exists and that the user associated with the token exists and can make Spot API calls to resources in the account where the cluster exists: [Permanent API Tokens](https://console.spotinst.com/settings/v2/tokens/permanent).

In case your account ID or token is incorrect or invalid, the controller pod will be in a Terminating/CrashLoopBackOff state and in the container logs (Refer to Step 5) you will see an unauthorized response as shown below: 

```bash
WARN   [DATE] [main] SpotinstApiService - Got status code different the SC_OK : 401 Body {  "request": {    "id": "123bc63bd-da6d-4f0e-aaeb-660edc1124",    "url": "/mcs/kubernetes/topology/autoScalerData?accountId=act-123bcdef&clusterIdentifier=test-&fastScale=false&kubernetesUniqueIdentifier=1b123abc-4a83-4d51-8536-64b402372ecb",    "method": "POST",    "timestamp": "DATE"  },  "response": {    "status": {      "code": 401,      "message": "Unauthorized"    }  }} 
ERROR  [DATE] [main] PushAutoScalerDataCmd - Failed to push autoScaler data. Errors: null 
ERROR  [DATE] [main] ControllerApplication - Failed to validate controller communication with spotinst APICo
```

### Step 3: Is the Ocean Controller Running? 

To see if the controller is running, run the following command on your kubectl enabled terminal: 

```bash
kubectl get pods -n spot-system | grep ocean-controller 
```

### Step 4: Is the Ocean Controller Running but not Responding? 

If the controller pod is running but is not responding, do the following: 

1.  The controller needs DNS resolution. Ensure the DNS pods are not in a pending state. 
```bash
kubectl get pods -n kube-system 
```
2.  If they are, check for the reason using the following command: 

```bash
kubectl describe pod 'dns-pod-name' -n kube-system 
```

3.  Try restarting the controller pod. 


### Step 5: Get Ocean Controller Logs 

If the steps above do not solve your issue, get the controller logs using the steps below. 

1.  The following command displays current pods running in the kube-system. Get the spotinst-controller pod name from the output. 

```bash
kubectl get pods -n spot-system 
```

2.  Get the controller logs: 

```bash
Kubectl logs ocean-controller-ocean-kubernetes-controller –n spot-system 
```
3. If you still encounter issues, contact Support via [online chat or email](https://spot.io/support/). 





