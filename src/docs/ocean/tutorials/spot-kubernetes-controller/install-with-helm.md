# Install with Helm

## For Helm Versions 2.\* and Earlier

1. Grant Tiller access to create resources in the `kube-system` namespace (see Tiller and Role-based Access Control):

```Shellscript
# Create a ServiceAccount for Tiller
$ kubectl create serviceaccount tiller \
--namespace=kube-system

# Create a ClusterRoleBinding
$ kubectl create clusterrolebinding tiller-cluster-rule \
--clusterrole=cluster-admin \
--serviceaccount=kube-system:tiller

# Patch Tiller's Deployment to use `tiller` service account
$ kubectl patch deployment tiller-deploy \
--namespace=kube-system \
--patch='{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}
```

2. Proceed with the instructions provided below for newer helm versions.

## For Helm Versions 3.0 and Later

1. Add Spot's Helm charts repository:

`$ helm repo add spotinst https://spotinst.github.io/spotinst-kubernetes-helm-charts`

2. Update information of available charts:

`$ helm repo update`

3. Install the Spot Kubernetes cluster controller:

```Shellscript
$ helm install spotinst*_controller spotinst*/spotinst-kubernetes-cluster-controller \
--set spotinst.token=[TOKEN] \
--set spotinst.account=[ACCOUNT_ID] \
--set spotinst.clusterIdentifier=[IDENTIFIER]
```

---

**Tip**: Configure all chart values using the `set` command line argument or a values.yaml file.

---

4. In case you want to upgrade the Spot controller's version:

```Shellscript
$ helm upgrade spotinst-kubernetes-cluster-controller spotinst/spotinst-kubernetes-cluster-controller \
--reuse-values \
--version <VERSION>
```

In order to discover the available Spot controller versions, use the following command:

```Shellscript
$ helm search spotinst/spotinst-kubernetes-cluster-controller \
--versions
```
