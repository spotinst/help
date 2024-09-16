<meta name="“robots”" content="“noindex”">

# Ocean | EKS | Kubernetes Status Unhealthy

## Problem

Kubernetes nodes in the cluster have <i>Unhealthy</i> status—the node has a <i>Node Name</i> but the Kubernetes status is <i>Unhealthy</i>.

## Solution

You can debug unhealthy Kubernetes nodes:
1. Check the nodes' status by running this command in CLI: `kubectl get nodes`
   Look for nodes in a <i>NotReady</i> or <i>Unknown</i> state. This indicates that the nodes are unhealthy or experiencing issues.
2. Get detailed information about the problematic nodes by running the `kubectl describe` command: `kubectl describe node <node-name>`.
   Look for any error messages or warnings that can help identify the problem. Pay attention to resource allocation issues, network connectivity problems, or other relevant information.
3. Verify the health of cluster components such as the kubelet, kube-proxy, and container runtime (for example, Docker, containerd). Check your local logs and the status of these components to identify any errors or issues.
4. Examine the resource utilization of your nodes, including CPU, memory, and disk usage. High resource utilization can lead to node instability or unresponsiveness. Use tools like Prometheus or Grafana to monitor resource metrics.
5. Ensure that network connectivity is properly configured and functioning between the Kubernetes control plane and the nodes. Verify that nodes can reach each other and communicate with external services.
6. Use the `kubectl get events` command to check for cluster-level events that might provide insights into the node health issues. Events often contain helpful information about the state of your cluster and its components.
7. Examine the logs of individual pods running on the problematic nodes. Logs can provide clues about any application-specific issues or errors that might be impacting node health. Use the `kubectl logs` command to retrieve pod logs.
8. Verify that the node configurations (for example, kubelet configuration, network settings) are correct and aligned with the cluster requirements.
9. Ensure that the container runtime (such as Docker, containerd) is properly installed and functioning on the nodes. Check the runtime logs for any errors or warnings.
10. If you think that a specific component is causing the node health issues, consider updating or reinstalling that component to resolve any known bugs or conflicts.
