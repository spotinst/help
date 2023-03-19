# Controller Permissions

The Ocean Controller is a pod that resides within your k8s cluster, enabling the integration with the Spot platform. It is responsible for collecting metrics and events that are pushed via a secured link to the Spot SaaS platform for the purpose of capacity scaling activities as well as additional features of the Spot Kubernetes integration.

This page describes the permissions required by the Ocean Controller. All permissions listed here can be viewed and edited in the controller's YAML file used in its installation process.

## Permission Sections

The permissions are divided into the following sections:

- Read-Only: Permissions for fetching data. Required for functional operation of Ocean and Elastigroup integrations.
- Node/Pod Manipulation: Permissions to update nodes and evict pods. This section is required for draining purposes, updating nodes as unschedulable, and evicting pods.
- CleanUp Feature: Required for Ocean AKS-Engine integration.
- CSR Approval: Required for the CSR approval feature.
- Auto-update: This section gives the controller permissions to update its deployment (or roll). This is required only for the auto-update feature. You can safely remove this section if you would like to opt out of the controller auto-update feature.
- Full CRUD for Resources: Currently the resources include pods, deployments, and daemonsets. This is required for the Run Workloads feature. You can safely remove this section if you would like to opt out of the Run Workloads feature.
- Spark Operator: Required by the Spot Big Data feature.

Below you can see the permissions section of the Ocean Controller YAML:

```yaml
# ------------------------------------------------------------------------------
# Service Account
# ------------------------------------------------------------------------------
kind: ServiceAccount
apiVersion: v1
metadata:
  name: spotinst-kubernetes-cluster-controller
  namespace: kube-system
---
# ------------------------------------------------------------------------------
# Cluster Role
# ------------------------------------------------------------------------------
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: spotinst-kubernetes-cluster-controller
rules:
  # ----------------------------------------------------------------------------
  # Required for functional operation (read-only).
  # ----------------------------------------------------------------------------
- apiGroups: [""]
  resources: ["pods", "nodes", "services", "namespaces", "replicationcontrollers", "limitranges", "events", "persistentvolumes", "persistentvolumeclaims"]
  verbs: ["get", "list"]
- apiGroups: ["apps"]
  resources: ["deployments", "daemonsets", "statefulsets", "replicasets"]
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
- apiGroups: ["apiextensions.k8s.io"]
  resources: ["customresourcedefinitions"]
  verbs: ["list", "get"]
  # ----------------------------------------------------------------------------
  # Required by the draining feature and for functional operation.
  # ----------------------------------------------------------------------------
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["patch", "update"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["delete"]
- apiGroups: [""]
  resources: ["pods/eviction"]
  verbs: ["create"]
  # ----------------------------------------------------------------------------
  # Required by the Spotinst CleanUp feature.
  # ----------------------------------------------------------------------------
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["delete"]
  # ----------------------------------------------------------------------------
  # Required by the Spotinst CSR Approval feature.
  # ----------------------------------------------------------------------------
- apiGroups: ["certificates.k8s.io"]
  resources: ["certificatesigningrequests"]
  verbs: ["get", "list", "delete", "create"]
- apiGroups: ["certificates.k8s.io"]
  resources: ["certificatesigningrequests/approval"]
  verbs: ["patch", "update"]
- apiGroups: ["certificates.k8s.io"]
  resources: ["signers"]
  resourceNames: ["kubernetes.io/kubelet-serving", "kubernetes.io/kube-apiserver-client-kubelet"]
  verbs: ["approve"]
  # ----------------------------------------------------------------------------
  # Required by the Spotinst Auto Update feature.
  # ----------------------------------------------------------------------------
- apiGroups: ["rbac.authorization.k8s.io"]
  resources: ["clusterroles"]
  resourceNames: ["spotinst-kubernetes-cluster-controller"]
  verbs: ["patch", "update", "escalate"]
- apiGroups: ["apps"]
  resources: ["deployments"]
  resourceNames: ["spotinst-kubernetes-cluster-controller"]
  verbs: ["patch","update"]
  # ----------------------------------------------------------------------------
  # Required by the Spotinst Apply feature.
  # ----------------------------------------------------------------------------
- apiGroups: ["apps"]
  resources: ["deployments", "daemonsets"]
  verbs: ["get", "list", "patch","update","create","delete"]
- apiGroups: ["extensions"]
  resources: ["daemonsets"]
  verbs: ["get", "list", "patch","update","create","delete"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "patch", "update", "create", "delete"]
- apiGroups: ["batch"]
  resources: ["jobs"]
  verbs: ["get", "list", "patch","update","create","delete"]
  # ----------------------------------------------------------------------------
  # Required by the Spotinst Big Data feature
  # ----------------------------------------------------------------------------
- apiGroups: ["sparkoperator.k8s.io"]
  resources: ["sparkapplications", "scheduledsparkapplications"]
  verbs: ["get", "list", "create", "patch", "delete"]
- apiGroups: ["bigdata.spot.io"]
  resources: ["bigdataenvironments"]
  verbs: ["get", "list", "create", "patch", "delete"]
  # ----------------------------------------------------------------------------
  # Required by the Netwrok Cost anaysis feature
  # Add to your controller RBAC permissions for any apiGroup and custom object
  # resource belonging to the apiGroup
  # ----------------------------------------------------------------------------
- apiGroups: [YOUR_API_GROUP]
  resources: [YOUR_CUSTOM_OBJECT_RESOURCE]
  verbs: ["list", "get"]
---
```

## Cluster Role and Cluster Role Binding

Some use cases require expanding the permissions granted to the Ocean Controller. For example, collecting Kubernetes Custom Resource Objects for cost analysis purposes. As CRDs extend the Kubernetes API, the controller must be aware of the specific extension name in order to query and collect the relevant data.

Adding permission rules directly into the spotinst-kubernetes-cluster-controller clusterRole will not persist when the controller-auto update feature is enabled.

In order to persist the permission rules, do the following:

1. Add a new clusterRole object in the cluster that includes the additional permissions. The permissions should be expressed by their API groups, resource names, and verbs.
2. Add a clusterRoleBinding object in order to connect the new clusterRole and the Ocean Controller application. You may use the example below as a starting point and use the YAML text as a template.

### Example

In the example below, `list` and `get` permissions are given on CRD objects called `customResource1` and `customResource2` that belong to an API group called `myCustomAPIGroupName.api.k8s.io`.

The permissions expressed in the clusterRole called spotinst-kubernetes-cluster-controller-extentions are connected to the Ocean Controller using the clusterRoleBinding.

```yaml
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: spotinst-kubernetes-cluster-controller-extentions
rules:
  # ----------------------------------------------------------------------------
  # User to add relevant CRD permissions here
  # example:
  # - apiGroups: ["myCustomAPIGroupName.api.k8s.io"]
  #   resources: ["customResource1", "customResource2"]
  #   verbs: ["get", "list"]
  # ----------------------------------------------------------------------------
---
# ------------------------------------------------------------------------------
# Cluster Role Binding
# ------------------------------------------------------------------------------
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: spotinst-kubernetes-cluster-controller
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: spotinst-kubernetes-cluster-controller
subjects:
- kind: ServiceAccount
  name: spotinst-kubernetes-cluster-controller
  namespace: kube-system
---
```

## What's Next?

- Learn how to [Update the Controller](ocean/tutorials/spot-kubernetes-controller/update-controller).
- Learn about the latest updates in the [Controller Version History](ocean/tutorials/spot-kubernetes-controller/controller-version-history).
