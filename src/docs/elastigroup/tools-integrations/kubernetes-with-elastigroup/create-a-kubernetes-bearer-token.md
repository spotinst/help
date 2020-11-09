# Create a Kubernetes Bearer Token

To create a service account token for the Spot Kubernetes integration, follow the steps below.

## Step 1: Create File with Token

Create a .yaml file with the Spot token as in the following example:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: spotinst
  namespace: default
secrets:
  - name: spotinst-secret
---
apiVersion: v1
kind: Secret
metadata:
  name: spotinst-secret
  annotations:
    kubernetes.io/service-account.name: spotinst
type: kubernetes.io/service-account-token
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: spotinst-role
rules:
  - apiGroups: [""]
    resources:
      [
        "pods",
        "nodes",
        "replicationcontrollers",
        "events",
        "limitranges",
        "services",
      ]
    verbs: ["get", "delete", "list", "patch", "update"]
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: spotinst-role-binding
roleRef:
  kind: ClusterRole
  name: spotinst-role
  apiGroup: rbac.authorization.k8s.io
subjects:
  - kind: ServiceAccount
    name: spotinst
    namespace: default
```

## Step 2: Run the Commands

Run the command `kubectl apply -f spotinst.yaml`. This command creates a Bearer token as a secret and associates it to a service account.
Run the command `kubectl describe secret spotinst-secret` to view the token and enter the token in the Token field under the Kubernetes Integration.

## To Delete the Bearer Token

To delete the token run the following command:

```sh
kubectl delete -f spotinst.yaml
```
