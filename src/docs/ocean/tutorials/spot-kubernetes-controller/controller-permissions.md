# Controller Permissions

The Spot Controller is a pod that resides within your k8s cluster, enabling the integration with the Spot platform. It is responsible for collecting metrics and events that are pushed via a secured link to the Spot SaaS platform for the purpose of capacity scaling activities as well as additional features of the Spot Kubernetes integration.

This page describes the permissions required by the Spot Controller. All permissions listed here can be viewed and edited in the controller’s YAML file used in its installation process.

The permissions are divided into the following sections:

- Read-Only: Permissions for fetching data – required for functional operation of Ocean/Elastigroup integrations.
- Node/Pod Manipulation: Permissions to update nodes and evict pods – this section is required for draining purposes, updating nodes as “unschedulable” and evicting pods.
- Controller Resource Manipulation: This section gives the controller permissions to update its deployment/role. This is required only for the auto_update feature. You can safely remove this section if you would like to opt-out of the controller auto_update feature (Click here to learn more about controller updates).
- Full CRUD for Resources: Currently the resources are: pods, deployments, and daemonsets. This is required for the Run Workloads. You can safely remove this section if you would like to opt-out the Run Workloads feature.

Below you can see the permissions section of the Spot Controller YAML:

```YAML
# ------------------------------------------
# Cluster Role
# ------------------------------------------
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: spotinst-kubernetes-cluster-controller
  namespace: kube-system
rules:
##### READ-ONLY : REQUIRED FOR FUNCTIONAL OPERATION #####
- apiGroups: [""]
  resources: ["pods", "nodes", "services", "namespaces", "replicationcontrollers", "limitranges", "events", "persistentvolumes", "persistentvolumeclaims"]
  verbs: ["get", "list"]
- apiGroups: ["apps"]
  resources: ["deployments", "daemonsets", "statefulsets"]
  verbs: ["get","list"]
- apiGroups: ["storage.k8s.io"]
  resources: ["storageclasses"]
  verbs: ["get", "list"]
- apiGroups: ["batch"]
  resources: ["jobs"]
  verbs: ["get", "list"]
- apiGroups: ["extensions"]
  resources: ["replicasets", "daemonsets"]
  verbs: ["get","list"]
- apiGroups: ["policy"]
  resources: ["poddisruptionbudgets"]
  verbs: ["get", "list"]
- apiGroups: ["metrics.k8s.io"]
  resources: ["pods"]
  verbs: ["get", "list"]
- apiGroups: ["autoscaling"]
  resources: ["horizontalpodautoscalers"]
  verbs: ["get", "list"]
- nonResourceURLs: ["/version/", "/version"]
  verbs: ["get"]
##### NODE/PODS MANIPULATION : REQUIRED FOR DRAINING & FUNCTIONAL OPERATION #####
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["patch", "update"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["delete"]
- apiGroups: [""]
  resources: ["pods/eviction"]
  verbs: ["create"]
##### CONTROLLER RESOURCE MANIPULATION : REQUIRED FOR AUTO-UPDATE FEATURE #####
- apiGroups: ["rbac.authorization.k8s.io"]
  resources: ["clusterroles"]
  resourceNames: ["spotinst-kubernetes-cluster-controller"]
  verbs: ["patch", "update", "escalate"]
- apiGroups: ["apps"]
  resources: ["deployments"]
  resourceNames: ["spotinst-kubernetes-cluster-controller"]
  verbs: ["patch","update"]
##### FULL CRUD: REQUIRED FOR SPOTINST-APPLY FEATURE #####
- apiGroups: ["apps"]
  resources: ["deployments", "daemonsets"]
  verbs: ["get", "list", "patch","update","create","delete"]
- apiGroups: ["extensions"]
  resources: ["daemonsets"]
  verbs: ["get", "list", "patch","update","create","delete"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "patch", "update", "create", "delete"]
```
