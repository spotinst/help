# Create an Ocean Spark Cluster

There are several ways to deploy an Ocean Spark cluster:

- Create a new Kubernetes cluster from scratch
- Import an existing Kubernetes cluster to Ocean Spark
- Import an existing Ocean cluster to Ocean Spark

Each method is described below. Choose the method right for you.

## Create a New Kubernetes Cluster from Scratch

### Using spotctl (AWS only)

1. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (and configure it for your AWS account), the Kubernetes [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) utility, and the [spotctl command-line tool](https://github.com/spotinst/spotctl#installation).

2. Create a cluster by running the command:

```
$ spotctl ocean spark create cluster --region $YOUR_REGION --cluster-name $MY_CLUSTER_NAME
```

This command will create a new EKS cluster, a new VPC, subnets, and other resources required to make Ocean Spark functional.

### Using Terraform

**Option 1**: Deploy Ocean Spark cluster in an existing VPC.
Follow [this example on AWS](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/from-private-vpc) or [this example on GCP](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/gcp-from-vpc) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest).

**Option 2**: Deploy Ocean Spark cluster in a new VPC.
Follow [this example on AWS](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/from-scratch) or [this example on GCP](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/gcp-from-scratch) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest).

### Additional Method

You can also follow the documentation on how to get started with Ocean, and then use the method described below to import an existing Ocean cluster into Ocean Spark.

## Import an Existing Kubernetes Cluster to Ocean Spark

### Using Terraform

Follow [this example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/import-eks-cluster) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest) to import an existing EKS cluster (AWS) into Ocean Spark. To import an existing GKE cluster (GCP), use [this example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/gcp-import-gke-cluster).

### Additional Method

You can also follow the documentation on [how to get started with Ocean](ocean/getting-started/), and then use the method described below to import an existing Ocean cluster into Ocean Spark.

## Import an Existing Ocean Cluster to Ocean Spark

Ocean Spark leverages Ocean under the hood, so it’s easy to import an existing Ocean cluster into Ocean Spark. Running this step will install a few additional pods on your Ocean cluster. These pods will enable the features related to monitoring and optimization specific to Apache Spark.

### Using spotctl (AWS only)

1. Make sure you can connect to the target Kubernetes cluster with the Kubernetes [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) utility. On AWS, install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (and configure it for your AWS account).
2. Install the [spotctl command-line tool](https://github.com/spotinst/spotctl#installation).
3. Create a cluster by running this command, where the Ocean cluster ID is of the format o-XXXXXXXX:

```
$ spotctl ocean spark create cluster --cluster-id $YOUR_OCEAN_CLUSTER_ID
```

### Using Terraform

Follow [this example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/import-ocean-cluster) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest).

## Monitor your Ocean Spark Cluster Deployment

When you start running the script or command to create the cluster, the following major events take place:

1. Kubernetes cluster creation (If creating a cluster from scratch). The duration of this step varies depending on the cloud provider, but this can take 20 minutes or more. You may be able to track progress from your cloud provider console.
2. Ocean controller installation. The Ocean controller is installed on the cluster. The cluster is then registered with Spot and will be visible in the Spot console (under the Ocean UI).
3. Ocean Spark controller installation. The Ocean Spark components are then installed, and the cluster will be visible in the Spot console (under the Ocean Spark UI).

You can view the status of the newly created cluster on the Cluster page of the Ocean Spark console. The cluster status should move from Progressing to Available as the creation completes. Other statuses indicate an error. You can troubleshoot in the list of common issues below.

## Requirements for a Functioning Ocean Spark Cluster

This section provides a list of requirements for an Ocean Spark cluster deployment.

### AWS

- The Kubernetes cluster should run one of Kubernetes versions 1.19, 1.20, 1.21 or 1.22.
- The VPC subnets should have the [proper tags](https://aws.amazon.com/premiumsupport/knowledge-center/eks-vpc-subnet-discovery/) to be discoverable by Kubernetes:
  - On all subnets: `kubernetes.io/cluster/<eks-cluster-name>: shared`
  - On public subnets: `kubernetes.io/role/elb: 1`
- The instance profile assumed by cluster nodes should have:
  - The [required permissions](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) for EKS
- The permission to create security groups within the VPC
- The cluster nodes should be in a security groups that allows them:
  - To connect to one another
  - To reach the Internet
  - To connect to the Kubernetes API (which is in the cluster security group)
- If nodes are run in private subnets, make sure a NAT gateway is available in the cluster to enable egress to the Internet.
- All the Ocean Spark Virtual Node Groups (VNGs) should have access to the same subnets, or at least to the same availability zones (AZs).

### GCP

- The Kubernetes cluster should run one of Kubernetes versions 1.19, 1.20, 1.21 or 1.22.
- The service account assumed by cluster nodes should have at least the following roles: `monitoring.viewer`, `monitoring.metricWriter`, `logging.logWriter`, and `stackdriver.resourceMetadata.writer`. More details in [this section of GCP doc](https://cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster#use_least_privilege_sa)
- If Spark applications use custom Docker images stored in Container Registry, the node service account should also have `objectViewer` access to the GCS bucket where the Docker images are stored.
- The cluster nodes should be allowed:
  - To connect to one another
  - To reach the Internet
  - To connect to the Kubernetes API
- If the cluster nodes are private, make sure a NAT service is installed in the Cloud Router of the VPC.
- All the Ocean Spark Virtual Node Groups (VNGs) should have access to the same subnets, or at least to the same locations (also called availability zones by analogy with AWS).

## Additional cluster configuration

### Customizing ingress

Some of the Ocean for Apache Spark features require inbound connectivity to be set up on the cluster. These features are:

- Notebooks
- Live driver and Kubernetes log streams while the Spark application is running
- Access to the Spark UI while the Spark application is running

By default, an Ocean for Apache Spark installation will provision a public load
balancer. The load balancer is configured to only accept traffic from the Ocean
for Apache Spark control plane IP address, and the communication is protected by
mutual TLS.

The following configuration options allow you to customise this setup.

#### Load balancer service annotations

By default, Ocean for Apache Spark will create a `LoadBalancer` service called
`ofas-ingress-nginx-controller` in the `spot-system` namespace. This service
triggers the creation of a load balancer by your cloud provider. To customise
the load balancer that gets provisioned, you can set additional annotations on
the `LoadBalancer` service. Different annotations are supported on different cloud
providers.

##### Example cluster configuration:

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

In this example for AWS, we choose to provision a Network Load Balancer instead
of the default Classic Load Balancer. We also set additional tags on the load
balancer and enable client IP preservation. Note that for this to work, you need
to [install the AWS Load Balancer](ocean-spark/getting-started/create-cluster?id=installing-the-aws-load-balancer-controller) Controller on your cluster.

If you are adding configuration annotations to an existing load balancer
service, you may need to re-create it in some cases for them to take effect. The
easiest way to do this is to uninstall the `ofas-ingress-nginx` component. It will
be re-installed automatically with the new configuration.

```sh
helm delete ofas-ingress-nginx -n spot-system
```

### AWS PrivateLink

You can configure your cluster so that the inbound connections go over an [AWS
PrivateLink](https://aws.amazon.com/privatelink/) if you are using AWS. You can
use this [Terraform
example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/from-scratch-with-private-link)
to set this up easily. Read on for more details.

#### Prerequisites

The infrastructure necessary for the AWS PrivateLink connection must be set up in your AWS account:

- A target group with IP address target type, handling IPv4 traffic over TCP on port 443.
- A network load balancer which forwards traffic to the target group. This load balancer can be internal.
- VPC endpoint service. This VPC endpoint service should be connected to the
  network load balancer. You can set acceptance required to false, and add the
  Ocean Spark AWS account as an allowed principal
  (`arn:aws:iam::066597193667:root`). See [the AWS
  documentation](https://docs.aws.amazon.com/vpc/latest/privatelink/configure-endpoint-service.html)
  for more details.
- The AWS Load Balancer Controller should be [installed on your cluster](ocean-spark/getting-started/create-cluster?id=installing-the-aws-load-balancer-controller).

#### Example cluster configuration:

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

- `loadBalancer.managed = false` - Ocean Spark will not provision a load balancer
  for the Ocean Spark cluster
- `loadBalancer.targetGroupArn` - The ARN of the target group linked with the load
  balancer you want to use. Ocean Spark will deploy a `TargetGroupBinding` called
  `ocean-spark-ingress` in the `spot-system` namespace linking the ingress
  controller service with the target group.
- `privateLink.enabled = true` - Enable AWS PrivateLink connection between Ocean
  Spark control plane and Ocean Spark cluster
- `privateLink.vpcEndpointService` - The VPC endpoint service name

You should see an endpoint connection appear on your endpoint service, with
owner `066597193667`. The endpoint connection should be marked as available.

You should also make sure to set up your [node security
group](ocean-spark/getting-started/create-cluster?id=node-security-group) to
allow traffic
from the load balancer.

### Use an existing load balancer

If you are using AWS, you can make Ocean for Apache Spark use an existing load
balancer instead of provisioning a new one. Ocean Spark will still install an
ingress controller, but it will be linked with an existing load balancer using a
`TargetGroupBinding`.

#### Prerequisites

- A target group with IP address target type, handling IPv4 traffic over TCP on port 443.
- An internet facing (network) load balancer which forwards traffic to the target group.
- The AWS Load Balancer Controller should be [installed on your cluster](ocean-spark/getting-started/create-cluster?id=installing-the-aws-load-balancer-controller).

#### Example cluster configuration:

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

- `loadBalancer.managed = false` - Ocean Spark will not provision a load balancer
  for the Ocean Spark cluster
- `loadBalancer.targetGroupArn` - The ARN of the target group linked with the load
  balancer you want to use. Ocean Spark will deploy a `TargetGroupBinding` called
  `ocean-spark-ingress` in the `spot-system` namespace linking the ingress
  controller service with the target group.
- `customEndpoint` - You should set `enabled` to true, and the `address` field should
  contain the address that the Ocean Spark control plane will use to communicate
  with the Ocean Spark cluster. This should be the DNS name of your public load
  balancer.

Make sure to [set up your node security
group](ocean-spark/getting-started/create-cluster?id=node-security-group) to
allow traffic from the load balancer.

### Node security group

Your node security group must allow traffic from the load balancer, over TCP on
port 443. For the load balancer health checks, you can either allow traffic from
your VPC CIDR, or the private IP addresses used by the load balancer nodes. See
the [AWS
documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html#target-security-groups)
for more information.

If everything is working as it should, you should see a healthy target in your
target group. The target IP address should be the IP address of the
`ofas-ingress-nginx-controller` pod running in the `spot-system` namespace.

Also make sure to enable client IP preservation, and open your node security
group to traffic from the Ocean Spark control plane. See [the section on allowing
traffic from the Ocean Spark control plane](ocean-spark/getting-started/create-cluster?id=allowing-traffic-from-the-ocean-spark-control-plane) for more details.

### Use an existing ingress controller

By default, Ocean for Apache Spark will install an `ingress-nginx` ingress
controller. The ingress controller resides in the `spot-system` namespace, and is
called `ofas-ingress-nginx`. The `ofas-ingress-nginx` controller is configured to
only manage Ocean for Apache Spark ingresses using an ingress class with the
name `spot-bigdata-nginx`. You can therefore safely allow Ocean for Apache Spark
to deploy its own ingress controller, it will live alongside your existing
ingress controller.

You can however configure the Ocean for Apache Spark installation to use an
existing ingress controller instead of installing a new one. This is useful if
you want to use Istio on your Ocean Spark cluster for example.

#### Example cluster configuration:

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

- `controller.managed = false` - Ocean Spark will not install an ingress
  controller on the Ocean Spark cluster
- `loadBalancer.managed = false` - Ocean Spark will not provision a load balancer
  for the Ocean Spark cluster
- `customEndpoint` - You should set `enabled` to true, and the `address` field should
  contain the address that the Ocean Spark control plane will use to communicate
  with the Ocean Spark cluster. For example, this can be the
  `loadBalancer.ingress.hostname` of the `LoadBalancer` service on your Ocean Spark
  cluster.

#### Setting up ingresses

If using your own ingress controller, the Ocean Spark installation will not
provision ingresses for the services that need to be exposed, this must be done
separately.

Ingresses are protected by mutual TLS. The `bigdata-operator` component is
responsible for creating and updating a secret called `spot-bigdata-tls`, which
contains the TLS certificates.

By default, this secret is created in the `spot-system` namespace. If this secret
is required in a different namespace, you can label the namespace with
`operator.bigdata.spot.io/injectTLSSecret=true`:

```sh
kubectl label namespace example-namespace operator.bigdata.spot.io/injectTLSSecret=true
```

Connections from the Ocean Spark control plane to the Ocean Spark cluster will use a hostname of the form `org-$SPOT_ORGANIZATION_ID-$OCEAN_SPARK_CLUSTER_ID.bigdata.svc.cluster.local`, where `$SPOT_ORGANIZATION_ID` is your Spot organization ID and `$OCEAN_SPARK_CLUSTER_ID` is your Ocean Spark cluster ID.

Example: `org-6060XXXXXXXX-osc-XXXXXXXX.bigdata.svc.cluster.local`

You can find your Spot organization ID by navigating to the menu in the top
right corner of the Spot console and clicking “My Organzation”. You can find
your Ocean Spark cluster ID in the cluster list in the Spot console, it is of
the form `osc-XXXXXXXX`.

##### Ingress-nginx

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

##### Istio Ingress Gateway

The TLS secret must be present in the namespace that your gateway is installed
in. Make sure to enable TLS secret injection for that namespace, for example:

```sh
kubectl label namespace istio-ingress operator.bigdata.spot.io/injectTLSSecret=true
```

If this is not done, you may see warning logs like this in the log output of
your `istiod` service:

```sh
$ kubectl logs istiod-584b74f7f9-XXXX -n istio-system

istiod-584b74f7f9-g7wkz discovery 2023-03-22T12:46:56.728332Z	warn	ads	failed to fetch ca certificate for kubernetes://spot-bigdata-tls-cacert: secret istio-ingress/spot-bigdata-tls not found
istiod-584b74f7f9-g7wkz discovery 2023-03-22T12:46:56.728347Z	warn	ads	failed to fetch key and certificate for kubernetes://spot-bigdata-tls: secret istio-ingress/spot-bigdata-tls not found
```

Now you can create a `Gateway` and `VirtualService` to expose the
`bigdata-proxy` and `bigdata-notebook-service` services. For example (remember
to change the host name):

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

Make sure that the Gateway selector matches your installation (`istio: ingress`
in the example above). It should match the ingress gateway pod labels. See the
[Istio
documentation](https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/)
for more details.

Also make sure to turn off [Istio sidecar
injection](https://spotinst.atlassian.net/wiki/spaces/BD/pages/edit-v2/2635563020#Istio-sidecar-injection)
in your Spark application namespaces.

### Installing the AWS Load Balancer Controller

To use advanced load balancer configurations on AWS, you should install the AWS
Load Balancer Controller on your cluster. See [AWS
documentation](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)
for instructions.

Make sure that your node security group allows traffic from the Kubernetes
control plane security group over TCP on port 9443 (default). If not, you may
see errors in the AWS Load Balancer Controller logs indicating that the AWS Load
Balancer Controller webhook cannot be reached.

### Configuring timeouts

When a notebook is started, the Ocean Spark control plane will issue a long
running request which waits for the notebook to start running. We therefore
recommend to increase the request timeout.

This can be done via an annotation on your `LoadBalancer` service:

```yaml
# AWS
service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout: "1800"

# Azure
service.beta.kubernetes.io/azure-load-balancer-tcp-idle-timeout: "30"
```

### Allowing traffic from the Ocean Spark control plane

You can make sure that only the Ocean Spark control plane can reach your nodes.
This can be done by setting the `loadBalancerSourceRanges` of your
`LoadBalancer` service to the IP address of the Ocean Spark control plane
(`54.198.192.164/32`):

```yaml
spec:
  loadBalancerSourceRanges:
    - 54.198.192.164/32
```

You can also do this manually, by adding an entry to your node security group to
allow traffic over TCP on port 443 from source `54.198.192.164/32`.

You should also make sure that client IP addresses are preserved.

On AWS, you can find this under Target Group → Attributes → Preserve client IP
addresses. You can also set an annotation on your `LoadBalancer` service:

```yaml
service.beta.kubernetes.io/aws-load-balancer-target-group-attributes: preserve_client_ip.enabled=true
```

If this is not done, and you have allowed traffic from the load balancer to your
nodes over TCP on port 443 (for health checks), any traffic will be let through
as it appears to come from the load balancer itself.

See the [AWS
documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation)
for more information.

### Log collection

The Ocean Spark platform will collect logs from Spark applications. These logs are

- The Spark event log
- The Spark driver log
- The Spark executor logs
  The Spark event log contains information from the Spark runtime. It is used to
  e.g. calculate metrics for the Spark application, analyse its efficiency and
  identify issues. It is also used to power the Spark UI, after the Spark
  application has finished.

The Spark driver and executor logs are the log streams from the Spark pods. They
are collected and made available for download after the Spark application has
finished.

You can turn off driver and executor log collection on your Ocean Spark cluster.

#### Example cluster configuration:

```json
{
  "cluster": {
    "config": {
      "logCollection": {
        "collectDriverLogs": false
      }
    }
  }
}
```

### Spark application namespaces

By default, Ocean for Apache Spark will run Spark applications in the `spark-apps` namespace.
You can configure additional Spark application namespaces on your Ocean Spark cluster.

#### Example cluster configuration:

```json
{
  "cluster": {
    "config": {
      "spark": {
        "appNamespaces": ["extra-spark-app-ns-1", "extra-spark-app-ns-2"]
      }
    }
  }
}
```

The `spark-apps` namespace is always present and used by default if no namespace
is specified in the Spark application submission. It is not necessary to create
these namespaces beforehand, the `bigdata-operator` component will create them if
they do not exist already.

### Istio sidecar injection

If you are using Istio, we recommend to turn off Istio sidecar injection in the
Spark application namespaces since the sidecar can interfere with the Spark pod
lifecycle.

For example:

```sh
kubectl label namespace spark-apps istio-injection=disabled --overwrite
```

See the [Istio
documentation](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/#controlling-the-injection-policy)
for more details.

### Webhook configuration

One of the Ocean for Apache Spark components, the Spark Operator, runs a
`MutatingAdmissionWebhook` to mutate Spark pods as they are submitted to the
cluster.

If you are running on AWS EKS and using a custom CNI like Calico, you may need
to enable host networking for the webhook to work.

#### Example cluster configuration:

```json
{
  "cluster": {
    "config": {
      "webhook": {
        "useHostNetwork": true,
        "hostNetworkPorts": [25554]
      }
    }
  }
}
```

Make sure that your node security group allows traffic from the Kubernetes
control plane security group over TCP on the host network port. If it is not
allowed you may see errors like `Operation: [create] for kind: [Pod] with name: [null] in namespace: [spark-apps] failed` and `java.net.SocketTimeoutException: timeout` in the Spark Operator logs.

### VNG configuration

By default, Ocean for Apache Spark will create three Virtual Node Groups (VNGs)
on your Ocean cluster when the Ocean Spark cluster is created:

- ocean-spark-on-demand
- ocean-spark-spot
- ocean-spark-system

If you prefer to create these VNGs through other means, like terraform, you can turn this off.

By default, the automatically created VNGs use taints to prevent non-Spark
workloads from running on them. If you desire, you can turn this off as well.
Example cluster configuration:

```json
{
  "cluster": {
    "config": {
      "compute": {
        "createVngs": true/false,
        "useTaints": true/false
      }
    }
  }
}
```

Note that these configuration options only have an effect in the initial cluster creation call.

#### Creating ARM-specific VNGs

To run ARM workload on Ocean for Apache Spark, you first need to create VNGs to
manage your ARM instances. As with AMD you need to create two VNGs, one for on
demand and one for spot instances. Finally, dedicate those VNGs to Ocean for
Apache Spark.

##### AWS ARM VNG setup

When creating and ARM VNG you need to select an Amazon Machine Image suitable
for ARM. The AMI id depends on your region so refer to [this
list](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html)
to select the
right image.

<img src="/ocean-spark/_media/configure-cluster-01.png" />
 
##### GCP ARM VNG setup

On GCP first create a GKE node pool in which you select the T2A machine type.
Then, create a new VNG by importing that node pool into your cluster

<img src="/ocean-spark/_media/configure-cluster-02.png" />

##### App configuration

Once your cluster holds ARM based VNGs, **it is important to note that all your
apps, including existing ones, should now explicitly target a specific machine
type, even AMD-based apps**. Otherwise, your AMD apps might end up running on ARM
instances and vice versa. This must be done for both driver and executor in the
app configuration.Use the vngIds field to target your ARM or AMD VNGs
accordingly.

```json
"driver": {
  "coreRequest": "500m",
  "memory": "1000m",
  “spot”: false,
  "vngIds": ["ols-848f2cb3"]
},
"executor": {
  "cores": 2,
  "coreRequest": "500m",
  "memory": "1000m",
  "vngIds": ["ols-c1a8ef9c"]
}
```

Alternatively, you can limit the choice on instance type by using the `instanceAllowList` field:

```json
"driver": {
  "coreRequest": "500m",
  "memory": "1000m",
  “spot”: false,
  "instanceAllowList": ["c6gn", "c6g", "m6g", "r6g"]
},
"executor": {
  "cores": 2,
  "coreRequest": "500m",
  "memory": "1000m",
  "instanceAllowList": ["c6gn", "c6g", "m6g", "r6g"]
}
```

When setting a value for the image field, make sure to use ARM64 compatible
images. Starting with gen19 the spark images that we provide are multiarch and
are compatible with ARM64. These images are used by default if you don’t provide
a value for the image field.

## What’s Next?

Learn how to [submit your first Spark application](ocean-spark/getting-started/run-your-first-app).
