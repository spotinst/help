# Scaling (ECS)

Large-scale compute clusters are expensive, so it is important to use them well. Utilization and efficiency can be increased by running a mix of workloads on the same machines: CPU- and memory-intensive jobs, small and large ones, and a mix of offline and low-latency jobs – ones that serve end-user requests or provide infrastructure services such as storage, naming or locking.

## The Challenge of Scaling Containers

The ECS topology is built on clusters, where each cluster has services (which can be referred to as applications), and services run tasks. Each task has a task definition which tells the scheduler how many resources the task requires.

For example, if a cluster runs 10 machines of c3.large (2 vCPUs and 3.8 GiB of RAM) and 10 machines of c4.xlarge (4 vCPUs and 7.5 GiB of RAM), the total vCPUs is 60\*1024 = 61,440 CPU Units and the total RAM is 113 GiB.

The issue here is that if a single task requires more RAM than the individual instance has, it can't be scheduled. In the example above, a task with 16 GiB of RAM won't start, despite the total available RAM being 113 GiB. Ocean matches the task with the appropriate instance type and size while requiring zero overhead or management.

Ocean dynamically scales the cluster up and down to ensure there are always sufficient resources to run all tasks and at the same time maximizes resource allocation in the cluster. It does so by optimizing task placement across the cluster in a process we call Tetris Scaling, and by automatically managing headroom, a buffer of spare capacity (in terms of both memory and CPU) that ensures that when you want to quickly scale more containers, you don't have to wait for new VMs (i.e., instances) to be provisioned.

## Scale Up Behavior

Ocean keeps track of tasks that cannot be scheduled and employs the following process for scaling up.

- Ocean continuously looks for unsatisfied ECS services, i.e., services for which the count of running tasks is lower than the desired task count.
- For those services, Ocean simulates placement of the desired tasks on the cluster's current container instances, including instances that were just launched and not yet registered as container instances (for example, according to previous scale up activity).

- If the simulation results in no container instances that are able to host all pending tasks, Ocean will scale up for the remaining tasks. During the scale up, Ocean uses its launch specifications to consider all placement constraints.

When the process is completed, all tasks are scheduled and running. Ocean continues to monitor for unsatisfied ECS services, as described in Step 1 above, and will initiate additional scale up if it becomes necessary.

### Headroom

Ocean provides the option to include a buffer of spare capacity (vCPU and memory resources) known as headroom. Headroom ensures that the cluster has the capacity to quickly scale more tasks without waiting for new container instances to be provisioned. The headroom capacity is kept across the cluster and as separate units in order to support scheduling of new pods.

You can configure headroom in specific amounts of vCPU and memory or specify headroom as a percentage of the total CPU and memory.

Ocean optimally manages the headroom to provide the best possible cost/performance balance. However, headroom may also be manually configured to support any use case.

### Placement Constraints

Ocean supports built-in and custom task placement constraints within the scaling logic. Task placement constraints give you the ability to control where tasks are scheduled, such as in a specific availability zone or on instances of a specific type. You can utilize the built-in ECS container attributes or create your own custom key-value attribute and add a constraint to place your tasks based on the desired attribute.

Ocean provides a custom placement restraint which enables you to control how specific tasks are scheduled. For example, if you have mission critical tasks that cannot run on spot instances, you can use the placement restraint `spotinst.io/container-instance-lifecycle` to schedule tasks only on on-demand instances. The format of the placement restraint is shown below:

`"attribute:spotinst.io/container-instance-lifecycle==od"`

<img src="/ocean/_media/features-scaling-ecs-01.png" />

In order to use this feature, you will need to do the following:

1. Add `ecs:putAttributes` permissions to your AWS IAM role (see [Spot Policy for AWS](administration/api/spot-policy-in-aws.md)). As soon as Spot sees pending tasks that ask for this placement constraint, auto scaler will scale up an on-demand instance and use the `ecs:putAttributes` permissions to add this attribute to the on-demand instance spun up by the auto scaler.
2. Contact the Spot support team via chat or email, and request to enable the ECS lifecycle support per service. Once enabled, the label above will take effect.

### Scaling Block Mechanism

Since tasks are created only after the proper infrastructure exists (meaning that Ocean actually scales for an unsatisfied ECS service), there is a potential for an infinite scaling to occur. This could happen, for example, if there is a task that keeps failing and the service continues to be unsatisfied.

In order to prevent a situation of infinite scaling, Ocean will stop scaling for an unsatisfied service after 120 minutes as long as no changes were made to the service. If such a stop occurs, the user should update the service to allow Ocean to scale again.

## Scale Down Behavior

Ocean monitors the cluster and runs bin-packing algorithms that simulate different permutations of task placement across the available container instances. A container instance is considered for scale down when:

- All the running tasks on the particular instance are schedulable on other instances.
- The instance's removal won't reduce the headroom below the target.
- Ocean will prefer to downscale the least utilized instances first.

When an instance is chosen for scale-down it will be drained. Its running tasks are rescheduled on other instances, and the instance is then terminated.

### Usage Notes:

- Ensure that permission for `ecs:stopTask` is included in your Spot policy. The `stopTask` action is required for the drain process and used to stop tasks that are still not drained after the draining timeout has passed.
- Scale-Down actions are limited by default to 10% of the cluster size at a time. This parameter is configurable.

### Scale Down Prevention

It is possible to mark a resource so that it will not be scaled down. You can use the tag `spotinst.io/restrict-scale-down` to prevent the scale down of a task or a service.

The following is an example of the tag that you add to the task definition or the service:

```json
{
  "tags": [
    {
      "key": "spotinst.io/restrict-scale-down",
      "value": "true"
    }
  ]
}
```

When you add a new tag in a task definition, you must create a new revision. Otherwise, the new tag will not be visible.

For more information about tagging in ECS, see [Tagging Your Amazon EC2 Resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html).

## Daemon Tasks

Daemon tasks run on each instance or on a selected set of instances in an Amazon ECS cluster and can be used to provide common functionality, such as logging and monitoring. Ocean automatically identifies and accounts for Daemon Tasks when optimizing capacity allocation to make sure the launched instances have enough capacity for both the daemon services and the pending tasks. It also monitors for new container instances in the cluster and adds the Daemon Tasks to them. Ocean supports and considers Daemon services and tasks, both for scale down and scale up behavior.

Scale down: A Daemon task which was part of a scaled-down instance won't initialize a launch of a new instance and will not be placed on a different container instance.

Scale up: In case there is a Daemon scheduling strategy configured to one of the cluster services, Elastigroup will consider all newly launched instances to have enough spare capacity available in order to run the Daemon task properly in addition to other pending tasks.

## Customizing Scaling Configuration

Ocean manages the cluster capacity to ensure all tasks are running and that resources are utilized. If you wish to override the default configuration, you can customize the scaling configuration.

To customize the scaling configuration:

1. Navigate to your Ocean cluster.
2. Click Actions on the top right side of the screen to open the actions menu.
3. Click Customize Scaling.

<img src="/ocean/_media/features-scaling-k8s-03.png" />

> **Caution**: Under normal operation, Auto-scaling should be enabled, and it is not recommended to disable this function. When Auto-scaling is disabled, Ocean does not scale up or down, and cannot maintain headroom. In addition, the Cluster Shutdown Hours feature will not work properly when scaling the cluster back to its desired state.

## Supported Operating Systems

Ocean supports launching of instances using any ECS supported operating system (OS), including container-optimized OSs such as Bottlerocket OS.

### Windows and Linux Instances in the same Cluster

Ocean provides the flexibility to use different operating systems in an ECS cluster. For example, using the [virtual node group](ocean/features/launch-specifications) (VNG) concept, you can have Ocean manage Windows instances alongside other instances in the cluster.

All you need to do is to create a VNG with a Windows AMI and you are all set. For Windows workloads, the Autoscaler automatically launches instances only from dedicated VNGs. This means that there is no need to set any specific label on the VNG, unless you have multiple VNGs and you wish to ensure the workload runs on a specific VNG.

## What’s Next?

Learn more about how Ocean manages [headroom](ocean/features/headroom).
