# Upgrade Kubernetes Version in Ocean AKS Cluster

This page describes the procedures for upgrading the Kubernetes version in Ocean AKS Cluster.

After you have completed all the steps described, all new nodes launched by Ocean (regardless of the VNG) will be launched with the new Kubernetes version.

## Step 1: Upgrade your AKS Control Plane

Under “Cluster configuration” in your AKS console, define the Kubernetes version you want to upgrade to and click Save.

<img src="/ocean/_media/tips-upgrade-aks-cluster-01.png" width="719" height="458" />

The cluster will upgrade. This process may take a few minutes.

## Step 2: Upgrade your System Node Pools

The steps below must be completed for each of your System node pools.

1. In the “Node pools” section, click the Kubernetes version.

<img src="/ocean/_media/tips-upgrade-aks-cluster-02.png" width="534" height="185" />

2. In the sidebar, choose the relevant version, and click Apply at the bottom of the page. This process may also take a few minutes.

<img src="/ocean/_media/tips-upgrade-aks-cluster-03.png" width="402" height="484" />

## Step 3: Import New Configurations

### Rerun the Import Job

1. Delete the get-waagent-data job (if it exists on the cluster):

`kubectl delete job get-waagent-data -n kube-system`

2. Create a new get-waagent-data Job.
3. Replace `ACD_ID` with any unique string (you cannot use an ACD_ID that was previously used), and run the following script:

```bash
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks/spot-aks-connector/init.sh | \
bash -s <ACD_ID>
```

4. Wait for the Job to complete:

`kubectl get jobs -n kube-system`

<img src="/ocean/_media/tips-upgrade-aks-cluster-04.png" width="428" height="65" />

### Fetch the New Configurations

1.  Fetch the new cluster object using the [oceanAKSClusterImport API](https://docs.spot.io/api/#operation/oceanAKSClusterImport).
2.  Update the `ACD_ID`, `ACT_ID`, `TOKEN`, `AKS_CLUSTER_NAME`, `RESOURCE_GROUP_NAME`, and run the following command:

```
curl --location --request POST 'https://api.spotinst.io/ocean/azure/k8s/cluster/aks/import/<ACD_ID>?accountId=<ACT_ID>' \
--header 'Authorization: Bearer <TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cluster": {
        "aks": {
            "name": "<AKS_CLUSTER_NAME>",
            "resourceGroupName": "<RESOURCE_GROUP_NAME>"
        }
    }
}'
```

3. From the output, fetch the generated cluster object like the example below. Note that the base64 scripts for the customData and the OceanAKS extension have been edited out since they are very long.

```yaml
{
  "cluster":
    {
      "aks": { "name": "AmitAKS", "resourceGroupName": "amit-test" },
      "virtualNodeGroupTemplate":
        {
          "launchSpecification":
            {
              "resourceGroupName": "MC_amit-test_AmitAKS_westus2",
              "customData": "REDACTED",
              "network":
                {
                  "resourceGroupName": "MC_amit-test_AmitAKS_westus2",
                  "virtualNetworkName": "aks-vnet-28390561",
                  "networkInterfaces":
                    [
                      {
                        "isPrimary": true,
                        "subnetName": "aks-subnet",
                        "assignPublicIp": false,
                        "publicIpSku": "Standard",
                        "securityGroup":
                          {
                            "name": "aks-agentpool-28390561-nsg",
                            "resourceGroupName": "MC_amit-test_AmitAKS_westus2",
                          },
                        "enableIPForwarding": true,
                        "additionalIpConfigurations": [],
                      },
                    ],
                },
              "login": { "userName": "azureuser" },
              "loadBalancersConfig":
                {
                  "loadBalancers":
                    [
                      {
                        "type": "loadBalancer",
                        "resourceGroupName": "MC_amit-test_AmitAKS_westus2",
                        "name": "kubernetes",
                        "loadBalancerSku": "Standard",
                        "backendPoolNames":
                          ["aksOutboundBackendPool", "kubernetes"],
                      },
                    ],
                },
              "tags": [{ "tagKey": "Creator", "tagValue": "amit.baroz" }],
              "extensions":
                [
                  {
                    "name": "OceanAKS",
                    "type": "customScript",
                    "publisher": "Microsoft.Azure.Extensions",
                    "apiVersion": "2.0",
                    "minorVersionAutoUpgrade": true,
                    "protectedSettings": { "script": "REDACTED" },
                  },
                ],
              "image":
                {
                  "marketplace":
                    {
                      "publisher": "microsoft-aks",
                      "offer": "aks",
                      "sku": "aks-ubuntu-1804-gen2-2021-q2",
                      "version": "2021.05.01",
                    },
                },
            },
        },
    },
}
```

4. From the example above, remove the following lines:

```yaml
"aks": {
            "name": "AmitAKS",
            "resourceGroupName": "amit-test"
        },
```

And the line:

```yaml
"resourceGroupName": "MC_amit-test_AmitAKS_westus2",
```

## Step 4: Upgrade the Ocean Cluster

You will use the [oceanAKSClusterUpdate API](https://docs.spot.io/api/#operation/oceanAKSClusterUpdate) and the structure generated by the previous command lines you removed.

Modify the `OCEAN_ID`, `ACT_ID`, `TOKEN` and `CLUSTER_BODY` fields in the following script and run it:

```
curl --location --request PUT 'https://api.spotinst.io/ocean/azure/k8s/cluster/<OCEAN_ID>?accountId=<ACT_ID>' \
--header 'Authorization: Bearer <TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '<CLUSTER_BODY>'
```

After this update, any new machine launched by Ocean will run with the new configurations, regardless of the VNG.

You can let this change happen gradually or trigger a rollout as explained in the next step.

## Step 5: Roll the Cluster

The roll process allows you to perform changes in order to align cluster infrastructure with a new image, user data, or security groups, without having to disable the Ocean autoscaler or manually detach nodes in the cluster. You may trigger the process using the [Ocean Azure Initiate Roll API](https://docs.spot.io/api/#operation/oceanAzureRollInit).

Once the rollout is completed, all of the nodes in the cluster will have the new Kubernetes version.

## What’s Next?

Learn how to connect an [AKS private cluster](ocean/tutorials/connect-an-aks-private-cluster).
