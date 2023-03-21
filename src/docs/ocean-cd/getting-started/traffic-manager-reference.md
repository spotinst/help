# Traffic Managers

Ocean CD enables you to choose from a number of supported traffic managers to configure in the RolloutSpec. This page shows template examples for the traffic managers that Ocean CD supports. For any option you choose, the YAML created is applied in the namespace chosen for the Spot deployment.

### ALB: Instance Level

```yaml
traffic:
  canaryService: rollouts-demo-canary
  stableService: rollouts-demo-stable
  alb:
    ingress: rollouts-demo-ingress
    servicePort: 80
    rootService: rollouts-demo-root
    stickinessConfig:
      enabled: true
      durationSeconds: 3600
    annotationPrefix: string
```

Whenever `rootService` is used, the value must not be the same as the `stableService` value.

### ALB: IP Level

```yaml
traffic:
  pingPong:
    pingService: rollouts-demo-canary
    pongService: rollouts-demo-stable
  alb:
    ingress: rollouts-demo-ingress
    servicePort: 80
    rootService: rollouts-demo-root
    stickinessConfig:
      enabled: true
      durationSeconds: 3600
    annotationPrefix: string     
```

Whenever `rootService` is used, the value must not be the same as the `stableService` value.

### Ambassador

```yaml
traffic:
  canaryService: rollouts-demo-canary
  stableService: rollouts-demo-stable
  ambassador:
    mappings:
    - echo
```

### Istio: Host Level

```yaml
traffic:
  canaryService: rollouts-demo-canary
  stableService: rollouts-demo-stable
  istio:
    virtualServices:
      - name: rollout-vsvc
        routes:
          - primary
```

### Istio: Subset Level

```yaml
traffic:
  stableService: rollouts-demo-stable
  istio:
    virtualServices:
    - name: rollout-vsvc
      routes:
      - primary
    destinationRule:
      name: rollout-destrule
      canarySubsetName: canary
      stableSubsetName: stable
```

### NGINX

```yaml
traffic:
  canaryService: rollouts-demo-stable
  stableService: rollouts-demo-canary
  nginx:
    stableIngress: rollouts-demo-ingress-nginx
    additionalIngressAnnotations:
      canary-by-header: X-Canary
      canary-by-header-value: iwantsit    
```

### SMI

```yaml
traffic:
  canaryService: rollouts-demo-canary
  stableService: rollouts-demo-stable
  smi:
    rootService: rollouts-demo-root
```

Whenever `rootService` is used, the value must not be the same as the `stableService` value.

### Without Traffic Manager  
If a traffic manager is not explicitly configured, Ocean CD by default uses Kubernetes traffic methods based on replicas.  

In this case, you have two options:  

* Add both service names (Canary and Stable) as shown in the template below.

```yaml
traffic:
 canaryService: rollouts-demo-canary
 stableService: rollouts-demo-stable
 ```

* Remove the traffic object entirely. Ocean CD pinpoints the relevant services by using labels.

In both options, the YAML created must be applied in the namespace chosen for the Spot deployment.

**Adding a traffic manager remains optional when using replica based method. If you want to configure the services only in your cluster, you can do so**.

## What’s Next?

Learn about [viewing the list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout page](ocean-cd/tutorials/view-rollouts/detailed-rollout).
