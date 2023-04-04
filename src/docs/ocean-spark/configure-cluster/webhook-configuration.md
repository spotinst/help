# Webhook configuration

One of the Ocean for Apache Spark components, the Spark Operator, runs a `MutatingAdmissionWebhook` to mutate Spark pods as they are submitted to the cluster.

If you are running on AWS EKS and using a custom CNI like Calico, you may need to enable host networking for the webhook to work.

## Example cluster configuration

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

Make sure that your node security group allows traffic from the Kubernetes control plane security group over TCP on the host network port. If it is not allowed you may see errors like `Operation: [create] for kind: [Pod] with name: [null] in namespace: [spark-apps] failed` and `java.net.SocketTimeoutException: timeout` in the Spark Operator logs.
