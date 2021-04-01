# Connect an Existing Cluster using eksctl

If you have an existing EKS cluster managed by eksctl and would like to connect it to Ocean, complete the procedure below.

## Step 1. Create A New Ocean-Managed Nodegroup

### Using command-line flags

Create a new Ocean-managed nodegroup of worker nodes with the following command. Replace the example values with your own values.

`eksctl create nodegroup \ --cluster <cluster-name> \ --name <ocean-nodegroup-name> \ --spot-ocean`

The spot-ocean command-line flag enables Ocean integration.

### Using configuration files

1. Update your cluster.yaml configuration file by renaming your unmanaged nodegroups and adding the Ocean configuration.

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
 name: prod
 tags:
   creator: liran
   environment: prod
nodeGroups:
 - name: ocean-standard-workers
   [... nodegroup standard fields; ssh, tags, etc.]
   spotOcean: {}
```

The `spotOcean: {}` section enables Ocean integration and uses all defaults.

2. Apply the changes to create a new Ocean-managed nodegroup with the following command:

`eksctl create nodegroup -f cluster.yaml`

## Step 2. Migrate Your Workload

Safely evict all of your pods from the nodes of the unmanaged nodegroup with the following command:

`eksctl drain nodegroup \ --cluster <cluster-name> \ --name <unmanaged-nodegroup-name>`

## Step 3. Delete The Unmanaged Nodegroup [Optional]

Remove the nodes by deleting the unmanaged nodegroup with the following command:

`eksctl delete nodegroup \ --cluster <cluster-name> \ --name <unmanaged-nodegroup-name>`

## What's Next?

Learn more about [Ocean features](ocean/features/).
