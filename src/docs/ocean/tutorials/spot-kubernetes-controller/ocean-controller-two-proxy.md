<meta name=“robots” content=“noindex”>
# Proxy Settings

This topic describes configuring the Ocean Controller Version 2 for **AWS K8s** Proxy. 

## Proxy Configuration 

The Ocean Controller supports connecting to the Spot APIs via a proxy. The proxy should be configured by adding the
`--set spotinst.proxyUrl` to the Helm install command. 

```bash

helm upgrade --install --wait ocean-controller spot/ocean-kubernetes-controller \ 
  --namespace "spot-system" --create-namespace \ 
  --set spotinst.account=$SPOTINST_ACCOUNT \ 
  --set spotinst.clusterIdentifier=$SPOTINST_CLUSTER_IDENTIFIER \ 
  --set spotinst.token=$SPOTINST_TOKEN \ 
  --set spotinst.proxyUrl=$SPOTINST_PROXY_URL

```

## TLS Terminating Proxies 

Some proxies inspect TLS traffic by terminating the client's connection at the proxy and making its own connection to the destination. In these cases, the proxy will usually generate its own certificate to present to the client, which the client must then trust. 

The Ocean Controller connects to the Spot APIs using TLS endpoints and expects a trusted certificate. In the case of proxies that terminate the TLS connection at the Proxy, the issuing Certificate Authority (CA) of the certificate that the proxy presents to the Ocean Controller must be added to its list of trusted CAs. 

To be able to add these "extra CAs" to the Ocean Controller, we provide a way that you can add certificates to a secret which will be added to the trust chain for the controller. 

## Adding Trusted CAs 

To add “extra pems,” add the certificate(s) to userEnvCertificates.pem. The certificates must be in PEM format. 

```bash
helm upgrade --install --wait ocean-controller spot/ocean-kubernetes-controller  
  --set spotinst.account=$SPOTINST_ACCOUNT \ 
  --set spotinst.clusterIdentifier=$SPOTINST_CLUSTER_IDENTIFIER \ 
  --set spotinst.token=$SPOTINST_TOKEN \ 
  --set spotinst.proxyUrl=$SPOTINST_PROXY_URL \ 
  --set caBundleSecret.create=true \ 
  --set caBundleSecret.data="$(cat ./userEnvCertificates.pem)" 

```

You must restart the pod and add the additional CAs to the Ocean Controller's list of trusted CAs so they can connect to Spot APIs. 

## Discovering Proxy Certificate Authority 

If you do not have the certificates provided, you need to discover the certificate authority used by the proxy. You can find the certificate chain from a host or pod that can connect to the proxy. The host or pod needs to be installed with OpenSSL tools. 

For example, run a network diagnostics pod in the cluster using: `kubectl run --rm -ti netshoot --image=nicolaka/netshoot -- bash` 


>**Tip**: For more information about the netshoot image, see https://github.com/nicolaka/netshoot.

Once you have a shell inside the pod or on the host, you can run `openssl s_client -showcerts -connect api.spotinst.com:443 -servername api.spotinst.com -proxy proxy.example.com:8080` where you can replace the proxy with the hostname/IP address and port of your own proxy. 

In the output, you will be able to see the certificate chain provided for the TLS connection. There will usually be 2-3 certificates in the chain where the last one listed is the Certificate Authority. You can copy this certificate in PEM format and add it to the secret. 

Example PEM Certificate from openssl Output:

```bash
userEnvCertificates.pem 
-----BEGIN CERTIFICATE----- 
MIIDzjCCAragAwIBAgIJAMJUvQUNey/kMA0GCSqGSIb3DQEBCwUAMEgxGDAWBgNV 
BAMMD1Nwb3QgRXhhbXBsZSBDQTENMAsGA1UECgwEU3BvdDEQMA4GA1UECwwHc3Bv 
dC5pbzELMAkGA1UEBhMCVVMwHhcNMjExMTA4MTY0ODUzWhcNMzExMTA2MTY0ODUz 
WjBIMRgwFgYDVQQDDA9TcG90IEV4YW1wbGUgQ0ExDTALBgNVBAoMBFNwb3QxEDAO 
BgNVBAsMB3Nwb3QuaW8xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOC 
AQ8AMIIBCgKCAQEApq8dGief0kxZ+FRofYkQmCv9YCMtbEkF8ahwn0Ap5mAuZR2r 
aDp/xpP9DCiEv9QkxkvonLOtOXiSTt8Vo6RyOd5VkugrbvlLEDvQ8OVnQ91NL3Wv 
oHO9DqkuZyPdk2+yKdyKfqbJ8C0PEST8z4DkSUsG4HM+EqNZYQkhnw/4jb3sOg5O 
ZCE67Pwtaxq9G4OoLX1qih4V4Np9zTQ0SAZOXr1mC/Yos/PmAzfPbPvDTQUhcmdH 
GoKYaFmwFUAaxTJeINaveVjTlfACt3JvfQeO3CpCIet1IZPU/4QISe6zULcLR304 
qeDd1Kegm3DIdh6/PrduHWLBwMW91LIOUgZ/KQIDAQABo4G6MIG3MB0GA1UdDgQW 
BBRE/pfZTGQJEoyUYkyreMMq1ZoukzB4BgNVHSMEcTBvgBRE/pfZTGQJEoyUYkyr 
eMMq1Zouk6FMpEowSDEYMBYGA1UEAwwPU3BvdCBFeGFtcGxlIENBMQ0wCwYDVQQK 
DARTcG90MRAwDgYDVQQLDAdzcG90LmlvMQswCQYDVQQGEwJVU4IJAMJUvQUNey/k 
MA8GA1UdEwEB/wQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqGSIb3DQEBCwUAA4IB 
AQCKIlWTMbpWt7xowmC+juRQOAYn0GNbM9Zz71WQiAuIwmlrcQGXc2aSCqat7KM0 
1awqJG8kdKgL1bRm7ImUlo7JZeEHtX1c4GIdfMW+RewbjidUEUhAONn21l/cQIj7 
r6TTmKUulNSEUYOYW78exmO0LpNVItWSDtccFjX9eVoz+LZ5sCh2ixHK2f78ImpH 
3cdwUXQ7FH1Un9siSdyl0cJCIW4R9MfLJxvoHFNfTvwZN08TZuFpDAVrCKlQ5UX8 
Rrq0upb0pKZYDUTxUAP//VFkxaQtC1XiD2ZdycVRytcqJaNcV4/9y3XmUzABLk2n 
y8CKbiq0lxTS2xS/1P16qlLB 
-----END CERTIFICATE-----
```
