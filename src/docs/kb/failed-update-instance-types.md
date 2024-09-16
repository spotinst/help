<meta name=“robots” content=“noindex”>

# Ocean | Failed to Update Instance Types | Error: Instance types are not a subset of ocean cluster

## Description

You cannot update the instance types in the default virtual node group. For example, it’s not supported to remove <i>m4.large</i> and <i>m5.large</i>, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> to the default virtual node group, and then update the cluster.

If you do, you’ll get this error:
````
Launch spec ols-xxxxxxxx instance types are not a subset of ocean cluster
````

## Resolution
Remove the instance types at the cluster level, add <i>m5d.xlarge</i> and <i>m6i.xlarge</i> instance types, and then update the cluster.

Instance types of the virtual node group are always a subset of the Ocean cluster.
