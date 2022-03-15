<meta name="robots" content="noindex">

# Automatic Autoscaler for ECS

Large-scale compute clusters are expensive, so it is important to use them well. Utilization and efficiency can be increased by running a mix of workloads on the same machines: CPU- and memory-intensive jobs, small and large ones, and a mix of offline and low-latency jobs – ones that serve end-user requests or provide infrastructure services such as storage, naming or locking.

## The Challenge of Scaling Containers

The ECS topology is built on Clusters, where each cluster has Services (which can be referred to as applications), and services run Tasks. Each Task has a Task definition which tells the scheduler how much resources the Task requires.

For example, if a cluster runs 10 machines of c3.large (2 vCPUs and 3.8 GiB of RAM) and 10 machines of c4.xlarge (4 vCPUs and 7.5 GiB of RAM), the total vCPUs is 60\*1024 = 61,440 CPU Units and the total RAM is 113 GiB.

The issue here is that if a single Task requires more RAM than the individual instance has, it can't be scheduled. In the example above, a task with 16 GiB of RAM won't start, despite the total available RAM being 113 GiB. Elastigroup matches the Task with the appropriate Instance Type / Size, with zero overhead or management.

Elastigroup dynamically scales the cluster up and down to ensure there are always sufficient resources to run all tasks and at the same time maximizing resource efficiency in the cluster. It does this by optimizing task placement across the cluster in a process we call Tetris Scaling, and by automatically managing headroom, a buffer of spare capacity (in terms of both memory and CPU) that makes sure that when you want to scale quickly more containers, you don't have to wait for new VMs (Instances) to be provisioned.Once the Elastigroup Container Autoscaling is enabled, there is no need to keep any existing scaling policies based on CPU or Memory reservation in the ECS cluster. You can safely remove any existing scaling rules from the configuration. Weighted scaling is disabled when the Autoscaling is enabled.

## Scale Down Behavior

Elastigroup monitors the Cluster and runs bin-packing algorithms that simulate different permutations of task placement across the available container instances. A container instance is considered for scale down when:

- All the running tasks on the particular instance are schedulable on other instances.
- The instance's removal won't reduce the headroom below the target.
- Elastigroup will prefer to downscale the least utilized instances first.

When an instance is chosen for scale-down it will be drained. Its running tasks are rescheduled on other instances, and the instance is then terminated.

> **Tip**: Scale-Down actions are limited to 10% of the cluster size at a time.

## Labels and Constraints

Elastigroup supports built-in and custom Task placement constraints within the scaling logic. Task placement constraints give you the ability to control where tasks are scheduled, such as in a specific Availability Zone or on instances of a specific type. You can utilize the built-in ECS container attributes or create your own custom key-value attribute and add a constraint to place your tasks based on the desired attribute.

## Daemon Tasks

Daemon tasks run on each instance or on a selected set of instances in an Amazon ECS cluster and can be used to provide common functionality, such as logging and monitoring. Elastigroup automatically identifies and accounts for Daemon Tasks when optimizing capacity allocation to make sure the launched instances has enough capacity for both the daemon services and the pending tasks. It also monitors for new container instances in the cluster and adds the Daemon Tasks to them. Elastigroup supports and considers Daemon services and tasks, both for scale down and scale up behavior.

- Scale down: Daemon task which was a part of a scaled-down instance won't initialize a launch of a new instance and will not be placed on a different container instance.
- Scale up: In case there is a Daemon scheduling strategy configured to one of the cluster services, Elastigroup will consider all newly launched instances to have enough spare capacity available in order to run the Daemon task properly in addition to other pending tasks.

## What's Next?

- [Set up the automatic autoscaler](elastigroup/tutorials/amazon-ecs/enable-autoscaling-for-ecs).
- [Configure custom attributes](elastigroup/tutorials/amazon-ecs/configure-attributes-for-task-placement-constraints) for task placement constraints.
- Learn how the autoscaler utilizes [Tetris scaling](elastigroup/features/amazon-ecs/autoscaler-tetris-scaling).
