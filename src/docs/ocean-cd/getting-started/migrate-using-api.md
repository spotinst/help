# Migrate using the API

If you prefer to migrate your SpotDeployment and create your entities from scratch using the API and your terminal, you can use this procedure. All you need to do is create a SpotDeployment YAML followed by the entities.

## Step 1: Create your SpotDeployment

In order to create a SpotDeployment, you have the following options:

- Create one from scratch. If you need help with the command syntax, refer to the [Ocean CD Public Repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples).
- Migrate an already existing Deployment to SpotDeployment. All you need is to copy the deployment and change its kind and apiVersion.

When you apply a SpotDeployment for the first time, Ocean CD creates the first replicas, but does not trigger a deployment.

> **Tip**: The namespace where you apply your SpotDeployment is important. You need to use the same namespace in your RolloutSpec.

## Step 2: Create and Apply Entities

Create your entities, and apply them accordingly, using Postman or any other tool you prefer (such as CLI or curl).

Note the following:
- The Rolloutspec triggers the Strategy, so you will need to first create a strategy, and only then the Rolloutspec.
- The services and additional yamls set in your RolloutSpec will need to applied in the same namespace as your SpotDeployment.

YAML templates and examples can be found in the Ocean CD public repository or JSON syntax via the [Ocean CD API](https://docs.spot.io/api/#tag/Ocean-CD).

## Step 3: Trigger Canary Deployment

To trigger a canary deployment, make one or more changes to the SpotDeployment you created and apply them.

## What’s Next?

Learn more about the different [traffic manager options](ocean-cd/getting-started/traffic-manager-reference) available.
