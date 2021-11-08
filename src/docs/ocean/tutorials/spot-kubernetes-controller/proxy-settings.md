# Ocean Controller Proxy settings

## Proxy Configuration

The Ocean Controller supports connecting to the Spot APIs via a Proxy when it is required. The proxy should be configured in the Spot Controller ConfigMap where `proxy-url` and is an optional parameter. It is supported in Controller Version 1.0.45 and above.

Example:

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

Replace `<IDENTIFIER>` and `<Proxy-URL>` with the appropriate values.
A Proxy URL will be a url value, for example "http://proxy.mydomain.com:8080/"

To create or update your configuration you can save the ConfigMap yaml to a file and apply it using `kubectl apply -f <filename>`

## TLS Terminating Proxies

Some proxies inspect TLS traffic by terminating the client's connection at the Proxy and making it's own connection to the destination. In these cases the proxy will usually generate it's own certificate to present to the client, which the client must then trust.

The Ocean Controller makes connections to the Spot APIs using TLS endpoints and expects a trusted certificate. In the case of proxies that terminate the TLS connection at the Proxy, the root/issuing Certificat Authority (CA) of the certificate that the proxy presents to the Ocean Controller must be added to it's list of trusted CAs.

To be able to add these "extra CAs" to the Ocean Controller we provide a way that you can add certificates to a Secret which will be added to the trust chain for the controller.

### Adding Trusted CAs

In order to add “extra pems” you need to, you need to add the certificate(s) to a file name ‘userEnvCertificates.pem’. The cerificates should be in PEM format.

Create a Secret with the certificates, `kubectl -n kube-system create secret generic spotinst-kubernetes-cluster-controller-ca-bundle --from-file=userEnvCertificates.pem`

If the Ocean Controller was already running it will require a restart, it can be restarted by deleting the running Pod, `kubectl -n kube-system delete pod -l k8s-addon=spotinst-kubernetes-cluster-controller.addons.k8s.io`

Once the Pod is started again the additinal CAs should be added to the controllers list of trusted CAs can connect to Spot APIs.
