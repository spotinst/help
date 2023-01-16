# Migrate using API or CLI

This procedure describes how to migrate your SpotDeployment and create your entities from scratch using the API and your terminal. Create a SpotDeployment YAML followed by the entities.

## Step 1: Create your SpotDeployment

In order to create a SpotDeployment, choose one of the following options:  

* Create a SpotDepolyment from scratch. For further assistance regarding the template, refer to the [Ocean CD Public Repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples).

* Migrate an existing deployment to SpotDeployment. Copy the deployment and change the apiVersion and kind.

<img src="/ocean-cd/_media/migrate-api-1.png" />

> Tip: The namespace where you apply your SpotDeployment is important. You need to use the same for your services and Ocean CD Entities.  

When you apply a SpotDeployment for the first time, Ocean CD displays the first replicas, but does **not** trigger a deployment.

## Step 2: Create your Services

Create one or more services that will be used during the rollout. Choose one of the following options:

* Create the services from scratch. For further assistance regarding the template, refer to the Ocean CD Public Repository.

* Use your existing services.

> Tip: Ensure you apply the services in the same namespace as the one used for your SpotDeployment.

## Step 3: Create and Apply Entities

All of the Ocean CD entities are related to each other and must be created in a specific order. Create your entities and apply them in the following order.  

1. Create your [Verification Provider](https://docs.spot.io/ocean-cd/concepts-features/entities?id=verification-provider)
2. Create your [Verification Template](https://docs.spot.io/ocean-cd/concepts-features/entities?id=verification-template)
3. Create your [Strategy](https://docs.spot.io/ocean-cd/concepts-features/entities?id=strategy)
4. Create your [RolloutSpec](https://docs.spot.io/ocean-cd/concepts-features/entities?id=rolloutspec)

### Format and Syntax

- [API](https://docs.spot.io/api/#tag/Ocean-CD): API calls make use of JSON format and syntax.
- [CLI](https://github.com/spotinst/spot-oceancd-cli): CLI commands make use of YAML format and syntax.

YAML templates and examples can be found in the Ocean CD public repository or JSON syntax in the Ocean CD API.

## Step 4: Trigger Canary Deployment

To trigger your rollout, make one or more changes to the SpotDeployment.Spec object you created in Step 1 and apply it into your terminal.  

## What’s Next?

Learn more about the different [traffic manager options](ocean-cd/getting-started/traffic-manager-reference) available.
