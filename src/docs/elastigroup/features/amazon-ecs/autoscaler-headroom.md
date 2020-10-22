# Autoscaler Headroom

Headroom is a buffer of spare capacity (in terms of both memory and CPU) that makes sure that when you want to scale more tasks, you don't have to wait for new instances to launch while preventing instances from being over-utilized.

Each headroom unit consists of 2 definitions: one for CPU units “cpuPerUnit” (1024 units = 1 vCPU) and one for Memory “memoryPerUnit” (in MiB). In addition, you can define the number of headroom units to reserve in your cluster.

For example, Let's say that you define a headroom unit to consist 512 MiB of Memory and 1024 CPU units, and require a total of 10 units. In addition, let's say that the cluster consists of 3 instances. The AutoScaler will verify the total sum of units throughout the entire cluster and check if it meets the required number configured in the group.

If, for example, the first instance has 2 whole free headroom units (in our example it means at least 2048 MiB and 2048 CPU units), the second instance has 3 whole units and the third has 5 whole units, then the cluster has a total of 10 free headroom units, as configured in the group, and no scale-up will be performed.

However, if the first instance will have 2 free units, the second instance will have 3 free units but the third will have only 4 free units, then the cluster will have a total of 9 free units, and the group requires 10 free units, so a scale up activity will be triggered.

---

**Tip**: Headroom takes precedence over scaling operations.

---
