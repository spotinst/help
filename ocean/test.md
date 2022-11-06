# Upgrade Kubernetes Version in Ocean AKS Cluster

This page describes the procedures for upgrading the Kubernetes version in Ocean AKS Cluster.

After you have completed all the steps described, all new nodes launched by Ocean (regardless of the VNG) will be launched with the new Kubernetes version.

## Step 1: Upgrade your AKS Control Plane and All Node Pools

To upgrade your AKS control plane and all of your node pools, complete the following steps:

1. In the left menu in the AKS console, click Cluster configuration:

<img src="/ocean/_media/upgrade-aks-cluster-1.png" />

2. Define the Kubernetes version you want to upgrade to.

3. Choose “Upgrade control plane + all node pools” and click Save.

<img src="/ocean/_media/upgrade-aks-cluster-2.png" />

The cluster will upgrade. This process may take a few minutes.
If you choose to upgrade the control plane only, make sure you upgrade each of the node pools separately.

## Step 2: Import New Configurations

### Rerun the Import Job

1. Delete the get-waagent-data job (if it exists in the cluster):

` kubectl delete job get-waagent-data -n kube-system`

2. Run the script below that will create a new get-waagent-data Job.
Replace the ACD_ID with any unique string (you cannot use an ACD_ID that was previously used), and run the following script:

`curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks/spot-aks-connector/init.sh | \ bash -s <ACD_ID>`

3. Wait for the job to complete. In the end of the process the following script should appear:

`kubectl get jobs -n kube-system`

<img src="/ocean/_media/upgrade-aks-cluster-3.png" />

### Get the New Configurations

1. Get the new cluster object using the [oceanAKSClusterImport API](https://docs.spot.io/api/#operation/oceanAKSClusterImport).

2. Update the ACD_ID (the same as in the previous step), ACT_ID, TOKEN, AKS_CLUSTER_NAME, RESOURCE_GROUP_NAME, and run the following command:

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

3. From the output, get the generated cluster object like the example below. Note that the base64 scripts for the customData and the OceanAKS extension have been edited out since they are very long.

```yaml
{
   "cluster":{
      "aks":{
         "name":"AmitAKS",
         "resourceGroupName":"amit-test"
      },
      "virtualNodeGroupTemplate":{
         "launchSpecification":{
            "resourceGroupName":"MC_amit-test_AmitAKS_westus2",
            "customData":"REDACTED",
            "network":{
               "resourceGroupName":"MC_amit-test_AmitAKS_westus2",
               "virtualNetworkName":"aks-vnet-28390561",
               "networkInterfaces":[
                  {
                     "isPrimary":true,
                     "subnetName":"aks-subnet",
                     "assignPublicIp":false,
                     "publicIpSku":"Standard",
                     "securityGroup":{
                        "name":"aks-agentpool-28390561-nsg",
                        "resourceGroupName":"MC_amit-test_AmitAKS_westus2"
                     },
                     "enableIPForwarding":true,
                     "additionalIpConfigurations":[

                     ]
                  }
               ]
            },
            "login":{
               "userName":"azureuser"
            },
            "loadBalancersConfig":{
               "loadBalancers":[
                  {
                     "type":"loadBalancer",
                     "resourceGroupName":"MC_amit-test_AmitAKS_westus2",
                     "name":"kubernetes",
                     "loadBalancerSku":"Standard",
                     "backendPoolNames":[
                        "aksOutboundBackendPool",
                        "kubernetes"
                     ]
                  }
               ]
            },
            "tags":[
               {
                  "tagKey":"Creator",
                  "tagValue":"amit.baroz"
               }
            ],
            "extensions":[
               {
                  "name":"OceanAKS",
                  "type":"customScript",
                  "publisher":"Microsoft.Azure.Extensions",
                  "apiVersion":"2.0",
                  "minorVersionAutoUpgrade":true,
                  "protectedSettings":{
                     "script":"REDACTED"
                  }
               }
            ],
            "image":{
               "marketplace":{
                  "publisher":"microsoft-aks",
                  "offer":"aks",
                  "sku":"aks-ubuntu-1804-gen2-2021-q2",
                  "version":"2021.05.01"
               }
            }
         }
      }
   }
}
```

4. From the example above, remove the following lines:

`"aks": { "name": "AmitAKS", "resourceGroupName": "amit-test" },`

and the line:

virtualNodeGroupTemplate.launchSpecification.resourceGroupName:

`"resourceGroupName": "MC_amit-test_AmitAKS_westus2",`

5. **Optional** The JSON above includes the old image, you should replace it with the updated one by updating the following:
`"image": { "marketplace": { "publisher": "microsoft-aks", "offer": "aks", "sku": "aks-ubuntu-1804-gen2-2021-q2", "version": "2021.05.01", }, }`

### Step 3: Upgrade the Ocean Cluster

Use the [oceanAKSClusterUpdate API](https://docs.spot.io/api/#operation/oceanAKSClusterUpdate) and the structure generated by the previous command lines you removed.

Modify the OCEAN_ID, ACT_ID, TOKEN and CLUSTER_BODY fields in the following script and run the command:

```

curl --location --request PUT 'https://api.spotinst.io/ocean/ zure/k8s/cluster/<OCEAN_ID>?accountId=<ACT_ID>' \ --header 'Authorization: Bearer <TOKEN>' \ --header 'Content-Type: application/json' \ --data-raw '<CLUSTER_BODY>'

```

After this update, any new machine launched by Ocean will run with the new configurations, regardless of the VNG.

You can let this happen gradually or trigger a rollout as explained in the next step.

## Step 4: Roll the Cluster

The roll process allows you to perform changes in order to align cluster infrastructure with a new image, user data, or security groups, without having to disable the Ocean autoscaler or manually detach nodes in the cluster. You may trigger the process using the [Ocean Azure Initiate Roll API](https://docs.spot.io/api/#operation/oceanAzureRollInit).

Once the rollout is completed, all of the nodes in the cluster will have the new Kubernetes version.

## What’s Next?

Learn how to connect an [AKS private cluster](ocean/tutorials/connect-an-aks-private-cluster).
