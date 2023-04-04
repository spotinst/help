# Ingress configuration

Some of the Ocean for Apache Spark features require inbound connectivity to be set up on the cluster. These features are:

- Notebooks
- Live driver and Kubernetes log streams while the Spark application is running
- Access to the Spark UI while the Spark application is running

By default, an Ocean for Apache Spark installation will provision a public load balancer. The load balancer is configured to only accept traffic from the Ocean for Apache Spark control plane IP address, and the communication is protected by mutual TLS.

The following configuration options allow you to customise this setup.

- [Load balancer service annotations](ocean-spark/configure-cluster/ingress?id=load-balancer-service-annotations)
- [AWS PrivateLink](ocean-spark/configure-cluster/ingress?id=aws-privatelink)
- [Use an existing load balancer](ocean-spark/configure-cluster/ingress?id=use-an-existing-load-balancer)
- [Node security group](ocean-spark/configure-cluster/ingress?id=node-security-group)
- [Use an existing ingress controller](ocean-spark/configure-cluster/ingress?id=use-an-existing-ingress-controller)
- [Installing the AWS Load Balancer Controller](ocean-spark/configure-cluster/ingress?id=installing-the-aws-load-balancer-controller)
- [Configuring timeouts](ocean-spark/configure-cluster/ingress?id=configuring-timeouts)
- [Allowing traffic from the Ocean Spark control plane](ocean-spark/configure-cluster/ingress?id=allowing-traffic-from-the-ocean-spark-control-plane)

## Load balancer service annotations

By default, Ocean for Apache Spark will create a `LoadBalancer` service called `ofas-ingress-nginx-controller` in the `spot-system` namespace. This service triggers the creation of a load balancer by your cloud provider. To customise the load balancer that gets provisioned, you can set additional annotations on the `LoadBalancer` service. Different annotations are supported on different cloud providers.

### Example cluster configuration

```json
{
  "cluster": {
    "config": {
      "ingress": {
        "loadBalancer": {
          "serviceAnnotations": {
            "service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags": "Environment=dev,Team=data-science",
            "service.beta.kubernetes.io/aws-load-balancer-nlb-target-type": "ip",
            "service.beta.kubernetes.io/aws-load-balancer-scheme": "internet-facing",
            "service.beta.kubernetes.io/aws-load-balancer-target-group-attributes": "preserve_client_ip.enabled=true",
            "service.beta.kubernetes.io/aws-load-balancer-type": "external"
          }
        }
      }
    }
  }
}
```

In this example for AWS, we choose to provision a Network Load Balancer instead of the default Classic Load Balancer. We also set additional tags on the load balancer and enable client IP preservation. Note that for this to work, you need to [install the AWS Load Balancer Controller](ocean-spark/configure-cluster/ingress?id=installing-the-aws-load-balancer-controller) on your cluster.

If you are adding configuration annotations to an existing load balancer service, you may need to re-create it in some cases for them to take effect. The easiest way to do this is to uninstall the `ofas-ingress-nginx` component. It will be re-installed automatically with the new configuration.

```sh
helm delete ofas-ingress-nginx -n spot-system
```

## AWS PrivateLink

You can configure your cluster so that the inbound connections go over an [AWS PrivateLink](https://aws.amazon.com/privatelink/) if you are using AWS. You can use this [Terraform example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/from-scratch-with-private-link) to set this up easily. Read on for more details.

### Prerequisites

The infrastructure necessary for the AWS PrivateLink connection must be set up in your AWS account:

- A target group with IP address target type, handling IPv4 traffic over TCP on port 443.
- A network load balancer which forwards traffic to the target group. This load balancer can be internal.
- VPC endpoint service. This VPC endpoint service should be connected to the network load balancer. You can set acceptance required to false, and add the Ocean Spark AWS account as an allowed principal (`arn:aws:iam::066597193667:root`). See [the AWS documentation](https://docs.aws.amazon.com/vpc/latest/privatelink/configure-endpoint-service.html) for more details.
- The AWS Load Balancer Controller should be [installed on your cluster](ocean-spark/configure-cluster/ingress?id=installing-the-aws-load-balancer-controller).

### Example cluster configuration

```json
{
  "cluster": {
    "config": {
      "ingress": {
        "loadBalancer": {
          "managed": false,
          "targetGroupArn": "arn:aws:elasticloadbalancing:region:XXXXXXXXXXXX:targetgroup/target-group-name/XXXXXXXXXXXXXXXX"
        },
        "privateLink": {
          "enabled": true,
          "vpcEndpointService": "com.amazonaws.vpce.region.vpce-svc-XXXXXXXXXXXXXXXXX"
        }
      }
    }
  }
}
```

Explanation:

- `loadBalancer.managed = false` - Ocean Spark will not provision a load balancer for the Ocean Spark cluster
- `loadBalancer.targetGroupArn` - The ARN of the target group linked with the load balancer you want to use. Ocean Spark will deploy a `TargetGroupBinding` called `ocean-spark-ingress` in the `spot-system` namespace linking the ingress controller service with the target group.
- `privateLink.enabled = true` - Enable AWS PrivateLink connection between Ocean Spark control plane and Ocean Spark cluster
- `privateLink.vpcEndpointService` - The VPC endpoint service name

You should see an endpoint connection appear on your endpoint service, with owner `066597193667`. The endpoint connection should be marked as available.

You should also make sure to set up your [node security group](ocean-spark/configure-cluster/ingress?id=node-security-group) to allow traffic from the load balancer.

## Use an existing load balancer

If you are using AWS, you can make Ocean for Apache Spark use an existing load balancer instead of provisioning a new one. Ocean Spark will still install an ingress controller, but it will be linked with an existing load balancer using a `TargetGroupBinding`.

### Prerequisites

- A target group with IP address target type, handling IPv4 traffic over TCP on port 443.
- An internet facing (network) load balancer which forwards traffic to the target group.
- The AWS Load Balancer Controller should be [installed on your cluster](ocean-spark/configure-cluster/ingress?id=installing-the-aws-load-balancer-controller).

### Example cluster configuration

```json
{
  "cluster": {
    "config": {
      "ingress": {
        "loadBalancer": {
          "managed": false,
          "targetGroupArn": "arn:aws:elasticloadbalancing:region:XXXXXXXXXXXX:targetgroup/XXX/XXX"
        },
        "customEndpoint": {
          "enabled": true,
          "address": "custom-address.example.com"
        }
      }
    }
  }
}
```

Explanation:

- `loadBalancer.managed = false` - Ocean Spark will not provision a load balancer for the Ocean Spark cluster
- `loadBalancer.targetGroupArn` - The ARN of the target group linked with the load balancer you want to use. Ocean Spark will deploy a `TargetGroupBinding` called `ocean-spark-ingress` in the `spot-system` namespace linking the ingress controller service with the target group.
- `customEndpoint` - You should set `enabled` to true, and the `address` field should contain the address that the Ocean Spark control plane will use to communicate with the Ocean Spark cluster. This should be the DNS name of your public load balancer.

Make sure to [set up your node security group](ocean-spark/configure-cluster/ingress?id=node-security-group) to allow traffic from the load balancer.

## Node security group

Your node security group must allow traffic from the load balancer, over TCP on port 443. For the load balancer health checks, you can either allow traffic from your VPC CIDR, or the private IP addresses used by the load balancer nodes. See the [AWS documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html#target-security-groups) for more information.

If everything is working as it should, you should see a healthy target in your target group. The target IP address should be the IP address of the `ofas-ingress-nginx-controller` pod running in the `spot-system` namespace.

Also make sure to enable client IP preservation, and open your node security group to traffic from the Ocean Spark control plane. See [the section on allowing traffic from the Ocean Spark control plane](ocean-spark/configure-cluster/ingress?id=allowing-traffic-from-the-ocean-spark-control-plane) for more details.

## Use an existing ingress controller

By default, Ocean for Apache Spark will install an `ingress-nginx` ingress controller. The ingress controller resides in the `spot-system` namespace, and is called `ofas-ingress-nginx`. The `ofas-ingress-nginx` controller is configured to only manage Ocean for Apache Spark ingresses using an ingress class with the name `spot-bigdata-nginx`. You can therefore safely allow Ocean for Apache Spark to deploy its own ingress controller, it will live alongside your existing ingress controller.

You can however configure the Ocean for Apache Spark installation to use an existing ingress controller instead of installing a new one. This is useful if you want to use Istio on your Ocean Spark cluster for example.

### Example cluster configuration

```json
{
  "cluster": {
    "config": {
      "ingress": {
        "controller": {
          "managed": false
        },
        "loadBalancer": {
          "managed": false
        },
        "customEndpoint": {
          "enabled": true,
          "address": "custom-address.example.com"
        }
      }
    }
  }
}
```

Explanation

- `controller.managed = false` - Ocean Spark will not install an ingress controller on the Ocean Spark cluster
- `loadBalancer.managed = false` - Ocean Spark will not provision a load balancer for the Ocean Spark cluster
- `customEndpoint` - You should set `enabled` to true, and the `address` field should contain the address that the Ocean Spark control plane will use to communicate with the Ocean Spark cluster. For example, this can be the `loadBalancer.ingress.hostname` of the `LoadBalancer` service on your Ocean Spark cluster.

### Setting up ingresses

If using your own ingress controller, the Ocean Spark installation will not provision ingresses for the services that need to be exposed, this must be done separately.

Ingresses are protected by mutual TLS. The `bigdata-operator` component is responsible for creating and updating a secret called `spot-bigdata-tls`, which contains the TLS certificates.

By default, this secret is created in the `spot-system` namespace. If this secret is required in a different namespace, you can label the namespace with `operator.bigdata.spot.io/injectTLSSecret=true`:

```sh
kubectl label namespace example-namespace operator.bigdata.spot.io/injectTLSSecret=true
```

Connections from the Ocean Spark control plane to the Ocean Spark cluster will use a hostname of the form `org-$SPOT_ORGANIZATION_ID-$OCEAN_SPARK_CLUSTER_ID.bigdata.svc.cluster.local`, where `$SPOT_ORGANIZATION_ID` is your Spot organization ID and `$OCEAN_SPARK_CLUSTER_ID` is your Ocean Spark cluster ID.

Example: `org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local`

You can find your Spot organization ID by navigating to the menu in the top right corner of the Spot console and clicking “My Organzation”. You can find your Ocean Spark cluster ID in the cluster list in the Spot console, it is of the form `osc-XXXXXXXX`.

#### Ingress-nginx

Example ingress definitions (remember to change the host name and the ingress class):

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/auth-tls-secret: spot-system/spot-bigdata-tls
    nginx.ingress.kubernetes.io/auth-tls-verify-client: "on"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
    nginx.ingress.kubernetes.io/rewrite-target: /$1
  name: bigdata-notebook-service
  namespace: spot-system
spec:
  ingressClassName: nginx
  rules:
    - host: org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local
      http:
        paths:
          - backend:
              service:
                name: bigdata-notebook-service
                port:
                  number: 80
            path: /bigdata-notebook-service/?(.*)
            pathType: Prefix
  tls:
    - hosts:
        - org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local
      secretName: spot-bigdata-tls
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/auth-tls-secret: spot-system/spot-bigdata-tls
    nginx.ingress.kubernetes.io/auth-tls-verify-client: "on"
    nginx.ingress.kubernetes.io/rewrite-target: /$1
  name: bigdata-proxy
  namespace: spot-system
spec:
  ingressClassName: nginx
  rules:
    - host: org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local
      http:
        paths:
          - backend:
              service:
                name: bigdata-proxy
                port:
                  number: 80
            path: /bigdata-proxy/?(.*)
            pathType: Prefix
  tls:
    - hosts:
        - org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local
      secretName: spot-bigdata-tls
```

#### Istio Ingress Gateway

The TLS secret must be present in the namespace that your gateway is installed in. Make sure to enable TLS secret injection for that namespace, for example:

```sh
kubectl label namespace istio-ingress operator.bigdata.spot.io/injectTLSSecret=true
```

If this is not done, you may see warning logs like this in the log output of your `istiod` service:

```sh
$ kubectl logs istiod-584b74f7f9-XXXX -n istio-system

istiod-584b74f7f9-g7wkz discovery 2023-03-22T12:46:56.728332Z	warn	ads	failed to fetch ca certificate for kubernetes://spot-bigdata-tls-cacert: secret istio-ingress/spot-bigdata-tls not found
istiod-584b74f7f9-g7wkz discovery 2023-03-22T12:46:56.728347Z	warn	ads	failed to fetch key and certificate for kubernetes://spot-bigdata-tls: secret istio-ingress/spot-bigdata-tls not found
```

Now you can create a `Gateway` and `VirtualService` to expose the `bigdata-proxy` and `bigdata-notebook-service` services. For example (remember to change the host name):

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: ocean-spark-gateway
  namespace: spot-system
spec:
  selector:
    istio: ingress
  servers:
    - port:
        number: 443
        name: https
        protocol: HTTPS
      tls:
        mode: MUTUAL
        credentialName: spot-bigdata-tls
      hosts:
        - org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ocean-spark-virtual-service
  namespace: spot-system
spec:
  hosts:
    - org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local
  gateways:
    - ocean-spark-gateway
  http:
    - match:
        - uri:
            prefix: /bigdata-proxy/
      rewrite:
        uri: /
      route:
        - destination:
            host: bigdata-proxy.spot-system.svc.cluster.local
            port:
              number: 80
    - match:
        - uri:
            prefix: /bigdata-notebook-service/
      rewrite:
        uri: /
      route:
        - destination:
            host: bigdata-notebook-service.spot-system.svc.cluster.local
            port:
              number: 80
```

Make sure that the Gateway selector matches your installation (`istio: ingress` in the example above). It should match the ingress gateway pod labels. See the [Istio documentation](https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/) for more details.

Also make sure to turn off [Istio sidecar injection](ocean-spark/configure-cluster/spark-application-namespaces?id=istio-sidecar-injection) in your Spark application namespaces.

## Installing the AWS Load Balancer Controller

To use advanced load balancer configurations on AWS, you should install the AWS Load Balancer Controller on your cluster. See [AWS documentation](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) for instructions.

Make sure that your node security group allows traffic from the Kubernetes control plane security group over TCP on port 9443 (default). If not, you may see errors in the AWS Load Balancer Controller logs indicating that the AWS Load Balancer Controller webhook cannot be reached.

## Configuring timeouts

When a notebook is started, the Ocean Spark control plane will issue a long running request which waits for the notebook to start running. We therefore recommend to increase the request timeout.

This can be done via an annotation on your `LoadBalancer` service:

```yaml
# AWS
service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout: "1800"

# Azure
service.beta.kubernetes.io/azure-load-balancer-tcp-idle-timeout: "30"
```

## Allowing traffic from the Ocean Spark control plane

You can make sure that only the Ocean Spark control plane can reach your nodes. This can be done by setting the `loadBalancerSourceRanges` of your `LoadBalancer` service to the IP address of the Ocean Spark control plane (`54.198.192.164/32`):

```yaml
spec:
  loadBalancerSourceRanges:
    - 54.198.192.164/32
```

You can also do this manually, by adding an entry to your node security group to allow traffic over TCP on port 443 from source `54.198.192.164/32`.

You should also make sure that client IP addresses are preserved.

On AWS, you can find this under Target Group → Attributes → Preserve client IP addresses. You can also set an annotation on your `LoadBalancer` service:

```yaml
service.beta.kubernetes.io/aws-load-balancer-target-group-attributes: preserve_client_ip.enabled=true
```

If this is not done, and you have allowed traffic from the load balancer to your nodes over TCP on port 443 (for health checks), any traffic will be let through as it appears to come from the load balancer itself.

See the [AWS documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.
