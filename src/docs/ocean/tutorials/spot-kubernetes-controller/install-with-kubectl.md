# Install with kubectl

To install the Ocean Controller, follow the steps below.

## 1. Create the file secret.yaml with the following parameters:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: spotinst-kubernetes-cluster-controller
  namespace: kube-system
type: Opaque
data:
  token: <TOKEN_encoded_base64>
  account: <ACCOUNT_ID_encoded_base64>
```

Replace <TOKEN_encoded_base64>, <ACCOUNT_ID_encoded_base64> with the appropriate values.
You may use the following command ran via terminal to get the relevant encoded outputs: `echo -n 'input' | openssl base64`.
Run the command for each of the inputs (account id, token) separately.

Create the secret by running: `kubectl apply -f secret.yaml`

## 2. Create the file configMap.yaml with the following parameters:

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: spotinst-kubernetes-cluster-controller-config
  namespace: kube-system
data:
  spotinst.cluster-identifier: <IDENTIFIER>
  proxy-url: <Proxy-URL>
  disable-auto-update: <"true"/"false">
```

> **Tip**: As an alternative for using a secret, create yaml file configMap.yaml with all the relevant parameters (Token, Account_ID, Identifier):

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: spotinst-kubernetes-cluster-controller-config
  namespace: kube-system
data:
  spotinst.token: <TOKEN>
  spotinst.account: <ACCOUNT_ID>
  spotinst.cluster-identifier: <IDENTIFIER>
  proxy-url: <Proxy-URL>
  disable-auto-update: <"true"/"false">
```

Replace `<TOKEN>`, `<ACCOUNT_ID>`, and `<IDENTIFIER>` with the appropriate values. Optionally, provide `<Proxy-URL>`. A Proxy URL will be a URL value, for example, "http://proxy.example.com:8080/".

### Optional Parameters

- `proxy-url` is an optional parameter for when you need to use a proxy in your cluster and is supported in Controller Version 1.0.45 and above.
- `disable-auto-update` is an optional parameter, set to False by default. In case you want to disable the controller's auto-update functionality you can set it to True.

For more information on proxy configuration see [Proxy Settings](ocean/tutorials/spot-kubernetes-controller/proxy-settings) page.

Load the parameters into the cluster configuration:
`kubectl apply -f configMap.yaml`

## 3. Install the controller and its dependencies.

`kubectl apply -f https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-ga.yaml`

Always download the YAML file from the Spot S3 bucket. The file is updated frequently.

The controller is now installed and should be reporting its heartbeat to Spot.io.

## What’s Next?

Learn more about [troubleshooting the controller](ocean/troubleshooting/troubleshoot-controller).
