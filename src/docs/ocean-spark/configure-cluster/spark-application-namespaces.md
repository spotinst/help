# Spark application namespaces

By default, Ocean for Apache Spark will run Spark applications in the `spark-apps` namespace.
You can configure additional Spark application namespaces on your Ocean Spark cluster.

## Example cluster configuration

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

The `spark-apps` namespace is always present and used by default if no namespace is specified in the Spark application submission. It is not necessary to create these namespaces beforehand, the `bigdata-operator` component will create them if they do not exist already.

## Istio sidecar injection

If you are using Istio, we recommend to turn off Istio sidecar injection in the Spark application namespaces since the sidecar can interfere with the Spark pod lifecycle.

For example:

```sh
kubectl label namespace spark-apps istio-injection=disabled --overwrite
```

See the [Istio documentation](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/#controlling-the-injection-policy) for more details.
