# Ocean Controller Version 2 History

## Chart Version [0.1.60] (v2.0.70) - 2025-04-06

### Added
* Updated the controller to use Go version 1.24.
* Added a FIPS-140 compliant image mode. Use `--set image.fips=true` to utilize a FIPS-140 compliant version of an image.
* Added `--set spotinst.insecureSkipTLSVerify` flag to disable TLS certificate validation.

### Removed
* Removed use of deprecated label `node-role.kubernetes.io/master`.
  
## Chart Version [0.1.59] (v2.0.69) - 2025-02-17

### Added
* Added support for an enhanced draining operation, allowing more graceful pod shutdowns.
  
## Chart Version [0.1.58] (v2.0.68) - 2025-01-02

### Added
* Added support for startup taints.

## Chart Version [0.1.57] (v2.0.67) - 2024-11-12

### Added
* Added the following permissions to the controller ClusterRole, required for the automatic rightsizing feature (opt-out with `--set spotinst.disableAutomaticRightSizing=true`):

    ```
    - apiGroups: ["apps"]
      resources: ["replicasets", "statefulsets"]
      verbs: ["patch", "update"]
    ```

## Chart Version [0.1.56] (v2.0.67) - 2024-10-31

### Added
* Support for OpenShift on AWS.
* Updated fluentbit sidecar to version `3.1.9`.

### Removed
* Legacy auto-update permissions from controller `ClusterRole`.


## Chart Version [0.1.56] (v2.0.66)- 2024-09-04

### Added
* Trim whitespace characters from `CLUSTER_IDENTIFIER`, `SPOTINST_TOKEN` and `SPOTINST_ACCOUNT` environment variables to prevent accidental misconfigurations.
* Report pod eviction failures due to `PodDisruptionBudget` violations during node drain process.

## Chart Version [0.1.55] (v2.0.65) - 2024-08-01

### Added
* Added Keep Alive mechanism to prevent hanging gRPC calls to the backend.

## Chart Version [0.1.50] (v2.0.64) - 2024-07-11

### Bug Fixes
* Fixed stale resources found in cache caused by intermittent network errors.

## Chart Version [0.1.49] (v2.0.63) - 2024-07-07

### Bug Fixes
* GCP - improved CSR approval mechanism.

## Chart Version [0.1.48] (v2.0.62) - 2024-07-07

### Bug Fixes
* Fixed Auto Update feature to accommodate long Helm release names.
* Updated the node configuration reconciler to match the behavior of Controller V1, ensuring configurations are applied a single time. This change permits users to append taints and labels subsequent to the initial reconciliation process without interference.

### Added
* Added mechanism for detecting stale cache resources (https://github.com/kubernetes/client-go/issues/571).

## Chart Version [0.1.45] (v2.0.59) - 2024-06-03

### Added
* Upgraded to Golang 1.22.
* Upgraded Kubernetes SDK to 1.30.
* Initial support for Azure - Support for interruption detection using `PreemptScheduled` events.

## Chart Version [0.1.44] (v2.0.58) - 2024-05-27

### Added
* Improved event pushing mechanism - we are now spliting events into chunks to avoid large gRPC messages.
* Improved controller heartbeat mechanism.
* Support `http` and `https` formats for the `base-url` key in the controller's configmap. Internally we are converting into `HOSTNAME:PORT` format for the gRPC client.

## Chart Version [0.1.43] (v2.0.57) - 2024-05-06

### Bug Fixes
* Fixed empty error log (added in `v2.0.56`).

## Chart Version [0.1.42] (v2.0.56) - 2024-05-06

### Bug Fixes
* Fixed controller not starting due to an error in the initial  preferred resource discovery process (added in `v2.0.55`).

## Chart Version [0.1.42] (v2.0.55) - 2024-05-05

### Added
* We are now using the same backend host as controller V1 - `api.spotinst.io`.

## Chart Version [0.1.41] (v2.0.54) - 2024-04-25

### Bug Fixes
* <p>
   Improved mechanism for getting resources to report to the backend. We now support older APIs of resources (for example: `autoscaling/v2beta2`, `node.k8s.io/v1beta1`, `policy/v1beta1`, etc.).
   </p>

    <p>
    Also, we now validate read permissions for each resource before initializing the informers.
    </p>

## Chart Version [0.1.40] (v2.0.53) - 2024-04-18

### Added
* Switched internal logger and adjusted log levels.
* Initial support for GCP - support CSR approval mechanism.

### Bug Fixes
* Sync process now runs immediately after a new leader is elected.

## Chart Version [0.1.32] (v2.0.52) - 2024-04-02

### Added
* Initial support for Azure - Added AKS Interruption handler.
* Upgraded Kubernetes SDK to version 1.29.
* Supported Kubernetes resource deletion for custom resources.

### Bug Fixes
* Leader Election process now waits for V1 controller pods to terminate before starting.

## Chart Version [0.1.32] (v2.0.51) - 2024-03-20

### Added
* When Controller V2 recognizes that Controller V1 is active in the same cluster it will remain in standby mode (not pushing events to the platform), until Controller V1 is terminated.
* Added delete Kubernetes resource capability.
* Added update Kubernetes Deployment capability.

## Chart Version [0.1.28] (v2.0.50) - 2024-03-17

### Security
* Updated base image to `gcr.io/distroless/static-debian12@sha256:aa09b5ebfd7181b30717b95a057557389135ac4df8aa78dd07ab8b50ca9954c6`

### Added
* Added Sync capability to make sure the controller's cache and the backend stay in sync.
* Added ability to patch Kubernetes sub-resources.
