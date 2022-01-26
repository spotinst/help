<meta name="robots" content="noindex">

# Launch Specifications

Launch specifications enable you to configure multiple workload types on the same Ocean cluster. With Ocean launch specifications, you can configure sets of labels and taints (Kubernetes) or attributes (ECS) to go along with a custom AMI, Instance Profile , Security Groups, and User Data script that will be used for the nodes or container instances that will serve your labeled workloads. If a pod or task has no node-selector labels or attributes configured, the default AMI and user data configured on the Ocean cluster will be used.

## Configuration

1. Log in to the [Spot Console](https://console.spotinst.com/).
2. Navigate to your Ocean cluster.
3. Click the Actions menu and select Launch Specifications.
4. Click Add Launch Specification.
5. Name your Launch Specification (for ECS).
6. Add the labels or attributes which identify your nodes or container instances
7. Set the user data script and make sure to label your instances according to your label selection:
   - For Kubernetes user data, refer to this [tutorial](ocean/tutorials/create-custom-labels).
   - For ECS user data, refer to Example 2 in this tutorial.
8. Optional: Set Custom AMI, Instance Profile, and Security Groups for the launch specification.

## Example: Running a Windows-based Node in a Linux-based Cluster

In this scenario, the default Ocean AMI will include a Linux OS, but for a specific pod, WinPod a Windows image is required. To ensure that the WinPod pod is using a Windows image, perform the following steps:

1. Configure your WinPod pod with a dedicated nodeSelector.

```yaml
apiVersion: v1
kind: Pod
metadata:
name: WinPod
spec:
  containers:
    - name: WinPodCon
      image: WinPodCon
      imagePullPolicy: IfNotPresent
  nodeSelector:
    runOnWin: true
```

2. Configure your Ocean cluster with a launch specification that serves the WinPod nodeSelector label.
   a. Log in to the Spot Console.
   b. Navigate to your Ocean cluster.
   c. Click on the Actions menu and select Launch Specifications.
   d. Click Add Specification and add the following label:
   Key: runOnWin
   Value: true
   e. Set the User Data script and label your nodes with the above label.
   f. Set the custom launch specification AMI to Windows OS.

## GPU Instance

If a pod requires a GPU instance, add the relevant GPU AMI in the custom launch specification section. Ocean will spin up instances accordingly. Specific labels are not required in this case. Example:

```yaml
resources:
  limits:
    nvidia.com/gpu: 1
```

You don't need to add any extra label for GPU support. You can use taints that require your GPU-based pods to select a specific launch specification which contains the GPU AMI.
