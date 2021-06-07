# Configuration

Wave features can be configured easily via driver/executor pod annotations. All configuration annotations follow the pattern `wave.spot.io/${CONFIGURATION-KEY}`.

## Setting configuration options

Below are examples on how to set the pod annotations for spark-submit, spark-operator and Jupyter notebook applications. Note that you can add multiple annotations on a pod, to set multiple configuration options.

### spark-submit

Add the following argument to your spark-submit command:

```bash
--conf spark.kubernetes.driver/executor.annotation.wave.spot.io/${CONFIGURATION-KEY}=${CONFIGURATION-VALUE}
```

### spark-operator

Add the following argument to the `spec.sparkConf` section of your Spark Operator Spark Application custom resource:

```yaml
spec:
  ...
  sparkConf:
    "spark.kubernetes.driver/executor.annotation.wave.spot.io/${CONFIGURATION-KEY}": "${CONFIGURATION-VALUE}"
    ...
```

### Jupyter notebooks

Pass the following spark-submit argument via the `KERNEL_EXTRA_SPARK_OPTS` environment variable:

```bash
# Set configuration parameters
export KERNEL_EXTRA_SPARK_OPTS="--conf spark.kubernetes.driver/executor.annotation.wave.spot.io/${CONFIGURATION-KEY}=${CONFIGURATION-VALUE}"
# Start Jupyter
jupyter notebook --gateway-url=$GATEWAY --GatewayClient.request_timeout=600
```

## Configuration options

### Application name

`wave.spot.io/application-name`

Scope

- Driver pod annotation

Values

- Any string value

Default

- None

Example

- `"spark.kubernetes.driver.annotation.wave.spot.io/application-name": "My Spark application"`

The application name configuration option allows you to easily customize the name of a Spark application in Wave. If the configuration option is set, the value will be used as the name of the Wave Spark Application. If it is not set, the name will be taken from other sources, in order of precedence:

1. Value of `wave.spot.io/application-name` driver pod annotation
2. Name of Spark Operator Spark Application Custom Resource
3. Name of application as known by Spark (Spark API)
4. Driver pod name

### Event log sync

`wave.spot.io/sync-event-logs`

Scope

- Driver pod annotation

Values

- `true/false`

Default

- `false`

Example

- `"spark.kubernetes.driver.annotation.wave.spot.io/sync-event-logs": "true"`

If set to `true`, a sidecar container will be added to the driver pod. The sidecar sends the Spark application's event logs to an S3 bucket, to be served by the Wave cluster's history server instance.

### Instance lifecycle

`wave.spot.io/instance-lifecycle`

Scope

- Driver pod annotation
- Executor pod annotation

Values

- `od`
- `spot`
  
Defaults

- Driver pod: `od`
- Executor pods: `spot`

Example

- `"spark.kubernetes.driver.annotation.wave.spot.io/instance-lifecycle": "od"`
- `"spark.kubernetes.executor.annotation.wave.spot.io/instance-lifecycle": "od"`

If set to `od`, the pod will be run on an on-demand instance. If set to `spot`, the pod will be run on a spot instance.

If a node affinity rule specifying the instance lifecycle has been set on the pod through some other means, this configuration value will have no effect.

### Instance types

`wave.spot.io/instance-type`

Scope

- Driver pod annotation
- Executor pod annotation

Values

- Instance type name(s) of the format `family.type` (e.g. `m5.xlarge`)
- Instance family name(s) (e.g. `m5`)
- Multiple instance types and instance type families can be specified in a comma separated list (e.g. `m5.xlarge,r5.xlarge,c5`)

Defaults

- None

Example

- `"spark.kubernetes.driver.annotation.wave.spot.io/instance-type": "m5.2xlarge"`
- `"spark.kubernetes.executor.annotation.wave.spot.io/instance-type": "r5,m5"`

If an instance type is set, the pod will be run on an instance of that type. If an instance type family is set, the pod will be run on an instance from that family. If multiple instance types / instance type families are specified, the pod will be run on one of the allowed instance types.

If the configuration option is not set, an appropriate instance type will be selected automatically.

If an invalid instance type is specified it will be ignored. Valid instance types are:

- Available in the cluster's region
- Allowed according to the underlying Ocean cluster's instance type white- and blacklist configuration.

If a node affinity rule specifying the allowed instance type(s) has been set on the pod through some other means, this configuration value will have no effect.
