# Secrets and Environment Variables

This page describes the configuration of secrets and environment variables.

## Set environment variables

Environment variables can easily be set by inserting the lines below in a [configuration template](ocean-spark/configure-spark-apps/?id=configuration-templates) or in [config overrides](ocean-spark/configure-spark-apps/?id=config-overrides):

```json
{
  "driver": {
    "envVars": {
      "ENV_VAR_KEY": "ENV_VAR_VALUE"
    }
  },
  "executor": {
    "envVars": {
      "ENV_VAR_KEY": "ENV_VAR_VALUE"
    }
  }
}
```

## Set environment variables using Kubernetes secrets

If you have [defined Kubernetes secrets](ocean-spark/configure-spark-apps/access-your-data?id=grant-permissions-using-kubernetes-secrets), you can pass them to your Spark applications as an environment variable. Merge the following configuration segment into a configuration template or into config overrides:

```json
{
  "driver": {
    "envSecretKeyRefs": {
      "ENV_VAR_KEY": {
        "name": "secret-name",
        "key": "secret-field"
      }
    }
  },
  "executor": {
    "envSecretKeyRefs": {
      "ENV_VAR_KEY": {
        "name": "secret-name",
        "key": "secret-field"
      }
    }
  }
}
```

This will create an environment variable with the key ENV_VAR_KEY and the value being the content of the secret secret-name at the field secret-field.

The secret value is not visible in the application configuration, and it will be redacted in the Spark UI.

## Retrieve environment variables in your code

This is how you can retrieve environment variables in your Spark application code:

<details>
  <summary markdown="span">Python</summary>

```python
import os
env_vars = os.environ # Dictionary of key-value pairs
value = os.environ['ENV_VAR_KEY'] # ENV_VAR_VALUE
```

</details><br>

<details>
  <summary markdown="span">Java and Scala</summary>

```java
val envVars = System.getenv() // Map[String, String] of key-value pairs
val value = System.getenv("ENV_VAR_KEY") // ENV_VAR_VALUE
```

</details><br>

To list all configurations you can set in Ocean Spark, check out the [API reference](https://docs.spot.io/api/#operation/OceanSparkClusterApplicationSubmit).

## What’s Next?

Learn more about [Docker images for Spark](ocean-spark/configure-spark-apps/docker-images).
