# Update the Vertical Pod Autoscaler Project (VPA) 

1. Update your local Helm chart repository cache.

```sh
helm repo update
```

2. Run this command to update the `ocean-vpa change <ocean-vpa-release-name>` and `<existing-vpa-namespace>` fields according to your cluster.

```sh
helm upgrade --install --wait <ocean-vpa-release-name> spot/ocean-vpa \
--namespace <existing-vpa-namespace>
```

3. Update the `vpa crd` with the latest version.

```sh
kubectl apply -f https://raw.githubusercontent.com/spotinst/charts/refs/tags/main/charts/ocean-vpa/crds/vpa-crd.yaml
```



