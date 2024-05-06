# Ocean Controller Version 2 Permissions

This topic describes the permissions required by the Ocean Controller Version 2 for **AWS K8s**. All permissions listed here can be viewed and edited in the Ocean Controller's YAML file used in the installation process.

The permissions are divided into the following sections:  

| Section                  | Description                                                                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Read-Only                | Permissions for fetching data. Required for functional operation of Ocean and Elastigroup integrations                                          |
| Node/Pod Manipulation    | Permission to update nodes and evict pods. This section is required for draining purposes, updating nodes as unschedulable, and evicting pods  |
| CleanUp Feature          | Required for Ocean AKS-Engine integration.                                                                                                      |
| CSR Approval             | Required for the CSR approval feature.                                                                                                          |
| Full CRUD for Resources | The resources include pods, deployments, jobs, and daemonsets. This is required for the Run Workloads and Auto-Update features.        |
| Spark Operator           | Required by the Spot Big Data feature.                                                                                                          |
| Automatic Rightsizing    | This section is required for the automatic rightsizing functionality; this is an opt-out feature                                                |
| Leader-Election          | This section is required by the leader-election mechanism, which is required in high-availability mode                                          |
| Report Events            | This section allows the controller to report Kubernetes events.                                                                                 |


The permissions section of the Ocean Controller YAML is shown below: 

```yaml
 
# --------------------------------------------------------------------------- 
# Cluster Role 
# --------------------------------------------------------------------------- 
apiVersion: rbac.authorization.k8s.io/v1 
kind: ClusterRole 
metadata: 
  name: ocean-controller-ocean-kubernetes-controller 
rules: 
# --------------------------------------------------------------------------- 
# feature: ocean/readonly 
# --------------------------------------------------------------------------- 
- apiGroups: [ "" ] 
  resources: [ "pods", "nodes", "services", "namespaces", "replicationcontrollers", "limitranges", "events", "persistentvolumes", "persistentvolumeclaims" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "apps" ] 
  resources: [ "deployments", "daemonsets", "statefulsets", "replicasets" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "storage.k8s.io" ] 
  resources: [ "storageclasses" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "batch" ] 
  resources: [ "jobs", "cronjobs" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "policy" ] 
  resources: [ "poddisruptionbudgets" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "metrics.k8s.io" ] 
  resources: [ "pods" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "autoscaling" ] 
  resources: [ "horizontalpodautoscalers" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "autoscaling.k8s.io" ] 
  resources: [ "verticalpodautoscalers" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "apiextensions.k8s.io" ] 
  resources: [ "customresourcedefinitions" ] 
  verbs: [ "get", "list", "watch" ] 
- apiGroups: [ "node.k8s.io" ] 
  resources: [ "runtimeclasses" ] 
  verbs: [ "get", "list", "watch" ] 
- nonResourceURLs: [ "/version/", "/version" ] 
  verbs: [ "get" ] 
# --------------------------------------------------------------------------- 
# feature: ocean/draining 
# --------------------------------------------------------------------------- 
- apiGroups: [""] 
  resources: ["nodes"] 
  verbs: ["patch", "update"] 
- apiGroups: [""] 
  resources: ["pods"] 
  verbs: ["delete"] 
- apiGroups: [""] 
  resources: ["pods/eviction"] 
  verbs: ["create"] 
# --------------------------------------------------------------------------- 
# feature: ocean/cleanup 
# --------------------------------------------------------------------------- 
- apiGroups: [""] 
  resources: ["nodes"] 
  verbs: ["delete"] 
# --------------------------------------------------------------------------- 
# feature: ocean/apply 
# --------------------------------------------------------------------------- 
- apiGroups: ["apps"] 
  resources: ["deployments", "daemonsets"] 
  verbs: ["get", "list", "patch", "update", "create", "delete"] 
- apiGroups: [""] 
  resources: ["pods"] 
  verbs: ["get", "list", "patch", "update", "create", "delete"] 
- apiGroups: ["batch"] 
  resources: ["jobs"] 
  verbs: ["get", "list", "patch", "update", "create", "delete"] 
# -------------------------------------------------------------------------- 
# feature: wave 
# --------------------------------------------------------------------------- 
- apiGroups: ["sparkoperator.k8s.io"] 
  resources: ["sparkapplications", "scheduledsparkapplications"] 
  verbs: ["get", "list", "watch", "patch", "update", "create", "delete"] 
- apiGroups: ["wave.spot.io"] 
  resources: ["sparkapplications", "wavecomponents", "waveenvironments"] 
  verbs: ["get", "list", "watch"] 
- apiGroups: ["bigdata.spot.io"] 
  resources: ["bigdataenvironments"] 
  verbs: ["get", "list", "watch", "patch", "update", "create", "delete"] 
# --------------------------------------------------------------------------- 
# feature: automatic right-sizing 
# --------------------------------------------------------------------------- 
- apiGroups: ["autoscaling.k8s.io"] 
  resources: ["verticalpodautoscalers", "verticalpodautoscalers/status"] 
  verbs: ["get", "list", "watch", "patch", "update", "create", "delete"] 
# --------------------------------------------------------------------------- 
# feature: controller/leader-election (high-availability) 
# --------------------------------------------------------------------------- 
- apiGroups: [ "coordination.k8s.io" ] 
  resources: [ "leases" ] 
  verbs: [ "get","list","patch","update","create","delete" ] 
# --------------------------------------------------------------------------- 
# feature: controller/report-events 
# --------------------------------------------------------------------------- 
- apiGroups: [ "" ] 
  resources: [ "events" ] 
  verbs: [ "create" ] 

```

## Auto Update RBAC 

When the Auto-Update feature is enabled (opt-out), an additional Role and ClusterRole are installed. These are required because the auto-update job runs helm upgrade on the Ocean Controller installation and requires get & patch verbs on all the Ocean Controller’s resources and its own resources. 

All the permissions are bound by the specific resourceName property, except for the permissions for the Secret resources, which is required to manage the helm releases. However, this permission is on the Role and thus restricted to secrets in the same namespace of the installation. 

All these permissions are optional, and you can opt out by disabling the auto-update feature. 

```yaml
# --------------------------------------------------------------------------- 
# Cluster Role 
# --------------------------------------------------------------------------- 
apiVersion: rbac.authorization.k8s.io/v1 
kind: ClusterRole 
metadata: 
  name: ocean-controller-auto-updater 
rules: 
# Auto Updater requires 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "clusterrolebindings" ] 
  resourceNames: [ ocean-controller-auto-updater ] 
  verbs: [ "get", "patch" ] 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "clusterroles" ] 
  resourceNames: [ ocean-controller-auto-updater ] 
  verbs: [ "get", "patch", "escalate", "bind" ] 

 # Controller requires 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "clusterroles" ] 
  verbs: [ "get", "patch", "escalate", "bind" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "clusterrolebindings" ] 
  verbs: [ "get", "patch" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
# --------------------------------------------------------------------------- 
# Role 
# ------ 
apiVersion: rbac.authorization.k8s.io/v1 
kind: Role 
metadata: 
  name: ocean-controller-auto-updater 
rules: 
# Auto Updater requires 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "rolebindings" ] 
  resourceNames: [ ocean-controller-auto-updater ] 
  verbs: [ "get", "patch" ] 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "roles" ] 
  resourceNames: [ ocean-controller-auto-updater ] 
  verbs: [ "get", "patch", "escalate", "bind" ] 
- apiGroups: [ "" ] 
  resources: [ "serviceaccounts" ] 
  resourceNames: [ ocean-controller-auto-updater ] 
  verbs: [ "get", "patch" ] 
# Helm Management (resource name not required because the name is dynamic) 
- apiGroups: [ "" ] 
  resources: [ "secrets" ] 
  verbs: [ "create", "get", "update", "list", "delete" ] 
# Required to monitor the deployments rollout after the upgrade 
# (resource name not required because the name is dynamic) 
- apiGroups: [ "apps" ] 
  resources: [ "replicasets" ] 
  verbs: [ "list", "watch" ] 
# Controller requires 
- apiGroups: [ "apps" ] 
  resources: [ "deployments" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
  verbs: [ "get", "patch" ] 
- apiGroups: [ "" ] 
  resources: [ "configmaps" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
  verbs: [ "get", "patch" ] 
- apiGroups: [ "" ] 
  resources: [ "secrets" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
  verbs: [ "get", "patch" ] 
- apiGroups: [ "" ] 
  resources: [ "serviceaccounts" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
  verbs: [ "get", "patch" ] 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "roles" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
  verbs: [ "get", "patch", "escalate", "bind" ] 
- apiGroups: [ "rbac.authorization.k8s.io" ] 
  resources: [ "rolebindings" ] 
  resourceNames: [ ocean-controller-ocean-kubernetes-controller ] 
  verbs: [ "get", "patch" ] 

```

## Cluster Role and Cluster Role Binding 

Some use cases require expanding the permissions granted to the Ocean Controller. For example, collecting Kubernetes Custom Resource Objects for cost analysis purposes.  

As CRDs extend the Kubernetes API, the Ocean Controller must be aware of the specific extension name to query and collect the relevant data. 

Adding permission rules directly into the spotinst-kubernetes-cluster-controller clusterRole will not persist when the controller-auto update feature is enabled. 

To persist the permission rules: 

1.  Add a new clusterRole object in the cluster that includes the additional permissions. The permissions must be expressed by their API groups, resource names, and verbs. 

2.  Add a clusterRoleBinding object to connect the new clusterRole and the Ocean Controller application.  

You can use the example below as a starting point. Use the YAML text as a template. 

**Example**:

In the example below, list and get permissions are given on CRD objects called customResource1 and customResource2 that belong to an API group called myCustomAPIGroupName.api.k8s.io. 

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
  name: spotinst-kubernetes-cluster-controller-extentions 
roleRef: 
  apiGroup: rbac.authorization.k8s.io 
  kind: ClusterRole 
  name: spotinst-kubernetes-cluster-controller-extentions 
subjects: 
- kind: ServiceAccount 
  name: ocean-controller-ocean-kubernetes-controller  
  namespace: spot-system 
```




