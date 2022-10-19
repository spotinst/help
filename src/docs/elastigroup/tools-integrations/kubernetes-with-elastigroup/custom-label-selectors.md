# Custom Label Selectors

Labels are `key/value` pairs that are attached to objects, such as `pods`. Labels allow constraining a pod to only be able to run on particular nodes or have a preference for a particular node. See the Kubernetes documentation [here](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for more information.

Spot supports custom label selectors, as well as built-in node labels and affinity/anti-affinity for pods and nodes. Once configured, Elastigroup considers the constraints and launches capacity only when Pods that have the predefined labels are waiting to be scheduled.

## Configure Custom Label Selectors

### Step 1: Label the Pods

Make sure that your Pods are labeled properly. See the Kubernetes [documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/).

## Step 2: Define the Custom Labels in Elastigroup

In the Spot Console add the relevant `labels` with key/value in Compute tab -> Integrations -> Labels:

<img src="/elastigroup/_media/custom-label-selectors_1.png" />

### Step 3: Add Labels to the Nodes

#### Add Labels to EKS

Add to user data:

```
--kubelet-extra-args --node-labels=mykey=myvalue,mykey2=myvalue2
```

<img src="/elastigroup/_media/custom-label-selectors_2.png" />

**Add labels to Elastigroup based on imported ASG from an existing `kOps`. Imported from an existing `kOps` implementation:**

1. Identify the InstanceGroup name originally imported into Spot (`nodes` in the following example)
2. Run `kops edit ig nodes` and add the relevant label:

<img src="/elastigroup/_media/custom-label-selectors_3.png" />

3. Add the label to Elastigroup user data.
   Add the following attribute to your `ig_spec.yaml` in your user-data start-up script

<img src="/elastigroup/_media/custom-label-selectors_4.png" />

**Add labels to Spot-`kOps` (Elastigroup that were created by `kOps` natively):**

1. Recognize the IG name you originally created (`nodes` in the following example)
2. Run `kops edit ig nodes` and add the relevant label

<img src="/elastigroup/_media/custom-label-selectors_4.png" />

3. Perform `kops update cluster`

For all of the above, new nodes will be launched with new labels. If the new label must be applied to all the nodes in the group immediately, a [roll of the Elastigroup](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup) is required.

## Built-in Node Label Support

Spot also supports Built-in Node Labels. In Scale-Up, Elastigroup will launch eligible instances into the cluster to satisfy the built-in labels of the containers that are pending. Respectively, during scale-down Elastigroup will look for under-utilized instances in the cluster to accommodate the containers that run on the host that is scheduled for scale down.

The following built-in labels are supported:

```
kubernetes.io/hostname
failure-domain.beta.kubernetes.io/zone
failure-domain.beta.kubernetes.io/region
beta.kubernetes.io/instance-type
```

You can also use Spot labels, please review [here](ocean/features/labels-and-taints).
